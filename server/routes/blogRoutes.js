const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const { getMemoryStore, setMemoryStore, getDbStatus } = require("../db");
const { INITIAL_BLOGS } = require("../seedData");
const { requireAdmin, ADMIN_SECRET } = require("../middleware/auth");

// Helper to generate slug from title
function generateSlug(title) {
  return (
    title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-") +
    "-" +
    Math.random().toString(36).substring(2, 6)
  );
}

// Helper to estimate read time
function calculateReadTime(content) {
  if (!content) return "3 min read";
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

// ==========================================
// ADMIN AUTHENTICATION ENDPOINTS
// ==========================================

// POST /api/blogs/admin/login - Authenticate admin credentials
router.post("/admin/login", (req, res) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ success: false, error: "Password is required" });
  }

  if (password === ADMIN_SECRET) {
    return res.json({
      success: true,
      token: ADMIN_SECRET,
      message: "Admin authenticated successfully! You now have full CRUD access."
    });
  }

  return res.status(401).json({
    success: false,
    error: "Invalid admin password. Access denied."
  });
});

// GET /api/blogs/admin/verify - Verify current admin session token
router.get("/admin/verify", requireAdmin, (req, res) => {
  res.json({
    success: true,
    authenticated: true,
    message: "Admin session is valid"
  });
});

// ==========================================
// PUBLIC ENDPOINTS (Read & Like)
// ==========================================

// GET /api/blogs - Fetch all blogs (supports category filter & search)
router.get("/", async (req, res) => {
  try {
    const { category, search, sort = "newest" } = req.query;
    const dbStatus = getDbStatus();

    if (dbStatus.connected) {
      const query = { published: true };

      if (category && category !== "All") {
        query.category = category;
      }

      if (search && search.trim()) {
        const regex = new RegExp(search.trim(), "i");
        query.$or = [{ title: regex }, { excerpt: regex }, { tags: regex }];
      }

      let sortOption = { createdAt: -1 };
      if (sort === "popular") sortOption = { views: -1 };
      if (sort === "likes") sortOption = { likes: -1 };

      const blogs = await Blog.find(query).sort(sortOption).lean();
      return res.json({
        success: true,
        count: blogs.length,
        source: "MongoDB",
        blogs
      });
    }

    // In-memory fallback
    let blogs = [...getMemoryStore()];

    if (category && category !== "All") {
      blogs = blogs.filter(
        (b) => b.category && b.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (search && search.trim()) {
      const q = search.trim().toLowerCase();
      blogs = blogs.filter(
        (b) =>
          b.title?.toLowerCase().includes(q) ||
          b.excerpt?.toLowerCase().includes(q) ||
          (Array.isArray(b.tags) && b.tags.some((t) => t.toLowerCase().includes(q)))
      );
    }

    if (sort === "popular") {
      blogs.sort((a, b) => (b.views || 0) - (a.views || 0));
    } else if (sort === "likes") {
      blogs.sort((a, b) => (b.likes || 0) - (a.likes || 0));
    } else {
      blogs.sort(
        (a, b) =>
          new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
      );
    }

    return res.json({
      success: true,
      count: blogs.length,
      source: "In-Memory",
      blogs
    });
  } catch (err) {
    console.error("Error in GET /api/blogs:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/blogs/:id - Get single blog by ID or slug
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dbStatus = getDbStatus();

    if (dbStatus.connected) {
      let blog = null;
      if (id.match(/^[0-9a-fA-F]{24}$/)) {
        blog = await Blog.findByIdAndUpdate(id, { $inc: { views: 1 } }, { returnDocument: "after" });
      } else {
        blog = await Blog.findOneAndUpdate(
          { slug: id },
          { $inc: { views: 1 } },
          { returnDocument: "after" }
        );
      }

      if (!blog) {
        return res.status(404).json({ success: false, error: "Article not found" });
      }

      return res.json({ success: true, blog });
    }

    // In-memory fallback
    const store = getMemoryStore();
    const blog = store.find((b) => b._id === id || b.slug === id);
    if (!blog) {
      return res.status(404).json({ success: false, error: "Article not found" });
    }

    blog.views = (blog.views || 0) + 1;
    return res.json({ success: true, blog });
  } catch (err) {
    console.error("Error in GET /api/blogs/:id:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/blogs/:id/like - Public like action
router.post("/:id/like", async (req, res) => {
  try {
    const { id } = req.params;
    const dbStatus = getDbStatus();

    if (dbStatus.connected) {
      let blog = null;
      if (id.match(/^[0-9a-fA-F]{24}$/)) {
        blog = await Blog.findByIdAndUpdate(id, { $inc: { likes: 1 } }, { returnDocument: "after" });
      } else {
        blog = await Blog.findOneAndUpdate({ slug: id }, { $inc: { likes: 1 } }, { returnDocument: "after" });
      }
      return res.json({ success: true, likes: blog?.likes || 0 });
    }

    // In-memory fallback
    const store = getMemoryStore();
    const blog = store.find((b) => b._id === id || b.slug === id);
    if (blog) {
      blog.likes = (blog.likes || 0) + 1;
      return res.json({ success: true, likes: blog.likes });
    }
    return res.status(404).json({ success: false, error: "Article not found" });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// ==========================================
// ADMIN-ONLY ENDPOINTS (Create, Edit, Update, Delete)
// ==========================================

// POST /api/blogs - Create / Add a new blog article (ADMIN ONLY)
router.post("/", requireAdmin, async (req, res) => {
  try {
    const {
      title,
      excerpt,
      description,
      metaTitle,
      metaDescription,
      content,
      category = "Technical SEO",
      tags = [],
      readTime,
      coverImage,
      imageUrl,
      canonicalUrl,
      author,
      featured = false
    } = req.body;

    const finalExcerpt = (description || excerpt || "").trim();

    if (!title || !title.trim()) {
      return res.status(400).json({ success: false, error: "Title is required" });
    }
    if (!finalExcerpt) {
      return res.status(400).json({ success: false, error: "Description/Excerpt is required" });
    }
    if (!content || !content.trim()) {
      return res.status(400).json({ success: false, error: "Content is required" });
    }

    const calculatedReadTime = readTime || calculateReadTime(content);
    const slug = req.body.slug || generateSlug(title);
    const finalImage = imageUrl || coverImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80";

    const newArticleData = {
      title: title.trim(),
      slug,
      excerpt: finalExcerpt,
      description: finalExcerpt,
      metaTitle: metaTitle ? metaTitle.trim() : title.trim(),
      metaDescription: metaDescription ? metaDescription.trim() : finalExcerpt,
      canonicalUrl: canonicalUrl ? canonicalUrl.trim() : `/viewblog/${slug}`,
      content: content.trim(),
      category: category || "Technical SEO",
      tags: Array.isArray(tags)
        ? tags
        : typeof tags === "string"
        ? tags.split(",").map((t) => t.trim()).filter(Boolean)
        : [],
      readTime: calculatedReadTime,
      coverImage: finalImage,
      imageUrl: finalImage,
      author: {
        name: author?.name || "Muskan Shekh",
        role: author?.role || "Digital Marketing & SEO Specialist",
        avatar:
          author?.avatar ||
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80"
      },
      views: 1,
      likes: 0,
      featured: Boolean(featured),
      published: true
    };

    const dbStatus = getDbStatus();
    if (dbStatus.connected) {
      const createdBlog = await Blog.create(newArticleData);
      return res.status(201).json({
        success: true,
        message: "Article published successfully to MongoDB!",
        blog: createdBlog
      });
    }

    // In-memory fallback
    const store = getMemoryStore();
    const createdBlog = {
      _id: "mem_" + Date.now() + "_" + Math.random().toString(36).substr(2, 6),
      ...newArticleData,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    setMemoryStore([createdBlog, ...store]);

    return res.status(201).json({
      success: true,
      message: "Article published successfully (In-Memory)!",
      blog: createdBlog
    });
  } catch (err) {
    console.error("Error in POST /api/blogs:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

// PUT /api/blogs/:id - Edit / Update an existing blog article (ADMIN ONLY)
router.put("/:id", requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      excerpt,
      description,
      metaTitle,
      metaDescription,
      content,
      category,
      tags,
      readTime,
      coverImage,
      imageUrl,
      canonicalUrl,
      author,
      featured
    } = req.body;

    const dbStatus = getDbStatus();

    const updatePayload = {};
    if (title !== undefined) updatePayload.title = title.trim();
    if (metaTitle !== undefined) updatePayload.metaTitle = metaTitle.trim();
    if (metaDescription !== undefined) updatePayload.metaDescription = metaDescription.trim();
    if (description !== undefined) {
      updatePayload.description = description.trim();
      updatePayload.excerpt = description.trim();
    } else if (excerpt !== undefined) {
      updatePayload.excerpt = excerpt.trim();
      updatePayload.description = excerpt.trim();
    }
    if (imageUrl !== undefined) {
      updatePayload.imageUrl = imageUrl.trim();
      updatePayload.coverImage = imageUrl.trim();
    } else if (coverImage !== undefined) {
      updatePayload.coverImage = coverImage.trim();
      updatePayload.imageUrl = coverImage.trim();
    }
    if (canonicalUrl !== undefined) {
      updatePayload.canonicalUrl = canonicalUrl.trim();
    }
    if (content !== undefined) {
      updatePayload.content = content.trim();
      if (!readTime) {
        updatePayload.readTime = calculateReadTime(content);
      }
    }
    if (readTime !== undefined) updatePayload.readTime = readTime;
    if (category !== undefined) updatePayload.category = category;
    if (featured !== undefined) updatePayload.featured = Boolean(featured);
    if (author !== undefined) updatePayload.author = author;

    if (tags !== undefined) {
      updatePayload.tags = Array.isArray(tags)
        ? tags
        : typeof tags === "string"
        ? tags.split(",").map((t) => t.trim()).filter(Boolean)
        : [];
    }

    updatePayload.updatedAt = new Date();

    if (dbStatus.connected) {
      let updatedBlog = null;
      if (id.match(/^[0-9a-fA-F]{24}$/)) {
        updatedBlog = await Blog.findByIdAndUpdate(id, updatePayload, {
          returnDocument: "after",
          runValidators: true
        });
      } else {
        updatedBlog = await Blog.findOneAndUpdate(
          { slug: id },
          updatePayload,
          { returnDocument: "after", runValidators: true }
        );
      }

      if (!updatedBlog) {
        return res.status(404).json({ success: false, error: "Article not found to update" });
      }

      return res.json({
        success: true,
        message: "Article updated successfully in MongoDB!",
        blog: updatedBlog
      });
    }

    // In-memory fallback
    const store = getMemoryStore();
    const index = store.findIndex((b) => b._id === id || b.slug === id);
    if (index === -1) {
      return res.status(404).json({ success: false, error: "Article not found to update" });
    }

    const updatedBlog = {
      ...store[index],
      ...updatePayload
    };
    store[index] = updatedBlog;
    setMemoryStore([...store]);

    return res.json({
      success: true,
      message: "Article updated successfully (In-Memory)!",
      blog: updatedBlog
    });
  } catch (err) {
    console.error("Error in PUT /api/blogs/:id:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

// DELETE /api/blogs/:id - Delete a blog article (ADMIN ONLY)
router.delete("/:id", requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const dbStatus = getDbStatus();

    if (dbStatus.connected) {
      let deleted = null;
      if (id.match(/^[0-9a-fA-F]{24}$/)) {
        deleted = await Blog.findByIdAndDelete(id);
      } else {
        deleted = await Blog.findOneAndDelete({ slug: id });
      }

      if (!deleted) {
        return res.status(404).json({ success: false, error: "Article not found to delete" });
      }

      return res.json({
        success: true,
        message: "Article deleted successfully from MongoDB!",
        id: deleted._id
      });
    }

    // In-memory fallback
    const store = getMemoryStore();
    const exists = store.some((b) => b._id === id || b.slug === id);
    if (!exists) {
      return res.status(404).json({ success: false, error: "Article not found to delete" });
    }

    const filtered = store.filter((b) => b._id !== id && b.slug !== id);
    setMemoryStore(filtered);

    return res.json({
      success: true,
      message: "Article deleted successfully (In-Memory)!",
      id
    });
  } catch (err) {
    console.error("Error in DELETE /api/blogs/:id:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/blogs/seed/reset - Reset articles back to original seed data (ADMIN ONLY)
router.post("/seed/reset", requireAdmin, async (req, res) => {
  try {
    const dbStatus = getDbStatus();
    if (dbStatus.connected) {
      await Blog.deleteMany({});
      const seeded = await Blog.insertMany(INITIAL_BLOGS);
      return res.json({
        success: true,
        message: `Reset database with ${seeded.length} original articles!`,
        count: seeded.length
      });
    }

    setMemoryStore(
      INITIAL_BLOGS.map((item, index) => ({
        _id: "mem_" + (index + 1) + "_" + Math.random().toString(36).substr(2, 9),
        ...item,
        createdAt: item.createdAt || new Date(),
        updatedAt: new Date()
      }))
    );

    return res.json({
      success: true,
      message: `Reset in-memory store with ${INITIAL_BLOGS.length} original articles!`,
      count: INITIAL_BLOGS.length
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;

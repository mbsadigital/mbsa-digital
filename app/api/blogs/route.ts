import { NextRequest, NextResponse } from "next/server";
import { FALLBACK_BLOGS, BlogPost } from "@/lib/fallbackBlogs";

const EXPRESS_API_URL = process.env.EXPRESS_API_URL || "http://127.0.0.1:5000/api/blogs";
const ADMIN_SECRET = process.env.ADMIN_SECRET_KEY || "admin123";

// Module-level in-memory cache for fallback when Express is not running
let localBlogs: BlogPost[] = [...FALLBACK_BLOGS];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  const sort = searchParams.get("sort") || "newest";

  // Try proxying to Express backend first
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1200);

    const expressRes = await fetch(`${EXPRESS_API_URL}?${searchParams.toString()}`, {
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      cache: "no-store",
    });

    clearTimeout(timeoutId);

    if (expressRes.ok) {
      const data = await expressRes.json();
      return NextResponse.json(data);
    }
  } catch {
    // Express backend not yet running, continue with Next.js fallback
  }

  // Next.js Fallback Store
  let results = [...localBlogs];

  if (category && category !== "All") {
    results = results.filter(
      (b) => b.category?.toLowerCase() === category.toLowerCase()
    );
  }

  if (search && search.trim()) {
    const q = search.trim().toLowerCase();
    results = results.filter(
      (b) =>
        b.title?.toLowerCase().includes(q) ||
        b.excerpt?.toLowerCase().includes(q) ||
        b.tags?.some((t) => t.toLowerCase().includes(q))
    );
  }

  if (sort === "popular") {
    results.sort((a, b) => (b.views || 0) - (a.views || 0));
  } else if (sort === "likes") {
    results.sort((a, b) => (b.likes || 0) - (a.likes || 0));
  } else {
    results.sort(
      (a, b) =>
        new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
    );
  }

  return NextResponse.json({
    success: true,
    count: results.length,
    source: "Next.js Built-in Store",
    blogs: results,
  });
}

export async function POST(request: NextRequest) {
  // Check Admin Authorization
  const adminKey = request.headers.get("x-admin-key") ||
    request.headers.get("authorization")?.replace("Bearer ", "");

  if (!adminKey || adminKey !== ADMIN_SECRET) {
    return NextResponse.json(
      {
        success: false,
        error: "Unauthorized: Admin privileges required to publish new articles.",
      },
      { status: 401 }
    );
  }

  const body = await request.json();

  // Try proxying to Express backend first
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1200);

    const expressRes = await fetch(EXPRESS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-key": adminKey,
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (expressRes.ok) {
      const data = await expressRes.json();
      return NextResponse.json(data, { status: 201 });
    }
  } catch {
    // Continue with fallback
  }

  // Fallback in-memory creation
  const {
    title,
    excerpt,
    description,
    metaTitle,
    metaDescription,
    content,
    category = "Technical SEO",
    tags = [],
    coverImage,
    imageUrl,
    canonicalUrl,
    author,
    featured
  } = body;
  
  const finalExcerpt = (description || excerpt || "").trim();

  if (!title || !finalExcerpt || !content) {
    return NextResponse.json(
      { success: false, error: "Title, description/excerpt, and content are required." },
      { status: 400 }
    );
  }

  const words = content.trim().split(/\s+/).length;
  const readTime = `${Math.max(1, Math.ceil(words / 200))} min read`;
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") + "-" + Date.now().toString(36);
  const finalImage = imageUrl || coverImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80";

  const newPost: BlogPost = {
    _id: "post_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
    title: title.trim(),
    slug,
    excerpt: finalExcerpt,
    description: finalExcerpt,
    metaTitle: metaTitle ? metaTitle.trim() : title.trim(),
    metaDescription: metaDescription ? metaDescription.trim() : finalExcerpt,
    imageUrl: finalImage,
    canonicalUrl: canonicalUrl ? canonicalUrl.trim() : `/viewblog/${slug}`,
    content: content.trim(),
    category,
    tags: Array.isArray(tags) ? tags : typeof tags === "string" ? tags.split(",").map((s: string) => s.trim()) : [],
    readTime: body.readTime || readTime,
    coverImage: finalImage,
    author: {
      name: author?.name || "Muskan Shekh",
      role: author?.role || "Digital Marketing & SEO Specialist",
      avatar: author?.avatar || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80",
    },
    views: 1,
    likes: 0,
    featured: Boolean(featured),
    published: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  localBlogs = [newPost, ...localBlogs];

  return NextResponse.json(
    {
      success: true,
      message: "Article published successfully!",
      blog: newPost,
    },
    { status: 201 }
  );
}

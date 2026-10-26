const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"]
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    excerpt: {
      type: String,
      required: [true, "Excerpt is required"],
      trim: true,
      maxlength: [400, "Excerpt cannot exceed 400 characters"]
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, "Description cannot exceed 500 characters"]
    },
    metaTitle: {
      type: String,
      trim: true,
      maxlength: [120, "Meta Title cannot exceed 120 characters"]
    },
    metaDescription: {
      type: String,
      trim: true,
      maxlength: [320, "Meta Description cannot exceed 320 characters"]
    },
    imageUrl: {
      type: String,
      default: ""
    },
    canonicalUrl: {
      type: String,
      trim: true
    },
    content: {
      type: String,
      required: [true, "Content is required"]
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "Technical SEO",
        "Paid Advertising",
        "Content Strategy",
        "CRO & Analytics",
        "AI & Automations",
        "General Growth"
      ],
      default: "Technical SEO"
    },
    tags: {
      type: [String],
      default: []
    },
    readTime: {
      type: String,
      default: "5 min read"
    },
    coverImage: {
      type: String,
      default: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    },
    author: {
      name: {
        type: String,
        default: "Muskan Shekh"
      },
      role: {
        type: String,
        default: "Digital Marketing & SEO Specialist"
      },
      avatar: {
        type: String,
        default: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80"
      }
    },
    views: {
      type: Number,
      default: 0
    },
    likes: {
      type: Number,
      default: 0
    },
    featured: {
      type: Boolean,
      default: false
    },
    published: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

// Virtual / index for fast search queries
blogSchema.index({ title: "text", excerpt: "text", tags: "text" });

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

module.exports = Blog;

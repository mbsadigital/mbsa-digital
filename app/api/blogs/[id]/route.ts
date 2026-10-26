import { NextRequest, NextResponse } from "next/server";
import { FALLBACK_BLOGS, BlogPost } from "@/lib/fallbackBlogs";

const EXPRESS_API_URL = process.env.EXPRESS_API_URL || "http://127.0.0.1:5000/api/blogs";
const ADMIN_SECRET = process.env.ADMIN_SECRET_KEY || "admin123";

let localBlogs: BlogPost[] = [...FALLBACK_BLOGS];

// GET /api/blogs/:id
export async function GET(
  request: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  const { id } = await props.params;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1200);

    const expressRes = await fetch(`${EXPRESS_API_URL}/${id}`, {
      signal: controller.signal,
      cache: "no-store",
    });

    clearTimeout(timeoutId);

    if (expressRes.ok) {
      const data = await expressRes.json();
      return NextResponse.json(data);
    }
  } catch {
    // Continue with fallback
  }

  const blog = localBlogs.find((b) => b._id === id || b.slug === id);
  if (!blog) {
    return NextResponse.json({ success: false, error: "Article not found" }, { status: 404 });
  }

  blog.views = (blog.views || 0) + 1;
  return NextResponse.json({ success: true, blog });
}

// PUT /api/blogs/:id - Update / Edit (ADMIN ONLY)
export async function PUT(
  request: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  const { id } = await props.params;

  // Check Admin Authorization
  const adminKey = request.headers.get("x-admin-key") ||
    request.headers.get("authorization")?.replace("Bearer ", "");

  if (!adminKey || adminKey !== ADMIN_SECRET) {
    return NextResponse.json(
      {
        success: false,
        error: "Unauthorized: Admin privileges required to update articles.",
      },
      { status: 401 }
    );
  }

  const body = await request.json();

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1200);

    const expressRes = await fetch(`${EXPRESS_API_URL}/${id}`, {
      method: "PUT",
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
      return NextResponse.json(data);
    }
  } catch {
    // Continue with fallback
  }

  const index = localBlogs.findIndex((b) => b._id === id || b.slug === id);
  if (index === -1) {
    return NextResponse.json({ success: false, error: "Article not found" }, { status: 404 });
  }

  const updated: BlogPost = {
    ...localBlogs[index],
    ...body,
    ...(body.description ? { excerpt: body.description, description: body.description } : {}),
    ...(body.excerpt && !body.description ? { excerpt: body.excerpt, description: body.excerpt } : {}),
    ...(body.imageUrl ? { coverImage: body.imageUrl, imageUrl: body.imageUrl } : {}),
    ...(body.coverImage && !body.imageUrl ? { coverImage: body.coverImage, imageUrl: body.coverImage } : {}),
    ...(body.canonicalUrl ? { canonicalUrl: body.canonicalUrl } : {}),
    updatedAt: new Date().toISOString(),
  };
  localBlogs[index] = updated;

  return NextResponse.json({
    success: true,
    message: "Article updated successfully!",
    blog: updated,
  });
}

// DELETE /api/blogs/:id - Delete (ADMIN ONLY)
export async function DELETE(
  request: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  const { id } = await props.params;

  // Check Admin Authorization
  const adminKey = request.headers.get("x-admin-key") ||
    request.headers.get("authorization")?.replace("Bearer ", "");

  if (!adminKey || adminKey !== ADMIN_SECRET) {
    return NextResponse.json(
      {
        success: false,
        error: "Unauthorized: Admin privileges required to delete articles.",
      },
      { status: 401 }
    );
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1200);

    const expressRes = await fetch(`${EXPRESS_API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-admin-key": adminKey,
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (expressRes.ok) {
      const data = await expressRes.json();
      return NextResponse.json(data);
    }
  } catch {
    // Continue with fallback
  }

  const exists = localBlogs.some((b) => b._id === id || b.slug === id);
  if (!exists) {
    return NextResponse.json({ success: false, error: "Article not found" }, { status: 404 });
  }

  localBlogs = localBlogs.filter((b) => b._id !== id && b.slug !== id);

  return NextResponse.json({
    success: true,
    message: "Article deleted successfully!",
    id,
  });
}

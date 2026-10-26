import { NextRequest, NextResponse } from "next/server";
import { FALLBACK_BLOGS } from "@/lib/fallbackBlogs";

const EXPRESS_API_URL = process.env.EXPRESS_API_URL || "http://127.0.0.1:5000/api/blogs";

export async function POST(
  request: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  const { id } = await props.params;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1200);

    const expressRes = await fetch(`${EXPRESS_API_URL}/${id}/like`, {
      method: "POST",
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

  const blog = FALLBACK_BLOGS.find((b) => b._id === id || b.slug === id);
  if (blog) {
    blog.likes = (blog.likes || 0) + 1;
    return NextResponse.json({ success: true, likes: blog.likes });
  }

  return NextResponse.json({ success: false, error: "Article not found" }, { status: 404 });
}

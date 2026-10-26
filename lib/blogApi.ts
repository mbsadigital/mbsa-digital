import { BlogPost } from "./fallbackBlogs";

const API_BASE = "/api/blogs";
const ADMIN_STORAGE_KEY = "digital_portfolio_admin_token";

export interface BlogFilterOptions {
  category?: string;
  search?: string;
  sort?: "newest" | "popular" | "likes";
}

export interface BlogFormData {
  title: string;
  excerpt: string;
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
  imageUrl?: string;
  canonicalUrl?: string;
  content: string;
  category: string;
  tags: string[];
  readTime?: string;
  coverImage?: string;
  featured?: boolean;
}

// Check stored admin token
export function getStoredAdminToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(ADMIN_STORAGE_KEY);
}

export function saveAdminToken(token: string): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(ADMIN_STORAGE_KEY, token);
    window.dispatchEvent(new Event("admin-auth-change"));
  }
}

export function removeAdminToken(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(ADMIN_STORAGE_KEY);
    window.dispatchEvent(new Event("admin-auth-change"));
  }
}

// Fetch list of blogs with filters
export async function fetchBlogs(options: BlogFilterOptions = {}): Promise<{
  blogs: BlogPost[];
  source?: string;
  count: number;
}> {
  const params = new URLSearchParams();
  if (options.category && options.category !== "All") {
    params.set("category", options.category);
  }
  if (options.search && options.search.trim()) {
    params.set("search", options.search.trim());
  }
  if (options.sort) {
    params.set("sort", options.sort);
  }

  const queryStr = params.toString() ? `?${params.toString()}` : "";
  const res = await fetch(`${API_BASE}${queryStr}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch blogs: ${res.statusText}`);
  }

  const data = await res.json();
  return {
    blogs: data.blogs || [],
    source: data.source,
    count: data.count || 0,
  };
}

// Fetch single blog by ID or slug
export async function fetchBlogById(id: string): Promise<BlogPost> {
  const res = await fetch(`${API_BASE}/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Article not found: ${res.statusText}`);
  }

  const data = await res.json();
  return data.blog;
}

// Public: Like an article
export async function likeBlog(id: string): Promise<number> {
  const res = await fetch(`${API_BASE}/${id}/like`, {
    method: "POST",
  });

  if (!res.ok) {
    throw new Error("Failed to like article");
  }

  const data = await res.json();
  return data.likes;
}

// Admin: Authenticate
export async function loginAdmin(password: string): Promise<{ success: boolean; token: string }> {
  const res = await fetch(`${API_BASE}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || "Authentication failed");
  }

  saveAdminToken(data.token);
  return { success: true, token: data.token };
}

// Admin: Create article (Add)
export async function createBlog(
  formData: BlogFormData,
  token?: string
): Promise<BlogPost> {
  const activeToken = token || getStoredAdminToken();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (activeToken) {
    headers["x-admin-key"] = activeToken;
    headers["Authorization"] = `Bearer ${activeToken}`;
  }

  const res = await fetch(API_BASE, {
    method: "POST",
    headers,
    body: JSON.stringify(formData),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || "Failed to create article");
  }

  return data.blog;
}

// Admin: Update article (Edit / Update)
export async function updateBlog(
  id: string,
  formData: Partial<BlogFormData>,
  token?: string
): Promise<BlogPost> {
  const activeToken = token || getStoredAdminToken();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (activeToken) {
    headers["x-admin-key"] = activeToken;
    headers["Authorization"] = `Bearer ${activeToken}`;
  }

  const res = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(formData),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || "Failed to update article");
  }

  return data.blog;
}

// Admin: Delete article (Delete)
export async function deleteBlog(id: string, token?: string): Promise<void> {
  const activeToken = token || getStoredAdminToken();
  const headers: Record<string, string> = {};
  if (activeToken) {
    headers["x-admin-key"] = activeToken;
    headers["Authorization"] = `Bearer ${activeToken}`;
  }

  const res = await fetch(`${API_BASE}/${id}`, {
    method: "DELETE",
    headers,
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || "Failed to delete article");
  }
}

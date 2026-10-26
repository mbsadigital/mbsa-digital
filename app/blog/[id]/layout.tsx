import React from "react";
import type { Metadata } from "next";
import {
  constructMetadata,
  getBlogPostJsonLd,
  getBreadcrumbJsonLd,
} from "@/lib/seo";
import { FALLBACK_BLOGS, type BlogPost } from "@/lib/fallbackBlogs";

type Props = {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
};

// Helper to resolve blog data from fallback or slug match
function findBlog(id: string): BlogPost {
  const match = FALLBACK_BLOGS.find(
    (b) => b._id === id || b.slug === id
  );
  return (
    match || {
      _id: id,
      title: "Digital Marketing & Technical SEO Guide",
      slug: id,
      excerpt:
        "Comprehensive insights into technical SEO audits, AI search citation optimization, and data-driven digital growth.",
      content: "",
      category: "Technical SEO",
      tags: ["SEO", "Growth", "Marketing"],
      readTime: "5 min read",
      coverImage: "/muskan_hero_portrait_1789726780075.jpg",
      author: {
        name: "Muskan Shekh",
        role: "Digital Marketing & SEO Specialist",
        avatar: "/muskan-portrait.jpg",
      },
      views: 120,
      likes: 15,
      featured: false,
      published: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const blog = findBlog(id);

  return constructMetadata({
    title: `${blog.title} | Muskan Shekh Blog`,
    description: blog.excerpt,
    path: `/blog/${blog.slug || blog._id}`,
    image: blog.coverImage,
    keywords: blog.tags,
  });
}

export default async function BlogDetailLayout({
  params,
  children,
}: Props) {
  const { id } = await params;
  const blog = findBlog(id);

  const blogPostJsonLd = getBlogPostJsonLd(blog);
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: blog.title, path: `/blog/${blog.slug || blog._id}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}

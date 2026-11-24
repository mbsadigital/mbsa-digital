import React from "react";
import type { Metadata } from "next";
import {
  constructMetadata,
  getBlogPostJsonLd,
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
    title: blog.metaTitle || `${blog.title} | MBSA Digital Blog`,
    description: blog.metaDescription || blog.excerpt,
    path: `/blog/${blog.slug || blog._id}`,
    image: blog.coverImage || blog.imageUrl,
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostJsonLd) }}
      />
      {children}
    </>
  );
}

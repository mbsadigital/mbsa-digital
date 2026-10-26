import React from "react";
import type { Metadata } from "next";
import {
  constructMetadata,
  getBlogCollectionJsonLd,
  getBreadcrumbJsonLd,
} from "@/lib/seo";
import { FALLBACK_BLOGS } from "@/lib/fallbackBlogs";

export const metadata: Metadata = constructMetadata({
  title: "Digital Marketing & Technical SEO Insights | Muskan Shekh Blog",
  description:
    "Explore in-depth articles covering 2026 Technical SEO blueprints, AI search optimization (AEO/GEO), Core Web Vitals engineering, GA4 attribution modeling, and full-funnel digital growth.",
  path: "/blog",
  keywords: [
    "Technical SEO Blueprint",
    "AI Search Optimization AEO",
    "Generative Engine Optimization GEO",
    "Core Web Vitals Guide",
    "GA4 Attribution Modeling",
    "Digital Marketing Case Studies",
  ],
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const blogJsonLd = getBlogCollectionJsonLd(FALLBACK_BLOGS);
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}

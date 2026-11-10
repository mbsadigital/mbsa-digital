import React from "react";
import type { Metadata } from "next";
import {
  constructMetadata,
  getBlogCollectionJsonLd,
} from "@/lib/seo";
import { FALLBACK_BLOGS } from "@/lib/fallbackBlogs";

export const metadata: Metadata = constructMetadata({
  title: "SEO Blog: Guides on AI Search, Ads & GA4 | MBSA Digital",
  description:
    "Plain-English guides on SEO, AI search, Google Ads, websites and GA4, written by MBSA Digital specialists and updated when things change. Explore our blog.",
  path: "/blog",
  keywords: [
    "SEO blog",
    "AEO GEO guide",
    "local SEO tips",
    "GA4 guide",
    "SEO guides for small business",
    "generative engine optimization",
    "Google Ads insights",
  ],
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const blogJsonLd = getBlogCollectionJsonLd(FALLBACK_BLOGS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      {children}
    </>
  );
}

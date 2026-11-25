import React from "react";
import ShowBlog from "@/components/ShowBlog";
import { getBlogCollectionJsonLd } from "@/lib/seo";
import { FALLBACK_BLOGS } from "@/lib/fallbackBlogs";

export default function BlogHubPage() {
  const blogJsonLd = getBlogCollectionJsonLd(FALLBACK_BLOGS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <ShowBlog />
    </>
  );
}

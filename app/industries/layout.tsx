import React from "react";
import type { Metadata } from "next";
import { constructMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Industries We Serve | Trust & Local Visibility Architecture",
  description:
    "Experience where trust and local visibility matter most. Tailored technical SEO and growth strategies for Healthcare & Pharmacy, Health & Wellness, E-commerce, and Local Services.",
  path: "/industries",
  keywords: [
    "Healthcare SEO",
    "Pharmacy Local Visibility",
    "Health Beauty and Wellness Marketing",
    "E-commerce D2C Brand SEO",
    "Local Professional Services SEO",
    "Google Map Pack Optimization",
  ],
});

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}


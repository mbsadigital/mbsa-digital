import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "SEO & AI Search Blog: Guides & Insights | MBSA Digital",
  description:
    "SEO, AI search, local SEO, ecommerce and GA4 from MBSA Digital, with practical checklists and steps you can put to work straight away.",
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
  return <>{children}</>;
}

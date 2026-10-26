import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Create Article | Editorial Portal",
  description: "Private editorial publishing interface for marketing articles and SEO blueprints.",
  path: "/blog/create",
  noIndex: true,
});

export default function BlogCreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import React from "react";
import type { Metadata } from "next";
import { constructMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Industries We Serve | High-Trust Growth & SEO | MBSA Digital",
  description:
    "Explore the specialized industries served by MBSA Digital — from Healthcare, Pharmacy, and Wellness to E-Commerce, D2C Brands, and Local Professional Services. Data-driven growth and SEO engineered for high-trust niches.",
  path: "/industries",
  keywords: [
    "Industries we serve",
    "Healthcare SEO",
    "Pharmacy digital marketing",
    "E-commerce SEO agency",
    "D2C growth marketing",
    "Local business SEO",
    "Wellness clinic marketing",
    "B2B digital marketing agency",
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

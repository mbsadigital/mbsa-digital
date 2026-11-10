import React from "react";
import type { Metadata } from "next";
import { constructMetadata, getIndustriesGraphJsonLd } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Digital Marketing by Industry: Healthcare to D2C | MBSA",
  description:
    "SEO and digital marketing for healthcare and pharmacy, beauty and wellness, ecommerce and D2C, and local services, shaped around how every sector searches.",
  path: "/industries",
  keywords: [
    "digital marketing by industry",
    "digital marketing for healthcare",
    "healthcare SEO",
    "pharmacy SEO",
    "beauty brand SEO",
    "ecommerce SEO services",
    "local business SEO",
    "Shopify SEO",
  ],
});

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const industriesGraphJsonLd = getIndustriesGraphJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesGraphJsonLd) }}
      />
      {children}
    </>
  );
}

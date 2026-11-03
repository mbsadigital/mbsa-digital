import React from "react";
import type { Metadata } from "next";
import { constructMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Insights on Search, Websites & Measurement | MBSA Digital",
  description:
    "Practical guides for business owners and marketing managers on SEO, GEO/AEO, websites, paid media, and GA4 measurement. Written and reviewed by specialist practitioners.",
  path: "/insights",
  keywords: [
    "Insights on search",
    "Generative Engine Optimisation GEO",
    "AEO and GEO Guide",
    "Technical SEO checklist",
    "Local SEO guides",
    "Web design conversion",
    "GA4 setup checklist",
  ],
});

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
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


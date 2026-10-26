import React from "react";
import type { Metadata } from "next";
import {
  constructMetadata,
  getProjectsCollectionJsonLd,
  getBreadcrumbJsonLd,
} from "@/lib/seo";
import { PROJECTS_DATA_FULL } from "@/lib/projectsData";

export const metadata: Metadata = constructMetadata({
  title: "Case Studies & SEO Growth Proof | Muskan Shekh Portfolio",
  description:
    "Explore verified client case studies featuring Google Search Console clicks, GA4 conversion attribution, and Google Business Profile 3-Pack rankings.",
  path: "/projects",
  keywords: [
    "SEO Case Studies",
    "Digital Marketing Portfolio",
    "Google Search Console Proof",
    "Local SEO 3-Pack Rankings",
    "Harris Pharmacy Case Study",
    "London Healthcare SEO",
  ],
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collectionJsonLd = getProjectsCollectionJsonLd(PROJECTS_DATA_FULL);
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}

import React from "react";
import type { Metadata } from "next";
import {
  constructMetadata,
  getProjectsCollectionJsonLd,
} from "@/lib/seo";
import { PROJECTS_DATA_FULL } from "@/lib/projectsData";

export const metadata: Metadata = constructMetadata({
  title: "Portfolio: SEO & Marketing Case Studies by MBSA Digital",
  description:
    "Browse MBSA Digital case studies in SEO, local search, websites, ads and social. Every result shows its baseline, timeframe and data source. View our work.",
  path: "/projects",
  keywords: [
    "SEO case studies",
    "digital marketing portfolio",
    "digital marketing case studies",
    "website design portfolio",
    "local SEO case study",
    "MBSA Digital client results",
  ],
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collectionJsonLd = getProjectsCollectionJsonLd(PROJECTS_DATA_FULL);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      {children}
    </>
  );
}

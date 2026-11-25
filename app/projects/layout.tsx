import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "SEO & Digital Marketing Case Studies | MBSA Digital",
  description:
    "Browse MBSA Digital case studies in SEO, local search, websites, paid ads and social media, each showing the timeframe and data source behind the results.",
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
  return <>{children}</>;
}

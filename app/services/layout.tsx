import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Digital Marketing & SEO Services | MBSA Digital",
  description:
    "Explore 25 digital marketing services from MBSA Digital: SEO, AI search, Google and Meta Ads, social media, websites, analytics and CRO. Pick one or a plan.",
  path: "/services",
  keywords: [
    "digital marketing services",
    "digital marketing agency services",
    "SEO and PPC services",
    "online marketing services",
    "full service digital marketing agency",
    "AI search optimization",
    "Google Ads management",
    "conversion rate optimisation",
  ],
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

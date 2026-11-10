import React from "react";
import type { Metadata } from "next";
import {
  constructMetadata,
  getServicesCollectionJsonLd,
  getBreadcrumbJsonLd,
} from "@/lib/seo";
import { SERVICES_DATA } from "@/lib/servicesData";

export const metadata: Metadata = constructMetadata({
  title: "Digital Marketing Services: SEO, AI, Ads | MBSA Digital",
  description:
    "Explore 25 digital marketing services from MBSA Digital: SEO, AI search, Google and Meta Ads, social, websites, analytics and CRO. Pick one or a full plan.",
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
  const collectionJsonLd = getServicesCollectionJsonLd(SERVICES_DATA);

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

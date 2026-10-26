import React from "react";
import type { Metadata } from "next";
import {
  constructMetadata,
  getServicesCollectionJsonLd,
  getBreadcrumbJsonLd,
} from "@/lib/seo";
import { SERVICES_DATA } from "@/lib/servicesData";

export const metadata: Metadata = constructMetadata({
  title: "Growth Frameworks & Digital Marketing Services | Muskan Shekh",
  description:
    "Explore Technical SEO audits, AI search optimization (AEO/GEO), content strategy, WordPress e-commerce development, and data-driven marketing frameworks.",
  path: "/services",
  keywords: [
    "Technical SEO Services",
    "AEO Search Optimization",
    "Generative Engine Optimization GEO",
    "WordPress E-Commerce SEO",
    "GA4 Analytics and Reporting",
    "Digital Growth Frameworks",
  ],
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collectionJsonLd = getServicesCollectionJsonLd(SERVICES_DATA);
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
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

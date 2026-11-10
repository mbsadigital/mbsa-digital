import React from "react";
import type { Metadata } from "next";
import { constructMetadata, getContactGraphJsonLd } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Contact MBSA Digital: Free SEO Audits and Consultations",
  description:
    "Contact MBSA Digital for a free SEO audit or consultation. Share your goals and a specialist replies by email, or call our India and UK numbers. Start now.",
  path: "/contact",
  keywords: [
    "contact MBSA Digital",
    "free SEO audit",
    "request a proposal",
    "digital marketing consultation",
    "SEO audit India",
    "SEO consultation UK",
  ],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactGraphJsonLd = getContactGraphJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactGraphJsonLd) }}
      />
      {children}
    </>
  );
}


import type { Metadata } from "next";
import { constructMetadata, getAnalyticsGraphJsonLd } from "@/lib/seo";
import AnalyticsClient from "./AnalyticsClient";

export const metadata: Metadata = constructMetadata({
  title: "Client Results & Analytics Proof | MBSA Digital",
  description:
    "See screenshots from Google Search Console, GA4, Google Business Profile and social media campaigns showing results MBSA Digital has delivered for its clients.",
  path: "/analytics",
  keywords: [
    "client results",
    "analytics proof",
    "Google Search Console proof",
    "GA4 metrics",
    "SEO case study proof",
    "digital marketing agency results",
  ],
});

export default function AnalyticsPage() {
  const analyticsJsonLd = getAnalyticsGraphJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(analyticsJsonLd) }}
      />
      <AnalyticsClient />
    </>
  );
}

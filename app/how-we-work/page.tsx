import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import HowWeWorkClient from "./HowWeWorkClient";

export const metadata: Metadata = constructMetadata({
  title: "How We Work | A Clear Process From First Call to Measurable Growth",
  description:
    "Every MBSA Digital engagement follows a transparent 4-step process: Discover & Analyse, Plan & Optimise, Track & Improve, and Grow & Scale. Plain English, zero jargon, and verifiable commercial results.",
  path: "/how-we-work",
  keywords: [
    "How We Work MBSA Digital",
    "Technical SEO Process",
    "Digital Marketing Methodology",
    "SEO Engagement Models",
    "Data-Driven Search Strategy",
    "Discovery Call SEO",
  ],
});

export default function HowWeWorkPage() {
  return (
    <main className="min-h-screen font-[family-name:var(--font-plus-jakarta-sans)]">
      <HowWeWorkClient />
    </main>
  );
}


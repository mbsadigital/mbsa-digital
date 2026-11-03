import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import HowWeWorkClient from "@/app/how-we-work/HowWeWorkClient";

export const metadata: Metadata = constructMetadata({
  title: "How We Work | Transparent 4-Step Process & Engagement Models",
  description:
    "Discover how MBSA Digital works with clients: discovery call, 4-step framework, plain English reporting, and transparent engagement models.",
  path: "/about/how-we-work",
});

export default function AboutHowWeWorkPage() {
  return (
    <main className="min-h-screen font-[family-name:var(--font-plus-jakarta-sans)]">
      <HowWeWorkClient />
    </main>
  );
}


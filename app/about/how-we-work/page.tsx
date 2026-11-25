import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import HowWeWorkClient from "@/app/how-we-work/HowWeWorkClient";

export const metadata: Metadata = constructMetadata({
  title: "How We Work: Our 4-Step Process | MBSA Digital",
  description:
    "MBSA Digital works: a free discovery call, then four steps from audit and roadmap to delivery and monthly reporting.",
  path: "/how-we-work",
});

export default function AboutHowWeWorkPage() {
  return (
    <main className="min-h-screen font-[family-name:var(--font-plus-jakarta-sans)]">
      <HowWeWorkClient />
    </main>
  );
}


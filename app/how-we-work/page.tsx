import type { Metadata } from "next";
import { constructMetadata, getHowWeWorkGraphJsonLd } from "@/lib/seo";
import HowWeWorkClient from "./HowWeWorkClient";

export const metadata: Metadata = constructMetadata({
  title: "Our Digital Marketing Process in 4 Steps | MBSA Digital",
  description:
    "See how MBSA Digital works: discovery call, audit, prioritised roadmap, delivery and monthly reporting. Know what happens at each stage before you sign up.",
  path: "/how-we-work",
  keywords: [
    "digital marketing process",
    "SEO process",
    "how digital marketing agencies work",
    "agency onboarding process",
    "digital marketing strategy process",
    "transparent search methodology",
  ],
});

export default function HowWeWorkPage() {
  const howWeWorkGraphJsonLd = getHowWeWorkGraphJsonLd();

  return (
    <main className="min-h-screen font-[family-name:var(--font-plus-jakarta-sans)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howWeWorkGraphJsonLd) }}
      />
      <HowWeWorkClient />
    </main>
  );
}

import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import { constructMetadata, getAboutGraphJsonLd } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "About MBSA Digital: Search-Led Digital Marketing Agency",
  description:
    "Meet MBSA Digital, a search-led agency in India and the UK. See our story, principles and leadership, and why we never promise rankings nobody can control.",
  path: "/about",
  keywords: [
    "MBSA Digital",
    "about MBSA Digital",
    "search-led digital marketing agency",
    "SEO agency India UK",
    "technical SEO leadership",
    "digital marketing consultants",
  ],
});

export default function AboutPage() {
  const aboutGraphJsonLd = getAboutGraphJsonLd();

  return (
    <main className="min-h-screen font-[family-name:var(--font-plus-jakarta-sans)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutGraphJsonLd) }}
      />
      <AboutClient />
    </main>
  );
}

import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "About | Journey, Experience & SEO Architecture",
  description:
    "Executive dossier: MSc Computer Science (UK), 5+ years technical SEO experience, London brand leadership, and transatlantic digital growth strategy.",
  path: "/about",
  keywords: [
    "About Muskan Shekh",
    "Digital Marketing Specialist Experience",
    "Technical SEO Architect Journey",
    "London SEO Consultant",
    "MSc Advanced Computer Science University of Essex",
    "Mamo Technolabs SEO Lead",
  ],
});

export default function AboutPage() {
  return (
    <main className="min-h-screen font-[family-name:var(--font-plus-jakarta-sans)]">
      <AboutClient />
    </main>
  );
}

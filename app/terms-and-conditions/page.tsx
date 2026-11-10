import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata, getTermsGraphJsonLd } from "@/lib/seo";
import { FileCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Terms and Conditions for Using the MBSA Digital Website",
  description:
    "The terms for using the MBSA Digital website: content use, no guaranteed marketing outcomes, intellectual property, liability limits and third-party links.",
  path: "/terms-and-conditions",
  keywords: [
    "MBSA Digital terms and conditions",
    "website terms of use",
    "liability",
    "intellectual property",
    "service agreement",
  ],
});

export default function TermsAndConditionsPage() {
  const termsJsonLd = getTermsGraphJsonLd();

  return (
    <main className="min-h-screen bg-stone-50 dark:bg-[#0B1220] py-16 sm:py-24 text-stone-900 dark:text-stone-100 transition-colors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsJsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2563EB] dark:text-[#60A5FA] mb-8 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="bg-white dark:bg-[#111B2E] rounded-3xl p-8 sm:p-12 border border-stone-200/80 dark:border-white/10 shadow-sm space-y-8">
          <div className="space-y-3 border-b border-stone-100 dark:border-white/5 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-[#2563EB] dark:text-[#60A5FA] text-xs font-bold">
              <FileCheck className="w-4 h-4" />
              <span>Legal & Website Usage</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-stone-900 dark:text-white tracking-tight">
              Terms and Conditions
            </h1>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Last updated: November 2026
            </p>
          </div>

          <div className="prose dark:prose-invert max-w-none text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed space-y-6">
            <p>
              Welcome to the website of MBSA Digital (mbsadigital.com). By accessing or using this website, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, please do not use our website.
            </p>

            <h2 className="text-xl font-bold text-stone-900 dark:text-white pt-4">
              1. Informational Purpose & No Outcome Guarantees
            </h2>
            <p>
              The content published on this website is for general information and informational demonstration of our capabilities. While we apply rigorous industry methodologies, search engine rankings and advertising algorithms are controlled entirely by third parties (such as Google and Meta). Consequently, MBSA Digital does not make misleading promises or guarantees of specific keyword positions.
            </p>

            <h2 className="text-xl font-bold text-stone-900 dark:text-white pt-4">
              2. Intellectual Property
            </h2>
            <p>
              All text, branding, frameworks, graphics, designs, and code on this website are the property of MBSA Digital and are protected by applicable copyright, trademark, and intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written consent.
            </p>

            <h2 className="text-xl font-bold text-stone-900 dark:text-white pt-4">
              3. Service Contracts
            </h2>
            <p>
              Client engagements, audits, project milestones, retainers, and confidentiality provisions are governed by separate, signed master service agreements (MSAs) or statements of work (SOWs) entered into directly between MBSA Digital and each client.
            </p>

            <h2 className="text-xl font-bold text-stone-900 dark:text-white pt-4">
              4. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, MBSA Digital shall not be liable for any indirect, consequential, or punitive damages arising from your access to or inability to use this website.
            </p>

            <h2 className="text-xl font-bold text-stone-900 dark:text-white pt-4">
              5. Governing Law
            </h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales and applicable laws of India.
            </p>

            <h2 className="text-xl font-bold text-stone-900 dark:text-white pt-4">
              6. Contact
            </h2>
            <p>
              For legal inquiries: <span className="text-[#2563EB] font-bold">mbsadigitalsolutions@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}


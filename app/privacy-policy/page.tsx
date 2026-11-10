import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata, getPrivacyPolicyGraphJsonLd } from "@/lib/seo";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy: How MBSA Digital Protects Personal Data",
  description:
    "Learn how MBSA Digital collects, uses and protects the personal details shared through this website, and the rights you have under UK and Indian data laws.",
  path: "/privacy-policy",
  keywords: [
    "MBSA Digital privacy policy",
    "data protection",
    "personal data",
    "cookies",
    "UK GDPR",
    "India DPDP",
  ],
});

export default function PrivacyPolicyPage() {
  const privacyJsonLd = getPrivacyPolicyGraphJsonLd();

  return (
    <main className="min-h-screen bg-stone-50 dark:bg-[#0B1220] py-16 sm:py-24 text-stone-900 dark:text-stone-100 transition-colors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyJsonLd) }}
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
              <ShieldCheck className="w-4 h-4" />
              <span>Data Protection & Privacy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-stone-900 dark:text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Last updated: November 2026
            </p>
          </div>

          <div className="prose dark:prose-invert max-w-none text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed space-y-6">
            <p>
              At MBSA Digital, we respect your privacy and are committed to protecting any personal data you share with us. This Privacy Policy explains how we collect, use, and safeguard personal information collected through our website (mbsadigital.com) in compliance with applicable United Kingdom and Indian data protection laws, including the UK GDPR and the Data Protection Act 2018.
            </p>

            <h2 className="text-xl font-bold text-stone-900 dark:text-white pt-4">
              1. Information We Collect
            </h2>
            <p>
              When you contact us, request a free search audit, or submit an enquiry through our forms, we collect details including your name, work email address, phone number, website URL, company name, and details of your business requirements. We also collect anonymised analytics telemetry (via GA4 with consent controls) to understand website performance and improve user experience.
            </p>

            <h2 className="text-xl font-bold text-stone-900 dark:text-white pt-4">
              2. How We Use Your Information
            </h2>
            <p>
              We use your data solely to respond to your inquiries, deliver requested SEO and website audits, prepare tailored proposals, communicate project progress, and manage our business relationship. We never sell, rent, or lease your contact information or business data to third parties.
            </p>

            <h2 className="text-xl font-bold text-stone-900 dark:text-white pt-4">
              3. Cookies and Analytics
            </h2>
            <p>
              We use necessary cookies for site security and optional cookies for analytics. Consent Mode v2 is implemented to ensure tracking tags respect your cookie preferences at all times.
            </p>

            <h2 className="text-xl font-bold text-stone-900 dark:text-white pt-4">
              4. Your Rights
            </h2>
            <p>
              You have the right to request access to the personal data we hold about you, request corrections or erasure, object to processing, or withdraw consent. To exercise any of these rights, email us at <span className="text-[#2563EB] font-bold">mbsadigitalsolutions@gmail.com</span>.
            </p>

            <h2 className="text-xl font-bold text-stone-900 dark:text-white pt-4">
              5. Contact Us
            </h2>
            <p>
              For any questions regarding this Privacy Policy, please contact MBSA Digital:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Email: mbsadigitalsolutions@gmail.com</li>
              <li>India: +91-95746-96932</li>
              <li>United Kingdom: +44-7393-107859</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}


"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  X,
  Clock,
  Sparkles,
  BookOpen,
} from "lucide-react";

/* ============================================================
   LATEST FEATURED ARTICLE DATA (EXACT MATCH TO WIREFRAME)
============================================================ */

const FEATURED_ARTICLE = {
  id: "geo-guide",
  tag: "AEO & GEO",
  title: "What is generative engine optimisation (GEO)? A plain-English guide",
  description:
    "What GEO is, how it relates to SEO, what you can and can't control, and a practical checklist.",
  author: "Muskan Shekh",
  authorBracket: "[AUTHOR]",
  date: "2026 Edition",
  dateBracket: "[DATE]",
  readTime: "7 min read",
  highlights: [
    "Difference between traditional SERP ranking and LLM consensus retrieval",
    "How search bots like GPTBot, PerplexityBot, and Google-Extended crawl your content",
    "Key signals: factual citations, schema integrity, and authoritative third-party coverage",
    "The 5-point practical checklist to make your business visible in AI responses",
  ],
  deepDive: [
    {
      heading: "1. What is Generative Engine Optimisation?",
      body: "Generative Engine Optimisation (GEO) is the discipline of structuring brand facts, technical data, and industry authority so that Large Language Models (LLMs) like OpenAI ChatGPT, Google AI Overviews, Perplexity, and Anthropic Claude cite your business as a primary source when users ask commercial and diagnostic questions.",
    },
    {
      heading: "2. How GEO Differs from Traditional SEO",
      body: "Traditional SEO focuses on earning blue links on search engine results pages through keywords, crawlability, and backlink authority. GEO builds on SEO foundation but focuses on entity synthesis — ensuring AI models understand your exact value proposition, pricing parameters, customer reviews, and comparative differentiators without ambiguity.",
    },
    {
      heading: "3. The Practical GEO Checklist",
      body: "1) Deploy valid JSON-LD schemas (Organization, Service, FAQPage, Review). 2) Publish transparent pricing and definitive service breakdowns. 3) Earn third-party citations on trusted trade portals, directories, and Wikipedia/Wikidata entities. 4) Monitor LLM prompt completions monthly using tracked brand queries.",
    },
  ],
};

/* ============================================================
   EDITORIAL PLAN: 6 TOPIC CLUSTERS (EXACT WIREFRAME MATCH)
============================================================ */

interface GuideTopic {
  id: string;
  title: string;
  summary: string;
}

interface EditorialCluster {
  id: string;
  title: string;
  guides: GuideTopic[];
  serviceLink: {
    label: string;
    href: string;
  };
}

const EDITORIAL_CLUSTERS: EditorialCluster[] = [
  {
    id: "seo",
    title: "SEO",
    guides: [
      {
        id: "seo-timeline",
        title: "How long does SEO take? An honest timeline",
        summary:
          "Realistic benchmarks for technical fixes (2-4 weeks), indexing velocity (4-8 weeks), and commercial conversion compound growth (3-6 months) based on domain history.",
      },
      {
        id: "seo-checklist",
        title: "Technical SEO checklist for small business websites",
        summary:
          "The critical crawlability factors: indexability directives, canonical chains, robots.txt hygiene, Core Web Vitals (LCP, INP, CLS), and semantic HTML hierarchy.",
      },
      {
        id: "seo-migration",
        title: "Website migration without losing rankings",
        summary:
          "A step-by-step migration blueprint: 1:1 redirect maps, staging site audits, XML sitemap re-indexing, and post-launch 404 monitoring to protect organic traffic.",
      },
    ],
    serviceLink: {
      label: "SEO services",
      href: "/services?cat=seo-ai-search",
    },
  },
  {
    id: "local-seo",
    title: "Local SEO",
    guides: [
      {
        id: "local-gbp",
        title: "How to optimise a Google Business Profile",
        summary:
          "Primary and secondary category selection, geo-tagged photo hygiene, weekly Google posts, service catalog architecture, and response protocols for local 3-pack dominance.",
      },
      {
        id: "local-location-pages",
        title: "Location pages that aren't thin or duplicated",
        summary:
          "How to craft genuine regional landing pages featuring localized case studies, team bios, local landmarks, client testimonials, and unique regional schema markup.",
      },
      {
        id: "local-reviews",
        title: "How to ask for reviews within Google's rules",
        summary:
          "Compliant review generation workflows: automated post-delivery SMS triggers, QR codes for counter desks, and review response strategies that respect Google's anti-gating policies.",
      },
    ],
    serviceLink: {
      label: "Local SEO",
      href: "/services?cat=seo-ai-search",
    },
  },
  {
    id: "aeo-geo",
    title: "AEO & GEO",
    guides: [
      {
        id: "aeo-difference",
        title: "AEO vs GEO vs SEO: what's the difference?",
        summary:
          "Comparing traditional search (SEO), direct answer engine response generation (AEO), and LLM citation synthesis (GEO) across modern search habits.",
      },
      {
        id: "aeo-ai-check",
        title: "How to check what AI assistants say about your business",
        summary:
          "Audit prompts and methodologies to test how ChatGPT Search, Google Gemini, and Perplexity evaluate your services, brand reputation, and pricing.",
      },
      {
        id: "aeo-service-pages",
        title: "Writing service pages that answer real questions",
        summary:
          "Structuring content around user questions: answering commercial pain points directly, embedding concise definitions, and avoiding corporate fluff.",
      },
    ],
    serviceLink: {
      label: "AEO & GEO",
      href: "/services?cat=seo-ai-search",
    },
  },
  {
    id: "websites",
    title: "Websites",
    guides: [
      {
        id: "web-platform-choice",
        title: "WordPress or Shopify for a growing brand?",
        summary:
          "An objective total-cost-of-ownership comparison covering flexibility, hosting management, app bloat, checkout customisation, and speed optimization.",
      },
      {
        id: "web-cwv-guide",
        title: "Core Web Vitals explained for non-developers",
        summary:
          "Breaking down LCP (loading), INP (responsiveness), and CLS (visual stability) into plain-English business implications that impact conversion rates.",
      },
      {
        id: "web-converting-page",
        title: "What makes a service page convert",
        summary:
          "The essential conversion anatomy: clear value proposition above the fold, social proof, diagnostic pricing transparency, frictionless inquiry forms, and fast mobile UX.",
      },
    ],
    serviceLink: {
      label: "Web design",
      href: "/services?cat=websites-creative",
    },
  },
  {
    id: "paid-media",
    title: "Paid media",
    guides: [
      {
        id: "paid-budget-mistakes",
        title: "Google Ads for local businesses: where budgets go wrong",
        summary:
          "Identifying budget leaks: loose broad match keywords, uncontrolled automated location targeting, neglect of negative keyword lists, and weak landing page message match.",
      },
      {
        id: "paid-negative-keywords",
        title: "Negative keywords: the simplest way to cut waste",
        summary:
          "Building universal and campaign-level negative keyword libraries to prevent paying for irrelevant queries (e.g. jobs, free, login, DIY).",
      },
      {
        id: "paid-rank-vs-ads",
        title: "Should you run ads if you already rank?",
        summary:
          "Data-backed analysis of SERP real estate dominance, protecting brand searches from aggressive competitors, and incremental conversion lift tests.",
      },
    ],
    serviceLink: {
      label: "Paid media",
      href: "/services?cat=paid-media-ppc",
    },
  },
  {
    id: "analytics",
    title: "Analytics",
    guides: [
      {
        id: "analytics-ga4-checklist",
        title: "A GA4 setup checklist for lead-generation sites",
        summary:
          "Key GA4 configuration steps: custom event tracking, enhanced measurement, conversion marking, internal IP filtering, Google Signals, and BigQuery link activation.",
      },
      {
        id: "analytics-seo-roi",
        title: "How to measure what your SEO is worth",
        summary:
          "Calculating pipeline value, assisted conversions, cost-per-acquisition savings vs PPC equivalent, and long-term customer lifetime value from organic traffic.",
      },
      {
        id: "analytics-ga4-vs-ads",
        title: "Why your GA4 and ad platform numbers don't match",
        summary:
          "Explaining attribution model differences, iOS privacy restrictions, consent mode adjustments, time-of-conversion vs time-of-click discrepancies.",
      },
    ],
    serviceLink: {
      label: "Analytics",
      href: "/analytics",
    },
  },
];

/* ============================================================
   PAGE COMPONENT
============================================================ */

export default function IndustriesPage() {
  const [activeGuideModal, setActiveGuideModal] = useState<string | null>(null);

  // Find modal content if active
  const selectedClusterGuide = EDITORIAL_CLUSTERS.flatMap((c) => c.guides).find(
    (g) => g.id === activeGuideModal
  );

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1220] text-slate-900 dark:text-slate-100 font-[family-name:var(--font-plus-jakarta-sans)] transition-colors duration-500 overflow-hidden">
      {/* Subtle site background ambient glow */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full bg-[#2563EB]/[0.05] dark:bg-[#2563EB]/[0.08] blur-[160px]" />
        <div className="absolute top-1/2 -right-24 w-[500px] h-[500px] rounded-full bg-[#14B8A6]/[0.04] dark:bg-[#14B8A6]/[0.06] blur-[170px]" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-24">
        {/* =========================================================
            1. BREADCRUMBS: Home / Insights
        ========================================================= */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-8 sm:mb-10">
          <Link
            href="/"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Home
          </Link>
          <span className="text-slate-300 dark:text-slate-600">/</span>
          <span className="text-slate-800 dark:text-slate-200">Insights</span>
        </div>

        {/* =========================================================
            2. PAGE HERO (EXACT TEXT & STYLING FROM WIREFRAME)
        ========================================================= */}
        <div className="mb-12 sm:mb-16">
          {/* Tag: Orange indicator bar + INSIGHTS */}
          <div className="flex items-center gap-2 mb-3.5">
            <span className="w-1 h-3.5 bg-orange-600 dark:bg-orange-500 rounded-xs" />
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 font-mono">
              INSIGHTS
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-slate-950 dark:text-white tracking-tight leading-[1.12] max-w-4xl">
            Insights on search, websites and measurement
          </h1>

          {/* Subheading */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Practical guides for business owners and marketing managers. Every article is written or reviewed by a named specialist and updated when things change.
          </p>
        </div>

        {/* Divider line matching wireframe */}
        <div className="w-full h-px bg-slate-200/90 dark:border-white/10 my-10 sm:my-14" />

        {/* =========================================================
            3. SECTION 1: LATEST ARTICLES (EXACT WIREFRAME CARD)
        ========================================================= */}
        <section className="mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight mb-8">
            Latest articles
          </h2>

          {/* 3-column grid container with single featured card in slot 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
            {/* The Featured GEO Article Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#111B2E] border border-slate-200/90 dark:border-white/10 shadow-xs hover:border-slate-300 dark:hover:border-white/20 transition-all flex flex-col justify-between group">
              <div>
                {/* Category tag pill */}
                <div className="mb-4">
                  <span className="inline-block px-2.5 py-1 rounded text-[11px] font-mono font-medium text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/15">
                    {FEATURED_ARTICLE.tag}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white leading-snug mb-3 group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors">
                  {FEATURED_ARTICLE.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {FEATURED_ARTICLE.description}
                </p>

                {/* Meta row: [AUTHOR] · [DATE] · 7 min read */}
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-6">
                  <span className="font-semibold text-orange-600 dark:text-orange-400">
                    [{FEATURED_ARTICLE.author}]
                  </span>
                  <span>·</span>
                  <span className="text-orange-600 dark:text-orange-400">
                    [{FEATURED_ARTICLE.date}]
                  </span>
                  <span>·</span>
                  <span>{FEATURED_ARTICLE.readTime}</span>
                </div>
              </div>

              {/* Action Link: Read article -> */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setActiveGuideModal("geo-guide")}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-950 dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors cursor-pointer"
                >
                  <span>Read article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Divider line matching wireframe */}
        <div className="w-full h-px bg-slate-200/90 dark:border-white/10 my-12 sm:my-16" />

        {/* =========================================================
            4. SECTION 2: EDITORIAL PLAN (EXACT WIREFRAME MATCH)
        ========================================================= */}
        <section className="mb-20 sm:mb-28">
          {/* Header */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1 h-3.5 bg-orange-600 dark:bg-orange-500 rounded-xs" />
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 font-mono">
                EDITORIAL PLAN
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 dark:text-white tracking-tight">
              Topics we’re writing about
            </h2>

            <p className="mt-2.5 text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Upcoming guides, grouped by the services they support.
            </p>
          </div>

          {/* 6 Dashed border cards arranged in a 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {EDITORIAL_CLUSTERS.map((cluster) => (
              <div
                key={cluster.id}
                className="p-6 sm:p-7 rounded-2xl border border-dashed border-slate-300 dark:border-white/20 bg-white/40 dark:bg-[#111B2E]/40 hover:bg-white dark:hover:bg-[#111B2E] hover:border-slate-400 dark:hover:border-white/40 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white mb-4">
                    {cluster.title}
                  </h3>

                  {/* Bullet list of topics */}
                  <ul className="space-y-3 mb-8">
                    {cluster.guides.map((guide) => (
                      <li
                        key={guide.id}
                        onClick={() => setActiveGuideModal(guide.id)}
                        className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-snug cursor-pointer group/item hover:text-slate-950 dark:hover:text-white transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-xs bg-slate-800 dark:bg-slate-300 mt-1.5 shrink-0 group-hover/item:bg-[#2563EB] transition-colors" />
                        <span className="group-hover/item:underline underline-offset-2">
                          {guide.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom link to service */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/5">
                  <Link
                    href={cluster.serviceLink.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-950 dark:text-white underline decoration-slate-300 dark:decoration-white/30 hover:text-[#2563EB] hover:decoration-[#2563EB] dark:hover:text-[#60A5FA] dark:hover:decoration-[#60A5FA] transition-colors"
                  >
                    <span>{cluster.serviceLink.label}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            5. BOTTOM CTA BANNER (CONVERTING VISITOR ENGAGEMENT)
        ========================================================= */}
        <section className="p-8 sm:p-12 rounded-[28px] bg-slate-50 dark:bg-[#111B2E] border border-slate-200/90 dark:border-white/10 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
              <span className="text-[11px] font-bold text-[#2563EB] dark:text-[#60A5FA] uppercase tracking-wider font-mono">
                DIAGNOSTIC FIRST · TRANSPARENT METHODOLOGY
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Ready to turn these insights into measurable revenue?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-xl leading-relaxed">
              Book a free discovery conversation. We diagnose what is holding your search visibility back and agree on clear priorities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 shrink-0 w-full sm:w-auto">
            {/* Primary Button */}
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#2563EB] text-white text-xs sm:text-[13.5px] font-bold shadow-md shadow-blue-500/20 hover:bg-blue-700 hover:-translate-y-0.5 transition-all min-h-[44px]"
            >
              <span>Request Free Search Audit</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Secondary Button */}
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-xs sm:text-[13.5px] font-semibold hover:bg-slate-100 dark:hover:bg-white/10 transition-all min-h-[44px]"
            >
              <span>Explore All 25 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </main>

      {/* =========================================================
          INTERACTIVE GUIDE READING MODAL
      ========================================================= */}
      <AnimatePresence>
        {activeGuideModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveGuideModal(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#111B2E] rounded-[28px] p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-2xl z-10 max-h-[88vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setActiveGuideModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              {activeGuideModal === "geo-guide" ? (
                /* FEATURED ARTICLE MODAL: GEO FULL GUIDE */
                <div>
                  <div className="mb-4">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/15">
                      {FEATURED_ARTICLE.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight mb-3">
                    {FEATURED_ARTICLE.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-6 pb-4 border-b border-slate-200 dark:border-white/10">
                    <span className="font-bold text-orange-600 dark:text-orange-400">
                      By {FEATURED_ARTICLE.author}
                    </span>
                    <span>·</span>
                    <span className="text-orange-600 dark:text-orange-400">
                      {FEATURED_ARTICLE.date}
                    </span>
                    <span>·</span>
                    <span>{FEATURED_ARTICLE.readTime}</span>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-medium">
                    {FEATURED_ARTICLE.description}
                  </p>

                  <div className="space-y-6 mb-8 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                    {FEATURED_ARTICLE.deepDive.map((section, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5">
                        <h4 className="font-bold text-slate-950 dark:text-white mb-2">
                          {section.heading}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300">
                          {section.body}
                        </p>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    Core Checklist Highlights:
                  </h4>

                  <div className="space-y-2.5 mb-8">
                    {FEATURED_ARTICLE.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
                    <Link
                      href="/contact"
                      onClick={() => setActiveGuideModal(null)}
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#2563EB] hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 transition-all"
                    >
                      <span>Request Free GEO Audit</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => setActiveGuideModal(null)}
                      className="w-full sm:w-auto px-5 py-3 rounded-full border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : selectedClusterGuide ? (
                /* EDITORIAL TOPIC GUIDE MODAL */
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1 h-3.5 bg-orange-600 dark:bg-orange-500 rounded-xs" />
                    <span className="text-[11px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 font-mono">
                      UPCOMING EDITORIAL GUIDE
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight mb-4">
                    {selectedClusterGuide.title}
                  </h3>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 mb-6 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                    <h4 className="font-bold text-slate-950 dark:text-white mb-2">
                      Guide Overview &amp; Key Takeaways:
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      {selectedClusterGuide.summary}
                    </p>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                    This comprehensive guide is part of our upcoming search engineering series written by specialist practitioners. Need immediate support implementing these solutions for your business?
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
                    <Link
                      href="/contact"
                      onClick={() => setActiveGuideModal(null)}
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#2563EB] hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 transition-all"
                    >
                      <span>Discuss Your Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => setActiveGuideModal(null)}
                      className="w-full sm:w-auto px-5 py-3 rounded-full border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : null}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

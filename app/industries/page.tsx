"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  X,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Heart,
  ShoppingCart,
  Store,
  Building2,
  Layers,
  Laptop,
  MapPin,
  Award,
  Zap,
  ExternalLink,
  BarChart3,
  Check,
  ArrowUpRight,
} from "lucide-react";

/* ============================================================
   TYPES & DATA FOR INDUSTRIES WE SERVE
============================================================ */

export interface IndustryVertical {
  id: string;
  category: "health" | "ecommerce" | "services" | "b2b";
  categoryLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tagline: string;
  description: string;
  color: string;
  bgLight: string;
  bgDark: string;
  borderLight: string;
  badge: string;
  stats: { value: string; label: string };
  challenges: string[];
  solution: string;
  deliverables: string[];
  schemaTypes: string[];
  caseStudySnippet: {
    clientType: string;
    result: string;
    timeframe: string;
  };
}

export const INDUSTRIES_DIRECTORY: IndustryVertical[] = [
  {
    id: "healthcare",
    category: "health",
    categoryLabel: "Healthcare & Life Sciences",
    icon: Heart,
    title: "Healthcare & Pharmacy",
    tagline: "YMYL Authority, Compliance & Patient Booking Velocity",
    description:
      "Strict Google YMYL quality thresholds, MHRA/HIPAA medical advertising regulations, and patient booking friction demand specialist handling. We build compliant, authoritative medical search presences that win organic trust.",
    color: "#0D9488",
    bgLight: "bg-teal-50 dark:bg-teal-950/40",
    bgDark: "text-teal-600 dark:text-teal-400",
    borderLight: "border-teal-200/80 dark:border-teal-800/40",
    badge: "YMYL & Compliance",
    stats: { value: "+210%", label: "Local Clinic Queries" },
    challenges: [
      "Strict Google YMYL (Your Money Your Life) algorithmic quality score hurdles",
      "Navigating medical advertising compliance (MHRA, HIPAA, Google Ads certification)",
      "High patient booking friction and fragmented multi-location Google Business Profiles",
      "Zero-click searches absorbing high-intent clinical symptom queries",
    ],
    solution:
      "Deploy physician and medical business schema, verified credentialed author bylines, automated review syndication, and geo-targeted clinical treatment hubs.",
    deliverables: [
      "MedicalBusiness, Physician & Pharmacy JSON-LD schema architecture",
      "Multi-location Google Business Profile optimization & geo-grid tracking",
      "MHRA / HIPAA compliant patient review capture workflows",
      "Zero-click Knowledge Panel optimization & clinical symptom hubs",
      "Core Web Vitals acceleration for fast mobile patient booking (<1.4s LCP)",
    ],
    schemaTypes: ["MedicalBusiness", "Physician", "Pharmacy", "MedicalCondition", "FAQPage"],
    caseStudySnippet: {
      clientType: "Multi-Location Private Dental & Medical Clinic Network",
      result: "+210% increase in qualified consultation bookings within 5 months",
      timeframe: "5 Months",
    },
  },
  {
    id: "wellness",
    category: "health",
    categoryLabel: "Healthcare & Life Sciences",
    icon: Sparkles,
    title: "Health, Beauty & Wellness",
    tagline: "High-Intent Treatment Ranking & Frictionless Booking UX",
    description:
      "Aesthetic clinics, wellness sanctuaries, and premium spas operate in fiercely competitive regional markets. We engineer high-converting visual treatment pages and local map pack dominance.",
    color: "#16A34A",
    bgLight: "bg-emerald-50 dark:bg-emerald-950/40",
    bgDark: "text-emerald-600 dark:text-emerald-400",
    borderLight: "border-emerald-200/80 dark:border-emerald-800/40",
    badge: "Booking Velocity",
    stats: { value: "3.2x", label: "Treatment Bookings" },
    challenges: [
      "Heavy competition for competitive 'near me' aesthetic treatment searches",
      "Image-heavy treatment galleries causing slow mobile load times and bounce rates",
      "Disjointed booking integrations causing drop-offs between search and confirmation",
      "Attributing revenue across Instagram discovery and Google organic search",
    ],
    solution:
      "Fast, mobile-first treatment landing pages, image and video rich snippet SEO, instant booking widget integration, and aggressive Google 3-Pack geo-targeting.",
    deliverables: [
      "Treatment-specific landing pages with high conversion anatomy",
      "Visual image SEO and structured video schema markup",
      "Mobile Core Web Vitals optimization achieving 95+ PageSpeed scores",
      "Aggressive local 3-Pack rank tracking across target postal codes",
      "Google Analytics 4 multi-channel booking funnel attribution",
    ],
    schemaTypes: ["HealthAndBeautyBusiness", "OfferCatalog", "AggregateRating", "Service"],
    caseStudySnippet: {
      clientType: "Regional Aesthetic & Skin Rejuvenation Clinic",
      result: "3.2x increase in monthly treatment appointments and inquiry calls",
      timeframe: "4 Months",
    },
  },
  {
    id: "ecommerce",
    category: "ecommerce",
    categoryLabel: "Commerce & Direct-to-Consumer",
    icon: ShoppingCart,
    title: "E-Commerce & D2C Brands",
    tagline: "Category Taxonomy, Product Schema & Revenue Attribution",
    description:
      "Scale beyond volatile paid ads. We architect high-margin organic search funnels, solve faceted crawl bloat on Shopify and WooCommerce, and turn high-intent product searches into profitable checkouts.",
    color: "#2563EB",
    bgLight: "bg-blue-50 dark:bg-blue-950/40",
    bgDark: "text-blue-600 dark:text-blue-400",
    borderLight: "border-blue-200/80 dark:border-blue-800/40",
    badge: "Revenue Attribution",
    stats: { value: "+185%", label: "Organic Revenue" },
    challenges: [
      "Faceted navigation creating millions of thin, duplicated filter URLs",
      "Shopify app bloat and slow liquid templates depressing mobile conversions",
      "Thin product descriptions unable to rank for high-intent non-branded queries",
      "Escalating customer acquisition costs (CAC) on Meta and Google Ads",
    ],
    solution:
      "Canonicalized collection taxonomy, programmatic merchant schema feeds, internal link graph restructuring, and Core Web Vitals acceleration.",
    deliverables: [
      "Clean collection architecture with controlled facet indexing",
      "Automated Product, Offer, MerchantReturnPolicy & Review schema syndication",
      "Google Merchant Center feed optimization & free shopping listings dominance",
      "Core Web Vitals code stripping to achieve sub-second mobile product rendering",
      "Full-funnel GA4 e-commerce revenue attribution and conversion rate tracking",
    ],
    schemaTypes: ["Product", "Offer", "Brand", "MerchantReturnPolicy", "BreadcrumbList"],
    caseStudySnippet: {
      clientType: "Direct-to-Consumer Lifestyle & Apparel Brand",
      result: "+185% organic revenue growth while slashing paid ad dependency by 42%",
      timeframe: "6 Months",
    },
  },


];

const FILTER_TABS = [
  { id: "all", label: "All Sectors" },
  { id: "health", label: "Healthcare & Wellness" },
  { id: "ecommerce", label: "E-Commerce & D2C" },
];

/* ============================================================
   PAGE COMPONENT
============================================================ */

export default function IndustriesPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryVertical | null>(null);

  const filteredIndustries = useMemo(() => {
    if (activeFilter === "all") return INDUSTRIES_DIRECTORY;
    return INDUSTRIES_DIRECTORY.filter((ind) => ind.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1220] text-slate-900 dark:text-slate-100 font-[family-name:var(--font-plus-jakarta-sans)] selection:bg-[#2563EB]/25 selection:text-[#2563EB] transition-colors duration-500 overflow-hidden">
      {/* Background ambient glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-[560px] h-[560px] rounded-full bg-[#2563EB]/[0.08] dark:bg-[#2563EB]/[0.10] blur-[160px]" />
        <div className="absolute bottom-1/3 left-10 w-[500px] h-[500px] rounded-full bg-[#0D9488]/[0.06] dark:bg-[#0D9488]/[0.08] blur-[160px]" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-24">
        {/* =========================================================
            1. BREADCRUMBS: Home / Industries
        ========================================================= */}
        <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 mb-8 sm:mb-10">
          <Link
            href="/"
            className="hover:text-[#2563EB] dark:hover:text-[#38BDF8] transition-colors"
          >
            Home
          </Link>
          <span className="text-slate-300 dark:text-slate-600">/</span>
          <span className="text-slate-800 dark:text-slate-200">Industries</span>
        </div>

        {/* =========================================================
            2. PAGE HERO: Sector Specialization
        ========================================================= */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#2563EB] dark:text-[#60A5FA] text-[11px] font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Specialized Sector Growth Architecture</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 dark:text-white tracking-tight leading-[1.12] max-w-4xl">
            Industries where trust and visibility{" "}
            <span className="text-[#2563EB]">compound profitable growth</span>
          </h1>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Generic digital marketing fails in regulated, high-trust, and high-velocity markets. We engineer bespoke search dominance, regulatory schema, and high-converting acquisition funnels tailored to your exact industry dynamics.
          </p>


        </div>

        {/* =========================================================
            3. FILTER TABS
        ========================================================= */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar">
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${isActive
                  ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/25"
                  : "bg-white dark:bg-stone-900/70 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
                  }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* =========================================================
            4. INDUSTRY VERTICALS GRID
        ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-20">
          {filteredIndustries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group relative flex flex-col justify-between rounded-3xl bg-white dark:bg-[#111B2E] border border-slate-200/90 dark:border-white/10 p-6 sm:p-7 shadow-xs hover:shadow-2xl hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300"
              >
                {/* Top Section */}
                <div>
                  {/* Category Pill & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${industry.bgLight} ${industry.bgDark} border ${industry.borderLight} shadow-xs group-hover:scale-105 transition-transform duration-300`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>


                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white tracking-tight leading-snug group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors">
                    {industry.title}
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-[#2563EB] dark:text-[#38BDF8]">
                    {industry.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {industry.description}
                  </p>

                  {/* Key Deliverables Highlights */}
                  <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/10 space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Engineered Deliverables
                    </span>
                    {industry.deliverables.slice(0, 3).map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>


              </motion.div>
            );
          })}
        </div>

        {/* =========================================================
            5. WHY INDUSTRY SPECIALIZATION MATTERS
        ========================================================= */}
        <section className="mb-20 rounded-3xl p-8 sm:p-12 bg-white dark:bg-[#111B2E] border border-slate-200/90 dark:border-white/10 shadow-lg">
          <div className="max-w-3xl mb-10">
            <span className="text-[11px] font-bold text-[#2563EB] dark:text-[#38BDF8] uppercase tracking-wider">
              Strategic Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 dark:text-white mt-1">
              Why sector-specific digital strategy outranks generic marketing
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Google algorithms evaluate content based on topical entity graphs, credentialed authority, and user satisfaction signals that differ radically across healthcare, e-commerce, and B2B tech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-stone-900/60 border border-slate-200/80 dark:border-white/10">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-[#2563EB] flex items-center justify-center font-black mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Schema &amp; Knowledge Graph Integrity
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We implement granular, validated Schema.org structures (from MedicalBusiness to Product offer catalogs) so AI models and search crawlers parse your entities without ambiguity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-stone-900/60 border border-slate-200/80 dark:border-white/10">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-black mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Frictionless Sector UX &amp; Core Web Vitals
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Whether it is instant clinic appointment triggers, Shopify sub-second checkout speeds, or B2B demo scheduling, we engineer landing page anatomy tailored to your exact buyer friction.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-stone-900/60 border border-slate-200/80 dark:border-white/10">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-black mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Strict Regulatory &amp; YMYL Compliance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We navigate strict advertising codes (HIPAA, MHRA, financial disclosures, and Google anti-gating policies) to safeguard your domain reputation while winning organic authority.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            6. BOTTOM CTA BANNER
        ========================================================= */}
        <section className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-white via-blue-50/40 to-white dark:from-[#111B2E] dark:via-[#0E1729] dark:to-[#111B2E] border border-blue-200/80 dark:border-white/10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold text-[#2563EB] dark:text-[#38BDF8] uppercase tracking-wider">
              Tailored Consultation
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white mt-1">
              Operate in a unique niche or regulated industry?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
              We audit competitive gaps, technical entity signals, and local market capture potential to engineer a bespoke growth roadmap for your sector.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full bg-[#2563EB] text-white text-xs sm:text-sm font-bold hover:bg-blue-700 shadow-md shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-300 min-h-[44px]"
            >
              <span>Schedule Sector Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full bg-white dark:bg-stone-900 text-slate-800 dark:text-white text-xs sm:text-sm font-bold border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 min-h-[44px]"
            >
              <span>Explore All 25 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      {/* =========================================================
          7. INTERACTIVE DETAIL MODAL / DRAWER
      ========================================================= */}
      <AnimatePresence>
        {selectedIndustry && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndustry(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 w-full max-w-2xl bg-white dark:bg-[#0E1626] border border-slate-200 dark:border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${selectedIndustry.bgLight} ${selectedIndustry.bgDark} border ${selectedIndustry.borderLight}`}
                  >
                    <selectedIndustry.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white">
                      {selectedIndustry.title}
                    </h3>
                    <span className="text-xs font-semibold text-[#2563EB] dark:text-[#38BDF8]">
                      {selectedIndustry.tagline}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedIndustry(null)}
                  className="p-2 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-rose-500 hover:text-white transition-colors cursor-pointer text-slate-500 dark:text-slate-300"
                  title="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="py-6 space-y-6">
                {/* Result Pill */}
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-bold">
                      Verified Impact Metric
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {selectedIndustry.stats.label}
                    </span>
                  </div>
                  <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                    {selectedIndustry.stats.value}
                  </span>
                </div>

                {/* Challenges */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Industry-Specific Obstacles
                  </h4>
                  <div className="space-y-2">
                    {selectedIndustry.challenges.map((c, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300"
                      >
                        • {c}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strategy Deliverables */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Custom Technical Deliverables
                  </h4>
                  <div className="space-y-2">
                    {selectedIndustry.deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-slate-800 dark:text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] dark:text-[#38BDF8] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Supported Schema Types */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Supported Schema.org Entities
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedIndustry.schemaTypes.map((schema, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/10 text-[11px] font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                      >
                        {schema}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2563EB] text-white text-xs font-bold hover:bg-blue-700 transition-colors"
                >
                  <span>Request Sector Strategy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  type="button"
                  onClick={() => setSelectedIndustry(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

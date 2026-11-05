"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Sparkles,
  ShoppingCart,
  Store,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  X,
  ExternalLink,
  MapPin,
  Clock,
  Award,
  Zap,
} from "lucide-react";

export interface IndustryItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  bgLight: string;
  bgDark: string;
  borderLight: string;
  borderDark: string;
  badge: string;
  stats: { value: string; label: string };
  deliverables: string[];
  challenges: string;
  solution: string;
  schemaTypes: string[];
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "healthcare",
    icon: Heart,
    title: "Healthcare & pharmacy",
    description: "Local visibility, accurate information and careful, compliant content.",
    color: "#0D9488", // Teal
    bgLight: "bg-teal-50 dark:bg-teal-950/30",
    bgDark: "text-teal-600 dark:text-teal-400",
    borderLight: "border-teal-200/80 dark:border-teal-800/40",
    borderDark: "hover:border-teal-500/60 dark:hover:border-teal-500/60",
    badge: "YMYL & Compliance",
    stats: { value: "+210%", label: "Local Clinic Queries" },
    challenges: "Strict Google YMYL (Your Money Your Life) quality thresholds, medical compliance (MHRA/HIPAA), and managing patient booking friction.",
    solution: "Medical author schema, structured doctor profiles, hyper-local pharmacy listings, and verified medical review syndication.",
    deliverables: [
      "MedicalBusiness & Physician Schema Markup",
      "NHS & MHRA / HIPAA compliant review systems",
      "Multi-clinic Google Business Profile sync",
      "Zero-click Knowledge Panel optimization",
    ],
    schemaTypes: ["MedicalBusiness", "Physician", "Pharmacy", "MedicalCondition"],
  },
  {
    id: "wellness",
    icon: Sparkles,
    title: "Health, beauty & wellness",
    description: "Expert content, fast product pages and treatments people can find.",
    color: "#16A34A", // Emerald
    bgLight: "bg-emerald-50 dark:bg-emerald-950/30",
    bgDark: "text-emerald-600 dark:text-emerald-400",
    borderLight: "border-emerald-200/80 dark:border-emerald-800/40",
    borderDark: "hover:border-emerald-500/60 dark:hover:border-emerald-500/60",
    badge: "Booking Velocity",
    stats: { value: "3.2x", label: "Treatment Bookings" },
    challenges: "Heavy competition in local beauty searches, mobile booking drop-offs, and slow visual-heavy treatment page loading speeds.",
    solution: "Speed-optimized treatment landing pages, high-converting mobile UX, visual image SEO, and instant appointment booking integration.",
    deliverables: [
      "Fast Core Web Vitals for mobile clinic pages (<1.4s LCP)",
      "High-intent 'Near Me' aesthetic treatment ranking",
      "Interactive price and treatment comparison schemas",
      "Instagram & TikTok search integration strategies",
    ],
    schemaTypes: ["HealthAndBeautyBusiness", "OfferCatalog", "AggregateRating"],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce & D2C brands",
    description: "Category and product SEO, Shopify and WooCommerce performance.",
    color: "#2563EB", // Growth Blue
    bgLight: "bg-blue-50 dark:bg-blue-950/30",
    bgDark: "text-blue-600 dark:text-blue-400",
    borderLight: "border-blue-200/80 dark:border-blue-800/40",
    borderDark: "hover:border-blue-500/60 dark:hover:border-blue-500/60",
    badge: "Revenue Attribution",
    stats: { value: "+185%", label: "Organic Revenue" },
    challenges: "Faceted navigation duplicate content, Shopify crawl bloat, thin product copy, and fierce PPC price wars.",
    solution: "Clean collection taxonomy, automated Product rich snippets, Core Web Vitals acceleration, and high-margin non-branded keyword ranking.",
    deliverables: [
      "Product & Merchant Center structured data feed",
      "Shopify & WooCommerce crawl depth optimization",
      "Faceted filter canonicalization & index control",
      "Revenue attribution & GA4 purchase tracking",
    ],
    schemaTypes: ["Product", "Offer", "Brand", "MerchantReturnPolicy"],
  },
  {
    id: "services",
    icon: Store,
    title: "Local & professional services",
    description: "More calls and bookings from people searching nearby.",
    color: "#0284C7", // Sky Blue
    bgLight: "bg-sky-50 dark:bg-sky-950/30",
    bgDark: "text-sky-600 dark:text-sky-400",
    borderLight: "border-sky-200/80 dark:border-sky-800/40",
    borderDark: "hover:border-sky-500/60 dark:hover:border-sky-500/60",
    badge: "Local 3-Pack Rank",
    stats: { value: "#1-3", label: "Google Map Pack" },
    challenges: "Missing service area landing pages, spam competitor map listings, inconsistent NAP citations, and low inquiry conversion rates.",
    solution: "Dominant Google Map Pack optimization, localized suburban landing pages, high-velocity review generation, and click-to-call conversion tracking.",
    deliverables: [
      "Top 3 Google Map Pack geo-grid optimization",
      "Custom suburb & postal code landing page hierarchy",
      "Consistent 100+ citation directory syndication",
      "Dynamic phone call & form inquiry tracking",
    ],
    schemaTypes: ["LocalBusiness", "ProfessionalService", "PostalAddress"],
  },
];

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem | null>(null);

  return (
    <section id="industries" className="relative py-12 sm:py-16 selection:bg-[#2563EB]/25">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==========================================================
            HEADER MATCHING SCREENSHOT CONTENT EXACTLY
        ========================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-3xl">
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] dark:text-[#14B8A6] mb-2">
              <span className="w-5 h-px bg-[#2563EB] dark:bg-[#14B8A6]" />
              <span>INDUSTRIES</span>
            </div>

            {/* Headline matching screenshot */}

            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-stone-900 dark:text-white leading-[1.12]">
              Experience where trust and <br />
              <span className="text-[#2563EB]">
                visibility more
              </span>
            </h2>
          </div>

          {/* Top-right action link matching screenshot */}
          <div className="shrink-0">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm sm:text-base font-bold text-stone-900 dark:text-white hover:text-[#2563EB] dark:hover:text-[#14B8A6] transition-colors pb-1 border-b-2 border-stone-300 dark:border-stone-700 hover:border-[#2563EB] dark:hover:border-[#14B8A6]"
            >
              <span>Industries we serve</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ==========================================================
            4 INDUSTRY CARDS GRID (Exact Content + Live Moving Border)
        ========================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {INDUSTRIES_DATA.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                onClick={() => setSelectedIndustry(industry)}
                className="relative p-[1.5px] rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer h-full"
              >
                {/* Live Moving Border (Continuous spin, Gemini spectrum) matching Services.tsx */}
                <div className="absolute inset-[-100%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_55%,#2563EB_68%,#38BDF8_76%,#FFFFFF_84%,#F59E0B_92%,#EC4899_98%,transparent_100%)] pointer-events-none" />

                {/* Card Interior */}
                <div className="relative z-10 flex flex-col justify-between h-full rounded-[calc(1rem-1.5px)] p-6 sm:p-7 bg-[#F8FAFC] dark:bg-[#0A1020] border border-stone-200/60 dark:border-white/5 transition-colors duration-300">
                  {/* Top Section */}
                  <div>
                    {/* Icon badge matching screenshot layout */}
                    <div className="flex items-center justify-between mb-8">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${industry.bgLight} ${industry.bgDark} border ${industry.borderLight} transition-transform duration-300 group-hover:scale-105 shadow-xs`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-stone-100 dark:bg-white/5 text-stone-500 dark:text-stone-400 border border-stone-200/60 dark:border-white/5">
                        {industry.badge}
                      </span>
                    </div>

                    {/* Title (Clean constant color, no hover color change) */}
                    <h3 className="text-xl font-bold tracking-tight text-stone-900 dark:text-white mb-3">
                      {industry.title}
                    </h3>

                    {/* Description from Screenshot */}
                    <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-6 font-normal">
                      {industry.description}
                    </p>
                  </div>

                  {/* Bottom Action: "Learn more →" (Clean constant color, no hover color change) */}
                  <div className="pt-4 border-t border-stone-200/70 dark:border-white/10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-stone-900 dark:text-white">
                      <span>Learn more</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>

                    <span className="text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                      {industry.stats.value}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ==========================================================
          INTERACTIVE DETAIL MODAL / DRAWER
      ========================================================== */}
      <AnimatePresence>
        {selectedIndustry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndustry(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#0B1220] rounded-3xl p-6 sm:p-8 border border-stone-200 dark:border-white/10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndustry(null)}
                aria-label="Close dialog"
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-stone-100 dark:bg-white/10 text-stone-500 hover:text-stone-900 dark:hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              {(() => {
                const ModalIcon = selectedIndustry.icon;
                return (
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center ${selectedIndustry.bgLight} ${selectedIndustry.bgDark} border ${selectedIndustry.borderLight}`}
                    >
                      <ModalIcon className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] dark:text-[#14B8A6]">
                        {selectedIndustry.badge}
                      </span>
                      <h3 className="text-2xl font-black text-stone-900 dark:text-white">
                        {selectedIndustry.title}
                      </h3>
                    </div>
                  </div>
                );
              })()}

              {/* Content description */}
              <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed mb-6 font-medium">
                {selectedIndustry.description}
              </p>

              {/* Key Challenge & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/5">
                  <span className="text-xs font-mono font-bold uppercase text-stone-400 block mb-1">
                    Industry Challenge
                  </span>
                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    {selectedIndustry.challenges}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40">
                  <span className="text-xs font-mono font-bold uppercase text-[#2563EB] dark:text-[#38BDF8] block mb-1">
                    Our Solution Strategy
                  </span>
                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    {selectedIndustry.solution}
                  </p>
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div className="mb-6">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 mb-3">
                  Key Technical Deliverables
                </h4>
                <div className="space-y-2">
                  {selectedIndustry.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800 dark:text-stone-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Structured Data & Schema badges */}
              <div className="mb-8">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 mb-2">
                  Targeted Schema Markup Hierarchy
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedIndustry.schemaTypes.map((schema, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-300 border border-stone-200/70 dark:border-white/10"
                    >
                      @{schema}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-stone-200 dark:border-white/10">
                <Link
                  href={`/contact?industry=${encodeURIComponent(selectedIndustry.title)}`}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/25 transition-all"
                >
                  <span>Request {selectedIndustry.title} Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={() => setSelectedIndustry(null)}
                  className="w-full sm:w-auto px-5 py-3 rounded-full border border-stone-200 dark:border-white/15 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-white/5 text-xs sm:text-sm font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section >
  );
}

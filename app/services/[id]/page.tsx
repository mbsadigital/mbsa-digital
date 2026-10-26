"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Award,
  Clock,
  ShieldCheck,
  Zap,
  ChevronRight,
  ChevronDown,
  Layers,
  Search,
  BarChart3,
  Globe,
  Share2,
  Target,
  MapPin,
  Link2,
  DollarSign,
  Gauge,
  HelpCircle,
  ExternalLink,
  Plus,
  Minus,
  Rocket,
  Check,
  Flame,
  FileCheck,
} from "lucide-react";
import { SERVICES_DATA, type ServiceDetail } from "@/lib/servicesData";
import { getServiceFitDetails } from "@/lib/serviceFitData";

// Icon mapping helper
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  BarChart3,
  Globe,
  Share2,
  Target,
  TrendingUp,
  MapPin,
  Zap,
  Layers,
  Link2,
  DollarSign,
  Gauge,
};

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = (params?.id as string) || "";

  // Lookup active service by id or slug
  const service = useMemo<ServiceDetail>(() => {
    return (
      SERVICES_DATA.find(
        (s) =>
          s.id.toLowerCase() === id.toLowerCase() ||
          s.slug.toLowerCase() === id.toLowerCase() ||
          s.num === id
      ) || SERVICES_DATA[0]
    );
  }, [id]);

  // Lookup in-depth fit and inclusions data
  const fitDetails = useMemo(() => {
    return getServiceFitDetails(service.slug || service.id);
  }, [service]);

  // Other services for bottom browsing
  const otherServices = useMemo(() => {
    return SERVICES_DATA.filter((s) => s.id !== service.id);
  }, [service]);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Inclusion Category Tab State
  const [activeInclusionTab, setActiveInclusionTab] = useState<number>(0);

  const ServiceIcon = ICON_MAP[service.iconName] || Search;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0908] text-stone-900 dark:text-stone-100 selection:bg-orange-500/20 selection:text-[#EA580C] transition-colors duration-500">
      {/* Background ambient lighting */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-16 right-1/4 w-[600px] h-[600px] rounded-full bg-orange-500/[0.05] dark:bg-orange-500/[0.08] blur-[160px]" />
        <div className="absolute bottom-1/3 left-10 w-[550px] h-[550px] rounded-full bg-amber-500/[0.04] dark:bg-amber-500/[0.06] blur-[160px]" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-24 sm:pt-28 pb-20 space-y-16 sm:space-y-24">
        {/* ========================================================
            1. TOP NAVIGATION / BREADCRUMB
        ======================================================== */}
        <section className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200/70 dark:border-white/10 pb-6">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-stone-200/90 dark:border-white/15 bg-white/90 dark:bg-white/[0.04] backdrop-blur-xl text-stone-700 dark:text-stone-300 text-xs sm:text-sm font-bold shadow-sm hover:border-[#EA580C] hover:text-[#EA580C] dark:hover:border-[#EA580C] dark:hover:text-[#F97316] transition-all duration-200 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Services</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
            <Link
              href="/"
              className="hover:text-stone-900 dark:hover:text-white transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <Link
              href="/services"
              className="hover:text-stone-900 dark:hover:text-white transition-colors"
            >
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#EA580C] dark:text-[#F97316] font-bold truncate max-w-[220px]">
              {service.shortTitle}
            </span>
          </div>
        </section>

        {/* ========================================================
            2. HERO SECTION
        ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headline, Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-orange-500/15 to-amber-500/15 border border-orange-500/30 text-[#EA580C] dark:text-[#F97316] text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                SERVICE {service.num}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 dark:bg-white/10 text-stone-600 dark:text-stone-300 text-xs font-medium border border-stone-200/80 dark:border-white/10">
                {service.badge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-stone-900 dark:text-white">
              {service.title}
            </h1>

            <p className="text-base sm:text-xl font-medium text-stone-700 dark:text-stone-200 leading-snug">
              {service.tagline}
            </p>

            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 leading-relaxed font-normal">
              {service.longDescription}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-3">
              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-white/[0.04] border border-stone-200/80 dark:border-white/10 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 text-[#EA580C] dark:text-[#F97316] flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-lg font-black text-stone-900 dark:text-white leading-tight">
                    {service.stats.highlight}
                  </p>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">
                    {service.stats.label}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-white/[0.04] border border-stone-200/80 dark:border-white/10 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-lg font-black text-stone-900 dark:text-white leading-tight">
                    {service.caseStudy.metric}
                  </p>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">
                    {service.caseStudy.client} Lift
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-white/[0.04] border border-stone-200/80 dark:border-white/10 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-lg font-black text-stone-900 dark:text-white leading-tight">
                    100%
                  </p>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">
                    Live Verified Proof
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href={`/#contact`}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] via-[#EA580C] to-[#C2410C] hover:from-[#C2410C] hover:to-[#9A3412] text-white text-sm font-bold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Book This Service Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#deliverables"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-white/5 hover:border-[#EA580C] hover:text-[#EA580C] text-stone-800 dark:text-stone-200 text-sm font-bold transition-all"
              >
                <span>View Deliverables</span>
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Tailored Vector Illustration Showcase Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full rounded-[36px] bg-white dark:bg-[#120F0D] border border-orange-500/25 shadow-2xl p-6 sm:p-8 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 dark:bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-200/70 dark:border-white/10">
                <span className="text-xs font-mono font-bold text-stone-500 dark:text-stone-400">
                  ILLUSTRATION PREVIEW
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  INTERACTIVE
                </span>
              </div>

              {/* High-Impact Interactive Architecture Stage */}
              <div className="relative w-full h-72 sm:h-80 rounded-2xl bg-stone-50 dark:bg-black/60 border border-stone-200/80 dark:border-white/10 flex flex-col justify-between p-5 overflow-hidden shadow-inner">
                {/* Ambient dynamic wave */}
                <div className="absolute inset-0 opacity-15 dark:opacity-20 pointer-events-none bg-[radial-gradient(#EA580C_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#C2410C] text-white flex items-center justify-center shadow-lg shadow-orange-500/30">
                      <ServiceIcon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-stone-900 dark:text-white">
                        {service.shortTitle}
                      </h4>
                      <p className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                        Status: Active Telemetry
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-orange-500/10 text-[#EA580C] dark:text-[#F97316] border border-orange-500/20">
                    {service.num}/12
                  </span>
                </div>

                {/* Center Animated Metric Flow Diagram */}
                <div className="relative z-10 my-auto py-2">
                  <div className="p-4 rounded-xl bg-white/90 dark:bg-white/[0.05] border border-stone-200/80 dark:border-white/10 shadow-sm flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase font-mono tracking-wider text-stone-500">
                        Key Growth Deliverable
                      </p>
                      <p className="text-base font-black text-stone-900 dark:text-white">
                        {service.stats.highlight}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {service.stats.label}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {service.tools.slice(0, 4).map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-stone-100 dark:bg-white/10 text-[10px] font-mono text-stone-700 dark:text-stone-300 border border-stone-200/70 dark:border-white/10"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-200/60 dark:border-white/10 flex items-center justify-between text-[11px] text-stone-500 relative z-10">
                  <span>Architecture: Modular &amp; Scalable</span>
                  <span className="font-mono text-orange-600 dark:text-orange-400 font-bold">
                    100% Verified
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================
            3. WHAT'S INCLUDED / DELIVERABLES SECTION
        ======================================================== */}
        <section id="deliverables" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200/70 dark:border-white/10 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-[#EA580C] dark:text-[#F97316] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <FileCheck className="w-3.5 h-3.5" />
                <span>Scope of Work</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-stone-900 dark:text-white">
                Everything Included in This Service
              </h2>
            </div>
            <p className="text-sm text-stone-500 dark:text-stone-400 max-w-md">
              Clear, transparent deliverables. No hidden surprises or vague promises.
            </p>
          </div>

          {/* Categorized Inclusions if available */}
          {fitDetails?.inclusionCategories && fitDetails.inclusionCategories.length > 0 ? (
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {fitDetails.inclusionCategories.map((cat, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveInclusionTab(idx)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      activeInclusionTab === idx
                        ? "bg-[#EA580C] text-white shadow-md shadow-orange-500/25"
                        : "bg-stone-100 dark:bg-white/5 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-white/10"
                    }`}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fitDetails.inclusionCategories[activeInclusionTab]?.items.map(
                  (item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white dark:bg-[#120F0D] border border-stone-200/80 dark:border-white/10 flex items-start gap-3.5 shadow-sm hover:border-[#EA580C]/40 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-orange-500/10 text-[#EA580C] dark:text-[#F97316] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      </div>
                      <p className="text-sm sm:text-[15px] font-medium text-stone-800 dark:text-stone-200 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          ) : (
            /* Deliverables Grid from Service Object */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.deliverables.map((deliv, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white dark:bg-[#120F0D] border border-stone-200/80 dark:border-white/10 shadow-sm hover:shadow-md hover:border-orange-500/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-[#EA580C] dark:text-[#F97316] flex items-center justify-center font-bold text-sm">
                      {(idx + 1).toString().padStart(2, "0")}
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-stone-800 dark:text-stone-200 leading-relaxed">
                      {deliv}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-stone-100 dark:border-white/5 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Included &amp; Verified</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ========================================================
            4. IS THIS A GOOD FIT FOR YOU?
        ======================================================== */}
        {fitDetails?.goodFitPoints && fitDetails.goodFitPoints.length > 0 && (
          <section className="rounded-3xl p-8 sm:p-12 bg-stone-50 dark:bg-[#120F0D] border border-stone-200/80 dark:border-white/10 space-y-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#EA580C] dark:text-[#F97316]">
                Target Audience Alignment
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-white mt-1">
                {fitDetails.goodFitTitle || "This is a great fit if:"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fitDetails.goodFitPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="p-4.5 rounded-2xl bg-white dark:bg-white/[0.03] border border-stone-200/70 dark:border-white/10 flex items-start gap-3 shadow-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <p className="text-sm font-medium text-stone-800 dark:text-stone-200 leading-snug">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================
            5. HOW WE DELIVER RESULTS (4-STEP PROCESS)
        ======================================================== */}
        <section className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-[#EA580C] dark:text-[#F97316] text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Execution Blueprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-stone-900 dark:text-white">
              Step-by-Step Delivery Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl p-6 bg-white dark:bg-[#120F0D] border border-stone-200/80 dark:border-white/10 shadow-sm hover:border-[#EA580C]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-[#EA580C] dark:text-[#F97316]">
                      {step.step}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                  </div>
                  <h3 className="text-lg font-black text-stone-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-stone-100 dark:border-white/5 text-[11px] font-mono text-stone-400">
                  PHASE 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            6. TOOLS & TECHNOLOGIES STACK
        ======================================================== */}
        <section className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#120F0D] border border-stone-200/80 dark:border-white/10 shadow-sm space-y-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#EA580C] dark:text-[#F97316]">
              Verified Tech Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-white mt-1">
              Industry-Standard Tools &amp; Frameworks
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {service.tools.map((tool, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-50 dark:bg-white/5 border border-stone-200/80 dark:border-white/10 text-xs sm:text-sm font-bold text-stone-800 dark:text-stone-200"
              >
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            7. PROVEN CLIENT IMPACT CASE STUDY SPOTLIGHT
        ======================================================== */}
        <section className="p-8 sm:p-12 rounded-[36px] bg-gradient-to-br from-stone-900 to-black text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold uppercase tracking-wider">
                Case Study Proof
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                Client Result: {service.caseStudy.client}
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl">
                {service.caseStudy.impact}
              </p>
            </div>

            <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-white/10 border border-white/15 backdrop-blur-xl text-center space-y-2">
              <span className="text-4xl sm:text-5xl font-black text-[#F97316] font-mono">
                {service.caseStudy.metric}
              </span>
              <p className="text-xs uppercase tracking-wider text-stone-300 font-bold">
                Audited Performance Milestone
              </p>
              {service.caseStudy.link && (
                <Link
                  href={service.caseStudy.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-white pt-2 transition-colors"
                >
                  <span>View Case Study Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* ========================================================
            8. FREQUENTLY ASKED QUESTIONS (FAQ)
        ======================================================== */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="space-y-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#EA580C] dark:text-[#F97316]">
                Clear Answers
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-stone-900 dark:text-white mt-1">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;

                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-stone-200/80 dark:border-white/10 bg-white dark:bg-[#120F0D] overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-stone-900 dark:text-white text-base sm:text-lg cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <div className="w-8 h-8 rounded-full bg-stone-100 dark:bg-white/10 flex items-center justify-center shrink-0">
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-[#EA580C]" />
                        ) : (
                          <Plus className="w-4 h-4 text-stone-500" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-5 sm:px-6 pb-6 text-sm text-stone-600 dark:text-stone-300 leading-relaxed border-t border-stone-100 dark:border-white/5 pt-4"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ========================================================
            9. BOTTOM CTA BANNER
        ======================================================== */}
        <section className="relative rounded-[36px] p-8 sm:p-12 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-transparent border border-orange-500/30 shadow-xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-xl">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#FB923C] text-white flex items-center justify-center shadow-xl shadow-orange-500/30 text-3xl shrink-0">
              🚀
            </div>
            <div>
              <span className="text-xs font-bold text-[#EA580C] uppercase tracking-wider font-mono">
                Get Started Today
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-white mt-0.5">
                Ready to Deploy {service.shortTitle}?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 max-w-xl">
                Let's discuss how this strategy fits into your business growth roadmap.
              </p>
            </div>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white text-sm font-bold shadow-lg shadow-orange-500/30 active:scale-95 transition-all shrink-0"
          >
            <span>Start a Discussion</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* ========================================================
            10. BROWSE OTHER SERVICES
        ======================================================== */}
        <section className="space-y-6 pt-6 border-t border-stone-200/70 dark:border-white/10">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black text-stone-900 dark:text-white">
              Explore Other Growth Solutions
            </h3>
            <Link
              href="/services"
              className="text-xs sm:text-sm font-bold text-[#EA580C] dark:text-[#F97316] hover:underline flex items-center gap-1"
            >
              <span>View All 12 Services</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherServices.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                href={`/services/${item.id}`}
                className="group p-5 rounded-3xl bg-white dark:bg-[#120F0D] border border-stone-200/80 dark:border-white/10 hover:border-[#EA580C] hover:shadow-lg transition-all flex items-center justify-between"
              >
                <div className="space-y-1">
                  <span className="text-[11px] font-mono font-bold text-stone-400">
                    SERVICE {item.num}
                  </span>
                  <h4 className="text-base font-black text-stone-900 dark:text-white group-hover:text-[#EA580C] dark:group-hover:text-[#F97316] transition-colors">
                    {item.shortTitle}
                  </h4>
                  <p className="text-xs text-stone-500 line-clamp-1">{item.badge}</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-stone-100 dark:bg-white/10 group-hover:bg-[#EA580C] group-hover:text-white flex items-center justify-center transition-all shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

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
  ChevronLeft,
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
  ShoppingCart,
  Mail,
  Smartphone,
  Code2,
} from "lucide-react";
import { SERVICES_DATA, type ServiceDetail } from "@/lib/servicesData";
import { getServiceFitDetails } from "@/lib/serviceFitData";
import { getServiceProofSlides } from "@/lib/serviceProofData";
import { ServiceCardIllustration } from "../page";

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
  FileCheck,
  ShoppingCart,
  Sparkles,
  Award,
  Mail,
  Smartphone,
  ShieldCheck,
  Code2,
  Rocket,
};

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = (params?.id as string) || "";

  // Lookup active service by id or slug or alias (supports slug, id, or number e.g. "4" or "04")
  const service = useMemo<ServiceDetail>(() => {
    const rawId = id.trim();
    return (
      SERVICES_DATA.find(
        (s) =>
          s.id.toLowerCase() === rawId.toLowerCase() ||
          s.slug.toLowerCase() === rawId.toLowerCase() ||
          s.num === rawId ||
          s.num === rawId.padStart(2, "0") ||
          (!isNaN(Number(rawId)) && parseInt(s.num, 10) === parseInt(rawId, 10)) ||
          s.aliases?.some((a) => a.toLowerCase() === rawId.toLowerCase())
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

  // Proof slides state
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const ServiceIcon = ICON_MAP[service.iconName] || Search;

  // Verified real client telemetry proofs mapped to this service
  const proofSlides = useMemo(() => {
    return getServiceProofSlides(service.slug || service.id);
  }, [service]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0908] text-stone-900 dark:text-stone-100 selection:bg-blue-500/20 selection:text-[#2563EB] transition-colors duration-500">
      {/* Background ambient lighting */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-16 right-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/[0.05] dark:bg-blue-500/[0.08] blur-[160px]" />
        <div className="absolute bottom-1/3 left-10 w-[550px] h-[550px] rounded-full bg-cyan-500/[0.04] dark:bg-cyan-500/[0.06] blur-[160px]" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-24 sm:pt-28 pb-20 space-y-16 sm:space-y-24">
        {/* ========================================================
            1. TOP NAVIGATION / BREADCRUMB
        ======================================================== */}
        <section className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200/70 dark:border-white/10 pb-6">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-stone-200/90 dark:border-white/15 bg-white/90 dark:bg-white/[0.04] backdrop-blur-xl text-stone-700 dark:text-stone-300 text-xs sm:text-sm font-bold shadow-sm hover:border-[#2563EB] hover:text-[#2563EB] dark:hover:border-[#2563EB] dark:hover:text-[#60A5FA] transition-all duration-200 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All 25 Services</span>
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
            <span className="text-[#2563EB] dark:text-[#60A5FA] font-bold truncate max-w-[220px]">
              {service.shortTitle}
            </span>
          </div>
        </section>

        {/* ========================================================
            2. HERO SECTION WITH EMBEDDED ANIMATED SVG
        ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headline, Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-[#2563EB] dark:text-[#60A5FA] text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                SERVICE {service.num}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 dark:bg-white/10 text-stone-600 dark:text-stone-300 text-xs font-medium border border-stone-200/80 dark:border-white/10">
                {service.category}
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
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-[#2563EB] dark:text-[#60A5FA] flex items-center justify-center font-bold">
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
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#2563EB] text-white text-xs sm:text-[13.5px] font-bold border hover:border-blue-800 shadow-md shadow-[#2563EB] hover:shadow-[#2563EB] hover:-translate-y-0.5 transition-all duration-300 min-h-[42px] sm:min-h-[44px] touch-manipulation"
              >
                <span>Book This Service Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="#deliverables"
                className="relative group/link inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/90 dark:bg-[#0f0f11] backdrop-blur-xl text-stone-800 dark:text-white text-xs sm:text-[13.5px] font-semibold shadow-sm hover:bg-orange-600/[0.10] transition-all duration-300 min-h-[42px] sm:min-h-[44px] touch-manipulation before:content-[''] before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-orange-500 before:via-amber-400 before:to-orange-600 before:opacity-0 before:transition-opacity before:duration-300 before:pointer-events-none hover:before:opacity-100 after:content-[''] after:absolute after:inset-[1px] after:rounded-full after:bg-white/90 dark:after:bg-[#0f0f11] after:opacity-0 after:transition-opacity after:duration-300 after:pointer-events-none hover:after:opacity-100"
              >
                <span className="relative z-10">View Deliverables</span>
                <ChevronDown className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Tailored Animated Vector Illustration */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full rounded-[36px] bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 shadow-2xl p-6 sm:p-7 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-200/70 dark:border-white/10">
                <span className="text-xs font-mono font-bold text-stone-500 dark:text-stone-400">
                  {service.lightImage ? "3D ARCHITECTURAL SHOWCASE" : "INTERACTIVE VECTOR VISUAL"}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  SERVICE {service.num}/25
                </span>
              </div>

              {/* Dedicated Showcase Canvas */}
              <div className="relative w-full h-72 sm:h-80 rounded-2xl bg-stone-50/90 dark:bg-black/60 border border-stone-200/80 dark:border-white/10 flex items-center justify-center p-4 overflow-hidden shadow-inner group/canvas">
                {service.lightImage ? (
                  <>
                    <Image
                      src={service.lightImage}
                      alt={`${service.title} 3D Visual (Light Mode)`}
                      fill
                      className="service-img-light object-contain p-3 sm:p-5 transition-transform duration-500 ease-out group-hover/canvas:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw"
                      priority
                      quality={85}
                      unoptimized
                    />
                    <Image
                      src={service.darkImage || service.lightImage}
                      alt={`${service.title} 3D Visual (Dark Mode)`}
                      fill
                      className="service-img-dark object-contain p-3 sm:p-5 transition-transform duration-500 ease-out group-hover/canvas:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw"
                      priority
                      quality={85}
                      unoptimized
                    />
                  </>
                ) : (
                  <ServiceCardIllustration
                    slug={service.slug}
                    isSelected={true}
                    isHovered={true}
                  />
                )}
              </div>

              {/* Under-illustration metadata bar */}
              <div className="mt-4 pt-3 border-t border-stone-200/70 dark:border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-stone-400 tracking-wider">
                    Core Outcome
                  </span>
                  <p className="text-sm font-black text-stone-900 dark:text-white">
                    {service.stats.highlight}
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold">
                  {service.stats.label}
                </span>
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-[#2563EB] dark:text-[#60A5FA] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <FileCheck className="w-3.5 h-3.5" />
                <span>Scope of Work</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-stone-900 dark:text-white">
                Everything Included in {service.shortTitle}
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
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeInclusionTab === idx
                        ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/25"
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
                      className="p-5 rounded-2xl bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 flex items-start gap-3.5 shadow-sm hover:border-[#2563EB]/40 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-500/10 text-[#2563EB] dark:text-[#60A5FA] flex items-center justify-center shrink-0 mt-0.5">
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
                  className="p-6 rounded-3xl bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 shadow-sm hover:shadow-md hover:border-[#2563EB]/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-[#2563EB] dark:text-[#60A5FA] flex items-center justify-center font-bold text-sm">
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
            4. AUDITED LIVE PROOF & TELEMETRY GALLERY
        ======================================================== */}
        <section className="relative rounded-[36px] p-6 sm:p-10 bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 shadow-xl overflow-hidden space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200/70 dark:border-white/10 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Audited Proof Telemetry</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-stone-900 dark:text-white">
                Live Performance &amp; Execution Proof
              </h2>
            </div>
            <p className="text-sm text-stone-500 dark:text-stone-400 max-w-md">
              Direct telemetry from live Google Search Console, GA4 conversion funnels, and verified client campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Proof Viewer Preview */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-stone-200/80 dark:border-white/10 bg-stone-900/5 dark:bg-black/80 shadow-2xl flex items-center justify-center group">
                <Image
                  src={proofSlides[currentSlide]?.url || "/Analytics/Harris/harrisgsc.png"}
                  alt={proofSlides[currentSlide]?.title || "Live Performance Telemetry"}
                  fill
                  className="object-contain p-2 sm:p-4 transition-transform duration-300 group-hover:scale-[1.01]"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority={currentSlide === 0}
                  quality={90}
                  unoptimized
                />

                {/* Top Badges: Channel / Telemetry Tag + Service Badge + Client */}
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 right-2 sm:right-3 z-10 flex items-center justify-between gap-1.5 sm:gap-2 pointer-events-none">
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/85 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-mono font-bold border border-white/20 shadow-md">
                      {proofSlides[currentSlide]?.tag}
                    </span>
                    <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold border border-blue-400/30 shadow-md truncate max-w-[130px] sm:max-w-none">
                      {service.shortTitle}
                    </span>
                  </div>

                  {proofSlides[currentSlide]?.client && (
                    <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-semibold border border-blue-400/30 shadow-md shrink-0">
                      <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-200" />
                      <span className="truncate max-w-[100px] sm:max-w-none">{proofSlides[currentSlide]?.client}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Interactive Slide Thumbnails */}
              <div className={`grid gap-2 pt-2 ${proofSlides.length > 4 ? "grid-cols-3 sm:grid-cols-5" : "grid-cols-2 sm:grid-cols-4"}`}>
                {proofSlides.map((slide, pIdx) => (
                  <button
                    key={pIdx}
                    type="button"
                    onClick={() => setCurrentSlide(pIdx)}
                    className={`relative aspect-[16/10] rounded-xl overflow-hidden border transition-all cursor-pointer bg-stone-100 dark:bg-stone-900 ${
                      currentSlide === pIdx
                        ? "border-[#2563EB] ring-2 ring-[#2563EB]/40 scale-[1.02]"
                        : "border-stone-200 dark:border-white/10 opacity-70 hover:opacity-100 hover:border-stone-400 dark:hover:border-white/30"
                    }`}
                    aria-label={`View proof slide ${pIdx + 1}: ${slide.title}`}
                  >
                    <Image
                      src={slide.url}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 25vw, 140px"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors" />
                  </button>
                ))}
              </div>

              {/* Slider Navigation Dots and Controls */}
              <div className="flex items-center justify-between pt-3 pb-1">
                <div className="flex items-center gap-1.5">
                  {proofSlides.map((_, pIdx) => (
                    <button
                      key={pIdx}
                      type="button"
                      onClick={() => setCurrentSlide(pIdx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentSlide === pIdx
                          ? "w-8 bg-[#2563EB]"
                          : "w-2 bg-stone-300 dark:bg-white/20 hover:bg-stone-400 dark:hover:bg-white/40"
                      }`}
                      aria-label={`Go to proof slide ${pIdx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentSlide((prev) => (prev <= 0 ? proofSlides.length - 1 : prev - 1))
                    }
                    className="p-2.5 rounded-xl bg-stone-100 dark:bg-white/10 hover:bg-stone-200 dark:hover:bg-white/20 text-stone-700 dark:text-stone-200 transition-colors cursor-pointer"
                    aria-label="Previous proof"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentSlide((prev) => (prev + 1) % proofSlides.length)
                    }
                    className="p-2.5 rounded-xl bg-stone-100 dark:bg-white/10 hover:bg-stone-200 dark:hover:bg-white/20 text-stone-700 dark:text-stone-200 transition-colors cursor-pointer"
                    aria-label="Next proof"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Slide Telemetry Details */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#2563EB] dark:text-[#60A5FA]">
                    PROOF 0{currentSlide + 1} OF 0{proofSlides.length}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      {service.shortTitle}
                    </span>
                    {proofSlides[currentSlide]?.client && (
                      <span className="text-xs font-mono font-semibold text-stone-500 dark:text-stone-400">
                        {proofSlides[currentSlide]?.client}
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-stone-900 dark:text-white leading-tight">
                  {proofSlides[currentSlide]?.title}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                  {proofSlides[currentSlide]?.description}
                </p>
              </div>

              {/* Metric Card */}
              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-white/[0.04] border border-stone-200/80 dark:border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-stone-500">
                    Verified Trajectory
                  </span>
                  <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
                    {proofSlides[currentSlide]?.metric}
                  </p>
                </div>
                <span className="text-xs font-semibold text-stone-600 dark:text-stone-300 max-w-[50%] text-right">
                  {proofSlides[currentSlide]?.metricLabel}
                </span>
              </div>

              {/* Highlights 2x2 Grid */}
              <div className="grid grid-cols-2 gap-3">
                {proofSlides[currentSlide]?.highlights.map((hl, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-3 rounded-xl bg-stone-50 dark:bg-white/[0.03] border border-stone-200/60 dark:border-white/5 space-y-0.5"
                  >
                    <p className="text-[10px] font-mono text-stone-400 uppercase">{hl.label}</p>
                    <p className="text-xs font-bold text-stone-900 dark:text-white">{hl.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            5. IS THIS A GOOD FIT FOR YOU?
        ======================================================== */}
        {fitDetails?.goodFitPoints && fitDetails.goodFitPoints.length > 0 && (
          <section className="rounded-3xl p-8 sm:p-12 bg-stone-50 dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 space-y-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
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
            6. HOW WE DELIVER RESULTS (4-STEP PROCESS)
        ======================================================== */}
        <section className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-[#2563EB] dark:text-[#60A5FA] text-xs font-mono font-bold uppercase tracking-wider mb-2">
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
                className="relative rounded-3xl p-6 bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 shadow-sm hover:border-[#2563EB]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-[#2563EB] dark:text-[#60A5FA]">
                      {step.step}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
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
            7. TOOLS & TECHNOLOGIES STACK
        ======================================================== */}
        <section className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 shadow-sm space-y-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
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
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </section>


        {/* ========================================================
            9. FREQUENTLY ASKED QUESTIONS (FAQ)
        ======================================================== */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="space-y-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA]">
                {service.title} FAQs
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
                    className="rounded-2xl border border-stone-200/80 dark:border-white/10 bg-white dark:bg-[#111B2E] overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-stone-900 dark:text-white text-base sm:text-lg cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <div className="w-8 h-8 rounded-full bg-stone-100 dark:bg-white/10 flex items-center justify-center shrink-0">
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-[#2563EB]" />
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
            10. BOTTOM CTA BANNER
        ======================================================== */}
        <section className="relative rounded-[36px] p-8 sm:p-12 bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent border border-blue-500/25 shadow-xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-xl">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white flex items-center justify-center shadow-xl shadow-blue-500/30 text-3xl shrink-0">
              🚀
            </div>
            <div>
              <span className="text-xs font-bold text-[#2563EB] dark:text-[#60A5FA] uppercase tracking-wider font-mono">
                Get Started Today
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-white mt-0.5">
                Ready to Deploy {service.shortTitle}?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 max-w-xl">
                Let&apos;s discuss how this strategy fits into your business growth roadmap.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#2563EB] text-white text-xs sm:text-[13.5px] font-bold border hover:border-blue-800 shadow-md shadow-[#2563EB] hover:shadow-[#2563EB] hover:-translate-y-0.5 transition-all duration-300 min-h-[42px] sm:min-h-[44px] touch-manipulation"
            >
              <span>Start a Discussion</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="relative group/link inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/90 dark:bg-[#0f0f11] backdrop-blur-xl text-stone-800 dark:text-white text-xs sm:text-[13.5px] font-semibold shadow-sm hover:bg-orange-600/[0.10] transition-all duration-300 min-h-[42px] sm:min-h-[44px] touch-manipulation before:content-[''] before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-orange-500 before:via-amber-400 before:to-orange-600 before:opacity-0 before:transition-opacity before:duration-300 before:pointer-events-none hover:before:opacity-100 after:content-[''] after:absolute after:inset-[1px] after:rounded-full after:bg-white/90 dark:after:bg-[#0f0f11] after:opacity-0 after:transition-opacity after:duration-300 after:pointer-events-none hover:after:opacity-100"
            >
              <span className="relative z-10">All 25 Services</span>
              <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* ========================================================
            11. BROWSE OTHER SERVICES OUT OF 25
        ======================================================== */}
        <section className="space-y-6 pt-6 border-t border-stone-200/70 dark:border-white/10">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-black text-stone-900 dark:text-white">
              Explore Other Growth Solutions
            </h3>
            <Link
              href="/services"
              className="text-xs sm:text-sm font-bold text-[#2563EB] dark:text-[#60A5FA] hover:underline flex items-center gap-1"
            >
              <span>View All 25 Services</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherServices.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                href={`/services/${item.id}`}
                className="group p-5 rounded-3xl bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 hover:border-[#2563EB] hover:shadow-lg transition-all flex items-center justify-between"
              >
                <div className="space-y-1">
                  <span className="text-[11px] font-mono font-bold text-stone-400">
                    SERVICE {item.num}
                  </span>
                  <h4 className="text-base font-black text-stone-900 dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors">
                    {item.shortTitle}
                  </h4>
                  <p className="text-xs text-stone-500 line-clamp-1">{item.category}</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-stone-100 dark:bg-white/10 group-hover:bg-[#2563EB] group-hover:text-white flex items-center justify-center transition-all shrink-0">
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

"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  TrendingUp,
  Globe2,
  ArrowUpRight,
  Zap,
  Search,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const SEARCH_PROOFS = [
  {
    id: "artish-1",
    client: "Artish Brush",
    market: "UK & International D2C",
    query: "artish brush oral care uk",
    highlight: "#1 Google Search Rank",
    stat: "+340% Impressions",
    image: "/SearchResult/artishbrushresult.png",
  },
  {
    id: "drtungs-1",
    client: "Dr. Tung's",
    market: "Holistic Health & Oral Care",
    query: "dr tungs natural dental products",
    highlight: "Page 1 Organic SERP",
    stat: "Top 3 Authority",
    image: "/SearchResult/drtungssearchresult.png",
  },
  {
    id: "harris-1",
    client: "Harris Pharmacy",
    market: "London, UK Healthcare",
    query: "pharmacy clinic london local search",
    highlight: "Google Maps 3-Pack & #1",
    stat: "100% Local Inbound",
    image: "/SearchResult/harrissearchresult.png",
  },
  {
    id: "maiahb-1",
    client: "Maiah B Clinic",
    market: "London Medical Aesthetics",
    query: "skin aesthetics clinic london",
    highlight: "First Page Leadership",
    stat: "+210% Consults",
    image: "/SearchResult/maiahbsearchresult.png",
  },
  {
    id: "artish-2",
    client: "Artish Brush",
    market: "E-Commerce Search Growth",
    query: "best ionic toothbrush reviews",
    highlight: "Featured Rich Snippet",
    stat: "Zero-Click Visibility",
    image: "/SearchResult/artishbrushresult2.png",
  },
  {
    id: "drtungs-2",
    client: "Dr. Tung's",
    market: "Organic Category Growth",
    query: "natural oral health hygiene products",
    highlight: "High Search Volume SERP",
    stat: "+180% Organic Leads",
    image: "/SearchResult/drtungssearch2.png",
  },
  {
    id: "harris-2",
    client: "Harris Pharmacy",
    market: "London Local Authority",
    query: "nhs private pharmacy london clinic",
    highlight: "Top Rated London Clinic",
    stat: "Leading SERP Position",
    image: "/SearchResult/harrissearchresult2.png",
  },
  {
    id: "maiahb-2",
    client: "Maiah B Clinic",
    market: "Aesthetic Dermatology",
    query: "dermatology treatments london reviews",
    highlight: "Top Tier SERP Takeover",
    stat: "High-Margin Pipeline",
    image: "/SearchResult/maiahbsearchresult2.png",
  },
  {
    id: "maiahb-3",
    client: "Maiah B Clinic",
    market: "Category Dominance",
    query: "aesthetic skincare treatments uk",
    highlight: "Multiple Page 1 Placements",
    stat: "Dominant Footprint",
    image: "/SearchResult/maiahbsearchresult3.png",
  },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = SEARCH_PROOFS.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = useCallback((idx: number) => {
    setActiveIndex(idx);
  }, []);

  // Auto-advance every 4.5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        py-16 sm:py-20 lg:py-24
        text-slate-900 dark:text-white
        font-[family-name:var(--font-plus-jakarta-sans)]
        transition-colors duration-500
      "
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#2563EB]/[0.06] dark:bg-[#2563EB]/[0.08] blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#14B8A6]/[0.05] dark:bg-[#14B8A6]/[0.07] blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(#2563EB 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Pill */}
        <div className="flex items-center gap-3 mb-4 sm:mb-5">
          <span className="w-8 h-px bg-[#2563EB] dark:bg-[#14B8A6]" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-[#2563EB] dark:text-[#14B8A6]">
            About MBSA Digital
          </span>
        </div>

        {/* BUSINESS-FIRST ABOUT HERO */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column: Strategic Positioning */}
          <div className="lg:col-span-6 xl:col-span-6 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black tracking-tight leading-[1.08] text-slate-950 dark:text-white">
              Smart Business with
              <span className="block mt-1 sm:mt-2 text-[#2563EB] dark:text-[#2f97ee]">
                Smart People
              </span>
            </h2>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
              We combine rigorous technical SEO, GA4 revenue attribution, and clean engineering architecture to help ambitious brands transform organic search into high-margin commercial velocity.
            </p>

            {/* Strategic Value Pillars Strip */}
            <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3 py-3 border-y border-slate-200/80 dark:border-white/10">
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-extrabold text-[#2563EB] dark:text-[#3B82F6] flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>+340%</span>
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium">Organic Surge</span>
              </div>
              <div className="flex flex-col border-x border-slate-200/80 dark:border-white/10 px-2 sm:px-3">
                <span className="text-xs sm:text-sm font-extrabold text-[#2563EB] dark:text-[#3B82F6] flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>100/100</span>
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium">Core Web Vitals</span>
              </div>
              <div className="flex flex-col pl-1">
                <span className="text-xs sm:text-sm font-extrabold text-[#2563EB] dark:text-[#3B82F6] flex items-center gap-1">
                  <Globe2 className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Transatlantic</span>
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium">UK ↔ India Reach</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3.5">
              <Link
                href="/about"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  w-full
                  sm:w-auto
                  px-5
                  sm:px-6
                  py-2.5
                  sm:py-3
                  rounded-full
                  bg-[#2563EB]
                  text-white
                  text-xs
                  sm:text-[13.5px]
                  font-bold
                  border
                  border-transparent
                  hover:bg-blue-600
                  shadow-md
                  shadow-[#2563EB]/25
                  hover:shadow-[#2563EB]/40
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                  min-h-[42px]
                  sm:min-h-[44px]
                  touch-manipulation
                "
              >
                <span>About MBSA Digital</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Stacked Card Deck of Search Result Proofs */}
          <div
            className="lg:col-span-6 xl:col-span-6 relative mx-auto w-full max-w-[500px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* Background Ambient Aura */}
            <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-[#2563EB]/15 via-[#6366F1]/10 to-[#14B8A6]/15 blur-2xl pointer-events-none" />

            {/* Deck Top Header Bar */}
            <div className="relative z-10 flex items-center justify-between pb-3 mb-2 border-b border-slate-200/80 dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-800 dark:text-white flex items-center gap-1.5">
                  <span>VERIFIED SEARCH PROOFS</span>
                  <span className="text-[10px] font-bold text-[#2563EB] dark:text-[#60A5FA]">({total})</span>
                </span>
              </div>

              {/* Slider Controls (Prev / Next & Counter) */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous proof"
                    className="w-7 h-7 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all shadow-xs cursor-pointer"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next proof"
                    className="w-7 h-7 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all shadow-xs cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Stacked Cards Deck Viewport (Compact Size) */}
            <div className="relative w-full h-[360px] sm:h-[390px]">
              {SEARCH_PROOFS.map((proof, idx) => {
                const relIndex = (idx - activeIndex + total) % total;
                if (relIndex > 2) return null;

                const xOffset = relIndex * 20;
                const yOffset = -relIndex * 8;
                const scale = 1 - relIndex * 0.04;
                const zIndex = 30 - relIndex * 10;
                const opacity = relIndex === 0 ? 1 : relIndex === 1 ? 0.90 : 0.70;
                const isFront = relIndex === 0;

                return (
                  <motion.div
                    key={proof.id}
                    initial={false}
                    animate={{
                      x: xOffset,
                      y: yOffset,
                      scale: scale,
                      zIndex: zIndex,
                      opacity: opacity,
                    }}
                    drag={isFront ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -40) nextSlide();
                      else if (info.offset.x > 40) prevSlide();
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 26,
                    }}
                    onClick={() => {
                      if (!isFront) goToSlide(idx);
                    }}
                    className={`
                      absolute left-0 top-0
                      w-[calc(100%-20px)] sm:w-[calc(100%-36px)]
                      h-[340px] sm:h-[370px]
                      rounded-[22px] sm:rounded-[26px]
                      border-2
                      ${isFront
                        ? "border-[#2563EB]/50 dark:border-blue-500/40 shadow-[0_16px_40px_rgba(37,99,235,0.14)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.65)]"
                        : "border-stone-200/90 dark:border-white/10 shadow-md cursor-pointer hover:border-[#2563EB]/50"
                      }
                      bg-white dark:bg-[#0E1726]
                      p-3.5 sm:p-4
                      flex flex-col justify-between
                      overflow-hidden
                      transition-colors duration-300
                      touch-pan-y
                    `}
                  >
                    {/* Top Row: Client Info + Rank Badge */}
                    <div className="flex items-center justify-between gap-2 pb-2 border-b border-stone-100 dark:border-white/5">
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white truncate">
                            {proof.client}
                          </span>
                          <span className="text-[10px] text-slate-400 dark:text-slate-500">•</span>
                          <span className="text-[10.5px] font-medium text-slate-500 dark:text-slate-400 truncate">
                            {proof.market}
                          </span>
                        </div>
                      </div>
                      <span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9.5px] font-black text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="w-2.5 h-2.5" />
                        <span>{proof.highlight}</span>
                      </span>
                    </div>

                    {/* Simulated Search Query Bar */}
                    <div className="my-1.5 flex items-center gap-2 px-2.5 py-1 rounded-lg bg-stone-100/90 dark:bg-white/[0.04] border border-stone-200/60 dark:border-white/5 text-[11px]">
                      <Search className="w-3 h-3 text-[#2563EB] shrink-0" />
                      <span className="font-mono text-slate-600 dark:text-slate-300 truncate">
                        google: &ldquo;{proof.query}&rdquo;
                      </span>
                    </div>

                    {/* Proof Screenshot Image Viewport */}
                    <div className="relative flex-1 w-full rounded-xl overflow-hidden bg-stone-50 dark:bg-[#070D1A] border border-stone-200/70 dark:border-white/10">
                      <Image
                        src={proof.image}
                        alt={`${proof.client} - Google Search Result Proof`}
                        fill
                        className="object-contain object-top p-1"
                        sizes="(max-width: 768px) 100vw, 460px"
                        priority={idx === 0}
                      />
                    </div>

                    {/* Bottom Metadata & Metric Badge */}
                    <div className="mt-2 pt-2 border-t border-stone-100 dark:border-white/5 flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-[#2563EB]" />
                        <span>Live Google SERP Placement</span>
                      </span>

                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Pagination Bullet Indicators */}
            <div className="flex items-center justify-center gap-1.5 mt-2">
              {SEARCH_PROOFS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => goToSlide(dotIdx)}
                  aria-label={`Go to proof ${dotIdx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${dotIdx === activeIndex
                      ? "w-6 bg-[#2563EB]"
                      : "w-1.5 bg-stone-300 dark:bg-white/20 hover:bg-stone-400"
                    }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
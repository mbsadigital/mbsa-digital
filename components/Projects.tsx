"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  TrendingUp,
} from "lucide-react";
import { PROJECTS_DATA_FULL } from "@/lib/projectsData";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const total = PROJECTS_DATA_FULL.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(((index % total) + total) % total);
  }, [total]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide effect (every 4.5 seconds, pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#080706] text-stone-900 dark:text-white transition-colors duration-500 overflow-hidden"
    >
      {/* Background ambient decorative glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#EA580C]/[0.07] dark:bg-[#EA580C]/[0.10] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#C2410C]/[0.06] dark:bg-[#C2410C]/[0.09] blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ====================================================================
            2-COLUMN LAYOUT:
            LEFT: SECTION TITLE & INTRO & NAVIGATION CONTROLS
            RIGHT: STACKED CARD DECK (EACH CARD HAS FULL PROJECT DETAILS & IMAGE)
        ==================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">

          {/* ==================================================================
              LEFT SIDE: SECTION HEADLINE, INTRO & NAVIGATION
          ================================================================== */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EA580C] dark:text-[#F97316] mb-3">
              <span className="w-6 h-px bg-[#EA580C] dark:bg-[#F97316]" />
              <span>FEATURED WORK</span>
            </div>

            {/* Section Headline with Enhanced Size */}
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-stone-900 dark:text-white leading-[1.08] mb-4">
              Real Projects.<br />
              Real Challenges.<br />
              <span className="bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FB923C] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(234,88,12,0.35)]">
                Data-Driven Growth.
              </span>
            </h2>

            {/* Section Intro Description - Clear & comfortable text size */}
            <p className="text-base sm:text-lg text-stone-700 dark:text-[#A8A29E] leading-relaxed mb-6">
              I work with businesses across different industries to solve digital challenges and create measurable impact through SEO, websites, analytics and social media.
            </p>

            {/* Prominent "See All Projects" Button */}
            <div className="mb-6 sm:mb-8">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#C2410C] hover:to-[#9A3412] text-white text-sm font-semibold shadow-lg shadow-orange-500/25 active:scale-95 transition-all duration-300 group"
              >
                <span>See All Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Navigation & Controls Strip */}
            <div className="pt-6 border-t border-stone-200/80 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              {/* Previous / Next Arrow Buttons & Auto Slide Pill */}
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-stone-300 dark:border-white/15 bg-white dark:bg-[#141210] flex items-center justify-center text-stone-700 dark:text-white hover:border-[#EA580C] hover:text-[#EA580C] transition-colors shadow-xs cursor-pointer"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-stone-300 dark:border-white/15 bg-white dark:bg-[#141210] flex items-center justify-center text-stone-700 dark:text-white hover:border-[#EA580C] hover:text-[#EA580C] transition-colors shadow-xs cursor-pointer"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Auto-Slide Status Pill
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-200/70 dark:bg-white/5 border border-stone-300 dark:border-white/10 text-[11px] font-semibold text-stone-600 dark:text-stone-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{isPaused ? "Paused" : "Auto-sliding"}</span>
                </div> */}
              </div>

              {/* Dots Progress Bar */}
              <div className="flex items-center gap-1.5">
                {PROJECTS_DATA_FULL.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goToSlide(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === i
                      ? "w-8 bg-[#EA580C]"
                      : "w-2.5 bg-stone-300 dark:bg-stone-700 hover:bg-stone-400"
                      }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
                <span className="text-xs font-mono font-bold text-stone-500 dark:text-stone-400 ml-2">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* ==================================================================
              RIGHT SIDE: STACKED CARD DECK (BIGGER CARD SIZE)
              EACH CARD CONTAINS ITS FULL DETAILS & IMAGE (MATCHING REFERENCE)
          ================================================================== */}
          <div
            className="lg:col-span-8 relative w-full pt-6 sm:pt-8 pb-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Stacked Cards Deck Viewport (Larger Height & Sizing) */}
            <div className="relative w-full min-h-[700px] sm:min-h-[470px] md:min-h-[460px]">
              {PROJECTS_DATA_FULL.map((project, idx) => {
                // Calculate position in the stack relative to activeIndex (0 = front, 1 = behind, 2 = further behind, etc.)
                const relIndex = (idx - activeIndex + total) % total;

                // We only display the top 3 cards in the stack for high performance and clean depth
                if (relIndex > 2) return null;

                // Stack depth parameters towards the RIGHT SIDE:
                // relIndex 0 = Front Active: x: 0, y: 0, scale: 1, zIndex: 30
                // relIndex 1 = Middle: x: 44px, y: -10px, scale: 0.96, zIndex: 20
                // relIndex 2 = Back: x: 88px, y: -20px, scale: 0.92, zIndex: 10
                const stepX = isMobile ? 16 : 44;
                const xOffset = relIndex * stepX;
                const yOffset = -relIndex * (isMobile ? 8 : 10);
                const scale = 1 - relIndex * 0.04;
                const zIndex = 30 - relIndex * 10;
                const opacity = relIndex === 0 ? 1 : relIndex === 1 ? 0.94 : 0.80;
                const isFront = relIndex === 0;

                // Formatted card number e.g. "01", "02", "03", "04"
                const cardNumber = String(idx + 1).padStart(2, "0");

                return (
                  <motion.div
                    key={project.id}
                    initial={false}
                    animate={{
                      x: xOffset,
                      y: yOffset,
                      scale: scale,
                      zIndex: zIndex,
                      opacity: opacity,
                    }}
                    whileHover={
                      !isFront
                        ? { x: xOffset + 6, transition: { duration: 0.2 } }
                        : undefined
                    }
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
                      w-[calc(100%-36px)] sm:w-[calc(100%-88px)]
                      rounded-[32px] sm:rounded-[38px]
                      border-2
                      ${isFront
                        ? "border-orange-500/40 dark:border-orange-500/30 shadow-[0_25px_60px_rgba(234,88,12,0.14)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.75)]"
                        : "border-stone-300/80 dark:border-white/10 shadow-lg cursor-pointer hover:border-orange-500/60"
                      }
                      bg-[#FFF8F3]
                      dark:bg-[#14110E]
                      p-5 sm:p-7 md:p-8
                      overflow-hidden
                      transition-colors duration-300
                    `}
                  >
                    {/* Exposed Right Tab Indicator for non-front cards */}
                    {!isFront && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-1.5 z-20 pointer-events-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-pulse" />
                        <span className="text-[11px] font-mono font-bold text-stone-600 dark:text-stone-300 writing-vertical">
                          {cardNumber}
                        </span>
                      </div>
                    )}

                    {/* Inside Card Layout: Left Details + Right Image (Matches Reference Image) */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-7 items-center h-full">

                      {/* CARD DETAILS (LEFT HALF OF CARD) */}
                      <div className="md:col-span-7 flex flex-col justify-between h-full order-2 md:order-1">
                        <div>
                          {/* Top Pill Counter (matching user image e.g. "03") */}
                          <div className="inline-flex items-center justify-center w-12 h-7.5 rounded-full border border-stone-300 dark:border-white/15 bg-white/80 dark:bg-white/[0.04] text-xs font-bold text-stone-700 dark:text-stone-300 shadow-xs mb-3">
                            {cardNumber}
                          </div>

                          {/* Metadata Tagline: Year • Category • Client */}
                          <div className="text-[11px] sm:text-xs font-semibold text-stone-500 dark:text-stone-400 tracking-wide uppercase mb-1.5">
                            <span>{project.duration || "2024 - 2025"}</span>
                            <span className="mx-1">•</span>
                            <span className="text-[#EA580C] dark:text-[#FB923C] font-bold">
                              {project.category}
                            </span>
                            <span className="mx-1">•</span>
                            <span>{project.client}</span>
                          </div>

                          {/* Project Title */}
                          <h3 className="text-xl sm:text-2xl md:text-[26px] font-extrabold text-stone-900 dark:text-white tracking-tight leading-snug">
                            {project.title}
                          </h3>

                          {/* Project Overview */}
                          <p className="mt-2 text-xs sm:text-[13px] text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-2 sm:line-clamp-3">
                            {project.overview}
                          </p>

                          {/* Metric Highlight Tag */}
                          <div className="mt-3.5 flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#EA580C]/10 text-[#EA580C] dark:text-[#FB923C] border border-[#EA580C]/20">
                              <TrendingUp className="w-3.5 h-3.5" />
                              <span>{project.heroMetric} {project.heroMetricLabel}</span>
                            </span>
                          </div>
                        </div>

                        {/* BOTTOM ACTION BUTTON: "VIEW CASE STUDY →" (matching user reference image) */}
                        <div className="mt-6 pt-3.5 border-t border-stone-200/80 dark:border-white/10 flex flex-wrap items-center gap-3">
                          <Link
                            href={`/projects/${project.id}`}
                            className="
                              inline-flex items-center gap-2
                              px-5 py-2.5
                              rounded-full
                              border-2 border-stone-800 dark:border-white/80
                              bg-stone-900 dark:bg-white
                              hover:bg-stone-800 dark:hover:bg-stone-100
                              text-xs font-bold uppercase tracking-wider
                              text-white dark:text-black
                              transition-all duration-200
                              shadow-xs
                              group/btn
                            "
                          >
                            <span>VIEW CASE STUDY</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                          </Link>

                          {project.siteUrl && (
                            <a
                              href={project.siteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
                                inline-flex items-center gap-1.5
                                px-4 py-2.5
                                rounded-full
                                text-xs font-bold uppercase tracking-wider
                                text-stone-600 dark:text-stone-300
                                hover:text-[#EA580C] dark:hover:text-[#F97316]
                                transition-colors
                              "
                            >
                              <span>Visit Site</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* CARD IMAGE (RIGHT HALF OF CARD - LARGER SIZING) */}
                      <div className="md:col-span-5 h-[200px] sm:h-[250px] md:h-[300px] order-1 md:order-2">
                        <Link
                          href={`/projects/${project.id}`}
                          className="block relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 shadow-inner group/img cursor-pointer bg-stone-900"
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 450px"
                            priority={isFront}
                            className="object-cover object-center transition-transform duration-700 group-hover/img:scale-105"
                          />

                          {/* Subtle vignette overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

                          {/* Floating metric tag on image */}
                          <div className="absolute bottom-3 right-3 z-10">
                            <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-black/70 backdrop-blur-md text-[#FB923C] border border-orange-500/30 shadow-xs">
                              {project.heroMetric}
                            </span>
                          </div>
                        </Link>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

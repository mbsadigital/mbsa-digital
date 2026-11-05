"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Maximize2,
  X,
  Search,
  BarChart3,
  MapPin,
  TrendingUp,
  Building2,
  Folder,
  ArrowRight,
  Smartphone,
  Signal,
  Wifi,
  CheckCircle2,
  Play,
  Pause,
} from "lucide-react";
import {
  ALL_ANALYTICS_PROOFS,
  CLIENT_FOLDERS,
  AnalyticsProof,
  CategoryId as AnalyticsCategoryId,
} from "@/lib/analyticsData";

/* ============================================================
   CATEGORIES DEFINITION (INCL. SOCIAL MEDIA MOBILE ANALYTICS)
============================================================ */

export type CategoryId = AnalyticsCategoryId;

interface CategoryMeta {
  id: CategoryId;
  name: string;
  shortName: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CATEGORIES: CategoryMeta[] = [

  {
    id: "gsc",
    name: "Google Search Console",
    shortName: "Search Console",
    subtitle: "Organic Clicks & Indexing",
    icon: Search,
  },
  {
    id: "ga4",
    name: "Google Analytics (GA4)",
    shortName: "Google Analytics",
    subtitle: "Revenue & Traffic Charts",
    icon: BarChart3,
  },
  {
    id: "gmb",
    name: "Google My Business",
    shortName: "Business Profile",
    subtitle: "Local 3-Pack & Growth",
    icon: MapPin,
  },
  {
    id: "keywords",
    name: "Keyword SERP Rankings",
    shortName: "Keyword Rankings",
    subtitle: "Page 1 Top Positions",
    icon: TrendingUp,
  },
];

/* ============================================================
   CLIENTS DEFINITION (POPULATED FROM CLIENT_FOLDERS)
============================================================ */

export interface ClientMeta {
  id: string;
  name: string;
  shortName: string;
}

const CLIENTS: ClientMeta[] = [
  { id: "all", name: "All Clients & Campaigns", shortName: "All" },
  ...CLIENT_FOLDERS.map((f) => ({
    id: f.id,
    name: f.name,
    shortName: f.shortName,
  })),
];

/* ============================================================
   ANIMATION VARIANTS FOR SINGLE PHONE SLIDING IMAGES
============================================================ */

const phoneSlideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring" as const, stiffness: 280, damping: 28 },
      opacity: { duration: 0.25 },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    transition: {
      x: { type: "spring" as const, stiffness: 280, damping: 28 },
      opacity: { duration: 0.25 },
    },
  }),
};

/* ============================================================
   MAIN COMPONENT: CATEGORY & CLIENT PROOF SHOWCASE
============================================================ */

export default function Gsc() {
  const [selectedClient, setSelectedClient] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("social");
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<number>(1);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Filter slides by client and category from ALL_ANALYTICS_PROOFS
  const activeSlides = useMemo(() => {
    // 1. Filter by client
    const clientFiltered = ALL_ANALYTICS_PROOFS.filter((item) =>
      selectedClient === "all" ? true : item.clientId === selectedClient
    );

    // 2. Filter by category
    const categoryAndClientFiltered = clientFiltered.filter(
      (item) => item.categoryId === selectedCategory
    );

    // If current category has slides for this client, use them
    if (categoryAndClientFiltered.length > 0) {
      return categoryAndClientFiltered;
    }

    // Fallback: If this client doesn't have slides in current category, show all slides for this client
    return clientFiltered;
  }, [selectedClient, selectedCategory]);

  const totalCategorySlides = activeSlides.length;

  // Ensure slideIndex stays within bounds
  const currentSlideIndex = Math.min(slideIndex, Math.max(0, totalCategorySlides - 1));
  const currentSlide: AnalyticsProof = activeSlides[currentSlideIndex] || ALL_ANALYTICS_PROOFS[0];

  const isSocialCategory = selectedCategory === "social" || Boolean(activeSlides[0]?.isMobile);

  const handleSelectClient = (clientId: string) => {
    setSelectedClient(clientId);
    setSlideIndex(0);
    setSlideDirection(1);

    // If the selected client has slides in current category, keep it; otherwise switch to first available category
    if (clientId !== "all") {
      const clientSlides = ALL_ANALYTICS_PROOFS.filter((item) => item.clientId === clientId);
      const hasCurrentCat = clientSlides.some((item) => item.categoryId === selectedCategory);
      if (!hasCurrentCat && clientSlides.length > 0) {
        setSelectedCategory(clientSlides[0].categoryId);
      }
    }
  };

  const handleSelectCategory = (catId: CategoryId) => {
    setSelectedCategory(catId);
    setSlideIndex(0);
    setSlideDirection(1);

    // If current selected client has no slides in this category, reset client to "all"
    if (selectedClient !== "all") {
      const clientHasCategory = ALL_ANALYTICS_PROOFS.some(
        (item) => item.clientId === selectedClient && item.categoryId === catId
      );
      if (!clientHasCategory) {
        setSelectedClient("all");
      }
    }
  };

  const nextSlide = useCallback(() => {
    if (totalCategorySlides <= 1) return;
    setSlideDirection(1);
    setSlideIndex((prev) => (prev + 1) % totalCategorySlides);
  }, [totalCategorySlides]);

  const prevSlide = useCallback(() => {
    if (totalCategorySlides <= 1) return;
    setSlideDirection(-1);
    setSlideIndex((prev) => (prev - 1 + totalCategorySlides) % totalCategorySlides);
  }, [totalCategorySlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "Escape") setIsLightboxOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Auto-play interval: slides one by one automatically
  useEffect(() => {
    if (!isAutoPlaying || isHovered || totalCategorySlides <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, isSocialCategory ? 3800 : 5500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, nextSlide, totalCategorySlides, isSocialCategory]);

  // Helper to calculate cyclic signed distance for 3D carousel (for widescreen desktop proofs)
  const getOffset = (index: number) => {
    let diff = index - currentSlideIndex;
    if (diff > totalCategorySlides / 2) diff -= totalCategorySlides;
    if (diff < -totalCategorySlides / 2) diff += totalCategorySlides;
    return diff;
  };

  const activeCategoryMeta =
    CATEGORIES.find((c) => c.id === selectedCategory) || CATEGORIES[0];

  return (
    <section
      id="analytics"
      className="relative py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#0B1220] text-stone-900 dark:text-white transition-colors duration-500 overflow-hidden"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] rounded-full bg-[#2563EB]/[0.08] dark:bg-[#2563EB]/[0.15] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ====================================================
            HEADER WITH VERIFICATION TAG
        ==================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#2563EB]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-[#2563EB] dark:text-[#60A5FA]">
                Verified Search, GA4 &amp; Social Analytics
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-stone-900 dark:text-white leading-[1.12]">
              Measurable Results.{" "}
              <span className="text-[#2563EB] dark:text-[#3B82F6]">
                Verified by Live Data.
              </span>
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
              Real screenshots and verified performance telemetry from Google Search Console, GA4, Google Business Profiles, and Social Media campaigns across 5 client folders (52 total audits).
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/analytics"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/25 transition-all"
            >
              <Folder className="w-4 h-4" />
              <span>Explore All 52 Proofs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ====================================================
            UNIFIED CONTROLS BAR:
            - Left: Primary Category Tabs (Social Media, Search Console, GA4, GMB, Keywords)
            - Right: Client Selector Dropdown
        ==================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3.5 mb-6 sm:mb-8 pb-3 border-b border-stone-200/90 dark:border-white/15">
          {/* Left Side: Primary Category Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 overflow-x-auto no-scrollbar py-1 w-full lg:w-auto">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isCatActive = selectedCategory === cat.id;
              const isSocial = cat.id === "social";

              return (
                <motion.button
                  key={cat.id}
                  type="button"
                  onClick={() => handleSelectCategory(cat.id)}
                  whileTap={{ scale: 0.96 }}
                  className={`shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer border select-none touch-manipulation ${isCatActive
                    ? isSocial
                      ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white border-pink-500 shadow-lg shadow-pink-500/30"
                      : "bg-[#2563EB] text-white border-[#2563EB] shadow-lg shadow-blue-500/30"
                    : "bg-stone-100/90 dark:bg-white/10 text-stone-700 dark:text-stone-200 border-stone-200/90 dark:border-white/20 hover:bg-stone-200/80 dark:hover:bg-white/20 hover:border-blue-400 hover:text-stone-950 dark:hover:text-white"
                    }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isCatActive
                      ? "text-white"
                      : isSocial
                        ? "text-pink-500"
                        : "text-[#2563EB] dark:text-blue-400"
                      }`}
                  />
                  <span>{cat.shortName}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Right Side: Client Filter Dropdown & Status */}
          <div className="flex items-center justify-between sm:justify-start gap-2.5 w-full lg:w-auto shrink-0 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
                Client:
              </span>

              <div className="relative">
                <select
                  value={selectedClient}
                  onChange={(e) => handleSelectClient(e.target.value)}
                  className="appearance-none pl-3 pr-8 py-1.5 sm:py-2 rounded-xl bg-white dark:bg-[#111B2E] border-2 border-stone-200 dark:border-white/20 hover:border-[#2563EB] focus:border-[#2563EB] text-stone-900 dark:text-white text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer outline-none touch-manipulation"
                >
                  {CLIENTS.map((client) => (
                    <option
                      key={client.id}
                      value={client.id}
                      className="bg-white dark:bg-[#111B2E] text-stone-900 dark:text-white py-1.5"
                    >
                      {client.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-stone-500 dark:text-stone-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>


          </div>
        </div>

        {/* ====================================================
            SHOWCASE STAGE:
            - SOCIAL MEDIA: EXACTLY 1 CENTERED SMARTPHONE WITH AUTO-SLIDING IMAGES ONE BY ONE
            - OTHER CATEGORIES: WIDESCREEN 3D CAROUSEL
        ==================================================== */}
        <div
          className={`relative w-full flex items-center justify-center overflow-hidden rounded-3xl select-none transition-all duration-300 ${isSocialCategory
            ? "h-[440px] sm:h-[490px] md:h-[530px]"
            : "h-[320px] sm:h-[380px] md:h-[440px] lg:h-[470px]"
            }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ perspective: isSocialCategory ? "none" : "1000px" }}
        >
          {isSocialCategory ? (
            /* ====================================================
               1. SINGLE MOBILE PHONE SHOWCASE (AUTO-SLIDING ONE BY ONE)
            ==================================================== */
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Floating Left Navigation Arrow */}


              {/* THE 1 SINGLE REALISTIC SMARTPHONE FRAME */}
              <div
                onClick={() => setIsLightboxOpen(true)}
                className="relative h-[95%] sm:h-[98%] max-h-[490px] aspect-[9/19.5] rounded-[2.6rem] sm:rounded-[2.8rem] p-2.5 sm:p-3 overflow-hidden cursor-zoom-in select-none bg-gradient-to-b from-stone-800 via-stone-900 to-black border-2 border-pink-500/80 shadow-[0_22px_65px_-15px_rgba(236,72,153,0.45),0_0_0_1px_rgba(255,255,255,0.15)] ring-1 ring-pink-500/30 group/phone transition-transform duration-300 hover:scale-[1.015]"
              >
                {/* Side buttons simulation */}
                <div className="absolute -left-[3px] top-16 w-[3px] h-8 bg-stone-600 rounded-l-xs" />
                <div className="absolute -left-[3px] top-26 w-[3px] h-8 bg-stone-600 rounded-l-xs" />
                <div className="absolute -right-[3px] top-20 w-[3px] h-12 bg-stone-600 rounded-r-xs" />

                {/* Inner phone screen */}
                <div className="relative w-full h-full rounded-[2rem] sm:rounded-[2.2rem] overflow-hidden bg-black flex flex-col">
                  {/* Dynamic Island */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-30 h-4 w-20 bg-black rounded-full flex items-center justify-between px-2.5 border border-white/10 shadow-sm pointer-events-none">
                    <div className="w-2 h-2 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center">
                      <div className="w-0.5 h-0.5 rounded-full bg-blue-500/70" />
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  {/* Status Bar (9:41, Signal, Wifi) */}
                  <div className="absolute top-1 left-3.5 right-3.5 z-20 flex items-center justify-between text-[9px] font-mono font-bold text-white/90 pointer-events-none select-none">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <Signal className="w-2.5 h-2.5 text-white/90" />
                      <Wifi className="w-2.5 h-2.5 text-white/90" />
                    </div>
                  </div>

                  {/* Story Style Segmented Progress Bars (Instagram Stories Style) */}
                  <div className="absolute top-6 left-3 right-3 z-30 flex items-center gap-1 pointer-events-none">
                    {activeSlides.map((_, dotIdx) => (
                      <div
                        key={dotIdx}
                        className={`h-[2px] flex-1 rounded-full transition-all duration-300 ${dotIdx === currentSlideIndex
                          ? "bg-white shadow-xs"
                          : dotIdx < currentSlideIndex
                            ? "bg-white/60"
                            : "bg-white/20"
                          }`}
                      />
                    ))}
                  </div>

                  {/* THE SLIDING IMAGES (ONE BY ONE AUTO-SLIDE) */}
                  <div className="relative w-full h-full overflow-hidden">
                    <AnimatePresence initial={false} custom={slideDirection} mode="popLayout">
                      <motion.div
                        key={currentSlide.id}
                        custom={slideDirection}
                        variants={phoneSlideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-0 w-full h-full"
                      >
                        <Image
                          src={currentSlide.image}
                          alt={currentSlide.title}
                          fill
                          priority
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 80vw, 360px"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Subtle glossy glass reflection glare */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.12] pointer-events-none" />

                  {/* Top Badge Inside Phone */}
                  <div className="absolute top-8 left-3 z-20 pointer-events-none">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-white text-[9px] font-semibold uppercase tracking-wider">
                      <Smartphone className="w-2.5 h-2.5 text-pink-400" />
                      {currentSlide.badge}
                    </span>
                  </div>

                  {/* Hover Inspect Pill */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] opacity-0 group-hover/phone:opacity-100 transition-opacity duration-200 flex items-center justify-center z-20 pointer-events-none">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold flex items-center gap-1.5 shadow-xl">
                      <Maximize2 className="w-3.5 h-3.5 text-pink-400" />
                      <span>Tap to Inspect Proof</span>
                    </span>
                  </div>

                  {/* Bottom Home Indicator Bar */}
                  <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-20 w-20 h-1 bg-white/70 rounded-full pointer-events-none" />
                </div>
              </div>

              {/* Floating Right Navigation Arrow */}
              {totalCategorySlides > 1 && (
                <motion.button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  aria-label="Next Screenshot"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-2 sm:right-6 md:right-14 lg:right-28 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 dark:bg-stone-900/90 hover:bg-pink-600 text-stone-800 dark:text-white hover:text-white border border-stone-200 dark:border-white/20 hover:border-pink-500 shadow-xl flex items-center justify-center transition-all duration-200 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
                </motion.button>
              )}
            </div>
          ) : (
            /* ====================================================
               2. WIDESCREEN 3D CAROUSEL (FOR GSC, GA4, GMB, KEYWORDS)
            ==================================================== */
            <>
              {activeSlides.map((slide, index) => {
                const offset = getOffset(index);
                const isCenter = offset === 0;
                const isVisible = Math.abs(offset) <= 1 || totalCategorySlides <= 2;

                if (!isVisible && Math.abs(offset) > 1) {
                  return null;
                }

                return (
                  <motion.div
                    key={slide.id}
                    onClick={() => {
                      if (isCenter) {
                        setIsLightboxOpen(true);
                      } else {
                        setSlideDirection(offset > 0 ? 1 : -1);
                        setSlideIndex(index);
                      }
                    }}
                    initial={false}
                    animate={{
                      x: totalCategorySlides > 1 ? `${offset * 68}%` : "0%",
                      scale: isCenter ? 1 : 0.84,
                      opacity: isCenter ? 1 : 0.45,
                      rotateY: totalCategorySlides > 1 ? offset * -14 : 0,
                      zIndex: isCenter ? 20 : 10,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 26,
                    }}
                    className={`absolute w-[88%] sm:w-[74%] md:w-[68%] aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer ${isCenter
                      ? "border-2 border-[#2563EB] shadow-[0_12px_45px_rgba(37,99,235,0.30)] ring-1 ring-[#2563EB]/40"
                      : "border border-stone-300 dark:border-stone-800 shadow-lg hover:opacity-75"
                      } bg-stone-950`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      loading="lazy"
                      className="object-contain transition-transform duration-500 hover:scale-[1.02]"
                      sizes="(max-width: 768px) 90vw, 65vw"
                    />


                    {isCenter && (
                      <div className="absolute top-2.5 sm:top-3.5 left-2.5 sm:left-3.5 right-2.5 sm:right-3.5 flex items-center justify-between pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 border border-white/20 text-white text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          {slide.badge}
                        </span>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsLightboxOpen(true);
                          }}
                          className="p-1.5 rounded-xl bg-black/75 hover:bg-[#2563EB] border border-white/20 text-white transition-colors pointer-events-auto cursor-pointer"
                          title="Zoom Image"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </motion.div>
                );
              })}

              {/* Floating Side Arrows for Widescreen */}
              {totalCategorySlides > 1 && (
                <>
                  <motion.button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevSlide();
                    }}
                    aria-label="Previous Slide in Category"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute left-1 sm:left-4 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/90 dark:bg-black/75 hover:bg-[#2563EB] text-stone-800 dark:text-white hover:text-white border border-stone-200 dark:border-white/30 hover:border-[#2563EB] backdrop-blur-md shadow-xl flex items-center justify-center transition-all duration-200 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextSlide();
                    }}
                    aria-label="Next Slide in Category"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-1 sm:right-4 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/90 dark:bg-black/75 hover:bg-[#2563EB] text-stone-800 dark:text-white hover:text-white border border-stone-200 dark:border-white/30 hover:border-[#2563EB] backdrop-blur-md shadow-xl flex items-center justify-center transition-all duration-200 cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                  </motion.button>
                </>
              )}
            </>
          )}
        </div>

        {/* ====================================================
            ACTIVE PROOF SUMMARY DETAIL CARD
        ==================================================== */}
        <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-[#111B2E]/90 border border-stone-200/80 dark:border-white/10 shadow-sm backdrop-blur-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span
                  className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${isSocialCategory
                    ? "text-pink-600 dark:text-pink-400"
                    : "text-[#2563EB] dark:text-blue-400"
                    }`}
                >
                  {currentSlide.clientName} • {activeCategoryMeta.name} • Verified Proof
                </span>
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  {currentSlide.metricGrowth}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-stone-900 dark:text-white">
                {currentSlide.title}
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
                {currentSlide.description}
              </p>
            </div>

            {/* 4 Quick Stat Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 lg:gap-3 w-full lg:w-auto shrink-0">
              {currentSlide.highlights.map((item, hIdx) => (
                <div
                  key={hIdx}
                  className="p-2 sm:p-2.5 rounded-xl bg-stone-50 dark:bg-[#070D18] border border-stone-200/60 dark:border-white/5 flex flex-col justify-between"
                >
                  <div className="text-[10px] sm:text-[11px] text-stone-500 dark:text-stone-400 font-medium truncate">
                    {item.label}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white mt-0.5 break-words">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================
          FULLSCREEN LIGHTBOX MODAL:
          - Smartphone Frame for Social Media
          - Widescreen for GSC / GA4
      ==================================================== */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-[9999] bg-black/92 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <div
              className={`relative w-full max-h-[92vh] flex flex-col items-center justify-center cursor-default ${currentSlide.isMobile ? "max-w-md" : "max-w-5xl"
                }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-rose-600 text-white transition-colors cursor-pointer"
                title="Close Lightbox (Esc)"
              >
                <X className="w-6 h-6" />
              </button>

              {currentSlide.isMobile ? (
                /* SMARTPHONE FRAME IN LIGHTBOX */
                <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/19.5] rounded-[2.6rem] p-2.5 bg-gradient-to-b from-stone-800 via-stone-900 to-black border-[3px] border-stone-700 shadow-2xl">
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-black flex flex-col">
                    {/* Dynamic Island */}
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-30 h-4 w-20 bg-black rounded-full flex items-center justify-between px-2 border border-white/10 shadow-sm pointer-events-none">
                      <div className="w-1.5 h-1.5 rounded-full bg-stone-900 border border-stone-800" />
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>

                    {/* Status Bar */}
                    <div className="absolute top-1 left-3.5 right-3.5 z-20 flex items-center justify-between text-[9px] font-mono font-bold text-white/90 pointer-events-none">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <Signal className="w-2.5 h-2.5 text-white/90" />
                        <Wifi className="w-2.5 h-2.5 text-white/90" />
                      </div>
                    </div>

                    <Image
                      src={currentSlide.image}
                      alt={currentSlide.title}
                      fill
                      className="object-cover object-top"
                      sizes="400px"
                    />

                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.12] pointer-events-none" />
                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-20 w-20 h-1 bg-white/70 rounded-full pointer-events-none" />
                  </div>
                </div>
              ) : (
                /* WIDESCREEN DASHBOARD IN LIGHTBOX */
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black">
                  <Image
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              )}

              {/* Lightbox Footer Bar */}
              <div className="w-full mt-3 flex items-center justify-between text-white text-xs sm:text-sm">
                <div className="truncate max-w-[70%]">
                  <span className="font-bold">{currentSlide.title}</span>
                </div>
                {totalCategorySlides > 1 && (
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={prevSlide}
                      className="p-2 rounded-xl bg-white/10 hover:bg-[#2563EB] transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={nextSlide}
                      className="p-2 rounded-xl bg-white/10 hover:bg-[#2563EB] transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

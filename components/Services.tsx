"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
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
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SERVICES_DATA, type ServiceDetail } from "@/lib/servicesData";

const ICON_MAP = {
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

const CARDS_PER_PAGE = 6;
const AUTO_SLIDE_INTERVAL = 8000;

export default function Services() {
  const router = useRouter();
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<number>(1);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const totalPages = Math.ceil(SERVICES_DATA.length / CARDS_PER_PAGE);

  const handleNextPage = useCallback(() => {
    setSlideDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setActiveCard(null);
  }, [totalPages]);

  const handlePrevPage = useCallback(() => {
    setSlideDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    setActiveCard(null);
  }, [totalPages]);

  const handlePageSelect = useCallback(
    (pageIdx: number) => {
      setSlideDirection(pageIdx > currentPage ? 1 : -1);
      setCurrentPage(pageIdx);
      setActiveCard(null);
    },
    [currentPage]
  );

  // Auto slide effect: automatically transitions cards every 5s unless hovered or active
  useEffect(() => {
    if (isHovered || activeCard !== null) return;

    const timer = setInterval(() => {
      setSlideDirection(1);
      setCurrentPage((prev) => (prev + 1) % totalPages);
      setActiveCard(null);
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [isHovered, activeCard, totalPages]);

  const currentCards = SERVICES_DATA.slice(
    currentPage * CARDS_PER_PAGE,
    (currentPage + 1) * CARDS_PER_PAGE
  );

  const handleCardClick = (slug: string) => {
    router.push(`/services?service=${slug}`);
  };

  // Slide animation variants for 6-card set transition
  const pageVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.45,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -60 : 60,
      opacity: 0,
      transition: {
        duration: 0.35,
        ease: [0.25, 1, 0.5, 1],
      },
    }),
  };

  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] dark:bg-[#0B1220] text-stone-900 dark:text-white transition-colors duration-500 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[550px] lg:w-[750px] h-[320px] sm:h-[550px] rounded-full bg-[#2563EB]/[0.08] dark:bg-[#2563EB]/[0.12] blur-[120px] sm:blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Eyebrow */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#2563EB] dark:text-[#14B8A6]">
            <span className="w-6 h-[2px] bg-[#2563EB] dark:bg-[#14B8A6] rounded-full" />
            <span>WHAT I DO </span>
          </div>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          {/* Left Column: Heading & Summary with Enhanced Text Sizes */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight leading-[1.12] text-stone-900 dark:text-white mb-4 sm:mb-5">
              More Than
              <br />
              Ranking.
              <br />
              <span className="text-[#2563EB] ">
                A Smarter Way
                <br />
                to Grow.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed mb-6 sm:mb-8 max-w-lg lg:max-w-none">
              I look at the data, find what is holding a site back,
              fix the highest value problems first and measure what changes across all organic and conversion touchpoints.
            </p>

            {/* CTA Link to dedicated all-services page */}
            <div className="space-y-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#14B8A6] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white text-sm font-bold shadow-lg shadow-[#2563EB]/25 hover:shadow-[#2563EB]/45 border border-blue-400/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 group"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Service Cards with Auto Slide & Controls */}
          <div
            className="lg:col-span-8 w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Top Control Bar: Page indicator & Animated Left/Right Navigation Buttons */}
            <div className="flex items-center justify-between gap-4 mb-4 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">
                  Showing {currentPage === 0 ? "Services 01 – 06" : "Services 07 – 12"}{" "}
                  <span className="text-stone-400 font-normal">of 12 Total</span>
                </span>
              </div>

              {/* ANIMATED LEFT & RIGHT BUTTONS (Comfortable 44px+ mobile touch targets) */}
              <div className="flex items-center gap-2.5">
                {/* Left Button */}
                <button
                  type="button"
                  onClick={handlePrevPage}
                  aria-label="Show Previous 6 Service Cards"
                  title="Show Previous 6 Service Cards"
                  className="
                    group/btn
                    relative
                    flex
                    items-center
                    justify-center
                    gap-1.5
                    min-h-[44px]
                    min-w-[44px]
                    px-4
                    py-2.5
                    rounded-full
                    border
                    border-stone-300
                    dark:border-white/15
                    hover:border-stone-900
                    dark:hover:border-white
                    bg-white
                    dark:bg-[#111B2E]
                    hover:bg-stone-900
                    dark:hover:bg-white
                    text-stone-700
                    dark:text-stone-200
                    hover:text-white
                    dark:hover:text-stone-900
                    text-xs
                    font-bold
                    shadow-sm
                    hover:shadow-md
                    transition-all
                    duration-300
                    active:scale-95
                    cursor-pointer
                    touch-manipulation
                  "
                >
                  <ChevronLeft className="w-4 h-4 transition-transform duration-300 group-hover/btn:-translate-x-1" />
                  <span className="hidden min-[400px]:inline">Prev</span>
                </button>

                {/* Page dots indicator with generous tap areas */}
                <div className="flex items-center gap-1.5 px-1 min-h-[44px]">
                  {[0, 1].map((dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => handlePageSelect(dotIdx)}
                      aria-label={`Go to service pack ${dotIdx + 1}`}
                      className="p-2 touch-manipulation cursor-pointer"
                    >
                      <span
                        className={`block h-2.5 rounded-full transition-all duration-300 ${currentPage === dotIdx
                          ? "w-6 bg-stone-900 dark:bg-white shadow-sm"
                          : "w-2.5 bg-stone-300 dark:bg-white/20 hover:bg-stone-400"
                          }`}
                      />
                    </button>
                  ))}
                </div>

                {/* Right Button (Animated Next 6 Services) */}
                <button
                  type="button"
                  onClick={handleNextPage}
                  aria-label="Show Next 6 Service Cards"
                  title="Show Next 6 Service Cards"
                  className="
                    group/btn
                    relative
                    flex
                    items-center
                    justify-center
                    gap-1.5
                    min-h-[44px]
                    min-w-[44px]
                    px-4.5
                    py-2.5
                    rounded-full
                    border
                    border-stone-900
                    dark:border-white
                    bg-stone-900
                    dark:bg-white
                    hover:bg-stone-800
                    dark:hover:bg-stone-100
                    text-white
                    dark:text-stone-900
                    text-xs
                    font-bold
                    shadow-md
                    hover:shadow-lg
                    transition-all
                    duration-300
                    hover:scale-105
                    active:scale-95
                    cursor-pointer
                    touch-manipulation
                  "
                >
                  {/* Subtle ping indicator */}
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
                  </span>
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>

            {/* ANIMATED 6-CARD GRID CONTAINER WITH TOUCH SWIPE */}
            <AnimatePresence mode="wait" custom={slideDirection}>
              <motion.div
                key={currentPage}
                custom={slideDirection}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -45) {
                    handleNextPage();
                  } else if (info.offset.x > 45) {
                    handlePrevPage();
                  }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 w-full touch-pan-y"
              >
                {currentCards.map((svc, idx) => {
                  const Icon = ICON_MAP[svc.iconName] || Search;
                  const isSelected = activeCard === idx;

                  return (
                    <div
                      key={svc.num}
                      role="button"
                      tabIndex={0}
                      onClick={() => handleCardClick(svc.slug)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleCardClick(svc.slug);
                        }
                      }}
                      onMouseEnter={() => setActiveCard(idx)}
                      onMouseLeave={() => setActiveCard(null)}
                      onFocus={() => setActiveCard(idx)}
                      onBlur={() => setActiveCard(null)}
                      className={`
                        group
                        relative
                        rounded-2xl
                        rounded-tr-[2.25rem]
                        overflow-hidden
                        border
                        p-5 sm:p-6
                        min-h-[290px] sm:min-h-[310px]
                        flex
                        flex-col
                        justify-between
                        cursor-pointer
                        outline-none
                        transition-all
                        duration-500
                        ${isSelected
                          ? "border-stone-900 dark:border-white shadow-xl ring-1 ring-stone-900/20 dark:ring-white/30 -translate-y-1"
                          : "border-stone-200 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/40 shadow-sm hover:-translate-y-0.5"
                        }
                      `}
                    >
                      {/* Background Image */}
                      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                        <Image
                          src={svc.image}
                          alt={svc.title}
                          fill
                          className={`object-cover object-center transition-transform duration-700 ease-out ${isSelected
                            ? "scale-110"
                            : "scale-100 group-hover:scale-110"
                            }`}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={75}
                          loading={idx < 3 ? "eager" : "lazy"}
                        />

                        {/* Default Image Vignette (Clear & Visible by Default) */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 transition-opacity duration-500 ${isSelected ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                            }`}
                        />

                        {/* Hover Darken Overlay (Dims image to reveal details on hover) */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/85 to-black/75 transition-opacity duration-500 ${isSelected
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                            }`}
                        />
                      </div>

                      {/* Corner Accent Notch */}
                      <div className="absolute top-0 right-0 w-8 h-8 rounded-bl-xl bg-white/10 backdrop-blur-md border-b border-l border-white/20 pointer-events-none z-10" />

                      {/* Card Top: Icon & Animated Top-Right Button */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <div
                            className={`
                              w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 backdrop-blur-md
                              ${isSelected
                                ? "bg-white text-stone-900 shadow-md"
                                : "bg-black/50 border border-white/20 text-white group-hover:bg-white group-hover:text-stone-900 group-hover:border-white group-hover:shadow-md"
                              }
                            `}
                          >
                            <Icon className="w-5 h-5" />
                          </div>


                        </div>
                      </div>

                      {/* Card Bottom: Title & Hover Slide-in Details */}
                      <div className="relative z-10">
                        <h3
                          className={`text-base sm:text-lg font-bold text-white transition-colors duration-300 drop-shadow-sm ${isSelected
                            ? "text-[#14B8A6]"
                            : "group-hover:text-[#14B8A6]"
                            }`}
                        >
                          {svc.title}
                        </h3>

                        {/* Expandable Hover Preview */}
                        <div
                          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${isSelected
                            ? "grid-rows-[1fr] opacity-100 mt-2"
                            : "grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-2"
                            }`}
                        >
                          <div className="overflow-hidden space-y-3">
                            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                              {svc.desc}
                            </p>

                            {/* Clickable Explore Trigger to new page */}
                            <Link
                              href={`/services?service=${svc.slug}`}
                              onClick={(e) => e.stopPropagation()}
                              className="
                                w-full
                                pt-2.5
                                border-t
                                border-white/20
                                flex
                                items-center
                                justify-between
                                text-xs
                                font-bold
                                uppercase
                                tracking-wider
                                text-stone-200
                                hover:text-white
                                transition-colors
                                group/cta
                              "
                            >
                              <span className="flex items-center gap-1.5">
                                <Sparkles className="w-3 h-3 text-white" />
                                Explore Details
                              </span>
                              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Active Bottom Glow Line */}
                      {isSelected && (
                        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-white to-transparent z-10" />
                      )}
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
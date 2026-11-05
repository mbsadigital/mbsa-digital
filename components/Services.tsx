"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import ServiceRealIcon from "@/components/ServiceRealIcon";
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
  LineChart,
  Check,
  FileCheck,
  ShoppingCart,
  Award,
  Mail,
  Smartphone,
  ShieldCheck,
  Code2,
  Rocket,
} from "lucide-react";
import { SERVICES_DATA, type ServiceDetail } from "@/lib/servicesData";

// Why MBSA Digital diagnostic pillars
const WHY_MBSA_POINTS = [
  {
    title: "Diagnosis before activity",
    desc: "We start with the data, find what is actually holding the site back and fix the highest-value problems first.",
  },
  {
    title: "Built for how people search now",
    desc: "Traditional rankings, local results and AI-generated answers are planned as one visibility strategy.",
  },
  {
    title: "Technical depth, not just recommendations",
    desc: "Our background is in computer engineering as well as marketing, so crawl, speed and structured-data issues get fixed, not just reported.",
  },
  {
    title: "Reporting that tells you what to do next",
    desc: "Every report explains what changed, why it matters and what we recommend, in language your whole team can follow.",
  },
];

// How We Work process roadmap steps with Google Gemini color spectrum
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Audit and discover",
    desc: "We review your website, search visibility, analytics and competitors, and talk to you about the customers you want more of.",
    accent: "from-[#2563EB] to-[#38BDF8]",
    tagColor: "text-[#2563EB] dark:text-[#38BDF8]",
    indicatorColor: "bg-[#2563EB]",
  },
  {
    step: "02",
    title: "Prioritise and plan",
    desc: "You get a plain-English roadmap that ranks every recommendation by expected impact and effort.",
    accent: "from-[#38BDF8] to-blue-500",
    tagColor: "text-sky-600 dark:text-sky-300",
    indicatorColor: "bg-[#38BDF8]",
  },
  {
    step: "03",
    title: "Build and optimise",
    desc: "We fix technical issues, improve and create pages, and launch or restructure campaigns.",
    accent: "from-[#F59E0B] to-[#FCD34D]",
    tagColor: "text-amber-600 dark:text-amber-400",
    indicatorColor: "bg-[#F59E0B]",
  },
  {
    step: "04",
    title: "Measure and improve",
    desc: "Monthly reporting tied to enquiries and sales, with a clear list of what we will do next.",
    accent: "from-[#EC4899] to-[#8B5CF6]",
    tagColor: "text-pink-600 dark:text-pink-400",
    indicatorColor: "bg-[#EC4899]",
  },
];

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

const CARDS_PER_PAGE = 6;
const AUTO_SLIDE_INTERVAL = 8000;

// Top value pillars matching search & growth positioning
const TOP_VALUE_PILLARS = [
  {
    icon: Search,
    title: "Search first",
    desc: "SEO, local and AI visibility planned together, not in silos",
  },
  {
    icon: Target,
    title: "Highest-value fixes first",
    desc: "Work prioritised by likely business impact",
  },
  {
    icon: LineChart,
    title: "Measured to enquiries",
    desc: "GA4, Search Console and Looker Studio reporting",
  },
  {
    icon: Globe,
    title: "India and UK",
    desc: "Reachable by phone in both markets",
  },
];

// Core pain points & findability challenges
const PROBLEMS_DATA = [
  {
    title: "Visitors arrive, but nobody gets in touch",
    highlight: "nobody gets in touch",
    desc: "Traffic is landing on pages that answer the wrong question, or the path to an enquiry is unclear.",
    solution: "Intent-matched landing page funnels",
  },
  {
    title: "Competitors show up in Maps. You don't.",
    highlight: "You don't.",
    desc: "An incomplete Business Profile and thin location pages make it hard for Google to trust you locally.",
    solution: "Google Map Pack & local citation authority",
  },
  {
    title: "AI assistants recommend other brands",
    highlight: "recommend other brands",
    desc: "When people ask ChatGPT, Gemini or Google's AI features, your business isn't part of the answer.",
    solution: "Generative Engine Optimization (GEO)",
  },
  {
    title: "The website is slow, dated or hard to update",
    highlight: "hard to update",
    desc: "Technical issues quietly limit rankings, and every change needs a developer.",
    solution: "Next.js Core Web Vitals & headless flow",
  },
  {
    title: "Ad spend without a clear return",
    highlight: "without a clear return",
    desc: "Campaigns report clicks and impressions, but nobody can say which ones produced customers.",
    solution: "Closed-loop server-side GA4 attribution",
  },
  {
    title: "Reports you can't act on",
    highlight: "can't act on",
    desc: "Dashboards full of numbers, with no explanation of what changed or what to do next.",
    solution: "Decision-ready executive Looker dashboards",
  },
];

// SVG mask data URI for reliable zero-latency mask reveal
const MASK_SVG = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='white'/></svg>")`;

// Interactive SVG Mask Reveal Container for Problems & Solutions
function MaskedProblemsContainer() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [targetSize, setTargetSize] = useState<number>(580);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setTargetSize(320);
      } else if (window.innerWidth < 1024) {
        setTargetSize(460);
      } else {
        setTargetSize(580);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    });
    setIsHovered(true);
  };

  const maskRadius = isHovered ? targetSize / 2 : 0;

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsHovered(false)}
      className="relative rounded-2xl border border-stone-200 dark:border-blue-900/40 bg-[#F8FAFC] dark:bg-[#070D1A] text-stone-900 dark:text-white overflow-hidden transition-colors duration-300 shadow-xl dark:shadow-2xl"
    >

      {/* 1. BASE LAYER: Off-white in light mode, Dark in dark mode */}
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {PROBLEMS_DATA.map((problem, idx) => {
          const isOddCol = idx % 2 === 1;
          const isFirstRow = idx < 2;
          return (
            <div
              key={idx}
              className={`p-6 sm:p-7 flex flex-col justify-between min-h-[175px] ${isOddCol ? "sm:border-l border-stone-200/90 dark:border-white/10" : ""
                } ${!isFirstRow ? "sm:border-t border-stone-200/90 dark:border-white/10" : ""
                } ${idx > 0 ? "max-sm:border-t max-sm:border-stone-200/90 max-sm:dark:border-white/10" : ""
                }`}
            >
              <div>
                <h3 className="text-base sm:text-[17px] font-bold text-stone-900 dark:text-white tracking-tight mb-2 leading-snug">
                  {problem.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
                  {problem.desc}
                </p>
              </div>


            </div>
          );
        })}
      </div>

      {/* 2. REVEALED LAYER: Black in light mode, Pure White in dark mode */}
      <div
        className="absolute inset-0 z-20 pointer-events-none bg-black dark:bg-white text-white dark:text-black"
        style={{
          WebkitMaskImage: `radial-gradient(circle ${maskRadius}px at ${mousePosition.x}px ${mousePosition.y}px, black 99.5%, transparent 100%)`,
          maskImage: `radial-gradient(circle ${maskRadius}px at ${mousePosition.x}px ${mousePosition.y}px, black 99.5%, transparent 100%)`,
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.25s ease",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 h-full bg-black dark:bg-white">
          {PROBLEMS_DATA.map((problem, idx) => {
            const isOddCol = idx % 2 === 1;
            const isFirstRow = idx < 2;
            const parts = problem.title.split(problem.highlight);
            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 flex flex-col justify-between min-h-[175px] bg-black dark:bg-white ${isOddCol ? "sm:border-l border-white/15 dark:border-stone-200" : ""
                  } ${!isFirstRow ? "sm:border-t border-white/15 dark:border-stone-200" : ""
                  } ${idx > 0 ? "max-sm:border-t max-sm:border-white/15 max-sm:dark:border-stone-200" : ""
                  }`}
              >
                <div>
                  <h3 className="text-base sm:text-[17px] font-bold text-white dark:text-black dark:font-black tracking-tight mb-2 leading-snug">
                    {parts[0]}
                    <span className="text-[#3B82F6] dark:text-[#2563EB] font-black underline decoration-blue-400/60 dark:decoration-blue-500/50 decoration-2 underline-offset-2">
                      {problem.highlight}
                    </span>
                    {parts[1] || ""}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 dark:text-stone-800 leading-relaxed font-normal dark:font-semibold">
                    {problem.desc}
                  </p>
                </div>


              </div>
            );
          })}
        </div>
      </div>

      {/* 3. MASK CURSOR SPOTLIGHT RING (Black in light mode, Pure White in dark mode) */}
      <div
        className="pointer-events-none absolute rounded-full border-2 border-stone-900/80 shadow-[0_0_80px_rgba(0,0,0,0.35)] dark:border-white dark:shadow-[0_0_80px_rgba(255,255,255,0.45)] z-30"
        style={{
          width: `${targetSize}px`,
          height: `${targetSize}px`,
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          opacity: isHovered ? 1 : 0,
          transform: "translate(-50%, -50%)",
          transition: "opacity 0.2s ease",
        }}
      />
    </div>
  );
}

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
        {/* Top 4-Feature Value Strip matching website theme */}
        <div className="mb-14 sm:mb-18 lg:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {TOP_VALUE_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="
                    group
                    relative
                    rounded-2xl
                    p-5 sm:p-6
                    bg-white/95 dark:bg-gradient-to-b dark:from-[#0F1B35]/95 dark:to-[#0A1224]/95
                    backdrop-blur-md
                    border border-stone-200/90 dark:border-blue-900/40
                    shadow-xs hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-[0_8px_30px_rgba(37,99,235,0.2)]
                    hover:border-blue-400/60 dark:hover:border-blue-500/50
                    hover:-translate-y-1.5
                    transition-all duration-300
                    flex flex-col justify-between
                  "
                >
                  {/* Subtle top corner glow line on hover */}
                  <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#2563EB] dark:via-[#3B82F6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/70 border border-blue-200/70 dark:border-blue-800/60 text-[#2563EB] dark:text-[#60A5FA] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white dark:group-hover:bg-[#2563EB] dark:group-hover:text-white transition-all duration-300 shadow-xs">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-[11px] font-mono font-bold tracking-wider text-stone-400 dark:text-blue-400/70 group-hover:text-[#2563EB] dark:group-hover:text-blue-300 transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-stone-900 dark:text-white tracking-tight mb-1.5 group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>


                </div>
              );
            })}
          </div>
        </div>

        {/* Section: THE PROBLEMS WE SOLVE */}
        <div className="mb-16 sm:mb-20 lg:mb-24 bg-[#F8FAFC] dark:bg-[#0B1220]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start">
            {/* Left Column: Eyebrow + Findability Headline + Narrative */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              {/* Eyebrow matching the website standard */}
              <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#2563EB] dark:text-blue-400 mb-4 sm:mb-5">
                <span className="w-6 h-[2px] bg-[#2563EB] dark:bg-blue-500 rounded-full" />
                <span>THE PROBLEMS WE SOLVE</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] text-stone-900 dark:text-white mb-5 sm:mb-6">
                Most websites don&apos;t have a traffic problem.
                <br />
                <span>
                  They have a <span className="text-[#2563EB] dark:text-[#52adbff]">findability </span>problem.
                </span>
              </h2>

              {/* Explanatory Paragraph */}
              <p className="text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed mb-6 sm:mb-8 max-w-lg lg:max-w-none">
                If any of these sound familiar, the fix usually starts with the same question: can the right people find you, and when they do, is it obvious why they should choose you?
              </p>

              {/* Visual Diagnostic Callout Pill */}

            </div>

            {/* Right Column: Clean & Simple Problem Grid with SVG Mask Reveal Effect */}
            <div className="lg:col-span-7">
              <MaskedProblemsContainer />
            </div>
          </div>
        </div>



        {/* Section Eyebrow */}


        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          {/* Left Column: Heading & Summary with Enhanced Text Sizes */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 xl:top-32 flex flex-col justify-between pt-1">
            <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#2563EB] dark:text-blue-400">
              <span className="w-6 h-[2px] bg-[#2563EB] dark:bg-blue-500 rounded-full" />
              <span>WHAT I DO </span>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black tracking-tight leading-[1.14] text-stone-900 dark:text-white mb-4 pt-5 sm:mb-5">
                Everything that determines
                <br />
                <span>
                  whether you’re found, chosen
                  <br />
                  and <span className="text-[#2563EB] dark:text-[#52adbff]">contacted</span>
                </span>
              </h2>

              <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed mb-6 sm:mb-8 max-w-lg lg:max-w-none font-normal">
                I look at the data, find what is holding a site back, fix the highest value problems first and measure what changes across all organic and conversion touchpoints.
              </p>


            </div>

            {/* CTA Link to dedicated all-services page */}
            <div>
              <Link
                href="/services"
                className="group
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

                  hover:border-blue-800
                  shadow-md
                  shadow-[#2563EB]
                  hover:shadow-[#2563EB]
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                  min-h-[42px]
                  sm:min-h-[44px]
                  touch-manipulation"
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
                  Showing Services {String(currentPage * CARDS_PER_PAGE + 1).padStart(2, "0")} –{" "}
                  {String(
                    Math.min((currentPage + 1) * CARDS_PER_PAGE, SERVICES_DATA.length)
                  ).padStart(2, "0")}{" "}
                  <span className="text-stone-400 font-normal">of {SERVICES_DATA.length} Total</span>
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
                  {Array.from({ length: totalPages }).map((_, dotIdx) => (
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
                        min-h-[340px] sm:min-h-[360px]
                        bg-white dark:bg-[#070D18]
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
                      {/* Showcase 3D Artwork (Full display, properly fitted, never cropped or cut) */}
                      <div className="absolute inset-x-3 top-10 bottom-16 pointer-events-none overflow-hidden z-0 flex items-center justify-center p-2">
                        {/* Light Mode 3D Illustration */}
                        <Image
                          src={svc.lightImage || svc.image}
                          alt={svc.title}
                          fill
                          className={`service-img-light object-contain object-center transition-transform duration-500 ease-out ${isSelected
                            ? "scale-105"
                            : "scale-100 group-hover:scale-105"
                            }`}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={85}
                          priority={idx < 3}
                          unoptimized
                        />

                        {/* Dark Mode 3D Illustration */}
                        <Image
                          src={svc.darkImage || svc.image}
                          alt={svc.title}
                          fill
                          className={`service-img-dark object-contain object-center transition-transform duration-500 ease-out ${isSelected
                            ? "scale-105"
                            : "scale-100 group-hover:scale-105"
                            }`}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={85}
                          priority={idx < 3}
                          unoptimized
                        />
                      </div>

                      {/* Corner Accent Notch */}
                      <div className="absolute top-0 right-0 w-8 h-8 rounded-bl-xl bg-slate-100/90 dark:bg-white/10 backdrop-blur-md border-b border-l border-slate-200/90 dark:border-white/20 pointer-events-none z-10" />

                      {/* Card Top: Real Colored Icon & Service Badge */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <div
                            className={`
                              w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-xs p-2
                              bg-white/95 dark:bg-[#111B2E]/95 border border-slate-200/90 dark:border-white/15
                              group-hover:scale-110 group-hover:shadow-md group-hover:border-blue-500/40
                              ${isSelected ? "ring-2 ring-blue-500/40 scale-105 shadow-md" : ""}
                            `}
                          >
                            <ServiceRealIcon
                              slug={svc.slug}
                              className="w-6 h-6 transition-transform duration-300 group-hover:scale-105"
                              size={24}
                            />
                          </div>

                          <span className="text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 px-2.5 py-1 rounded-lg bg-white/90 dark:bg-[#111B2E]/90 border border-slate-200/80 dark:border-white/10 backdrop-blur-md shadow-2xs">
                            SERVICE {svc.num}
                          </span>
                        </div>
                      </div>

                      {/* Card Bottom: Title & Hover Slide-in Details */}
                      <div className="relative z-10 mt-auto pt-4 pb-1 -mx-2 px-3 rounded-b-2xl bg-gradient-to-t from-white via-white/95 to-transparent dark:from-[#070D18] dark:via-[#070D18]/95 dark:to-transparent">
                        <h3 className="text-base sm:text-lg font-black tracking-tight text-slate-950 dark:text-white transition-colors duration-200">
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
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
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
                                border-slate-200/90
                                dark:border-white/15
                                flex
                                items-center
                                justify-between
                                text-xs
                                font-bold
                                uppercase
                                tracking-wider
                                text-slate-800
                                dark:text-slate-200
                                hover:text-black
                                dark:hover:text-white
                                transition-colors
                                group/cta
                              "
                            >
                              <span className="flex items-center gap-1.5">
                                <Sparkles className="w-3 h-3 text-slate-500 dark:text-slate-400 group-hover/cta:rotate-12 transition-transform" />
                                <span>Explore Details</span>
                              </span>
                              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 text-slate-600 dark:text-slate-300" />
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Active Bottom Line */}
                      {isSelected && (
                        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-slate-900 dark:via-white to-transparent z-10" />
                      )}
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Section: WHY MBSA DIGITAL */}
        <div className="mt-20 sm:mt-24 lg:mt-28 pt-14 sm:pt-18 border-t border-stone-200/80 dark:border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
            {/* Left Column: Eyebrow + Headline + Narrative + CTA */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] dark:text-blue-400 mb-4 sm:mb-5">
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#2563EB]" />
                <span>WHY MBSA DIGITAL</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-[1.14] text-stone-900 dark:text-white mb-5">
                One team that connects search,
                <span className="text-[#2563EB] dark:text-[#52adbff]">
                  website and reporting
                </span>
              </h2>

              <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed mb-6 sm:mb-8 font-normal">
                Many businesses hire an SEO freelancer, a web developer and an ads agency, then spend months trying to join up their advice. We plan the whole journey together: how people search, where they land, and what makes them get in touch.
              </p>

              <div>

                <Link
                  href="/about"
                  className="
    relative
    group/link
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
    bg-white/90
    dark:bg-[#0f0f11]
    backdrop-blur-xl
    text-stone-800
    dark:text-white
    text-xs
    sm:text-[13.5px]
    font-semibold
    shadow-sm
    hover:bg-orange-600/[0.10]
    transition-all
    duration-300
    min-h-[42px]
    sm:min-h-[44px]
    touch-manipulation

    before:content-['']
    before:absolute
    before:inset-0
    before:rounded-full
    before:p-[1px]
    before:bg-gradient-to-r
    before:from-orange-500
    before:via-amber-400
    before:to-orange-600
    before:opacity-0
    before:transition-opacity
    before:duration-300
    before:pointer-events-none
    hover:before:opacity-100

    after:content-['']
    after:absolute
    after:inset-[1px]
    after:rounded-full
    after:bg-white/90
    dark:after:bg-[#0f0f11]
    after:opacity-0
    after:transition-opacity
    after:duration-300
    after:pointer-events-none
    hover:after:opacity-100
  "
                >
                  <span className="relative z-10">About MBSA</span>

                  <ArrowRight
                    className="
      relative
      z-10
      w-3.5
      h-3.5
      text-stone-400
      group-hover/link:text-orange-500
      group-hover/link:translate-x-1
      transition-all
      duration-300
    "
                  />
                </Link>
              </div>
            </div>

            {/* Right Column: 4 Diagnostic Pillars with Checkmarks & Clean Dividers */}
            <div className="lg:col-span-7 divide-y divide-stone-200/90 dark:divide-white/10">
              {WHY_MBSA_POINTS.map((pt, idx) => (
                <div
                  key={idx}
                  className="py-6 first:pt-0 last:pb-0 flex items-start gap-4 sm:gap-5 group"
                >
                  <div className="w-7 h-7 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/50 flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5 group-hover:scale-110 transition-transform shadow-xs">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-[17px] font-bold text-stone-900 dark:text-white tracking-tight mb-1.5 group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors">
                      {pt.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section: HOW WE WORK */}
        <div className="mt-16 sm:mt-20 lg:mt-24 rounded-3xl p-6 sm:p-10 lg:p-12 bg-white dark:bg-gradient-to-b dark:from-[#0B1324] dark:via-[#070D1A] dark:to-[#040810] text-stone-900 dark:text-white border border-stone-200/90 dark:border-blue-900/40 shadow-xl dark:shadow-2xl overflow-hidden relative transition-colors duration-300">
          {/* Subtle Royal Blue ambient corner glow */}
          <div className="absolute top-0 right-0 w-[350px] sm:w-[480px] h-[250px] sm:h-[350px] bg-[#2563EB]/[0.06] dark:bg-[#2563EB]/15 rounded-full blur-[110px] pointer-events-none" />

          {/* Top Row: Eyebrow + Headline + Right CTA Link */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-stone-200/90 dark:border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] dark:text-blue-400 mb-3 sm:mb-4">
                <span className="w-2.5 h-2.5 rounded-[2px] bg-[#2563EB]" />
                <span>HOW WE WORK</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-[1.18] text-stone-900 dark:text-white max-w-2xl">
                A clear process, so you always know what happens next
              </h2>
            </div>

            <div className="shrink-0">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-stone-600 dark:text-stone-200 hover:text-[#2563EB] dark:hover:text-white transition-colors group"
              >
                <span>See the full process</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#2563EB] dark:text-[#3B82F6]" />
              </Link>
            </div>
          </div>

          {/* Main 5-Node Layout: Left 2 Cards - Center MBSA Hub - Right 2 Cards with Live Moving Border */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 xl:gap-5 items-stretch mt-8 sm:mt-10">
            {/* Left 2 Columns (Steps 01 & 02) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4.5">
              {PROCESS_STEPS.slice(0, 2).map((step, idx) => (
                <div
                  key={idx}
                  className="relative p-[1.5px] rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  {/* Live Moving Border (Continuous spin, Gemini spectrum) */}
                  <div className="absolute inset-[-100%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_55%,#2563EB_68%,#38BDF8_76%,#FFFFFF_84%,#F59E0B_92%,#EC4899_98%,transparent_100%)] pointer-events-none" />

                  {/* Card Interior */}
                  <div className="relative z-10 flex flex-col justify-between h-full rounded-[calc(1rem-1.5px)] p-5 sm:p-5.5 bg-[#F8FAFC] dark:bg-[#0A1020] border border-stone-200/60 dark:border-white/5 transition-colors duration-300">
                    <div>
                      {/* Top colored accent line */}
                      <div className={`h-[2px]`} />

                      {/* Step Number & Stage */}
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-mono font-bold ${step.tagColor} tracking-wider`}>
                          {step.step}
                        </span>

                      </div>

                      {/* Step Title */}
                      <h3 className="text-base font-bold text-stone-900 dark:text-white tracking-tight mb-2 group-hover:text-[#2563EB] dark:group-hover:text-blue-300 transition-colors">
                        {step.title}
                      </h3>

                      {/* Step Description */}
                      <p className="text-xs sm:text-[13px] text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>


                  </div>
                </div>
              ))}
            </div>




            {/* Right 2 Columns (Steps 03 & 04) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4.5">
              {PROCESS_STEPS.slice(2, 4).map((step, idx) => (
                <div
                  key={idx + 2}
                  className="relative p-[1.5px] rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  {/* Live Moving Border (Continuous spin, Gemini spectrum) */}
                  <div className="absolute inset-[-100%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_55%,#2563EB_68%,#38BDF8_76%,#FFFFFF_84%,#F59E0B_92%,#EC4899_98%,transparent_100%)] pointer-events-none" />

                  {/* Card Interior */}
                  <div className="relative z-10 flex flex-col justify-between h-full rounded-[calc(1rem-1.5px)] p-5 sm:p-5.5 bg-[#F8FAFC] dark:bg-[#0A1020] border border-stone-200/60 dark:border-white/5 transition-colors duration-300">
                    <div>
                      {/* Top colored accent line */}

                      {/* Step Number & Stage */}
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-mono font-bold ${step.tagColor} tracking-wider`}>
                          {step.step}
                        </span>

                      </div>

                      {/* Step Title */}
                      <h3 className="text-base font-bold text-stone-900 dark:text-white tracking-tight mb-2 group-hover:text-[#2563EB] dark:group-hover:text-blue-300 transition-colors">
                        {step.title}
                      </h3>

                      {/* Step Description */}
                      <p className="text-xs sm:text-[13px] text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>

                    {/* Bottom Tag */}

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
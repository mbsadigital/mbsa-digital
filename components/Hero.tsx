"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, X } from "lucide-react";

// Fast dynamic import of Three.js canvas to eliminate 1.1MB blocking JS on initial LCP
const HeroEarthCanvas = dynamic(() => import("./HeroEarthCanvas"), {
  ssr: false,
  loading: () => <HeroEarthStaticGlobe />,
});


/* =========================================================
   TYPES & MARKETING NODES DATA
========================================================= */

interface MarketingNodeData {
  id: string;
  name: string;
  subtitle: string;
  metric: string;
  badge: string;
  description: string;
  bullets: string[];
  techStack: string[];
  overlayPos: string;
  image: string;
}

const MARKETING_NODES: MarketingNodeData[] = [
  // ===================== LEFT SIDE (5 NODES) =====================
  {
    id: "gsc",
    name: "Google Search Console",
    subtitle: "Performance",
    metric: "185K Clicks",
    badge: "Organic SEO",
    description: "Dominate search engine results pages with organic indexing, keyword positioning, and crawl performance.",
    bullets: ["Technical SEO", "Keyword Research", "SERP Analysis"],
    techStack: ["Search Console", "Core Web Vitals", "XML Sitemaps"],
    overlayPos: "top-[2%] left-0 sm:left-[-3%] lg:left-[-6%]",
    image: "/banner/googlesearchconsole.jpeg",
  },
  {
    id: "ahrefs",
    name: "Ahrefs",
    subtitle: "Backlinks & Keywords",
    metric: "10M+ Links",
    badge: "Backlink DR",
    description: "Industry-leading backlink analysis, domain rating intelligence, and comprehensive content gap exploration.",
    bullets: ["Backlink Profiles", "Keyword Explorer", "Domain Rating DR"],
    techStack: ["Ahrefs", "Site Explorer", "Content Explorer"],
    overlayPos: "top-[24%] left-[-2%] sm:left-[-6%] lg:left-[-12%]",
    image: "/banner/ahref.jpeg",
  },
  {
    id: "screaming-frog",
    name: "Screaming Frog",
    subtitle: "Technical SEO",
    metric: "SEO Spider",
    badge: "Deep Crawler",
    description: "Technical SEO site audits, large-scale broken link identification, redirect chains, and structured data validation.",
    bullets: ["Site Crawls", "Redirect Audits", "Data Extraction"],
    techStack: ["Screaming Frog", "Log File Analyser", "SEO Spider"],
    overlayPos: "top-[47%] left-[-4%] sm:left-[-8%] lg:left-[-15%]",
    image: "/banner/scramingfrog.png",
  },
  {
    id: "analytics",
    name: "Google Analytics",
    subtitle: "Track & Optimize",
    metric: "GA4 Pro",
    badge: "Intelligence",
    description: "Track user journeys, conversion events, and attribution modeling with enterprise real-time GA4 tracking.",
    bullets: ["Real-Time Tracking", "Conversion Funnels", "Custom Dashboards"],
    techStack: ["Google Analytics 4", "Google Tag Manager", "Looker Studio"],
    overlayPos: "top-[70%] left-[-2%] sm:left-[-6%] lg:left-[-12%]",
    image: "/banner/googleanalytics.png",
  },
  {
    id: "gmb",
    name: "Google My Business",
    subtitle: "Local Visibility",
    metric: "Local 3-Pack",
    badge: "Local SEO",
    description: "Dominate local map pack rankings, Google Business profile optimization, review management, and local search presence.",
    bullets: ["Local Maps 3-Pack", "GMB Profile Audit", "Local Intent Leads"],
    techStack: ["Google Business Profile", "Google Maps", "Local Citations"],
    overlayPos: "top-[92%] left-0 sm:left-[-3%] lg:left-[-6%]",
    image: "/banner/googlebussiness.png",
  },

  // ===================== RIGHT SIDE (5 NODES) =====================
  {
    id: "semrush",
    name: "SEMrush",
    subtitle: "Competitor Analysis",
    metric: "+350% Rank",
    badge: "Keyword Pro",
    description: "All-in-one competitor intelligence, keyword magic indexing, search volume analytics, and domain position tracking.",
    bullets: ["Keyword Magic Tool", "Domain Overview", "Position Tracking"],
    techStack: ["SEMrush", "Organic Research", "Keyword Gap"],
    overlayPos: "top-[2%] right-0 sm:right-[-3%] lg:right-[-6%]",
    image: "/banner/semrush.png",
  },
  {
    id: "web",
    name: "Web Development",
    subtitle: "Brand Growth",
    metric: "99 Vitals",
    badge: "Brand Growth",
    description: "Social media reach, omnichannel audience acquisition, high-converting digital presence and web architecture.",
    bullets: ["Social Strategy", "Brand Reach", "Conversion Funnels"],
    techStack: ["Meta Business", "LinkedIn", "Next.js", "Analytics"],
    overlayPos: "top-[24%] right-[-2%] sm:right-[-6%] lg:right-[-12%]",
    image: "/banner/webdevelopement.png",
  },
  {
    id: "ads",
    name: "Google Ads",
    subtitle: "Paid Campaigns",
    metric: "5.4x ROAS",
    badge: "PPC Scaling",
    description: "Drive high-intent traffic and maximum ROI conversions with tailored Google Ads & PPC advertising campaigns.",
    bullets: ["Search & Display", "Performance Max", "Targeted Retargeting"],
    techStack: ["Google Ads", "Meta Ads Manager", "Microsoft Ads"],
    overlayPos: "top-[47%] right-[-4%] sm:right-[-8%] lg:right-[-15%]",
    image: "/banner/googleads.png",
  },
  {
    id: "ecom",
    name: "E-commerce",
    subtitle: "Sales Scaling",
    metric: "+240% Sales",
    badge: "E-Commerce",
    description: "Scale high-converting Shopify & WooCommerce storefronts with optimized checkout funnels and retention marketing.",
    bullets: ["Store Audits", "Checkout Optimization", "Conversion Rate CRO"],
    techStack: ["Shopify Plus", "WooCommerce", "Klaviyo", "Stripe"],
    overlayPos: "top-[70%] right-[-2%] sm:right-[-6%] lg:right-[-12%]",
    image: "/banner/woocommerce.png",
  },
  {
    id: "ai",
    name: "AI & Content",
    subtitle: "Engage Audience",
    metric: "10x Speed",
    badge: "Workflow Auto",
    description: "Engaging editorial content, AI-accelerated copy, audience retention, and organic conversion pipelines.",
    bullets: ["Audience Engagement", "Content Pipelines", "Predictive Analytics"],
    techStack: ["Content Strategy", "ChatGPT", "Claude", "Zapier"],
    overlayPos: "top-[92%] right-0 sm:right-[-3%] lg:right-[-6%]",
    image: "/banner/aitools.png",
  },
];

/* =========================================================
   INSTANT STATIC GLOBE FALLBACK (Zero Buffering & Instant LCP)
========================================================= */

export function HeroEarthStaticGlobe() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none pointer-events-none">
      <div className="relative w-[75%] h-[75%] rounded-full overflow-hidden flex items-center justify-center shadow-[0_0_60px_rgba(234,88,12,0.45)]">
        {/* Photorealistic Spherical Earth Background with 3D Shader Depth */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 32% 30%, #FDBA74 0%, #FB923C 18%, #EA580C 45%, #9A3412 70%, #431407 90%, #1c0a02 100%)",
            boxShadow:
              "inset -20px -20px 50px rgba(0, 0, 0, 0.85), inset 10px 10px 30px rgba(255, 255, 255, 0.35)",
          }}
        />

        {/* Ambient Orbiting Latitude & Longitude Grid */}
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full opacity-40 mix-blend-screen"
        >
          {/* Equator & Parallels */}
          <ellipse cx="100" cy="100" rx="92" ry="32" fill="none" stroke="#FED7AA" strokeWidth="1.2" strokeDasharray="3 3" />
          <ellipse cx="100" cy="70" rx="82" ry="24" fill="none" stroke="#FED7AA" strokeWidth="0.9" strokeDasharray="2 3" />
          <ellipse cx="100" cy="130" rx="82" ry="24" fill="none" stroke="#FED7AA" strokeWidth="0.9" strokeDasharray="2 3" />
          {/* Meridians */}
          <ellipse cx="100" cy="100" rx="40" ry="92" fill="none" stroke="#FED7AA" strokeWidth="1.2" />
          <ellipse cx="100" cy="100" rx="72" ry="92" fill="none" stroke="#FED7AA" strokeWidth="0.9" />
          <line x1="100" y1="8" x2="100" y2="192" stroke="#FED7AA" strokeWidth="1.2" />
        </svg>

        {/* Cyan Atmospheric Rim Fresnel */}
        <div className="absolute inset-0 rounded-full border-2 border-cyan-400/40 shadow-[inset_0_0_25px_rgba(34,211,238,0.5)]" />
      </div>
    </div>
  );
}

/* =========================================================
   HERO 3D EARTH DASHBOARD CONTAINER (RIGHT SIDE)
========================================================= */

function Hero3DEarthDashboard() {
  const [activeNode, setActiveNode] = useState<MarketingNodeData | null>(null);

  return (
    <div className="w-full flex flex-col items-center">
      {/* 3D Earth Globe container */}
      <div
        className="
          relative
          w-full
          aspect-square
          max-w-[300px]
          min-[360px]:max-w-[330px]
          min-[400px]:max-w-[380px]
          min-[480px]:max-w-[440px]
          sm:max-w-[500px]
          md:max-w-[540px]
          lg:max-w-[580px]
          xl:max-w-[640px]
          mx-auto
          flex
          items-center
          justify-center
          select-none
        "
      >
        {/* Spherical Rounded Ambient Glow & Orbit Ring */}
        <div className="absolute inset-8 sm:inset-12 rounded-full bg-gradient-to-tr from-[#EA580C]/20 via-[#F97316]/10 to-cyan-500/15 blur-3xl pointer-events-none" />
        <div className="absolute inset-4 sm:inset-6 rounded-full border border-orange-500/15 dark:border-cyan-500/20 pointer-events-none" />

        {/* Dynamic Three.js 3D WebGL Canvas with instant static globe fallback */}
        <div className="absolute inset-0 flex items-center justify-center">
          <HeroEarthCanvas />
        </div>


        {/* Interactive Marketing Node Badges Overlay around Earth */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {MARKETING_NODES.map((node) => {
            const isActive = activeNode?.id === node.id;

            return (
              <motion.div
                key={node.id}
                className={`absolute pointer-events-auto cursor-pointer select-none ${node.overlayPos}`}
                onMouseEnter={() => {
                  if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
                    setActiveNode(node);
                  }
                }}
                onMouseLeave={() => {
                  if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
                    setActiveNode(null);
                  }
                }}
                onClick={() => setActiveNode((prev) => (prev?.id === node.id ? null : node))}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <div
                  className={`
                    flex items-center gap-2.5 sm:gap-3.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl sm:rounded-2xl backdrop-blur-2xl border transition-all duration-300 shadow-md sm:shadow-lg
                    ${isActive
                      ? "bg-white dark:bg-[#141210] border-[#EA580C] shadow-[0_10px_30px_rgba(234,88,12,0.40)] ring-2 ring-orange-500/30 scale-105"
                      : "bg-white/95 dark:bg-[#121110]/95 text-stone-900 dark:text-white border-stone-200/90 dark:border-white/10 hover:border-orange-500/70 hover:shadow-[0_10px_28px_rgba(234,88,12,0.22)]"
                    }
                  `}
                >
                  {/* Tool Icon */}
                  <div className="w-6 h-6 min-[380px]:w-6.5 min-[380px]:h-6.5 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-stone-50 dark:bg-white/[0.06] border border-stone-200/80 dark:border-white/10 flex items-center justify-center shrink-0 overflow-hidden p-0.5 sm:p-1 shadow-xs">
                    <Image
                      src={node.image}
                      alt={node.name}
                      width={32}
                      height={32}
                      loading="eager"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Title & Subtitle + 3-Bar Signal Chart Indicator */}
                  <div className="flex flex-col text-left pr-0.5">
                    <span className="text-[10px] min-[380px]:text-[11px] sm:text-[12px] lg:text-[12.5px] font-bold text-stone-900 dark:text-white leading-tight tracking-tight whitespace-nowrap">
                      {node.name}
                    </span>
                    <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5">
                      <span className="text-[8px] min-[380px]:text-[9px] sm:text-[10px] text-stone-500 dark:text-stone-400 font-medium whitespace-nowrap">
                        {node.subtitle}
                      </span>
                      {/* 3-Bar Signal / Growth Indicator */}
                      <span className="inline-flex items-end gap-[1.5px] h-2.5 sm:h-3 pb-0.5 shrink-0" aria-hidden="true">
                        <span className="w-[2px] h-1 sm:h-1.5 rounded-full bg-orange-400" />
                        <span className="w-[2px] h-1.5 sm:h-2.5 rounded-full bg-orange-600" />
                        <span className="w-[2px] h-2 sm:h-3 rounded-full bg-[#EA580C]" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop Active Node Detail Overlay Card (Inside Earth at bottom on desktop sm: and above) */}
        <AnimatePresence>
          {activeNode && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="
                hidden
                sm:block
                absolute
                sm:bottom-5
                left-1/2
                -translate-x-1/2
                z-40
                w-[90%]
                max-w-[315px]
                rounded-xl
                border
                border-orange-500/60
                bg-white/95
                dark:bg-[#060D1E]/95
                text-stone-900
                dark:text-white
                p-3.5
                sm:p-5
                text-left
                shadow-[0_8px_25px_rgba(234,88,12,0.25)]
                backdrop-blur-xl
                pointer-events-auto
              "
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-stone-100 dark:bg-white/10 border border-orange-500/40 flex items-center justify-center overflow-hidden p-0.5 shrink-0">
                    <Image
                      src={activeNode.image}
                      alt={activeNode.name}
                      width={26}
                      height={26}
                      className="w-full h-full object-contain rounded-xs"
                    />
                  </div>
                  <span className="text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-wide truncate max-w-[190px]">
                    {activeNode.name}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveNode(null);
                  }}
                  className="p-1 rounded-full text-stone-400 hover:text-stone-700 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-white/10 transition-colors"
                  aria-label="Close details"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-[9.5px] sm:text-[10px] text-stone-600 dark:text-stone-300 leading-snug mb-1.5">
                {activeNode.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-1.5">
                {activeNode.bullets.map((b, idx) => (
                  <span
                    key={idx}
                    className="text-[8px] sm:text-[8.5px] font-medium px-1.5 py-0.5 rounded bg-orange-50 dark:bg-white/10 text-orange-700 dark:text-cyan-300 border border-orange-200 dark:border-cyan-500/20"
                  >
                    ✓ {b}
                  </span>
                ))}
              </div>

              <div className="text-[8px] sm:text-[8.5px] text-stone-500 dark:text-stone-400 flex items-center gap-1 flex-wrap">
                <span className="font-semibold text-stone-700 dark:text-stone-300">Stack:</span>
                <span>{activeNode.techStack.join(" • ")}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>


      {/* Mobile Active Node Detail Card (Rendered BELOW the Earth so Earth is NEVER hidden!) */}
      <div className="sm:hidden w-full flex flex-col items-center px-2">
        <AnimatePresence>
          {activeNode && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.96 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="
                mt-1
                w-full
                max-w-[280px]
                rounded-2xl
                border
                border-orange-500/70
                bg-white/95
                dark:bg-[#060D1E]/95
                text-stone-900
                dark:text-white
                p-2.5
                text-left
                shadow-[0_12px_35px_rgba(234,88,12,0.30)]
                backdrop-blur-2xl
              "
            >
              <div className="flex items-center justify-between gap-1 mb-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-5.5 h-5.5 rounded-md bg-stone-100 dark:bg-white/10 border border-orange-500/40 flex items-center justify-center overflow-hidden p-0.5 shrink-0">
                    <Image
                      src={activeNode.image}
                      alt={activeNode.name}
                      width={28}
                      height={28}
                      className="w-full h-full object-contain rounded-xs"
                    />
                  </div>
                  <span className="text-[13px] font-black uppercase tracking-wide truncate max-w-[210px]">
                    {activeNode.name}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveNode(null);
                  }}
                  className="p-1 rounded-full text-stone-400 hover:text-stone-700 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-white/10 transition-colors"
                  aria-label="Close details"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[10.5px] text-stone-600 dark:text-stone-300 leading-snug mb-2">
                {activeNode.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-2">
                {activeNode.bullets.map((b, idx) => (
                  <span
                    key={idx}
                    className="text-[8.5px] font-medium px-2 py-0.5 rounded bg-orange-50 dark:bg-white/10 text-orange-700 dark:text-cyan-300 border border-orange-200 dark:border-cyan-500/20"
                  >
                    ✓ {b}
                  </span>
                ))}
              </div>

              <div className="text-[8.5px] text-stone-500 dark:text-stone-400 flex items-center gap-1 flex-wrap">
                <span className="font-semibold text-stone-700 dark:text-stone-300">Stack:</span>
                <span>{activeNode.techStack.join(" • ")}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* =========================================================
   HERO MAIN EXPORT
========================================================= */

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-[92vh]
        lg:min-h-[calc(100vh-64px)]
        overflow-hidden
        text-stone-900
        dark:text-white
        transition-colors
        duration-500
        pt-24
        sm:pt-28
        md:pt-32
        lg:pt-28
        xl:pt-32
        pb-12
        sm:pb-16
        lg:pb-20
        flex
        items-center
      "
    >
      {/* Background Ambience & Lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Dark Orange Flare */}
        <div className="absolute left-[8%] top-[12%] h-[480px] w-[480px] rounded-full bg-orange-600/[0.10] dark:bg-orange-600/[0.14] blur-[140px]" />
        {/* Electric Cyan Flare */}
        <div className="absolute right-[5%] top-[20%] h-[520px] w-[520px] rounded-full bg-cyan-500/[0.08] dark:bg-cyan-500/[0.12] blur-[150px]" />
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] bg-[linear-gradient(rgba(234,88,12,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(234,88,12,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Top Gradient Divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-12 items-center">

          {/* =================================================
              LEFT COLUMN: HERO COPY & PROPOSITION
          ================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Top Label Badge */}
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-3.5
                  py-1.5
                  bg-[#EA580C]
                  text-white
                  text-[10px]
                  sm:text-xs
                  font-black
                  uppercase
                  tracking-[0.16em]
                  -rotate-1
                  shadow-[4px_4px_0_rgba(194,65,12,0.30)]
                  rounded-sm
                "
              >
                <Search className="w-3.5 h-3.5" />
                We Deliver Growth
              </span>
            </div>

            {/* Main Headline - Semantic H1 for SEO and Instant LCP */}
            <div className="relative mb-5">
              <h1 className="relative select-none uppercase font-black leading-[0.90] tracking-[-0.035em]">
                {/* DIGITAL */}
                <span
                  className="
                    block
                    text-[2.6rem]
                    min-[380px]:text-[3.2rem]
                    sm:text-[4.2rem]
                    md:text-[5rem]
                    lg:text-[4.8rem]
                    xl:text-[5.5rem]
                    text-[#1C1917]
                    dark:text-[#FFF7ED]
                  "
                >
                  DIGITAL
                </span>

                {/* MARKETING */}
                <span
                  className="
                    block
                    text-[2.2rem]
                    min-[380px]:text-[2.8rem]
                    sm:text-[3.8rem]
                    md:text-[4.5rem]
                    lg:text-[4.3rem]
                    xl:text-[5.0rem]
                    text-transparent
                    [-webkit-text-stroke:1.4px_#EA580C]
                    sm:[-webkit-text-stroke:2px_#EA580C]
                    dark:[-webkit-text-stroke:1.6px_#F97316]
                    sm:dark:[-webkit-text-stroke:2px_#F97316]
                  "
                >
                  MARKETING
                </span>

                {/* GROWTH */}
                <span
                  className="
                    block
                    text-[2.6rem]
                    min-[380px]:text-[3.2rem]
                    sm:text-[4.2rem]
                    md:text-[5rem]
                    lg:text-[4.8rem]
                    xl:text-[5.5rem]
                    text-[#1C1917]
                    dark:text-[#FFF7ED]
                  "
                >
                  GROWTH
                </span>
              </h1>

              {/* Bottom Tagline */}
              <div className="mt-4 flex items-center gap-3">
                <span
                  className="
                    inline-flex
                    px-3
                    py-1.5
                    bg-[#EA580C]
                    text-white
                    text-[10px]
                    sm:text-xs
                    font-black
                    uppercase
                    tracking-[0.14em]
                    -rotate-1
                    shadow-[4px_4px_0_rgba(194,65,12,0.25)]
                  "
                >
                  Explore Our Business Solution
                </span>

              </div>
            </div>

            {/* Description */}
            <p>
              Hi, I&apos;m Muskan. I help Brands Show up When Real People Search,
              whether that is a Google results page or an answer from ChatGPT,
              Gemini or Perplexity. I mix Technical SEO, honest content and clean
              websites so the traffic you earn turns into customers.
            </p>
            {/* Stats Bar Under the Earth */}
            <div className="mt-6 sm:mt-8 w-full max-w-[460px] grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-3.5 rounded-2xl border border-stone-200/90 dark:border-white/10 shadow-sm text-center">
              <div className="px-1 sm:px-2">
                <div className="text-lg sm:text-2xl font-black text-stone-900 dark:text-white">
                  5<span className="text-[#EA580C]">+</span>
                </div>
                <div className="text-[10px] sm:text-xs font-semibold text-stone-500 dark:text-stone-400 mt-0.5 leading-tight">
                  Years Experience
                </div>
              </div>
              <div className="px-1 sm:px-2 border-x border-stone-200 dark:border-white/10">
                <div className="text-lg sm:text-2xl font-black text-stone-900 dark:text-white">
                  5<span className="text-[#EA580C]">+</span>
                </div>
                <div className="text-[10px] sm:text-xs font-semibold text-stone-500 dark:text-stone-400 mt-0.5 leading-tight">
                  Happy Clients
                </div>
              </div>
              <div className="px-1 sm:px-2">
                <div className="text-lg sm:text-2xl font-black text-stone-900 dark:text-white">
                  15<span className="text-[#EA580C]">+</span>
                </div>
                <div className="text-[10px] sm:text-xs font-semibold text-stone-500 dark:text-stone-400 mt-0.5 leading-tight">
                  Projects Done
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              className="mt-6 sm:mt-8 flex flex-col min-[420px]:flex-row items-stretch min-[420px]:items-center gap-3 sm:gap-4"
            >
              {/* Primary Action */}
              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5
                  w-full
                  min-[420px]:w-auto
                  px-6
                  sm:px-7
                  py-3
                  sm:py-3.5
                  rounded-full
                  bg-gradient-to-r
                  from-[#EA580C]
                  via-[#EA580C]
                  to-[#EA580C]
                  text-white
                  text-xs
                  sm:text-sm
                  md:text-[15px]
                  font-bold
                  shadow-[0_10px_30px_rgba(234,88,12,0.35)]
                  hover:-translate-y-0.5
                  hover:shadow-[0_15px_35px_rgba(234,88,12,0.50)]
                  transition-all
                  duration-300
                "
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Secondary Action */}
              <a
                href="#projects"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5
                  w-full
                  min-[420px]:w-auto
                  px-6
                  sm:px-7
                  py-3
                  sm:py-3.5
                  rounded-full
                  border
                  border-stone-300
                  dark:border-white/15
                  bg-white/80
                  dark:bg-white/[0.04]
                  backdrop-blur-xl
                  text-stone-800
                  dark:text-white
                  text-xs
                  sm:text-sm
                  md:text-[15px]
                  font-semibold
                  hover:bg-orange-600/[0.10]
                  hover:border-orange-500/60
                  transition-all
                  duration-300
                "
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-orange-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* =================================================
              RIGHT COLUMN: REAL PHOTOREALISTIC 3D EARTH
          ================================================= */}
          <div
            className="lg:col-span-6 flex flex-col items-center justify-center w-full mt-6 sm:mt-8 lg:mt-0 lg:translate-x-6 xl:translate-x-10"
          >
            <Hero3DEarthDashboard />
          </div>

        </div>
      </div>
    </section>
  );
}
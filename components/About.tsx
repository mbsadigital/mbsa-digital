"use client";

import React from "react";
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
  Plane,
  ChevronRight,
} from "lucide-react";

function IndiaFlag({ className = "w-4 h-3" }: { className?: string }) {
  return (
    <span className={`inline-block rounded-xs overflow-hidden shadow-xs ring-1 ring-black/10 shrink-0 ${className}`}>
      <svg viewBox="0 0 640 480" className="w-full h-full block">
        <path fill="#FF9933" d="M0 0h640v160H0z" />
        <path fill="#FFFFFF" d="M0 160h640v160H0z" />
        <path fill="#128807" d="M0 320h640v160H0z" />
        <circle cx="320" cy="240" r="38" fill="#000080" />
        <circle cx="320" cy="240" r="30" fill="#FFFFFF" />
        <circle cx="320" cy="240" r="8" fill="#000080" />
      </svg>
    </span>
  );
}

function UKFlag({ className = "w-4 h-3" }: { className?: string }) {
  return (
    <span className={`inline-block rounded-xs overflow-hidden shadow-xs ring-1 ring-black/10 shrink-0 ${className}`}>
      <svg viewBox="0 0 60 30" className="w-full h-full block">
        <clipPath id="uk-flag-clip-hero">
          <path d="M0 0v30h60V0z" />
        </clipPath>
        <path d="M0 0v30h60V0z" fill="#012169" />
        <path d="M0 0l60 30m0-30L0 30" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M0 0l60 30m0-30L0 30" clipPath="url(#uk-flag-clip-hero)" stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0v30M0 15h60" stroke="#FFFFFF" strokeWidth="10" />
        <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
      </svg>
    </span>
  );
}

export default function About() {
  const [heroActiveTab, setHeroActiveTab] = React.useState<"growth" | "vitals" | "market">("growth");

  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        py-16 sm:py-20 lg:py-24
        bg-white dark:bg-[#090807]
        text-slate-900 dark:text-white
        font-[family-name:var(--font-plus-jakarta-sans)]
        transition-colors duration-500
      "
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-orange-500/[0.06] dark:bg-orange-500/[0.08] blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-orange-500/[0.05] dark:bg-orange-500/[0.07] blur-[130px]" />
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
            About me
          </span>
        </div>

        {/* BUSINESS-FIRST ABOUT HERO - ELEVATED EXECUTIVE ARCHITECTURE */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column: Strategic Positioning */}
          <div className="lg:col-span-6 xl:col-span-6 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <motion.span
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.45 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#2563EB]/20 bg-[#2563EB]/[0.06] dark:bg-[#14B8A6]/[0.08] px-3 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#2563EB] dark:text-[#14B8A6]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
                </span>
                Strategy · Search · Growth
              </motion.span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#2563EB]/10 text-[#2563EB] dark:text-[#60A5FA] border border-[#2563EB]/20">
                UK &amp; India Practice
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black tracking-tight leading-[1.08] text-slate-950 dark:text-white">
              Smart business
              <span className="block mt-1 sm:mt-2 text-[#2563EB] dark:text-[#3B82F6]">
                Smart people
              </span>
            </h2>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              I combine rigorous technical SEO, GA4 revenue attribution, and clean engineering architecture to help ambitious brands transform organic search into high-margin commercial velocity.
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
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#2563EB] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2563EB]/25 hover:shadow-[#2563EB]/45 border border-blue-400/30 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:ring-offset-2 dark:focus:ring-offset-[#090807]"
              >
                <span>Explore About</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

            </div>
          </div>

          {/* Right Column: Interactive Multi-View SEO Intelligence Cockpit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 14 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-6 relative mx-auto w-full max-w-[560px]"
          >
            {/* Background Ambient Aura - Colors unchanged */}
            <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-[#2563EB]/15 via-[#6366F1]/10 to-[#F97316]/15 blur-2xl" />

            {/* Glass Cockpit Console */}
            <div className="relative overflow-hidden rounded-[26px] sm:rounded-[30px] border border-white/80 dark:border-white/10 bg-gradient-to-br from-white/95 via-[#F8FAFF]/90 to-orange-50/70 dark:from-[#131722]/95 dark:via-[#11141F]/90 dark:to-[#1C1613]/90 p-4 sm:p-6 shadow-[0_25px_80px_rgba(37,99,235,0.12)] backdrop-blur-2xl">

              {/* Top Console Bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-200/80 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
                  </div>
                  <span className="ml-1 text-[10px] font-mono font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                    mbsa.growth.telemetry
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9.5px] font-bold text-emerald-600 dark:text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>LIVE ENGINE</span>
                </div>
              </div>

              {/* Interactive View Switcher Tabs */}
              <div className="grid grid-cols-3 gap-1.5 my-3 p-1 rounded-xl bg-slate-200/60 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
                {[
                  { id: "growth", label: "Organic Reach", icon: TrendingUp },
                  { id: "vitals", label: "Core Vitals", icon: Zap },
                  { id: "market", label: "Global Route", icon: Globe2 },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = heroActiveTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setHeroActiveTab(tab.id as "growth" | "vitals" | "market")}
                      className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all duration-200 cursor-pointer ${isActive
                        ? "bg-white dark:bg-[#1E2538] text-[#2563EB] dark:text-[#60A5FA] shadow-xs"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        }`}
                    >
                      <Icon className="w-3 h-3" />
                      <span className="truncate">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic View Content */}
              {heroActiveTab === "growth" && (
                <div className="space-y-3 pt-1">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                        Organic Search Footprint
                      </p>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">+340%</span>
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Qualified Inbound</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 block">Top 3 Rankings</span>
                      <span className="text-xs font-black text-orange-500">42+ High-Intent KWs</span>
                    </div>
                  </div>

                  {/* SVG Wave Visualizer */}
                  <div className="relative h-20 w-full overflow-hidden rounded-xl bg-slate-100/70 dark:bg-white/[0.03] border border-slate-200/50 dark:border-white/5 p-2 flex items-end">
                    <svg viewBox="0 0 400 90" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.45" />
                          <stop offset="85%" stopColor="#F97316" stopOpacity="0.05" />
                          <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,75 Q40,65 80,68 T160,50 T240,42 T320,18 T400,6 L400,90 L0,90 Z"
                        fill="url(#heroGradient)"
                      />
                      <path
                        d="M0,75 Q40,65 80,68 T160,50 T240,42 T320,18 T400,6"
                        fill="none"
                        stroke="#2563EB"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <circle cx="400" cy="6" r="4" fill="#F97316" stroke="#FFFFFF" strokeWidth="2" />
                    </svg>
                  </div>

                  {/* Live Search Query Simulation Bar */}
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/70 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/10 text-xs">
                    <Search className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                    <span className="font-mono text-[11px] text-slate-700 dark:text-slate-300 truncate">
                      google.co.uk: &ldquo;uk healthcare seo strategy&rdquo;
                    </span>
                    <span className="ml-auto text-[9.5px] font-bold px-1.5 py-0.5 rounded-sm bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 shrink-0">
                      #1 RANK
                    </span>
                  </div>
                </div>
              )}

              {heroActiveTab === "vitals" && (
                <div className="space-y-3 pt-1">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                        Technical Architecture Health
                      </p>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">99/100</span>
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Zero Technical Debt</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 rounded-lg bg-[#2563EB]/10 text-[#2563EB]">
                      TURBOPACK SPEED
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2.5 rounded-xl bg-white/70 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/10 text-center">
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 block">LCP</span>
                      <span className="text-base font-black text-emerald-600 dark:text-emerald-400">0.8s</span>
                      <span className="text-[9px] text-slate-400 block">Good (&lt;2.5s)</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/70 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/10 text-center">
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 block">CLS</span>
                      <span className="text-base font-black text-emerald-600 dark:text-emerald-400">0.00</span>
                      <span className="text-[9px] text-slate-400 block">Zero Shift</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/70 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/10 text-center">
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 block">INP</span>
                      <span className="text-base font-black text-emerald-600 dark:text-emerald-400">24ms</span>
                      <span className="text-[9px] text-slate-400 block">Instant</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-xl bg-orange-500/[0.06] border border-orange-500/20 text-[11px] text-orange-700 dark:text-orange-300 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
                      100% Crawl Efficiency &amp; Indexation
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">200 OK</span>
                  </div>
                </div>
              )}

              {heroActiveTab === "market" && (
                <div className="space-y-3 pt-1">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                        Transatlantic Practice
                      </p>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">UK ↔ India</span>
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400">Cross-Border</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 rounded-lg bg-orange-500/10 text-orange-500">
                      LONDON EXPERIENCE
                    </span>
                  </div>

                  {/* Flight Route Simulator */}
                  <div className="p-3 rounded-xl bg-white/70 dark:bg-white/[0.04] border border-slate-200/70 dark:border-white/10">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <IndiaFlag className="w-4 h-3" />
                        <div>
                          <span className="text-xs font-black text-slate-900 dark:text-white block">India</span>
                          <span className="text-[9px] text-slate-500">Execution &amp; Leadership</span>
                        </div>
                      </div>

                      <div className="flex-1 flex items-center justify-center relative px-2">
                        <div className="w-full h-px border-t border-dashed border-[#2563EB]/60 relative" />
                        <div className="absolute px-1.5 py-0.5 rounded-full bg-[#2563EB]/15 text-[#2563EB] border border-[#2563EB]/30">
                          <Plane className="w-3 h-3 rotate-45" />
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-right">
                        <div>
                          <span className="text-xs font-black text-slate-900 dark:text-white block">London, UK</span>
                          <span className="text-[9px] text-slate-500">Market Psychology</span>
                        </div>
                        <UKFlag className="w-4 h-3" />
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">
                    2+ years on-the-ground in London managing health, beauty &amp; e-commerce brands, combined with 5+ years full-stack SEO execution in India.
                  </p>
                </div>
              )}

              {/* Bottom Quick Feature Pill */}
              <div className="mt-3.5 pt-3 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                  <span>High-performance digital engineering</span>
                </div>
                <Link
                  href="/about"
                  className="font-bold text-[#2563EB] hover:text-[#1D4ED8] dark:text-[#60A5FA] flex items-center gap-0.5"
                >
                  <span>Full story</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
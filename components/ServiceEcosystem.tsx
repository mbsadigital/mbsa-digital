"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Target,
  Share2,
  Globe,
  Zap,
  BarChart3,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  LineChart,
  ShieldCheck,
  Compass,
  Workflow,
  Radio,
} from "lucide-react";
import type { ServiceDetail } from "@/lib/servicesData";

/* =========================================================
   TYPES & CONTRACTS
========================================================= */

interface ServiceEcosystemProps {
  services: ServiceDetail[];
  activeSlug: string;
  onSelectService: (slug: string) => void;
}

// 5 Core Pillars matching the reference arc
interface ArcPillar {
  id: string;
  slug: string;
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  metric: string;
  metricLabel: string;
}

const ARC_PILLARS: ArcPillar[] = [
  {
    id: "seo",
    slug: "technical-seo",
    title: "Search Engine Optimization",
    category: "Organic Discovery & Indexing",
    icon: Search,
    metric: "+185%",
    metricLabel: "Organic Impressions",
  },
  {
    id: "ppc",
    slug: "google-ads-ppc",
    title: "Pay-Per-Click Advertising",
    category: "High-ROAS Media Automation",
    icon: Target,
    metric: "5.1x",
    metricLabel: "Attributed ROAS",
  },
  {
    id: "social",
    slug: "google-business-profile",
    title: "Social & Local 3-Pack Growth",
    category: "Spatial Maps & Brand Authority",
    icon: Share2,
    metric: "+320%",
    metricLabel: "Local Direction Requests",
  },
  {
    id: "content",
    slug: "seo-audits-strategy",
    title: "Content & Strategy Intelligence",
    category: "Semantic Graphs & Cluster Authority",
    icon: Globe,
    metric: "Top 3",
    metricLabel: "SERP Placement",
  },
  {
    id: "web",
    slug: "wordpress-nextjs-development",
    title: "Website Design & Optimization",
    category: "Sub-Second Reactive Runtimes",
    icon: Zap,
    metric: "99/100",
    metricLabel: "Core Web Vitals",
  },
];

/* =========================================================
   MAIN SERVICE ECOSYSTEM COMPONENT
========================================================= */

export default function ServiceEcosystem({
  services,
  activeSlug,
  onSelectService,
}: ServiceEcosystemProps) {
  const [activeTab, setActiveTab] = useState<"arc" | "flow">("arc");

  return (
    <div className="relative my-14 sm:my-20">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#2563EB]/[0.08] dark:bg-[#2563EB]/[0.12] blur-[160px]" />
        <div className="absolute bottom-0 right-10 w-[450px] h-[450px] rounded-full bg-[#FB923C]/[0.06] dark:bg-[#FB923C]/[0.09] blur-[140px]" />
      </div>

      {/* Main Glassmorphic Container */}
      <div className="rounded-[32px] sm:rounded-[40px] border border-stone-200/90 dark:border-white/10 bg-white/90 dark:bg-[#0D0B0A]/90 backdrop-blur-2xl p-6 sm:p-10 lg:p-14 shadow-2xl overflow-hidden transition-colors duration-500">
        {/* Section Header with Mode Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-stone-200/80 dark:border-white/10 pb-8 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#2563EB] dark:text-[#FB923C] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Funnel Agency Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 dark:text-white leading-[1.12]">
              Digital Marketing Services &amp;
              <br />
              <span className="bg-gradient-to-r from-[#2563EB] via-[#14B8A6] to-[#FB923C] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(37,99,235,0.3)]">
                Growth Flow Ecosystem.
              </span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              Explore how strategic objectives connect through multi-channel pipelines, technical SEO, and conversion analytics to deliver compound revenue.
            </p>
          </div>

          {/* Interactive Mode Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-stone-100 dark:bg-white/[0.04] border border-stone-200/80 dark:border-white/10 self-start lg:self-end">
            <button
              type="button"
              onClick={() => setActiveTab("arc")}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === "arc"
                  ? "bg-[#2563EB] text-white shadow-md shadow-orange-500/30 scale-[1.02]"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Orbital Arc Matrix</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("flow")}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === "flow"
                  ? "bg-[#2563EB] text-white shadow-md shadow-orange-500/30 scale-[1.02]"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
              }`}
            >
              <Workflow className="w-4 h-4" />
              <span>Full-Funnel Stream</span>
            </button>
          </div>
        </div>

        {/* Dynamic Mode Render with Smooth Spring Animation */}
        <AnimatePresence mode="wait">
          {activeTab === "arc" ? (
            <motion.div
              key="arc-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <OrbitalArcView
                pillars={ARC_PILLARS}
                activeSlug={activeSlug}
                onSelectService={onSelectService}
              />
            </motion.div>
          ) : (
            <motion.div
              key="flow-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <GrowthFlowView onSelectService={onSelectService} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* =========================================================
   1. ORBITAL ARC VIEW (MATCHING IMAGE 1 IN LUXURY THEME)
========================================================= */

function OrbitalArcView({
  pillars,
  activeSlug,
  onSelectService,
}: {
  pillars: ArcPillar[];
  activeSlug: string;
  onSelectService: (slug: string) => void;
}) {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center py-4 sm:py-6">
      {/* LEFT: Semi-Circular Glowing Arc Core */}
      <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
        {/* Crescent Radial Backdrop */}
        <div className="relative w-[280px] sm:w-[360px] h-[280px] sm:h-[360px] rounded-full flex items-center justify-center">
          {/* Outer Ambient Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 via-amber-400/10 to-transparent blur-3xl pointer-events-none" />

          {/* Semi-circular decorative background disc */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2563EB]/15 via-amber-500/10 to-transparent border border-orange-500/20 shadow-inner"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          />

          {/* Rotating Celestial Orbital Dashed Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 rounded-full border border-dashed border-orange-500/30 pointer-events-none"
          />

          {/* SVG Curved Connecting Spine */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 360 360"
            fill="none"
          >
            <path
              d="M 180 30 A 150 150 0 0 1 180 330"
              stroke="url(#arcGradient)"
              strokeWidth="3"
              strokeDasharray="6 6"
            />
            <defs>
              <linearGradient id="arcGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="50%" stopColor="#FB923C" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Hub Content */}
          <div className="relative z-10 text-center px-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-tr from-[#2563EB] to-[#FB923C] p-0.5 shadow-xl shadow-orange-500/30 flex items-center justify-center">
              <div className="w-full h-full rounded-[14px] bg-white dark:bg-[#111B2E] flex items-center justify-center text-[#2563EB] dark:text-[#FB923C]">
                <Layers className="w-7 h-7 animate-pulse" />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white leading-tight tracking-tight">
              Digital Marketing
              <br />
              <span className="text-[#2563EB] dark:text-[#FB923C]">
                Services
              </span>
            </h3>

            <p className="mt-2 text-[11px] sm:text-xs text-stone-500 dark:text-stone-400 font-mono">
              Click any node to explore
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT: Cascading Radiating Pills (Faithful to Image 1) */}
      <div className="lg:col-span-7 space-y-4 sm:space-y-4.5">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          const isSelected = activeSlug === pillar.slug;

          return (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.45 }}
              onClick={() => onSelectService(pillar.slug)}
              className={`group relative rounded-full p-2 pr-5 sm:pr-7 flex items-center justify-between gap-4 transition-all duration-300 cursor-pointer border ${
                isSelected
                  ? "bg-white dark:bg-[#161210] border-[#2563EB] ring-2 ring-orange-500/40 shadow-xl shadow-orange-500/20 translate-x-2"
                  : "bg-white/90 dark:bg-white/[0.03] border-stone-200/90 dark:border-white/10 hover:border-orange-500/60 hover:bg-white hover:dark:bg-white/[0.06] hover:translate-x-2 shadow-sm hover:shadow-lg hover:shadow-orange-500/10"
              }`}
            >
              {/* Left Circular Multi-Ring Gradient Icon Badge (Image 1 Style) */}
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="relative shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full p-1 bg-gradient-to-tr from-[#2563EB] via-[#14B8A6] to-[#FB923C] shadow-md shadow-orange-500/30 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  {/* Outer Pulsing Aura Ring */}
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 opacity-0 group-hover:opacity-75 blur-xs transition-opacity duration-300 pointer-events-none" />

                  {/* Inner Pure White / Obsidian Disk */}
                  <div className="relative z-10 w-full h-full rounded-full bg-white dark:bg-[#111B2E] flex items-center justify-center text-stone-900 dark:text-white">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563EB] group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Pill Title & Category */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#2563EB]">
                      PILLAR 0{idx + 1}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-white/20 group-hover:bg-[#2563EB] transition-colors" />
                    <span className="text-[10px] font-mono text-stone-400 dark:text-stone-500 hidden sm:inline">
                      {pillar.category}
                    </span>
                  </div>

                  <h4
                    className={`text-sm sm:text-base font-black truncate transition-colors ${
                      isSelected
                        ? "text-[#2563EB] dark:text-[#FB923C]"
                        : "text-stone-900 dark:text-white group-hover:text-[#2563EB]"
                    }`}
                  >
                    {pillar.title}
                  </h4>
                </div>
              </div>

              {/* Right Side: Benchmark Badge & Leaping Arrow */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="hidden sm:flex flex-col text-right">
                  <span className="font-mono text-xs font-black text-[#2563EB]">
                    {pillar.metric}
                  </span>
                  <span className="text-[10px] text-stone-500 dark:text-stone-400">
                    {pillar.metricLabel}
                  </span>
                </div>

                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? "bg-[#2563EB] text-white"
                      : "bg-stone-100 dark:bg-white/10 text-stone-700 dark:text-stone-300 group-hover:bg-[#2563EB] group-hover:text-white"
                  }`}
                >
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================
   2. FULL-FUNNEL STREAM VIEW (MATCHING IMAGE 2 IN LUXURY THEME)
========================================================= */

function GrowthFlowView({
  onSelectService,
}: {
  onSelectService: (slug: string) => void;
}) {
  return (
    <div className="space-y-10 py-4">
      {/* 3-Column Ecosystem Pipeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* COLUMN 1: Strategic Business Objectives */}
        <div className="lg:col-span-4 flex flex-col justify-between rounded-3xl p-6 sm:p-7 bg-stone-50/70 dark:bg-white/[0.025] border border-stone-200/80 dark:border-white/10 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Input Stage</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white leading-tight">
              Strategic Business Objectives
            </h3>
            <p className="mt-2 text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
              Every marketing execution begins by locking onto the revenue metrics that matter to founders and leadership.
            </p>
          </div>

          <div className="space-y-2.5">
            {[
              { label: "Attracting High-Intent Customers", tag: "Organic Inbound" },
              { label: "Generating Verified Lead Pipeline", tag: "CAC Reduction" },
              { label: "Increasing Direct Sales & E-Com Revenue", tag: "High ROAS" },
              { label: "Building Authority & Market Monopoly", tag: "Brand Equity" },
            ].map((obj, oIdx) => (
              <div
                key={oIdx}
                className="p-3.5 rounded-2xl bg-white dark:bg-[#111B2E] border border-stone-200/60 dark:border-white/5 flex items-center justify-between gap-3 shadow-xs"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span className="text-xs font-bold text-stone-800 dark:text-stone-200">
                    {obj.label}
                  </span>
                </div>
                <span className="font-mono text-[9px] uppercase px-2 py-0.5 rounded-full bg-orange-500/10 text-[#2563EB]">
                  {obj.tag}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-200/60 dark:border-white/10 flex items-center justify-between text-xs text-stone-500">
            <span>Primary Focus</span>
            <span className="font-bold text-[#2563EB]">Compounding Growth</span>
          </div>
        </div>

        {/* COLUMN 2: Flowing Multi-Channel Energy Stream & Core Services */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 shadow-lg space-y-6 relative overflow-hidden">
          {/* Ambient SVG Flow Ribbon Background */}
          <div className="pointer-events-none absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-gradient-to-tr from-[#2563EB]/20 to-transparent blur-3xl" />

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3">
              <Workflow className="w-3.5 h-3.5" />
              <span>Multi-Channel Connectivity</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white leading-tight">
              Core Agency Services &amp; Execution
            </h3>
            <p className="mt-2 text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
              Synchronized campaigns across search engines, paid ads, and high-converting edge websites.
            </p>
          </div>

          {/* Sub-channel Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                title: "Foundational Web & SEO",
                slug: "technical-seo",
                desc: "Next.js speed, CWV, Schema graphs, crawl budgets",
                icon: Search,
              },
              {
                title: "Campaign Management",
                slug: "google-ads-ppc",
                desc: "Google Ads PPC, Meta bidding automation, targeting",
                icon: Target,
              },
              {
                title: "Local 3-Pack Presence",
                slug: "google-business-profile",
                desc: "GMB optimization, citations, map ranking dominance",
                icon: Share2,
              },
              {
                title: "AI Workflows & Audit",
                slug: "ai-prompt-engineering",
                desc: "LLM agents, automated telemetry, conversion audit",
                icon: Cpu,
              },
            ].map((chan, cIdx) => {
              const Icon = chan.icon;
              return (
                <div
                  key={cIdx}
                  onClick={() => onSelectService(chan.slug)}
                  className="p-4 rounded-2xl bg-stone-50/70 dark:bg-white/[0.03] border border-stone-200/60 dark:border-white/5 hover:border-orange-500/50 hover:bg-orange-500/[0.04] transition-all duration-300 cursor-pointer space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-xl bg-orange-500/10 text-[#2563EB] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#2563EB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h4 className="text-xs font-black text-stone-900 dark:text-white group-hover:text-[#2563EB]">
                    {chan.title}
                  </h4>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 line-clamp-2 leading-relaxed">
                    {chan.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="pt-3 border-t border-stone-200/60 dark:border-white/10 flex items-center justify-between text-xs text-stone-500">
            <span>Execution Model</span>
            <span className="font-bold text-[#2563EB]">Direct Code &amp; Bidding</span>
          </div>
        </div>

        {/* COLUMN 3: Data-Driven Analytics & Measurable ROI */}
        <div className="lg:col-span-3 flex flex-col justify-between rounded-3xl p-6 sm:p-7 bg-stone-50/70 dark:bg-white/[0.025] border border-stone-200/80 dark:border-white/10 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-3">
              <LineChart className="w-3.5 h-3.5" />
              <span>Output Stage</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white leading-tight">
              Data-Driven Analytics &amp; ROI
            </h3>
            <p className="mt-2 text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
              Continuous live reporting via GA4 and BigQuery to track cost per conversion and ROAS.
            </p>
          </div>

          {/* Metric Telemetry Cards */}
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-white dark:bg-[#111B2E] border border-stone-200/60 dark:border-white/5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-stone-500">
                  GA4 ATTRIBUTION
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-2xl font-black text-stone-900 dark:text-white">
                5.1x ROAS
              </p>
              <div className="h-1.5 w-full bg-stone-100 dark:bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-500 to-amber-500 w-[85%]" />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-[#111B2E] border border-stone-200/60 dark:border-white/5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-stone-500">
                  CONVERSION LIFT
                </span>
                <span className="text-xs font-mono font-bold text-emerald-500">
                  +42.4%
                </span>
              </div>
              <p className="text-2xl font-black text-stone-900 dark:text-white">
                $1.2M+
              </p>
              <div className="h-1.5 w-full bg-stone-100 dark:bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#2563EB] to-[#FB923C] w-[92%]" />
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-stone-200/60 dark:border-white/10 flex items-center justify-between text-xs text-stone-500">
            <span>Client Outcome</span>
            <span className="font-bold text-emerald-500">100% Verified Telemetry</span>
          </div>
        </div>
      </div>
    </div>
  );
}

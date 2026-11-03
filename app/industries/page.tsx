"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Sparkles,
  Zap,
  Layers,
  Heart,
  ShoppingCart,
  Store,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import Industries, { INDUSTRIES_DATA } from "@/components/Industries";

export default function IndustriesPage() {
  const [activeTab, setActiveTab] = useState<string>("healthcare");

  const currentSector =
    INDUSTRIES_DATA.find((item) => item.id === activeTab) || INDUSTRIES_DATA[0];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1220] text-stone-900 dark:text-white selection:bg-[#2563EB]/25 selection:text-[#2563EB] transition-colors duration-500">
      {/* Background ambient glows matching site design system */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-16 right-1/4 w-[520px] h-[520px] rounded-full bg-[#2563EB]/[0.08] dark:bg-[#2563EB]/[0.10] blur-[150px]" />
        <div className="absolute bottom-1/3 left-10 w-[480px] h-[480px] rounded-full bg-[#14B8A6]/[0.07] dark:bg-[#14B8A6]/[0.09] blur-[150px]" />
      </div>

      <main className="relative z-10 pt-28 sm:pt-36 pb-20">
        {/* =========================================================
            1. PAGE HEADER CONTAINER WITH BREADCRUMB
        ========================================================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-6">
            <Link
              href="/"
              className="hover:text-[#2563EB] dark:hover:text-[#14B8A6] transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
            <span>/</span>
            <span className="text-stone-800 dark:text-stone-300 font-semibold">
              Industries
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200/80 dark:border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#2563EB] dark:text-[#38BDF8] text-[11px] font-bold uppercase tracking-wider mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>Sector Specialisation &amp; Vertical Frameworks</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-stone-900 dark:text-white">
                Industries We Serve
              </h1>
              <p className="mt-2 text-sm sm:text-base text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
                Vertical-specific search engine optimization, verified compliance protocols, and hyper-local visibility engineered for industries where search intent and customer trust decide revenue.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-4 py-2.5 rounded-2xl bg-white/70 dark:bg-stone-900/60 border border-stone-200 dark:border-white/10 backdrop-blur-md text-right">
                <span className="block text-[10px] font-mono text-stone-400 uppercase tracking-widest">
                  Strategic Scope
                </span>
                <span className="text-sm font-extrabold text-[#2563EB] dark:text-[#38BDF8] flex items-center justify-end gap-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span>4 Core Verticals</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            2. THE USER'S REQUESTED SCREENSHOT SECTION (Exact Content)
        ========================================================= */}
        <Industries />

        {/* =========================================================
            3. DEEP DIVE SECTOR PLAYBOOK & TECHNICAL ROADMAP
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
          <div className="p-6 sm:p-10 rounded-3xl bg-white/80 dark:bg-[#111B2E]/90 border border-stone-200/80 dark:border-white/10 shadow-lg backdrop-blur-xl">
            {/* Section Tag */}
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB] dark:text-[#14B8A6] block mb-1">
                  Specialized Strategic Playbook
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900 dark:text-white">
                  How We Engineer Dominance by Vertical
                </h3>
              </div>

              {/* Selector Tabs */}
              <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-stone-100 dark:bg-white/5 border border-stone-200/80 dark:border-white/10">
                {INDUSTRIES_DATA.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setActiveTab(ind.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      activeTab === ind.id
                        ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/20"
                        : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
                    }`}
                  >
                    {ind.title.split("&")[0].trim()}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Sector Deep Dive Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Challenges & Strategy */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${currentSector.bgLight} ${currentSector.bgDark} border ${currentSector.borderLight}`}
                  >
                    {(() => {
                      const SectorIcon = currentSector.icon;
                      return <SectorIcon className="w-6 h-6" />;
                    })()}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-stone-900 dark:text-white">
                      {currentSector.title}
                    </h4>
                    <span className="text-xs font-mono text-stone-500">
                      Standard KPI: {currentSector.stats.label} ({currentSector.stats.value})
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 dark:bg-[#0B1220]/70 border border-stone-200/80 dark:border-white/5 space-y-2">
                  <span className="text-xs font-mono font-bold uppercase text-stone-400 block">
                    Core Industry Search Bottleneck
                  </span>
                  <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    {currentSector.challenges}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 space-y-2">
                  <span className="text-xs font-mono font-bold uppercase text-[#2563EB] dark:text-[#38BDF8] block">
                    Custom Technical Framework
                  </span>
                  <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    {currentSector.solution}
                  </p>
                </div>
              </div>

              {/* Right Column: Execution Deliverables */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-stone-50 dark:bg-[#0B1220]/70 border border-stone-200/80 dark:border-white/5 space-y-5">
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  Deliverables &amp; Schema Stack
                </h5>

                <div className="space-y-3">
                  {currentSector.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-stone-200/80 dark:border-white/10">
                  <span className="text-[11px] font-mono text-stone-400 block mb-2 uppercase tracking-wide">
                    Target JSON-LD Entities:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentSector.schemaTypes.map((schema, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white dark:bg-white/10 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-white/10"
                      >
                        @{schema}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/contact?industry=${encodeURIComponent(currentSector.title)}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-all shadow-md shadow-blue-500/20"
                  >
                    <span>Get {currentSector.title} Strategy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            4. IMPACT PROOF & TRUST METRICS
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 text-center">
              <span className="block text-3xl sm:text-4xl font-black text-[#2563EB] dark:text-[#38BDF8] mb-1">
                +240%
              </span>
              <span className="text-xs sm:text-sm font-semibold text-stone-700 dark:text-stone-300 block">
                Local Map Pack Impressions
              </span>
              <span className="text-[11px] text-stone-400 mt-1 block">
                Across clinics &amp; professional firms
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 text-center">
              <span className="block text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 mb-1">
                3.4x
              </span>
              <span className="text-xs sm:text-sm font-semibold text-stone-700 dark:text-stone-300 block">
                Booking Inquiries Generated
              </span>
              <span className="text-[11px] text-stone-400 mt-1 block">
                Average client year-on-year lift
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 text-center">
              <span className="block text-3xl sm:text-4xl font-black text-teal-600 dark:text-teal-400 mb-1">
                99.8%
              </span>
              <span className="text-xs sm:text-sm font-semibold text-stone-700 dark:text-stone-300 block">
                Compliance &amp; Accuracy Score
              </span>
              <span className="text-[11px] text-stone-400 mt-1 block">
                Zero penalty or YMYL de-indexing
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 text-center">
              <span className="block text-3xl sm:text-4xl font-black text-amber-500 mb-1">
                &lt; 1.2s
              </span>
              <span className="text-xs sm:text-sm font-semibold text-stone-700 dark:text-stone-300 block">
                Target Mobile LCP
              </span>
              <span className="text-[11px] text-stone-400 mt-1 block">
                For e-commerce and treatment pages
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================
            5. CALL TO ACTION CONTAINER
        ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
          <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white overflow-hidden shadow-2xl">
            {/* Ambient pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-4 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Custom Industry Solutions
              </span>

              <h3 className="text-2xl sm:text-4xl font-black tracking-tight mb-3">
                Operate in a different high-stakes sector?
              </h3>

              <p className="text-sm sm:text-base text-blue-100 leading-relaxed mb-8">
                Whether you run an international SaaS platform, specialized legal practice, or financial brokerage, we architect bespoke technical SEO roadmaps matching your sector’s search dynamics.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-stone-900 hover:bg-stone-100 text-xs sm:text-sm font-bold shadow-lg transition-all"
                >
                  <span>Request an Industry Audit</span>
                  <ArrowRight className="w-4 h-4 text-[#2563EB]" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold transition-all backdrop-blur-md"
                >
                  <span>View All Services</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, TrendingUp, BarChart3, Search, ShieldCheck } from "lucide-react";
import Gsc from "@/components/Gsc";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1220] text-stone-900 dark:text-white selection:bg-[#2563EB]/25 selection:text-[#2563EB] transition-colors duration-500">
      {/* Background ambient glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-16 right-1/4 w-[520px] h-[520px] rounded-full bg-[#3B82F6]/[0.08] dark:bg-[#3B82F6]/[0.10] blur-[150px]" />
        <div className="absolute bottom-1/3 left-10 w-[480px] h-[480px] rounded-full bg-[#2563EB]/[0.07] dark:bg-[#2563EB]/[0.09] blur-[150px]" />
      </div>

      <main className="relative z-10 pt-28 sm:pt-36 pb-16">
        {/* Page Header Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
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
            <span className="text-stone-800 dark:text-stone-300 font-semibold">Analytics</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200/80 dark:border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#2563EB] dark:text-[#60A5FA] text-[11px] font-bold uppercase tracking-wider mb-3">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Verified Client Analytics &amp; GSC Data</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-stone-900 dark:text-white">
                Search Performance &amp; Analytics
              </h1>
              <p className="mt-2 text-sm sm:text-base text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
                Direct evidence of organic traffic compounding, keyword dominance, and verified Search Console impressions across high-intent search queries.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-4 py-2.5 rounded-2xl bg-white/70 dark:bg-stone-900/60 border border-stone-200 dark:border-white/10 backdrop-blur-md text-right">
                <span className="block text-[10px] font-mono text-stone-400 uppercase tracking-widest">
                  Live Attribution
                </span>
                <span className="text-sm font-extrabold text-[#22C55E] flex items-center justify-end gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>100% Real Audits</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* The Full Interactive GSC & Analytics Suite */}
        <Gsc />
      </main>
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BarChart3, TrendingUp, FolderCheck, ShieldCheck, Smartphone } from "lucide-react";
import AnalyticsGallery from "@/components/AnalyticsGallery";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1220] text-stone-900 dark:text-white selection:bg-[#2563EB]/25 selection:text-[#2563EB] transition-colors duration-500">
      {/* Background ambient glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-16 right-1/4 w-[520px] h-[520px] rounded-full bg-[#3B82F6]/[0.08] dark:bg-[#3B82F6]/[0.10] blur-[150px]" />
        <div className="absolute bottom-1/3 left-10 w-[480px] h-[480px] rounded-full bg-[#2563EB]/[0.07] dark:bg-[#2563EB]/[0.09] blur-[150px]" />
      </div>

      <main className="relative z-10 pt-28 sm:pt-36 pb-20">
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
                <span>Verified Client Analytics, GSC &amp; Mobile Social Media Proofs</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-stone-900 dark:text-white">
                Client Analytics &amp; <span className="text-[#2563EB]">Social Media Proofs</span>
              </h1>
              <p className="mt-2 text-sm sm:text-base text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
                Direct evidence of organic search compounding, keyword dominance, GA4 conversions, mobile growth telemetry, and viral social media post creatives captured with verified performance telemetry.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-4 py-2.5 rounded-2xl bg-white/70 dark:bg-stone-900/60 border border-stone-200 dark:border-white/10 backdrop-blur-md text-right">
                <span className="block text-[10px] font-mono text-stone-400 uppercase tracking-widest">
                  Live Attribution
                </span>
                <span className="text-sm font-extrabold text-[#22C55E] flex items-center justify-end gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>69 Real Audits</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* The Client Folder Name-Wise Analytics Grid Showcase (No Slider, Full Gallery) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnalyticsGallery />
        </div>

        {/* BOTTOM CTA BANNER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
          <div className="rounded-3xl p-8 sm:p-12 bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 backdrop-blur-xl">
            <div>
              <span className="text-[11px] font-bold text-[#2563EB] dark:text-[#60A5FA] uppercase tracking-wider">
                Audited Performance
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-white mt-1">
                Want Similar Measurable Results For Your Business?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 max-w-xl">
                We combine deep algorithmic SEO with pristine conversion telemetry to turn search visibility into profitable revenue.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 shrink-0 w-full sm:w-auto">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#2563EB] text-white text-xs sm:text-[13.5px] font-bold border hover:border-blue-800 shadow-md shadow-[#2563EB] hover:shadow-[#2563EB] hover:-translate-y-0.5 transition-all duration-300 min-h-[42px] sm:min-h-[44px] touch-manipulation"
              >
                <span>Request an Analytics Audit</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="relative group/link inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/90 dark:bg-[#0f0f11] backdrop-blur-xl text-stone-800 dark:text-white text-xs sm:text-[13.5px] font-semibold shadow-sm hover:bg-orange-600/[0.10] transition-all duration-300 min-h-[42px] sm:min-h-[44px] touch-manipulation before:content-[''] before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-orange-500 before:via-amber-400 before:to-orange-600 before:opacity-0 before:transition-opacity before:duration-300 before:pointer-events-none hover:before:opacity-100 after:content-[''] after:absolute after:inset-[1px] after:rounded-full after:bg-white/90 dark:after:bg-[#0f0f11] after:opacity-0 after:transition-opacity after:duration-300 after:pointer-events-none hover:after:opacity-100"
              >
                <span className="relative z-10">Explore 25 Services</span>
                <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

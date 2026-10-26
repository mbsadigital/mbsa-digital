"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ArrowRight } from "lucide-react";

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  client: string;
  duration: string;
  image: string;
  heroMetric: string;
  heroMetricLabel: string;
  overview: string;
  challenge: string;
  solution: string[];
  results: {
    label: string;
    value: string;
    detail: string;
  }[];
  tools: string[];
}

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
}

export default function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  if (!study) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="
            relative
            w-full
            max-w-3xl
            max-h-[90vh]
            overflow-y-auto
            rounded-3xl
            bg-white
            dark:bg-[#120F0D]
            border
            border-stone-200
            dark:border-orange-500/30
            shadow-2xl
            dark:shadow-[0_25px_70px_rgba(0,0,0,0.9)]
            z-10
            p-6
            sm:p-8
            text-stone-900
            dark:text-white
          "
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="
              absolute
              top-6
              right-6
              w-9
              h-9
              rounded-full
              flex
              items-center
              justify-center
              bg-stone-100
              dark:bg-white/10
              hover:bg-orange-100
              dark:hover:bg-orange-600/30
              text-stone-700
              dark:text-white
              transition-colors
              cursor-pointer
              z-20
            "
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Info */}
          <div className="mb-6 pr-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-orange-50 dark:bg-[#EA580C]/20 border border-orange-200 dark:border-[#EA580C]/35 text-[#EA580C] dark:text-[#F97316] mb-3">
              {study.category} • {study.duration}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white">
              {study.title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-[#A8A29E] mt-1">
              Client: <span className="font-semibold text-stone-800 dark:text-white">{study.client}</span>
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-8 border border-stone-200 dark:border-white/10 shadow-md">
            <Image
              src={study.image}
              alt={study.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#F97316] drop-shadow-[0_0_15px_rgba(234,88,12,0.8)]">
                  {study.heroMetric}
                </div>
                <div className="text-xs font-semibold text-white/90">
                  {study.heroMetricLabel}
                </div>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {study.results.map((res, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-stone-50 dark:bg-white/[0.04] border border-stone-200 dark:border-white/10"
              >
                <div className="text-xl font-extrabold text-[#EA580C] dark:text-[#F97316] mb-1">
                  {res.value}
                </div>
                <div className="text-xs font-bold text-stone-900 dark:text-white mb-0.5">
                  {res.label}
                </div>
                <div className="text-[11px] text-stone-500 dark:text-[#A8A29E]">
                  {res.detail}
                </div>
              </div>
            ))}
          </div>

          {/* Overview & Challenge */}
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#EA580C] dark:text-[#F97316] mb-2">
                Project Overview
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-[#A8A29E] leading-relaxed">
                {study.overview}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#EA580C] dark:text-[#F97316] mb-2">
                The Core Challenge
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-[#A8A29E] leading-relaxed">
                {study.challenge}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#EA580C] dark:text-[#F97316] mb-2">
                Strategic Solution & Execution
              </h3>
              <div className="space-y-2">
                {study.solution.map((sol, index) => (
                  <div key={index} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                    <CheckCircle className="w-4 h-4 text-[#EA580C] dark:text-[#F97316] shrink-0 mt-0.5" />
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Tech Stack */}
          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
              Tools & Stack Applied
            </h3>
            <div className="flex flex-wrap gap-2">
              {study.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-stone-100 dark:bg-white/[0.06] border border-stone-200 dark:border-white/10 text-stone-800 dark:text-stone-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Footer */}
          <div className="pt-6 border-t border-stone-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-stone-500 dark:text-[#A8A29E]">
              Ready to achieve similar revenue results for your brand?
            </p>
            <a
              href="#contact"
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#C2410C] hover:to-[#9A3412] text-white text-xs sm:text-sm font-bold shadow-lg transition-all cursor-pointer"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  BarChart2,
  Search,
  Sparkles,
  Maximize2,
  X,
  Layers,
  Calendar,
  Building2,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { PROJECTS_DATA_FULL, ProjectDetail, SeoProofItem } from "@/lib/projectsData";

export default function ProjectDetailPage() {
  const params = useParams();
  const id = (params?.id as string) || "";

  // Selected SEO proof image for fullscreen zoom modal
  const [activeProofZoom, setActiveProofZoom] = useState<SeoProofItem | null>(null);

  // Active filter for proof types (All, GSC, GA4, GMB)
  const [proofFilter, setProofFilter] = useState<string>("all");

  const project = useMemo<ProjectDetail | undefined>(() => {
    return PROJECTS_DATA_FULL.find((p) => p.id === id) || PROJECTS_DATA_FULL[0];
  }, [id]);

  const otherProjects = useMemo(() => {
    return PROJECTS_DATA_FULL.filter((p) => p.id !== project?.id);
  }, [project]);

  const filteredProofs = useMemo(() => {
    if (!project) return [];
    if (proofFilter === "all") return project.seoProofImages;
    return project.seoProofImages.filter((proof) => {
      if (proofFilter === "gsc") return proof.category === "Google Search Console";
      if (proofFilter === "ga4") return proof.category === "Google Analytics (GA4)";
      if (proofFilter === "gmb") return proof.category === "Local SEO / GMB";
      return true;
    });
  }, [project, proofFilter]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1220] text-stone-900 dark:text-white flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold mb-3">Project Not Found</h1>
          <p className="text-sm text-stone-600 dark:text-stone-400 mb-6">
            The requested project study could not be located.
          </p>
          <Link
            href="/#projects"
            className="px-6 py-2.5 rounded-full bg-[#2563EB] text-white text-xs font-bold"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1220] text-stone-900 dark:text-white selection:bg-[#2563EB]/25 selection:text-[#2563EB] transition-colors duration-500">
      {/* Background ambient lighting */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] rounded-full bg-[#2563EB]/[0.07] dark:bg-[#2563EB]/[0.10] blur-[150px]" />
        <div className="absolute bottom-1/3 left-10 w-[450px] h-[450px] rounded-full bg-[#1D4ED8]/[0.06] dark:bg-[#1D4ED8]/[0.08] blur-[150px]" />
      </div>

      {/* STICKY HEADER */}
      <header className="sticky top-0 z-40 w-full border-b border-stone-200/80 dark:border-stone-800/80 bg-white/85 dark:bg-[#0B1220]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-200 dark:border-white/10 bg-stone-100/70 dark:bg-white/[0.04] hover:border-orange-500/50 hover:bg-orange-500/10 text-stone-700 dark:text-stone-300 hover:text-[#2563EB] text-xs font-bold transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Projects</span>
            </Link>

            <div className="h-4 w-[1px] bg-stone-300 dark:bg-stone-800 hidden md:block" />

            {/* Breadcrumb */}
            <div className="hidden md:flex items-center gap-2 text-xs text-stone-500 font-mono">
              <Link href="/" className="hover:text-stone-900 dark:hover:text-stone-100">Home</Link>
              <ChevronRight className="w-3 h-3 text-stone-400" />
              <Link href="/#projects" className="hover:text-stone-900 dark:hover:text-stone-100">Projects</Link>
              <ChevronRight className="w-3 h-3 text-stone-400" />
              <span className="text-[#2563EB] font-semibold">{project.title}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {project.siteUrl && (
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-stone-300 dark:border-white/15 bg-white dark:bg-white/[0.04] text-xs font-bold text-stone-800 dark:text-white hover:border-orange-500 hover:text-[#2563EB] dark:hover:text-[#14B8A6] transition shadow-sm"
              >
                <span>Visit Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#14B8A6] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white text-xs font-bold shadow-md shadow-[#2563EB]/25 hover:shadow-[#2563EB]/45 border border-blue-400/30 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <span>Work With Me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-10 sm:pt-16 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top Metadata Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-orange-50 dark:bg-[#2563EB]/20 border border-orange-200 dark:border-[#2563EB]/35 text-[#2563EB] dark:text-[#14B8A6]">
              <Sparkles className="w-3 h-3" />
              <span>{project.category}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-stone-600 dark:text-stone-300 bg-stone-100 dark:bg-white/[0.05] border border-stone-200 dark:border-white/10">
              <Building2 className="w-3 h-3 text-[#2563EB]" />
              <span>Client: {project.client}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-stone-600 dark:text-stone-300 bg-stone-100 dark:bg-white/[0.05] border border-stone-200 dark:border-white/10">
              <Calendar className="w-3 h-3 text-[#2563EB]" />
              <span>Duration: {project.duration}</span>
            </span>
          </div>

          {/* Large Headline */}
          <div className="max-w-4xl mb-8">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-stone-900 dark:text-white mb-5">
              {project.title}
            </h1>
            <p className="text-base sm:text-xl text-stone-600 dark:text-[#A8A29E] leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Hero Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            {project.siteUrl && (
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-bold shadow-lg shadow-orange-600/30 transition transform hover:-translate-y-0.5"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <a
              href="#seo-proof"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-stone-300 dark:border-white/20 bg-white/80 dark:bg-white/[0.04] hover:border-orange-500 text-stone-800 dark:text-white text-xs sm:text-sm font-bold shadow-sm transition"
            >
              <BarChart2 className="w-4 h-4 text-[#2563EB]" />
              <span>View SEO & Analytics Proofs ({project.seoProofImages.length})</span>
            </a>
          </div>

          {/* Hero Image Showcase */}
          <div className="relative w-full h-72 sm:h-96 md:h-[520px] rounded-3xl overflow-hidden border border-stone-200 dark:border-white/10 shadow-2xl bg-stone-900 mb-14 group">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

          </div>


        </div>
      </section>

      {/* STRATEGIC BREAKDOWN (Challenge & Solution) */}
      <section className="relative z-10 py-1 sm:py-1 border-t border-stone-200/80 dark:border-white/5 bg-stone-50/50 dark:bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* The Challenge */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#111B2E] border border-red-500/15 dark:border-white/10 shadow-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/40 mb-4">
                <span>THE OBSTACLE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white mb-4">
                The Core Challenge
              </h2>
              <p className="text-sm sm:text-base text-stone-600 dark:text-[#A8A29E] leading-relaxed mb-6">
                {project.challenge}
              </p>

              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-white/[0.03] border border-stone-200 dark:border-white/5 text-xs text-stone-600 dark:text-stone-400 space-y-2">
                <div className="font-bold text-stone-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                  <span>Primary Client Goals:</span>
                </div>
                <p>• Maximize organic patient / shopper acquisition without escalating ad burn rate.</p>
                <p>• Fix technical barriers, eliminate crawl errors, and optimize mobile Core Web Vitals.</p>
                <p>• Capture top 3 local and organic search rankings for revenue-driving search intent.</p>
              </div>
            </div>

            {/* Strategic Solution */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#111B2E] border border-orange-500/20 dark:border-orange-500/30 shadow-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-orange-50 dark:bg-[#2563EB]/20 text-[#2563EB] dark:text-[#14B8A6] border border-orange-200 dark:border-[#2563EB]/35 mb-4">
                <span>TACTICAL EXECUTION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white mb-4">
                Strategy & Implementation
              </h2>

              <div className="space-y-4">
                {project.solution.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="p-1 rounded-full bg-orange-50 dark:bg-[#2563EB]/20 text-[#2563EB] dark:text-[#14B8A6] shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              {/* Deliverables tags */}
              <div className="mt-8 pt-6 border-t border-stone-100 dark:border-white/10">
                <div className="text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-3 font-mono">
                  Key Deliverables
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((d, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-xl text-xs font-semibold bg-stone-100 dark:bg-white/[0.05] border border-stone-200 dark:border-white/10 text-stone-800 dark:text-stone-200"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEO & ANALYTICS PROOF SECTION (USER HIGHLIGHT REQUIREMENT) */}
      <section id="seo-proof" className="relative z-10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Eyebrow & Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] dark:text-[#14B8A6] mb-3">
                <span className="w-6 h-px bg-[#2563EB] dark:bg-[#14B8A6]" />
                <span>UNFILTERED DATA & VERIFIED RESULTS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 dark:text-white tracking-tight">
                Live SEO & Analytics Proofs
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 dark:text-[#A8A29E] max-w-2xl leading-relaxed">
                Direct export screenshots from Google Search Console, Google Analytics 4 (GA4), and Google Business Profile verifying impressions, clicks, rankings, and conversions for {project.title}.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-stone-100 dark:bg-white/[0.05] border border-stone-200 dark:border-white/10 self-start md:self-auto">
              <button
                type="button"
                onClick={() => setProofFilter("all")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${proofFilter === "all"
                  ? "bg-[#2563EB] text-white shadow-sm"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
                  }`}
              >
                All Proofs ({project.seoProofImages.length})
              </button>
              <button
                type="button"
                onClick={() => setProofFilter("gsc")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${proofFilter === "gsc"
                  ? "bg-[#2563EB] text-white shadow-sm"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
                  }`}
              >
                Search Console
              </button>
              <button
                type="button"
                onClick={() => setProofFilter("ga4")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${proofFilter === "ga4"
                  ? "bg-[#2563EB] text-white shadow-sm"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
                  }`}
              >
                GA4 Analytics
              </button>
              {project.seoProofImages.some((p) => p.category === "Local SEO / GMB") && (
                <button
                  type="button"
                  onClick={() => setProofFilter("gmb")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${proofFilter === "gmb"
                    ? "bg-[#2563EB] text-white shadow-sm"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
                    }`}
                >
                  Local / GMB
                </button>
              )}
            </div>
          </div>

          {/* Proof Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProofs.map((proof, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#111B2E] border border-orange-500/15 dark:border-white/10 hover:border-orange-500/60 shadow-lg dark:shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Clickable Image Box with Zoom Overlay */}
                  <div
                    onClick={() => setActiveProofZoom(proof)}
                    className="relative w-full h-56 sm:h-64 overflow-hidden bg-stone-900 cursor-pointer"
                  >
                    <Image
                      src={proof.image}
                      alt={proof.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-bold flex items-center gap-2 shadow-xl">
                        <Maximize2 className="w-3.5 h-3.5 text-[#2563EB]" />
                        <span>Click to Enlarge Proof</span>
                      </div>
                    </div>

                    {/* Category Tag Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-orange-400 border border-white/15">
                        {proof.category}
                      </span>
                    </div>
                  </div>

                  {/* Caption & Title */}
                  <div className="p-5">
                    <h3 className="text-sm font-bold text-stone-900 dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-[#14B8A6] transition-colors mb-2">
                      {proof.title}
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-[#A8A29E] leading-relaxed">
                      {proof.caption}
                    </p>
                  </div>
                </div>

                {/* Card footer action */}
                <div className="p-5 pt-0">
                  <button
                    type="button"
                    onClick={() => setActiveProofZoom(proof)}
                    className="w-full pt-3 border-t border-stone-100 dark:border-white/5 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#2563EB] dark:text-[#14B8A6] hover:text-[#1D4ED8] transition cursor-pointer"
                  >
                    <span>Inspect Raw Metrics</span>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProofs.length === 0 && (
            <div className="text-center py-12 text-sm text-stone-500">
              No proof images found matching this category filter.
            </div>
          )}

        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX / PROOF ZOOM MODAL */}
      <AnimatePresence>
        {activeProofZoom && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProofZoom(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#111B2E] border border-orange-500/40 shadow-2xl z-10 p-5 sm:p-7 text-white flex flex-col"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveProofZoom(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#2563EB] text-white transition cursor-pointer z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title & Info */}
              <div className="mb-4 pr-12">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-orange-600/25 border border-orange-500/40 text-orange-400">
                  {activeProofZoom.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black mt-2 text-white">
                  {activeProofZoom.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-1">
                  {activeProofZoom.caption}
                </p>
              </div>

              {/* High-Resolution Screenshot Viewer */}
              <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-2xl overflow-hidden bg-black/80 border border-white/15">
                <Image
                  src={activeProofZoom.image}
                  alt={activeProofZoom.title}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>

              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-3">
                <span>Verified client data snapshot • Confidential metrics protected</span>
                <button
                  type="button"
                  onClick={() => setActiveProofZoom(null)}
                  className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold transition cursor-pointer"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* TECH STACK & TOOLS */}
      <section className="relative z-10 py-12 border-t border-stone-200/80 dark:border-white/5 bg-stone-50/50 dark:bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB] dark:text-[#14B8A6] mb-3 font-mono">
            STACK & PLATFORMS DEPLOYED
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white mb-8">
            Technologies Behind The Results
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-2xl bg-white dark:bg-[#111B2E] border border-orange-500/20 dark:border-white/10 text-stone-800 dark:text-stone-200 text-xs sm:text-sm font-bold shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE MORE CASE STUDIES */}
      <section className="relative z-10 py-16 sm:py-24 border-t border-stone-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#2563EB] font-mono">
                MORE SUCCESS STORIES
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white mt-1">
                Explore Other Case Studies
              </h2>
            </div>
            <Link
              href="/#projects"
              className="text-xs font-bold text-[#2563EB] hover:underline flex items-center gap-1"
            >
              <span>View All 4 Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.map((other) => (
              <Link
                key={other.id}
                href={`/projects/${other.id}`}
                className="group rounded-3xl overflow-hidden border border-orange-500/15 dark:border-white/10 bg-white dark:bg-[#111B2E] flex flex-col justify-between hover:border-orange-500/60 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-stone-900">
                    <Image
                      src={other.image}
                      alt={other.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-white text-[10px] font-mono">
                        {other.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="text-xl font-black text-[#2563EB] dark:text-[#14B8A6] mb-1">
                      {other.heroMetric}
                    </div>
                    <h3 className="font-bold text-base text-stone-900 dark:text-white group-hover:text-[#2563EB] transition">
                      {other.title}
                    </h3>
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-2 line-clamp-2">
                      {other.overview}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] group-hover:translate-x-1 transition-transform">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA FOOTER */}
      <footer className="relative z-10 py-16 bg-[#F8FAFC] dark:bg-[#0B1220] border-t border-stone-200/80 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-white mb-4">
            Ready to Generate Similar Results?
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-400 mb-8 max-w-xl mx-auto">
            Let&apos;s build an SEO strategy, high-intent Google Ads structure, or data-driven digital ecosystem tailored to your brand.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#14B8A6] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white text-sm font-bold shadow-lg shadow-[#2563EB]/25 hover:shadow-[#2563EB]/45 border border-blue-400/30 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              Discuss Your Project
            </Link>
            <Link
              href="/#projects"
              className="px-6 py-3.5 rounded-full border border-stone-300 dark:border-white/15 bg-white dark:bg-white/[0.04] text-stone-800 dark:text-white text-sm font-bold hover:border-orange-500 transition"
            >
              Browse All Projects
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

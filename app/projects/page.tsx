"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Search,
  ChevronRight,
  X,
  Sparkles,
  Clock,
  Globe,
} from "lucide-react";
import { PROJECTS_DATA_FULL } from "@/lib/projectsData";

export default function AllProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Categories list with counts
  const categories = useMemo(() => {
    const map = new Map<string, number>();
    PROJECTS_DATA_FULL.forEach((p) => {
      map.set(p.category, (map.get(p.category) || 0) + 1);
    });
    return [
      { id: "ALL", label: "All Projects", count: PROJECTS_DATA_FULL.length },
      ...Array.from(map.entries()).map(([cat, count]) => ({
        id: cat,
        label: cat,
        count,
      })),
    ];
  }, []);

  // Filtered projects based on category and search query
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA_FULL.filter((project) => {
      const matchesCategory =
        selectedCategory === "ALL" || project.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        q === "" ||
        project.title.toLowerCase().includes(q) ||
        project.client.toLowerCase().includes(q) ||
        project.overview.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.tools.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1220] text-stone-900 dark:text-white selection:bg-orange-500/20 selection:text-stone-900 dark:selection:text-white transition-colors duration-500">
      {/* Background ambient soft glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 right-1/4 w-[550px] h-[550px] rounded-full bg-blue-500/[0.04] dark:bg-blue-500/[0.06] blur-[150px]" />
        <div className="absolute bottom-1/3 left-10 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.03] dark:bg-emerald-500/[0.05] blur-[150px]" />
      </div>

      {/* MAIN CONTAINER */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-28 sm:pt-36 pb-20 space-y-10 sm:space-y-12">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between gap-4 border-b border-stone-200/70 dark:border-white/10 pb-5">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-200/80 dark:border-white/10 bg-white/90 dark:bg-white/[0.04] backdrop-blur-xl text-stone-700 dark:text-stone-300 text-xs sm:text-sm font-semibold shadow-sm hover:border-stone-400 hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-stone-900 transition-all duration-200 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
            <Link href="/" className="hover:text-stone-950 dark:hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-stone-900 dark:text-stone-200 font-semibold">Projects</span>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#2563EB] dark:text-[#60A5FA] font-bold">Case Studies</span>
          </div>
        </div>

        {/* SECTION HEADER */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 dark:bg-white/10 text-stone-900 dark:text-stone-200 text-xs font-mono font-bold uppercase tracking-wider border border-stone-200/80 dark:border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>AUDITED RESULTS &amp; CASE STUDIES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-stone-900 dark:text-white">
            Results We Can Show You<br />
            <span className="relative inline-block text-[#2563EB] dark:text-[#60A5FA]">
              With The Data Behind Them.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
            We publish client results with verified timeframes, Google Search Console telemetry, and Google Analytics 4 attribution. Explore our selected portfolio below.
          </p>
        </div>

        {/* CONTROLS BAR: SEARCH & CATEGORY PILLS */}
        <div className="space-y-4">
          {/* Search Input */}
          <div className="relative max-w-xl w-full">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-stone-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by name, client, category, or tool..."
                className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] shadow-sm text-sm transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 p-1 rounded-full text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills & Showing Count */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${isActive
                      ? "bg-stone-900 dark:bg-white text-white dark:text-stone-900 shadow-md scale-[1.02]"
                      : "bg-white dark:bg-white/5 border border-stone-200/80 dark:border-white/10 text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white hover:border-stone-400 hover:bg-stone-100 dark:hover:bg-white/10"
                      }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${isActive
                        ? "bg-white/20 dark:bg-stone-900/20 text-white dark:text-stone-900"
                        : "bg-stone-100 dark:bg-white/10 text-stone-500 dark:text-stone-400"
                        }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            <span className="text-xs font-mono font-bold text-stone-500 dark:text-stone-400 self-end sm:self-auto shrink-0 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Showing {filteredProjects.length} of {PROJECTS_DATA_FULL.length} Projects
            </span>
          </div>
        </div>

        {/* PROJECTS GRID (PROPER IMAGE PRESENTATION & REMOVED BLUE HOVER) */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center rounded-[32px] bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 shadow-sm space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-stone-100 dark:bg-white/10 flex items-center justify-center mx-auto text-stone-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 dark:text-white">
              No projects found matching &ldquo;{searchQuery}&rdquo;
            </h3>
            <p className="text-sm text-stone-500 max-w-md mx-auto">
              Try adjusting your search keyword or reset filters to browse all projects.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("ALL");
              }}
              className="px-5 py-2.5 rounded-full bg-stone-900 dark:bg-white text-white dark:text-stone-900 text-xs font-bold transition-all shadow-md cursor-pointer hover:opacity-90"
            >
              Clear Search &amp; Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {filteredProjects.map((project, idx) => {
              const displayUrl = project.siteUrl
                ? project.siteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
                : `${project.id}.com`;

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="
                    group
                    relative
                    rounded-[32px]
                    overflow-hidden
                    border
                    border-stone-200/80
                    dark:border-white/10
                    bg-white
                    dark:bg-[#111B2E]
                    hover:border-stone-400
                    dark:hover:border-white/25
                    shadow-lg
                    hover:shadow-2xl
                    transition-all
                    duration-300
                    flex
                    flex-col
                    justify-between
                  "
                >
                  <div>
                    {/* 3D MOCKUP SHOWCASE (100% UNPROPORTIONED FULL IMAGE, NO CUTS) */}
                    <div className="p-3.5 sm:p-5 pb-0">
                      <Link
                        href={`/projects/${project.id}`}
                        className="block relative w-full aspect-square bg-gradient-to-b from-stone-100/90 via-stone-50 to-stone-100/70 dark:from-white/[0.05] dark:via-white/[0.02] dark:to-white/[0.04] rounded-2xl sm:rounded-[24px] overflow-hidden border border-stone-200/80 dark:border-white/10 p-2 sm:p-3 group/img cursor-pointer"
                      >
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={project.image}
                            alt={`${project.title} 3D Mockup`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 600px"
                            className="object-contain transition-transform duration-700 ease-out group-hover/img:scale-[1.03]"
                            priority={idx < 2}
                          />
                        </div>

                        {/* Top-Left Live Domain Pill */}
                        <div className="absolute top-3.5 left-3.5 z-10">
                          <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-white/95 dark:bg-black/80 backdrop-blur-md text-stone-700 dark:text-stone-300 border border-stone-200/80 dark:border-white/15 shadow-xs flex items-center gap-1.5">
                            <Globe className="w-3 h-3 text-stone-400" />
                            <span>{displayUrl}</span>
                          </span>
                        </div>

                        {/* Bottom-Right Verified Metric Pill */}

                      </Link>
                    </div>

                    {/* CARD CONTENT */}
                    <div className="p-5 sm:p-7 space-y-4">
                      {/* Meta Row: Category, Client, Duration */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-stone-100 dark:bg-white/10 text-stone-700 dark:text-stone-300 border border-stone-200/80 dark:border-white/10">
                          {project.category}
                        </span>

                        <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
                          <span>{project.client}</span>
                          {project.duration && (
                            <>
                              <span>•</span>
                              <span className="inline-flex items-center gap-1 text-stone-400">
                                <Clock className="w-3 h-3" />
                                {project.duration}
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Title (NO BLUE HOVER! Crisp transition) */}
                      <Link href={`/projects/${project.id}`} className="block group/title">
                        <h2 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white transition-colors duration-200 leading-snug">
                          {project.title}
                        </h2>
                      </Link>

                      {/* Overview paragraph */}
                      <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-2">
                        {project.overview}
                      </p>



                      {/* Tools Pills */}
                      {project.tools && project.tools.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.tools.slice(0, 4).map((tool, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-stone-100/80 dark:bg-white/5 text-stone-600 dark:text-stone-400 border border-stone-200/60 dark:border-white/5"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* BOTTOM ACTION BUTTONS */}
                  <div className="p-5 sm:p-7 pt-0 mt-auto">
                    <div className="pt-4 border-t border-stone-200/70 dark:border-white/10 flex items-center justify-between gap-4">
                      {/* Visit Site Link */}
                      {project.siteUrl ? (
                        <a
                          href={project.siteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white transition-colors py-1 cursor-pointer"
                          title={`Visit live website for ${project.title}`}
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="text-[11px] font-mono text-stone-400">Audited Case Study</span>
                      )}

                      {/* View Case Study Button (NO BLUE HOVER!) */}
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 dark:bg-white dark:hover:bg-stone-100 text-white dark:text-stone-900 text-xs font-bold transition-all shadow-sm active:scale-95 group/btn"
                      >
                        <span>View Full Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </main>

      {/* BOTTOM CTA BANNER */}
      <section className="relative z-10 py-16 bg-white dark:bg-[#0E1726] border-t border-stone-200/80 dark:border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 dark:bg-white/10 text-stone-700 dark:text-stone-300 text-xs font-mono font-bold uppercase tracking-wider">
            <span>READY TO SCALE?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 dark:text-white tracking-tight">
            Need High-Impact Growth For Your Brand?
          </h2>

          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 max-w-xl mx-auto leading-relaxed">
            From technical SEO audits to custom conversion architecture, let&apos;s build measurable results together.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#2563EB] text-white text-xs sm:text-[13.5px] font-bold border hover:border-blue-800 shadow-md shadow-[#2563EB] hover:shadow-[#2563EB] hover:-translate-y-0.5 transition-all duration-300 min-h-[42px] sm:min-h-[44px] touch-manipulation"
            >
              <span>Get Free Consultation</span>
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
    </div>
  );
}

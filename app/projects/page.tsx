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
  ChevronRight
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { PROJECTS_DATA_FULL } from "@/lib/projectsData";

export default function AllProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Categories list
  const categories = useMemo(() => {
    const set = new Set<string>();
    PROJECTS_DATA_FULL.forEach((p) => set.add(p.category));
    return ["ALL", ...Array.from(set)];
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA_FULL.filter((project) => {
      const matchesCategory =
        selectedCategory === "ALL" || project.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#080706] text-stone-900 dark:text-white selection:bg-[#EA580C]/25 selection:text-[#EA580C] transition-colors duration-500">
      {/* Background ambient glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] rounded-full bg-[#EA580C]/[0.07] dark:bg-[#EA580C]/[0.10] blur-[150px]" />
        <div className="absolute bottom-1/3 left-10 w-[450px] h-[450px] rounded-full bg-[#C2410C]/[0.06] dark:bg-[#C2410C]/[0.08] blur-[150px]" />
      </div>

      {/* MAIN CONTAINER */}
      <main className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 sm:pt-36 pb-16">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-6">
          <Link
            href="/"
            className="hover:text-[#EA580C] dark:hover:text-[#F97316] transition-colors flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <span className="text-[#EA580C] font-semibold">Projects Portfolio</span>
        </div>

        {/* SECTION HEADER */}
        <div className="mb-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#EA580C] dark:text-[#F97316] mb-4">
            <span className="w-6 h-px bg-[#EA580C] dark:bg-[#F97316]" />
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-stone-900 dark:text-white mb-4">
                All Projects &amp;<br />
                <span className="bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FB923C] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(234,88,12,0.35)]">
                  Growth Case Studies.
                </span>
              </h1>

            </div>


          </div>
        </div>



        {/* 4 CARDS GRID (Exact Card Size and Layout as Projects.tsx) */}
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="
                group
                relative
                rounded-3xl
                overflow-hidden
                border
                border-orange-500/15
                dark:border-white/10
                bg-white/90
                dark:bg-[#120F0D]/90
                hover:border-orange-500/60
                shadow-md
                dark:shadow-[0_12px_35px_rgba(0,0,0,0.5)]
                backdrop-blur-xl
                transition-all
                duration-300
                flex
                flex-col
                justify-between
              "
            >
              <div>
                {/* Image Mockup Preview */}
                <Link
                  href={`/projects/${project.id}`}
                  className="block relative w-full h-44 overflow-hidden bg-stone-900 cursor-pointer"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Floating Metric Pill on hover */}
                  <div className="absolute bottom-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="px-2 py-1 rounded-md text-[9px] font-mono font-bold bg-black/70 backdrop-blur-md text-[#F97316] border border-orange-500/30">
                      {project.heroMetric}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-5">
                  {/* Badges Strip */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tools.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-wider bg-orange-50 dark:bg-[#EA580C]/15 text-[#EA580C] dark:text-[#F97316] border border-orange-200/60 dark:border-[#EA580C]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Category */}
                  <Link href={`/projects/${project.id}`}>
                    <h3 className="text-base font-bold text-stone-900 dark:text-white group-hover:text-[#EA580C] dark:group-hover:text-[#F97316] transition-colors">
                      {project.title}
                    </h3>
                  </Link>
                  <div className="text-[10px] font-bold text-[#EA580C] dark:text-[#F97316] uppercase tracking-wider mb-2">
                    {project.category}
                  </div>

                  {/* Overview */}
                  <p className="text-xs text-stone-600 dark:text-[#A8A29E] leading-relaxed line-clamp-2">
                    {project.overview}
                  </p>
                </div>
              </div>

              {/* Bottom Strip: Left = Visit Site, Right = View Case Study */}
              <div className="p-5 pt-0">
                <div className="w-full pt-3 border-t border-stone-100 dark:border-white/5 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                  {/* Bottom Left: Visit Site */}
                  {project.siteUrl ? (
                    <a
                      href={project.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-stone-600 dark:text-stone-300 hover:text-[#EA580C] dark:hover:text-[#F97316] transition-colors py-1 cursor-pointer"
                      title={`Visit live website for ${project.title}`}
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span />
                  )}

                  {/* Bottom Right: View Case Study */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1 text-[#EA580C] dark:text-[#F97316] hover:text-[#C2410C] dark:hover:text-[#FB923C] transition-colors py-1 group/btn"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white dark:bg-[#120F0D] rounded-3xl border border-stone-200 dark:border-white/10 p-8">
            <p className="text-base font-bold text-stone-900 dark:text-white mb-2">
              No projects found matching &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="text-xs text-stone-500 mb-6">
              Try adjusting your category filter or search keywords.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("ALL");
              }}
              className="px-5 py-2 rounded-full bg-[#EA580C] text-white text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </main>

      {/* CTA SECTION */}
      <section className="relative z-10 py-16 bg-[#FAF8F5] dark:bg-[#080706] border-t border-stone-200/80 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-white mb-4">
            Need High-Impact Growth For Your Brand?
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-400 mb-8 max-w-xl mx-auto">
            From technical SEO audits to custom conversion architecture, let&apos;s build measurable results together.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#C2410C] hover:from-[#C2410C] hover:to-[#9A3412] text-white text-sm font-bold shadow-lg shadow-orange-600/30 transition"
            >
              Get In Touch
            </Link>
            <Link
              href="/"
              className="px-6 py-3.5 rounded-full border border-stone-300 dark:border-white/15 bg-white dark:bg-white/[0.04] text-stone-800 dark:text-white text-sm font-bold hover:border-orange-500 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

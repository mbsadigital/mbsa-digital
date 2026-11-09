"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  BarChart3,
  TrendingUp,
  MapPin,
  Folder,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  CheckCircle2,
  ExternalLink,
  Layers,
  Sparkles,
  Smartphone,
  Eye,
} from "lucide-react";
import {
  ALL_ANALYTICS_PROOFS,
  CLIENT_FOLDERS,
  AnalyticsProof,
  ClientFolderMeta,
  CategoryId,
  ClientFolderName,
} from "@/lib/analyticsData";

type CategoryFilter = CategoryId;

const CATEGORY_TABS: { id: CategoryFilter; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "all", label: "All Proofs", icon: Layers },
  { id: "social", label: "Social Media Posts", icon: Sparkles },
  { id: "gsc", label: "Search Console (GSC)", icon: Search },
  { id: "ga4", label: "Google Analytics (GA4)", icon: BarChart3 },
  { id: "keywords", label: "Keyword SERP", icon: TrendingUp },
  { id: "gmb", label: "Google Business (GMB)", icon: MapPin },
];

export default function AnalyticsGallery() {
  const [selectedFolder, setSelectedFolder] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Filter proofs by folder, category, and search query
  const filteredProofs = useMemo(() => {
    return ALL_ANALYTICS_PROOFS.filter((proof) => {
      // 1. Folder filter
      if (selectedFolder !== "all" && proof.folderName !== selectedFolder) {
        return false;
      }

      // 2. Category filter
      if (selectedCategory !== "all" && proof.categoryId !== selectedCategory) {
        return false;
      }

      // 3. Search query filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesClient = proof.clientName.toLowerCase().includes(query);
        const matchesTitle = proof.title.toLowerCase().includes(query);
        const matchesFile = proof.fileName.toLowerCase().includes(query);
        const matchesFolder = proof.folderName.toLowerCase().includes(query);
        const matchesTags = proof.tags.some((t) => t.toLowerCase().includes(query));
        const matchesMetric = proof.metricValue.toLowerCase().includes(query);
        if (!matchesClient && !matchesTitle && !matchesFile && !matchesFolder && !matchesTags && !matchesMetric) {
          return false;
        }
      }

      return true;
    });
  }, [selectedFolder, selectedCategory, searchQuery]);

  // Group proofs by client folder for sectional display
  const proofsByFolder = useMemo(() => {
    const groups: { folder: ClientFolderMeta; proofs: AnalyticsProof[] }[] = [];

    CLIENT_FOLDERS.forEach((folder) => {
      if (selectedFolder !== "all" && folder.folderName !== selectedFolder) {
        return;
      }

      const proofsInFolder = filteredProofs.filter((p) => p.folderName === folder.folderName);
      if (proofsInFolder.length > 0) {
        groups.push({ folder, proofs: proofsInFolder });
      }
    });

    return groups;
  }, [filteredProofs, selectedFolder]);

  // Total proofs count
  const totalProofsCount = ALL_ANALYTICS_PROOFS.length;
  const totalSocialCount = ALL_ANALYTICS_PROOFS.filter((p) => p.isSocialPost || p.isMobile || p.categoryId === "social").length;

  // Active item in lightbox
  const activeLightboxProof =
    activeLightboxIndex !== null && filteredProofs[activeLightboxIndex]
      ? filteredProofs[activeLightboxIndex]
      : null;

  const handleNextLightbox = useCallback(() => {
    if (activeLightboxIndex === null || filteredProofs.length <= 1) return;
    setActiveLightboxIndex((prev) => ((prev ?? 0) + 1) % filteredProofs.length);
  }, [activeLightboxIndex, filteredProofs.length]);

  const handlePrevLightbox = useCallback(() => {
    if (activeLightboxIndex === null || filteredProofs.length <= 1) return;
    setActiveLightboxIndex((prev) =>
      ((prev ?? 0) - 1 + filteredProofs.length) % filteredProofs.length
    );
  }, [activeLightboxIndex, filteredProofs.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "ArrowLeft") handlePrevLightbox();
      if (e.key === "ArrowRight") handleNextLightbox();
      if (e.key === "Escape") setActiveLightboxIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, handleNextLightbox, handlePrevLightbox]);

  return (
    <div className="w-full">


      {/* ====================================================
          2. FILTER & CLIENT FOLDER CONTROLS BAR
      ==================================================== */}
      <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-[#111B2E]/90 border border-stone-200/90 dark:border-white/10 shadow-sm backdrop-blur-md mb-8">
        {/* Row 1: Client Folder Switcher Tabs */}
        <div className="mb-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {/* "All Folders" Button */}
            <button
              type="button"
              onClick={() => setSelectedFolder("all")}
              className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${selectedFolder === "all"
                  ? "bg-[#2563EB] text-white border-[#2563EB] shadow-md shadow-blue-500/25"
                  : "bg-stone-100 dark:bg-white/5 text-stone-700 dark:text-stone-200 border-stone-200 dark:border-white/10 hover:border-blue-400"
                }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All Client Folders</span>
              <span
                className={`ml-1 px-1.5 py-0.5 rounded-full text-[10px] ${selectedFolder === "all"
                    ? "bg-white/20 text-white"
                    : "bg-stone-200 dark:bg-white/10 text-stone-600 dark:text-stone-300"
                  }`}
              >
                {totalProofsCount}
              </span>
            </button>

            {/* Individual Client Folders */}
            {CLIENT_FOLDERS.map((folder) => {
              const isSelected = selectedFolder === folder.folderName;
              const isSocial =
                folder.folderName === "Social media" ||
                folder.folderName === "Social Media Post" ||
                folder.isSocialPost;
              return (
                <button
                  key={folder.id}
                  type="button"
                  onClick={() => setSelectedFolder(folder.folderName)}
                  className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${isSelected
                      ? isSocial
                        ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white border-pink-500 shadow-md shadow-pink-500/25"
                        : "bg-[#2563EB] text-white border-[#2563EB] shadow-md shadow-blue-500/25"
                      : "bg-stone-100 dark:bg-white/5 text-stone-700 dark:text-stone-200 border-stone-200 dark:border-white/10 hover:border-blue-400"
                    }`}
                >
                  {isSocial ? (
                    <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                  ) : (
                    <Folder className="w-3.5 h-3.5 text-amber-500" />
                  )}
                  <span>{folder.name}</span>
                  <span
                    className={`ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-mono ${isSelected
                        ? "bg-white/20 text-white"
                        : "bg-stone-200 dark:bg-white/10 text-stone-600 dark:text-stone-300"
                      }`}
                  >
                    {folder.totalImages}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Row 2: Category Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-3 border-t border-stone-200/80 dark:border-white/10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {CATEGORY_TABS.map((tab) => {
              const Icon = tab.icon;
              const isCatActive = selectedCategory === tab.id;
              const isSocialTab = tab.id === "social";
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${isCatActive
                      ? isSocialTab
                        ? "bg-pink-600/10 text-pink-600 dark:text-pink-400 font-bold border border-pink-500/30"
                        : "bg-blue-600/10 text-[#2563EB] dark:text-blue-400 font-bold border border-blue-500/30"
                      : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-white/5"
                    }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                  {isSocialTab && (
                    <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-pink-500/20 text-pink-600 dark:text-pink-300 font-bold">
                      {totalSocialCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search proofs, metrics, reach..."
              className="w-full pl-9 pr-8 py-1.5 rounded-xl bg-stone-50 dark:bg-[#070D18] border border-stone-200 dark:border-white/15 text-stone-900 dark:text-white text-xs outline-none focus:border-[#2563EB] transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-white cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ====================================================
          3. CLIENT FOLDER SECTIONS (ALL IMAGES DISPLAYED PROPERLY IN A GRID)
      ==================================================== */}
      {proofsByFolder.length === 0 ? (
        <div className="py-20 text-center rounded-3xl bg-white dark:bg-[#111B2E] border border-stone-200 dark:border-white/10 p-8">
          <Folder className="w-12 h-12 text-stone-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-1">
            No analytics images found
          </h3>
          <p className="text-xs text-stone-500 dark:text-stone-400 max-w-md mx-auto mb-4">
            No proofs matched your selected client folder, channel filter, or search query.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedFolder("all");
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="px-4 py-2 rounded-xl bg-[#2563EB] text-white text-xs font-bold hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="space-y-12 sm:space-y-16">
          {proofsByFolder.map(({ folder, proofs }) => {
            const isSocialPostFolder =
              folder.folderName === "Social Media Post" || folder.isSocialPost;
            const isMobileFolder =
              folder.folderName === "SocialMedia" ||
              folder.folderName === "Social media" ||
              folder.isMobile;
            const isSpecialFolder = isMobileFolder || isSocialPostFolder;

            return (
              <section
                key={folder.id}
                id={`folder-${folder.folderName.toLowerCase().replace(/\s+/g, "-")}`}
                className="scroll-mt-28"
              >
                {/* Folder Group Header Bar */}
                <div
                  className={`p-4 sm:p-5 rounded-2xl border mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${isSpecialFolder
                      ? "bg-gradient-to-r from-pink-50 via-purple-50/50 to-transparent dark:from-pink-950/25 dark:via-purple-950/20 dark:to-transparent border-pink-200 dark:border-pink-900/40"
                      : "bg-gradient-to-r from-blue-50 via-white to-transparent dark:from-blue-950/25 dark:via-[#111B2E] dark:to-transparent border-blue-100 dark:border-white/10"
                    }`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider ${isSpecialFolder
                            ? "bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20"
                            : "bg-blue-500/10 text-[#2563EB] dark:text-blue-400 border border-blue-500/20"
                          }`}
                      >
                        {folder.industry}
                      </span>
                      <span className="text-stone-400 text-xs font-mono">
                        {proofs.length} Proof{proofs.length > 1 ? "s" : ""}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white flex items-center gap-2">
                      {isMobileFolder ? (
                        <Smartphone className="w-5 h-5 text-pink-500" />
                      ) : isSocialPostFolder ? (
                        <Sparkles className="w-5 h-5 text-pink-500" />
                      ) : (
                        <Folder className="w-5 h-5 text-amber-500" />
                      )}
                      <span>{folder.name}</span>
                    </h2>

                    <p className="mt-1 text-xs sm:text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
                      {folder.description}
                    </p>
                  </div>

                  {/* Quick Client Folder Stat Strip */}
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="px-3.5 py-2 rounded-xl bg-white dark:bg-[#070D18] border border-stone-200 dark:border-white/10 text-right">
                      <span className="block text-[10px] font-mono text-stone-400 uppercase">
                        Top Metric
                      </span>
                      <span
                        className={`text-sm font-extrabold ${isSpecialFolder
                            ? "text-pink-600 dark:text-pink-400"
                            : "text-[#2563EB] dark:text-blue-400"
                          }`}
                      >
                        {folder.highlightStat}
                      </span>
                    </div>
                    <div className="px-3.5 py-2 rounded-xl bg-white dark:bg-[#070D18] border border-stone-200 dark:border-white/10 text-right">
                      <span className="block text-[10px] font-mono text-stone-400 uppercase">
                        Growth Lift
                      </span>
                      <span className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400">
                        {folder.growthStat}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ==========================================================
                    GRID DISPLAY:
                    - For SocialMedia Mobile: Specialized 9:19.5 Smartphone Frame Grid
                    - For Social Media Post: Specialized 4:5 Social Media Creative Grid
                    - For Standard Proofs: Landscape Dashboard Grid (3 cols)
                ========================================================== */}
                {isMobileFolder ? (
                  /* ----------------------------------------------------
                     A. SOCIAL MEDIA MOBILE SMARTPHONE GRID (In Phone Show Proper)
                  ---------------------------------------------------- */
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
                    {proofs.map((proof) => {
                      const globalIndex = filteredProofs.findIndex((p) => p.id === proof.id);

                      return (
                        <motion.div
                          key={proof.id}
                          layout
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          onClick={() => setActiveLightboxIndex(globalIndex)}
                          className="group flex flex-col items-center cursor-zoom-in"
                        >
                          {/* Realistic Smartphone Chassis Frame */}
                          <div className="relative w-full max-w-[260px] sm:max-w-[275px] aspect-[9/19.5] rounded-[2.6rem] sm:rounded-[2.8rem] p-2 sm:p-2.5 bg-gradient-to-b from-stone-800 via-stone-900 to-black border-[4px] border-stone-700 shadow-xl group-hover:shadow-2xl group-hover:border-blue-500/60 transition-all duration-300 group-hover:-translate-y-1.5">
                            {/* Side hardware buttons */}
                            <div className="absolute -left-[4px] top-16 w-[3px] h-6 bg-stone-600 rounded-l-xs" />
                            <div className="absolute -left-[4px] top-26 w-[3px] h-10 bg-stone-600 rounded-l-xs" />
                            <div className="absolute -right-[4px] top-20 w-[3px] h-12 bg-stone-600 rounded-r-xs" />

                            {/* Inner Screen */}
                            <div className="relative w-full h-full rounded-[2rem] sm:rounded-[2.2rem] overflow-hidden bg-black flex flex-col select-none">
                              {/* Top Speaker Grill Notch */}
                              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-30 h-1.5 w-14 bg-stone-800 rounded-full pointer-events-none" />

                              {/* The Mobile Screenshot Image */}
                              <Image
                                src={proof.image}
                                alt={proof.title}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                                priority={globalIndex < 4}
                              />

                              {/* Glossy glass reflection glare */}
                              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.12] pointer-events-none" />

                              {/* Hover Zoom Pill */}
                              <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-30 pointer-events-none">
                                <span className="px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold flex items-center gap-1.5 shadow-xl">
                                  <Maximize2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                                  <span>Inspect Phone</span>
                                </span>
                              </div>

                              {/* Bottom Home Indicator Bar */}
                              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-20 w-20 h-1 bg-white/70 rounded-full pointer-events-none" />
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                ) : isSocialPostFolder ? (
                  /* ----------------------------------------------------
                     B. SOCIAL MEDIA POST CREATIVE GRID - ONLY SHOW IMAGE PROPER SET
                  ---------------------------------------------------- */
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
                    {proofs.map((proof) => {
                      const globalIndex = filteredProofs.findIndex((p) => p.id === proof.id);

                      return (
                        <motion.div
                          key={proof.id}
                          layout
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          onClick={() => setActiveLightboxIndex(globalIndex)}
                          className="group relative aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-950 border border-stone-200/90 dark:border-white/10 shadow-sm hover:shadow-2xl hover:border-blue-500/60 transition-all duration-300 cursor-zoom-in"
                        >
                          {/* Ambient blurred reflection backdrop */}
                          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl sm:rounded-3xl">
                            <Image
                              src={proof.image}
                              alt=""
                              fill
                              className="object-cover blur-2xl opacity-35 scale-125"
                              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-[#070D18]/50 backdrop-blur-xs" />
                          </div>

                          {/* Only Show Image - Proper Set */}
                          <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-2.5">
                            <Image
                              src={proof.image}
                              alt={proof.title}
                              fill
                              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                              priority={globalIndex < 4}
                            />
                          </div>

                          {/* Subtle glare overlay */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.08] pointer-events-none" />

                          {/* Floating Hover Magnify Pill */}
                          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-20 pointer-events-none">
                            <span className="px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold flex items-center gap-1.5 shadow-xl">
                              <Maximize2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                              <span>Zoom Image</span>
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                ) : (
                  /* ----------------------------------------------------
                     B. STANDARD CLIENT DASHBOARD WIDESCREEN GRID (3 cols)
                  ---------------------------------------------------- */
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {proofs.map((proof) => {
                      const globalIndex = filteredProofs.findIndex((p) => p.id === proof.id);

                      return (
                        <motion.div
                          key={proof.id}
                          layout
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="group flex flex-col rounded-2xl bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
                        >
                          {/* Image Frame Container - Crisp Dark Aspect Ratio with object-contain */}
                          <div
                            onClick={() => setActiveLightboxIndex(globalIndex)}
                            className="relative w-full aspect-[16/10] bg-[#070D18] overflow-hidden cursor-zoom-in border-b border-stone-200/60 dark:border-white/10"
                          >
                            <Image
                              src={proof.image}
                              alt={proof.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
                              priority={globalIndex < 4}
                            />

                            {/* Top Overlay Badges */}
                            <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                              <span className="px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-wide flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                {proof.badge}
                              </span>

                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveLightboxIndex(globalIndex);
                                }}
                                className="p-1.5 rounded-lg bg-black/80 hover:bg-[#2563EB] border border-white/20 text-white transition-colors pointer-events-auto cursor-pointer"
                                title="Inspect in Full Resolution"
                              >
                                <Maximize2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          {/* Card Content & Proper Metric Details */}
                          <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                            <div>
                              {/* Category & Verified Attribution */}
                              <div className="flex items-center justify-between text-xs mb-1.5">
                                <span className="font-bold text-[#2563EB] dark:text-blue-400 text-[11px] uppercase tracking-wider">
                                  {proof.categoryName}
                                </span>
                                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                                  <CheckCircle2 className="w-3 h-3" />
                                  {proof.metricGrowth}
                                </span>
                              </div>

                              <h3 className="text-sm font-bold text-stone-900 dark:text-white line-clamp-2 leading-snug group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors">
                                {proof.title}
                              </h3>

                              <p className="mt-1.5 text-xs text-stone-600 dark:text-stone-300 line-clamp-2 leading-relaxed">
                                {proof.description}
                              </p>
                            </div>

                            {/* Stat pill footer */}
                            <div className="mt-3 pt-2.5 border-t border-stone-200/50 dark:border-white/5 flex items-center justify-between text-xs font-mono">
                              <span className="text-stone-500 dark:text-stone-400">
                                {proof.metricLabel}:
                              </span>
                              <span className="font-extrabold text-stone-900 dark:text-white">
                                {proof.metricValue}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      )}

      {/* ====================================================
          4. FULLSCREEN HIGH-RESOLUTION LIGHTBOX MODAL
          (With Smartphone Frame for Mobile & Wide Frame for GSC/GA4)
      ==================================================== */}
      <AnimatePresence>
        {activeLightboxProof && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightboxIndex(null)}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 cursor-zoom-out overflow-y-auto"
          >
            <div
              className={`relative w-full cursor-default my-auto ${
                activeLightboxProof.isMobile
                  ? "max-w-md"
                  : activeLightboxProof.isSocialPost
                  ? "max-w-lg"
                  : "max-w-6xl"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Floating Fixed Close Button (Top-Right of Screen) */}
              <button
                type="button"
                onClick={() => setActiveLightboxIndex(null)}
                className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[10001] p-2.5 sm:p-3 rounded-full bg-stone-900/90 hover:bg-rose-600 text-white border border-white/25 hover:border-rose-500 shadow-2xl backdrop-blur-md transition-all duration-200 cursor-pointer flex items-center justify-center group"
                title="Close (Esc)"
                aria-label="Close Screenshot Preview"
              >
                <X className="w-5 h-5 transition-transform group-hover:scale-110" />
              </button>

              {/* Lightbox Top Header Bar */}
              <div className="flex items-center justify-between pb-3 text-white">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2.5 py-1 rounded-lg border font-mono text-xs font-bold flex items-center gap-1.5 ${activeLightboxProof.isMobile
                        ? "bg-pink-600/30 border-pink-400/40 text-pink-300"
                        : "bg-blue-600/30 border-blue-400/40 text-blue-300"
                      }`}
                  >
                    {activeLightboxProof.isMobile ? (
                      <Smartphone className="w-3.5 h-3.5" />
                    ) : (
                      <Folder className="w-3.5 h-3.5" />
                    )}
                    {activeLightboxProof.folderPath}/{activeLightboxProof.fileName}
                  </span>
                  <span className="text-xs text-stone-400 hidden sm:inline">
                    Proof {(activeLightboxIndex ?? 0) + 1} of {filteredProofs.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {filteredProofs.length > 1 && (
                    <div className="flex items-center gap-1 mr-1">
                      <button
                        type="button"
                        onClick={handlePrevLightbox}
                        className="p-2 rounded-xl bg-white/10 hover:bg-[#2563EB] text-white transition-colors cursor-pointer"
                        title="Previous Image (← Left Arrow)"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNextLightbox}
                        className="p-2 rounded-xl bg-white/10 hover:bg-[#2563EB] text-white transition-colors cursor-pointer"
                        title="Next Image (→ Right Arrow)"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveLightboxIndex(null)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-rose-600 text-white text-xs font-bold transition-all cursor-pointer border border-white/15"
                    title="Close (Esc)"
                  >
                    <X className="w-4 h-4" />
                    <span>Close</span>
                  </button>
                </div>
              </div>

              {/* Lightbox Body: Conditional Mobile Phone Frame vs Social Media Post vs Desktop Dashboard */}
              {activeLightboxProof.isMobile ? (
                /* =======================================================
                   LIGHTBOX MOBILE SMARTPHONE PRESENTATION (In Phone Show Proper)
                ======================================================= */
                <div className="relative max-h-[82vh] h-[78vh] sm:h-[82vh] aspect-[9/19.5] mx-auto rounded-[3rem] p-2.5 sm:p-3 bg-gradient-to-b from-stone-800 via-stone-900 to-black border-[4px] border-stone-700 shadow-2xl flex flex-col items-center justify-center">
                  {/* Side button notches */}
                  <div className="absolute -left-[4px] top-20 w-[4px] h-10 bg-stone-600 rounded-l-xs" />
                  <div className="absolute -left-[4px] top-32 w-[4px] h-10 bg-stone-600 rounded-l-xs" />
                  <div className="absolute -right-[4px] top-24 w-[4px] h-14 bg-stone-600 rounded-r-xs" />

                  {/* Inner Screen */}
                  <div className="relative w-full h-full rounded-[2.3rem] overflow-hidden bg-black select-none">
                    {/* Top Speaker Grill */}
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-30 h-1.5 w-16 bg-stone-800 rounded-full pointer-events-none" />

                    {/* High-res Image inside screen */}
                    <Image
                      src={activeLightboxProof.image}
                      alt={activeLightboxProof.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-contain object-center"
                      priority
                    />

                    {/* Glossy glass reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none" />

                    {/* Bottom Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 w-24 h-1 bg-white/70 rounded-full pointer-events-none" />
                  </div>
                </div>
              ) : activeLightboxProof.isSocialPost ? (
                /* =======================================================
                   LIGHTBOX SOCIAL MEDIA POST - ONLY SHOW IMAGE PROPER SET
                ======================================================= */
                <div className="relative w-full aspect-[4/5] max-h-[82vh] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-white/20 shadow-2xl flex items-center justify-center p-2 sm:p-3">
                  {/* Ambient blurred reflection backdrop */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl sm:rounded-3xl">
                    <Image
                      src={activeLightboxProof.image}
                      alt=""
                      fill
                      className="object-cover blur-3xl opacity-40 scale-125"
                      sizes="600px"
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />
                  </div>

                  {/* High-res Image - Only Show Image Proper Set */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={activeLightboxProof.image}
                      alt={activeLightboxProof.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              ) : (
                /* =======================================================
                   LIGHTBOX STANDARD WIDESCREEN PRESENTATION (GSC / GA4)
                ======================================================= */
                <div>
                  {/* Lightbox Image Container (Preserves Aspect Ratio, No Cropping) */}
                  <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[70vh] bg-stone-950 rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                    <Image
                      src={activeLightboxProof.image}
                      alt={activeLightboxProof.title}
                      fill
                      sizes="100vw"
                      className="object-contain p-2"
                      priority
                    />
                  </div>

                  {/* Lightbox Bottom Details Bar */}
                  <div className="mt-3 p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="max-w-3xl">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                          {activeLightboxProof.clientName} • {activeLightboxProof.categoryName}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold">
                          {activeLightboxProof.metricGrowth}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white">
                        {activeLightboxProof.title}
                      </h3>
                      <p className="text-xs text-stone-300 mt-0.5 leading-relaxed">
                        {activeLightboxProof.description}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 shrink-0">
                      {/* Lightbox Metrics Pills */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {activeLightboxProof.highlights.map((h, i) => (
                          <div
                            key={i}
                            className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-right"
                          >
                            <span className="block text-[10px] text-stone-400">{h.label}</span>
                            <span className="block text-xs font-bold text-white">{h.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Explicit Bottom Close Button */}
                      <button
                        type="button"
                        onClick={() => setActiveLightboxIndex(null)}
                        className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-rose-600 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-white/15 shadow-sm"
                        title="Close (Esc)"
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>Close</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

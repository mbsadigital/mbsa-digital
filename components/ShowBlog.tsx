"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Plus,
  Edit3,
  Trash2,
  Heart,
  Clock,
  Unlock,
  X,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Layers,
  ArrowRight,
  ArrowLeft,
  Calendar,
  RotateCcw,
  SlidersHorizontal,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import { BlogPost, FALLBACK_BLOGS, CATEGORIES, PRESET_COVERS } from "@/lib/fallbackBlogs";
import {
  fetchBlogs,
  deleteBlog,
  likeBlog,
  loginAdmin,
  getStoredAdminToken,
  removeAdminToken,
} from "@/lib/blogApi";

export default function ShowBlog() {
  const [blogs, setBlogs] = useState<BlogPost[]>(FALLBACK_BLOGS);
  const [loading, setLoading] = useState(false);

  // Filtering & Sorting State
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"newest" | "popular" | "likes">("newest");

  // Admin Authentication State
  const [adminToken, setAdminToken] = useState<string | null>(null);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [adminPasswordInput, setAdminPasswordInput] = useState("");
  const [adminLoginError, setAdminLoginError] = useState("");
  const [adminLoginLoading, setAdminLoginLoading] = useState(false);

  // Delete Confirmation Modal State
  const [deleteConfirmBlog, setDeleteConfirmBlog] = useState<BlogPost | null>(null);

  // Newsletter State
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Toast Notifications
  const [toastMessage, setToastMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const showToast = (text: string, type: "success" | "error" = "success") => {
    setToastMessage({ text, type });
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Sync admin token
  useEffect(() => {
    const syncToken = () => {
      setAdminToken(getStoredAdminToken());
    };
    syncToken();
    window.addEventListener("storage", syncToken);
    window.addEventListener("admin-auth-change", syncToken);
    return () => {
      window.removeEventListener("storage", syncToken);
      window.removeEventListener("admin-auth-change", syncToken);
    };
  }, []);

  // Fetch blogs with filters
  const loadBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchBlogs({
        category: selectedCategory,
        search: searchQuery,
        sort: sortBy,
      });
      if (data.blogs && data.blogs.length > 0) {
        setBlogs(data.blogs);
      }
    } catch {
      // Local fallback filtering if API query encounters issues
      let filtered = [...FALLBACK_BLOGS];
      if (selectedCategory !== "All") {
        filtered = filtered.filter((b) => b.category === selectedCategory);
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        filtered = filtered.filter(
          (b) =>
            b.title.toLowerCase().includes(q) ||
            b.description?.toLowerCase().includes(q) ||
            b.excerpt?.toLowerCase().includes(q) ||
            b.tags?.some((t) => t.toLowerCase().includes(q))
        );
      }
      if (sortBy === "popular") {
        filtered.sort((a, b) => (b.views || 0) - (a.views || 0));
      } else if (sortBy === "likes") {
        filtered.sort((a, b) => (b.likes || 0) - (a.likes || 0));
      } else {
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      }
      setBlogs(filtered);
    } finally {
      setLoading(false);
    }
  }, [selectedCategory, searchQuery, sortBy]);

  useEffect(() => {
    loadBlogs();
  }, [loadBlogs]);

  // Handle Admin Login
  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdminLoginError("");
    setAdminLoginLoading(true);

    try {
      const res = await loginAdmin(adminPasswordInput);
      setAdminToken(res.token);
      setIsAdminLoginOpen(false);
      setAdminPasswordInput("");
      showToast("Admin session authenticated! Full management enabled.", "success");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Invalid admin password";
      setAdminLoginError(msg);
    } finally {
      setAdminLoginLoading(false);
    }
  };

  const handleAdminLogout = () => {
    removeAdminToken();
    setAdminToken(null);
    showToast("Logged out of Admin Session.", "success");
  };

  // Delete Article
  const handleConfirmDelete = async () => {
    if (!deleteConfirmBlog) return;

    try {
      await deleteBlog(deleteConfirmBlog._id, adminToken || undefined);
      setBlogs((prev) => prev.filter((b) => b._id !== deleteConfirmBlog._id));
      showToast("Article deleted successfully.", "success");
      setDeleteConfirmBlog(null);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to delete article";
      showToast(msg, "error");
    }
  };

  // Like Article
  const handleLike = async (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const newLikes = await likeBlog(id);
      setBlogs((prev) =>
        prev.map((b) => (b._id === id ? { ...b, likes: newLikes } : b))
      );
    } catch {
      setBlogs((prev) =>
        prev.map((b) => (b._id === id ? { ...b, likes: (b.likes || 0) + 1 } : b))
      );
    }
  };

  // Reset Filters
  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
    setSortBy("newest");
  };

  // Handle Newsletter Subscribe
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscriberEmail.trim() || !subscriberEmail.includes("@")) return;
    setSubscribed(true);
    showToast("Thank you for subscribing to our Growth Digest!", "success");
    setSubscriberEmail("");
  };

  const hasActiveFilters = selectedCategory !== "All" || searchQuery.trim() !== "" || sortBy !== "newest";

  // Featured Hero Article Spotlight (shown when viewing all articles without active search)
  const featuredArticle = useMemo(() => {
    return blogs.find((b) => b.featured) || blogs[0];
  }, [blogs]);

  // Articles for regular grid (if featured is spotlighted on top, we show the full catalog)
  const displayArticles = useMemo(() => {
    return blogs;
  }, [blogs]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#080706] text-stone-900 dark:text-white transition-colors duration-500 overflow-x-hidden">
      {/* Background Ambient Glow & Subtle Texture */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 h-[550px] w-[550px] rounded-full bg-[#EA580C]/[0.06] blur-[160px]" />
        <div className="absolute bottom-10 left-10 h-[450px] w-[450px] rounded-full bg-[#FB923C]/[0.05] blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(rgba(234, 88, 12, 0.4) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-20">
        {/* =========================================================
            TOP NAVIGATION & EDITORIAL HEADER
        ========================================================= */}
        <div className="mb-10 sm:mb-14">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-6">
            <Link
              href="/"
              className="hover:text-[#EA580C] dark:hover:text-[#F97316] transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span className="text-stone-300 dark:text-stone-700">/</span>
            <span className="text-[#EA580C] font-semibold">Articles &amp; Insights</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/20 text-[#EA580C] dark:text-[#F97316] text-[11px] font-bold uppercase tracking-[0.22em] mb-4 shadow-sm">
                <Sparkles className="w-3 h-3" />
                <span>KNOWLEDGE BASE &amp; INDUSTRY INSIGHTS</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08]">
                Explore All{" "}
                <span className="bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FB923C] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(234,88,12,0.35)]">
                  Articles.
                </span>
              </h1>
              <p className="mt-3.5 text-sm sm:text-base text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed">
                Browse our complete collection of technical SEO, Google Ads, GA4 attribution, and autonomous growth marketing publications.
              </p>
            </div>

            {/* Right Controls: Consultation CTA and Admin Session (Admin Key and MongoDB removed) */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#14100E] hover:bg-[#EA580C] dark:hover:bg-[#EA580C] text-stone-800 dark:text-stone-200 hover:text-white dark:hover:text-white text-xs font-bold border border-stone-200/80 dark:border-white/10 hover:border-[#EA580C] shadow-sm hover:shadow-orange-500/20 transition-all duration-300 cursor-pointer"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>

              {adminToken && (
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-600/15 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-semibold">
                    <Unlock className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>Admin Mode</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleAdminLogout}
                    className="px-3 py-1.5 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-red-500/20 hover:text-red-500 text-xs font-medium transition cursor-pointer"
                  >
                    Logout
                  </button>
                  <Link
                    href="/createblog"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] text-white text-xs font-bold shadow-md hover:shadow-orange-500/30 transition cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Write Article</span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Metric Highlights Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-8 border-t border-stone-200/70 dark:border-white/5">
            <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/70 dark:bg-[#120F0D]/70 border border-stone-200/80 dark:border-white/5 backdrop-blur-md shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/20 flex items-center justify-center text-[#EA580C] shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-black text-stone-900 dark:text-white leading-tight font-mono">
                  {blogs.length}+
                </div>
                <div className="text-[11px] font-medium text-stone-500 dark:text-stone-400">
                  Published Insights
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/70 dark:bg-[#120F0D]/70 border border-stone-200/80 dark:border-white/5 backdrop-blur-md shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/20 flex items-center justify-center text-[#EA580C] shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-black text-stone-900 dark:text-white leading-tight font-mono">
                  {CATEGORIES.length}
                </div>
                <div className="text-[11px] font-medium text-stone-500 dark:text-stone-400">
                  Strategic Pillars
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/70 dark:bg-[#120F0D]/70 border border-stone-200/80 dark:border-white/5 backdrop-blur-md shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/20 flex items-center justify-center text-[#EA580C] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-black text-stone-900 dark:text-white leading-tight font-mono">
                  6 Min
                </div>
                <div className="text-[11px] font-medium text-stone-500 dark:text-stone-400">
                  Average Read Depth
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/70 dark:bg-[#120F0D]/70 border border-stone-200/80 dark:border-white/5 backdrop-blur-md shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/20 flex items-center justify-center text-[#EA580C] shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-black text-stone-900 dark:text-white leading-tight font-mono">
                  100%
                </div>
                <div className="text-[11px] font-medium text-stone-500 dark:text-stone-400">
                  Field-Tested Data
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            FEATURED SPOTLIGHT ARTICLE BANNER
            (Displayed when browsing All categories without active search query)
        ========================================================= */}
        {!hasActiveFilters && featuredArticle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 group relative rounded-3xl overflow-hidden border border-orange-500/25 bg-white/80 dark:bg-[#120F0D]/90 backdrop-blur-xl shadow-[0_15px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_50px_rgba(0,0,0,0.4)] hover:border-orange-500/50 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Visual Banner */}
              <Link
                href={`/blog/${featuredArticle.slug || featuredArticle._id}`}
                className="relative lg:col-span-6 h-64 sm:h-80 lg:h-auto min-h-[300px] overflow-hidden block cursor-pointer"
                aria-label={featuredArticle.title}
              >
                <Image
                  src={featuredArticle.coverImage || featuredArticle.imageUrl || PRESET_COVERS[0].url}
                  alt={featuredArticle.title}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/70" />

                {/* Floating Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#EA580C] text-white text-[10px] font-black uppercase tracking-wider shadow-lg shadow-orange-600/40 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    Featured Spotlight
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-[10px] font-mono border border-white/20">
                    {featuredArticle.category}
                  </span>
                </div>
              </Link>

              {/* Content Column */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-stone-500 dark:text-stone-400 mb-3.5 font-mono">
                    <span className="flex items-center gap-1.5 text-[#EA580C] font-semibold">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredArticle.readTime || "6 min read"}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-stone-400" />
                      {new Date(featuredArticle.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${featuredArticle.slug || featuredArticle._id}`}
                    className="block text-2xl sm:text-3xl font-black tracking-tight text-stone-900 dark:text-white group-hover:text-[#EA580C] transition-colors duration-200 cursor-pointer leading-tight mb-4"
                  >
                    {featuredArticle.title}
                  </Link>

                  <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed line-clamp-3 mb-6">
                    {featuredArticle.description || featuredArticle.excerpt}
                  </p>

                  {featuredArticle.tags && featuredArticle.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {featuredArticle.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono text-stone-600 dark:text-stone-300 bg-stone-100 dark:bg-stone-800/80 px-2.5 py-1 rounded-lg border border-stone-200/60 dark:border-stone-700/60"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-stone-100 dark:border-white/5 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border border-orange-500/40">
                      <Image
                        src={featuredArticle.author?.avatar || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80"}
                        alt={featuredArticle.author?.name || "Author"}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-900 dark:text-white">
                        {featuredArticle.author?.name || "Muskan Shekh"}
                      </div>
                      <div className="text-[10px] text-stone-500 dark:text-stone-400">
                        {featuredArticle.author?.role || "Digital Marketing & SEO Specialist"}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredArticle.slug || featuredArticle._id}`}
                    className="group/cta inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EA580C] hover:bg-orange-600 text-white text-xs font-bold shadow-md shadow-orange-600/30 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* =========================================================
            SEARCH, FILTER & CATEGORIES TOOLBAR
        ========================================================= */}
        <div className="mb-10 p-5 sm:p-6 rounded-3xl bg-white/90 dark:bg-[#120F0D]/90 border border-stone-200/90 dark:border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.3)] backdrop-blur-xl">
          {/* Top Row: Search Input + Sort Controls */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-5 pb-5 border-b border-stone-100 dark:border-white/5">
            {/* Search Input */}
            <div className="relative flex-1 max-w-xl">
              <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search insights by keywords, topics, or technical concepts..."
                className="w-full pl-11 pr-10 py-3 rounded-2xl text-xs sm:text-sm bg-stone-50 dark:bg-stone-900/90 border border-stone-200 dark:border-stone-800 focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/20 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 text-sm cursor-pointer p-1"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort & Reset Controls */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#EA580C]" />
                <span className="text-xs font-semibold text-stone-500 dark:text-stone-400 hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "newest" | "popular" | "likes")}
                  className="bg-transparent text-xs font-semibold text-stone-800 dark:text-stone-200 focus:outline-none cursor-pointer"
                >
                  <option value="newest" className="bg-white dark:bg-stone-900 text-stone-900 dark:text-white">Newest First</option>
                  <option value="popular" className="bg-white dark:bg-stone-900 text-stone-900 dark:text-white">Most Read</option>
                  <option value="likes" className="bg-white dark:bg-stone-900 text-stone-900 dark:text-white">Most Liked</option>
                </select>
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-2xl bg-orange-500/10 hover:bg-orange-500/20 text-[#EA580C] text-xs font-bold border border-orange-500/20 transition cursor-pointer"
                  title="Reset all filters"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Bottom Row: Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                selectedCategory === "All"
                  ? "bg-[#EA580C] text-white shadow-md shadow-orange-500/30 scale-[1.02]"
                  : "bg-stone-100 hover:bg-stone-200/80 dark:bg-stone-900 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-800"
              }`}
            >
              <span>All Categories</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${selectedCategory === "All" ? "bg-white/20 text-white" : "bg-stone-200 dark:bg-stone-800 text-stone-500"}`}>
                {blogs.length}
              </span>
            </button>

            {CATEGORIES.map((cat) => {
              const count = blogs.filter((b) => b.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === cat
                      ? "bg-[#EA580C] text-white shadow-md shadow-orange-500/30 scale-[1.02]"
                      : "bg-stone-100 hover:bg-stone-200/80 dark:bg-stone-900 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-800"
                  }`}
                >
                  <span>{cat}</span>
                  {count > 0 && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${selectedCategory === cat ? "bg-white/20 text-white" : "bg-stone-200 dark:bg-stone-800 text-stone-500"}`}>
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Summary Strip */}
          <div className="mt-4 pt-3.5 border-t border-stone-100 dark:border-white/5 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
              <span>
                Displaying <strong className="text-stone-900 dark:text-white font-bold">{displayArticles.length}</strong> {displayArticles.length === 1 ? "publication" : "publications"}
                {selectedCategory !== "All" && (
                  <span className="text-[#EA580C] font-semibold"> • {selectedCategory}</span>
                )}
                {searchQuery && (
                  <span> • Matching &ldquo;{searchQuery}&rdquo;</span>
                )}
              </span>
            </div>
            {loading && <span className="text-[#EA580C] font-semibold animate-pulse">Syncing...</span>}
          </div>
        </div>

        {/* =========================================================
            ALL ARTICLES GRID
        ========================================================= */}
        {displayArticles.length === 0 ? (
          <div className="py-24 text-center rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#120F0D] p-8 shadow-sm">
            <Layers className="w-12 h-12 text-stone-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-stone-800 dark:text-stone-200">
              No matching publications found
            </h3>
            <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
              We couldn&apos;t find any articles matching your current search or category filter.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#EA580C] text-white text-xs font-bold shadow-md hover:bg-orange-600 transition cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Search & Filters</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {displayArticles.map((article, idx) => (
              <motion.article
                key={article._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.3) }}
                className="group relative flex flex-col justify-between rounded-3xl overflow-hidden border border-stone-200/90 dark:border-white/10 bg-white dark:bg-[#120F0D]/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_45px_-10px_rgba(234,88,12,0.15)] hover:border-orange-500/60 dark:hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden block">
                    <Link
                      href={`/blog/${article.slug || article._id}`}
                      className="absolute inset-0 block cursor-pointer"
                      aria-label={article.title}
                    >
                      <Image
                        src={article.imageUrl || article.coverImage || PRESET_COVERS[idx % PRESET_COVERS.length].url}
                        alt={article.title}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </Link>

                    {/* Category pill on image */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold font-mono tracking-wider uppercase bg-black/60 backdrop-blur-md text-white border border-white/20">
                        {article.category}
                      </span>
                    </div>

                    {article.featured && (
                      <div className="absolute top-3 right-3 z-10">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#EA580C] text-white flex items-center gap-1 shadow-md shadow-orange-600/40">
                          <Sparkles className="w-2.5 h-2.5" />
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    {/* Read time and date */}
                    <div className="flex items-center gap-3 text-[11px] text-stone-500 dark:text-stone-400 font-mono mb-2.5">
                      <span className="flex items-center gap-1 text-[#EA580C] font-semibold">
                        <Clock className="w-3 h-3" />
                        {article.readTime || "5 min read"}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-stone-400" />
                        {new Date(article.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    {/* Article Title */}
                    <Link
                      href={`/blog/${article.slug || article._id}`}
                      className="block text-base sm:text-lg font-bold tracking-tight text-stone-900 dark:text-white group-hover:text-[#EA580C] transition-colors duration-200 line-clamp-2 leading-snug mb-2.5 cursor-pointer"
                    >
                      {article.title}
                    </Link>

                    {/* Excerpt */}
                    <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed mb-4">
                      {article.description || article.excerpt}
                    </p>

                    {/* Tags */}
                    {article.tags && article.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono text-stone-600 dark:text-stone-400 bg-stone-100 dark:bg-stone-800/80 px-2 py-0.5 rounded-md border border-stone-200/50 dark:border-stone-700/50"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Info & Actions */}
                <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-stone-100 dark:border-white/5 flex items-center justify-between">
                  {/* Author & Interactive Like */}
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden border border-orange-500/40">
                      <Image
                        src={article.author?.avatar || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80"}
                        alt={article.author?.name || "Author"}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    <div className="text-[11px] font-bold text-stone-800 dark:text-stone-200 truncate max-w-[85px]">
                      {article.author?.name || "Muskan Shekh"}
                    </div>

                    {/* Interactive Heart / Like */}
                    <button
                      type="button"
                      onClick={(e) => handleLike(e, article._id)}
                      className="group/heart flex items-center gap-1 text-[11px] font-mono text-stone-400 hover:text-red-500 transition-colors p-1 rounded-md cursor-pointer ml-1"
                      title="Like this publication"
                    >
                      <Heart className="w-3.5 h-3.5 group-hover/heart:fill-red-500 group-hover/heart:text-red-500 transition-colors" />
                      <span>{article.likes || 0}</span>
                    </button>
                  </div>

                  {/* Actions: Admin and Read Button */}
                  <div className="flex items-center gap-2">
                    {/* Admin Actions if logged in */}
                    {adminToken && (
                      <div className="flex items-center gap-1">
                        <Link
                          href={`/blog/create?id=${article._id}`}
                          className="p-1 rounded-md text-stone-400 hover:text-orange-500 transition cursor-pointer"
                          title="Edit"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </Link>
                        <button
                          onClick={() => setDeleteConfirmBlog(article)}
                          className="p-1 rounded-md text-stone-400 hover:text-red-500 transition cursor-pointer"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                    <Link
                      href={`/blog/${article.slug || article._id}`}
                      className="group/read inline-flex items-center gap-1 text-xs font-bold text-[#EA580C] hover:text-orange-600 transition ml-1"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/read:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* =========================================================
            EDITORIAL NEWSLETTER / CONSULTATION DIGEST BANNER
        ========================================================= */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1A1613] via-[#120F0D] to-[#0A0807] text-white border border-stone-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#EA580C]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-[11px] font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Growth Intelligence Digest</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-3">
              Never Miss an Algorithmic Shift.
            </h3>
            <p className="text-stone-300 text-sm leading-relaxed mb-6">
              Get our bi-weekly breakdown of Search Generative Experience, advanced GA4 schemas, and high-ticket paid media experiments delivered straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={subscriberEmail}
                onChange={(e) => setSubscriberEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="px-4 py-3 rounded-2xl bg-white/10 border border-white/15 text-white placeholder:text-stone-400 text-xs sm:text-sm focus:outline-none focus:border-[#EA580C] flex-1"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#EA580C] to-[#F97316] text-white text-xs sm:text-sm font-bold shadow-lg shadow-orange-500/30 hover:brightness-110 transition cursor-pointer whitespace-nowrap"
              >
                {subscribed ? "Subscribed!" : "Subscribe Now"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* =========================================================
          ADMIN LOGIN MODAL (Retained for authorized actions)
      ========================================================= */}
      <AnimatePresence>
        {isAdminLoginOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-sm rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#151210] p-6 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setIsAdminLoginOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-3 text-[#EA580C]">
                <Unlock className="w-5 h-5" />
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                  Admin Passcode
                </h3>
              </div>

              <form onSubmit={handleAdminLogin} className="space-y-4">
                <div>
                  <input
                    type="password"
                    value={adminPasswordInput}
                    onChange={(e) => setAdminPasswordInput(e.target.value)}
                    placeholder="Enter admin passcode"
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-sm focus:outline-none focus:border-[#EA580C]"
                    autoFocus
                  />
                  {adminLoginError && (
                    <p className="mt-1.5 text-xs text-red-500 font-medium">
                      {adminLoginError}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAdminLoginOpen(false)}
                    className="flex-1 py-2 rounded-xl border border-stone-300 dark:border-stone-800 text-xs font-semibold hover:bg-stone-100 dark:hover:bg-stone-900 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={adminLoginLoading}
                    className="flex-1 py-2 rounded-xl bg-[#EA580C] hover:bg-orange-600 text-white text-xs font-bold shadow-md shadow-orange-600/30 transition disabled:opacity-50"
                  >
                    {adminLoginLoading ? "Checking..." : "Unlock"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================
          DELETE CONFIRMATION MODAL
      ========================================================= */}
      <AnimatePresence>
        {deleteConfirmBlog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md rounded-3xl border border-red-500/30 bg-white dark:bg-[#151210] p-6 shadow-2xl"
            >
              <div className="p-3 rounded-2xl bg-red-500/10 text-red-500 w-fit mb-3">
                <Trash2 className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-1">
                Delete Article?
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 mb-4 leading-relaxed">
                Permanently delete &ldquo;{deleteConfirmBlog.title}&rdquo;? This action cannot be undone.
              </p>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setDeleteConfirmBlog(null)}
                  className="flex-1 py-2 rounded-xl border border-stone-300 dark:border-stone-800 text-xs font-bold hover:bg-stone-100 dark:hover:bg-stone-900 transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleConfirmDelete}
                  className="flex-1 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md shadow-red-600/30 transition"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================
          TOAST FEEDBACK
      ========================================================= */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] px-5 py-3 rounded-2xl shadow-2xl backdrop-blur-xl border flex items-center gap-2.5 text-xs sm:text-sm font-semibold ${
              toastMessage.type === "success"
                ? "bg-emerald-950/90 border-emerald-500/40 text-emerald-200"
                : "bg-red-950/90 border-red-500/40 text-red-200"
            }`}
          >
            {toastMessage.type === "success" ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            ) : (
              <AlertCircle className="w-4 h-4 text-red-400" />
            )}
            <span>{toastMessage.text}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Plus,
  Edit3,
  Trash2,
  Clock,
  X,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Layers,
  ArrowRight,
  Calendar
} from "lucide-react";
import { BlogPost, FALLBACK_BLOGS, PRESET_COVERS } from "@/lib/fallbackBlogs";
import {
  fetchBlogs,
  deleteBlog,
  getStoredAdminToken
} from "@/lib/blogApi";

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogPost[]>(FALLBACK_BLOGS);
  const [loading, setLoading] = useState(false);

  // Admin Authentication State (synced from storage)
  const [adminToken, setAdminToken] = useState<string | null>(null);

  // Delete Confirmation Modal State
  const [deleteConfirmBlog, setDeleteConfirmBlog] = useState<BlogPost | null>(null);

  // Toast Notifications
  const [toastMessage, setToastMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const showToast = (text: string, type: "success" | "error" = "success") => {
    setToastMessage({ text, type });
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Check stored admin token on mount and listen to auth changes
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

  // Fetch all blogs from API
  const loadBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchBlogs();
      if (data.blogs && data.blogs.length > 0) {
        setBlogs(data.blogs);
      }
    } catch {
      // Fallback already preloaded
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadBlogs();
  }, [loadBlogs]);

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

  // Featured article (first featured or first article)
  const featuredArticle = useMemo(() => {
    return blogs.find((b) => b.featured) || blogs[0];
  }, [blogs]);

  const regularArticles = useMemo(() => {
    return blogs.filter((b) => b._id !== featuredArticle?._id);
  }, [blogs, featuredArticle]);

  return (
    <section id="blog" className="relative py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] dark:bg-[#0B1220] text-stone-900 dark:text-white transition-colors duration-500 overflow-hidden">
      {/* Background Gradients & Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 h-[550px] w-[550px] rounded-full bg-[#2563EB]/[0.07] blur-[160px]" />
        <div className="absolute bottom-10 left-10 h-[450px] w-[450px] rounded-full bg-[#FB923C]/[0.05] blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(rgba(37, 99, 235, 0.4) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =========================================================
            HEADER & ACTIONS BAR
        ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#2563EB] dark:bg-[#14B8A6]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-[#2563EB] dark:text-[#14B8A6]">
                Blog Article
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight leading-[1.08]">
              Engineering Scalable{" "}
              <span className="text-[#2563EB]">
                Digital Growth.
              </span>
            </h2>

            <p className="mt-3.5 text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              Deep dives on technical SEO architecture, high-intent Google Ads optimization,
              cookieless attribution modeling, and autonomous marketing workflows.
            </p>
          </div>

          {/* Right Header Controls: View all Articles */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/blog"
              className="group/btn flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/95 dark:bg-[#14100E] hover:bg-[#2563EB] dark:hover:bg-[#2563EB] text-stone-900 dark:text-white hover:text-white text-xs sm:text-sm font-bold backdrop-blur-md border border-stone-200/80 dark:border-white/15 hover:border-[#2563EB] shadow-sm hover:shadow-orange-500/25 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>View all Articles</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* =========================================================
            FEATURED ARTICLE HERO BANNER -> NAVIGATES TO /viewblog/[id]
        ========================================================= */}
        {featuredArticle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 group relative rounded-3xl overflow-hidden border border-orange-500/30 bg-white dark:bg-[#111B2E]/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:border-orange-500/50 transition-all duration-300"
          >
            {/* HERO ARTICLE TOP RIGHT: VIEW ALL ARTICLES BUTTON */}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image Column */}
              <Link
                href={`/blog/${featuredArticle.slug || featuredArticle._id}`}
                className="relative lg:col-span-6 h-64 sm:h-80 lg:h-auto overflow-hidden block cursor-pointer"
              >
                <Image
                  src={featuredArticle.coverImage || PRESET_COVERS[0].url}
                  alt={featuredArticle.title}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/60" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#2563EB] text-white text-[10px] font-black uppercase tracking-wider shadow-lg shadow-orange-600/40 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    Featured Insight
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-[10px] font-mono border border-white/20">
                    {featuredArticle.category}
                  </span>
                </div>
              </Link>

              {/* Content Column */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-stone-500 dark:text-stone-400 mb-3 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                      {featuredArticle.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(featuredArticle.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                      })}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${featuredArticle.slug || featuredArticle._id}`}
                    className="block text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-stone-900 dark:text-white group-hover:text-[#2563EB] transition-colors duration-200 cursor-pointer leading-tight mb-3"
                  >
                    {featuredArticle.title}
                  </Link>

                  <p className="text-sm text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed mb-6">
                    {featuredArticle.description || featuredArticle.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {featuredArticle.tags?.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-lg text-[12px] font-bold bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer with Author, Metrics, and Actions */}
                <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between flex-wrap gap-4">
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-orange-500/40">
                      <Image
                        src={featuredArticle.author?.avatar || PRESET_COVERS[0].url}
                        alt={featuredArticle.author?.name || "Author"}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-900 dark:text-stone-100">
                        {featuredArticle.author?.name || "Muskan Shekh"}
                      </p>
                      <p className="text-[10px] text-stone-500 dark:text-stone-400">
                        {featuredArticle.author?.role || "Digital Marketing Specialist"}
                      </p>
                    </div>
                  </div>

                  {/* Metrics & Action Buttons */}
                  <div className="flex items-center gap-2">


                    {/* Edit & Delete Action Buttons (Admin Only) */}
                    {adminToken && (
                      <div className="flex items-center gap-1 ml-1 pl-1 border-l border-stone-200 dark:border-stone-800">
                        <Link
                          href={`/createblog?id=${featuredArticle._id}`}
                          className="p-1.5 rounded-lg bg-stone-100 dark:bg-stone-900 hover:bg-orange-500 hover:text-white text-stone-700 dark:text-stone-300 transition cursor-pointer inline-flex items-center justify-center"
                          title="Edit Article"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </Link>
                        <button
                          onClick={() => setDeleteConfirmBlog(featuredArticle)}
                          className="p-1.5 rounded-lg bg-stone-100 dark:bg-stone-900 hover:bg-red-500 hover:text-white text-stone-700 dark:text-stone-300 transition cursor-pointer"
                          title="Delete Article"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                    {/* Read Full Article Button -> NAVIGATES TO /blog/[id] */}
                    <Link
                      href={`/blog/${featuredArticle.slug || featuredArticle._id}`}
                      className="ml-2 flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-[#2563EB] text-white text-xs font-bold hover:bg-orange-600 transition shadow-sm cursor-pointer"
                    >
                      <span>View Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* =========================================================
            GRID OF ARTICLES
        ========================================================= */}
        {blogs.length === 0 ? (
          <div className="py-20 text-center rounded-3xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-[#111B2E]">
            <Layers className="w-10 h-10 text-stone-400 mx-auto mb-3" />
            <p className="text-base font-bold text-stone-700 dark:text-stone-300">
              No matching articles found
            </p>
            <p className="text-xs text-stone-500 mt-1">
              Try adjusting your search query or selected category filter.
            </p>
            {adminToken && (
              <Link
                href="/blog/create"
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2563EB] text-white text-xs font-bold shadow-md cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Create First Article</span>
              </Link>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {regularArticles.map((article, idx) => (
              <motion.article
                key={article._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative flex flex-col justify-between rounded-3xl overflow-hidden border border-stone-200/80 dark:border-stone-800/80 bg-white dark:bg-[#111B2E]/90 backdrop-blur-xl shadow-md hover:shadow-xl hover:border-orange-500/40 transition-all duration-300"
              >
                <div>
                  {/* Article Card Image Container */}
                  <div className="relative h-48 w-full overflow-hidden block">
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

                    {/* Category Pill on Image */}
                    <div className="absolute top-3 left-3 pointer-events-none z-10">
                      <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[10px] font-mono border border-white/15">
                        {article.category}
                      </span>
                    </div>

                    {/* Floating Quick Action Buttons (Admin Only) */}
                    {adminToken && (
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-md p-1 rounded-xl border border-white/20 shadow-lg z-10">
                        <Link
                          href={`/createblog?id=${article._id}`}
                          onClick={(e) => e.stopPropagation()}
                          className="p-1 rounded-lg hover:bg-orange-500 text-white transition cursor-pointer inline-flex items-center justify-center"
                          title="Edit Article"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </Link>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setDeleteConfirmBlog(article);
                          }}
                          className="p-1 rounded-lg hover:bg-red-500 text-white transition cursor-pointer"
                          title="Delete Article"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/80 font-mono pointer-events-none z-10">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#2563EB]" />
                        {article.readTime}
                      </span>
                      <span>
                        {new Date(article.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <Link
                      href={`/blog/${article.slug || article._id}`}
                      className="block text-lg font-bold tracking-tight text-stone-900 dark:text-stone-100 group-hover:text-[#2563EB] transition-colors duration-200 cursor-pointer line-clamp-2 mb-2.5"
                    >
                      {article.title}
                    </Link>

                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 line-clamp-3 leading-relaxed mb-4">
                      {article.description || article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags?.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-[12px] font-bold bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 sm:px-6 py-4 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between bg-stone-50/50 dark:bg-stone-950/40">


                  {/* READ / VIEW ARTICLE BUTTON -> NAVIGATES TO /blog/[id] */}
                  <Link
                    href={`/blog/${article.slug || article._id}`}
                    className="flex items-center gap-1 text-xs font-bold text-[#2563EB] hover:text-orange-600 transition group-hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    <span>View Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* =========================================================
            VIEW ALL ARTICLES BOTTOM CTA
        ========================================================= */}
        <div className="mt-14 sm:mt-16 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#14B8A6] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#2563EB]/25 hover:shadow-[#2563EB]/45 border border-blue-400/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>View All Articles & Publications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>



      {/* =========================================================
          DELETE CONFIRMATION DIALOG
      ========================================================= */}
      <AnimatePresence>
        {deleteConfirmBlog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md rounded-3xl border border-red-500/30 bg-white dark:bg-[#151210] p-6 sm:p-8 shadow-2xl"
            >
              <div className="p-3 rounded-2xl bg-red-500/10 text-red-500 w-fit mb-4">
                <Trash2 className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                Delete Article?
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 mb-4 leading-relaxed">
                Are you sure you want to permanently delete:
                <br />
                <strong className="text-stone-900 dark:text-stone-200">
                  &ldquo;{deleteConfirmBlog.title}&rdquo;
                </strong>
                ? This action cannot be undone.
              </p>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setDeleteConfirmBlog(null)}
                  className="flex-1 py-2.5 rounded-xl border border-stone-300 dark:border-stone-800 text-stone-700 dark:text-stone-300 text-xs font-bold hover:bg-stone-100 dark:hover:bg-stone-900 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleConfirmDelete}
                  className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition shadow-lg shadow-red-600/30 cursor-pointer"
                >
                  Yes, Delete
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================
          TOAST FEEDBACK ALERTS
      ========================================================= */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] px-5 py-3 rounded-2xl shadow-2xl backdrop-blur-xl border flex items-center gap-2.5 text-xs sm:text-sm font-semibold ${toastMessage.type === "success"
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
    </section>
  );
}

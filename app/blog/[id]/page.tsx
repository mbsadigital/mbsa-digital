"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Check,
  Edit3,
  Trash2,
  Lock,
  Unlock,
  X,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Plus,
  Tag,
  AlertCircle
} from "lucide-react";
import { BlogPost, FALLBACK_BLOGS } from "@/lib/fallbackBlogs";
import {
  fetchBlogById,
  fetchBlogs,
  likeBlog,
  deleteBlog,
  getStoredAdminToken,
  loginAdmin
} from "@/lib/blogApi";
import { ArticleMarkdownRenderer } from "@/lib/markdownRenderer";

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const idOrSlug = (params?.id as string) || "";

  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [allBlogs, setAllBlogs] = useState<BlogPost[]>(FALLBACK_BLOGS);
  const [loading, setLoading] = useState(true);
  const [copiedLink, setCopiedLink] = useState(false);
  const [hasLikedLocally, setHasLikedLocally] = useState(false);
  const [, setLocalLikesCount] = useState<number>(0);

  // Admin Authentication State
  const [adminToken, setAdminToken] = useState<string | null>(null);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [adminPasswordInput, setAdminPasswordInput] = useState("");
  const [adminLoginError, setAdminLoginError] = useState("");
  const [adminLoginLoading, setAdminLoginLoading] = useState(false);

  // Delete Confirmation Modal State
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const showToast = (text: string, type: "success" | "error" = "success") => {
    setToastMessage({ text, type });
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Sync admin authentication token
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
      showToast("Admin session authenticated! Full CRUD enabled.", "success");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Invalid admin password";
      setAdminLoginError(msg);
    } finally {
      setAdminLoginLoading(false);
    }
  };

  // Handle Delete Article
  const handleConfirmDelete = async () => {
    if (!blog) return;

    try {
      await deleteBlog(blog._id, adminToken || undefined);
      showToast("Article deleted successfully. Redirecting to blog...", "success");
      setDeleteConfirmOpen(false);
      setTimeout(() => {
        router.push("/blog");
      }, 1000);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to delete article";
      showToast(msg, "error");
    }
  };

  // Scroll Progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Load current blog and related blogs
  useEffect(() => {
    if (!idOrSlug) return;

    setLoading(true);

    const loadData = async () => {
      try {
        const data = await fetchBlogById(idOrSlug);
        setBlog(data);
        setLocalLikesCount(data.likes || 0);
      } catch {
        // Fallback matching
        const fallback =
          FALLBACK_BLOGS.find((b) => b._id === idOrSlug || b.slug === idOrSlug) ||
          FALLBACK_BLOGS[0];
        setBlog(fallback);
        setLocalLikesCount(fallback.likes || 0);
      } finally {
        setLoading(false);
      }

      // Also load all blogs for "Related Articles"
      try {
        const blogsRes = await fetchBlogs();
        if (blogsRes.blogs && blogsRes.blogs.length > 0) {
          setAllBlogs(blogsRes.blogs);
        }
      } catch {
        // Fallback preloaded
      }
    };

    loadData();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [idOrSlug]);

  // Handle Copy Link
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      });
    }
  };

  const handleShareLinkedIn = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
    }
  };

  // Related Articles (excluding current article)
  const relatedArticles = useMemo(() => {
    if (!blog) return [];
    return allBlogs
      .filter((b) => b._id !== blog._id && b.slug !== blog.slug)
      .slice(0, 3);
  }, [allBlogs, blog]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-[#EA580C] border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-semibold text-stone-600 dark:text-stone-300">
            Loading strategic article...
          </p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex flex-col items-center justify-center p-6 text-center">
        <BookOpen className="w-16 h-16 text-[#EA580C] mb-4 opacity-50" />
        <h2 className="text-2xl font-bold mb-2">Article Not Found</h2>
        <p className="text-stone-500 mb-6 max-w-md">
          The requested article could not be located in our directory. It may have been updated or removed.
        </p>
        <Link
          href="/blog"
          className="px-6 py-3 rounded-2xl bg-[#EA580C] text-white font-bold text-sm shadow-lg shadow-orange-600/30"
        >
          Return to All Articles
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(blog.createdAt || Date.now()).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#EA580C]/25 selection:text-[#EA580C] transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#9A3412] via-[#C2410C] to-[#EA580C] origin-left z-[9999] shadow-[0_0_12px_rgba(234,88,12,0.85)] pointer-events-none"
        style={{ scaleX }}
      />

      {/* Ambient background glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-10 right-1/4 h-[550px] w-[550px] rounded-full bg-[#EA580C]/[0.06] blur-[160px]" />
        <div className="absolute top-1/2 left-10 h-[450px] w-[450px] rounded-full bg-[#FB923C]/[0.04] blur-[150px]" />
      </div>

      {/* ARTICLE ACTION SUB-BAR */}
      <div className="pt-20 sm:pt-24 w-full border-b border-stone-200/80 dark:border-stone-800/80 bg-white/80 dark:bg-[#080706]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-100/70 dark:bg-stone-900/70 hover:border-orange-500/50 hover:bg-orange-500/10 text-stone-700 dark:text-stone-300 hover:text-[#EA580C] text-xs font-bold transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Articles</span>
            </Link>

            <div className="h-4 w-[1px] bg-stone-300 dark:bg-stone-800 hidden md:block" />

            {/* Breadcrumb snippet */}
            <div className="hidden md:flex items-center gap-2 text-xs text-stone-500 font-mono">
              <Link href="/" className="hover:text-stone-900 dark:hover:text-stone-100">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-stone-900 dark:hover:text-stone-100">Articles</Link>
              <span>/</span>
              <span className="text-[#EA580C] font-semibold">{blog.category}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Admin status / Login modal trigger */}
            {adminToken ? (
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-600/15 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-semibold">
                <Unlock className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>Admin</span>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setIsAdminLoginOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-300 dark:border-stone-800 hover:border-orange-500/50 hover:bg-orange-500/5 text-stone-700 dark:text-stone-300 text-xs font-semibold transition cursor-pointer"
                title="Admin Authentication"
              >
                <Lock className="w-3.5 h-3.5 text-stone-500" />
                <span>Admin Key</span>
              </button>
            )}

            {/* Write Article (Admin Only) */}
            {adminToken && (
              <Link
                href="/blog/create"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#EA580C] hover:bg-orange-600 text-white text-xs font-bold transition shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Write</span>
              </Link>
            )}

            {/* Edit & Delete Action Buttons (Admin Only) */}
            {adminToken && (
              <div className="flex items-center gap-1.5 pl-1.5 border-l border-stone-300 dark:border-stone-800">
                <Link
                  href={`/blog/create?id=${blog._id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-300 dark:border-stone-800 hover:border-orange-500/50 hover:bg-orange-500/10 text-stone-700 dark:text-stone-300 text-xs font-semibold transition"
                  title="Edit this article"
                >
                  <Edit3 className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span className="hidden sm:inline">Edit</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setDeleteConfirmOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-300 dark:border-stone-800 hover:border-red-500/50 hover:bg-red-500/10 text-stone-700 dark:text-stone-300 hover:text-red-500 text-xs font-semibold transition cursor-pointer"
                  title="Delete this article"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Delete</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ARTICLE CONTAINER */}
      <article className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
        {/* CATEGORY KICKER */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#EA580C] dark:bg-[#F97316]" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-[#EA580C] dark:text-[#F97316]">
            {blog.category}
          </span>
          <span className="text-xs font-mono text-stone-500 dark:text-stone-400">
            Case Study & Strategic Growth Blueprint
          </span>
        </div>

        {/* 1. FIRST: LARGE TITLE */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-stone-900 dark:text-white mb-5">
          {blog.title}
        </h1>

        {/* 2. BELOW TITLE: SMALL DATE, READ TIME (AND AUTHOR & ENGAGEMENT ACTIONS) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 mb-8 border-y border-stone-200/90 dark:border-stone-800/90">
          {/* Left: Author + Small Date + Small Read Time */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-stone-600 dark:text-stone-400 font-mono">
            {/* Author */}
            <div className="flex items-center gap-2 font-sans font-medium text-stone-900 dark:text-stone-100">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-orange-500/40 shrink-0">
                <Image
                  src={blog.author?.avatar || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80"}
                  alt={blog.author?.name || "Author"}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <span className="text-xs font-bold">
                {blog.author?.name || "Muskan Shekh"}
              </span>
            </div>

            <span className="text-stone-300 dark:text-stone-700">•</span>

            {/* Small Date */}
            <span className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400">
              <Calendar className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>{formattedDate}</span>
            </span>

            <span className="text-stone-300 dark:text-stone-700">•</span>

            {/* Small Read Time */}
            <span className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400">
              <Clock className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>{blog.readTime || "5 min read"}</span>
            </span>
          </div>

          {/* Right: Actions (Share, Copy Link) */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-orange-500/40 hover:bg-orange-500/5 text-stone-700 dark:text-stone-300 text-xs font-semibold transition cursor-pointer"
              title="Copy article link"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Share</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleShareLinkedIn}
              className="p-1.5 px-3 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-blue-600 hover:text-blue-600 transition text-xs font-bold cursor-pointer"
              title="Share on LinkedIn"
            >
              LinkedIn
            </button>
          </div>
        </div>

        {/* 3. BELOW DATE & READ TIME: LARGE IMAGE FOR BLOG */}
        <div className="relative w-full h-72 sm:h-96 md:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden border border-stone-200/90 dark:border-stone-800/90 shadow-2xl mb-10 group">
          <Image
            src={blog.imageUrl || blog.coverImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"}
            alt={blog.title}
            fill
            unoptimized
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between pointer-events-none">
            <span className="px-3 py-1.5 rounded-xl bg-black/65 backdrop-blur-md text-white/95 text-xs font-mono border border-white/20">
              {blog.category} Strategic Case Study
            </span>
            <span className="text-white/80 text-xs font-mono drop-shadow hidden sm:inline">
              Digital Marketing & SEO Blueprint
            </span>
          </div>
        </div>

        {/* 4. AFTER LARGE IMAGE: HIGHLIGHTED DESCRIPTION */}
        <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-orange-500/15 via-amber-500/10 to-orange-500/5 dark:from-orange-500/15 dark:via-amber-500/5 dark:to-transparent border-l-4 border-[#EA580C] shadow-sm mb-10">
          <div className="flex items-start gap-3.5 sm:gap-4">
            <div className="p-2.5 rounded-2xl bg-[#EA580C]/15 text-[#EA580C] shrink-0 mt-0.5">
              <ArrowRight className="w-5 h-5 text-[#EA580C]" />
            </div>
            <div className="space-y-1.5 flex-1">
              <p className="text-lg sm:text-xl font-medium italic leading-relaxed">
                &ldquo;{blog.description || blog.excerpt}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* 5. BELOW HIGHLIGHTED DESCRIPTION: CONTENT ARTICLE */}
        <div className="text-base sm:text-lg leading-relaxed mb-10">
          <ArticleMarkdownRenderer content={blog.content} />
        </div>

        {/* 6. AFTER CONTENT ARTICLE: TAGS */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="pt-8 pb-4 border-t border-stone-200 dark:border-stone-800">
            <div className="flex items-center gap-2 mb-3.5">
              <Tag className="w-4 h-4 text-[#EA580C]" />
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono">
                Tags & SEO Keywords
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-stone-100 dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800 hover:border-orange-500/40 hover:text-[#EA580C] transition cursor-default shadow-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* AUTHOR BIO CARD */}
        <div className="mt-12 p-8 rounded-3xl border border-orange-500/25 bg-white/70 dark:bg-[#120F0D]/90 backdrop-blur-xl shadow-xl flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#EA580C] shrink-0 shadow-lg">
            <Image
              src={blog.author?.avatar || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80"}
              alt={blog.author?.name || "Muskan Shekh"}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div>
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                  {blog.author?.name || "Muskan Shekh"}
                </h3>
                <p className="text-xs font-semibold text-[#EA580C]">
                  {blog.author?.role || "Digital Marketing & Technical SEO Specialist"}
                </p>
              </div>
              <Link
                href="/#contact"
                className="px-4 py-1.5 rounded-xl border border-[#EA580C] text-[#EA580C] hover:bg-[#EA580C] hover:text-white text-xs font-bold transition inline-block mx-auto sm:mx-0 w-fit"
              >
                Get In Touch
              </Link>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
              Specializing in organic search visibility, high-intent Google Ads architectures,
              and conversion-driven technical websites. Helping growth brands transform raw performance metrics into defensible revenue.
            </p>
          </div>
        </div>

        {/* RELATED ARTICLES SECTION */}
        {relatedArticles.length > 0 && (
          <div className="mt-16 pt-12 border-t border-stone-200 dark:border-stone-800">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#EA580C] font-mono">
                  Recommended Reading
                </p>
                <h3 className="text-2xl font-black tracking-tight text-stone-900 dark:text-white mt-1">
                  More Strategic Insights
                </h3>
              </div>
              <Link
                href="/blog"
                className="text-xs font-bold text-[#EA580C] hover:underline flex items-center gap-1"
              >
                <span>View All Articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel._id}
                  className="group rounded-3xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#120F0D] flex flex-col justify-between hover:border-orange-500/50 hover:shadow-xl transition-all duration-300"
                >
                  <div>
                    <Link
                      href={`/blog/${rel.slug || rel._id}`}
                      className="block relative h-40 w-full overflow-hidden"
                    >
                      <Image
                        src={rel.coverImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"}
                        alt={rel.title}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 rounded-lg bg-black/60 text-white text-[10px] font-mono">
                          {rel.category}
                        </span>
                      </div>
                    </Link>

                    <div className="p-5">
                      <div className="flex items-center gap-2 text-[11px] text-stone-500 font-mono mb-2">
                        <span>{rel.readTime}</span>
                      </div>
                      <Link
                        href={`/blog/${rel.slug || rel._id}`}
                        className="font-bold text-sm text-stone-900 dark:text-stone-100 group-hover:text-[#EA580C] transition line-clamp-2 leading-snug"
                      >
                        {rel.title}
                      </Link>
                      <p className="text-xs text-stone-500 mt-2 line-clamp-2 leading-relaxed">
                        {rel.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <Link
                      href={`/blog/${rel.slug || rel._id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#EA580C] hover:underline"
                    >
                      <span>Read Insight</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FOOTER NAVIGATION */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-stone-500 hover:text-[#EA580C] transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Knowledge Base Articles</span>
          </Link>
        </div>
      </article>

      {/* =========================================================
          ADMIN PASSCODE LOGIN MODAL
      ========================================================= */}
      <AnimatePresence>
        {isAdminLoginOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-sm rounded-3xl border border-orange-500/40 bg-white dark:bg-[#151210] p-6 sm:p-7 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setIsAdminLoginOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-900 text-stone-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-[#EA580C]/10 text-[#EA580C]">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
                    Admin Portal
                  </h3>
                  <p className="text-xs text-stone-500">
                    Enter admin passcode for CRUD access
                  </p>
                </div>
              </div>

              <form onSubmit={handleAdminLogin} className="space-y-4">
                <div>
                  <input
                    type="password"
                    value={adminPasswordInput}
                    onChange={(e) => setAdminPasswordInput(e.target.value)}
                    placeholder="Enter admin passcode"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 text-sm focus:outline-none focus:border-[#EA580C]"
                    autoFocus
                  />
                  <p className="text-[11px] text-stone-500 mt-1">Default development passcode: <code>admin123</code></p>
                </div>

                {adminLoginError && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{adminLoginError}</span>
                  </p>
                )}

                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsAdminLoginOpen(false)}
                    className="flex-1 py-2 rounded-xl border border-stone-300 dark:border-stone-800 text-xs font-semibold text-stone-600 dark:text-stone-400 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={adminLoginLoading}
                    className="flex-1 py-2 rounded-xl bg-[#EA580C] text-white text-xs font-bold hover:bg-orange-600 transition disabled:opacity-50 cursor-pointer"
                  >
                    {adminLoginLoading ? "Verifying..." : "Unlock Admin"}
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
        {deleteConfirmOpen && blog && (
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
                  &ldquo;{blog.title}&rdquo;
                </strong>
                ? This action cannot be undone.
              </p>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setDeleteConfirmOpen(false)}
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
    </div>
  );
}

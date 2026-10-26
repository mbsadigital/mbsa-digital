"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  Unlock,
  ShieldCheck,
  ShieldAlert,
  Plus,
  Edit3,
  Trash2,
  Eye,
  Clock,
  Calendar,
  ArrowLeft,
  ExternalLink,
  RefreshCw,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Search,
  Filter,
  LogOut,
  Layers,
  BookOpen,
  LayoutDashboard,
  FileText,
  PlusCircle,
  Menu,
  X,
  KeyRound,
  Terminal,
  Cpu,
  Globe,
  TrendingUp,
  Compass,
  Check,
  FolderKanban
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import DigitalEarth from "@/components/DigitalEarth";
import { BlogPost, FALLBACK_BLOGS, CATEGORIES, PRESET_COVERS } from "@/lib/fallbackBlogs";
import {
  fetchBlogs,
  deleteBlog,
  loginAdmin,
  getStoredAdminToken,
  removeAdminToken
} from "@/lib/blogApi";

export default function AdminPage() {
  const router = useRouter();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [checkingAuth, setCheckingAuth] = useState<boolean>(true);
  const [passcodeInput, setPasscodeInput] = useState<string>("");
  const [showPasscode, setShowPasscode] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string>("");
  const [loginLoading, setLoginLoading] = useState<boolean>(false);

  // Active Sidebar Navigation Tab: "overview" | "blogs" | "create"
  const [activeTab, setActiveTab] = useState<"overview" | "blogs" | "create">("overview");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);

  // Quick Draft Creator state (for Create Tab)
  const [quickTitle, setQuickTitle] = useState<string>("");
  const [quickCategory, setQuickCategory] = useState<string>("Technical SEO");

  // Blogs Data State
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loadingBlogs, setLoadingBlogs] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Delete Confirmation State
  const [deleteConfirmBlog, setDeleteConfirmBlog] = useState<BlogPost | null>(null);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  // Toast Feedback State
  const [toastMessage, setToastMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const showToast = (text: string, type: "success" | "error" = "success") => {
    setToastMessage({ text, type });
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Check stored admin token on mount
  useEffect(() => {
    const token = getStoredAdminToken();
    if (token) {
      setIsAuthenticated(true);
    }
    setCheckingAuth(false);
  }, []);

  // Fetch blogs when authenticated
  const loadBlogs = useCallback(async () => {
    setLoadingBlogs(true);
    try {
      const data = await fetchBlogs();
      if (data.blogs && data.blogs.length > 0) {
        setBlogs(data.blogs);
      } else {
        setBlogs(FALLBACK_BLOGS);
      }
    } catch {
      setBlogs(FALLBACK_BLOGS);
    } finally {
      setLoadingBlogs(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadBlogs();
    }
  }, [isAuthenticated, loadBlogs]);

  // Handle Admin Passcode Login
  const handlePasscodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);

    try {
      const res = await loginAdmin(passcodeInput.trim());
      if (res.success) {
        setIsAuthenticated(true);
        setPasscodeInput("");
        showToast("Admin session unlocked! Dashboard ready.", "success");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Incorrect admin passcode. Access denied.";
      setLoginError(msg);
    } finally {
      setLoginLoading(false);
    }
  };

  // Handle Logout
  const handleLogout = () => {
    removeAdminToken();
    setIsAuthenticated(false);
    setMobileSidebarOpen(false);
    showToast("Signed out of Admin Dashboard.", "success");
  };

  // Handle Delete Blog
  const handleConfirmDelete = async () => {
    if (!deleteConfirmBlog) return;
    setIsDeleting(true);

    try {
      const token = getStoredAdminToken();
      await deleteBlog(deleteConfirmBlog._id, token || undefined);
      setBlogs((prev) => prev.filter((b) => b._id !== deleteConfirmBlog._id));
      showToast(`Article "${deleteConfirmBlog.title}" deleted successfully.`, "success");
      setDeleteConfirmBlog(null);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to delete article";
      showToast(msg, "error");
    } finally {
      setIsDeleting(false);
    }
  };

  // Filtered blogs list
  const filteredBlogs = useMemo(() => {
    let result = [...blogs];

    if (selectedCategory !== "All") {
      result = result.filter((b) => b.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.description?.toLowerCase().includes(q) ||
          b.excerpt?.toLowerCase().includes(q) ||
          b.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [blogs, selectedCategory, searchQuery]);

  // Blog Statistics
  const stats = useMemo(() => {
    const total = blogs.length;
    const featured = blogs.filter((b) => b.featured).length;
    const totalCategories = new Set(blogs.map((b) => b.category)).size;

    // Categories breakdown
    const categoryCounts: Record<string, number> = {};
    blogs.forEach((b) => {
      const cat = b.category || "General";
      categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
    });

    return { total, featured, totalCategories, categoryCounts };
  }, [blogs]);

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-[#070605] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 border-2 border-[#EA580C]/40 border-t-[#EA580C] rounded-full animate-spin" />
            <div className="absolute inset-0 rounded-full bg-[#EA580C]/20 blur-md animate-pulse" />
          </div>
          <p className="text-xs font-mono text-stone-400 uppercase tracking-widest">
            Initializing Secure Gateway...
          </p>
        </div>
      </div>
    );
  }

  /* ============================================================
     VIEW 1: PASSCODE LOGIN SCREEN WITH DIGITAL CYBER MATRIX EFFECT
  ============================================================ */
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#080706] text-stone-900 dark:text-white flex flex-col justify-between relative overflow-hidden select-none font-sans transition-colors duration-500">
        {/* 3D HOLOGRAPHIC DIGITAL EARTH BACKGROUND CANVAS */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          {/* Animated 3D Digital Earth Canvas */}
          <DigitalEarth />

          {/* Ambient Cyber Grid Overlay */}
          <div
            className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08] transition-opacity duration-500"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(234, 88, 12, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(234, 88, 12, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px"
            }}
          />

          {/* Subtle Atmospheric Vignette - Allows Colorful Digital Earth to Shine Brightly */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/40 via-transparent to-[#FAF8F5]/30 dark:from-[#080706]/50 dark:via-transparent dark:to-[#080706]/40 transition-colors duration-500 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/30 via-transparent to-[#FAF8F5]/30 dark:from-[#080706]/40 dark:via-transparent dark:to-[#080706]/40 transition-colors duration-500 pointer-events-none" />

          {/* Radar Scanning Line */}
          <motion.div
            animate={{ y: ["0vh", "100vh"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#EA580C] to-transparent opacity-25 dark:opacity-30 shadow-[0_0_12px_#EA580C]"
          />

          {/* Global Node Telemetry Ticker (Top & Bottom) */}
          <div className="absolute bottom-3 inset-x-0 flex items-center justify-between px-6 text-[10px] font-mono text-stone-500 dark:text-orange-400/40 pointer-events-none transition-colors duration-500">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-ping" />
              <span>DIGITAL EARTH GLOBAL NODES: SF • NY • LON • FRA • TYO • SIN • BOM • DXB</span>
            </span>
            <span className="hidden sm:inline">AES-256 ENCRYPTED SESSION GATEWAY</span>
          </div>
        </div>

        {/* TOP BAR */}
        <header className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-600 dark:text-stone-400 hover:text-[#EA580C] dark:hover:text-[#EA580C] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 dark:bg-orange-950/40 border border-orange-500/25 text-[11px] font-mono text-[#EA580C] dark:text-orange-400 shadow-sm transition-colors duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-ping" />
              <span>SECURE ACCESS GATEWAY</span>
            </div>
            <ThemeToggle />
          </div>
        </header>

        {/* CENTERED PASSCODE CARD */}
        <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-10 sm:py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md rounded-3xl border border-stone-200/80 dark:border-orange-500/35 bg-white/75 dark:bg-[#0c0a09]/75 backdrop-blur-xl p-7 sm:p-9 shadow-[0_20px_60px_rgba(234,88,12,0.15)] dark:shadow-[0_25px_80px_rgba(0,0,0,0.95)] relative transition-all duration-500"
          >
            {/* Glowing Corner Accents for Cyber Aesthetics */}
            <div className="absolute -top-[1px] -left-[1px] w-6 h-6 border-t-2 border-l-2 border-[#EA580C] rounded-tl-2xl pointer-events-none" />
            <div className="absolute -bottom-[1px] -right-[1px] w-6 h-6 border-b-2 border-r-2 border-[#EA580C] rounded-br-2xl pointer-events-none" />

            {/* Header / Security Badge */}
            <div className="flex flex-col items-center text-center mb-7">
              <div className="relative mb-5">
                <div className="absolute inset-0 rounded-2xl bg-[#EA580C] blur-xl opacity-40 dark:opacity-50 animate-pulse" />
                <div className="relative p-4 rounded-2xl bg-gradient-to-br from-[#EA580C] via-[#C2410C] to-[#9A3412] text-white shadow-2xl shadow-orange-600/40 border border-orange-400/30">
                  <ShieldCheck className="w-8 h-8" />
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-px bg-[#EA580C]" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.28em] text-[#EA580C]">
                  Administrative Terminal
                </span>
                <span className="w-8 h-px bg-[#EA580C]" />
              </div>

              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900 dark:text-white transition-colors">
                Admin Passcode
              </h1>
              <p className="mt-2 text-xs text-stone-600 dark:text-stone-400 max-w-xs leading-relaxed transition-colors">
                Provide your administrative authorization passcode to unlock the management dashboard.
              </p>
            </div>

            {/* Passcode Form */}
            <form onSubmit={handlePasscodeSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-2 transition-colors">
                  Admin Master Passcode
                </label>
                <div className="relative">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 dark:text-stone-500">
                    <KeyRound className="w-4 h-4 text-[#EA580C]" />
                  </div>
                  <input
                    type={showPasscode ? "text" : "password"}
                    value={passcodeInput}
                    onChange={(e) => setPasscodeInput(e.target.value)}
                    placeholder="Enter admin passcode"
                    required
                    autoFocus
                    className="w-full pl-10 pr-14 py-3 rounded-2xl text-sm bg-stone-100/90 dark:bg-black/60 border border-stone-300 dark:border-stone-800 text-stone-900 dark:text-white placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-orange-500/20 transition-all font-mono shadow-inner"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasscode(!showPasscode)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white transition px-1.5 py-0.5 rounded cursor-pointer"
                  >
                    {showPasscode ? "Hide" : "Show"}
                  </button>
                </div>

                <div className="flex items-center justify-between mt-2.5 text-[11px] text-stone-500 dark:text-stone-400 transition-colors">
                  <span className="flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-[#EA580C]" />
                    <span>Default key:</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setPasscodeInput("admin123")}
                    className="px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 hover:border-orange-500/50 font-mono text-[#EA580C] hover:text-orange-600 dark:hover:text-orange-400 text-[11px] transition cursor-pointer shadow-sm"
                    title="Click to auto-fill passcode"
                  >
                    admin123 (Auto-fill)
                  </button>
                </div>
              </div>

              {loginError && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-500/40 text-red-600 dark:text-red-300 text-xs flex items-center gap-2 transition-colors"
                >
                  <AlertCircle className="w-4 h-4 text-red-500 dark:text-red-400 shrink-0" />
                  <span>{loginError}</span>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#EA580C] bg-[length:200%_auto] hover:bg-right text-white text-sm font-bold shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 cursor-pointer flex items-center justify-center gap-2 mt-2"
              >
                {loginLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Authenticating Node...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Access Admin Dashboard</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-stone-200 dark:border-stone-800/80 flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-400 transition-colors">
              <span className="flex items-center gap-1">
                <Cpu className="w-3 h-3 text-stone-400 dark:text-stone-500" />
                <span>Next.js App Router</span>
              </span>
              <span>Encrypted Session</span>
            </div>
          </motion.div>
        </main>

        {/* FOOTER */}
        <footer className="relative z-10 py-5 text-center text-xs text-stone-500 dark:text-stone-500 font-mono transition-colors">
          <span>PORTFOLIO ADMIN COMMAND CONSOLE • 2026</span>
        </footer>
      </div>
    );
  }

  /* ============================================================
     VIEW 2: ADMIN DASHBOARD WITH LEFT-SIDE PANEL (SIDEBAR)
  ============================================================ */
  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#080706] text-stone-900 dark:text-white transition-colors duration-500 flex flex-col md:flex-row">
      {/* Background Ambience */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 right-1/4 h-[550px] w-[550px] rounded-full bg-[#EA580C]/[0.05] blur-[160px]" />
        <div className="absolute bottom-10 left-10 h-[450px] w-[450px] rounded-full bg-[#FB923C]/[0.03] blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(rgba(234, 88, 12, 0.4) 1px, transparent 1px)",
            backgroundSize: "28px 28px"
          }}
        />
      </div>

      {/* =========================================================
          LEFT-SIDE PANEL / SIDEBAR (DESKTOP + RESPONSIVE MOBILE DRAWER)
      ========================================================= */}
      {/* Mobile Drawer Backdrop */}
      {mobileSidebarOpen && (
        <div
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
        />
      )}

      <aside
        className={`fixed md:sticky top-0 left-0 z-50 md:z-30 h-screen w-72 shrink-0 border-r border-stone-200/80 dark:border-stone-800/80 bg-white/95 dark:bg-[#0c0a09]/95 backdrop-blur-2xl p-5 flex flex-col justify-between transition-transform duration-300 ease-in-out ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
      >
        <div>
          {/* Sidebar Top: Brand & Close (mobile) */}
          <div className="flex items-center justify-between pb-5 mb-5 border-b border-stone-200/80 dark:border-stone-800/80">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#C2410C] text-white shadow-md shadow-orange-600/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm font-black tracking-tight text-stone-900 dark:text-white">
                  Admin Panel
                </h2>
                <span className="flex items-center gap-1.5 text-[10px] text-emerald-600 dark:text-emerald-400 font-mono font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Authenticated
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMobileSidebarOpen(false)}
              className="p-1.5 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-500 md:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items (Overview, Blog View, Create, Live Site) */}
          <nav className="space-y-1.5">
            {/* 1. Overview Tab */}
            <button
              type="button"
              onClick={() => {
                setActiveTab("overview");
                setMobileSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${activeTab === "overview"
                  ? "bg-[#EA580C] text-white shadow-md shadow-orange-500/25"
                  : "text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900 hover:text-stone-900 dark:hover:text-white"
                }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Overview</span>
            </button>

            {/* 2. Blog View Tab */}
            <button
              type="button"
              onClick={() => {
                setActiveTab("blogs");
                setMobileSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${activeTab === "blogs"
                  ? "bg-[#EA580C] text-white shadow-md shadow-orange-500/25"
                  : "text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900 hover:text-stone-900 dark:hover:text-white"
                }`}
            >
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4" />
                <span>Blog View &amp; Catalog</span>
              </div>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${activeTab === "blogs"
                    ? "bg-white/20 text-white"
                    : "bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400"
                  }`}
              >
                {blogs.length}
              </span>
            </button>

            {/* 3. Create Blog Tab / Direct Editor Navigation */}
            <Link
              href="/blog/create"
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900 hover:text-[#EA580C] dark:hover:text-[#F97316] transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <PlusCircle className="w-4 h-4 text-[#EA580C]" />
                <span>Create New Blog</span>
              </div>
              <span className="text-[10px] font-mono uppercase bg-orange-500/10 text-[#EA580C] px-2 py-0.5 rounded-md">
                Studio
              </span>
            </Link>

            {/* 4. Live Public Blog */}
            <Link
              href="/showblog"
              target="_blank"
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-bold text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900 hover:text-stone-900 dark:hover:text-white transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4" />
                <span>Live Public Site</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </Link>
          </nav>
        </div>

        {/* Sidebar Bottom: User Session & LOGOUT OPTION */}
        <div className="pt-4 border-t border-stone-200/80 dark:border-stone-800/80 space-y-3">
          {/* User Profile Info */}
          <div className="p-3 rounded-2xl bg-stone-100/70 dark:bg-stone-900/70 border border-stone-200/70 dark:border-stone-800/70 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#EA580C] text-white flex items-center justify-center font-bold text-xs shadow-sm">
              AD
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-stone-900 dark:text-white truncate">
                Super Administrator
              </p>
              <p className="text-[10px] text-stone-500 font-mono truncate">
                admin@portfolio.local
              </p>
            </div>
          </div>

          {/* Prominent Sidebar Logout Button */}
          <button
            type="button"
            onClick={handleLogout}
            className="w-full py-2.5 px-3.5 rounded-2xl bg-red-500/10 hover:bg-red-600 border border-red-500/20 hover:border-red-600 text-red-600 dark:text-red-400 hover:text-white text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
            title="Log out of the admin panel"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out &amp; Lock</span>
          </button>
        </div>
      </aside>

      {/* =========================================================
          MAIN DASHBOARD CONTENT AREA
      ========================================================= */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* TOP SUB-HEADER BAR */}
        <header className="sticky top-0 z-20 border-b border-stone-200/80 dark:border-stone-800/80 bg-white/80 dark:bg-[#080706]/85 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* Mobile Sidebar Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileSidebarOpen(true)}
                className="p-2 rounded-xl bg-stone-100 dark:bg-stone-900 text-stone-700 dark:text-stone-300 md:hidden"
              >
                <Menu className="w-5 h-5" />
              </button>

              <div>
                <h1 className="text-base sm:text-lg font-black tracking-tight text-stone-900 dark:text-white capitalize">
                  {activeTab === "overview" && "Dashboard Overview"}
                  {activeTab === "blogs" && "Article Inventory & Management"}
                  {activeTab === "create" && "Create New Publication"}
                </h1>
                <p className="text-[11px] text-stone-500 hidden sm:block">
                  Digital Portfolio Management Console
                </p>
              </div>
            </div>

            {/* Top Right Controls: Quick Create, Theme Toggle, Top Logout */}
            <div className="flex items-center gap-2.5">
              <ThemeToggle />

              <Link
                href="/blog/create"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#F97316] text-white text-xs font-bold shadow-md shadow-orange-500/20 hover:shadow-orange-500/35 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5 stroke-[3]" />
                <span>Write Article</span>
              </Link>

              {/* Header Logout Icon Button */}
              <button
                type="button"
                onClick={handleLogout}
                className="p-2 sm:px-3 sm:py-2 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-100/80 dark:bg-stone-900/80 text-stone-600 dark:text-stone-400 hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-500 transition text-xs font-semibold cursor-pointer flex items-center gap-1.5"
                title="Logout of admin session"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden lg:inline">Logout</span>
              </button>
            </div>
          </div>
        </header>

        {/* MAIN BODY CONTENT ACCORDING TO ACTIVE TAB */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          {/* =========================================================
              TAB 1: OVERVIEW TAB
          ========================================================= */}
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {/* Total Articles */}
                <div className="rounded-3xl border border-stone-200/80 dark:border-stone-800 bg-white/70 dark:bg-[#120F0D]/80 backdrop-blur-xl p-5 sm:p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-stone-500">Total Publications</span>
                    <div className="p-2.5 rounded-2xl bg-orange-500/10 text-[#EA580C]">
                      <BookOpen className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-3xl font-black tracking-tight text-stone-900 dark:text-white">
                    {stats.total}
                  </div>
                  <p className="mt-1 text-xs text-stone-500">Live articles in catalog</p>
                </div>

                {/* Categories Count */}
                <div className="rounded-3xl border border-stone-200/80 dark:border-stone-800 bg-white/70 dark:bg-[#120F0D]/80 backdrop-blur-xl p-5 sm:p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-stone-500">Categories</span>
                    <div className="p-2.5 rounded-2xl bg-blue-500/10 text-blue-500">
                      <Layers className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-3xl font-black tracking-tight text-stone-900 dark:text-white">
                    {stats.totalCategories}
                  </div>
                  <p className="mt-1 text-xs text-stone-500">Active editorial topics</p>
                </div>

                {/* Featured Articles */}
                <div className="rounded-3xl border border-stone-200/80 dark:border-stone-800 bg-white/70 dark:bg-[#120F0D]/80 backdrop-blur-xl p-5 sm:p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-stone-500">Featured Insights</span>
                    <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-500">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-3xl font-black tracking-tight text-stone-900 dark:text-white">
                    {stats.featured}
                  </div>
                  <p className="mt-1 text-xs text-stone-500">Hero banner publications</p>
                </div>
              </div>

              {/* Quick Launchpad & Category Distribution */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Column: Quick Launch Actions */}
                <div className="lg:col-span-7 rounded-3xl border border-stone-200/80 dark:border-stone-800 bg-white/70 dark:bg-[#120F0D]/80 backdrop-blur-xl p-6 shadow-sm">
                  <h3 className="text-sm font-bold text-stone-900 dark:text-white mb-2">
                    Quick Editorial Actions
                  </h3>
                  <p className="text-xs text-stone-500 mb-5 leading-relaxed">
                    Instantly draft new content or manage published items directly from this portal.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <Link
                      href="/blog/create"
                      className="p-4 rounded-2xl border border-orange-500/30 bg-orange-500/5 hover:bg-orange-500/10 transition-all flex flex-col justify-between group cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 rounded-xl bg-[#EA580C] text-white">
                          <Plus className="w-4 h-4 stroke-[3]" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#EA580C]">FULL STUDIO</span>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-stone-900 dark:text-white group-hover:text-[#EA580C] transition">
                          Write New Article
                        </h4>
                        <p className="text-[11px] text-stone-500 mt-1">
                          Rich text, markdown, presets &amp; SEO tags
                        </p>
                      </div>
                    </Link>

                    <button
                      type="button"
                      onClick={() => setActiveTab("blogs")}
                      className="p-4 rounded-2xl border border-stone-200 dark:border-stone-800 hover:border-orange-500/40 bg-stone-50 dark:bg-stone-900/50 hover:bg-stone-100 dark:hover:bg-stone-900 transition-all flex flex-col justify-between group cursor-pointer text-left"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 rounded-xl bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
                          <FileText className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono text-stone-400">MANAGEMENT</span>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-stone-900 dark:text-white group-hover:text-[#EA580C] transition">
                          Browse &amp; Edit Articles
                        </h4>
                        <p className="text-[11px] text-stone-500 mt-1">
                          Inspect all {blogs.length} articles with full CRUD
                        </p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Right Column: Category Distribution */}
                <div className="lg:col-span-5 rounded-3xl border border-stone-200/80 dark:border-stone-800 bg-white/70 dark:bg-[#120F0D]/80 backdrop-blur-xl p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-stone-900 dark:text-white mb-2">
                      Topic Distribution
                    </h3>
                    <p className="text-xs text-stone-500 mb-4">
                      Active publications sorted by strategic category.
                    </p>

                    <div className="space-y-2.5">
                      {Object.entries(stats.categoryCounts).map(([cat, count]) => (
                        <div key={cat} className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-stone-700 dark:text-stone-300 truncate max-w-[200px]">
                            {cat}
                          </span>
                          <span className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-800">
                            {count} {count === 1 ? "article" : "articles"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory("All");
                      setActiveTab("blogs");
                    }}
                    className="mt-5 text-xs font-bold text-[#EA580C] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>View all filtered in catalog</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Recent Articles Table Preview */}
              <div className="rounded-3xl border border-stone-200/80 dark:border-stone-800 bg-white/70 dark:bg-[#120F0D]/80 backdrop-blur-xl overflow-hidden shadow-sm">
                <div className="p-5 sm:p-6 border-b border-stone-200/80 dark:border-stone-800 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-stone-900 dark:text-white">
                      Recent Publications
                    </h3>
                    <p className="text-xs text-stone-500">
                      Most recently added or updated articles.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveTab("blogs")}
                    className="text-xs font-bold text-[#EA580C] hover:underline cursor-pointer"
                  >
                    View All ({blogs.length})
                  </button>
                </div>

                <div className="divide-y divide-stone-200/80 dark:divide-stone-800">
                  {blogs.slice(0, 4).map((blog) => (
                    <div
                      key={blog._id}
                      className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-stone-50 dark:hover:bg-stone-900/30 transition"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-stone-200 dark:border-stone-800">
                          <Image
                            src={blog.coverImage || blog.imageUrl || PRESET_COVERS[0].url}
                            alt={blog.title}
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white truncate">
                            {blog.title}
                          </h4>
                          <div className="flex items-center gap-2 text-[11px] text-stone-500 font-mono mt-0.5">
                            <span className="text-[#EA580C]">{blog.category}</span>
                            <span>•</span>
                            <span>
                              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric"
                              })}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <Link
                          href={`/blog/create?id=${blog._id}`}
                          className="p-1.5 rounded-lg bg-stone-100 dark:bg-stone-900 hover:bg-[#EA580C] hover:text-white text-stone-700 dark:text-stone-300 text-xs font-semibold transition"
                          title="Edit article"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          href={`/blog/${blog.slug || blog._id}`}
                          target="_blank"
                          className="p-1.5 rounded-lg bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-semibold transition"
                          title="Preview article"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* =========================================================
              TAB 2: BLOG VIEW & FULL CATALOG (CRUD: CREATE, EDIT, DELETE)
          ========================================================= */}
          {activeTab === "blogs" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Search, Category Filter & Refresh Controls */}
              <div className="rounded-3xl border border-stone-200/80 dark:border-stone-800 bg-white/70 dark:bg-[#120F0D]/80 backdrop-blur-xl p-4 sm:p-5 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Search Input */}
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search publications by title, excerpt, or tags..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs sm:text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:border-[#EA580C]"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Category Filter & Refresh */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Filter className="w-3.5 h-3.5 text-stone-400" />
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-3 py-2 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs sm:text-sm font-medium text-stone-800 dark:text-stone-200 focus:outline-none focus:border-[#EA580C] cursor-pointer"
                      >
                        <option value="All">All Categories ({blogs.length})</option>
                        {CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="button"
                      onClick={loadBlogs}
                      disabled={loadingBlogs}
                      className="p-2.5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 transition cursor-pointer"
                      title="Refresh article data"
                    >
                      <RefreshCw className={`w-4 h-4 ${loadingBlogs ? "animate-spin" : ""}`} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Articles Catalog Table */}
              <div className="rounded-3xl border border-stone-200/80 dark:border-stone-800 bg-white/70 dark:bg-[#120F0D]/80 backdrop-blur-xl overflow-hidden shadow-sm">
                <div className="p-5 sm:p-6 border-b border-stone-200/80 dark:border-stone-800 flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-base font-bold text-stone-900 dark:text-white">
                      All Publications ({filteredBlogs.length})
                    </h3>
                    <p className="text-xs text-stone-500">
                      Edit content in the studio or permanently delete entries.
                    </p>
                  </div>

                  <Link
                    href="/blog/create"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#EA580C] hover:bg-orange-600 text-white text-xs font-bold transition shadow-sm cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Create Blog</span>
                  </Link>
                </div>

                {loadingBlogs ? (
                  <div className="py-20 flex flex-col items-center justify-center gap-3">
                    <div className="w-8 h-8 border-3 border-[#EA580C] border-t-transparent rounded-full animate-spin" />
                    <p className="text-xs font-mono text-stone-500">Retrieving articles...</p>
                  </div>
                ) : filteredBlogs.length === 0 ? (
                  <div className="py-16 px-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-stone-100 dark:bg-stone-900 flex items-center justify-center mx-auto mb-3 text-stone-400">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-bold text-stone-800 dark:text-stone-200 mb-1">
                      No publications found
                    </h4>
                    <p className="text-xs text-stone-500 max-w-sm mx-auto mb-4">
                      No articles match your current search query or filter.
                    </p>
                    <Link
                      href="/blog/create"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#EA580C] text-white text-xs font-bold hover:bg-orange-600 transition"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Write First Article</span>
                    </Link>
                  </div>
                ) : (
                  <div className="divide-y divide-stone-200/80 dark:divide-stone-800">
                    {filteredBlogs.map((blog) => (
                      <div
                        key={blog._id}
                        className="p-4 sm:p-6 hover:bg-stone-50/60 dark:hover:bg-stone-900/30 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                      >
                        {/* Thumbnail & Title/Info */}
                        <div className="flex items-start gap-4 flex-1 min-w-0">
                          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900">
                            <Image
                              src={blog.coverImage || blog.imageUrl || PRESET_COVERS[0].url}
                              alt={blog.title}
                              fill
                              unoptimized
                              className="object-cover"
                            />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-orange-500/10 text-[#EA580C] border border-orange-500/20">
                                {blog.category}
                              </span>
                              {blog.featured && (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 flex items-center gap-1">
                                  <Sparkles className="w-2.5 h-2.5" />
                                  Featured
                                </span>
                              )}
                              <span className="text-[11px] text-stone-500 font-mono">
                                {blog.readTime || "5 min read"}
                              </span>
                            </div>

                            <h4 className="text-sm sm:text-base font-bold text-stone-900 dark:text-white line-clamp-1 mb-1">
                              {blog.title}
                            </h4>

                            <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed mb-2">
                              {blog.description || blog.excerpt}
                            </p>

                            <div className="flex items-center gap-4 text-[11px] text-stone-500 font-mono">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3 text-stone-400" />
                                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric"
                                })}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Actions (View, Edit, Delete) */}
                        <div className="flex items-center gap-2 shrink-0 self-end md:self-center pt-2 md:pt-0">
                          {/* Preview Live View */}
                          <Link
                            href={`/blog/${blog.slug || blog._id}`}
                            target="_blank"
                            className="p-2 sm:px-3 sm:py-2 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-100/70 dark:bg-stone-900/70 text-stone-700 dark:text-stone-300 hover:text-[#EA580C] text-xs font-semibold transition flex items-center gap-1.5"
                            title="Preview article"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Preview</span>
                          </Link>

                          {/* Edit Article -> NAVIGATES TO /blog/create?id=... */}
                          <Link
                            href={`/blog/create?id=${blog._id}`}
                            className="p-2 sm:px-3.5 sm:py-2 rounded-xl bg-stone-100 dark:bg-stone-900 hover:bg-[#EA580C] text-stone-800 dark:text-stone-200 hover:text-white border border-stone-200 dark:border-stone-800 hover:border-[#EA580C] text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                            title="Edit in full studio"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                            <span>Edit</span>
                          </Link>

                          {/* Delete Article */}
                          <button
                            type="button"
                            onClick={() => setDeleteConfirmBlog(blog)}
                            className="p-2 sm:px-3.5 sm:py-2 rounded-xl bg-red-500/10 hover:bg-red-600 text-red-600 dark:text-red-400 hover:text-white border border-red-500/20 hover:border-red-600 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                            title="Delete article"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* =========================================================
              TAB 3: CREATE BLOG LAUNCHPAD
          ========================================================= */}
          {activeTab === "create" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto space-y-6"
            >
              <div className="rounded-3xl border border-stone-200/80 dark:border-stone-800 bg-white/70 dark:bg-[#120F0D]/80 backdrop-blur-xl p-6 sm:p-8 shadow-sm text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#EA580C]/10 text-[#EA580C] flex items-center justify-center mx-auto mb-4">
                  <PlusCircle className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-stone-900 dark:text-white mb-2">
                  Launch Editorial Studio
                </h3>
                <p className="text-xs text-stone-500 max-w-md mx-auto mb-6 leading-relaxed">
                  Our comprehensive editorial studio features live Markdown preview, Microsoft Word ribbon formatting, SEO meta tags, cover presets, and canonical URLs.
                </p>

                <Link
                  href="/blog/create"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#EA580C] to-[#F97316] text-white text-sm font-bold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4 stroke-[3]" />
                  <span>Open Full Article Editor</span>
                </Link>
              </div>

              {/* Quick Template Presets */}
              <div className="rounded-3xl border border-stone-200/80 dark:border-stone-800 bg-white/70 dark:bg-[#120F0D]/80 backdrop-blur-xl p-6 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-4">
                  Quick Publication Guidelines
                </h4>
                <ul className="space-y-3 text-xs text-stone-600 dark:text-stone-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                    <span><strong>High Intent SEO:</strong> Include target keywords in Title, First Paragraph, and H2 headers.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                    <span><strong>Canonical URLs:</strong> Auto-generated from title slugs for optimal search engine indexing.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                    <span><strong>Live Sync:</strong> Changes saved via the editor instantly update the MongoDB database.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </main>
      </div>

      {/* =========================================================
          DELETE CONFIRMATION MODAL
      ========================================================= */}
      <AnimatePresence>
        {deleteConfirmBlog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
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
                Delete Article Permanently?
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 mb-4 leading-relaxed">
                Are you sure you want to permanently delete:
                <br />
                <strong className="text-stone-900 dark:text-stone-200">
                  &ldquo;{deleteConfirmBlog.title}&rdquo;
                </strong>
                ? This action will remove the article from the database and cannot be undone.
              </p>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  disabled={isDeleting}
                  onClick={() => setDeleteConfirmBlog(null)}
                  className="flex-1 py-2.5 rounded-xl border border-stone-300 dark:border-stone-800 text-stone-700 dark:text-stone-300 text-xs font-bold hover:bg-stone-100 dark:hover:bg-stone-900 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={isDeleting}
                  onClick={handleConfirmDelete}
                  className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition shadow-lg shadow-red-600/30 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isDeleting ? "Deleting..." : "Yes, Delete"}
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

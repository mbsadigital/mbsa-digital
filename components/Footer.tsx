"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUp,
  ArrowRight,
  Mail,
  Phone,
  Clock,
  Sparkles,
  ChevronRight,
  ChevronDown,
  Copy,
  Check,
  Search,
  Target,
  BarChart3,
  Share2,
  Code2,
  Rocket,
  Layers,
} from "lucide-react";
import { SERVICES_DATA } from "@/lib/servicesData";

/* =========================================================
   DUAL-MARKET FLAG ICONS
========================================================= */

function IndiaFlag({ className = "w-4 h-3" }: { className?: string }) {
  return (
    <span className={`inline-block rounded-xs overflow-hidden shadow-xs ring-1 ring-black/10 shrink-0 ${className}`}>
      <svg viewBox="0 0 640 480" className="w-full h-full block" aria-hidden="true">
        <path fill="#FF9933" d="M0 0h640v160H0z" />
        <path fill="#FFFFFF" d="M0 160h640v160H0z" />
        <path fill="#128807" d="M0 320h640v160H0z" />
        <circle cx="320" cy="240" r="38" fill="#000080" />
        <circle cx="320" cy="240" r="30" fill="#FFFFFF" />
        <circle cx="320" cy="240" r="8" fill="#000080" />
      </svg>
    </span>
  );
}

function UKFlag({ className = "w-4 h-3" }: { className?: string }) {
  return (
    <span className={`inline-block rounded-xs overflow-hidden shadow-xs ring-1 ring-black/10 shrink-0 ${className}`}>
      <svg viewBox="0 0 60 30" className="w-full h-full block" aria-hidden="true">
        <clipPath id="uk-flag-clip-footer-best">
          <path d="M0 0v30h60V0z" />
        </clipPath>
        <path d="M0 0v30h60V0z" fill="#012169" />
        <path d="M0 0l60 30m0-30L0 30" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M0 0l60 30m0-30L0 30" clipPath="url(#uk-flag-clip-footer-best)" stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0v30M0 15h60" stroke="#FFFFFF" strokeWidth="10" />
        <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
      </svg>
    </span>
  );
}

/* =========================================================
   BRANDED SOCIAL SVG ICONS
========================================================= */

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#0A66C2"
        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14z"
      />
      <path
        fill="#ffffff"
        d="M18.5 18.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z"
      />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <radialGradient id="ig-radial-footer-best" cx="20%" cy="100%" r="130%">
          <stop offset="0%" stopColor="#ffda77" />
          <stop offset="10%" stopColor="#fcae46" />
          <stop offset="35%" stopColor="#f44e3f" />
          <stop offset="60%" stopColor="#e1306c" />
          <stop offset="100%" stopColor="#833ab4" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#ig-radial-footer-best)" />
      <path
        fill="#ffffff"
        d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.2-8.38a1.18 1.18 0 1 1-2.36 0 1.18 1.18 0 0 1 2.36 0zM17.8 4H6.2A2.2 2.2 0 0 0 4 6.2v11.6A2.2 2.2 0 0 0 6.2 20h11.6a2.2 2.2 0 0 0 2.2-2.2V6.2A2.2 2.2 0 0 0 17.8 4zm.4 13.8a.4.4 0 0 1-.4.4H6.2a.4.4 0 0 1-.4-.4V6.2a.4.4 0 0 1 .4-.4h11.6a.4.4 0 0 1 .4.4v11.6z"
      />
    </svg>
  );
}

function GoogleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27a7.22 7.22 0 0 1 0-4.54V6.6H1.25a11.98 11.98 0 0 0 0 10.8l4.03-3.13z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.6l4.03 3.13c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

function GmailIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M2.5 19.5h3v-9.5l-3-2.25v11.75z" />
      <path fill="#34A853" d="M18.5 19.5h3v-11.75l-3 2.25v9.5z" />
      <path fill="#C5221F" d="M12 12.825L5.5 7.75v2.25L12 15l6.5-5V7.75L12 12.825z" />
      <path fill="#EA4335" d="M2.5 7.75c0-1.79 1.46-3.25 3.25-3.25h.75v5.5L2.5 7.75z" />
      <path fill="#FBBC04" d="M17.5 4.5h.75c1.79 0 3.25 1.46 3.25 3.25l-4 2.25v-5.5z" />
      <path fill="#EA4335" d="M5.75 4.5h12.5v3.25L12 12.825 5.75 7.75V4.5z" />
    </svg>
  );
}

/* =========================================================
   6 CORE SERVICE CATEGORIES (CURATED & CLEAN)
========================================================= */

const SERVICE_CATEGORIES = [
  {
    id: "seo-ai-search",
    title: "SEO & AI Search",
    count: 7,
    icon: Search,
    color: "text-[#2563EB] dark:text-[#60A5FA]",
    flagship: "Technical SEO, Audit & GEO",
    href: "/services?cat=seo-ai-search",
  },
  {
    id: "paid-media",
    title: "Paid Media & PPC",
    count: 4,
    icon: Target,
    color: "text-teal-600 dark:text-teal-400",
    flagship: "Google & Meta Ads Scaling",
    href: "/services?cat=paid-media",
  },
  {
    id: "content-social",
    title: "Content, Social & PR",
    count: 6,
    icon: Share2,
    color: "text-indigo-600 dark:text-indigo-400",
    flagship: "Clusters, Link Building & WhatsApp",
    href: "/services?cat=content-social",
  },
  {
    id: "websites-creative",
    title: "Websites & Creative",
    count: 4,
    icon: Code2,
    color: "text-blue-600 dark:text-blue-400",
    flagship: "Wordpress , Shpify & E-Commerce",
    href: "/services?cat=websites-creative",
  },
  {
    id: "data-cro-automation",
    title: "Data, CRO & Telemetry",
    count: 3,
    icon: BarChart3,
    color: "text-emerald-600 dark:text-emerald-400",
    flagship: "GA4 Tracking & Conversion Rate",
    href: "/services?cat=data-cro-automation",
  },
  {
    id: "growth-solutions",
    title: "Growth Leadership",
    count: 1,
    icon: Rocket,
    color: "text-sky-600 dark:text-sky-400",
    flagship: "Fractional CMO Retainers",
    href: "/services?cat=growth-solutions",
  },
];

/* =========================================================
   MAIN FOOTER COMPONENT
========================================================= */

export default function Footer() {
  const pathname = usePathname();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  if (pathname === "/admin") {
    return null;
  }

  const isContactPage = pathname === "/contact";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("mbsadigitalsolutions@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#F8FAFC] dark:bg-[#0B1220] text-slate-900 dark:text-white transition-colors duration-500 border-t border-slate-200/90 dark:border-white/10 overflow-hidden font-[family-name:var(--font-plus-jakarta-sans)]">
      {/* Top illuminated blue-teal subtle beam line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-90 shadow-[0_0_24px_rgba(37,99,235,0.85)]" />

      {/* Atmospheric ambient backdrop lights */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/4 -translate-x-1/2 w-[580px] h-[280px] bg-[#2563EB]/[0.06] dark:bg-[#2563EB]/[0.10] blur-[150px]" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 w-[520px] h-[300px] bg-[#14B8A6]/[0.05] dark:bg-[#14B8A6]/[0.08] blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(#2563EB 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* ========================================================
            2. MAIN 4-COLUMN BALANCED FOOTER SECTION
        ======================================================== */}
        <div className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-10 border-b border-slate-200/80 dark:border-white/10">

          {/* COLUMN 1: BRAND DOSSIER, MISSION & DUAL-MARKET HUBS (Col 1 to 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              {/* Brand Logo & Tagline */}
              <Link href="/" className="group inline-flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-[#2563EB] text-white shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-base font-black tracking-tight">MBSA</span>
                </div>
                <div>
                  <span className="text-lg font-black tracking-tight text-slate-950 dark:text-white block leading-none">
                    MBSA Digital<span className="text-[#2563EB]">.</span>
                  </span>
                  <p className="text-[9.5px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1">
                    SEARCH-LED DIGITAL MARKETING &amp; DEV
                  </p>
                </div>
              </Link>

              <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm mb-5">
                We combine algorithmic technical SEO, Generative Engine Optimisation (GEO), and high-performance Custom Software engineering to build enduring digital visibility that converts into measurable revenue.
              </p>

              {/* Dual-Market Presence Pill */}
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <span className="flex items-center gap-1.5">
                  <IndiaFlag className="w-4 h-3" />
                  <span>Vadodara , Gujarat</span>
                </span>
                <span className="text-[#2563EB] font-bold">⇄</span>
                <span className="flex items-center gap-1.5">
                  <UKFlag className="w-4 h-3" />
                  <span>London , UK</span>
                </span>
              </div>
            </div>

            {/* Social Media Row */}
            <div>
              <span className="block text-[10.5px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                Official Channels &amp; Profiles
              </span>
              <div className="flex items-center gap-2.5 flex-wrap">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect on LinkedIn"
                  className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-slate-200/90 dark:border-white/10 hover:border-[#2563EB] hover:bg-blue-50/50 dark:hover:bg-blue-500/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 shadow-xs"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on Instagram"
                  className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-slate-200/90 dark:border-white/10 hover:border-pink-500 hover:bg-pink-50/50 dark:hover:bg-pink-500/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 shadow-xs"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Verified Google Profile"
                  className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-slate-200/90 dark:border-white/10 hover:border-[#4285F4] hover:bg-blue-50/50 dark:hover:bg-blue-500/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 shadow-xs"
                >
                  <GoogleIcon className="w-4 h-4" />
                </a>

                <a
                  href="mailto:mbsadigitalsolutions@gmail.com"
                  aria-label="Send direct message via Gmail"
                  className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-slate-200/90 dark:border-white/10 hover:border-[#EA4335] hover:bg-red-50/50 dark:hover:bg-red-500/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 shadow-xs"
                >
                  <GmailIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: 6 PRACTICE CATEGORIES (CLEAN, TIDY & CATEGORIZED) (Col 5 to 7) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#2563EB] dark:text-[#60A5FA] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span>Services by Category</span>
            </h3>

            <div className="space-y-3">
              {SERVICE_CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Link
                    key={cat.id}
                    href={cat.href}
                    className="group block p-2.5 rounded-xl hover:bg-slate-100/80 dark:hover:bg-white/[0.04] border border-transparent hover:border-slate-200/80 dark:hover:border-white/10 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon className={`w-3.5 h-3.5 ${cat.color}`} />
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors">
                          {cat.title}
                        </span>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 pl-5.5 mt-0.5 leading-snug truncate">
                      {cat.flagship}
                    </p>
                  </Link>
                );
              })}


            </div>
          </div>

          {/* COLUMN 3: COMPANY NAVIGATION (Col 8 to 9) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#2563EB] dark:text-[#60A5FA] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span>Company</span>
            </h3>

            <ul className="space-y-2.5 text-xs font-medium text-slate-600 dark:text-slate-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors block"
                >
                  About MBSA Digital
                </Link>
              </li>
              <li>
                <Link
                  href="/how-we-work"
                  className="hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors block"
                >
                  How We Work (Process)
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors block"
                >
                  Case Studies &amp; Work
                </Link>
              </li>
              <li>
                <Link
                  href="/analytics"
                  className="hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors block"
                >
                  Live GSC Proof
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors block"
                >
                  Insights &amp; Editorial Plan
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors block"
                >
                  Articles &amp; Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors block"
                >
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors block font-bold text-slate-900 dark:text-white"
                >
                  Start a Discussion →
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: DIRECT CONTACT & OFFICES (Col 10 to 12) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#2563EB] dark:text-[#60A5FA] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span>Contact &amp; Offices</span>
            </h3>

            <div className="space-y-3">
              {/* Direct Email Card with One-Click Copy */}
              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#111B2E] border border-slate-200/90 dark:border-white/10 shadow-xs">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    <Mail className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
                    <span>DIRECT INBOX</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 text-[10px] font-mono font-bold text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href="mailto:mbsadigitalsolutions@gmail.com"
                  className="text-xs font-bold text-[#2563EB] dark:text-[#60A5FA] hover:underline break-all block"
                >
                  mbsadigitalsolutions@gmail.com
                </a>
              </div>

              {/* India HQ Phone Card */}
              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#111B2E] border border-slate-200/90 dark:border-white/10 shadow-xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <IndiaFlag className="w-4 h-3 shrink-0" />
                  <div>
                    <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      INDIA HQ (IST)
                    </span>
                    <a
                      href="tel:+919574696932"
                      className="text-xs font-bold text-slate-900 dark:text-white hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors"
                    >
                      +91 95746 96932
                    </a>
                  </div>
                </div>
                <a
                  href="https://wa.me/919574696932"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10.5px] font-bold font-mono transition-colors shrink-0"
                >
                  WhatsApp ↗
                </a>
              </div>

              {/* United Kingdom Office Phone Card */}
              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#111B2E] border border-slate-200/90 dark:border-white/10 shadow-xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <UKFlag className="w-4 h-3 shrink-0" />
                  <div>
                    <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      UK BRANCH (GMT)
                    </span>
                    <a
                      href="tel:+447393107859"
                      className="text-xs font-bold text-slate-900 dark:text-white hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors"
                    >
                      +44 7393 107859
                    </a>
                  </div>
                </div>
                <a
                  href="tel:+447393107859"
                  className="px-2.5 py-1 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-[#2563EB] dark:text-[#60A5FA] text-[10.5px] font-bold font-mono transition-colors shrink-0"
                >
                  Call ↗
                </a>
              </div>

              {/* Turnaround Commitment */}
              <div className="px-3.5 py-2 rounded-xl bg-slate-100/70 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                <Clock className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                <span>Replies guaranteed within 24 hours</span>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================
            OPTIONAL EXPANDABLE FULL 25-SERVICE DRAWER
            (Smoothly unrolls only when user clicks the toggle)
        ======================================================== */}
        <AnimatePresence>
          {drawerOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="overflow-hidden border-b border-slate-200/80 dark:border-white/10"
            >
              <div className="py-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white font-mono flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#2563EB]" />
                    <span>Complete 25-Service Index by Category</span>
                  </h4>
                  <Link
                    href="/services"
                    className="text-xs font-bold text-[#2563EB] dark:text-[#60A5FA] hover:underline"
                  >
                    View dedicated services page →
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {SERVICE_CATEGORIES.map((cat) => {
                    const services = SERVICES_DATA.filter((s) => s.categoryId === cat.id);
                    return (
                      <div
                        key={cat.id}
                        className="p-3.5 rounded-2xl bg-white dark:bg-[#111B2E] border border-slate-200/80 dark:border-white/10 space-y-2"
                      >
                        <div className="flex items-center justify-between pb-1 border-b border-slate-100 dark:border-white/5">
                          <span className={`text-[11px] font-black uppercase tracking-wider ${cat.color} truncate`}>
                            {cat.title}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            {cat.count}
                          </span>
                        </div>
                        <ul className="space-y-1.5 text-[11px]">
                          {services.map((svc) => (
                            <li key={svc.id}>
                              <Link
                                href={`/services/${svc.slug}`}
                                className="group flex items-center justify-between text-slate-600 dark:text-slate-300 hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors truncate"
                              >
                                <span className="truncate group-hover:translate-x-0.5 transition-transform">
                                  {svc.shortTitle}
                                </span>
                                <span className="text-[9px] font-mono text-slate-400 shrink-0">
                                  #{svc.num}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================================
            3. BOTTOM COPYRIGHT & UTILITY BAR
        ======================================================== */}
        <div className="py-7 sm:py-8 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-slate-500 dark:text-slate-400">

          {/* Left: Copyright & Agency Ownership */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© {currentYear} MBSA Digital Marketing Solutions. All rights reserved.</p>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
            <p className="font-semibold text-slate-700 dark:text-slate-300">
              Aadil Pathan            </p>
          </div>

          {/* Right: Quick Links & Back To Top */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <Link
              href="/about"
              className="hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors"
            >
              Dossier
            </Link>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
            <Link
              href="/industries"
              className="hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors"
            >
              Insights
            </Link>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
            <Link
              href="/contact"
              className="hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors"
            >
              Privacy &amp; Terms
            </Link>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />

            <button
              type="button"
              onClick={scrollToTop}
              className="
                group
                inline-flex
                items-center
                gap-1.5
                px-3.5
                py-1.5
                rounded-full
                bg-slate-200/80
                dark:bg-white/10
                hover:bg-[#2563EB]
                dark:hover:bg-[#2563EB]
                text-slate-700
                dark:text-slate-200
                hover:text-white
                text-xs
                font-bold
                transition-all
                duration-300
                cursor-pointer
                shadow-xs
                hover:shadow-md
                hover:shadow-blue-500/25
                hover:-translate-y-0.5
              "
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}

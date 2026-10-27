"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  ChevronRight,
} from "lucide-react";

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      {/* LinkedIn Blue Container */}
      <path
        fill="#0A66C2"
        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14z"
      />
      {/* White Logo Elements */}
      <path
        fill="#ffffff"
        d="M18.5 18.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z"
      />
    </svg>
  );
}
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <defs>
        <radialGradient id="ig-radial" cx="20%" cy="100%" r="130%">
          <stop offset="0%" stopColor="#ffda77" />
          <stop offset="10%" stopColor="#fcae46" />
          <stop offset="35%" stopColor="#f44e3f" />
          <stop offset="60%" stopColor="#e1306c" />
          <stop offset="100%" stopColor="#833ab4" />
        </radialGradient>
      </defs>

      {/* Rounded gradient background base */}
      <rect width="24" height="24" rx="6" fill="url(#ig-radial)" />

      {/* White camera outline */}
      <path
        fill="#ffffff"
        d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.2-8.38a1.18 1.18 0 1 1-2.36 0 1.18 1.18 0 0 1 2.36 0zM17.8 4H6.2A2.2 2.2 0 0 0 4 6.2v11.6A2.2 2.2 0 0 0 6.2 20h11.6a2.2 2.2 0 0 0 2.2-2.2V6.2A2.2 2.2 0 0 0 17.8 4zm.4 13.8a.4.4 0 0 1-.4.4H6.2a.4.4 0 0 1-.4-.4V6.2a.4.4 0 0 1 .4-.4h11.6a.4.4 0 0 1 .4.4v11.6z"
      />
    </svg>
  );
}
function GoogleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      {/* Blue */}
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      {/* Green */}
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.26 21.36 7.33 24 12 24z"
      />
      {/* Yellow */}
      <path
        fill="#FBBC05"
        d="M5.28 14.27a7.22 7.22 0 0 1 0-4.54V6.6H1.25a11.98 11.98 0 0 0 0 10.8l4.03-3.13z"
      />
      {/* Red */}
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.6l4.03 3.13c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}
function GmailIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      {/* Left blue fold */}
      <path
        fill="#4285F4"
        d="M2.5 19.5h3v-9.5l-3-2.25v11.75z"
      />
      {/* Right green fold */}
      <path
        fill="#34A853"
        d="M18.5 19.5h3v-11.75l-3 2.25v9.5z"
      />
      {/* Center dark red peak */}
      <path
        fill="#C5221F"
        d="M12 12.825L5.5 7.75v2.25L12 15l6.5-5V7.75L12 12.825z"
      />
      {/* Left red wing */}
      <path
        fill="#EA4335"
        d="M2.5 7.75c0-1.79 1.46-3.25 3.25-3.25h.75v5.5L2.5 7.75z"
      />
      {/* Right yellow wing */}
      <path
        fill="#FBBC04"
        d="M17.5 4.5h.75c1.79 0 3.25 1.46 3.25 3.25l-4 2.25v-5.5z"
      />
      {/* Center top red bar */}
      <path
        fill="#EA4335"
        d="M5.75 4.5h12.5v3.25L12 12.825 5.75 7.75V4.5z"
      />
    </svg>
  );
}

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/admin") {
    return null;
  }

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
    <footer className="relative bg-[#F8FAFC] dark:bg-[#0B1220] text-stone-900 dark:text-white transition-colors duration-500 border-t-2 border-orange-500/30 overflow-hidden">
      {/* Top illuminated orange beam line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2563EB] to-transparent shadow-[0_0_20px_rgba(37,99,235,0.9)]" />

      {/* Atmospheric ambient backdrop lights */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[520px] h-[220px] bg-orange-600/[0.06] dark:bg-orange-600/[0.10] blur-[140px]" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 w-[480px] h-[240px] bg-cyan-500/[0.04] dark:bg-cyan-500/[0.07] blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.035] bg-[linear-gradient(rgba(37,99,235,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.4)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-10">

        {/* ========================================================
            2. MAIN FOOTER 4-COLUMN GRID
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16 border-b border-stone-200 dark:border-white/10">

          {/* COLUMN 1: Brand & Bio (Col 1 to 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="group inline-flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#2563EB]/10 dark:bg-[#2563EB]/20 border border-orange-500/40 shadow-[0_0_20px_rgba(37,99,235,0.30)] group-hover:scale-105 transition-transform duration-300">
                  <span className="text-sm font-black text-[#2563EB] dark:text-[#14B8A6]">MBSA</span>
                </div>
                <div>
                  <span className="text-base font-extrabold tracking-tight text-stone-900 dark:text-white">
                    MBSA<span className="text-[#2563EB]">.</span>
                  </span>
                  <p className="text-[8.5px] font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400">
                    DIGITAL MARKETING & SEO SPECIALIST
                  </p>
                </div>
              </Link>

              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed mb-6 max-w-sm">
                Combining technical SEO diagnostics, generative search optimization (GEO), and performance Next.js engineering to build enduring digital advantage.
              </p>
            </div>

            {/* Social Links Row */}
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-3">
                Connect With Me
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 hover:border-orange-500 hover:bg-white text-stone-600 dark:text-stone-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 hover:border-orange-500 hover:bg-white text-stone-600 dark:text-stone-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google"
                  className="w-9 h-9 rounded-xl bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 hover:border-orange-500 hover:bg-white text-stone-600 dark:text-stone-300 hover:text-black flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                >
                  <GoogleIcon className="w-4 h-4" />
                </a>

                <a
                  href="mailto:mbsadigitalsolutions@gmail.com"
                  aria-label="Email"
                  className="w-9 h-9 rounded-xl bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 hover:border-orange-500 hover:bg-white text-stone-600 dark:text-stone-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                >
                  <GmailIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Quick Navigation & All Pages (Col 5 to 7) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#2563EB] dark:text-[#14B8A6] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              Navigation &amp; Pages
            </h3>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-2 text-xs font-medium text-stone-600 dark:text-stone-300">
              <li>
                <Link
                  href="/"
                  className="group inline-flex items-center gap-1.5 hover:text-[#2563EB] dark:hover:text-[#14B8A6] transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-1.5 hover:text-[#2563EB] dark:hover:text-[#14B8A6] transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                  <span>Services Directory</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-1.5 hover:text-[#2563EB] dark:hover:text-[#14B8A6] transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                  <span>Case Studies &amp; Work</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="group inline-flex items-center gap-1.5 hover:text-[#2563EB] dark:hover:text-[#14B8A6] transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                  <span>Articles &amp; Blog</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/create"
                  className="group inline-flex items-center gap-1.5 hover:text-[#2563EB] dark:hover:text-[#14B8A6] transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                  <span>Write New Article</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-1.5 hover:text-[#2563EB] dark:hover:text-[#14B8A6] transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                  <span>About Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/analytics"
                  className="group inline-flex items-center gap-1.5 hover:text-[#2563EB] dark:hover:text-[#14B8A6] transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                  <span>Live GSC Analytics</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="group inline-flex items-center gap-1.5 hover:text-[#2563EB] dark:hover:text-[#14B8A6] transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                  <span>Skills &amp; Tools</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="group inline-flex items-center gap-1.5 hover:text-[#2563EB] dark:hover:text-[#14B8A6] transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                  <span>FAQ</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-1.5 hover:text-[#2563EB] dark:hover:text-[#14B8A6] transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                  <span>Contact &amp; Discuss</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Core Capabilities & Specializations (Col 8 to 9) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#2563EB] dark:text-[#14B8A6] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              Expertise
            </h3>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-2 text-xs font-medium text-stone-600 dark:text-stone-300">
              <li>
                <Link href="/services?id=technical-seo" className="hover:text-[#2563EB] dark:hover:text-white transition-colors block">
                  Technical SEO Audits
                </Link>
              </li>
              <li>
                <Link href="/services?id=gsc-analytics" className="hover:text-[#2563EB] dark:hover:text-white transition-colors block">
                  Search Console (GSC)
                </Link>
              </li>
              <li>
                <Link href="/services?id=competitor-intel" className="hover:text-[#2563EB] dark:hover:text-white transition-colors block">
                  SEMrush &amp; Ahrefs Intel
                </Link>
              </li>
              <li>
                <Link href="/services?id=cro-vitals" className="hover:text-[#2563EB] dark:hover:text-white transition-colors block">
                  Core Web Vitals &amp; CRO
                </Link>
              </li>
              <li>
                <Link href="/services?id=nextjs-dev" className="hover:text-[#2563EB] dark:hover:text-white transition-colors block">
                  Next.js Web Development
                </Link>
              </li>
              <li>
                <Link href="/services?id=paid-ads" className="hover:text-[#2563EB] dark:hover:text-white transition-colors block">
                  Google &amp; Meta PPC Ads
                </Link>
              </li>
              <li>
                <Link href="/services?id=ai-workflows" className="hover:text-[#2563EB] dark:hover:text-white transition-colors block">
                  AI &amp; Workflow Automations
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Contact & Live Availability Card (Col 10 to 12) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#2563EB] dark:text-[#14B8A6] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              Contact
            </h3>

            <div className="space-y-3.5 text-xs text-stone-600 dark:text-stone-300">
              <a
                href="mailto:mbsadigitalsolutions@gmail.com"
                className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-100/80 dark:bg-white/[0.04] border border-stone-200/80 dark:border-white/10 hover:border-orange-500/50 transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div className="overflow-hidden min-w-0">
                  <span className="block text-[10px] font-bold uppercase text-stone-400 dark:text-stone-500">
                    Direct Email
                  </span>
                  <span className="font-semibold text-stone-800 dark:text-stone-200 group-hover:text-[#2563EB] transition-colors break-all block">
                    mbsadigitalsolutions@gmail.com
                  </span>
                </div>
              </a>

              <div className="p-3 rounded-xl bg-stone-100/80 dark:bg-white/[0.04] border border-stone-200/80 dark:border-white/10">
                <div className="flex items-center gap-2 mb-1.5">
                  <Phone className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span className="text-[10px] font-bold uppercase text-stone-400 dark:text-stone-500">
                    Phone / WhatsApp
                  </span>
                </div>
                <div className="flex flex-col gap-1 pl-6">
                  <a
                    href="tel:+919574696932"
                    className="font-semibold text-stone-800 dark:text-stone-200 hover:text-[#2563EB] transition-colors text-xs"
                  >
                    +91 95746 96932 (IN)
                  </a>
                  <a
                    href="tel:+447393107859"
                    className="font-semibold text-stone-800 dark:text-stone-200 hover:text-[#2563EB] transition-colors text-xs"
                  >
                    +44 7393 107859 (UK)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-100/80 dark:bg-white/[0.04] border border-stone-200/80 dark:border-white/10">
                <Clock className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] font-bold uppercase text-stone-400 dark:text-stone-500">
                    Turnaround Time
                  </span>
                  <span className="font-semibold text-stone-800 dark:text-stone-200">
                    Replies within 24 hours
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================
            3. BOTTOM COPYRIGHT & UTILITY BAR
        ======================================================== */}
        <div className="pt-8 sm:pt-10 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-stone-500 dark:text-[#A8A29E]">

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© {currentYear} DM. All rights reserved.</p>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-stone-400" />
            <p className="text-stone-400 dark:text-stone-500">
              Aadil Pathan
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="
                group
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-stone-200/60
                dark:bg-white/10
                hover:bg-[#2563EB]
                text-stone-700
                dark:text-stone-300
                hover:text-white
                text-xs
                font-bold
                transition-all
                duration-300
                cursor-pointer
                shadow-sm
                hover:shadow-[0_4px_20px_rgba(37,99,235,0.4)]
                hover:-translate-y-0.5
              "
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}


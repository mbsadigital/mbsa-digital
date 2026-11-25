"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  BarChart3,
  Search,
  Code2,
  TrendingUp,
  FileCheck,
  Zap,
  Target,
  Mail,
  MapPin,
  Calendar,
  Building2,
} from "lucide-react";

/* =========================================================
   FLAG HELPERS
========================================================= */

function IndiaFlag({ className = "w-4 h-3" }: { className?: string }) {
  return (
    <span className={`inline-block rounded-xs overflow-hidden shadow-xs ring-1 ring-black/10 shrink-0 ${className}`}>
      <svg viewBox="0 0 640 480" className="w-full h-full block">
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
      <svg viewBox="0 0 60 30" className="w-full h-full block">
        <clipPath id="uk-flag-clip-about-mbsa">
          <path d="M0 0v30h60V0z" />
        </clipPath>
        <path d="M0 0v30h60V0z" fill="#012169" />
        <path d="M0 0l60 30m0-30L0 30" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M0 0l60 30m0-30L0 30" clipPath="url(#uk-flag-clip-about-mbsa)" stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0v30M0 15h60" stroke="#FFFFFF" strokeWidth="10" />
        <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
      </svg>
    </span>
  );
}

/* =========================================================
   DATA DEFINITIONS MATCHING WIREFRAME
========================================================= */

const PRINCIPLES = [
  {
    num: "01",
    title: "Evidence before opinion",
    desc: "Recommendations are based on your data, your customers and your competitors, and we show our reasoning.",
  },
  {
    num: "02",
    title: "Impact before activity",
    desc: "We prioritise the work most likely to move your business forward, even if it's less visible.",
  },
  {
    num: "03",
    title: "Plain English",
    desc: "Reports and advice your whole team can understand and act on, without jargon.",
  },
  {
    num: "04",
    title: "You own everything",
    desc: "Your website, analytics, ad accounts and content belong to your business, always.",
  },
  {
    num: "05",
    title: "No guaranteed rankings",
    desc: "We won't promise outcomes nobody controls. We commit to the work and to honest results.",
  },
  {
    num: "06",
    title: "Ethical methods only",
    desc: "No fake reviews, bought links or tactics that put your business at risk.",
  },
];

const TOOLKIT_ITEMS = [
  {
    name: "Google Search Console",
    desc: "Crawl diagnostics, indexation health and real organic/AI search impression data.",
    icon: Search,
  },
  {
    name: "Google Analytics 4",
    desc: "User journey mapping, custom conversion tracking and qualified lead attribution.",
    icon: BarChart3,
  },
  {
    name: "Google Tag Manager",
    desc: "Clean client and server-side tracking setups without slowing down page load.",
    icon: Code2,
  },
  {
    name: "Looker Studio",
    desc: "Live, executive dashboards combining search, ad, and business conversion data.",
    icon: BarChart3,
  },
  {
    name: "Google Ads & Meta Ads",
    desc: "High-intent search, Performance Max, Shopping, and Conversion API campaigns.",
    icon: Target,
  },
  {
    name: "Semrush & Ahrefs",
    desc: "Competitive keyword gap analysis, backlink footprint audits and SERP tracking.",
    icon: TrendingUp,
  },
  {
    name: "Screaming Frog",
    desc: "Deep technical site crawling to pinpoint canonical, redirect and schema flaws.",
    icon: FileCheck,
  },
  {
    name: "PageSpeed Insights",
    desc: "Real-user Core Web Vitals diagnostics to ensure sub-second LCP and TTFB.",
    icon: Zap,
  },
];

/* =========================================================
   MAIN ABOUT CLIENT COMPONENT
========================================================= */

export default function AboutClient() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-[#0B1220] text-stone-900 dark:text-stone-100 font-[family-name:var(--font-plus-jakarta-sans)] transition-colors duration-500 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full bg-[#2563EB]/[0.05] dark:bg-[#2563EB]/[0.10] blur-[150px]" />
        <div className="absolute top-1/2 -right-24 w-[500px] h-[500px] rounded-full bg-[#14B8A6]/[0.05] dark:bg-[#14B8A6]/[0.08] blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-24 space-y-24 sm:space-y-32">

        {/* =========================================================
            SECTION 1: HERO / ABOUT MBSA DIGITAL & COMPANY FACTS
        ========================================================= */}
        <section className="space-y-6">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 dark:text-stone-400">
            <Link
              href="/"
              className="hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors flex items-center gap-1.5"
            >
              <span>Home</span>
            </Link>
            <span className="text-stone-300 dark:text-stone-600">/</span>
            <span className="text-[#2563EB] dark:text-[#60A5FA] font-bold">About</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-2">
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#2563EB] dark:text-[#60A5FA]">
                <span className="w-2.5 h-2.5 rounded-[3px] bg-[#2563EB] dark:bg-[#60A5FA] inline-block" />
                <span>ABOUT MBSA DIGITAL</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 dark:text-white tracking-tight leading-[1.12]">
                We help good businesses get found, and chosen
              </h1>

              <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl">
                MBSA Digital is a search-led digital marketing agency working with businesses in India, the UK and other English-speaking markets. We bring technical SEO, AI search visibility, websites, paid media and analytics together under one plan, so your marketing works as a whole.
              </p>
            </div>

            {/* Right Column: Company facts Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-7 rounded-2xl bg-stone-50/80 dark:bg-[#111B2E]/80 border border-stone-200/80 dark:border-white/10 shadow-sm space-y-5">
                <h3 className="text-base font-bold text-stone-900 dark:text-white pb-3 border-b border-stone-200/70 dark:border-white/10">
                  Company facts
                </h3>

                <ul className="space-y-3.5 text-xs sm:text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="font-bold text-stone-900 dark:text-white">Markets:</span>{" "}
                      <span className="text-stone-600 dark:text-stone-300">India and the UK</span>
                      <span className="inline-flex items-center gap-1.5 ml-2 align-middle">
                        <IndiaFlag className="w-4 h-3 inline-block" />
                        <UKFlag className="w-4 h-3 inline-block" />
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-stone-900 dark:text-white">Founded:</span>{" "}
                      <span className="text-stone-600 dark:text-stone-300">2021</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-stone-900 dark:text-white">Registered as:</span>{" "}
                      <span className="text-stone-600 dark:text-stone-300 font-medium">MBSA Digital Solutions</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-stone-900 dark:text-white">Offices:</span>{" "}
                      <span className="text-stone-600 dark:text-stone-300">London (UK) &amp; Vadodara (India)</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 2: WHY WE EXIST
        ========================================================= */}
        <section className="space-y-6 pt-8 border-t border-stone-200/80 dark:border-white/10">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#2563EB] dark:text-[#60A5FA]">
            <span className="w-2.5 h-2.5 rounded-[3px] bg-[#2563EB] dark:bg-[#60A5FA] inline-block" />
            <span>WHY WE EXIST</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Heading */}
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-950 dark:text-white tracking-tight leading-[1.15]">
                Search has changed. Most marketing hasn&apos;t caught up.
              </h2>
            </div>

            {/* Right Column: 3 Paragraphs */}
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              <p>
                Customers now find businesses through a mix of search results, map listings, AI-generated answers and recommendations. Yet many companies still split that work between a freelancer for SEO, a developer for the website and an agency for ads, with nobody responsible for how it fits together.
              </p>
              <p>
                We started MBSA Digital to close that gap. Our work begins with diagnosis: understanding what is actually stopping the right people from finding and choosing you. Then we fix the highest-value problems first and measure what changes in enquiries and sales, not just traffic.
              </p>
              <p>
                We&apos;re deliberately honest about what marketing can and can&apos;t promise. Nobody controls Google&apos;s rankings or what AI assistants say. What we control is the quality of the work, the clarity of our advice and the honesty of our reporting.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 3: PRINCIPLES - HOW WE WORK WITH CLIENTS
        ========================================================= */}
        <section className="space-y-8 pt-8 border-t border-stone-200/80 dark:border-white/10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#2563EB] dark:text-[#60A5FA]">
              <span className="w-2.5 h-2.5 rounded-[3px] bg-[#2563EB] dark:bg-[#60A5FA] inline-block" />
              <span>PRINCIPLES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-950 dark:text-white tracking-tight">
              How we work with clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {PRINCIPLES.map((principle) => (
              <motion.div
                key={principle.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4 }}
                className="p-6 rounded-2xl bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 shadow-xs hover:border-[#2563EB]/40 dark:hover:border-[#60A5FA]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold text-stone-400 dark:text-stone-500 block">
                    {principle.num}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-stone-950 dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 4: LEADERSHIP
        ========================================================= */}
        <section className="space-y-8 pt-8 border-t border-stone-200/80 dark:border-white/10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#2563EB] dark:text-[#60A5FA]">
              <span className="w-2.5 h-2.5 rounded-[3px] bg-[#2563EB] dark:bg-[#60A5FA] inline-block" />
              <span>PEOPLE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-950 dark:text-white tracking-tight">
              Leadership
            </h2>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300">
              Clients work directly with experienced specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Muskan Shekh Detailed Card */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 pb-6 border-b border-stone-100 dark:border-white/5">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-stone-200 dark:border-white/10 shadow-sm bg-stone-100 dark:bg-stone-800">
                  <Image
                    src="/muskan-portrait.jpg"
                    alt="Muskan Shekh - Founder & Head of Search at MBSA Digital"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-black text-stone-950 dark:text-white">
                    Muskan Shekh
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-[#2563EB] dark:text-[#60A5FA]">
                    Founder &amp; Head of Search
                  </p>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    MSc Advanced Computer Science · University of Essex (UK)
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                <p>
                  Muskan has worked in SEO for more than five years, starting as a junior SEO executive and moving into senior SEO and team-lead roles. She spent time in London working with UK health and beauty brands on technical SEO, websites and content.
                </p>
                <p>
                  She holds a B.E. in Computer Engineering and an MSc in Advanced Computer Science from the University of Essex, and is Google Ads and Google Analytics certified.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="https://linkedin.com/in/muskanshekh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A66C2] text-white text-xs font-bold shadow-xs hover:bg-[#084e96] transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.78v8.37H6.46v-8.37M7.85 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
                  </svg>
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 dark:bg-white/5 text-stone-700 dark:text-stone-300 text-xs font-medium border border-stone-200/70 dark:border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6]" />
                  <span>Google Ads &amp; GA4 Certified</span>
                </div>
              </div>
            </div>

            {/* Specialist Squad Box */}
            <div className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-stone-50/90 dark:bg-[#111B2E]/60 border border-stone-200/80 dark:border-white/10 shadow-xs space-y-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 block">
                SPECIALIST NETWORK
              </span>
              <h4 className="text-base font-bold text-stone-900 dark:text-white">
                Dedicated Specialist Delivery
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                When campaigns call for bespoke web engineering, specialised medical copywriting or high-volume creative assets, we partner with vetted senior specialists who work directly under our strategic lead.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#2563EB] dark:text-[#60A5FA] flex items-center gap-1">
                <span>Direct partner oversight on every account</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 5: TOOLKIT - TOOLS WE USE EVERY DAY
        ========================================================= */}
        <section className="space-y-8 pt-8 border-t border-stone-200/80 dark:border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Header */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#2563EB] dark:text-[#60A5FA]">
                <span className="w-2.5 h-2.5 rounded-[3px] bg-[#2563EB] dark:bg-[#60A5FA] inline-block" />
                <span>TOOLKIT</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-950 dark:text-white tracking-tight">
                Tools we use every day
              </h2>
            </div>

            {/* Right Intro */}
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
                We use established, industry-standard platforms so our findings can be checked and your data stays in tools you can access:
              </p>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TOOLKIT_ITEMS.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.name}
                  className="p-5 rounded-2xl bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 shadow-xs hover:border-[#2563EB]/30 transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-500/20 text-[#2563EB] dark:text-[#60A5FA] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-stone-900 dark:text-white leading-snug">
                      {tool.name}
                    </h3>
                  </div>
                  <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================
            SECTION 6: PRE-FOOTER CALL TO ACTION
        ========================================================= */}
        <section className="pt-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white shadow-xl shadow-blue-500/10 space-y-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:space-y-0 gap-8">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-200">
                Next Steps
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Ready to see how search-led marketing can grow your business?
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                Tell us where your customers are and we’ll review your website, outline high-impact priorities, and confirm if we’re the right fit.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white text-[#2563EB] text-xs sm:text-sm font-black hover:bg-stone-100 transition-colors shadow-sm text-center"
              >
                Request a Free SEO Audit
              </Link>
              <Link
                href="/how-we-work"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold transition-colors border border-white/20 text-center"
              >
                Our 4-Step Process
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

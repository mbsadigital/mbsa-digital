"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
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
  Check,
  Compass,
  Rocket,
  ArrowUpRight,
  Plane,
  Clock,
  Layers,
  Award,
  Globe2,
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
   DATA DEFINITIONS
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
    desc: "Reports and advice your whole team can understand and act on, without confusing agency jargon.",
  },
  {
    num: "04",
    title: "You own everything",
    desc: "Your website, analytics, ad accounts and content belong to your business, always and without exception.",
  },
  {
    num: "05",
    title: "No guaranteed rankings",
    desc: "We won't promise outcomes nobody controls. We commit to the work, the strategy, and to honest results.",
  },
  {
    num: "06",
    title: "Ethical methods only",
    desc: "No fake reviews, bought links or shortcuts that put your business and domain authority at risk.",
  },
];

const TOOLKIT_ITEMS = [
  {
    name: "Google Search Console",
    desc: "Crawl diagnostics, indexation health and real organic/AI search impression data.",
    icon: Search,
    accent: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/40 border-blue-500/20",
  },
  {
    name: "Google Analytics 4",
    desc: "User journey mapping, custom conversion tracking and qualified lead attribution.",
    icon: BarChart3,
    accent: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/40 border-amber-500/20",
  },
  {
    name: "Google Tag Manager",
    desc: "Clean client and server-side tracking setups without slowing down page load.",
    icon: Code2,
    accent: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-500/20",
  },
  {
    name: "Looker Studio",
    desc: "Live, executive dashboards combining search, ad, and business conversion data.",
    icon: BarChart3,
    accent: "text-sky-600 dark:text-sky-400",
    bg: "bg-sky-50 dark:bg-sky-950/40 border-sky-500/20",
  },
  {
    name: "Google Ads & Meta Ads",
    desc: "High-intent search, Performance Max, Shopping, and Conversion API campaigns.",
    icon: Target,
    accent: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-50 dark:bg-rose-950/40 border-rose-500/20",
  },
  {
    name: "Semrush & Ahrefs",
    desc: "Competitive keyword gap analysis, backlink footprint audits and SERP tracking.",
    icon: TrendingUp,
    accent: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-50 dark:bg-teal-950/40 border-teal-500/20",
  },
  {
    name: "Screaming Frog",
    desc: "Deep technical site crawling to pinpoint canonical, redirect and schema flaws.",
    icon: FileCheck,
    accent: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500/20",
  },
  {
    name: "PageSpeed Insights",
    desc: "Real-user Core Web Vitals diagnostics to ensure sub-second LCP and TTFB.",
    icon: Zap,
    accent: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-950/40 border-purple-500/20",
  },
];

/* =========================================================
   JOURNEY / TIMELINE MILESTONES (EXACT MATCH TO PROFILE)
========================================================= */

const JOURNEY_MILESTONES = [
  {
    step: "01",
    title: "Diploma in Computer Engineering",
    institution: "Parul Polytechnic Institute, Gujarat",
    badge: "Technical Foundation",
    desc: "Built rigorous technical grounding in systems architecture, computer networking, relational databases, and algorithmic logic.",
    icon: Code2,
  },
  {
    step: "02",
    title: "B.E. Computer Engineering",
    institution: "Neotech Institute of Technology, Gujarat",
    badge: "Engineering Degree",
    desc: "Specialized in software engineering, web architectures, distributed systems, and performance computing.",
    icon: Building2,
  },
  {
    step: "03",
    title: "SEO career begins",
    institution: "Junior SEO Executive, then Senior SEO roles",
    badge: "Search Inception",
    desc: "Began practical search optimization, solving technical crawl failures, site speed diagnostics, on-page taxonomy, and commercial ranking factors.",
    icon: Search,
  },
  {
    step: "04",
    title: "MSc Advanced Computer Science",
    institution: "University of Essex, UK",
    badge: "Postgraduate Masters",
    desc: "Advanced postgraduate research in information retrieval algorithms, distributed data processing, and modern search heuristics.",
    icon: Award,
  },
  {
    step: "05",
    title: "UK health and beauty brands",
    institution: "September 2023 to November 2025, London",
    badge: "London Practice",
    desc: "Led hands-on technical SEO, site speed, and conversion strategies for UK aesthetic clinics, healthcare providers, and beauty retailers, mastering British search intent and consumer trust.",
    icon: Plane,
  },
  {
    step: "06",
    title: "Team lead and strategist",
    institution: "MaMo TechnoLabs today",
    badge: "Leadership & Growth",
    desc: "Directs full-funnel organic search, AI search visibility (GEO/AEO), and technical architecture for international and enterprise brands from India.",
    icon: Rocket,
  },
];

/* =========================================================
   MAIN ABOUT CLIENT COMPONENT
========================================================= */

export default function AboutClient() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-[#0B1220] text-stone-900 dark:text-stone-100 font-[family-name:var(--font-plus-jakarta-sans)] transition-colors duration-500 overflow-hidden">
      {/* Background Ambient Glows & Dot Pattern matching Homepage */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -right-40 w-[550px] h-[550px] rounded-full bg-[#2563EB]/[0.07] dark:bg-[#2563EB]/[0.10] blur-[150px]" />
        <div className="absolute top-2/3 -left-40 w-[550px] h-[550px] rounded-full bg-[#14B8A6]/[0.05] dark:bg-[#14B8A6]/[0.08] blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(#2563EB 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-24 space-y-24 sm:space-y-32">

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
              {/* Eyebrow Matching Homepage Standard */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-[#2563EB] dark:bg-[#14B8A6]" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-[#2563EB] dark:text-[#14B8A6]">
                  ABOUT MBSA DIGITAL
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-stone-950 dark:text-white tracking-tight leading-[1.08]">
                We help good businesses get{" "}
                <span className="block mt-1 sm:mt-2 text-[#2563EB] dark:text-[#2f97ee]">
                  found, and chosen
                </span>
              </h1>

              <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl font-normal">
                MBSA Digital is a search-led digital marketing agency working with businesses in India, the UK and other English-speaking markets. We bring technical SEO, AI search visibility, websites, paid media and analytics together under one plan, so your marketing works as a whole.
              </p>

              {/* Action Buttons with clear priority matching Home page */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    px-5 sm:px-6
                    py-2.5 sm:py-3
                    rounded-full
                    bg-[#2563EB]
                    text-white
                    text-xs sm:text-[13.5px]
                    font-bold
                    border border-transparent
                    hover:border-blue-800
                    shadow-md shadow-[#2563EB]/25
                    hover:shadow-[#2563EB]/40
                    hover:-translate-y-0.5
                    transition-all
                    duration-300
                    min-h-[42px] sm:min-h-[44px]
                    touch-manipulation
                  "
                >
                  <span>Request a Free Search Audit</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/services"
                  className="
                    group/link
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    px-5 sm:px-6
                    py-2.5 sm:py-3
                    rounded-full
                    bg-white/90 dark:bg-[#0f0f11]
                    backdrop-blur-xl
                    text-stone-800 dark:text-white
                    text-xs sm:text-[13.5px]
                    font-semibold
                    border border-stone-200/80 dark:border-white/10
                    shadow-xs
                    hover:bg-blue-50/50 dark:hover:bg-white/5
                    hover:border-[#2563EB]/40
                    transition-all
                    duration-300
                    min-h-[42px] sm:min-h-[44px]
                  "
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover/link:text-[#2563EB] group-hover/link:translate-x-1 transition-all duration-300" />
                </Link>
              </div>
            </div>

            {/* Right Column: Company Facts Cockpit Card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-stone-200/90 dark:border-white/10 bg-white/90 dark:bg-[#070D1A]/90 p-6 sm:p-7 shadow-xl shadow-blue-500/5 backdrop-blur-2xl space-y-5">
                {/* Console header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-stone-200/80 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
                    </div>
                    <span className="ml-1 text-[10px] font-mono font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                      mbsa.facts.telemetry
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9.5px] font-bold text-emerald-600 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>VERIFIED AGENCY</span>
                  </div>
                </div>

                <h3 className="text-base font-extrabold text-stone-900 dark:text-white">
                  Company Facts &amp; Registration
                </h3>

                <ul className="space-y-4 text-xs sm:text-sm">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-teal-50 dark:bg-teal-950/50 border border-teal-500/20 flex items-center justify-center shrink-0 mt-0.5 text-[#14B8A6]">
                      <Globe2 className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex-1">
                      <span className="font-bold text-stone-900 dark:text-white block">Markets Served</span>
                      <span className="text-stone-600 dark:text-stone-300">India and the United Kingdom</span>
                      <span className="inline-flex items-center gap-1.5 ml-2 align-middle">
                        <IndiaFlag className="w-4 h-3 inline-block" />
                        <UKFlag className="w-4 h-3 inline-block" />
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5 text-[#2563EB]">
                      <Calendar className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="font-bold text-stone-900 dark:text-white block">Founded</span>
                      <span className="text-stone-600 dark:text-stone-300">2021 (5+ Years Track Record)</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-amber-50 dark:bg-amber-950/50 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5 text-amber-600 dark:text-amber-400">
                      <Building2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="font-bold text-stone-900 dark:text-white block">Registered Business</span>
                      <span className="text-stone-600 dark:text-stone-300">MBSA Digital Solutions</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5 text-indigo-600 dark:text-indigo-400">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="font-bold text-stone-900 dark:text-white block">Dual-Hub Offices</span>
                      <span className="text-stone-600 dark:text-stone-300">London (UK) &amp; Vadodara (India)</span>
                    </div>
                  </li>
                </ul>

                <div className="pt-3 border-t border-stone-200/80 dark:border-white/10 flex items-center justify-between text-[11px] font-semibold text-stone-500 dark:text-stone-400">
                  <span>Founder: Muskan Shekh</span>
                  <span className="text-[#2563EB] dark:text-[#60A5FA]">100% Client Ownership</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 2: WHY WE EXIST
        ========================================================= */}
        <section className="space-y-6 pt-10 sm:pt-14 border-t border-stone-200/80 dark:border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#2563EB] dark:bg-[#14B8A6]" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-[#2563EB] dark:text-[#14B8A6]">
              WHY WE EXIST
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Heading */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 dark:text-white tracking-tight leading-[1.12]">
                Search has changed.
                <br />
                <span className="text-[#2563EB] dark:text-[#2f97ee]">
                  Most marketing hasn&apos;t caught up.
                </span>
              </h2>
            </div>

            {/* Right Column: 3 Paragraphs with Elevated Card Framing */}
            <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
              <div className="p-6 sm:p-7 rounded-2xl bg-white/80 dark:bg-[#070D1A]/80 border border-stone-200/80 dark:border-white/10 shadow-xs space-y-4">
                <p>
                  Customers now find businesses through a mix of organic search results, Google Maps listings, AI-generated answers, and peer recommendations. Yet many companies still split that work between a freelancer for SEO, a developer for the website and an agency for ads, with nobody responsible for how it fits together into commercial pipeline.
                </p>
                <p>
                  We started MBSA Digital to close that gap. Our work begins with diagnosis: understanding what is actually stopping the right people from finding and choosing you. Then we fix the highest-value problems first and measure what changes in enquiries and sales, not just vanity impressions.
                </p>
                <p>
                  We&apos;re deliberately honest about what marketing can and can&apos;t promise. Nobody controls Google&apos;s rankings or what AI assistants say. What we control is the quality of the technical execution, the clarity of our advice, and the absolute honesty of our reporting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 3: PRINCIPLES - HOW WE WORK WITH CLIENTS
        ========================================================= */}
        <section className="space-y-8 pt-10 sm:pt-14 border-t border-stone-200/80 dark:border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#2563EB] dark:bg-[#14B8A6]" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-[#2563EB] dark:text-[#14B8A6]">
                  PRINCIPLES
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 dark:text-white tracking-tight leading-[1.12]">
                How we work
                <br />
                <span className="text-[#2563EB] dark:text-[#2f97ee]">
                  with every client
                </span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 max-w-md">
              Six straightforward commitments that guide our audits, campaign strategies, and long-term client partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {PRINCIPLES.map((principle) => (
              <motion.div
                key={principle.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4 }}
                className="p-6 sm:p-7 rounded-3xl bg-white/90 dark:bg-[#070D1A]/90 border border-stone-200/80 dark:border-white/10 shadow-xs hover:border-[#2563EB]/40 dark:hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-stone-100 dark:bg-white/5 text-stone-500 dark:text-stone-400 group-hover:bg-[#2563EB]/15 group-hover:text-[#2563EB] transition-colors">
                      {principle.num}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-stone-700 group-hover:bg-[#2563EB] transition-colors" />
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-stone-950 dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
                    {principle.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 4: LEADERSHIP & PEOPLE (MATCHING USER PROFILE)
        ========================================================= */}
        <section className="space-y-8 pt-10 sm:pt-14 border-t border-stone-200/80 dark:border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Digital Marketing Specialist Narrative & 4 Attribute Cards */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-px bg-[#2563EB] dark:bg-[#14B8A6]" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-[#2563EB] dark:text-[#14B8A6]">
                    PEOPLE &amp; LEADERSHIP
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 dark:text-white tracking-tight leading-[1.12]">
                  Digital Marketing Specialist
                </h2>
                <p className="text-sm sm:text-base font-semibold text-[#2563EB] dark:text-[#60A5FA]">
                  at MaMo TechnoLabs &amp; MBSA Digital, Vadodara
                </p>
              </div>

              <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
                I started in SEO over five years ago and I still enjoy the detective work: finding why a page isn&apos;t ranking, fixing it and watching it climb. I lived and worked in London from September 2023 to November 2025, handling UK health and beauty brands, which taught me how British customers search and what they trust. I now lead a small team and handle international clients from India.
              </p>


              {/* Action Buttons: Connect With Me (Pill matching brand theme) */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://linkedin.com/in/muskanshekh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    px-6 sm:px-7
                    py-3
                    rounded-full
                    bg-[#2563EB] hover:bg-blue-600
                    text-white
                    text-xs sm:text-sm
                    font-bold
                    shadow-lg shadow-[#2563EB]/25
                    hover:shadow-[#2563EB]/40
                    hover:-translate-y-0.5
                    transition-all
                    duration-300
                  "
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.78v8.37H6.46v-8.37M7.85 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
                  </svg>
                  <span>Connect With Me</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-5
                    py-3
                    rounded-full
                    bg-white/90 dark:bg-[#0f0f11]
                    backdrop-blur-xl
                    text-stone-800 dark:text-white
                    text-xs sm:text-sm
                    font-semibold
                    border border-stone-200/80 dark:border-white/10
                    hover:border-[#2563EB]/40
                    hover:bg-blue-50/50 dark:hover:bg-white/5
                    transition-all
                  "
                >
                  <Mail className="w-3.5 h-3.5 text-stone-400" />
                  <span>Send an Email</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Glass Circle with Portrait Image & Information Below */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-center text-center pt-4 lg:pt-0">
              <div className="relative group">
                {/* Ambient Aura behind glass circle */}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#2563EB]/25 via-[#3B82F6]/20 to-[#14B8A6]/20 blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-80" />

                {/* Glass Circle Frame */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full p-2.5 sm:p-3 bg-white/40 dark:bg-white/10 backdrop-blur-2xl border-2 border-stone-200/80 dark:border-white/15 shadow-2xl shadow-blue-500/10 flex items-center justify-center">
                  <div className="relative w-full h-full rounded-full overflow-hidden border border-white/60 dark:border-white/10 bg-stone-100 dark:bg-stone-900">
                    <Image
                      src="/muskan-portrait.jpg"
                      alt="Muskan Shekh - Founder & Head of Search"
                      fill
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 256px, 288px"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Information Below Name */}
              <div className="mt-5 space-y-1">
                <h3 className="text-xl sm:text-2xl font-black text-stone-950 dark:text-white tracking-tight">
                  Muskan Shekh
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#2563EB] dark:text-[#60A5FA]">
                  Founder &amp; Head of Search
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                  MSc Advanced Computer Science · University of Essex
                </p>

                {/* Badges */}
                <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-100 dark:bg-white/5 text-[11px] font-semibold text-stone-700 dark:text-stone-300 border border-stone-200/70 dark:border-white/10">
                    <CheckCircle2 className="w-3 h-3 text-[#14B8A6]" />
                    <span>Google Certified</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-100 dark:bg-white/5 text-[11px] font-semibold text-stone-700 dark:text-stone-300 border border-stone-200/70 dark:border-white/10">
                    <IndiaFlag className="w-3.5 h-2.5 inline-block" />
                    <UKFlag className="w-3.5 h-2.5 inline-block" />
                    <span>London ⇄ India</span>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================
            SECTION 5: TOOLKIT - TOOLS WE USE EVERY DAY
        ========================================================= */}
        <section className="space-y-8 pt-10 sm:pt-14 border-t border-stone-200/80 dark:border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Header */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-[#2563EB] dark:bg-[#14B8A6]" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-[#2563EB] dark:text-[#14B8A6]">
                  TOOLKIT &amp; STACK
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 dark:text-white tracking-tight leading-[1.12]">
                Tools we use
                <br />
                <span className="text-[#2563EB] dark:text-[#2f97ee]">
                  every single day
                </span>
              </h2>
            </div>

            {/* Right Intro */}
            <div className="lg:col-span-7">
              <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
                We use established, industry-standard platforms so our findings can be checked, benchmarks verified, and your business data stays in tools you own and access directly:
              </p>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {TOOLKIT_ITEMS.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.name}
                  className="p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-[#070D1A]/90 border border-stone-200/80 dark:border-white/10 shadow-xs hover:border-[#2563EB]/40 dark:hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${tool.bg} ${tool.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm sm:text-[15px] font-bold text-stone-900 dark:text-white leading-snug group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors">
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
            SECTION 6: OUR JOURNEY - TIMELINE & EVOLUTION
        ========================================================= */}
        <section className="space-y-10 pt-10 sm:pt-14 border-t border-stone-200/80 dark:border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-px bg-[#2563EB] dark:bg-[#14B8A6]" />
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.28em] text-[#2563EB] dark:text-[#60A5FA]">
                  JOURNEY
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 dark:text-white tracking-tight leading-[1.12]">
                Educational &amp; Career
                <br />
                <span className="text-[#2563EB] dark:text-[#2f97ee]">
                  Milestones
                </span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 max-w-md">
              From foundational computer engineering in Gujarat to leading transatlantic SEO campaigns in London and international search strategy today.
            </p>
          </div>

          {/* Interactive Timeline Rail with #2563EB Brand Dots */}
          <div className="relative pl-6 sm:pl-8 lg:pl-10 space-y-8 sm:space-y-10 before:content-[''] before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-[#2563EB] before:via-[#3B82F6] before:to-[#14B8A6]">
            {JOURNEY_MILESTONES.map((milestone, idx) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="relative group"
                >
                  {/* Glowing Brand Blue Bullet Dot */}
                  <div className="absolute -left-6 sm:-left-8 lg:-left-10 top-2 -translate-x-1/2 flex items-center justify-center">
                    <span className="relative flex h-4 w-4 sm:h-5 sm:w-5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB]/30 opacity-75" />
                      <span className="relative inline-flex rounded-full h-4 w-4 sm:h-5 sm:w-5 bg-white dark:bg-[#070D1A] border-2 border-[#2563EB] items-center justify-center shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                      </span>
                    </span>
                  </div>

                  {/* Milestone Details Card */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-[#070D1A]/90 border border-stone-200/90 dark:border-white/10 shadow-xs hover:border-[#2563EB]/40 dark:hover:border-blue-500/40 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-500/20 text-[#2563EB] dark:text-[#60A5FA] flex items-center justify-center shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <h3 className="text-base sm:text-lg font-black text-stone-950 dark:text-white">
                          {milestone.title}
                        </h3>
                      </div>
                      <span className="text-[10px] sm:text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/40 text-[#2563EB] dark:text-[#60A5FA] border border-blue-500/20 self-start sm:self-auto">
                        {milestone.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-bold text-stone-700 dark:text-stone-200 pl-9.5">
                      {milestone.institution}
                    </p>

                    <p className="mt-2 text-xs text-stone-500 dark:text-stone-400 leading-relaxed font-normal pl-9.5">
                      {milestone.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>



      </div>
    </div>
  );
}

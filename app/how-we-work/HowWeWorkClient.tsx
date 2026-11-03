"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Calendar,
  Compass,
  Layers,
  Search,
  Zap,
  TrendingUp,
  ShieldCheck,
  FileText,
  BarChart3,
  Clock,
  Check,
  Users,
  Target,
  Rocket,
  MessageSquare,
} from "lucide-react";

/* =========================================================
   ANIMATED TEXT REVEAL HELPER
========================================================= */

function AnimatedText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.04,
            delayChildren: delay,
          },
        },
      }}
      className={`inline-block ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="inline-block mr-[0.28em] last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* =========================================================
   DATA DEFINITIONS
========================================================= */

const WHAT_YOU_CAN_EXPECT = [
  "A named point of contact",
  "A written plan before work starts",
  "Monthly reporting in plain English",
  "Full ownership of your data and accounts",
];

const SIMPLE_FOUR_STEPS = [
  {
    step: "01",
    title: "Discover & Analyse",
    description:
      "We review your website, search visibility, analytics, ad accounts and competitors, and learn which customers matter most to you.",
    icon: Search,
    color: "from-blue-600 to-sky-500",
  },
  {
    step: "02",
    title: "Plan & Optimise",
    description:
      "You get a written roadmap ranking every recommendation by impact and effort. Then we fix the highest-value issues first.",
    icon: Target,
    color: "from-sky-500 to-teal-500",
  },
  {
    step: "03",
    title: "Track & Improve",
    description:
      "We measure what changes in visibility, traffic, leads and sales, and report monthly with clear next steps.",
    icon: BarChart3,
    color: "from-teal-500 to-emerald-500",
  },
  {
    step: "04",
    title: "Grow & Scale",
    description:
      "As results build, we expand what works: more content, new channels, new locations or bigger budgets.",
    icon: Rocket,
    color: "from-emerald-500 to-blue-600",
  },
];

const DETAILED_PHASES = [
  {
    phase: "PRE-ENGAGEMENT",
    stepNumber: "00",
    title: "Before we start: the discovery call",
    icon: MessageSquare,
    badge: "Free Consultation · 20 Mins",
    summary:
      "The first conversation is about your business, not our services. We'll ask who your best customers are, how they find you today, what a good enquiry is worth and what has or hasn't worked before. If we don't think we're the right fit, we'll tell you, and point you somewhere better if we can.",
    keyOutcomes: [
      "Understand your ideal customer profile and unit economics",
      "Assess whether SEO and technical marketing are the right levers for you",
      "Zero high-pressure sales pitch — pure diagnostic honesty",
    ],
  },
  {
    phase: "STEP 1",
    stepNumber: "01",
    title: "Step 1: Discover & Analyse",
    icon: Search,
    badge: "Comprehensive Diagnostic",
    summary:
      "With your permission we review Google Search Console, GA4, your Google Business Profile and any ad accounts, and crawl your website. We look at technical health, content and search intent, local presence, conversion paths, tracking accuracy and how competitors are positioned. For AI search, we test a defined set of customer questions and record how your business appears.",
    keyOutcomes: [
      "Full crawl: 404s, redirect chains, canonical tags, and Core Web Vitals",
      "GA4 & Search Console telemetry audit for attribution integrity",
      "AI Overviews and ChatGPT brand citation benchmark testing",
    ],
  },
  {
    phase: "STEP 2",
    stepNumber: "02",
    title: "Step 2: Plan & Optimise",
    icon: Target,
    badge: "Prioritised Execution",
    summary:
      "You receive a written roadmap that ranks every recommendation by expected impact and effort, explains why each matters and shows how we'll measure it. We walk you through it, agree priorities together and start with the work most likely to move the numbers. Where your own team or developers are involved, we provide clear briefs with acceptance criteria.",
    keyOutcomes: [
      "Impact vs. effort priority matrix to eliminate wasted budget",
      "Developer-ready Jira/GitHub briefs with exact URL specifications",
      "Structured schema, meta hierarchies, and technical repair rollouts",
    ],
  },
  {
    phase: "STEP 3",
    stepNumber: "03",
    title: "Step 3: Track & Improve",
    icon: BarChart3,
    badge: "Monthly Telemetry",
    summary:
      "Each month you get a short report: what we did, what changed in visibility, traffic and enquiries, what we learned and what we'll do next. Every change is logged, so you can always see what was done and when.",
    keyOutcomes: [
      "Transparent monthly reporting in plain English, free of vanity jargon",
      "Direct commercial tracking: enquiries, phone calls, and revenue",
      "Complete changelog documenting every on-page and technical edit",
    ],
  },
  {
    phase: "STEP 4",
    stepNumber: "04",
    title: "Step 4: Grow & Scale",
    icon: Rocket,
    badge: "Quarterly Expansion",
    summary:
      "Every quarter we step back to review whether the priorities are still right. When something works, we invest more in it; when it doesn't, we change course quickly and explain why.",
    keyOutcomes: [
      "Quarterly strategy realignment based on verified conversion data",
      "Expansion into new keyword clusters, digital PR, and international markets",
      "Iterative Core Web Vitals and CRO testing for compounding returns",
    ],
  },
];

const ENGAGEMENT_MODELS = [
  {
    title: "Ongoing Growth Retainer",
    tagline: "Full-Funnel Organic Leadership",
    badge: "Most Popular",
    description:
      "A complete partnership where we take full ownership of technical SEO, content optimization, Core Web Vitals, and ongoing telemetry.",
    features: [
      "Dedicated senior specialist point of contact",
      "Continuous technical auditing and real-time crawl monitoring",
      "Monthly plain-English reporting with clear next steps",
      "Full ownership of all data, code, content, and accounts",
    ],
    cta: "Inquire About Retainer",
  },
  {
    title: "Technical Audit & Architecture Sprint",
    tagline: "Fixed-Scope 30-Day Overhaul",
    badge: "Fixed Scope",
    description:
      "A 150-point diagnostic ideal for teams preparing for site migrations, redesigns, or recovering from algorithmic drops.",
    features: [
      "Comprehensive Screaming Frog & Sitebulb crawl analysis",
      "Developer-ready Jira tickets with clear acceptance criteria",
      "JSON-LD Schema deployment & canonical mapping",
      "30-day post-launch indexation and Search Console monitoring",
    ],
    cta: "Request Technical Sprint",
  },
  {
    title: "Strategic Advisory & Fractional Head of SEO",
    tagline: "Executive Search Governance",
    badge: "High Growth",
    description:
      "High-level strategic guidance for established brands with internal marketing or engineering teams that need technical direction.",
    features: [
      "Bi-weekly executive consultation and roadmap governance",
      "Cross-agency alignment (developers, copywriters, PPC teams)",
      "Technical code review for upcoming releases",
      "Team training, recruitment assistance, and tooling review",
    ],
    cta: "Explore Advisory",
  },
];

/* =========================================================
   HOW WE WORK CLIENT COMPONENT
========================================================= */

export default function HowWeWorkClient() {
  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#0B1220] text-slate-900 dark:text-slate-100 font-[family-name:var(--font-plus-jakarta-sans)] transition-colors duration-500 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-[650px] h-[650px] rounded-full bg-[#2563EB]/[0.08] dark:bg-[#2563EB]/[0.12] blur-[160px]" />
        <div className="absolute top-1/2 right-10 w-[600px] h-[600px] rounded-full bg-[#14B8A6]/[0.07] dark:bg-[#14B8A6]/[0.09] blur-[170px]" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#2563EB 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-24">
        
        {/* =========================================================
            HEADER & BREADCRUMBS
        ========================================================= */}
        <div className="mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6"
          >
            <Link
              href="/"
              className="hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span className="text-slate-300 dark:text-slate-600">/</span>
            <Link
              href="/about"
              className="hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors"
            >
              About
            </Link>
            <span className="text-slate-300 dark:text-slate-600">/</span>
            <span className="text-[#2563EB] dark:text-[#60A5FA] font-bold">How We Work</span>
          </motion.div>

          {/* Hero Row: Left Title & Pitch + Right "What You Can Expect" Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-10 border-b border-slate-200/80 dark:border-white/10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/20 text-[#2563EB] dark:text-[#60A5FA] text-[11px] font-black uppercase tracking-wider mb-4">
                <Compass className="w-3.5 h-3.5" />
                <span>HOW WE WORK · TRANSPARENT METHODOLOGY</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-950 dark:text-white">
                <AnimatedText text="A Clear Process From First Call to" />
                <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#14B8A6] bg-clip-text text-transparent">
                  Measurable Growth.
                </span>
              </h1>

              <p className="mt-5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                You should always know what we&apos;re working on, why, and what happens next. Every MBSA Digital engagement, whether SEO, a new website, paid media or social, follows the same simple four-step process.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#2563EB] text-white text-xs sm:text-[13.5px] font-bold border hover:border-blue-800 shadow-md shadow-[#2563EB] hover:shadow-[#2563EB] hover:-translate-y-0.5 transition-all duration-300 min-h-[42px] sm:min-h-[44px] touch-manipulation"
                >
                  <span>Book a Discovery Call</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href="#the-process"
                  className="relative group/link inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/90 dark:bg-[#0f0f11] backdrop-blur-xl text-stone-800 dark:text-white text-xs sm:text-[13.5px] font-semibold shadow-sm hover:bg-orange-600/[0.10] transition-all duration-300 min-h-[42px] sm:min-h-[44px] touch-manipulation before:content-[''] before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-orange-500 before:via-amber-400 before:to-orange-600 before:opacity-0 before:transition-opacity before:duration-300 before:pointer-events-none hover:before:opacity-100 after:content-[''] after:absolute after:inset-[1px] after:rounded-full after:bg-white/90 dark:after:bg-[#0f0f11] after:opacity-0 after:transition-opacity after:duration-300 after:pointer-events-none hover:after:opacity-100"
                >
                  <span className="relative z-10">Explore the 4 Steps</span>
                  <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right: "What You Can Expect" Box (Exact match to Image 2) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#111B2E] border border-blue-500/20 dark:border-blue-500/30 shadow-xl shadow-blue-500/[0.05] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

                <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA]" />
                  <span>What You Can Expect</span>
                </h3>

                <div className="space-y-3.5">
                  {WHAT_YOU_CAN_EXPECT.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                        <Check className="w-3 h-3" />
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span>Guaranteed transparency</span>
                  <span className="text-[#2563EB] dark:text-[#60A5FA] font-bold">100% Client Ownership</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =========================================================
            "IN SHORT" CALLOUT BOX (EXACT MATCH TO IMAGE 2)
        ========================================================= */}
        <section className="mb-20 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111B2E] border border-blue-500/20 dark:border-blue-500/30 shadow-md shadow-blue-500/[0.03] relative"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-xs bg-[#2563EB]" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#2563EB] dark:text-[#60A5FA]">
                IN SHORT
              </span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
              We start with a free discovery call, then follow four steps:{" "}
              <strong className="text-[#2563EB] dark:text-[#60A5FA] font-black">Discover &amp; Analyse</strong> (audit your data and competitors),{" "}
              <strong className="text-[#2563EB] dark:text-[#60A5FA] font-black">Plan &amp; Optimise</strong> (agree a prioritised roadmap and fix the biggest issues),{" "}
              <strong className="text-[#2563EB] dark:text-[#60A5FA] font-black">Track &amp; Improve</strong> (measure results monthly) and{" "}
              <strong className="text-[#2563EB] dark:text-[#60A5FA] font-black">Grow &amp; Scale</strong> (invest more in what works).
            </p>
          </motion.div>
        </section>

        {/* =========================================================
            SIMPLE 4-STEP PROCESS (HORIZONAL OVERVIEW - IMAGE 2)
        ========================================================= */}
        <section id="the-process" className="mb-24 sm:mb-32 scroll-mt-28">
          <div className="rounded-[32px] sm:rounded-[36px] bg-[#0F172A] text-white p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden border border-white/10">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-teal-500/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 mb-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-1 bg-[#2563EB] rounded-full" />
                <span className="text-xs font-black uppercase tracking-widest text-[#38BDF8]">
                  THE MBSA PROCESS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                Simple 4-Step Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {SIMPLE_FOUR_STEPS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.1 }}
                    className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-400/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-black px-2.5 py-1 rounded-md bg-white/10 text-[#38BDF8]">
                          {item.step}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-[#38BDF8] group-hover:scale-110 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-base font-black text-white mb-2 group-hover:text-[#38BDF8] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-bold text-slate-400 group-hover:text-white transition-colors">
                      <span>Phase {item.step} Delivery</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            DETAILED STEP-BY-STEP BREAKDOWN (IMAGE 2)
        ========================================================= */}
        <section className="mb-24 sm:mb-32">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-1 rounded-full bg-[#2563EB] dark:bg-[#14B8A6]" />
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#2563EB] dark:text-[#14B8A6]">
              DETAILED METHODOLOGY · STEP BY STEP
            </span>
          </div>

          <div className="space-y-6">
            {DETAILED_PHASES.map((phase, idx) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={phase.stepNumber}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="
                    p-6 sm:p-8
                    rounded-3xl
                    bg-white dark:bg-[#111B2E]
                    border border-slate-200/80 dark:border-white/10
                    shadow-xl shadow-blue-500/[0.03]
                    relative overflow-hidden
                    hover:border-blue-500/30 transition-all
                  "
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2.5 mb-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-blue-500/10 text-[#2563EB] dark:text-[#60A5FA] text-[10px] font-mono font-black">
                          {phase.phase}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          {phase.badge}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white leading-snug">
                        {phase.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-3 max-w-3xl">
                        {phase.summary}
                      </p>
                    </div>

                    <div className="lg:w-80 p-4 rounded-2xl bg-slate-50 dark:bg-[#0B1220]/70 border border-slate-200/60 dark:border-white/5 shrink-0">
                      <span className="text-[11px] font-black uppercase tracking-wider text-slate-900 dark:text-white block mb-2.5">
                        Key Deliverables
                      </span>
                      <div className="space-y-2">
                        {phase.keyOutcomes.map((outcome, oIdx) => (
                          <div key={oIdx} className="flex items-start gap-2">
                            <span className="text-emerald-500 shrink-0 text-xs mt-0.5">✓</span>
                            <span className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                              {outcome}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* =========================================================
            WAYS TO WORK WITH US (ENGAGEMENT MODELS - IMAGE 2)
        ========================================================= */}
        <section className="mb-24 sm:mb-32">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-1 rounded-full bg-[#2563EB] dark:bg-[#14B8A6]" />
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#2563EB] dark:text-[#14B8A6]">
              ENGAGEMENT MODELS · WAYS TO WORK WITH US
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ENGAGEMENT_MODELS.map((model, idx) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="
                  p-6 sm:p-7
                  rounded-3xl
                  bg-white dark:bg-[#111B2E]
                  border border-slate-200/80 dark:border-white/10
                  shadow-xl shadow-blue-500/[0.04]
                  flex flex-col justify-between
                  hover:border-[#2563EB] dark:hover:border-[#2563EB]
                  transition-all group
                "
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/10 text-[#2563EB] dark:text-[#60A5FA]">
                      {model.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">0{idx + 1}</span>
                  </div>

                  <h3 className="text-lg font-black text-slate-950 dark:text-white leading-snug">
                    {model.title}
                  </h3>
                  <p className="text-xs font-bold text-[#2563EB] dark:text-[#38BDF8] mt-0.5">
                    {model.tagline}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                    {model.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-white/10 space-y-2.5">
                    {model.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <span className="text-emerald-500 shrink-0 text-xs mt-0.5">✓</span>
                        <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-6 w-full py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-[#2563EB] hover:text-white dark:hover:bg-[#2563EB] text-slate-900 dark:text-white text-xs font-bold transition-all inline-flex items-center justify-center gap-1.5"
                >
                  <span>{model.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =========================================================
            BOTTOM STRATEGIC CTA
        ========================================================= */}
        <section className="
          rounded-[32px] sm:rounded-[40px]
          bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#0F172A]
          p-8 sm:p-12 lg:p-16
          text-white
          shadow-2xl shadow-blue-500/25
          relative overflow-hidden
        ">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-sky-400/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-black uppercase tracking-wider text-white mb-4 border border-white/20">
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>Free Diagnostic Conversation</span>
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Ready to begin with a free discovery call?
            </h3>

            <p className="mt-4 text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-2xl">
              No sales pitches, no jargon. Just an honest discussion about who your best customers are and what will move your numbers.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#2563EB] text-white text-xs sm:text-[13.5px] font-bold border hover:border-blue-800 shadow-md shadow-[#2563EB] hover:shadow-[#2563EB] hover:-translate-y-0.5 transition-all duration-300 min-h-[42px] sm:min-h-[44px] touch-manipulation"
              >
                <span>Book a Discovery Call</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/analytics"
                className="relative group/link inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/90 dark:bg-[#0f0f11] backdrop-blur-xl text-stone-800 dark:text-white text-xs sm:text-[13.5px] font-semibold shadow-sm hover:bg-orange-600/[0.10] transition-all duration-300 min-h-[42px] sm:min-h-[44px] touch-manipulation before:content-[''] before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-orange-500 before:via-amber-400 before:to-orange-600 before:opacity-0 before:transition-opacity before:duration-300 before:pointer-events-none hover:before:opacity-100 after:content-[''] after:absolute after:inset-[1px] after:rounded-full after:bg-white/90 dark:after:bg-[#0f0f11] after:opacity-0 after:transition-opacity after:duration-300 after:pointer-events-none hover:after:opacity-100"
              >
                <span className="relative z-10">Inspect Verified Proofs</span>
                <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}


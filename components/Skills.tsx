"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowUpRight, CheckCircle, Zap, Cpu, Sparkles, Radio } from "lucide-react";

/* =========================================================
   TYPES & CONTRACTS
========================================================= */

interface SkillItem {
  id: string;
  code: string;
  num: string;
  name: string;
  shortName: string;
  domain: string;
  overview: string;
  image: string;
  accentColor: string;
  frequency: string;
  proficiency: number;
  stack: { tool: string; tier: string }[];
  busOutputY: number;
}

/* =========================================================
   SKILL DATA
========================================================= */

const SKILLS_MATRIX: SkillItem[] = [
  {
    id: "seo",
    code: "NODE_01_SRCH",
    num: "01",
    name: "Search Engine Optimization",
    shortName: "01 SEO",
    domain: "Organic Discovery & Crawl Architecture",
    overview:
      "Algorithmic discoverability pipelines, Core Web Vitals profiling, semantic LD graph clustering, and crawl-budget preservation.",
    image: "/banner/semrush.png",
    accentColor: "#F97316",
    frequency: "98.4 kHz",
    proficiency: 96,
    busOutputY: 70,
    stack: [
      { tool: "Google Search Console", tier: "Telemetry" },
      { tool: "SEMrush Core", tier: "Auditing" },
      { tool: "Screaming Frog", tier: "Crawl Engine" },
      { tool: "Schema Markup", tier: "Microdata" },
    ],
  },
  {
    id: "analytics",
    code: "NODE_02_TELE",
    num: "02",
    name: "Analytics & Tracking",
    shortName: "02 Analytics",
    domain: "Server Ingestion & Event Stream Pipelines",
    overview:
      "Cookieless attribution engines, high-cardinality BigQuery event piping, dynamic user cohorting, and executive business dashboards.",
    image: "/banner/googleanalytics.png",
    accentColor: "#FB923C",
    frequency: "102.1 kHz",
    proficiency: 92,
    busOutputY: 155,
    stack: [
      { tool: "Google Analytics 4", tier: "Data Lake" },
      { tool: "Google Tag Manager", tier: "Ingestion" },
      { tool: "Looker Studio", tier: "Visualizer" },
      { tool: "Mixpanel", tier: "Funnels" },
    ],
  },
  {
    id: "web",
    code: "NODE_03_ENGN",
    num: "03",
    name: "Web and Development",
    shortName: "03 Web Dev",
    domain: "Sub-Second Reactive Full-Stack Runtimes",
    overview:
      "Edge-computed Next.js pipelines, TypeScript modular components, concurrent state sync, and sub-50ms interaction latencies.",
    image: "/banner/webdevelopement.png",
    accentColor: "#EA580C",
    frequency: "144.0 kHz",
    proficiency: 98,
    busOutputY: 155,
    stack: [
      { tool: "Next.js App Router", tier: "Framework" },
      { tool: "TypeScript Strict", tier: "Architecture" },
      { tool: "Tailwind CSS", tier: "Design System" },
      { tool: "Framer Motion", tier: "Kinematics" },
    ],
  },
  {
    id: "ads",
    code: "NODE_04_PPC",
    num: "04",
    name: "Ads & Meta PPC",
    shortName: "04 Paid Ads",
    domain: "High-ROAS Media & Bidding Automation",
    overview:
      "High-frequency audience targeting, automated multi-platform advertising scripts, viral distribution funnels, and retention models.",
    image: "/banner/googleads.png",
    accentColor: "#F97316",
    frequency: "86.2 kHz",
    proficiency: 89,
    busOutputY: 240,
    stack: [
      { tool: "Google Ads (PPC)", tier: "Search & Display" },
      { tool: "Meta Graph API", tier: "Bidding" },
      { tool: "LinkedIn Campaigns", tier: "B2B Outreach" },
      { tool: "TikTok Ads Manager", tier: "Creative Viral" },
    ],
  },
  {
    id: "social",
    code: "NODE_05_GMB",
    num: "05",
    name: "Google Business & Social",
    shortName: "05 Business",
    domain: "Local Map Pack & Conversion Heuristics",
    overview:
      "Local 3-Pack optimization, Google Business Profile scaling, review generation, spatial branding, and audience growth.",
    image: "/banner/googlebussiness.png",
    accentColor: "#FB923C",
    frequency: "112.5 kHz",
    proficiency: 94,
    busOutputY: 240,
    stack: [
      { tool: "Google Business Profile", tier: "Local SEO" },
      { tool: "Google Maps Citations", tier: "Directory" },
      { tool: "Figma Variables", tier: "Design Tokens" },
      { tool: "Adobe Photoshop CC", tier: "Creatives" },
    ],
  },
  {
    id: "ai",
    code: "NODE_06_AUTO",
    num: "06",
    name: "Creative and AI Tools",
    shortName: "06 AI Tools",
    domain: "Agent Pipelines & Webhook Orchestration",
    overview:
      "Context-aware LLM prompt chaining, autonomous agent loops, deterministic webhook runners, and self-healing data pipelines.",
    image: "/banner/aitools.png",
    accentColor: "#EA580C",
    frequency: "128.8 kHz",
    proficiency: 95,
    busOutputY: 325,
    stack: [
      { tool: "OpenAI GPT-4o", tier: "Inference" },
      { tool: "Claude 3.5 Sonnet", tier: "Reasoning" },
      { tool: "Make.com Automation", tier: "Workflows" },
      { tool: "Vector DB Embeddings", tier: "Knowledge" },
    ],
  },
];

/* =========================================================
   ANIMATION VARIANTS (STAGGERED OPEN CHOREOGRAPHY)
========================================================= */

const sectionContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const leftItemVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 24,
    },
  },
};

const DOCKING_VECTORS = [
  { x: 0, y: -90, rotate: -12, scale: 0.55 },   // 0: top center (SEO)
  { x: -85, y: -48, rotate: -16, scale: 0.55 }, // 1: top-left (Analytics)
  { x: 85, y: -48, rotate: 16, scale: 0.55 },   // 2: top-right (Web Dev)
  { x: -85, y: 48, rotate: -16, scale: 0.55 },  // 3: bottom-left (Ads)
  { x: 85, y: 48, rotate: 16, scale: 0.55 },    // 4: bottom-right (Social)
  { x: 0, y: 90, rotate: 12, scale: 0.55 },     // 5: bottom center (AI Tools)
];

const magneticCellVariants: Variants = {
  hidden: (i: number) => {
    const v = DOCKING_VECTORS[i] ?? { x: 0, y: 60, rotate: 0, scale: 0.6 };
    return {
      opacity: 0,
      scale: v.scale,
      x: v.x,
      y: v.y,
      rotate: v.rotate,
      filter: "blur(6px)",
    };
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 15,
      mass: 0.8,
      delay: 0.12 + i * 0.08,
    },
  }),
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Skills() {
  const [selectedId, setSelectedId] = useState<string>("web");
  const activeSkill =
    SKILLS_MATRIX.find((s) => s.id === selectedId) ?? SKILLS_MATRIX[2];

  return (
    <section
      id="tools"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-36 bg-[#FFF8F3] dark:bg-[#080706] text-stone-900 dark:text-white transition-colors duration-500"
    >
      {/* Precision Ambient Grids & Specular Rays */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.14, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/4 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EA580C]/[0.10] blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute right-10 top-1/2 h-[420px] w-[420px] rounded-full bg-[#FB923C]/[0.08] blur-[160px]"
        />

        {/* Micro-dot Matrix Pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <motion.div
        variants={sectionContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"
      >
        {/* 3-Column Layout: Left Content | Center Honeycomb Hive | Right Animated Dossier Card */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">

          {/* 1. LEFT SIDE: Title & Status */}
          <div className="flex flex-col items-center text-center lg:col-span-4 lg:items-start lg:text-left">
            <motion.div variants={leftItemVariants} className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#EA580C] dark:bg-[#F97316]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-[#EA580C] dark:text-[#F97316]">
                TechStack
              </span>
            </motion.div>

            <motion.h2
              variants={leftItemVariants}
              className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight leading-[1.08]"
            >
              Honeycomb Reactors.
              <br />
              <span className="text-[#EA580C]">
                Hardware-Grade Execution.
              </span>
            </motion.h2>

            <motion.p
              variants={leftItemVariants}
              className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-stone-700 dark:text-stone-300"
            >
              Tessellated hexagon clusters routed through a continuous motherbus.
              Hover over or select any cell to inspect its internal logic, stack,
              and bandwidth.
            </motion.p>



            <motion.div variants={leftItemVariants} className="mt-8">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-stone-300 dark:border-white/20 bg-white/80 dark:bg-white/[0.04] px-7 py-3.5 text-xs font-bold backdrop-blur-xl transition-all duration-300 hover:border-[#EA580C] hover:bg-[#EA580C] hover:text-white hover:shadow-[0_0_40px_rgba(234,88,12,0.4)]"
              >
                <span>Let's Start Your Project</span>
                <ArrowUpRight className="h-4 w-4 text-[#EA580C] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              </a>
            </motion.div>
          </div>

          {/* 2. CENTER: Animated Honeycomb Wall Cluster (Magnetic Assembly) */}
          <div className="relative flex flex-col items-center justify-center lg:col-span-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="relative flex w-full max-w-[340px] flex-col items-center justify-center py-4 sm:max-w-[400px]"
            >

              {/* Row 1: 1 Hexagon */}
              <div className="flex justify-center">
                <HexCell
                  index={0}
                  skill={SKILLS_MATRIX[0]}
                  isSelected={selectedId === SKILLS_MATRIX[0].id}
                  onSelect={() => setSelectedId(SKILLS_MATRIX[0].id)}
                />
              </div>

              {/* Row 2: 2 Interlocked Hexagons */}
              <div className="-mt-6 min-[380px]:-mt-7 sm:-mt-9 flex justify-center gap-3 min-[380px]:gap-4 sm:gap-6">
                <HexCell
                  index={1}
                  skill={SKILLS_MATRIX[1]}
                  isSelected={selectedId === SKILLS_MATRIX[1].id}
                  onSelect={() => setSelectedId(SKILLS_MATRIX[1].id)}
                />
                <HexCell
                  index={2}
                  skill={SKILLS_MATRIX[2]}
                  isSelected={selectedId === SKILLS_MATRIX[2].id}
                  onSelect={() => setSelectedId(SKILLS_MATRIX[2].id)}
                />
              </div>

              {/* Row 3: 2 Interlocked Hexagons */}
              <div className="-mt-6 min-[380px]:-mt-7 sm:-mt-9 flex justify-center gap-3 min-[380px]:gap-4 sm:gap-6">
                <HexCell
                  index={3}
                  skill={SKILLS_MATRIX[3]}
                  isSelected={selectedId === SKILLS_MATRIX[3].id}
                  onSelect={() => setSelectedId(SKILLS_MATRIX[3].id)}
                />
                <HexCell
                  index={4}
                  skill={SKILLS_MATRIX[4]}
                  isSelected={selectedId === SKILLS_MATRIX[4].id}
                  onSelect={() => setSelectedId(SKILLS_MATRIX[4].id)}
                />
              </div>

              {/* Row 4: 1 Hexagon */}
              <div className="-mt-6 min-[380px]:-mt-7 sm:-mt-9 flex justify-center">
                <HexCell
                  index={5}
                  skill={SKILLS_MATRIX[5]}
                  isSelected={selectedId === SKILLS_MATRIX[5].id}
                  onSelect={() => setSelectedId(SKILLS_MATRIX[5].id)}
                />
              </div>
            </motion.div>
          </div>

          {/* 3. RIGHT SIDE: Animated Diagnostic Dossier Card */}
          <div className="w-full lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSkill.id}
                initial={{ opacity: 0, y: 22, scale: 0.94, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, scale: 0.96, filter: "blur(6px)" }}
                transition={{ type: "spring", stiffness: 300, damping: 26 }}
                className="relative overflow-hidden rounded-3xl border border-orange-200/80 bg-white dark:bg-[#141210] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition-colors duration-500 dark:border-white/10 sm:p-8"
              >
                {/* High-tech Scanning Sweep Wave */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    repeatDelay: 3.5,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute top-0 left-0 h-[2px] w-1/2 bg-gradient-to-r from-transparent via-[#EA580C] to-transparent"
                />

                {/* Glow Accents */}

                {/* Image Badge + Subtitle & Title */}
                <div className="flex items-start gap-4">
                  <motion.div
                    initial={{ scale: 0.8, rotate: -8 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-stone-200 dark:border-white/10 bg-white p-2.5 sm:h-20 sm:w-20 sm:rounded-3xl shadow-md"
                  >
                    <Image
                      src={activeSkill.image}
                      alt={activeSkill.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-contain"
                    />
                  </motion.div>

                  <div className="flex-1 min-w-0">

                    <h3 className="mt-1.5 text-2xl font-black text-stone-900 dark:text-white sm:text-3xl leading-tight">
                      {activeSkill.name}
                    </h3>
                  </div>
                </div>

                {/* Domain Category */}
                <div className="mt-4 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#EA580C] animate-pulse" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#EA580C] dark:text-[#FB923C]">
                    {activeSkill.domain}
                  </span>
                </div>

                {/* Overview */}
                <p className="mt-2 text-xs leading-relaxed text-stone-600 dark:text-stone-300 sm:text-sm">
                  {activeSkill.overview}
                </p>

                {/* Animated Mastery / Proficiency Benchmark Bar */}
                <div className="mt-5 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">


                </div>

                {/* Micro Tool Chips with Staggered Cascading Animation */}
                <div className="mt-5">
                  <div className="space-y-2.5">
                    {activeSkill.stack.map((item, idx) => (
                      <motion.div
                        key={item.tool}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.12 + idx * 0.06, duration: 0.35, ease: "easeOut" }}
                        className="flex items-center justify-between rounded-xl border border-black/[0.06] bg-black/[0.02] px-4 py-2.5 transition-all hover:border-[#EA580C]/40 hover:bg-black/[0.035] dark:border-white/[0.04] dark:bg-white/[0.02] dark:hover:border-[#EA580C]/40 dark:hover:bg-white/[0.04]"
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle className="h-4 w-4 shrink-0 text-[#EA580C]" />
                          <span className="text-xs sm:text-sm font-bold text-stone-800 dark:text-white">
                            {item.tool}
                          </span>
                        </div>
                        <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400">
                          {item.tier}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* =========================================================
   INDIVIDUAL 3D HEXAGON CELL (Tessellated Polygon with Assembly Entrance)
========================================================= */
function HexCell({
  index,
  skill,
  isSelected,
  onSelect,
}: {
  index: number;
  skill: SkillItem;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.button
      type="button"
      custom={index}
      variants={magneticCellVariants}
      onClick={onSelect}
      onMouseEnter={onSelect}
      whileHover={{ scale: 1.08, zIndex: 30 }}
      whileTap={{ scale: 0.94 }}
      className={`group relative h-24 w-24 min-[380px]:h-28 min-[380px]:w-28 cursor-pointer select-none sm:h-36 sm:w-36 ${isSelected ? "z-20" : "z-10"
        }`}
    >
      {/* Outer Breathing Pulsing Aura for Selected Cell */}
      {isSelected && (
        <motion.div
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.7, 0.25, 0.7],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.4,
            ease: "easeInOut",
          }}
          className="absolute -inset-2 rounded-full bg-[#EA580C]/30 blur-xl pointer-events-none"
        />
      )}

      {/* Hex Outer Border Shell (Only shown on active selection) */}
      {isSelected && (
        <div
          className="absolute inset-0 bg-gradient-to-tr from-[#EA580C] via-[#FB923C] to-amber-200 drop-shadow-[0_10px_25px_rgba(234,88,12,0.45)] dark:to-white dark:drop-shadow-[0_10px_25px_rgba(234,88,12,0.6)] transition-all duration-500"
          style={{
            clipPath:
              "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
          }}
        />
      )}

      {/* Hex Interior Chamber */}
      <div
        className={`absolute ${isSelected ? "inset-[2px]" : "inset-0"} flex flex-col items-center justify-center backdrop-blur-xl transition-colors duration-300 ${isSelected
          ? "bg-white dark:bg-[#111322]"
          : "bg-[#f5f3ef] group-hover:bg-[#ede9e3] dark:bg-[#090b14] dark:group-hover:bg-[#0e101c]"
          }`}
        style={{
          clipPath:
            "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
        }}
      >
        {/* Floating Image Badge */}
        <div
          className={`relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 transition-all duration-300 sm:h-14 sm:w-14 sm:rounded-2xl ${isSelected
            ? "ring-2 ring-[#EA580C]/60 shadow-[0_0_15px_rgba(234,88,12,0.35)]"
            : "shadow-sm group-hover:scale-105 group-hover:shadow-md"
            }`}
        >
          <Image
            src={skill.image}
            alt={skill.name}
            width={48}
            height={48}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Short ID */}
        <span
          className={`mt-1.5 font-mono text-[9px] font-black uppercase tracking-wider transition-colors duration-300 sm:text-[10px] ${isSelected
            ? "text-[#EA580C] dark:text-[#FB923C]"
            : "text-stone-500 group-hover:text-stone-800 dark:text-stone-400 dark:group-hover:text-stone-200"
            }`}
        >
          {skill.shortName}
        </span>
      </div>
    </motion.button>
  );
}
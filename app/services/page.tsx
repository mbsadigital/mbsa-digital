"use client";

import React, { useState, useEffect, useCallback, Suspense, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  ChevronLeft,
  Search,
  BarChart3,
  Globe,
  Share2,
  Target,
  TrendingUp,
  MapPin,
  Link2,
  DollarSign,
  Gauge,
  CheckCircle2,
  Sparkles,
  Layers,
  Zap,
  Award,
  X,
  Rocket,
  FileCheck,
  ShoppingCart,
  Smartphone,
  Mail,
  ShieldCheck,
  Code2,
  Star,
  Flame,
  Database,
  Shield,
} from "lucide-react";
import { SERVICES_DATA } from "@/lib/servicesData";

// Icon mapping helper
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  BarChart3,
  Globe,
  Share2,
  Target,
  TrendingUp,
  MapPin,
  Zap,
  Layers,
  Link2,
  DollarSign,
  Gauge,
  FileCheck,
  ShoppingCart,
  Sparkles,
  Award,
  Mail,
  Smartphone,
  ShieldCheck,
  Code2,
  Rocket,
};

// ========================================================
// TAILORED SERVICE CARD ILLUSTRATIONS (12 Visuals matching screenshot)
// ========================================================
export function ServiceCardIllustration({
  slug,
  isSelected,
  isHovered = false,
}: {
  slug: string;
  isSelected: boolean;
  isHovered?: boolean;
}) {
  switch (slug) {
    case "technical-seo":
    case "seo-services":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden p-1">
          {/* Exact Lottie-style Vector matching screenshot viewBox="0 0 550 187" */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 550 187"
            width="550"
            height="187"
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-full overflow-visible"
            fill="none"
          >
            {/* Ambient subtle blue aura when hovered */}
            {isHovered && (
              <motion.circle
                cx="275"
                cy="44"
                r="50"
                fill="#2563EB"
                className="opacity-15 dark:opacity-25 blur-xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
            )}

            {/* Static Base Network Connection Lines matching screenshot */}
            <path
              d="M 275,68 L 275,108 M 110,108 L 440,108 M 110,108 L 110,128 M 440,108 L 440,128"
              stroke="#BFDBFE"
              className="dark:stroke-blue-900/60"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Animated Data Stream Flow on Mouse Enter (plays on hover, stops on leave) */}
            <motion.path
              d="M 275,68 L 275,108 L 110,108 L 110,128 M 275,108 L 440,108 L 440,128"
              stroke="#2563EB"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="9 7"
              initial={{ strokeDashoffset: 0 }}
              animate={isHovered ? { strokeDashoffset: [0, -32] } : { strokeDashoffset: 0 }}
              transition={{ duration: 1.2, repeat: isHovered ? Infinity : 0, ease: "linear" }}
            />

            {/* Traveling Data Packets (Signal dots moving down and out when hovered) */}
            {isHovered && (
              <>
                {/* Left traveling packet */}
                <motion.circle
                  r="5"
                  fill="#1D4ED8"
                  animate={{
                    cx: [275, 275, 110, 110],
                    cy: [68, 108, 108, 128],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Right traveling packet */}
                <motion.circle
                  r="5"
                  fill="#1D4ED8"
                  animate={{
                    cx: [275, 275, 440, 440],
                    cy: [68, 108, 108, 128],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                />
              </>
            )}

            {/* Connection Junction Dots along the lines matching screenshot */}
            <circle cx="275" cy="88" r="4" fill="#3B82F6" />
            <circle cx="275" cy="108" r="5.5" fill="#2563EB" />
            <circle cx="195" cy="108" r="4" fill="#3B82F6" />
            <circle cx="355" cy="108" r="4" fill="#3B82F6" />
            <circle cx="110" cy="108" r="5" fill="#2563EB" />
            <circle cx="440" cy="108" r="5" fill="#2563EB" />

            {/* Glowing effect on junction dots when hovered */}
            {isHovered && (
              <>
                <motion.circle
                  cx="275"
                  cy="108"
                  r="10"
                  fill="#3B82F6"
                  opacity={0.35}
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <motion.circle
                  cx="110"
                  cy="108"
                  r="9"
                  fill="#3B82F6"
                  opacity={0.35}
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                />
                <motion.circle
                  cx="440"
                  cy="108"
                  r="9"
                  fill="#3B82F6"
                  opacity={0.35}
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                />
              </>
            )}

            {/* ================= CENTER TOP: Cloud Badge Medallion matching screenshot ================= */}
            <motion.g
              animate={isHovered ? { scale: [1, 1.05, 1], y: [0, -2, 0] } : { scale: 1, y: 0 }}
              transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0, ease: "easeInOut" }}
              style={{ transformOrigin: "275px 44px" }}
            >
              {/* Outer expanding pulse ring on hover */}
              <motion.circle
                cx="275"
                cy="44"
                r="25"
                stroke="#3B82F6"
                strokeWidth="1.5"
                initial={{ r: 25, opacity: 0 }}
                animate={isHovered ? { r: [25, 36, 46], opacity: [0.8, 0.3, 0] } : { r: 25, opacity: 0 }}
                transition={{ duration: 1.6, repeat: isHovered ? Infinity : 0, ease: "easeOut" }}
              />

              {/* Blue circular medallion */}
              <circle
                cx="275"
                cy="44"
                r="24"
                fill="#2563EB"
                className="drop-shadow-md"
              />

              {/* Cloud Icon inside medallion */}
              <path
                d="M 264 47 C 261 47 259 45 259 42.5 C 259 40 261 38 263.5 37.5 C 264 33.5 267.5 30.5 271.8 30.5 C 275.5 30.5 278.5 32.5 279.5 35.5 C 280.5 35 281.5 34.5 283 34.5 C 285.5 34.5 287.5 36.5 287.5 39 C 289 40 290 41.5 290 43.5 C 290 45.8 288.2 47 286 47 Z"
                fill="#FFFFFF"
              />

              {/* Checkmark badge on cloud */}
              <circle cx="284" cy="35" r="6" fill="#1D4ED8" stroke="#FFFFFF" strokeWidth="1.5" />
              <path
                d="M 282 35 L 283.5 36.5 L 286.5  33.5"
                stroke="#FFFFFF"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.g>

            {/* ================= LEFT SIDE: Stacked Server Rack matching screenshot ================= */}
            <motion.g
              animate={isHovered ? { y: [0, -2, 0] } : { y: 0 }}
              transition={{ duration: 1.2, repeat: isHovered ? Infinity : 0, ease: "easeInOut" }}
              style={{ transformOrigin: "110px 150px" }}
            >
              {/* Server Chassis 1 */}
              <rect
                x="86"
                y="132"
                width="48"
                height="15"
                rx="3.5"
                fill="none"
                stroke="#2563EB"
                strokeWidth="2.2"
              />
              <line x1="92" y1="139.5" x2="116" y2="139.5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
              <motion.circle
                cx="126"
                cy="139.5"
                r="2"
                fill="#10B981"
                animate={isHovered ? { opacity: [1, 0.3, 1] } : { opacity: 1 }}
                transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
              />

              {/* Server Chassis 2 */}
              <rect
                x="86"
                y="151"
                width="48"
                height="15"
                rx="3.5"
                fill="none"
                stroke="#2563EB"
                strokeWidth="2.2"
              />
              <line x1="92" y1="158.5" x2="116" y2="158.5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
              <motion.circle
                cx="126"
                cy="158.5"
                r="2"
                fill="#3B82F6"
                animate={isHovered ? { opacity: [1, 0.4, 1] } : { opacity: 1 }}
                transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0, delay: 0.2 }}
              />
            </motion.g>

            {/* ================= RIGHT SIDE: Cloud Folder Icon matching screenshot ================= */}
            <motion.g
              animate={isHovered ? { y: [0, -2, 0] } : { y: 0 }}
              transition={{ duration: 1.2, repeat: isHovered ? Infinity : 0, ease: "easeInOut", delay: 0.1 }}
              style={{ transformOrigin: "440px 150px" }}
            >
              {/* Folder Silhouette */}
              <path
                d="M 416 135 L 430 135 L 434 139 L 462 139 C 464 139 465.5 140.5 465.5 142.5 L 465.5 164.5 C 465.5 166.5 464 168 462 168 L 416 168 C 414 168 412.5 166.5 412.5 164.5 L 412.5 138.5 C 412.5 136.5 414 135 416 135 Z"
                fill="none"
                stroke="#2563EB"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              {/* Cloud emblem inside folder */}
              <path
                d="M 432 155 C 430.8 155 430 154.2 430 153.2 C 430 152.1 430.8 151.3 431.8 151 C 432 149.3 433.5 148.2 435.3 148.2 C 436.8 148.2 438 149 438.5 150.3 C 439 150 439.4 149.8 440 149.8 C 441 149.8 442 150.6 442 151.7 C 442.6 152.1 443 152.6 443 153.4 C 443 154.3 442.2 155 441.2 155 Z"
                fill="#3B82F6"
                opacity={0.85}
              />
            </motion.g>
          </svg>
        </div>
      );

    case "aeo-geo":
    case "aeo-geo-ai-search":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden p-1">
          {/* Exact Digital Strategy 5-Layer Stacked Illustration matching user screenshot (viewBox 0 0 550 187) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 550 187"
            width="550"
            height="187"
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-full overflow-visible"
            style={{ width: "100%", height: "100%", transform: "translate3d(0px, 0px, 0px)", contentVisibility: "visible" }}
            fill="none"
          >
            <defs>
              <filter id="ds-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <linearGradient id="ds-shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Ambient subtle blue aura when hovered */}
            {isHovered && (
              <motion.circle
                cx="275"
                cy="93"
                r="65"
                fill="#3B82F6"
                className="opacity-15 dark:opacity-25 blur-2xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
            )}

            {/* Subtle connecting vertical guide on hover */}
            <motion.line
              x1="275"
              y1="25"
              x2="275"
              y2="162"
              stroke="#93C5FD"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="dark:stroke-blue-800/60"
              initial={{ opacity: 0 }}
              animate={isHovered ? { opacity: [0.2, 0.7, 0.2] } : { opacity: 0.15 }}
              transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
            />

            {/* LAYER 1: Top-most "Analysis" */}
            <motion.g
              animate={isHovered ? { y: -34, opacity: 1 } : { y: 0, opacity: 0.7 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              style={{ transformOrigin: "275px 38px" }}
            >
              <rect
                x="170"
                y="22"
                width="210"
                height="32"
                rx="16"
                fill="#F0F7FF"
                className="dark:fill-slate-900/85"
                stroke="#BFDBFE"
                strokeWidth="1.5"
              />
              <text
                x="275"
                y="43"
                textAnchor="middle"
                fill="#3B82F6"
                className="dark:fill-blue-400"
                fontSize="14"
                fontWeight="600"
                fontFamily="system-ui, -apple-system, sans-serif"
                letterSpacing="0.02em"
              >
                Analysis
              </text>
            </motion.g>

            {/* LAYER 2: Second "Best Practices" */}
            <motion.g
              animate={isHovered ? { y: -17, opacity: 1 } : { y: 0, opacity: 0.85 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.04 }}
              style={{ transformOrigin: "275px 64px" }}
            >
              <rect
                x="145"
                y="46"
                width="260"
                height="36"
                rx="18"
                fill="#F0F7FF"
                className="dark:fill-slate-900/90"
                stroke="#93C5FD"
                strokeWidth="1.5"
              />
              <text
                x="275"
                y="69"
                textAnchor="middle"
                fill="#2563EB"
                className="dark:fill-blue-300"
                fontSize="15"
                fontWeight="600"
                fontFamily="system-ui, -apple-system, sans-serif"
                letterSpacing="0.02em"
              >
                Best Practices
              </text>
            </motion.g>

            {/* LAYER 4: Fourth "Consulting" (Underneath center) */}
            <motion.g
              animate={isHovered ? { y: 17, opacity: 1 } : { y: 0, opacity: 0.85 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.04 }}
              style={{ transformOrigin: "275px 126px" }}
            >
              <rect
                x="145"
                y="108"
                width="260"
                height="36"
                rx="18"
                fill="#F0F7FF"
                className="dark:fill-slate-900/90"
                stroke="#93C5FD"
                strokeWidth="1.5"
              />
              <text
                x="275"
                y="131"
                textAnchor="middle"
                fill="#2563EB"
                className="dark:fill-blue-300"
                fontSize="15"
                fontWeight="600"
                fontFamily="system-ui, -apple-system, sans-serif"
                letterSpacing="0.02em"
              >
                Consulting
              </text>
            </motion.g>

            {/* LAYER 5: Bottom-most "Execution" */}
            <motion.g
              animate={isHovered ? { y: 34, opacity: 1 } : { y: 0, opacity: 0.7 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              style={{ transformOrigin: "275px 152px" }}
            >
              <rect
                x="170"
                y="136"
                width="210"
                height="32"
                rx="16"
                fill="#F0F7FF"
                className="dark:fill-slate-900/85"
                stroke="#BFDBFE"
                strokeWidth="1.5"
              />
              <text
                x="275"
                y="157"
                textAnchor="middle"
                fill="#3B82F6"
                className="dark:fill-blue-400"
                fontSize="14"
                fontWeight="600"
                fontFamily="system-ui, -apple-system, sans-serif"
                letterSpacing="0.02em"
              >
                Execution
              </text>
            </motion.g>

            {/* LAYER 3: CENTER HERO PILL "Digital Strategy" */}
            <motion.g
              animate={isHovered ? { scale: [1, 1.05, 1], y: [0, -2, 0] } : { scale: 1, y: 0 }}
              transition={{ duration: 1.8, repeat: isHovered ? Infinity : 0, ease: "easeInOut" }}
              style={{ transformOrigin: "275px 96px" }}
            >
              {/* Outer expanding halo on hover */}
              {isHovered && (
                <motion.rect
                  x="121"
                  y="66"
                  width="308"
                  height="60"
                  rx="26"
                  stroke="#3B82F6"
                  strokeWidth="1.5"
                  initial={{ opacity: 0.8, scale: 1 }}
                  animate={{ opacity: 0, scale: 1.08 }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                  style={{ transformOrigin: "275px 96px" }}
                />
              )}

              {/* Main Pill Outer Shell */}
              <rect
                x="125"
                y="70"
                width="300"
                height="52"
                rx="22"
                fill="#EFF6FF"
                className="dark:fill-slate-900"
                stroke="#3B82F6"
                strokeWidth="2.5"
                filter="url(#ds-glow)"
              />

              {/* Inner Inset Decorative Border Ring matching screenshot */}
              <rect
                x="131"
                y="75"
                width="288"
                height="42"
                rx="18"
                fill="none"
                stroke="#93C5FD"
                className="dark:stroke-blue-700/60"
                strokeWidth="1.4"
              />

              {/* Shimmer light sweep when hovered */}
              {isHovered && (
                <motion.rect
                  x="131"
                  y="75"
                  width="85"
                  height="42"
                  rx="18"
                  fill="url(#ds-shimmer)"
                  animate={{ x: [120, 360] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                />
              )}

              {/* Main Hero Text "Digital Strategy" */}
              <text
                x="275"
                y="102"
                textAnchor="middle"
                fill="#1D4ED8"
                className="dark:fill-blue-300"
                fontSize="20"
                fontWeight="800"
                fontFamily="system-ui, -apple-system, sans-serif"
                letterSpacing="0.01em"
              >
                Digital Strategy
              </text>
            </motion.g>
          </svg>
        </div>
      );

    case "content-strategy":
    case "content-keyword-strategy":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden">
          {/* Animated SVG Tree Linking on Mouse Enter */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 90" fill="none">
            <motion.path
              d="M 100,32 L 40,65 M 100,32 L 100,65 M 100,32 L 160,65"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="text-stone-300 dark:text-white/20"
              initial={{ strokeDashoffset: 0 }}
              animate={isHovered ? { strokeDashoffset: [0, -24] } : { strokeDashoffset: 0 }}
              transition={{ duration: 1.2, repeat: isHovered ? Infinity : 0, ease: "linear" }}
            />
          </svg>
          <motion.div
            animate={isHovered ? { scale: 1.08, y: -2 } : { scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 px-4 py-2 rounded-full bg-white dark:bg-stone-900 border-2 border-stone-200 dark:border-white/15 shadow-sm group-hover:border-stone-500 dark:group-hover:border-white/40 transition-colors"
          >
            <span className="text-xs font-bold text-stone-900 dark:text-white tracking-wide">
              Topic Clusters
            </span>
          </motion.div>
          <div className="flex items-center gap-1.5 mt-2.5 relative z-10">
            <span className="px-2 py-0.5 rounded-md bg-stone-100/80 dark:bg-white/10 text-[9px] font-mono font-medium text-stone-600 dark:text-stone-400 border border-stone-200/60 dark:border-transparent group-hover:text-stone-950 dark:group-hover:text-white transition-colors">
              Pillars
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-400 dark:bg-white/40" />
            <span className="px-2 py-0.5 rounded-md bg-stone-100/80 dark:bg-white/10 text-[9px] font-mono font-medium text-stone-600 dark:text-stone-400 border border-stone-200/60 dark:border-transparent group-hover:text-stone-950 dark:group-hover:text-white transition-colors">
              High Intent
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-400 dark:bg-white/40" />
            <span className="px-2 py-0.5 rounded-md bg-stone-100/80 dark:bg-white/10 text-[9px] font-mono font-medium text-stone-600 dark:text-stone-400 border border-stone-200/60 dark:border-transparent group-hover:text-stone-950 dark:group-hover:text-white transition-colors">
              Rankings
            </span>
          </div>
        </div>
      );

    case "wordpress-ecommerce":
    case "website-design-development":
      return (
        <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden">
          {/* Animated SVG cart speed dashes */}
          <svg className="absolute -top-1 -right-2 w-14 h-14 pointer-events-none" viewBox="0 0 50 50" fill="none">
            <motion.circle
              cx="25"
              cy="25"
              r="18"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 4"
              className="text-emerald-500/50"
              animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 2.5, repeat: isHovered ? Infinity : 0, ease: "linear" }}
            />
          </svg>
          <motion.div
            animate={isHovered ? { scale: 1.05, y: -2 } : { scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-48 p-3 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-white/10 shadow-sm group-hover:border-stone-400 dark:group-hover:border-white/30 transition-all space-y-2 relative z-10"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <motion.div animate={isHovered ? { rotate: [0, -10, 10, 0] } : { rotate: 0 }} transition={{ duration: 0.5 }}>
                  <ShoppingCart className="w-4 h-4 text-stone-900 dark:text-white" />
                </motion.div>
                <span className="text-[11px] font-bold text-stone-800 dark:text-stone-200 group-hover:text-stone-950 dark:group-hover:text-white transition-colors">Store Checkout</span>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[9px] font-bold">1-Click</span>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-stone-200/60 dark:border-white/10 text-[10px]">
              <span className="text-stone-400">Order Value</span>
              <span className="font-bold text-stone-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">$240.00</span>
            </div>
          </motion.div>
        </div>
      );

    case "social-email":
    case "social-media-marketing":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden">
          {/* Animated SVG Flight Arc on Mouse Enter */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 90" fill="none">
            <motion.path
              d="M 25,65 Q 100,10 175,55"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              className="text-stone-400/60 dark:text-stone-500/60"
              initial={{ strokeDashoffset: 0 }}
              animate={isHovered ? { strokeDashoffset: [0, -30] } : { strokeDashoffset: 0 }}
              transition={{ duration: 1.4, repeat: isHovered ? Infinity : 0, ease: "linear" }}
            />
          </svg>
          <motion.div
            animate={isHovered ? { scale: 1.05, y: -2 } : { scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-44 p-3 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-white/10 shadow-sm group-hover:border-stone-400 dark:group-hover:border-white/30 transition-all"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5">
                <motion.div animate={isHovered ? { y: [-2, 2, -2] } : { y: 0 }} transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}>
                  <Mail className="w-4 h-4 text-stone-900 dark:text-white" />
                </motion.div>
                <span className="text-[11px] font-bold text-stone-800 dark:text-stone-200 group-hover:text-stone-950 dark:group-hover:text-white transition-colors">Email Flows</span>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-stone-100 dark:bg-white/10 text-stone-900 dark:text-white text-[9px] font-bold border border-stone-200/60 dark:border-transparent">98% Open</span>
            </div>
            <div className="w-full h-1.5 bg-stone-100 dark:bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-stone-900 dark:bg-white rounded-full"
                animate={{ width: isHovered ? "98%" : "80%" }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </motion.div>
          <span className="text-[9px] font-mono text-stone-500 dark:text-stone-400 mt-2 font-semibold group-hover:text-stone-950 dark:group-hover:text-white transition-colors">
            Automated Cart &amp; VIP Flows
          </span>
        </div>
      );

    case "analytics-reporting":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden px-2">
          <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.10] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:16px_16px]" />
          <motion.div
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            className="absolute top-2 right-4 px-2 py-0.5 rounded-full bg-stone-100 dark:bg-white/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold border border-stone-200/80 dark:border-white/15"
          >
            +312%
          </motion.div>
          {/* Animated Interactive SVG Line Chart */}
          <div className="relative z-10 w-full h-14 pt-1">
            <svg viewBox="0 0 200 60" className="w-full h-full overflow-visible" fill="none">
              <motion.path
                d="M 5,45 C 35,45 55,20 85,35 C 115,50 145,10 195,15"
                stroke="#10B981"
                strokeWidth={isHovered ? "3.5" : "2.5"}
                strokeLinecap="round"
                initial={{ pathLength: 1 }}
                animate={isHovered ? { pathLength: [0.2, 1] } : { pathLength: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />
              <circle cx="5" cy="45" r="3.5" fill="#10B981" />
              <circle cx="55" cy="20" r="3.5" fill="#10B981" />
              <circle cx="85" cy="35" r="3.5" fill="#10B981" />
              <motion.circle
                cx="145"
                cy="10"
                r={isHovered ? 6 : 4.5}
                fill="#10B981"
                stroke="#FFF"
                strokeWidth="1.5"
                animate={isHovered ? { scale: [1, 1.4, 1] } : { scale: 1 }}
                transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
              />
              <circle cx="195" cy="15" r="3.5" fill="#10B981" />
            </svg>
          </div>
          <span className="text-[9px] font-mono text-stone-500 dark:text-stone-400 font-bold uppercase tracking-wider mt-1 group-hover:text-stone-950 dark:group-hover:text-white transition-colors">
            GA4 &amp; Looker Telemetry
          </span>
        </div>
      );

    case "local-seo-gmb":
    case "local-seo":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden">
          {/* Animated SVG Concentric Waves */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 80" fill="none">
            <motion.circle
              cx="50"
              cy="36"
              r="18"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-stone-300 dark:text-white/20"
              initial={{ r: 18, opacity: 0.25 }}
              animate={isHovered ? { r: [16, 28, 42], opacity: [0.9, 0.4, 0] } : { r: 18, opacity: 0.25 }}
              transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0, ease: "easeOut" }}
            />
          </svg>
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={isHovered ? { scale: 1.12, y: -2 } : { scale: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-16 h-16 rounded-full border border-stone-200 dark:border-white/15 group-hover:border-stone-400 dark:group-hover:border-white/30 transition-colors flex items-center justify-center"
            >
              <div className="w-11 h-11 rounded-full border border-stone-300 dark:border-white/20 flex items-center justify-center">
                <div className="w-7 h-7 rounded-full bg-stone-900 dark:bg-white text-white dark:text-stone-900 flex items-center justify-center shadow-md">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-1.5 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-white/10 text-[9px] font-bold text-stone-700 dark:text-stone-300 shadow-sm group-hover:text-stone-950 dark:group-hover:text-white transition-colors">
            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
            <span>5.0 Google Map Pack #1</span>
          </div>
        </div>
      );

    case "conversion-rate-optimization":
    case "conversion-rate-optimisation":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none px-3 overflow-hidden">
          <div className="w-full max-w-[180px] space-y-1.5">
            <div className="flex items-center justify-between text-[9px] font-semibold text-stone-500">
              <span>Variant A</span>
              <span>2.4% CVR</span>
            </div>
            <div className="w-full h-1.5 bg-stone-100 dark:bg-white/10 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-stone-300 dark:bg-white/30 rounded-full" />
            </div>
            <div className="flex items-center justify-between text-[9px] font-bold text-stone-900 dark:text-white pt-0.5 group-hover:text-stone-950 dark:group-hover:text-white transition-colors">
              <span className="flex items-center gap-1">
                <motion.div animate={isHovered ? { scale: [1, 1.3, 1] } : { scale: 1 }} transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}>
                  <Flame className="w-3 h-3 text-emerald-500" />
                </motion.div>
                Variant B (Winner)
              </span>
              <span className="text-emerald-600 dark:text-emerald-400">+48% Lift</span>
            </div>
            <div className="w-full h-1.5 bg-stone-100 dark:bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-emerald-500 rounded-full"
                animate={{ width: isHovered ? "100%" : "80%" }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      );

    case "programmatic-seo":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden">
          {/* Animated SVG Path connecting database on Mouse Enter */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 90" fill="none">
            <motion.path
              d="M 60,35 L 140,35"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="text-emerald-500/60"
              initial={{ strokeDashoffset: 0 }}
              animate={isHovered ? { strokeDashoffset: [0, -24] } : { strokeDashoffset: 0 }}
              transition={{ duration: 1, repeat: isHovered ? Infinity : 0, ease: "linear" }}
            />
          </svg>
          <div className="flex items-center gap-2 mb-1.5">
            <motion.div
              animate={isHovered ? { rotate: [0, -10, 10, 0], scale: 1.1 } : { rotate: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-7 h-7 rounded-lg bg-stone-100 dark:bg-white/10 text-stone-900 dark:text-white flex items-center justify-center border border-stone-200/80 dark:border-white/15"
            >
              <Database className="w-3.5 h-3.5" />
            </motion.div>
            <span className="text-[10px] font-mono font-bold text-stone-700 dark:text-stone-300 group-hover:text-stone-950 dark:group-hover:text-white transition-colors">Database Engine</span>
          </div>
          <div className="flex items-center gap-1.5 text-[9px] font-mono text-stone-500">
            <span className="px-2 py-0.5 rounded bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-white/10 group-hover:border-stone-400 dark:group-hover:border-white/30 group-hover:text-stone-950 dark:group-hover:text-white transition-colors">
              /city/seo
            </span>
            <span>→</span>
            <span className="px-2 py-0.5 rounded bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-bold shadow-sm">
              10K+ Pages
            </span>
          </div>
        </div>
      );

    case "link-building-authority":
    case "link-building-digital-pr":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden">
          {/* Animated SVG Beam on Mouse Enter */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 90" fill="none">
            <motion.line
              x1="55"
              y1="40"
              x2="145"
              y2="40"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="text-stone-300 dark:text-white/20"
              initial={{ strokeDashoffset: 0 }}
              animate={isHovered ? { strokeDashoffset: [0, -32] } : { strokeDashoffset: 0 }}
              transition={{ duration: 1.2, repeat: isHovered ? Infinity : 0, ease: "linear" }}
            />
          </svg>
          <div className="flex items-center justify-center gap-3 relative z-10">
            <motion.div
              animate={isHovered ? { scale: 1.1, y: -2 } : { scale: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-9 h-9 rounded-xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-white/10 shadow-sm flex flex-col items-center justify-center text-center"
            >
              <Shield className="w-3.5 h-3.5 text-stone-900 dark:text-white" />
              <span className="text-[7px] font-mono font-bold">DA 65+</span>
            </motion.div>
            <motion.div animate={isHovered ? { rotate: 180 } : { rotate: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-1 text-stone-600 dark:text-stone-400">
              <Link2 className="w-4 h-4 text-emerald-500" />
            </motion.div>
            <motion.div
              animate={isHovered ? { scale: 1.1, y: -2 } : { scale: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-9 h-9 rounded-xl bg-stone-100 dark:bg-white/10 border border-stone-200/80 dark:border-white/15 flex flex-col items-center justify-center text-center"
            >
              <span className="text-[7px] font-bold text-stone-900 dark:text-white">DO-FOLLOW</span>
              <span className="text-[6px] text-stone-500">Editorial</span>
            </motion.div>
          </div>
          <span className="text-[9px] font-mono text-stone-500 dark:text-stone-400 mt-2 font-semibold group-hover:text-stone-950 dark:group-hover:text-white transition-colors">
            White-Hat Digital PR Backlinks
          </span>
        </div>
      );

    case "paid-search-ppc":
    case "google-ads-management":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none px-3 overflow-hidden">
          {/* Animated SVG Target Reticle on Mouse Enter */}
          <svg className="absolute -top-2 -right-2 w-14 h-14 pointer-events-none" viewBox="0 0 50 50" fill="none">
            <motion.circle
              cx="25"
              cy="25"
              r="18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              className="text-stone-400/60 dark:text-white/20"
              animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 3, repeat: isHovered ? Infinity : 0, ease: "linear" }}
            />
          </svg>
          <motion.div
            animate={isHovered ? { scale: 1.05, y: -2 } : { scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-[180px] p-2 rounded-xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-white/10 shadow-sm group-hover:border-stone-400 dark:group-hover:border-white/30 transition-all space-y-1 relative z-10"
          >
            <div className="flex items-center gap-1.5">
              <span className="px-1 rounded bg-stone-100 dark:bg-white/10 text-[8px] font-bold text-stone-700 dark:text-stone-300 border border-stone-200/60 dark:border-transparent">Ad</span>
              <span className="text-[10px] font-bold text-stone-900 dark:text-white truncate group-hover:text-stone-950 dark:group-hover:text-white transition-colors">High-Intent Commercial</span>
            </div>
            <div className="flex items-center justify-between text-[9px] text-stone-500 border-t border-stone-200/60 dark:border-white/10 pt-1">
              <span>Target ROAS</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">4.8x Return</span>
            </div>
          </motion.div>
        </div>
      );

    case "core-web-vitals-speed":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden">
          {/* Animated SVG Speed Gauge Ring */}
          <svg className="absolute -top-1 -right-1 w-14 h-14 pointer-events-none" viewBox="0 0 50 50" fill="none">
            <circle cx="25" cy="25" r="18" stroke="currentColor" strokeWidth="2" className="text-stone-200 dark:text-white/10" />
            <motion.circle
              cx="25"
              cy="25"
              r="18"
              stroke="#10B981"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="113"
              transform="rotate(-90 25 25)"
              initial={{ strokeDashoffset: 25 }}
              animate={isHovered ? { strokeDashoffset: [45, 8] } : { strokeDashoffset: 25 }}
              transition={{ duration: 0.8 }}
            />
          </svg>
          <div className="flex items-center gap-3 relative z-10">
            <motion.div
              animate={isHovered ? { scale: 1.12, y: -2 } : { scale: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-11 h-11 rounded-2xl bg-stone-100 dark:bg-white/10 text-stone-900 dark:text-white border border-stone-200/80 dark:border-white/15 flex flex-col items-center justify-center shadow-sm group-hover:bg-stone-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-stone-900 transition-colors"
            >
              <Zap className="w-4 h-4 text-emerald-500" />
              <span className="text-[8px] font-black">100/100</span>
            </motion.div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>LCP &lt; 0.6s</span>
              </div>
              <p className="text-[9px] text-stone-400 font-mono">Zero Layout Shift</p>
            </div>
          </div>
        </div>
      );

    case "seo-audit":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden p-2">
          <svg viewBox="0 0 550 187" className="w-full h-full" fill="none">
            <circle cx="275" cy="93" r="68" stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 4" className="opacity-25" />
            <circle cx="275" cy="93" r="44" stroke="#3B82F6" strokeWidth="1" className="opacity-30" />
            <motion.line
              x1="275" y1="93" x2="343" y2="93"
              stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round"
              animate={isHovered ? { rotate: 360 } : { rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "275px 93px" }}
            />
            <rect x="235" y="58" width="80" height="70" rx="16" fill="white" stroke="#2563EB" strokeWidth="2.5" className="dark:fill-[#0F1B35]" />
            <text x="275" y="92" textAnchor="middle" fill="#2563EB" fontWeight="900" fontSize="22" fontFamily="sans-serif">98%</text>
            <text x="275" y="112" textAnchor="middle" fill="#10B981" fontWeight="700" fontSize="10" fontFamily="sans-serif">HEALTH PASS</text>
            <rect x="70" y="65" width="120" height="56" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="2" className="dark:fill-[#0F1B35] dark:stroke-white/10" />
            <circle cx="92" cy="85" r="7" fill="#10B981" />
            <path d="M 89 85 L 91.5 87.5 L 95.5 83" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="106" y1="85" x2="170" y2="85" stroke="#64748B" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="92" cy="103" r="7" fill="#10B981" />
            <path d="M 89 103 L 91.5 105.5 L 95.5 101" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="106" y1="103" x2="155" y2="103" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
            <path d="M 190 93 L 235 93" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 3" />
            <rect x="360" y="65" width="120" height="56" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="2" className="dark:fill-[#0F1B35] dark:stroke-white/10" />
            <text x="375" y="88" fill="#2563EB" fontWeight="bold" fontSize="11" fontFamily="sans-serif">150+ CHECKS</text>
            <text x="375" y="106" fill="#64748B" fontSize="9" fontFamily="monospace">0 Penalties Found</text>
            <path d="M 315 93 L 360 93" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 3" />
          </svg>
        </div>
      );

    case "ecommerce-seo":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden p-2">
          <svg viewBox="0 0 550 187" className="w-full h-full" fill="none">
            <rect x="185" y="32" width="180" height="122" rx="16" fill="white" stroke="#2563EB" strokeWidth="2.5" className="dark:fill-[#0F1B35]" />
            <rect x="200" y="46" width="60" height="20" rx="6" fill="#10B981" />
            <text x="230" y="60" textAnchor="middle" fill="white" fontWeight="800" fontSize="10" fontFamily="sans-serif">RANK #1</text>
            <text x="270" y="60" fill="#F59E0B" fontSize="12">★★★★★</text>
            <line x1="200" y1="80" x2="330" y2="80" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" className="dark:stroke-white" />
            <line x1="200" y1="94" x2="290" y2="94" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
            <rect x="200" y="112" width="64" height="24" rx="8" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5" className="dark:fill-blue-950/60" />
            <text x="232" y="128" textAnchor="middle" fill="#2563EB" fontWeight="800" fontSize="12" fontFamily="sans-serif">$249</text>
            <motion.g animate={isHovered ? { y: [-3, 3, -3] } : { y: 0 }} transition={{ duration: 2, repeat: Infinity }}>
              <rect x="65" y="55" width="85" height="75" rx="14" fill="white" stroke="#E2E8F0" strokeWidth="2" className="dark:fill-[#0F1B35] dark:stroke-white/10" />
              <path d="M 85 75 L 92 75 L 102 100 L 128 100 L 134 82 L 95 82" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="104" cy="110" r="3.5" fill="#2563EB" />
              <circle cx="125" cy="110" r="3.5" fill="#2563EB" />
            </motion.g>
            <motion.g animate={isHovered ? { y: [3, -3, 3] } : { y: 0 }} transition={{ duration: 2.2, repeat: Infinity }}>
              <rect x="400" y="55" width="85" height="75" rx="14" fill="white" stroke="#E2E8F0" strokeWidth="2" className="dark:fill-[#0F1B35] dark:stroke-white/10" />
              <path d="M 415 108 L 435 95 L 452 100 L 472 75" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <text x="442" y="70" textAnchor="middle" fill="#10B981" fontWeight="800" fontSize="10">+210%</text>
            </motion.g>
          </svg>
        </div>
      );

    case "international-seo":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden p-2">
          <svg viewBox="0 0 550 187" className="w-full h-full" fill="none">
            <circle cx="275" cy="93" r="54" stroke="#2563EB" strokeWidth="2.5" className="opacity-90" />
            <ellipse cx="275" cy="93" rx="54" ry="24" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 3" />
            <ellipse cx="275" cy="93" rx="24" ry="54" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="221" y1="93" x2="329" y2="93" stroke="#2563EB" strokeWidth="1.5" />
            <line x1="275" y1="39" x2="275" y2="147" stroke="#2563EB" strokeWidth="1.5" />
            <motion.g animate={isHovered ? { scale: [1, 1.08, 1] } : { scale: 1 }} transition={{ duration: 1.5, repeat: Infinity }}>
              <rect x="80" y="60" width="80" height="34" rx="10" fill="white" stroke="#2563EB" strokeWidth="2" className="dark:fill-[#0F1B35]" />
              <text x="120" y="82" textAnchor="middle" fill="#2563EB" fontWeight="800" fontSize="12" fontFamily="monospace">en-US</text>
              <line x1="160" y1="77" x2="225" y2="85" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 3" />
            </motion.g>
            <motion.g animate={isHovered ? { scale: [1, 1.08, 1] } : { scale: 1 }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}>
              <rect x="80" y="108" width="80" height="34" rx="10" fill="white" stroke="#2563EB" strokeWidth="2" className="dark:fill-[#0F1B35]" />
              <text x="120" y="130" textAnchor="middle" fill="#2563EB" fontWeight="800" fontSize="12" fontFamily="monospace">en-GB</text>
              <line x1="160" y1="120" x2="225" y2="105" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 3" />
            </motion.g>
            <motion.g animate={isHovered ? { scale: [1, 1.08, 1] } : { scale: 1 }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}>
              <rect x="390" y="60" width="80" height="34" rx="10" fill="white" stroke="#2563EB" strokeWidth="2" className="dark:fill-[#0F1B35]" />
              <text x="430" y="82" textAnchor="middle" fill="#2563EB" fontWeight="800" fontSize="12" fontFamily="monospace">de-DE</text>
              <line x1="390" y1="77" x2="325" y2="85" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 3" />
            </motion.g>
            <motion.g animate={isHovered ? { scale: [1, 1.08, 1] } : { scale: 1 }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }}>
              <rect x="390" y="108" width="80" height="34" rx="10" fill="white" stroke="#2563EB" strokeWidth="2" className="dark:fill-[#0F1B35]" />
              <text x="430" y="130" textAnchor="middle" fill="#10B981" fontWeight="800" fontSize="12" fontFamily="monospace">x-default</text>
              <line x1="390" y1="120" x2="325" y2="105" stroke="#10B981" strokeWidth="2" strokeDasharray="4 3" />
            </motion.g>
          </svg>
        </div>
      );

    case "meta-ads":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden p-2">
          <svg viewBox="0 0 550 187" className="w-full h-full" fill="none">
            <rect x="195" y="24" width="160" height="138" rx="16" fill="white" stroke="#2563EB" strokeWidth="2.5" className="dark:fill-[#0F1B35]" />
            <circle cx="218" cy="45" r="10" fill="#E2E8F0" stroke="#2563EB" strokeWidth="1.5" />
            <line x1="235" y1="42" x2="280" y2="42" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" className="dark:stroke-white" />
            <text x="235" y="54" fill="#64748B" fontSize="9" fontFamily="sans-serif">Sponsored · 🌐</text>
            <rect x="208" y="62" width="134" height="60" rx="8" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" className="dark:fill-blue-950/50" />
            <rect x="208" y="130" width="134" height="22" rx="6" fill="#2563EB" />
            <text x="275" y="145" textAnchor="middle" fill="white" fontWeight="800" fontSize="10" fontFamily="sans-serif">Shop Now ↗</text>
            <motion.g animate={isHovered ? { y: [-4, 4, -4], scale: [1, 1.1, 1] } : { y: 0 }} transition={{ duration: 1.8, repeat: Infinity }}>
              <rect x="75" y="65" width="85" height="55" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="2" className="dark:fill-[#0F1B35] dark:stroke-white/10" />
              <text x="95" y="98" fontSize="16">❤️</text>
              <text x="115" y="94" fill="#E11D48" fontWeight="800" fontSize="12" fontFamily="sans-serif">14.2k</text>
            </motion.g>
            <motion.g animate={isHovered ? { y: [4, -4, 4], scale: [1, 1.1, 1] } : { y: 0 }} transition={{ duration: 2, repeat: Infinity }}>
              <rect x="390" y="65" width="85" height="55" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="2" className="dark:fill-[#0F1B35] dark:stroke-white/10" />
              <text x="432" y="88" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="sans-serif">Meta ROAS</text>
              <text x="432" y="106" textAnchor="middle" fill="#10B981" fontWeight="800" fontSize="14" fontFamily="sans-serif">3.9x</text>
            </motion.g>
          </svg>
        </div>
      );

    case "linkedin-marketing-ads":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden p-2">
          <svg viewBox="0 0 550 187" className="w-full h-full" fill="none">
            <rect x="185" y="30" width="180" height="126" rx="16" fill="white" stroke="#0A66C2" strokeWidth="2.5" className="dark:fill-[#0F1B35]" />
            <rect x="200" y="45" width="28" height="28" rx="6" fill="#0A66C2" />
            <text x="214" y="65" textAnchor="middle" fill="white" fontWeight="900" fontSize="16" fontFamily="sans-serif">in</text>
            <text x="238" y="55" fill="#0A66C2" fontWeight="800" fontSize="12" fontFamily="sans-serif">Target: C-Suite</text>
            <text x="238" y="68" fill="#64748B" fontSize="9" fontFamily="sans-serif">VP / Director / Founder</text>
            <rect x="200" y="82" width="150" height="40" rx="8" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" className="dark:fill-white/5 dark:stroke-white/10" />
            <text x="212" y="98" fill="#1E293B" fontWeight="700" fontSize="10" className="dark:fill-white">B2B Growth Report.pdf</text>
            <text x="212" y="112" fill="#0A66C2" fontWeight="800" fontSize="9">Download Free Guide ↓</text>
            <motion.g animate={isHovered ? { rotate: 360 } : { rotate: 0 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "115px 93px" }}>
              <circle cx="115" cy="93" r="32" stroke="#0A66C2" strokeWidth="2" strokeDasharray="6 4" />
              <circle cx="115" cy="93" r="16" stroke="#0A66C2" strokeWidth="1.5" />
              <line x1="115" y1="55" x2="115" y2="131" stroke="#0A66C2" strokeWidth="1.5" />
              <line x1="77" y1="93" x2="153" y2="93" stroke="#0A66C2" strokeWidth="1.5" />
            </motion.g>
            <motion.g animate={isHovered ? { scale: 1.08 } : { scale: 1 }} transition={{ duration: 0.3 }}>
              <rect x="400" y="60" width="85" height="66" rx="14" fill="white" stroke="#E2E8F0" strokeWidth="2" className="dark:fill-[#0F1B35] dark:stroke-white/10" />
              <text x="442" y="84" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="sans-serif">SALES CALLS</text>
              <text x="442" y="106" textAnchor="middle" fill="#0A66C2" fontWeight="900" fontSize="16" fontFamily="sans-serif">+62%</text>
            </motion.g>
          </svg>
        </div>
      );

    case "youtube-video-marketing":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden p-2">
          <svg viewBox="0 0 550 187" className="w-full h-full" fill="none">
            <rect x="180" y="28" width="190" height="130" rx="16" fill="white" stroke="#EF4444" strokeWidth="2.5" className="dark:fill-[#0F1B35]" />
            <rect x="192" y="40" width="166" height="88" rx="10" fill="#0F172A" />
            <motion.circle cx="275" cy="84" r="18" fill="#EF4444" animate={isHovered ? { scale: [1, 1.15, 1] } : { scale: 1 }} transition={{ duration: 1.2, repeat: Infinity }} style={{ transformOrigin: "275px 84px" }} />
            <polygon points="271,76 283,84 271,92" fill="white" />
            <line x1="202" y1="116" x2="348" y2="116" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
            <line x1="202" y1="116" x2="265" y2="116" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
            <circle cx="265" cy="116" r="4" fill="white" />
            <rect x="195" y="134" width="45" height="16" rx="4" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1" className="dark:fill-blue-950/60" />
            <text x="217" y="146" textAnchor="middle" fill="#2563EB" fontWeight="800" fontSize="9">4K SEO</text>
            <text x="280" y="146" fill="#10B981" fontWeight="700" fontSize="9">#1 Ranking</text>
            <g className="opacity-80">
              <line x1="90" y1="93" x2="90" y2="93" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
              <line x1="102" y1="75" x2="102" y2="111" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
              <line x1="114" y1="60" x2="114" y2="126" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
              <line x1="126" y1="80" x2="126" y2="106" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
              <line x1="138" y1="70" x2="138" y2="116" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
            </g>
            <motion.g animate={isHovered ? { scale: 1.08 } : { scale: 1 }} transition={{ duration: 0.3 }}>
              <rect x="395" y="60" width="85" height="66" rx="14" fill="white" stroke="#E2E8F0" strokeWidth="2" className="dark:fill-[#0F1B35] dark:stroke-white/10" />
              <text x="437" y="84" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="sans-serif">TOTAL VIEWS</text>
              <text x="437" y="106" textAnchor="middle" fill="#EF4444" fontWeight="900" fontSize="15" fontFamily="sans-serif">320k+</text>
            </motion.g>
          </svg>
        </div>
      );

    case "influencer-marketing":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden p-2">
          <svg viewBox="0 0 550 187" className="w-full h-full" fill="none">
            <rect x="195" y="30" width="160" height="126" rx="16" fill="white" stroke="#EC4899" strokeWidth="2.5" className="dark:fill-[#0F1B35]" />
            <circle cx="275" cy="65" r="22" fill="#FCE7F3" stroke="#EC4899" strokeWidth="2" className="dark:fill-pink-950/50" />
            <text x="275" y="72" textAnchor="middle" fontSize="18">🌟</text>
            <circle cx="292" cy="78" r="6" fill="#3B82F6" />
            <path d="M 289 78 L 291 80 L 295 76" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <text x="275" y="108" textAnchor="middle" fill="#0F172A" fontWeight="800" fontSize="12" className="dark:fill-white">Creator Verified</text>
            <text x="275" y="124" textAnchor="middle" fill="#EC4899" fontWeight="700" fontSize="10">5.2x ROI Partner</text>
            <motion.g animate={isHovered ? { rotate: [-10, 10, -10] } : { rotate: 0 }} transition={{ duration: 1.5, repeat: Infinity }} style={{ transformOrigin: "115px 93px" }}>
              <circle cx="115" cy="93" r="28" fill="#FDF2F8" stroke="#EC4899" strokeWidth="2" className="dark:fill-pink-950/40" />
              <text x="115" y="100" textAnchor="middle" fontSize="18">📢</text>
            </motion.g>
            <motion.g animate={isHovered ? { scale: [1, 1.1, 1] } : { scale: 1 }} transition={{ duration: 1.8, repeat: Infinity }}>
              <rect x="395" y="60" width="85" height="66" rx="14" fill="white" stroke="#E2E8F0" strokeWidth="2" className="dark:fill-[#0F1B35] dark:stroke-white/10" />
              <text x="437" y="84" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="sans-serif">REACH</text>
              <text x="437" y="106" textAnchor="middle" fill="#EC4899" fontWeight="900" fontSize="16" fontFamily="sans-serif">1.4M</text>
            </motion.g>
          </svg>
        </div>
      );

    case "email-marketing":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden p-2">
          <svg viewBox="0 0 550 187" className="w-full h-full" fill="none">
            <rect x="200" y="55" width="150" height="95" rx="14" fill="white" stroke="#6366F1" strokeWidth="2.5" className="dark:fill-[#0F1B35]" />
            <path d="M 200 55 L 275 105 L 350 55" stroke="#6366F1" strokeWidth="2" strokeLinejoin="round" />
            <motion.g animate={isHovered ? { y: -12 } : { y: 0 }} transition={{ duration: 0.3 }}>
              <rect x="215" y="30" width="120" height="40" rx="8" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1.5" className="dark:fill-indigo-950/60" />
              <line x1="228" y1="44" x2="300" y2="44" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" />
              <line x1="228" y1="56" x2="275" y2="56" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" />
            </motion.g>
            <rect x="75" y="65" width="85" height="55" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="2" className="dark:fill-[#0F1B35] dark:stroke-white/10" />
            <text x="117" y="86" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="sans-serif">TRIGGER</text>
            <text x="117" y="104" textAnchor="middle" fill="#6366F1" fontWeight="800" fontSize="11" fontFamily="sans-serif">Cart Flow</text>
            <line x1="160" y1="92" x2="200" y2="92" stroke="#6366F1" strokeWidth="2" strokeDasharray="3 3" />
            <motion.g animate={isHovered ? { scale: 1.08 } : { scale: 1 }} transition={{ duration: 0.3 }}>
              <rect x="390" y="60" width="85" height="66" rx="14" fill="white" stroke="#E2E8F0" strokeWidth="2" className="dark:fill-[#0F1B35] dark:stroke-white/10" />
              <text x="432" y="84" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="sans-serif">OPEN RATE</text>
              <text x="432" y="106" textAnchor="middle" fill="#10B981" fontWeight="900" fontSize="16" fontFamily="sans-serif">48.6%</text>
            </motion.g>
          </svg>
        </div>
      );

    case "whatsapp-marketing":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden p-2">
          <svg viewBox="0 0 550 187" className="w-full h-full" fill="none">
            <rect x="190" y="30" width="170" height="126" rx="16" fill="white" stroke="#22C55E" strokeWidth="2.5" className="dark:fill-[#0F1B35]" />
            <circle cx="215" cy="55" r="12" fill="#22C55E" />
            <path d="M 210 55 C 210 52 220 52 220 55 C 220 57 217 58 215 60 L 215 61" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="215" cy="63" r="0.8" fill="white" />
            <text x="235" y="58" fill="#15803D" fontWeight="800" fontSize="12" fontFamily="sans-serif">Cloud API Verified</text>
            <rect x="205" y="76" width="140" height="30" rx="8" fill="#DCFCE7" className="dark:fill-emerald-950/50" />
            <text x="215" y="94" fill="#14532D" fontSize="10" className="dark:fill-emerald-200">Hi Alex! Your order is on the way 📦</text>
            <rect x="205" y="114" width="80" height="22" rx="6" fill="#22C55E" />
            <text x="245" y="128" textAnchor="middle" fill="white" fontWeight="800" fontSize="9">Track Order ↗</text>
            <motion.g animate={isHovered ? { scale: [1, 1.1, 1] } : { scale: 1 }} transition={{ duration: 1.5, repeat: Infinity }}>
              <rect x="75" y="60" width="85" height="66" rx="14" fill="white" stroke="#E2E8F0" strokeWidth="2" className="dark:fill-[#0F1B35] dark:stroke-white/10" />
              <text x="117" y="84" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="sans-serif">OPEN RATE</text>
              <text x="117" y="106" textAnchor="middle" fill="#22C55E" fontWeight="900" fontSize="18" fontFamily="sans-serif">98%</text>
            </motion.g>
            <motion.g animate={isHovered ? { y: [-2, 2, -2] } : { y: 0 }} transition={{ duration: 1.2, repeat: Infinity }}>
              <rect x="390" y="68" width="85" height="50" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="2" className="dark:fill-[#0F1B35] dark:stroke-white/10" />
              <circle cx="417" cy="93" r="3.5" fill="#22C55E" />
              <circle cx="432" cy="93" r="3.5" fill="#22C55E" opacity="0.6" />
              <circle cx="447" cy="93" r="3.5" fill="#22C55E" opacity="0.3" />
            </motion.g>
          </svg>
        </div>
      );

    case "online-reputation-management":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden p-2">
          <svg viewBox="0 0 550 187" className="w-full h-full" fill="none">
            <path d="M 275 30 L 340 55 L 340 105 C 340 135 275 160 275 160 C 275 160 210 135 210 105 L 210 55 Z" fill="white" stroke="#2563EB" strokeWidth="2.5" className="dark:fill-[#0F1B35]" />
            <motion.path d="M 255 95 L 270 110 L 300 78" stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" animate={isHovered ? { pathLength: [0, 1] } : { pathLength: 1 }} transition={{ duration: 0.8 }} />
            <text x="275" y="138" textAnchor="middle" fill="#F59E0B" fontSize="13">★★★★★</text>
            <motion.g animate={isHovered ? { scale: 1.08 } : { scale: 1 }} transition={{ duration: 0.3 }}>
              <rect x="75" y="60" width="85" height="66" rx="14" fill="white" stroke="#E2E8F0" strokeWidth="2" className="dark:fill-[#0F1B35] dark:stroke-white/10" />
              <text x="117" y="84" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="sans-serif">RATING</text>
              <text x="117" y="106" textAnchor="middle" fill="#F59E0B" fontWeight="900" fontSize="18" fontFamily="sans-serif">4.9 ★</text>
            </motion.g>
            <motion.g animate={isHovered ? { scale: 1.08 } : { scale: 1 }} transition={{ duration: 0.3 }}>
              <rect x="390" y="60" width="85" height="66" rx="14" fill="white" stroke="#E2E8F0" strokeWidth="2" className="dark:fill-[#0F1B35] dark:stroke-white/10" />
              <text x="432" y="84" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="sans-serif">SENTIMENT</text>
              <text x="432" y="106" textAnchor="middle" fill="#10B981" fontWeight="800" fontSize="12" fontFamily="sans-serif">100% Pos.</text>
            </motion.g>
          </svg>
        </div>
      );

    case "ecommerce-website-development":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden p-2">
          <svg viewBox="0 0 550 187" className="w-full h-full" fill="none">
            <rect x="155" y="28" width="170" height="130" rx="14" fill="white" stroke="#2563EB" strokeWidth="2.5" className="dark:fill-[#0F1B35]" />
            <line x1="155" y1="50" x2="325" y2="50" stroke="#E2E8F0" strokeWidth="1.5" className="dark:stroke-white/10" />
            <circle cx="170" cy="39" r="3" fill="#EF4444" />
            <circle cx="180" cy="39" r="3" fill="#F59E0B" />
            <circle cx="190" cy="39" r="3" fill="#10B981" />
            <rect x="170" y="62" width="40" height="40" rx="6" fill="#EFF6FF" className="dark:fill-white/5" />
            <rect x="220" y="62" width="40" height="40" rx="6" fill="#EFF6FF" className="dark:fill-white/5" />
            <rect x="270" y="62" width="40" height="40" rx="6" fill="#EFF6FF" className="dark:fill-white/5" />
            <rect x="170" y="116" width="140" height="24" rx="6" fill="#2563EB" />
            <text x="240" y="132" textAnchor="middle" fill="white" fontWeight="800" fontSize="10">⚡ 1-Click Checkout</text>
            <motion.g animate={isHovered ? { y: -4 } : { y: 0 }} transition={{ duration: 0.3 }}>
              <rect x="340" y="45" width="70" height="115" rx="14" fill="white" stroke="#0F172A" strokeWidth="2.5" className="dark:fill-[#0F1B35] dark:stroke-white" />
              <rect x="350" y="60" width="50" height="40" rx="6" fill="#EFF6FF" className="dark:fill-white/5" />
              <rect x="350" y="110" width="50" height="18" rx="4" fill="#10B981" />
              <text x="375" y="122" textAnchor="middle" fill="white" fontWeight="800" fontSize="8">Pay</text>
            </motion.g>
          </svg>
        </div>
      );

    case "branding-design":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden p-2">
          <svg viewBox="0 0 550 187" className="w-full h-full" fill="none">
            <rect x="185" y="26" width="180" height="134" rx="16" fill="white" stroke="#8B5CF6" strokeWidth="2.5" className="dark:fill-[#0F1B35]" />
            <circle cx="275" cy="85" r="38" stroke="#DDD6FE" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="275" cy="85" r="22" stroke="#8B5CF6" strokeWidth="2" />
            <motion.g animate={isHovered ? { rotate: [0, 15, 0] } : { rotate: 0 }} transition={{ duration: 1.5, repeat: Infinity }} style={{ transformOrigin: "275px 85px" }}>
              <path d="M 275 85 L 295 65 L 305 75 Z" fill="#8B5CF6" />
              <line x1="275" y1="85" x2="255" y2="105" stroke="#8B5CF6" strokeWidth="2.5" />
              <circle cx="275" cy="85" r="3" fill="#EC4899" />
            </motion.g>
            <circle cx="225" cy="138" r="8" fill="#3B82F6" />
            <circle cx="245" cy="138" r="8" fill="#8B5CF6" />
            <circle cx="265" cy="138" r="8" fill="#EC4899" />
            <circle cx="285" cy="138" r="8" fill="#F59E0B" />
            <circle cx="305" cy="138" r="8" fill="#10B981" />
            <rect x="75" y="60" width="85" height="66" rx="14" fill="white" stroke="#E2E8F0" strokeWidth="2" className="dark:fill-[#0F1B35] dark:stroke-white/10" />
            <text x="117" y="104" textAnchor="middle" fill="#8B5CF6" fontWeight="900" fontSize="28" fontFamily="serif">Aa</text>
            <rect x="390" y="60" width="85" height="66" rx="14" fill="white" stroke="#E2E8F0" strokeWidth="2" className="dark:fill-[#0F1B35] dark:stroke-white/10" />
            <text x="432" y="84" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="sans-serif">SYSTEM</text>
            <text x="432" y="106" textAnchor="middle" fill="#8B5CF6" fontWeight="800" fontSize="12" fontFamily="sans-serif">Vectors</text>
          </svg>
        </div>
      );

    case "copywriting-messaging":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden p-2">
          <svg viewBox="0 0 550 187" className="w-full h-full" fill="none">
            <rect x="185" y="26" width="180" height="134" rx="16" fill="white" stroke="#2563EB" strokeWidth="2.5" className="dark:fill-[#0F1B35]" />
            <rect x="205" y="44" width="115" height="16" rx="4" fill="#FEF08A" className="dark:fill-amber-400/30" />
            <text x="210" y="56" fill="#854D0E" fontWeight="800" fontSize="10" className="dark:fill-amber-300">Killer Headline Hook</text>
            <motion.line x1="324" y1="44" x2="324" y2="60" stroke="#2563EB" strokeWidth="2" animate={isHovered ? { opacity: [0, 1, 0] } : { opacity: 1 }} transition={{ duration: 0.8, repeat: Infinity }} />
            <line x1="205" y1="74" x2="335" y2="74" stroke="#334155" strokeWidth="3" strokeLinecap="round" className="dark:stroke-white" />
            <line x1="205" y1="88" x2="310" y2="88" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
            <line x1="205" y1="102" x2="325" y2="102" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
            <rect x="205" y="122" width="140" height="22" rx="6" fill="#2563EB" />
            <text x="275" y="137" textAnchor="middle" fill="white" fontWeight="800" fontSize="9">Convert Visitors Now ↗</text>
            <rect x="75" y="60" width="85" height="66" rx="14" fill="white" stroke="#E2E8F0" strokeWidth="2" className="dark:fill-[#0F1B35] dark:stroke-white/10" />
            <text x="117" y="104" textAnchor="middle" fill="#2563EB" fontWeight="900" fontSize="34" fontFamily="serif">“ ”</text>
            <rect x="390" y="60" width="85" height="66" rx="14" fill="white" stroke="#E2E8F0" strokeWidth="2" className="dark:fill-[#0F1B35] dark:stroke-white/10" />
            <text x="432" y="84" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="sans-serif">CONVERSION</text>
            <text x="432" y="106" textAnchor="middle" fill="#10B981" fontWeight="900" fontSize="16" fontFamily="sans-serif">+54%</text>
          </svg>
        </div>
      );

    case "marketing-automation-ai":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden p-2">
          <svg viewBox="0 0 550 187" className="w-full h-full" fill="none">
            <circle cx="275" cy="93" r="38" fill="white" stroke="#8B5CF6" strokeWidth="2.5" className="dark:fill-[#0F1B35]" />
            <motion.circle cx="275" cy="93" r="28" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="4 3" animate={isHovered ? { rotate: 360 } : { rotate: 0 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "275px 93px" }} />
            <text x="275" y="100" textAnchor="middle" fill="#8B5CF6" fontWeight="900" fontSize="16" fontFamily="sans-serif">AI</text>
            <rect x="75" y="65" width="95" height="56" rx="12" fill="white" stroke="#2563EB" strokeWidth="2" className="dark:fill-[#0F1B35]" />
            <text x="122" y="88" textAnchor="middle" fill="#2563EB" fontWeight="800" fontSize="11" fontFamily="sans-serif">Web Form</text>
            <text x="122" y="104" textAnchor="middle" fill="#64748B" fontSize="9">Lead Captured</text>
            <path d="M 170 93 L 237 93" stroke="#8B5CF6" strokeWidth="2.5" strokeDasharray="4 3" />
            <rect x="380" y="65" width="95" height="56" rx="12" fill="white" stroke="#10B981" strokeWidth="2" className="dark:fill-[#0F1B35]" />
            <text x="427" y="88" textAnchor="middle" fill="#10B981" fontWeight="800" fontSize="11" fontFamily="sans-serif">CRM Synced</text>
            <text x="427" y="104" textAnchor="middle" fill="#64748B" fontSize="9">&lt; 2 min SDR</text>
            <path d="M 313 93 L 380 93" stroke="#10B981" strokeWidth="2.5" strokeDasharray="4 3" />
          </svg>
        </div>
      );

    case "lead-generation":
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden p-2">
          <svg viewBox="0 0 550 187" className="w-full h-full" fill="none">
            <path d="M 215 40 L 335 40 L 295 110 L 295 145 L 255 145 L 255 110 Z" fill="white" stroke="#F97316" strokeWidth="2.5" className="dark:fill-[#0F1B35]" />
            <line x1="225" y1="65" x2="325" y2="65" stroke="#FDBA74" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="240" y1="90" x2="310" y2="90" stroke="#FB923C" strokeWidth="2" strokeDasharray="3 3" />
            <text x="275" y="58" textAnchor="middle" fill="#EA580C" fontWeight="800" fontSize="9">Traffic</text>
            <text x="275" y="82" textAnchor="middle" fill="#EA580C" fontWeight="800" fontSize="9">Leads</text>
            <text x="275" y="132" textAnchor="middle" fill="#10B981" fontWeight="900" fontSize="12">DEALS</text>
            <motion.g animate={isHovered ? { x: [-3, 3, -3] } : { x: 0 }} transition={{ duration: 1.5, repeat: Infinity }}>
              <rect x="75" y="60" width="85" height="66" rx="14" fill="white" stroke="#E2E8F0" strokeWidth="2" className="dark:fill-[#0F1B35] dark:stroke-white/10" />
              <text x="117" y="86" textAnchor="middle" fontSize="18">🧲</text>
              <text x="117" y="106" textAnchor="middle" fill="#EA580C" fontWeight="800" fontSize="10">Omnichannel</text>
            </motion.g>
            <motion.g animate={isHovered ? { scale: 1.08 } : { scale: 1 }} transition={{ duration: 0.3 }}>
              <rect x="390" y="60" width="85" height="66" rx="14" fill="white" stroke="#E2E8F0" strokeWidth="2" className="dark:fill-[#0F1B35] dark:stroke-white/10" />
              <text x="432" y="84" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="sans-serif">PIPELINE</text>
              <text x="432" y="106" textAnchor="middle" fill="#EA580C" fontWeight="900" fontSize="16" fontFamily="sans-serif">+180%</text>
            </motion.g>
          </svg>
        </div>
      );

    default: {
      const matched = SERVICES_DATA.find(
        (s) => s.slug === slug || s.id === slug || s.aliases?.includes(slug)
      );
      const Icon = matched && ICON_MAP[matched.iconName] ? ICON_MAP[matched.iconName] : Sparkles;
      return (
        <div className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden p-4">
          <div className="relative flex items-center justify-center">
            {/* Ambient pulse circle */}
            <motion.div
              animate={isHovered ? { scale: [1, 1.25, 1], opacity: [0.15, 0.35, 0.15] } : { scale: 1, opacity: 0.15 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-28 h-28 rounded-full bg-blue-500/20 dark:bg-blue-400/20 blur-md pointer-events-none"
            />
            {/* Outer radar ring */}
            <motion.div
              animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 rounded-full border border-dashed border-blue-400/40 dark:border-blue-400/30 flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 border border-blue-200/80 dark:border-blue-500/30 shadow-lg flex items-center justify-center">
                <Icon className="w-8 h-8 text-[#2563EB] dark:text-[#60A5FA]" />
              </div>
            </motion.div>
          </div>
          {matched && (
            <div className="mt-3 text-center">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                {matched.category}
              </span>
            </div>
          )}
        </div>
      );
    }
  }
}

// Fast and light animated variants for 25 cards grid transition
const CARDS_CONTAINER_VARIANTS: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 30 : -30,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.03,
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -30 : 30,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const CARD_ITEM_VARIANTS: Variants = {
  enter: {
    opacity: 0,
    y: 12,
    scale: 0.98,
  },
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.98,
    transition: {
      duration: 0.15,
    },
  },
};

// Category filter definitions matching the 6 distinct groups from services hierarchy
const CATEGORY_TABS = [
  { id: "all", label: "All Services (25)" },
  { id: "seo-ai-search", label: "SEO & AI Search (7)" },
  { id: "paid-media", label: "Paid Media (4)" },
  { id: "content-social", label: "Content & Social (6)" },
  { id: "websites-creative", label: "Websites & Creative (4)" },
  { id: "data-cro-automation", label: "Data, CRO & Automation (3)" },
  { id: "growth-solutions", label: "Growth Solutions (1)" },
];

function SearchParamsSync({
  onSelectService,
}: {
  onSelectService: (slug: string, page: number) => void;
}) {
  const searchParams = useSearchParams();
  const queryService = searchParams.get("service") || searchParams.get("id");

  useEffect(() => {
    if (queryService) {
      const matchIndex = SERVICES_DATA.findIndex(
        (s) =>
          s.slug.toLowerCase() === queryService.toLowerCase() ||
          s.id.toLowerCase() === queryService.toLowerCase() ||
          s.num === queryService ||
          s.aliases?.some((a) => a.toLowerCase() === queryService.toLowerCase())
      );
      if (matchIndex !== -1) {
        const targetPage = Math.floor(matchIndex / 6) + 1;
        onSelectService(SERVICES_DATA[matchIndex].slug, targetPage);
      }
    }
  }, [queryService, onSelectService]);

  return null;
}

function ServicesContent() {
  const router = useRouter();

  // Active category filter state ('all' | categoryId)
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Search query state for real-time searching across 25 services
  const [searchQuery, setSearchQuery] = useState<string>("");

  // View mode: "all" displays all matching cards; "paginated" divides into pages of 6
  const [viewMode, setViewMode] = useState<"all" | "paginated">("all");

  // Card pagination (1 to 5) when in paginated mode
  const CARDS_PER_PAGE = 6;
  const [cardPage, setCardPage] = useState<number>(1);
  const [slideDirection, setSlideDirection] = useState<number>(1);
  const [isCardsHovered, setIsCardsHovered] = useState<boolean>(false);

  // Active / hovered card slug for interactive SVG animation
  const [hoveredCardSlug, setHoveredCardSlug] = useState<string | null>(null);

  // Synchronize active service and page if URL search param is present
  const handleSyncService = useCallback((slug: string, page: number) => {
    setCardPage(page);
    const svc = SERVICES_DATA.find((s) => s.slug === slug);
    if (svc) {
      setActiveCategory(svc.categoryId);
    }
  }, []);

  // Filter services by category
  const categoryServices = useMemo(() => {
    if (activeCategory === "all") return SERVICES_DATA;
    return SERVICES_DATA.filter((s) => s.categoryId === activeCategory);
  }, [activeCategory]);

  // Real-time keyword filter across title, shortTitle, desc, num, deliverables, aliases
  const filteredServices = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return categoryServices;
    return categoryServices.filter((s) => {
      const inTitle = s.title.toLowerCase().includes(q);
      const inShort = s.shortTitle.toLowerCase().includes(q);
      const inDesc = s.desc.toLowerCase().includes(q);
      const inNum = s.num.includes(q);
      const inDeliverables = s.deliverables?.some((d) => d.toLowerCase().includes(q));
      const inAliases = s.aliases?.some((a) => a.toLowerCase().includes(q));
      return inTitle || inShort || inDesc || inNum || inDeliverables || inAliases;
    });
  }, [categoryServices, searchQuery]);

  const totalCardPages = Math.ceil(filteredServices.length / CARDS_PER_PAGE) || 1;

  // Keep pagination within valid bounds
  useEffect(() => {
    if (cardPage > totalCardPages) {
      setCardPage(1);
    }
  }, [cardPage, totalCardPages]);

  // Auto-switch across pages in paginated mode if not hovered
  useEffect(() => {
    if (viewMode !== "paginated" || isCardsHovered || totalCardPages <= 1) return;
    const interval = setInterval(() => {
      setSlideDirection(1);
      setCardPage((prev) => (prev >= totalCardPages ? 1 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [viewMode, isCardsHovered, totalCardPages]);

  const handleSwitchCardPage = (page: number) => {
    if (page === cardPage) return;
    setSlideDirection(page > cardPage ? 1 : -1);
    setCardPage(page);
  };

  const handleNextCardPage = () => {
    setSlideDirection(1);
    setCardPage((prev) => (prev >= totalCardPages ? 1 : prev + 1));
  };

  const handlePrevCardPage = () => {
    setSlideDirection(-1);
    setCardPage((prev) => (prev <= 1 ? totalCardPages : prev - 1));
  };

  const handleCardClick = (slugOrId: string) => {
    router.push(`/services/${slugOrId}`);
  };

  // Cards to render right now
  const displayedServices = useMemo(() => {
    if (viewMode === "all") return filteredServices;
    const startIndex = (cardPage - 1) * CARDS_PER_PAGE;
    return filteredServices.slice(startIndex, startIndex + CARDS_PER_PAGE);
  }, [filteredServices, viewMode, cardPage, CARDS_PER_PAGE]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0908] text-stone-900 dark:text-stone-100 selection:bg-stone-900/10 dark:selection:bg-white/20 selection:text-stone-900 dark:selection:text-white transition-colors duration-500">
      {/* Non-blocking URL query sync */}
      <Suspense fallback={null}>
        <SearchParamsSync onSelectService={handleSyncService} />
      </Suspense>

      {/* Ambient background soft glow */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-12 right-1/4 w-[550px] h-[550px] rounded-full bg-blue-500/[0.04] dark:bg-blue-500/[0.05] blur-[150px]" />
        <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.03] dark:bg-emerald-500/[0.04] blur-[150px]" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-24 sm:pt-28 pb-16 space-y-12 sm:space-y-16">

        {/* ========================================================
            1. HERO SECTION
        ======================================================== */}
        <section className="relative">
          {/* Top navigation row: Back button & Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-200/80 dark:border-white/10 bg-white/90 dark:bg-white/[0.04] backdrop-blur-xl text-stone-700 dark:text-stone-300 text-xs sm:text-sm font-semibold shadow-sm hover:border-stone-400 hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-stone-900 transition-all duration-300 active:scale-95"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>

            <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
              <Link href="/" className="hover:text-stone-950 dark:hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-stone-400" />
              <span className="text-stone-900 dark:text-stone-200 font-semibold">Services</span>
              <ChevronRight className="w-3 h-3 text-stone-400" />
              <span className="text-[#2563EB] font-bold">25 Growth Services</span>
            </div>
          </div>

          {/* Hero Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading & Subtitle */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 dark:bg-white/10 text-stone-900 dark:text-stone-200 text-xs font-mono font-bold uppercase tracking-wider border border-stone-200/80 dark:border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Digital Marketing &amp; Dev Services</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-stone-900 dark:text-white">
                Services We Provide &amp;<br />
                <span className="relative inline-block text-[#2563EB]">
                  Growth Frameworks.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed max-w-xl font-normal">
                We build modern, scalable and high-performance digital solutions that help your business grow in the digital world.
              </p>
            </div>

            {/* Right Column: Floating 3D Browser Mockup with Chart */}
            <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">

            </div>
          </div>
        </section>

        {/* ========================================================
            2. SERVICES SHOWCASE: 25 DEDICATED CARDS WITH TAILORED SVGS
        ======================================================== */}
        <section
          id="services-grid-section"
          className="space-y-8"
          onMouseEnter={() => setIsCardsHovered(true)}
          onMouseLeave={() => setIsCardsHovered(false)}
        >
          {/* Controls Bar: Search & Category Pills & View Switcher */}
          <div className="space-y-4">
            {/* Search Input Bar */}
            <div className="relative max-w-2xl w-full">
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-stone-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCardPage(1);
                  }}
                  placeholder="Search 25 services by name, deliverable, or keyword (e.g. SEO, Shopify, Meta Ads, GA4)..."
                  className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] shadow-sm text-sm transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 p-1 rounded-full text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills & Mode Switcher Row */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              {/* Filter pills */}
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                {CATEGORY_TABS.map((tab) => {
                  const isActive = activeCategory === tab.id;
                  const count =
                    tab.id === "all"
                      ? SERVICES_DATA.length
                      : SERVICES_DATA.filter((s) => s.categoryId === tab.id).length;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => {
                        setActiveCategory(tab.id);
                        setCardPage(1);
                      }}
                      className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${isActive
                        ? "bg-stone-900 dark:bg-white text-white dark:text-stone-900 shadow-md scale-[1.02]"
                        : "bg-white dark:bg-white/5 border border-stone-200/80 dark:border-white/10 text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white hover:border-stone-400 hover:bg-stone-100 dark:hover:bg-white/10"
                        }`}
                    >
                      <span>{tab.label.split(" (")[0]}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${isActive
                          ? "bg-white/20 dark:bg-stone-900/20 text-white dark:text-stone-900"
                          : "bg-stone-100 dark:bg-white/10 text-stone-500 dark:text-stone-400"
                          }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>


            </div>
          </div>

          {/* Cards Grid or Empty Search State */}
          {displayedServices.length === 0 ? (
            <div className="py-20 text-center rounded-[32px] bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 shadow-sm space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-stone-100 dark:bg-white/10 flex items-center justify-center mx-auto text-stone-400">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-white">
                No services found matching &ldquo;{searchQuery}&rdquo;
              </h3>
              <p className="text-sm text-stone-500 max-w-md mx-auto">
                Try searching with a different keyword or reset filters to browse all 25 services.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                  setCardPage(1);
                }}
                className="px-5 py-2.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                Clear Search &amp; Filters
              </button>
            </div>
          ) : (
            <AnimatePresence mode="wait" custom={slideDirection}>
              <motion.div
                key={`${activeCategory}-${cardPage}-${viewMode}-${searchQuery}`}
                custom={slideDirection}
                variants={CARDS_CONTAINER_VARIANTS}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {displayedServices.map((svc, idx) => {
                  const isCardHovered = hoveredCardSlug === svc.slug;
                  const animId = `service_ani_${svc.id.replace(/-/g, "_")}`;

                  return (
                    <Link
                      key={svc.id}
                      href={`/services/${svc.id}`}
                      className="block h-full cursor-pointer focus:outline-none"
                      onMouseEnter={() => setHoveredCardSlug(svc.slug)}
                      onMouseLeave={() => setHoveredCardSlug(null)}
                    >
                      <motion.div
                        variants={CARD_ITEM_VARIANTS}
                        whileHover={{ y: -8, scale: 1.018 }}
                        whileTap={{ scale: 0.985 }}
                        className={`
                          services-d-card services-d-card${svc.num}
                          group
                          relative
                          rounded-[36px]
                          p-6 sm:p-7 lg:p-8
                          text-left
                          transition-all
                          duration-300
                          border
                          flex
                          flex-col
                          justify-between
                          min-h-[530px] sm:min-h-[580px] lg:min-h-[610px]
                          w-full
                          bg-white dark:bg-[#111B2E]
                          cursor-pointer
                          overflow-hidden
                          border-stone-200/80 dark:border-white/10 hover:border-[#2563EB]/50 dark:hover:border-[#2563EB]/50 hover:bg-[#2563EB]/[0.02] dark:hover:bg-white/[0.03] hover:shadow-[0_20px_50px_rgba(37,99,235,0.12),0_0_30px_rgba(37,99,235,0.06)] dark:hover:shadow-[0_22px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(37,99,235,0.15)]
                        `}
                      >
                        {/* Live subtle aura glow on card hover */}
                        <div className="pointer-events-none absolute -inset-px rounded-[36px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent -z-10" />

                        {/* Top: Spacious Visual Illustration Box */}
                        <div className="services-d-card-img relative w-full h-52 sm:h-58 lg:h-64 rounded-3xl bg-stone-50/90 dark:bg-black/50 border border-stone-200/80 dark:border-white/10 overflow-hidden flex items-center justify-center p-4 sm:p-5 mb-5 group-hover:border-blue-400/80 dark:group-hover:border-blue-500/50 group-hover:shadow-[0_10px_32px_rgba(37,99,235,0.18)] transition-all duration-500">
                          {/* Live light scan beam on hover */}
                          <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/50 dark:via-white/15 to-transparent transition-transform duration-1000 ease-in-out" />

                          {svc.lightImage ? (
                            <>
                              <Image
                                src={svc.lightImage}
                                alt={svc.title}
                                fill
                                className="service-img-light object-contain object-center p-3 transition-transform duration-500 ease-out group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                quality={85}
                                priority={idx < 4}
                                unoptimized
                              />
                              <Image
                                src={svc.darkImage || svc.lightImage}
                                alt={svc.title}
                                fill
                                className="service-img-dark object-contain object-center p-3 transition-transform duration-500 ease-out group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                quality={85}
                                priority={idx < 4}
                                unoptimized
                              />
                            </>
                          ) : (
                            <div className={`lottie-ani-wrap lottie-ani-wrap${svc.num} w-full h-full flex items-center justify-center`}>
                              <div
                                id={animId}
                                className="dotlottie-ani w-full h-full flex items-center justify-center"
                              >
                                <div
                                  id="animation-container"
                                  role="img"
                                  aria-label={`${svc.title} illustration`}
                                  className="main w-full h-full flex items-center justify-center"
                                >
                                  <div
                                    id="animation"
                                    className="animation w-full h-full flex items-center justify-center"
                                    style={{ background: "transparent" }}
                                  >
                                    <ServiceCardIllustration
                                      slug={svc.slug}
                                      isSelected={false}
                                      isHovered={isCardHovered}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Middle: Number badge, Category & Title & Description */}
                        <div className="space-y-3 mb-5 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-mono font-bold text-stone-800 dark:text-stone-200 bg-stone-100 dark:bg-white/10 px-3 py-1 rounded-full border border-stone-200/80 dark:border-white/15">
                              SERVICE {svc.num}
                            </span>
                            <span className="text-xs font-semibold text-stone-500 dark:text-stone-400 truncate max-w-[140px]">
                              {svc.category}
                            </span>
                          </div>

                          <h3
                            className="text-xl sm:text-2xl font-black tracking-tight leading-snug transition-colors group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] text-stone-900 dark:text-white"
                          >
                            {svc.title}
                          </h3>

                          <p className="text-sm sm:text-[15px] text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed">
                            {svc.desc}
                          </p>

                          {/* Deliverables Preview Tags */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            <span>{svc.badge}</span>
                          </div>

                        </div>

                        {/* Bottom Row: Direct Link Action Button */}
                        <div className="flex items-center justify-between pt-4 border-t border-stone-200/70 dark:border-white/10 mt-auto">
                          <span className="text-xs sm:text-sm font-bold text-stone-800 dark:text-stone-200 group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors flex items-center gap-2">
                            <span>Explore full service</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                          </span>

                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-stone-100 dark:bg-white/10 text-stone-700 dark:text-stone-300 border border-stone-200/80 dark:border-white/10 group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] group-hover:scale-110 shadow-sm"
                          >
                            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          )}
        </section>

        {/* ========================================================
            3. BOTTOM CALL TO ACTION (CTA) BANNER
        ======================================================== */}
        <section className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent dark:from-blue-500/15 dark:via-blue-500/10 dark:to-blue-500/5 border border-blue-200/80 dark:border-blue-500/30 shadow-xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white flex items-center justify-center shadow-lg shadow-blue-500/30 text-2xl shrink-0">
              🚀
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#2563EB] dark:text-[#60A5FA] uppercase tracking-wider">
                Ready to Get Started?
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-white mt-0.5">
                Let&apos;s Build Something Great Together!
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 max-w-xl">
                Get a free consultation and discover how we can help your business grow with our 25 proven solutions.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#2563EB] text-white text-xs sm:text-[13.5px] font-bold border hover:border-blue-800 shadow-md shadow-[#2563EB] hover:shadow-[#2563EB] hover:-translate-y-0.5 transition-all duration-300 min-h-[42px] sm:min-h-[44px] touch-manipulation"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/projects"
              className="relative group/link inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/90 dark:bg-[#0f0f11] backdrop-blur-xl text-stone-800 dark:text-white text-xs sm:text-[13.5px] font-semibold shadow-sm hover:bg-orange-600/[0.10] transition-all duration-300 min-h-[42px] sm:min-h-[44px] touch-manipulation before:content-[''] before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-orange-500 before:via-amber-400 before:to-orange-600 before:opacity-0 before:transition-opacity before:duration-300 before:pointer-events-none hover:before:opacity-100 after:content-[''] after:absolute after:inset-[1px] after:rounded-full after:bg-white/90 dark:after:bg-[#0f0f11] after:opacity-0 after:transition-opacity after:duration-300 after:pointer-events-none hover:after:opacity-100"
            >
              <span className="relative z-10">Explore Case Studies</span>
              <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}

export default function ServicesPage() {
  return <ServicesContent />;
}

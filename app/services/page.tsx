"use client";

import React, { useState, useEffect, useCallback, Suspense, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
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
  Cpu,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  Zap,
  Award,
  Clock,
  Send,
  Plus,
  Minus,
  X,
  Maximize2,
  Flame,
  Check,
  Rocket,
  MousePointerClick,
  FileCheck,
  Layers3,
  Server,
  Cloud,
  Database,
  Monitor,
  Smartphone,
  Mail,
  Folder,
  Code2,
  Shield,
  Star,
  ShoppingCart,
  MousePointer,
} from "lucide-react";
import { SERVICES_DATA, type ServiceDetail } from "@/lib/servicesData";
import { getServiceFitDetails } from "@/lib/serviceFitData";

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
                d="M 282 35 L 283.5 36.5 L 286.5 33.5"
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

    default:
      return (
        <div className="w-full h-full flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-stone-800 dark:text-stone-200" />
        </div>
      );
  }
}

// Map tool names to actual image assets in /banner
const TOOL_IMAGE_MAP: Record<string, string> = {
  "Google Search Console": "/banner/googlesearchconsole.jpeg",
  "Screaming Frog": "/banner/scramingfrog.png",
  "Semrush": "/banner/semrush.png",
  "Ahrefs": "/banner/ahref.jpeg",
  "Google Analytics 4 (GA4)": "/banner/googleanalytics.png",
  "Google Analytics 4": "/banner/googleanalytics.png",
  "GA4 Funnels": "/banner/googleanalytics.png",
  "Google Tag Manager": "/banner/googleanalytics.png",
  "Looker Studio": "/banner/googleanalytics.png",
  "ChatGPT Plus": "/banner/chatgpt.png",
  "ChatGPT": "/banner/chatgpt.png",
  "Claude": "/banner/claude.png",
  "Google Gemini": "/banner/aitools.png",
  "Perplexity Pro": "/banner/aitools.png",
  "Perplexity": "/banner/aitools.png",
  "Google Ads": "/banner/googleads.png",
  "Google Business Profile": "/banner/googlebussiness.png",
  "Google Maps Platform": "/banner/googlebussiness.png",
  "Next.js": "/banner/webdevelopement.png",
  "Next.js App Router": "/banner/webdevelopement.png",
  "WordPress": "/banner/wordpress.png",
  "WooCommerce": "/banner/woocommerce.png",
  "Shopify": "/banner/webdevelopement.png",
  "Schema.org": "/banner/rankmath.png",
  "RankMath": "/banner/rankmath.png",
  "PageSpeed Insights": "/banner/pagespeedinsights.png",
  "Lighthouse": "/banner/googlesearchconsole.jpeg",
  "Chrome DevTools": "/banner/webdevelopement.png",
  "Klaviyo": "/banner/webdevelopement.png",
  "Mailchimp": "/banner/webdevelopement.png",
  "Hotjar": "/banner/googleanalytics.png",
  "BigQuery": "/banner/googleanalytics.png",
  "Cloudflare": "/banner/webdevelopement.png",
  "Airtable": "/banner/webdevelopement.png",
};

function getToolImage(name: string): string {
  if (TOOL_IMAGE_MAP[name]) return TOOL_IMAGE_MAP[name];
  const lower = name.toLowerCase();
  if (lower.includes("google") || lower.includes("search console"))
    return "/banner/googlesearchconsole.jpeg";
  if (lower.includes("analytics") || lower.includes("tag manager") || lower.includes("looker"))
    return "/banner/googleanalytics.png";
  if (lower.includes("semrush")) return "/banner/semrush.png";
  if (lower.includes("ahrefs")) return "/banner/ahref.jpeg";
  if (lower.includes("chatgpt") || lower.includes("ai")) return "/banner/chatgpt.png";
  if (lower.includes("claude")) return "/banner/claude.png";
  if (lower.includes("frog")) return "/banner/scramingfrog.png";
  if (lower.includes("maps") || lower.includes("business"))
    return "/banner/googlebussiness.png";
  if (lower.includes("schema") || lower.includes("seo")) return "/banner/rankmath.png";
  return "/banner/webdevelopement.png";
}

// Service proof slides helper with rich details matching GSC & GA4 live proof
function getServiceProofSlides(svc: ServiceDetail) {
  return [
    {
      url: svc.image || "/images/gsc-console-live.jpg",
      title: `${svc.shortTitle} Primary Deliverable`,
      tag: "Live Execution Proof",
      metric: svc.stats.highlight,
      metricLabel: svc.stats.label,
      description: `Production-ready architectural deployment for ${svc.title}, ensuring top search engine visibility and zero performance overhead.`,
      highlights: [
        { label: "Core Impact", value: svc.stats.highlight },
        { label: "Benchmark", value: svc.stats.label },
        { label: "Client Validation", value: svc.caseStudy.client },
        { label: "Deployment", value: "Verified Active" },
      ],
    },
    {
      url: "/images/gsc-console-live.jpg",
      title: "Google Search Console Organic Clicks & Impressions",
      tag: "GSC Telemetry",
      metric: "+185%",
      metricLabel: "Organic Impressions",
      description: "Direct Search Console live telemetry showing sustained indexation growth, top-3 keyword rankings, and high-intent organic clicks.",
      highlights: [
        { label: "Organic Lift", value: "+185% Impressions" },
        { label: "Avg Position", value: "Top 3 SERP" },
        { label: "Crawl Health", value: "100% Indexed" },
        { label: "Source", value: "Google Search Console" },
      ],
    },
    {
      url: "/images/ga4-analytics-live.jpg",
      title: "GA4 E-commerce & Conversion Flow Attribution",
      tag: "Analytics Tracking",
      metric: "5.1x",
      metricLabel: "Attributed ROAS",
      description: "Full-funnel Google Analytics 4 tracking measuring user journeys, purchase conversion rates, and revenue impact across organic channels.",
      highlights: [
        { label: "Return on Spend", value: "5.1x ROAS" },
        { label: "Funnel Conversion", value: "+42% Lift" },
        { label: "Attribution", value: "Data-Driven" },
        { label: "Platform", value: "Google Analytics 4" },
      ],
    },
    {
      url: "/Analytics/Aristbrush/gsc-5-ga4-revenue.jpg",
      title: `${svc.caseStudy.client} Revenue Impact`,
      tag: "Case Study Milestone",
      metric: svc.caseStudy.metric,
      metricLabel: svc.caseStudy.impact.slice(0, 48) + "...",
      description: `Audited performance case study on ${svc.caseStudy.client} demonstrating compounding organic growth and revenue milestone delivery.`,
      highlights: [
        { label: "Key Outcome", value: svc.caseStudy.metric },
        { label: "Partner Brand", value: svc.caseStudy.client },
        { label: "Deliverables", value: `${svc.deliverables.length} Assets` },
        { label: "Status", value: "Completed & Verified" },
      ],
    },
  ];
}

// Fast and light animated variants for 12 cards grid transition
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

// Category filter definitions matching the design screenshot
const CATEGORY_TABS = [
  { id: "all", label: "All Services" },
  { id: "seo", label: "SEO" },
  { id: "marketing", label: "Marketing" },
  { id: "development", label: "Development" },
  { id: "analytics", label: "Analytics" },
  { id: "ecommerce", label: "E-commerce" },
];

function SearchParamsSync({
  onSelectService,
}: {
  onSelectService: (slug: string, page: 1 | 2) => void;
}) {
  const searchParams = useSearchParams();
  const queryService = searchParams.get("service") || searchParams.get("id");

  useEffect(() => {
    if (queryService) {
      const matchIndex = SERVICES_DATA.findIndex(
        (s) =>
          s.slug.toLowerCase() === queryService.toLowerCase() ||
          s.id.toLowerCase() === queryService.toLowerCase() ||
          s.num === queryService
      );
      if (matchIndex !== -1) {
        onSelectService(SERVICES_DATA[matchIndex].slug, matchIndex >= 6 ? 2 : 1);
      }
    }
  }, [queryService, onSelectService]);

  return null;
}

function ServicesContent() {
  const router = useRouter();

  // Determine active service slug (defaults to first service for instant SSR without suspending)
  const [activeSlug, setActiveSlug] = useState<string>(SERVICES_DATA[0].slug);

  // Hovered card slug for interactive SVG animation play/stop matching console code
  const [hoveredCardSlug, setHoveredCardSlug] = useState<string | null>(null);

  // Category filter state
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Card pagination (First 6 vs After 6) with auto-switch animation
  const [cardPage, setCardPage] = useState<1 | 2>(1);
  const [slideDirection, setSlideDirection] = useState<number>(1);
  const [isCardsHovered, setIsCardsHovered] = useState<boolean>(false);

  // Synchronize active service and page if URL search param is present
  const handleSyncService = useCallback((slug: string, page: 1 | 2) => {
    setActiveSlug(slug);
    setCardPage(page);
  }, []);

  // FAQ accordion open index
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Full detailed inclusions expansion toggle
  const [showFullDetails, setShowFullDetails] = useState<boolean>(false);

  // Proof mode toggle (Dashboard View vs 3D Image Proof Slider)
  const [proofViewMode, setProofViewMode] = useState<"slider" | "analytics">("slider");

  // Auto-animated 3D proof slider state
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isSliderHovered, setIsSliderHovered] = useState<boolean>(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  // Auto-switch between First 6 (01-06) and After 6 (07-12) cards with lite fast speed (4.2 seconds)
  useEffect(() => {
    if (isCardsHovered || activeCategory !== "all") return;
    const interval = setInterval(() => {
      setSlideDirection(1);
      setCardPage((prev) => (prev === 1 ? 2 : 1));
    }, 4200);
    return () => clearInterval(interval);
  }, [isCardsHovered, activeCategory]);

  const handleSwitchCardPage = (page: 1 | 2) => {
    if (page === cardPage) return;
    setSlideDirection(page > cardPage ? 1 : -1);
    setCardPage(page);
  };

  const handleNextCardPage = () => {
    setSlideDirection(1);
    setCardPage((prev) => (prev === 1 ? 2 : 1));
  };

  const handlePrevCardPage = () => {
    setSlideDirection(-1);
    setCardPage((prev) => (prev === 2 ? 1 : 2));
  };

  // Reset slider and FAQ index when active service changes
  useEffect(() => {
    setCurrentSlide(0);
    setOpenFaqIndex(0);
  }, [activeSlug]);

  const activeService = useMemo(() => {
    return SERVICES_DATA.find((s) => s.slug === activeSlug) || SERVICES_DATA[0];
  }, [activeSlug]);

  const fitDetails = useMemo(() => {
    return getServiceFitDetails(activeService.slug);
  }, [activeService.slug]);

  const proofSlides = useMemo(() => {
    return getServiceProofSlides(activeService);
  }, [activeService]);

  // Filtered services list
  const filteredServices = useMemo(() => {
    if (activeCategory === "all") {
      return cardPage === 1 ? SERVICES_DATA.slice(0, 6) : SERVICES_DATA.slice(6, 12);
    }
    return SERVICES_DATA.filter((s) => {
      const text = (s.title + " " + s.badge + " " + s.tagline + " " + s.desc).toLowerCase();
      if (activeCategory === "seo") return text.includes("seo") || text.includes("search");
      if (activeCategory === "marketing") return text.includes("marketing") || text.includes("social") || text.includes("email");
      if (activeCategory === "development") return text.includes("wordpress") || text.includes("web") || text.includes("next.js");
      if (activeCategory === "analytics") return text.includes("analytics") || text.includes("ga4") || text.includes("reporting");
      if (activeCategory === "ecommerce") return text.includes("commerce") || text.includes("shopify") || text.includes("cart");
      return true;
    });
  }, [activeCategory, cardPage]);

  // Auto-slide effect for proof slider with lite fast speed (3000ms / 3 seconds)
  useEffect(() => {
    if (isSliderHovered || isLightboxOpen) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % proofSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isSliderHovered, isLightboxOpen, proofSlides.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % proofSlides.length);
  }, [proofSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + proofSlides.length) % proofSlides.length);
  }, [proofSlides.length]);

  // Lightbox keyboard ESC support
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, nextSlide, prevSlide]);

  const handleCardClick = (slugOrId: string) => {
    setActiveSlug(slugOrId);
    router.push(`/services/${slugOrId}`);
  };

  const getOffset = (index: number) => {
    const total = proofSlides.length;
    const diff = (index - currentSlide + total) % total;
    if (diff > total / 2) {
      return diff - total;
    }
    return diff;
  };

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
            1. HERO SECTION (Identical to screenshot)
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
              <span className="text-stone-700 dark:text-stone-300 truncate max-w-[200px]">
                {activeService.shortTitle}
              </span>
            </div>
          </div>

          {/* Hero Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtitle & Strategy Pills */}
            <div className="lg:col-span-7 space-y-5">


              {/* Big Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-stone-900 dark:text-white">
                Services We Provide &amp;<br />
                <span className="relative inline-block text-[#2563EB]">
                  Growth Frameworks.
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed max-w-xl font-normal">
                We build modern, scalable and high-performance digital solutions that help your business grow in the digital world.
              </p>


            </div>

            {/* Right Column: Floating 3D Browser Mockup with Chart & Cursive Annotation */}
            <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">

              {/* 3D Browser Window Mockup */}
              <motion.div
                whileHover={{ y: -6, rotateX: 2, rotateY: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full max-w-md rounded-3xl bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 p-5 sm:p-6 shadow-xl relative overflow-hidden backdrop-blur-xl"
              >
                {/* Browser top controls */}
                <div className="flex items-center justify-between border-b border-stone-200/60 dark:border-white/10 pb-4 mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-stone-100 dark:bg-white/10 text-stone-900 dark:text-white text-[10px] font-mono font-bold flex items-center gap-1 border border-stone-200/80 dark:border-white/15">
                    <TrendingUp className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    Growth +
                  </span>
                </div>

                {/* SVG Smooth Ascending Trend Line Chart */}
                <div className="space-y-3">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[11px] font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                        Organic Search Trajectory
                      </p>
                      <h4 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-white">
                        +284.6%
                      </h4>
                    </div>
                    <span className="px-2 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                      Verified Lift ↗
                    </span>
                  </div>

                  <div className="relative h-32 w-full pt-2">
                    <svg
                      viewBox="0 0 300 100"
                      className="w-full h-full overflow-visible"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="heroChartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      {/* Gradient fill area */}
                      <path
                        d="M 10,85 C 60,80 110,65 160,45 C 210,25 250,30 290,10 L 290,100 L 10,100 Z"
                        fill="url(#heroChartGrad)"
                      />
                      {/* Line stroke */}
                      <path
                        d="M 10,85 C 60,80 110,65 160,45 C 210,25 250,30 290,10"
                        stroke="#10B981"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      {/* Chart dots */}
                      <circle cx="10" cy="85" r="4" fill="#10B981" />
                      <circle cx="160" cy="45" r="4.5" fill="#10B981" />
                      <circle cx="290" cy="10" r="5.5" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-stone-400 border-t border-stone-200/60 dark:border-white/10 pt-2">
                    <span>Q1 Audit</span>
                    <span>Q2 Architecture</span>
                    <span>Q3 Authority</span>
                    <span className="text-stone-900 dark:text-white font-bold">Q4 Scale</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scrolling Ticker Strip */}

        </section>

        {/* ========================================================
            2. SERVICES FILTER TABS & 6-CARDS GRID (Auto-animated rotation)
        ======================================================== */}
        <section
          id="services-grid-section"
          className="space-y-6"
          onMouseEnter={() => setIsCardsHovered(true)}
          onMouseLeave={() => setIsCardsHovered(false)}
        >
          {/* Tabs bar with category pills, auto-rotate status & controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Filter pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {CATEGORY_TABS.map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveCategory(tab.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${isActive
                      ? "bg-stone-900 dark:bg-white text-white dark:text-stone-900 shadow-md scale-[1.02]"
                      : "bg-white dark:bg-white/5 border border-stone-200/80 dark:border-white/10 text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white hover:border-stone-400 hover:bg-stone-100 dark:hover:bg-white/10"
                      }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Right side: Page switcher & Services count */}
            <div className="flex items-center gap-2 sm:gap-3 self-end sm:self-auto flex-wrap">
              {activeCategory === "all" && (
                <div className="flex items-center gap-1.5">
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-stone-400 dark:text-stone-500 pr-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Auto (4s)
                  </span>

                  <button
                    type="button"
                    onClick={() => handleSwitchCardPage(1)}
                    aria-label="View first 6 services (01-06)"
                    className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${cardPage === 1
                      ? "bg-stone-900 dark:bg-white text-white dark:text-stone-900 shadow-sm scale-105"
                      : "bg-white dark:bg-white/5 border border-stone-200/80 dark:border-white/10 text-stone-700 dark:text-stone-300 hover:border-stone-400 hover:bg-stone-100 dark:hover:bg-white/10"
                      }`}
                  >
                    01–06
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSwitchCardPage(2)}
                    aria-label="View after 6 services (07-12)"
                    className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${cardPage === 2
                      ? "bg-stone-900 dark:bg-white text-white dark:text-stone-900 shadow-sm scale-105"
                      : "bg-white dark:bg-white/5 border border-stone-200/80 dark:border-white/10 text-stone-700 dark:text-stone-300 hover:border-stone-400 hover:bg-stone-100 dark:hover:bg-white/10"
                      }`}
                  >
                    07–12
                  </button>

                  {/* Quick toggle arrows */}
                  <div className="flex items-center gap-1 pl-1">
                    <button
                      type="button"
                      onClick={handlePrevCardPage}
                      aria-label="Previous card set"
                      className="w-7 h-7 rounded-lg flex items-center justify-center bg-white dark:bg-white/10 hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-stone-900 border border-stone-200/80 dark:border-white/10 text-stone-700 dark:text-stone-300 transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextCardPage}
                      aria-label="Next card set"
                      className="w-7 h-7 rounded-lg flex items-center justify-center bg-white dark:bg-white/10 hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-stone-900 border border-stone-200/80 dark:border-white/10 text-stone-700 dark:text-stone-300 transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              <span className="px-3 py-1 rounded-full bg-stone-50/80 dark:bg-white/5 border border-stone-200/80 dark:border-white/10 text-xs font-bold text-stone-700 dark:text-stone-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-stone-900 dark:bg-white" />
                {filteredServices.length} Services
              </span>
            </div>
          </div>

          {/* 3x2 Grid of Attractive Service Cards (Large Size & ID-wise Navigation) */}
          <AnimatePresence mode="wait" custom={slideDirection}>
            <motion.div
              key={`${activeCategory}-${cardPage}`}
              custom={slideDirection}
              variants={CARDS_CONTAINER_VARIANTS}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredServices.map((svc) => {
                const Icon = ICON_MAP[svc.iconName] || Search;
                const isSelected = svc.slug === activeSlug;

                const isCardHovered = hoveredCardSlug === svc.slug;
                const animId = svc.slug === "technical-seo"
                  ? "Tech_and_infrastructure"
                  : svc.slug === "aeo-geo"
                    ? "Digital_Strategy"
                    : `service_ani_${svc.id.replace(/-/g, "_")}`;

                return (
                  <motion.div
                    key={svc.id}
                    variants={CARD_ITEM_VARIANTS}
                    whileHover={{ y: -8, scale: 1.018 }}
                    whileTap={{ scale: 0.985 }}
                    onClick={() => handleCardClick(svc.id)}
                    onMouseEnter={() => setHoveredCardSlug(svc.slug)}
                    onMouseLeave={() => setHoveredCardSlug(null)}
                    data-aos="fade-up"
                    data-aos-delay={600}
                    data-aos-anchor=".common-fintech-sect3"
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
                      ${isSelected
                        ? "border-[#2563EB] dark:border-[#2563EB] ring-2 ring-orange-500/25 shadow-2xl bg-orange-500/[0.03] dark:bg-orange-500/[0.05] -translate-y-1.5"
                        : "border-stone-200/80 dark:border-white/10 hover:border-orange-500/50 dark:hover:border-orange-500/50 hover:bg-orange-500/[0.02] dark:hover:bg-white/[0.03] hover:shadow-[0_20px_50px_rgba(37,99,235,0.12),0_0_30px_rgba(37,99,235,0.06)] dark:hover:shadow-[0_22px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(37,99,235,0.15)]"
                      }
                    `}
                  >
                    {/* Live subtle aura glow on card hover */}
                    <div className="pointer-events-none absolute -inset-px rounded-[36px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent -z-10" />

                    {/* Subtle top accent bar if selected */}
                    {isSelected && (
                      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8]" />
                    )}

                    {/* Top: Spacious Visual Illustration Box (Large Size) */}
                    <div className="services-d-card-img relative w-full h-52 sm:h-58 lg:h-64 rounded-3xl bg-stone-50/90 dark:bg-black/50 border border-stone-200/80 dark:border-white/10 overflow-hidden flex items-center justify-center p-4 sm:p-5 mb-5 group-hover:border-orange-400/80 dark:group-hover:border-orange-500/50 group-hover:shadow-[0_10px_32px_rgba(37,99,235,0.18)] transition-all duration-500">
                      {/* Live light scan beam on hover */}
                      <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/50 dark:via-white/15 to-transparent transition-transform duration-1000 ease-in-out" />

                      <div className={`lottie-ani-wrap lottie-ani-wrap${svc.num} w-full h-full flex items-center justify-center`}>
                        {/* Desktop Player */}
                        <div
                          id={animId}
                          className="dotlottie-ani show-desktop hide-mobile w-full h-full flex items-center justify-center"
                          data-playmode="normal"
                          data-speed="1"
                          data-direction="1"
                        >
                          <div
                            id="animation-container"
                            lang="en"
                            role="img"
                            aria-label="Lottie animation"
                            className="main w-full h-full flex items-center justify-center"
                          >
                            <div
                              id="animation"
                              className="animation w-full h-full flex items-center justify-center"
                              style={{ background: "transparent" }}
                            >
                              <ServiceCardIllustration
                                slug={svc.slug}
                                isSelected={isSelected}
                                isHovered={isCardHovered}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Mobile Sibling Matching Console Code */}
                        <div
                          id={`${animId}-xs`}
                          className="dotlottie-ani hide-desktop show-mobile hidden w-full h-full"
                          data-autoplay="true"
                        />
                      </div>
                    </div>

                    {/* Middle: Number badge, Live Pulse & Title & Description */}
                    <div className="space-y-3 mb-5 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-stone-800 dark:text-stone-200 bg-stone-100 dark:bg-white/10 px-3 py-1 rounded-full border border-stone-200/80 dark:border-white/15">
                            SERVICE {svc.num}
                          </span>

                        </div>
                        <span className="text-xs font-semibold text-stone-500 dark:text-stone-400 truncate max-w-[140px]">
                          {svc.badge}
                        </span>
                      </div>

                      <h3
                        className={`text-xl sm:text-2xl font-black tracking-tight leading-snug transition-colors group-hover:text-[#2563EB] dark:group-hover:text-[#14B8A6] ${isSelected
                          ? "text-[#2563EB] dark:text-[#14B8A6]"
                          : "text-stone-900 dark:text-white"
                          }`}
                      >
                        {svc.shortTitle}
                      </h3>

                      <p className="text-sm sm:text-[15px] text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed">
                        {svc.desc}
                      </p>

                      {/* Deliverables Preview Tags */}
                      {svc.deliverables && svc.deliverables.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {svc.deliverables.slice(0, 2).map((deliv, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-100/80 dark:bg-white/5 text-[11px] font-medium text-stone-700 dark:text-stone-300 border border-stone-200/60 dark:border-white/5 truncate max-w-full"
                            >
                              <CheckCircle2 className="w-3 h-3 text-[#2563EB] shrink-0" />
                              <span className="truncate">{deliv.split(":")[0] || deliv}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom Row: Direct Link Action Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-stone-200/70 dark:border-white/10 mt-auto">
                      <span className="text-xs sm:text-sm font-bold text-stone-800 dark:text-stone-200 group-hover:text-[#2563EB] dark:group-hover:text-[#14B8A6] transition-colors flex items-center gap-2">
                        <span>Explore full service</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                      </span>

                      <div
                        className={`
                          w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                          bg-stone-100 dark:bg-white/10 text-stone-700 dark:text-stone-300 border border-stone-200/80 dark:border-white/10
                          group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] group-hover:scale-110 shadow-sm
                        `}
                      >
                        <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* ========================================================
            3. FEATURED SERVICE SHOWCASE BOX
        ======================================================== */}
        <section
          id="featured-service-showcase"
          className="relative rounded-[32px] p-6 sm:p-8 lg:p-10 bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 shadow-xl overflow-hidden"
        >
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-stone-300/20 dark:bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Column: Details & Metric Badges */}
            <div className="lg:col-span-7 space-y-5">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 dark:bg-white/10 text-stone-900 dark:text-stone-200 text-xs font-bold uppercase tracking-wider border border-stone-200/80 dark:border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-stone-900 dark:text-white" />
                <span>Featured Service</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-stone-900 dark:text-white leading-tight">
                {activeService.title}
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-xl">
                {activeService.longDescription}
              </p>

              {/* 3 Metrics Badges in a Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-3.5 rounded-2xl bg-stone-50/60 dark:bg-white/[0.04] border border-stone-200/80 dark:border-white/10 shadow-sm flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-stone-100 dark:bg-white/10 text-stone-900 dark:text-white border border-stone-200/80 dark:border-white/15 flex items-center justify-center font-bold">
                    <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-base font-black text-stone-900 dark:text-white">
                      {activeService.stats.highlight}
                    </p>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">
                      {activeService.stats.label}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-stone-50/60 dark:bg-white/[0.04] border border-stone-200/80 dark:border-white/10 shadow-sm flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-stone-100 dark:bg-white/10 text-stone-900 dark:text-white border border-stone-200/80 dark:border-white/15 flex items-center justify-center font-bold">
                    <Award className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-base font-black text-stone-900 dark:text-white">
                      +96%
                    </p>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">
                      Avg. Ranking Improvement
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-stone-50/60 dark:bg-white/[0.04] border border-stone-200/80 dark:border-white/10 shadow-sm flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-stone-100 dark:bg-white/10 text-stone-900 dark:text-white border border-stone-200/80 dark:border-white/15 flex items-center justify-center font-bold">
                    <Clock className="w-4 h-4 text-sky-500" />
                  </div>
                  <div>
                    <p className="text-base font-black text-stone-900 dark:text-white">
                      1.8s
                    </p>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight">
                      Avg. Load Speed (CWV)
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-black/10 active:scale-95 transition-all"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>


              </div>
            </div>

            {/* Right Column: Google Search Telemetry Live UI Mockup */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="w-full max-w-md rounded-2xl bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 p-5 shadow-xl relative space-y-4">
                {/* Search Bar Widget */}
                <div className="flex items-center gap-2.5 p-2.5 rounded-full bg-stone-50 dark:bg-white/5 border border-stone-200/80 dark:border-white/10 text-xs">
                  <span className="font-bold text-stone-900 dark:text-white px-1.5">Google</span>
                  <span className="text-stone-400 truncate flex-1">
                    {activeService.title}
                  </span>
                  <Search className="w-3.5 h-3.5 text-stone-400" />
                </div>

                <p className="text-[10px] text-stone-400 font-mono">
                  About 350,000 results (0.42 seconds)
                </p>

                {/* Overlapping Floating Organic Traffic Card */}
                <div className="rounded-xl p-4 bg-stone-50/90 dark:bg-white/[0.04] border border-stone-200/80 dark:border-white/10 space-y-3 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-stone-500 dark:text-stone-400">
                        Organic Traffic
                      </span>
                      <h4 className="text-2xl font-black text-stone-900 dark:text-white">
                        +210%
                      </h4>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-stone-900 dark:bg-white text-white dark:text-stone-900 flex items-center justify-center font-bold text-xs">
                      ↗
                    </span>
                  </div>

                  {/* SVG glowing trend */}
                  <div className="h-16 w-full text-emerald-500">
                    <svg
                      viewBox="0 0 240 60"
                      className="w-full h-full"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M 5,50 C 40,48 80,35 120,25 C 160,15 200,20 235,5"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            4. PROOF OF OUR WORK — "Real Results. Real Growth."
               Includes BOTH interactive image slider proof (requested by user)
               AND the executive telemetry dashboard!
        ======================================================== */}
        <section className="space-y-8">
          {/* Section Header with Mode Toggle & Slide Pager */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 dark:bg-white/10 text-stone-900 dark:text-stone-200 text-xs font-bold uppercase tracking-wider mb-2 border border-stone-200/80 dark:border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-stone-900 dark:text-white" />
                <span>Proof of Our Work</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-stone-900 dark:text-white">
                Real Results{" "
                }<span className="text-[#2563EB]">Real Growth.</span>
              </h2>
              <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 mt-2 max-w-xl">
                See how we've helped businesses improve their search rankings, traffic and conversions with our proven strategies.
              </p>
            </div>

            {/* View Switcher & Slide Controls */}
            <div className="flex items-center gap-3 self-start md:self-auto">

              {/* Slider vs Analytics Mode Switcher */}
              <div className="p-1 rounded-xl bg-stone-100 dark:bg-white/10 border border-stone-200/80 dark:border-white/15 flex items-center gap-1 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setProofViewMode("slider")}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${proofViewMode === "slider"
                    ? "bg-white dark:bg-[#111B2E] text-stone-950 dark:text-white shadow-sm"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white"
                    }`}
                >
                  Live Proof Slider
                </button>
                <button
                  type="button"
                  onClick={() => setProofViewMode("analytics")}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${proofViewMode === "analytics"
                    ? "bg-white dark:bg-[#111B2E] text-stone-950 dark:text-white shadow-sm"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white"
                    }`}
                >
                  Dashboard View
                </button>
              </div>

              {/* Arrow navigation */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="w-9 h-9 rounded-xl border border-stone-200/80 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-stone-900 hover:border-stone-900 dark:hover:border-white transition-colors cursor-pointer active:scale-95 text-stone-700 dark:text-stone-300"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold text-stone-500 px-1">
                  {(currentSlide + 1).toString().padStart(2, "0")} / {proofSlides.length.toString().padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="w-9 h-9 rounded-xl border border-stone-200/80 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-stone-900 hover:border-stone-900 dark:hover:border-white transition-colors cursor-pointer active:scale-95 text-stone-700 dark:text-stone-300"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* MAIN PROOF CONTAINER */}
          {proofViewMode === "slider" ? (
            /* 3D Perspective Image Proof Slider (Exact GSC & GA4 live proofs) */
            <div
              className="rounded-3xl border border-stone-200/80 dark:border-white/10 bg-white dark:bg-[#111B2E] p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden relative"
              onMouseEnter={() => setIsSliderHovered(true)}
              onMouseLeave={() => setIsSliderHovered(false)}
            >
              {/* Slider 3D Stage with floating side navigation arrows */}
              <div
                className="relative w-full h-[280px] sm:h-[360px] md:h-[430px] flex items-center justify-center overflow-hidden rounded-2xl select-none"
                style={{ perspective: "1000px" }}
              >
                {/* Floating Left Arrow */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                  }}
                  aria-label="Previous Slide"
                  className="absolute left-2 sm:left-4 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/75 hover:bg-stone-800 text-white border border-white/30 backdrop-blur-md shadow-xl flex items-center justify-center transition-all cursor-pointer active:scale-90"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                </button>

                {proofSlides.map((slide, index) => {
                  const offset = getOffset(index);
                  const isCenter = offset === 0;
                  const isVisible = Math.abs(offset) <= 1 || proofSlides.length <= 2;

                  if (!isVisible && Math.abs(offset) > 1) return null;

                  return (
                    <motion.div
                      key={slide.title + index}
                      onClick={() => {
                        if (isCenter) setIsLightboxOpen(true);
                        else setCurrentSlide(index);
                      }}
                      initial={false}
                      animate={{
                        x: proofSlides.length > 1 ? `${offset * 68}%` : "0%",
                        scale: isCenter ? 1 : 0.84,
                        opacity: isCenter ? 1 : 0.45,
                        rotateY: proofSlides.length > 1 ? offset * -14 : 0,
                        zIndex: isCenter ? 20 : 10,
                      }}
                      transition={{ type: "spring", stiffness: 280, damping: 24, mass: 0.8 }}
                      className={`absolute w-[88%] sm:w-[76%] md:w-[68%] aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer ${isCenter
                        ? "border-2 border-stone-900 dark:border-white shadow-2xl ring-1 ring-black/10 dark:ring-white/20"
                        : "border border-stone-300/40 dark:border-stone-800 shadow-lg hover:opacity-75"
                        } bg-black`}
                    >
                      <Image
                        src={slide.url}
                        alt={slide.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 90vw, 65vw"
                      />

                      {/* Header overlay on center slide */}
                      {isCenter && (
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 border border-white/20 text-white text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            {slide.tag}
                          </span>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsLightboxOpen(true);
                            }}
                            className="p-1.5 rounded-xl bg-black/75 hover:bg-stone-800 border border-white/20 text-white transition-colors pointer-events-auto cursor-pointer"
                            title="Zoom Image"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </motion.div>
                  );
                })}

                {/* Floating Right Arrow */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  aria-label="Next Slide"
                  className="absolute right-2 sm:right-4 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/75 hover:bg-stone-800 text-white border border-white/30 backdrop-blur-md shadow-xl flex items-center justify-center transition-all cursor-pointer active:scale-90"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                </button>
              </div>

              {/* Slide Navigation Dots Indicator */}
              <div className="flex items-center justify-center gap-2 pt-3">
                {proofSlides.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => setCurrentSlide(dotIdx)}
                    aria-label={`Jump to slide ${dotIdx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === dotIdx
                      ? "w-8 bg-stone-900 dark:bg-white shadow-sm"
                      : "w-2 bg-stone-300 dark:bg-white/20 hover:bg-stone-500 dark:hover:bg-white/50"
                      }`}
                  />
                ))}
              </div>

              {/* Active slide details footer card */}
              <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-stone-50/70 dark:bg-white/[0.03] border border-stone-200/80 dark:border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold text-stone-900 dark:text-white uppercase tracking-wider">
                    {proofSlides[currentSlide].tag}
                  </span>
                  <h4 className="text-base font-bold text-stone-900 dark:text-white mt-0.5">
                    {proofSlides[currentSlide].title}
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 mt-1 max-w-2xl">
                    {proofSlides[currentSlide].description}
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-right">
                    <p className="text-xs text-stone-400">Attributed Lift</p>
                    <p className="text-lg font-black text-emerald-600 dark:text-emerald-400">
                      {proofSlides[currentSlide].metric}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-black/10 active:scale-95 transition-all"
                  >
                    View Fullscreen
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Dashboard Analytics View (Matching screenshot diagram) */
            <div className="rounded-3xl border border-stone-200/80 dark:border-white/10 bg-white dark:bg-[#111B2E] p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left 3 Stat Badges */}
                <div className="lg:col-span-3 space-y-4">
                  <div className="p-4 rounded-2xl bg-stone-50/60 dark:bg-white/[0.03] border border-stone-200/80 dark:border-white/10">
                    <p className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                      Organic Traffic
                    </p>
                    <h4 className="text-2xl font-black text-stone-900 dark:text-white mt-1">
                      +312% ↗
                    </h4>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50/60 dark:bg-white/[0.03] border border-stone-200/80 dark:border-white/10">
                    <p className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                      Keyword Rankings
                    </p>
                    <h4 className="text-lg font-black text-stone-900 dark:text-white mt-1">
                      Top 3: 28 → 112
                    </h4>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50/60 dark:bg-white/[0.03] border border-stone-200/80 dark:border-white/10">
                    <p className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                      Conversions
                    </p>
                    <h4 className="text-2xl font-black text-stone-900 dark:text-white mt-1">
                      +176% ↗
                    </h4>
                  </div>
                </div>

                {/* Center: Performance Overview Line Chart */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-stone-900 dark:text-white">
                      Performance Overview
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-stone-100 dark:bg-white/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-stone-200/80 dark:border-white/15">
                      +312%
                    </span>
                  </div>

                  <div className="h-44 w-full">
                    <svg
                      viewBox="0 0 320 120"
                      className="w-full h-full overflow-visible"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M 10,95 C 50,90 90,75 130,55 C 170,45 220,50 260,25 C 285,15 305,18 315,10"
                        stroke="#10B981"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      <circle cx="10" cy="95" r="4" fill="#10B981" />
                      <circle cx="130" cy="55" r="4" fill="#10B981" />
                      <circle cx="260" cy="25" r="4" fill="#10B981" />
                      <circle cx="315" cy="10" r="5" fill="#10B981" stroke="#FFF" strokeWidth="2" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-stone-400 border-t border-stone-200/60 dark:border-white/10 pt-2">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                  </div>
                </div>

                {/* Right: Total Clicks Donut & Top Keywords */}
                <div className="lg:col-span-3 space-y-4">
                  <div className="p-4 rounded-2xl bg-stone-50/60 dark:bg-white/[0.03] border border-stone-200/80 dark:border-white/10 text-center">
                    <p className="text-[11px] text-stone-400 font-medium uppercase">Total Clicks</p>
                    <h5 className="text-2xl font-black text-stone-900 dark:text-white">48.2K</h5>
                    <span className="text-[11px] text-emerald-500 font-bold">+71% vs prev</span>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <p className="font-bold text-stone-500 uppercase text-[10px] tracking-wider">Top Keywords</p>
                    {[
                      "digital marketing",
                      "seo services",
                      "web development",
                      "custom strategy",
                    ].map((kw, i) => (
                      <div key={i} className="flex items-center justify-between py-1 border-b border-stone-200/60 dark:border-white/5">
                        <span className="truncate">{i + 1}. {kw}</span>
                        <span className="text-emerald-500 font-bold">↗</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ========================================================
            5. TWO-COLUMN FIT & EXPECTATIONS SECTION
        ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Card: Is this service right for you? */}
          <div className="rounded-[30px] p-7 sm:p-9 bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              <div>

                <h3 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-white mt-1 leading-snug">
                  Perfect for Businesses That Want to{" "}
                  <span className="text-[#2563EB]">Grow Online.</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-2 leading-relaxed">
                  If you're looking to rank higher, get more organic traffic, and turn visitors into customers — this service is for you.
                </p>
              </div>

              {/* Bullet Checklist */}
              <div className="space-y-3 pt-1">
                {(fitDetails.goodFitPoints.length > 0 ? fitDetails.goodFitPoints : [
                  "Your website isn't ranking well on search engines.",
                  "You want to attract more qualified traffic.",
                  "You need better on-page and technical optimization.",
                  "You're losing traffic to competitors.",
                  "You want long-term, sustainable growth.",
                ]).map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-stone-100 dark:bg-white/10 text-stone-900 dark:text-white border border-stone-200/80 dark:border-white/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-medium leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Handwritten cursive note at bottom */}

          </div>

          {/* Right Card: What You Can Expect */}
          <div className="rounded-[30px] p-7 sm:p-9 bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 shadow-lg flex flex-col justify-between space-y-6">
            <div>

              <h3 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-white mt-1 leading-snug">
                Clear Strategy.
                <span className="text-[#2563EB]">
                  Measurable Results.</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-2 leading-relaxed">
                We focus on performance, transparency and long-term growth. Here's what you can expect when you work with us.
              </p>
            </div>

            {/* 4 Outcome Items with rounded icon boxes */}
            <div className="space-y-4">
              {[
                {
                  title: "Higher Search Rankings",
                  desc: "Get found by your target audience.",
                  icon: TrendingUp,
                },
                {
                  title: "More Organic Traffic",
                  desc: "Bring in consistent, quality visitors.",
                  icon: Globe,
                },
                {
                  title: "Better User Experience",
                  desc: "Fast, clean and optimized website.",
                  icon: Zap,
                },
                {
                  title: "Long-Term Growth",
                  desc: "Sustainable results, not just short-term wins.",
                  icon: ShieldCheck,
                },
              ].map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-stone-50/60 dark:bg-white/[0.03] border border-stone-200/80 dark:border-white/10 hover:border-stone-400 dark:hover:border-white/30 hover:bg-stone-100/60 dark:hover:bg-white/[0.05] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-stone-100 dark:bg-white/10 text-stone-900 dark:text-white border border-stone-200/80 dark:border-white/15 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-stone-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-stone-500 dark:text-stone-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            6. "What's Included in This Service?" STRIP
        ======================================================== */}
        <section className="rounded-3xl p-6 sm:p-8 bg-stone-50/70 dark:bg-white/[0.03] border border-stone-200/80 dark:border-white/10 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>

              <h3 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white mt-0.5">
                What's Included In<span className="text-[#2563EB]">This Service?</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">
                Everything you need for better rankings, more traffic and real business growth.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowFullDetails((prev) => !prev)}
              className="px-4 py-2 rounded-full bg-white dark:bg-white/10 border border-stone-200/80 dark:border-white/15 text-xs font-bold text-stone-700 dark:text-stone-200 hover:text-stone-950 dark:hover:text-white hover:border-stone-400 dark:hover:border-white/30 transition-colors cursor-pointer self-start sm:self-auto"
            >
              {showFullDetails ? "Hide Full Scope" : "View Full Details →"}
            </button>
          </div>

          {/* Horizontal row of deliverables badges */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {[
              "Technical SEO Audit",
              "On-Page Optimization",
              "Keyword Mapping",
              "Content Suggestions",
              "Monthly Reports",
            ].map((deliv, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-white dark:bg-white/10 border border-stone-200/80 dark:border-white/15 text-xs font-semibold text-stone-800 dark:text-stone-200 flex items-center gap-2 shadow-xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {deliv}
              </span>
            ))}
          </div>

          {/* Expandable full breakdown if clicked */}
          <AnimatePresence>
            {showFullDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden pt-4 border-t border-stone-200/80 dark:border-white/10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {fitDetails.inclusionCategories.map((cat, cIdx) => (
                    <div key={cIdx} className="p-4 rounded-2xl bg-white dark:bg-black/30 border border-stone-200/70 dark:border-white/10 space-y-2 shadow-xs">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-white">
                        {cat.title}
                      </h4>
                      <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-300">
                        {cat.items.map((it, itIdx) => (
                          <li key={itIdx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* ========================================================
            7. "Simple 4-Step Process"
        ======================================================== */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>

              <h3 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-white mt-1">
                Simple 4-Step<span className="text-[#2563EB]"> Process</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
                A clear and transparent process to get you the best results.
              </p>
            </div>

            <span className="text-xs font-semibold text-stone-500 dark:text-stone-400">
              From strategy to success →
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                title: "Discover & Analyze",
                desc: "Understand your goals, audience and competitors.",
              },
              {
                step: "02",
                title: "Plan & Optimize",
                desc: "Create a tailored strategy and implement the changes.",
              },
              {
                step: "03",
                title: "Track & Improve",
                desc: "Review performance and make data-driven adjustments.",
              },
              {
                step: "04",
                title: "Grow & Scale",
                desc: "Achieve long-term results and scale your business.",
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 shadow-sm space-y-3 hover:border-stone-400 dark:hover:border-white/30 hover:bg-stone-50/50 dark:hover:bg-white/[0.02] transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-stone-100 dark:bg-white/10 text-stone-900 dark:text-white border border-stone-200/80 dark:border-white/15 flex items-center justify-center font-bold text-xs">
                    {p.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-stone-300 dark:bg-white/20" />
                </div>
                <h4 className="text-base font-bold text-stone-900 dark:text-white">
                  {p.title}
                </h4>
                <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            8. "Technologies & Tools" ROW
        ======================================================== */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
                ✦ Technologies &amp; Tools
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white mt-1">
                We Use the Best Tools for Better Results
              </h3>
            </div>
            <span className="text-xs font-semibold text-stone-500 dark:text-stone-400">
              Trusted by 100+ businesses →
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {[
              "Google Analytics",
              "Google Search Console",
              "Ahrefs",
              "Semrush",
              "Screaming Frog",
              "WordPress",
              "Looker Studio",
            ].map((tool, idx) => {
              const img = getToolImage(tool);
              return (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 flex flex-col items-center justify-center gap-2 text-center shadow-sm hover:border-stone-400 dark:hover:border-white/30 hover:bg-stone-50/50 dark:hover:bg-white/[0.02] transition-all"
                >
                  <div className="relative w-8 h-8 rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt={tool}
                      fill
                      className="object-contain"
                      sizes="32px"
                    />
                  </div>
                  <span className="text-[11px] font-bold text-stone-700 dark:text-stone-300 truncate w-full">
                    {tool}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            9. FAQ SECTION (KEPT EXACTLY AS HOME WAY / PRESERVED AS REQUESTED)
        ======================================================== */}
        <section
          id="service-faq-section"
          className="relative rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 shadow-xl overflow-hidden bg-white dark:bg-[#0D0B0A]/80 border border-stone-200/80 dark:border-white/10 transition-colors duration-500"
        >
          {/* Ambient background glow */}
          <div className="absolute top-1/3 left-10 w-[350px] h-[350px] rounded-full bg-blue-500/[0.03] dark:bg-white/[0.03] blur-[140px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Heading & Avatar Image (Home Way) */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-stone-900 dark:bg-white" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-stone-900 dark:text-stone-100">
                  FAQ
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-white leading-[1.15] mb-4 sm:mb-6">
                Questions People Ask About
                <br />
                <span className="text-stone-900 dark:text-white">
                  {activeService.shortTitle}
                </span>
              </h2>

              {/* Avatar Image Card (Home Way) */}
              <div className="relative mt-4 sm:mt-6 max-w-sm">
                <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden p-3 sm:p-4 border border-stone-200/80 dark:border-white/10 bg-stone-50/40 dark:bg-white/5 backdrop-blur-md shadow-sm">
                  <div className="relative w-full aspect-square rounded-2xl sm:rounded-[24px] overflow-hidden">
                    <Image
                      src="/image-photo.png"
                      alt="FAQ Avatar"
                      fill
                      className="object-cover object-top hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 640px) 280px, 360px"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Accordion Q&A List */}
            <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
              {activeService.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;

                return (
                  <div
                    key={idx}
                    className="rounded-2xl sm:rounded-3xl bg-white dark:bg-[#111B2E] border border-stone-200/80 dark:border-white/10 p-5 sm:p-6 shadow-sm hover:border-stone-400 dark:hover:border-white/30 transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <span className="text-sm sm:text-base md:text-lg font-semibold text-stone-900 dark:text-white leading-snug">
                        {faq.q}
                      </span>

                      <span className="flex-shrink-0 text-stone-500 dark:text-stone-400 transition-transform duration-200">
                        {isOpen ? (
                          <X className="w-5 h-5 text-stone-800 dark:text-stone-200" />
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3.5 text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            10. BOTTOM CALL TO ACTION (CTA) BANNER WITH ROCKET & HANDWRITING
        ======================================================== */}
        <section className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-orange-100/90 via-orange-50/60 to-white dark:from-orange-500/15 dark:via-orange-500/10 dark:to-orange-500/5 border border-orange-300/80 dark:border-orange-500/30 shadow-xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          {/* Left: Rocket badge */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#FB923C] text-white flex items-center justify-center shadow-lg shadow-orange-500/30 text-2xl shrink-0">
              🚀
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#2563EB] uppercase tracking-wider">
                Ready to Get Started?
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-white mt-0.5">
                Let's Build Something Great Together!
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 max-w-xl">
                Get a free consultation and discover how we can help your business grow.
              </p>
            </div>
          </div>

          {/* Right: CTA Button & Cursive Note */}
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-bold shadow-lg shadow-orange-500/30 active:scale-95 transition-all"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>


          </div>
        </section>

      </main>

      {/* ========================================================
          FULLSCREEN LIGHTBOX MODAL (FOR PROOF SLIDER)
      ======================================================== */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-[9999] bg-black/92 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
                title="Close Lightbox (Esc)"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black">
                <Image
                  src={proofSlides[currentSlide].url}
                  alt={proofSlides[currentSlide].title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              <div className="w-full mt-3 flex items-center justify-between text-white text-xs sm:text-sm">
                <div>
                  <span className="font-bold">{proofSlides[currentSlide].title}</span>
                  <span className="text-stone-400 ml-2">({proofSlides[currentSlide].tag})</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="p-2 rounded-xl bg-white/10 hover:bg-[#2563EB] transition-colors cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2 rounded-xl bg-white/10 hover:bg-[#2563EB] transition-colors cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicesPage() {
  return <ServicesContent />;
}

"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Maximize2,
  X,
  Search,
  BarChart3,
  MapPin,
  TrendingUp,
  Building2,
} from "lucide-react";

/* ============================================================
   CATEGORIES DEFINITION
============================================================ */

export type CategoryId = "gsc" | "ga4" | "gmb" | "keywords";

interface CategoryMeta {
  id: CategoryId;
  name: string;
  shortName: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CATEGORIES: CategoryMeta[] = [
  {
    id: "gsc",
    name: "Google Search Console",
    shortName: "Search Console",
    subtitle: "Organic Clicks & Indexing",
    icon: Search,
  },
  {
    id: "ga4",
    name: "Google Analytics (GA4)",
    shortName: "Google Analytics",
    subtitle: "Revenue & Traffic Charts",
    icon: BarChart3,
  },
  {
    id: "gmb",
    name: "Google My Business",
    shortName: "Business Profile",
    subtitle: "Local 3-Pack & Growth",
    icon: MapPin,
  },
  {
    id: "keywords",
    name: "Keyword SERP Rankings",
    shortName: "Keyword Rankings",
    subtitle: "Page 1 Top Positions",
    icon: TrendingUp,
  },
];

/* ============================================================
   CLIENTS DEFINITION
============================================================ */

export interface ClientMeta {
  id: string;
  name: string;
  shortName: string;
}

const CLIENTS: ClientMeta[] = [
  { id: "all", name: "All Clients", shortName: "All" },
  { id: "harris", name: "Harris Pharmacy", shortName: "Harris" },
  { id: "maia", name: "Maia Health & Beauty", shortName: "Maia" },
  { id: "drtungs", name: "drTung's UK", shortName: "drTung's" },
  { id: "artistbrush", name: "Artist's Brush", shortName: "Artist's Brush" },
];

/* ============================================================
   PROOF SLIDES DATA (MAPPED TO CLIENT ANALYTICS IMAGES)
============================================================ */

interface ProofSlide {
  id: string;
  clientId: string;
  clientName: string;
  categoryId: CategoryId;
  title: string;
  shortTitle: string;
  badge: string;
  image: string;
  metricLabel: string;
  metricValue: string;
  metricGrowth: string;
  impressions: string;
  avgPosition: string;
  ctr: string;
  tags: string[];
  description: string;
  highlights: { label: string; value: string }[];
}

const ALL_PROOFS: ProofSlide[] = [
  // ==========================================
  // --- HARRIS PHARMACY (public/Analytics/Harris) ---
  // ==========================================
  {
    id: "harris-gsc-performance",
    clientId: "harris",
    clientName: "Harris Pharmacy",
    categoryId: "gsc",
    title: "Harris Pharmacy • Google Search Console Performance (185K Clicks)",
    shortTitle: "Harris Search Console",
    badge: "Harris Pharmacy • GSC Live Search",
    image: "/Analytics/Harris/harrisgsc.jpeg",
    metricLabel: "Organic Clicks",
    metricValue: "185K Clicks",
    metricGrowth: "+190% Lift",
    impressions: "3.2M Impr",
    avgPosition: "Pos 2.4 Avg",
    ctr: "5.8% CTR",
    tags: ["Harris Pharmacy", "London Healthcare", "GSC Live", "Local Pack"],
    description:
      "Google Search Console live search performance showing massive impressions and click surges across London pharmacy branches and NHS prescription requests.",
    highlights: [
      { label: "Organic Patient Clicks", value: "185K Clicks" },
      { label: "Search Impressions", value: "3.20 Million" },
      { label: "Average Position", value: "Pos 2.4 Avg" },
      { label: "Prescription Lift", value: "+190% Inquiries" },
    ],
  },
  {
    id: "harris-gsc-queries",
    clientId: "harris",
    clientName: "Harris Pharmacy",
    categoryId: "keywords",
    title: "Harris Pharmacy • Top Search Queries & SERP Positions",
    shortTitle: "Harris Keyword Rankings",
    badge: "Harris Pharmacy • SERP Top 1-3",
    image: "/Analytics/Harris/harrisgsc2.jpeg",
    metricLabel: "Query Positions",
    metricValue: "Top 1-3 Ranks",
    metricGrowth: "+142% Clicks",
    impressions: "1.1M Impr",
    avgPosition: "Pos 1.8 Avg",
    ctr: "8.4% CTR",
    tags: ["High-Intent Queries", "Top 1-3 Ranks", "NHS Queries", "Page 1 SERP"],
    description:
      "Rank #1 positions captured for urgent local healthcare queries, emergency pharmacy consultations, and electronic prescriptions.",
    highlights: [
      { label: "Query Positions", value: "Top 1-3 Ranks" },
      { label: "Click Rate", value: "8.4% CTR" },
      { label: "Query Impressions", value: "1.10 Million" },
      { label: "Commercial Intent", value: "Page 1 SERP" },
    ],
  },
  {
    id: "harris-gsc-geo",
    clientId: "harris",
    clientName: "Harris Pharmacy",
    categoryId: "gsc",
    title: "Harris Pharmacy • Regional & Geographic Patient Reach",
    shortTitle: "Harris Geo Density",
    badge: "Harris Pharmacy • Local Reach",
    image: "/Analytics/Harris/harrisgscgeo.jpeg",
    metricLabel: "Regional Reach",
    metricValue: "4 Boroughs",
    metricGrowth: "Local Domination",
    impressions: "840K Local Impr",
    avgPosition: "Pos 1.2 Local",
    ctr: "9.2% CTR",
    tags: ["London Boroughs", "Local Pack #1", "High Density", "Local SEO"],
    description:
      "High patient density and localized search traffic across target regional London boroughs with #1 Local Pack domination.",
    highlights: [
      { label: "Target Boroughs", value: "4 Regional Clinics" },
      { label: "Local Pack Rank", value: "#1 Local Pack" },
      { label: "Local Impressions", value: "840K Impr" },
      { label: "Patient Intent", value: "High Intent" },
    ],
  },
  {
    id: "harris-ga4-sessions",
    clientId: "harris",
    clientName: "Harris Pharmacy",
    categoryId: "ga4",
    title: "Harris Pharmacy • GA4 Patient Acquisition & Session Traffic",
    shortTitle: "Harris GA4 Sessions",
    badge: "Harris Pharmacy • GA4 Acquisition",
    image: "/Analytics/Harris/harrisga.jpeg",
    metricLabel: "Active Patients",
    metricValue: "64.2K Users",
    metricGrowth: "+185% Growth",
    impressions: "92K Sessions",
    avgPosition: "2m 45s Dwell",
    ctr: "4.8% CVR",
    tags: ["GA4 Live", "64.2K Patients", "Qualified Sessions", "Health Portal"],
    description:
      "GA4 user acquisition and qualified patient session analytics showing sustained monthly growth.",
    highlights: [
      { label: "Active Patients", value: "64.2K Users" },
      { label: "Total Sessions", value: "92,000 Sessions" },
      { label: "Avg Session Time", value: "2m 45s" },
      { label: "Form Conversion", value: "4.8% CVR" },
    ],
  },
  {
    id: "harris-ga4-channels",
    clientId: "harris",
    clientName: "Harris Pharmacy",
    categoryId: "ga4",
    title: "Harris Pharmacy • Multi-Channel Attribution & Organic Share",
    shortTitle: "Harris Channel ROAS",
    badge: "Harris Pharmacy • Channel Attribution",
    image: "/Analytics/Harris/harrisga2.jpeg",
    metricLabel: "Organic Share",
    metricValue: "58% Organic",
    metricGrowth: "+210% ROI",
    impressions: "5.1x Ad ROAS",
    avgPosition: "Direct + SEO",
    ctr: "5.1x ROAS",
    tags: ["Attribution", "58% Organic", "5.1x ROAS", "GA4 Channels"],
    description:
      "Organic search and direct healthcare portals delivering the dominant share of prescription revenue.",
    highlights: [
      { label: "Organic Share", value: "58.4% Share" },
      { label: "Campaign ROAS", value: "5.1x ROAS" },
      { label: "Direct Portal Lift", value: "+210% YoY" },
      { label: "Cost Per Patient", value: "-44% Lower" },
    ],
  },
  {
    id: "harris-ga4-events",
    clientId: "harris",
    clientName: "Harris Pharmacy",
    categoryId: "ga4",
    title: "Harris Pharmacy • Conversion Events & Call Tracking",
    shortTitle: "Harris Conversions",
    badge: "Harris Pharmacy • GA4 Conversions",
    image: "/Analytics/Harris/harrisga3.jpeg",
    metricLabel: "Tracked Calls",
    metricValue: "1,845 Calls",
    metricGrowth: "+190% Inquiries",
    impressions: "4.2K Forms",
    avgPosition: "High Intent",
    ctr: "12.4% CVR",
    tags: ["Conversion Events", "1,845 Phone Calls", "Form Transfers", "Event Tracking"],
    description:
      "Electronic prescription transfer submissions and emergency click-to-call conversions verified in GA4.",
    highlights: [
      { label: "Tracked Phone Calls", value: "1,845 Calls" },
      { label: "Prescription Forms", value: "4,200 Forms" },
      { label: "Call Growth", value: "+190% Lift" },
      { label: "Conversion Rate", value: "12.4% CVR" },
    ],
  },
  {
    id: "harris-ga4-trend",
    clientId: "harris",
    clientName: "Harris Pharmacy",
    categoryId: "ga4",
    title: "Harris Pharmacy • Multi-Month Growth & Retention Trajectory",
    shortTitle: "Harris Retention",
    badge: "Harris Pharmacy • Multi-Month Trend",
    image: "/Analytics/Harris/harrisga4.jpeg",
    metricLabel: "User Baseline",
    metricValue: "Steady Baseline",
    metricGrowth: "Zero Ad Decay",
    impressions: "4 Quarters",
    avgPosition: "Sustained",
    ctr: "Consistent",
    tags: ["Quarterly Trend", "Sustained Baseline", "Patient Retention", "GA4 Growth"],
    description:
      "Baseline monthly users sustained across multiple quarters without reliance on ad spend spikes.",
    highlights: [
      { label: "Growth Duration", value: "4 Quarters" },
      { label: "Baseline Lift", value: "+185% Retained" },
      { label: "Ad Spend Decay", value: "0% Drop" },
      { label: "Patient Loyalty", value: "High Retention" },
    ],
  },
  {
    id: "harris-gmb-local",
    clientId: "harris",
    clientName: "Harris Pharmacy",
    categoryId: "gmb",
    title: "Harris Pharmacy • Google My Business Profile & 3-Pack Rank",
    shortTitle: "Harris GMB Profile",
    badge: "Harris Pharmacy • Local 3-Pack",
    image: "/images/gsc-2-local-seo.jpg",
    metricLabel: "Local Interactions",
    metricValue: "86.4K Actions",
    metricGrowth: "+190% Calls",
    impressions: "1.18M Local Views",
    avgPosition: "#1 Local 3-Pack",
    ctr: "7.3% CTR",
    tags: ["Google 3-Pack", "18 Keywords", "Maps Direction", "Local SEO"],
    description:
      "Google Business Profile rankings in top 3 Local Pack for 18 primary keywords across regional branches.",
    highlights: [
      { label: "Local Pack Rank", value: "#1 Top Position" },
      { label: "Keywords Ranked", value: "18 Primary Terms" },
      { label: "Direction Requests", value: "10.9K Directions" },
      { label: "Local CVR", value: "7.3% CTR" },
    ],
  },

  // ==========================================
  // --- MAIA HEALTH & BEAUTY (public/Analytics/Maia) ---
  // ==========================================
  {
    id: "maia-gsc-impressions",
    clientId: "maia",
    clientName: "Maia Health & Beauty",
    categoryId: "gsc",
    title: "Maia Health & Beauty • Google Search Console Growth (48K Visits)",
    shortTitle: "Maia GSC Scale",
    badge: "Maia Health • GSC Impressions",
    image: "/Analytics/Maia/maiagsc.jpeg",
    metricLabel: "Monthly Visits",
    metricValue: "48K Visits",
    metricGrowth: "+320% Traffic",
    impressions: "2.8M Impr",
    avgPosition: "Pos 3.2 Avg",
    ctr: "6.2% CTR",
    tags: ["Skincare Authority", "+320% Traffic", "Core Web Vitals", "GSC Live"],
    description:
      "Search impression explosion following Core Web Vitals overhaul, URL canonicalization, and technical audit.",
    highlights: [
      { label: "Monthly Organic Visits", value: "From 1.8k to 48k" },
      { label: "Search Impressions", value: "2.80 Million" },
      { label: "Traffic Growth", value: "+320% YoY" },
      { label: "Average CTR", value: "6.2% CTR" },
    ],
  },
  {
    id: "maia-gsc-position",
    clientId: "maia",
    clientName: "Maia Health & Beauty",
    categoryId: "gsc",
    title: "Maia Health • Average Ranking Position Climbing Top 3",
    shortTitle: "Maia Rank Climbing",
    badge: "Maia Health • Ranking Velocity",
    image: "/Analytics/Maia/maiagsc2.jpeg",
    metricLabel: "Average Position",
    metricValue: "Pos #2.8",
    metricGrowth: "Top 3 Tier",
    impressions: "1.9M Impr",
    avgPosition: "#2.8 Pos",
    ctr: "7.1% CTR",
    tags: ["SERP Ranks", "Top 3 Tier", "Dermatology", "Medical E-E-A-T"],
    description:
      "Average position climbed from #24 to top 3 tier for competitive health and aesthetic beauty queries.",
    highlights: [
      { label: "Average Position", value: "Pos #2.8" },
      { label: "Previous Benchmark", value: "Pos #24.2" },
      { label: "SERP Impressions", value: "1.90 Million" },
      { label: "Click Rate", value: "7.1% CTR" },
    ],
  },
  {
    id: "maia-gsc-queries",
    clientId: "maia",
    clientName: "Maia Health & Beauty",
    categoryId: "keywords",
    title: "Maia Health • High-Volume Skincare Keyword Rankings",
    shortTitle: "Maia Query Matrix",
    badge: "Maia Health • SERP Positions",
    image: "/Analytics/Maia/maiagsc3.jpeg",
    metricLabel: "Top Keywords",
    metricValue: "140+ Keywords",
    metricGrowth: "Top 3 Ranked",
    impressions: "1.4M Impr",
    avgPosition: "Pos 1-3",
    ctr: "9.2% CTR",
    tags: ["140+ Top Keywords", "Page 1 SERP", "High CVR", "Skincare SEO"],
    description:
      "Capturing high-commercial-intent skincare and aesthetic beauty search queries with rich snippet snippets.",
    highlights: [
      { label: "Top 3 Keywords", value: "140+ Keywords" },
      { label: "SERP Bracket", value: "Positions 1-3" },
      { label: "Keyword Impressions", value: "1.40 Million" },
      { label: "Commercial Intent", value: "Page 1 Ranked" },
    ],
  },
  {
    id: "maia-gsc-pages",
    clientId: "maia",
    clientName: "Maia Health & Beauty",
    categoryId: "gsc",
    title: "Maia Health • Product & Category Landing Pages Dominance",
    shortTitle: "Maia Category SEO",
    badge: "Maia Health • Category Indexing",
    image: "/Analytics/Maia/maiagsc4.jpeg",
    metricLabel: "Resolved Errors",
    metricValue: "450+ Fixed",
    metricGrowth: "+240% Indexing",
    impressions: "2.1M Impr",
    avgPosition: "Pos 3.4",
    ctr: "6.8% CTR",
    tags: ["Zero Crawl Errors", "Category SEO", "Product Schema", "Indexed Pages"],
    description:
      "Technical crawl refactor resolving 450+ crawl errors and accelerating category indexation nationwide.",
    highlights: [
      { label: "Crawl Errors Resolved", value: "450+ Fixed" },
      { label: "Sub-1.2s LCP", value: "Core Web Vitals Pass" },
      { label: "Landing Impressions", value: "2.10 Million" },
      { label: "Conversion Lift", value: "+48% Lift" },
    ],
  },
  {
    id: "maia-ga4-ecommerce",
    clientId: "maia",
    clientName: "Maia Health & Beauty",
    categoryId: "ga4",
    title: "Maia Health • GA4 Active Shoppers & E-Commerce Scale",
    shortTitle: "Maia GA4 Buyers",
    badge: "Maia Health • GA4 E-Commerce",
    image: "/Analytics/Maia/maiaga.jpeg",
    metricLabel: "Conversion Rate",
    metricValue: "4.6% CVR",
    metricGrowth: "+115% Revenue",
    impressions: "48K Users",
    avgPosition: "$145 AOV",
    ctr: "-42% CAC",
    tags: ["4.6% Conversion", "+115% Revenue", "-42% CAC", "GA4 E-commerce"],
    description:
      "Accelerated growth in unique monthly buyers and consultation checkout sessions lifting conversion rate to 4.6%.",
    highlights: [
      { label: "Conversion Rate", value: "4.6% (up from 1.9%)" },
      { label: "Customer CAC", value: "-42% Drop" },
      { label: "Monthly Buyers", value: "48K Users" },
      { label: "Average Order Value", value: "$145 AOV" },
    ],
  },
  {
    id: "maia-ga4-sources",
    clientId: "maia",
    clientName: "Maia Health & Beauty",
    categoryId: "ga4",
    title: "Maia Health • GA4 Acquisition Channels & Revenue Share",
    shortTitle: "Maia Revenue Sources",
    badge: "Maia Health • Channel Share",
    image: "/Analytics/Maia/maiaga2.jpeg",
    metricLabel: "Attributed Revenue",
    metricValue: "+240% Revenue",
    metricGrowth: "Organic Dominant",
    impressions: "18.4K Orders",
    avgPosition: "High ROAS",
    ctr: "52% Share",
    tags: ["Revenue Share", "18.4K Orders", "+240% Lift", "Attribution Model"],
    description:
      "Organic search outpacing paid channels with higher ROAS, lower bounce rates, and sustainable repeat orders.",
    highlights: [
      { label: "Organic Revenue Share", value: "52.4% Share" },
      { label: "Completed Orders", value: "18,400 Orders" },
      { label: "Revenue Lift", value: "+240% YoY" },
      { label: "Paid Ad Savings", value: "$32K/mo Saved" },
    ],
  },
  {
    id: "maia-gmb-profile",
    clientId: "maia",
    clientName: "Maia Health & Beauty",
    categoryId: "gmb",
    title: "Maia Health • Clinic Business Profile Discovery & Consultations",
    shortTitle: "Maia Clinic Profile",
    badge: "Maia Health • Clinic GMB",
    image: "/images/gmb-profile-live.jpg",
    metricLabel: "Consultations",
    metricValue: "62.1K Views",
    metricGrowth: "+148% Calls",
    impressions: "86.4K Actions",
    avgPosition: "4.9 ★ Rating",
    ctr: "10.9K Directions",
    tags: ["Aesthetic Clinic", "Consultations", "Google Maps", "Local Trust"],
    description:
      "Direct clinic consultations and direction requests from clients across central UK regional boroughs.",
    highlights: [
      { label: "Profile Views", value: "62,100 Views" },
      { label: "Clinic Bookings", value: "+148% Consultations" },
      { label: "Rating & Reviews", value: "4.9 ★ (240+ Reviews)" },
      { label: "Direction Requests", value: "10.9K Directions" },
    ],
  },

  // ==========================================
  // --- DRTUNG'S UK (public/Analytics/Drtungs) ---
  // ==========================================
  {
    id: "drtungs-ga4-revenue",
    clientId: "drtungs",
    clientName: "drTung's UK",
    categoryId: "ga4",
    title: "drTung's UK • GA4 E-Commerce Revenue & Checkout Scale",
    shortTitle: "drTung's Revenue",
    badge: "drTung's UK • GA4 Transactions",
    image: "/Analytics/Drtungs/drtungsga.jpeg",
    metricLabel: "eCommerce Revenue",
    metricValue: "+240% Revenue",
    metricGrowth: "+78% Orders",
    impressions: "12.8K Orders",
    avgPosition: "3.8% CVR",
    ctr: "+180% Clicks",
    tags: ["+240% Revenue", "+78% Orders", "Shopify Plus", "GA4 Live"],
    description:
      "Significant upward trajectory in revenue from organic search visitors scaling direct-to-consumer transactions.",
    highlights: [
      { label: "eCommerce Revenue", value: "+240% Growth" },
      { label: "Direct Orders", value: "+78% Orders" },
      { label: "Total Transactions", value: "12,800 Orders" },
      { label: "Organic Clicks", value: "+180% Lift" },
    ],
  },
  {
    id: "drtungs-ga4-engagement",
    clientId: "drtungs",
    clientName: "drTung's UK",
    categoryId: "ga4",
    title: "drTung's UK • Dwell Time & Educational Hub Engagement",
    shortTitle: "drTung's Engagement",
    badge: "drTung's UK • Dwell Time",
    image: "/Analytics/Drtungs/drtungsga2.jpeg",
    metricLabel: "Dwell Time",
    metricValue: "3m 12s Dwell",
    metricGrowth: "+85% Duration",
    impressions: "15 Guides",
    avgPosition: "Page 1 SERP",
    ctr: "42 Snippets",
    tags: ["15 Authority Guides", "3m 12s Dwell", "Content Hub", "FAQ Schemas"],
    description:
      "Longer on-site dwell times driven by 15 authoritative natural oral care guides ranking on Page 1 of Google UK.",
    highlights: [
      { label: "Avg Engagement Time", value: "3m 12s (+85%)" },
      { label: "Authority Guides", value: "15 Page 1 Guides" },
      { label: "Featured Snippets", value: "42 Captured" },
      { label: "Repeat Buyers", value: "+45% Lift" },
    ],
  },
  {
    id: "drtungs-ga4-acquisition",
    clientId: "drtungs",
    clientName: "drTung's UK",
    categoryId: "ga4",
    title: "drTung's UK • Acquisition Breakdown & Channel ROAS",
    shortTitle: "drTung's Channels",
    badge: "drTung's UK • Channel ROAS",
    image: "/Analytics/Drtungs/drtungsga3.jpeg",
    metricLabel: "Organic Revenue",
    metricValue: "62% Organic",
    metricGrowth: "Top ROI",
    impressions: "142K Sessions",
    avgPosition: "Sub-1.2s LCP",
    ctr: "Low Bounce",
    tags: ["Channel ROAS", "62% Organic", "Klaviyo Flows", "Acquisition"],
    description:
      "Organic search established as the most cost-efficient revenue generator alongside automated loyalty flows.",
    highlights: [
      { label: "Organic Contribution", value: "62.0% Share" },
      { label: "Organic Sessions", value: "142,000" },
      { label: "Acquisition Cost", value: "Lowest Channel" },
      { label: "Bounce Reduction", value: "-28% Drop" },
    ],
  },
  {
    id: "drtungs-ga4-geo",
    clientId: "drtungs",
    clientName: "drTung's UK",
    categoryId: "gsc",
    title: "drTung's UK • UK National Geographic Market Penetration",
    shortTitle: "drTung's UK Market",
    badge: "drTung's UK • National Reach",
    image: "/Analytics/Drtungs/drtungsgeograph.jpeg",
    metricLabel: "UK Reach",
    metricValue: "UK Wide",
    metricGrowth: "+160% Impr",
    impressions: "1.8M Impr",
    avgPosition: "National SERP",
    ctr: "5.6% CTR",
    tags: ["UK Market", "London & Manchester", "National Growth", "eCommerce SEO"],
    description:
      "Broad national buyer distribution across major UK metropolitan regions competing against legacy pharma brands.",
    highlights: [
      { label: "National Reach", value: "Entire UK Covered" },
      { label: "Search Impressions", value: "1.80 Million" },
      { label: "Impression Growth", value: "+160% YoY" },
      { label: "Subscriber Lift", value: "+45% Email List" },
    ],
  },
  {
    id: "drtungs-ga4-funnel",
    clientId: "drtungs",
    clientName: "drTung's UK",
    categoryId: "keywords",
    title: "drTung's UK • Checkout Velocity & Conversion Rate Chart",
    shortTitle: "drTung's Conversion",
    badge: "drTung's UK • Checkout Velocity",
    image: "/Analytics/Drtungs/drtungsgraph2.jpeg",
    metricLabel: "Checkout CVR",
    metricValue: "3.8% CVR",
    metricGrowth: "+64% Velocity",
    impressions: "Shopify Plus",
    avgPosition: "Mobile Fast",
    ctr: "Rich Snippets",
    tags: ["Conversion Velocity", "3.8% CVR", "Faceted Search", "Checkout CRO"],
    description:
      "Optimized mobile funnel and faceted search filters resulting in steady upward trajectory in completed orders.",
    highlights: [
      { label: "Checkout Conversion", value: "3.8% CVR" },
      { label: "Cart Abandonment", value: "-34% Dropped" },
      { label: "Checkout Speed", value: "1-Click Accelerated" },
      { label: "DTC Orders", value: "+78% Scaling" },
    ],
  },
  {
    id: "drtungs-gmb-brand",
    clientId: "drtungs",
    clientName: "drTung's UK",
    categoryId: "gmb",
    title: "drTung's UK • Brand Discovery & Stockist Locator Views",
    shortTitle: "drTung's Stockists",
    badge: "drTung's UK • Brand Locations",
    image: "/images/gsc-1-ecommerce.jpg",
    metricLabel: "Stockist Views",
    metricValue: "148.7K Views",
    metricGrowth: "+240% Lift",
    impressions: "2.43M Impr",
    avgPosition: "Brand SERP",
    ctr: "6.1% CTR",
    tags: ["Stockists", "UK Retailers", "Brand Presence", "Organic Scale"],
    description:
      "Customer searches for natural oral hygiene products and regional stockist locators across UK department stores.",
    highlights: [
      { label: "Brand Searches", value: "148.7K Clicks" },
      { label: "Stockist Inquiries", value: "2.43 Million" },
      { label: "Growth YoY", value: "+240.5% Lift" },
      { label: "Click-Through", value: "6.1% CTR" },
    ],
  },

  // ==========================================
  // --- ARTIST'S BRUSH (public/Analytics/Aristbrush) ---
  // ==========================================
  {
    id: "artist-ga4-live",
    clientId: "artistbrush",
    clientName: "Artist's Brush",
    categoryId: "ga4",
    title: "Artist's Brush • GA4 Live Analytics & Collector Engagement",
    shortTitle: "Artist's GA4 Live",
    badge: "Artist's Brush • Live GA4",
    image: "/Analytics/Aristbrush/ga4-analytics-live.jpg",
    metricLabel: "Bookings",
    metricValue: "4.2x Inquiries",
    metricGrowth: "+95% Session",
    impressions: "48K Visitors",
    avgPosition: "0.8s LCP",
    ctr: "-35% Bounce",
    tags: ["Next.js Fast", "4.2x Inquiries", "99/100 PageSpeed", "Live GA4"],
    description:
      "Real-time user sessions and artwork portfolio engagement tracking following Next.js headless rebuild.",
    highlights: [
      { label: "Commercial Inquiries", value: "4.2x Bookings" },
      { label: "Mobile LCP Speed", value: "0.8s (99/100 Score)" },
      { label: "Session Duration", value: "+95% Immersion" },
      { label: "Bounce Rate", value: "-35% Drop" },
    ],
  },
  {
    id: "artist-gmb-profile",
    clientId: "artistbrush",
    clientName: "Artist's Brush",
    categoryId: "gmb",
    title: "Artist's Brush • Google Business Profile Discovery & Calls",
    shortTitle: "Artist's GMB Profile",
    badge: "Artist's Brush • Studio GMB",
    image: "/Analytics/Aristbrush/gmb-profile-live.jpg",
    metricLabel: "Studio Actions",
    metricValue: "86.4K Actions",
    metricGrowth: "+190% Calls",
    impressions: "62.1K Views",
    avgPosition: "4.9 ★ Rating",
    ctr: "10.9K Directions",
    tags: ["86.4K Actions", "1,845 Calls", "10.9K Directions", "Google Maps"],
    description:
      "Direct studio phone inquiries and map direction requests from collectors and commercial gallery clients.",
    highlights: [
      { label: "Profile Interactions", value: "86,400 Total" },
      { label: "Commercial Calls", value: "1,845 (+190%)" },
      { label: "Studio Directions", value: "10,912 Requests" },
      { label: "Google Rating", value: "4.9 ★ Verified" },
    ],
  },
  {
    id: "artist-gsc-authority",
    clientId: "artistbrush",
    clientName: "Artist's Brush",
    categoryId: "gsc",
    title: "Artist's Brush • GSC Authority & Art Commission Search Growth",
    shortTitle: "Artist's GSC Search",
    badge: "Artist's Brush • GSC Authority",
    image: "/Analytics/Aristbrush/gsc-3-authority.jpg",
    metricLabel: "Search Clicks",
    metricValue: "112K Clicks",
    metricGrowth: "+320% SEO",
    impressions: "1.92M Impr",
    avgPosition: "Pos #2.4",
    ctr: "5.8% CTR",
    tags: ["Commercial Art", "112K Clicks", "Page 1 SERP", "High Intent"],
    description:
      "Top-ranking keywords for commercial art commissions, exhibition bookings, and creative studio services.",
    highlights: [
      { label: "Organic Search Clicks", value: "112,000 Clicks" },
      { label: "SERP Impressions", value: "1.92 Million" },
      { label: "Average Position", value: "Pos #2.4" },
      { label: "Commercial Lift", value: "4.2x Bookings" },
    ],
  },
  {
    id: "artist-ga4-revenue",
    clientId: "artistbrush",
    clientName: "Artist's Brush",
    categoryId: "keywords",
    title: "Artist's Brush • Commission Revenue Attribution Model",
    shortTitle: "Artist's Attribution",
    badge: "Artist's Brush • Attribution",
    image: "/Analytics/Aristbrush/gsc-5-ga4-revenue.jpg",
    metricLabel: "Pipeline Value",
    metricValue: "$2.1M Pipeline",
    metricGrowth: "+240% ROI",
    impressions: "14.2K Actions",
    avgPosition: "High Value",
    ctr: "Commercial",
    tags: ["Commission Value", "$2.1M Pipeline", "High Intent", "GA4 Model"],
    description:
      "Direct commission values generated through organic search funnel and automated calendar inquiry booking.",
    highlights: [
      { label: "Attributed Value", value: "$2.1M Pipeline" },
      { label: "Commercial Actions", value: "14,200 Inquiries" },
      { label: "Organic Revenue Share", value: "48.4% Share" },
      { label: "Conversion Lift", value: "+240% YoY" },
    ],
  },
];

/* ============================================================
   MAIN COMPONENT: CATEGORY & CLIENT PROOF SHOWCASE
============================================================ */

export default function Gsc() {
  const [selectedClient, setSelectedClient] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("gsc");
  const [slideIndex, setSlideIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Filter slides by client and category
  const activeSlides = useMemo(() => {
    // 1. Filter by client
    const clientFiltered = ALL_PROOFS.filter((item) =>
      selectedClient === "all" ? true : item.clientId === selectedClient
    );

    // 2. Filter by category
    const categoryAndClientFiltered = clientFiltered.filter(
      (item) => item.categoryId === selectedCategory
    );

    // If current category has slides for this client, use them
    if (categoryAndClientFiltered.length > 0) {
      return categoryAndClientFiltered;
    }

    // Fallback: If this client doesn't have slides in current category, show all slides for this client
    return clientFiltered;
  }, [selectedClient, selectedCategory]);

  const totalCategorySlides = activeSlides.length;

  // Ensure slideIndex stays within bounds
  const currentSlideIndex = Math.min(slideIndex, Math.max(0, totalCategorySlides - 1));
  const currentSlide = activeSlides[currentSlideIndex] || ALL_PROOFS[0];

  const handleSelectClient = (clientId: string) => {
    setSelectedClient(clientId);
    setSlideIndex(0);

    // If the selected client has slides in current category, keep it; otherwise switch to first category
    if (clientId !== "all") {
      const clientSlides = ALL_PROOFS.filter((item) => item.clientId === clientId);
      const hasCurrentCat = clientSlides.some((item) => item.categoryId === selectedCategory);
      if (!hasCurrentCat && clientSlides.length > 0) {
        setSelectedCategory(clientSlides[0].categoryId);
      }
    }
  };

  const handleSelectCategory = (catId: CategoryId) => {
    setSelectedCategory(catId);
    setSlideIndex(0);
  };

  const nextSlide = useCallback(() => {
    if (totalCategorySlides <= 1) return;
    setSlideIndex((prev) => (prev + 1) % totalCategorySlides);
  }, [totalCategorySlides]);

  const prevSlide = useCallback(() => {
    if (totalCategorySlides <= 1) return;
    setSlideIndex((prev) => (prev - 1 + totalCategorySlides) % totalCategorySlides);
  }, [totalCategorySlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "Escape") setIsLightboxOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Auto-play interval for slides within category
  useEffect(() => {
    if (!isAutoPlaying || isHovered || totalCategorySlides <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, nextSlide, totalCategorySlides]);

  // Helper to calculate cyclic signed distance for 3D carousel
  const getOffset = (index: number) => {
    let diff = index - currentSlideIndex;
    if (diff > totalCategorySlides / 2) diff -= totalCategorySlides;
    if (diff < -totalCategorySlides / 2) diff += totalCategorySlides;
    return diff;
  };

  const activeCategoryMeta = CATEGORIES.find((c) => c.id === selectedCategory)!;
  const activeClientMeta = CLIENTS.find((c) => c.id === selectedClient)!;

  return (
    <section
      id="analytics"
      className="relative py-16 sm:py-24 bg-white dark:bg-[#080706] text-stone-900 dark:text-white transition-colors duration-500 overflow-hidden"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] rounded-full bg-[#EA580C]/[0.08] dark:bg-[#EA580C]/[0.15] blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ====================================================
            HEADER WITH VERIFICATION TAG
        ==================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#EA580C]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-[#EA580C] dark:text-orange-400">
                Analytics Progress
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-stone-900 dark:text-white leading-[1.12]">
              Category and {" "}
              <span className="text-[#EA580C]">
                Search &amp; Analytics Proof
              </span>
            </h2>
          </div>
        </div>

        {/* ====================================================
            UNIFIED CONTROLS BAR:
            - Left: Primary Category Tabs (Search Console, GA4, GMB, Keywords)
            - Right: Client Selector (Selected Option Dropdown Way)
        ==================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3.5 mb-6 sm:mb-8 pb-3 border-b border-stone-200/90 dark:border-white/15">
          {/* Left Side: Primary Category Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 overflow-x-auto no-scrollbar py-1">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isCatActive = selectedCategory === cat.id;

              return (
                <motion.button
                  key={cat.id}
                  type="button"
                  onClick={() => handleSelectCategory(cat.id)}
                  whileTap={{ scale: 0.96 }}
                  className={`whitespace-nowrap inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer border select-none ${isCatActive
                    ? "bg-[#EA580C] text-white border-[#EA580C] shadow-lg shadow-orange-500/40"
                    : "bg-stone-100/90 dark:bg-white/10 text-stone-700 dark:text-stone-200 border-stone-200/90 dark:border-white/20 hover:bg-stone-200/80 dark:hover:bg-white/20 hover:border-orange-400 hover:text-stone-950 dark:hover:text-white"
                    }`}
                >
                  <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isCatActive ? "text-white" : "text-[#EA580C] dark:text-orange-400"}`} />
                  <span>{cat.shortName}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Right Side: Client Filter (Selected Option Way) */}
          <div className="flex items-center gap-2.5 self-start lg:self-center shrink-0">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-orange-200 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#EA580C] dark:text-orange-400" />
              Client:
            </span>

            <div className="relative">
              <select
                value={selectedClient}
                onChange={(e) => handleSelectClient(e.target.value)}
                className="appearance-none pl-3.5 pr-8 py-2 rounded-xl bg-white dark:bg-[#151413] border-2 border-stone-200 dark:border-white/20 hover:border-orange-400 focus:border-orange-400 text-stone-900 dark:text-white text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer outline-none"
              >
                {CLIENTS.map((client) => (
                  <option
                    key={client.id}
                    value={client.id}
                    className="bg-white dark:bg-[#1a1918] text-stone-900 dark:text-white py-1.5"
                  >
                    {client.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-stone-500 dark:text-orange-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Proofs Count Badge */}
            <span className="px-2.5 py-1 rounded-lg bg-orange-50 dark:bg-white/10 text-orange-700 dark:text-orange-300 text-[11px] font-bold border border-orange-200/80 dark:border-white/20 whitespace-nowrap">
              {totalCategorySlides} Proof{totalCategorySlides === 1 ? "" : "s"}
            </span>
          </div>
        </div>

        {/* ====================================================
            SHOWCASE STAGE (DISPLAYS ONLY SELECTED CATEGORY & CLIENT IMAGES)
        ==================================================== */}
        <div
          className="relative w-full h-[260px] sm:h-[340px] md:h-[400px] lg:h-[430px] flex items-center justify-center overflow-hidden rounded-3xl select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ perspective: "1000px" }}
        >
          {activeSlides.map((slide, index) => {
            const offset = getOffset(index);
            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 1 || totalCategorySlides <= 2;

            if (!isVisible && Math.abs(offset) > 1) {
              return null;
            }

            return (
              <motion.div
                key={slide.id}
                onClick={() => {
                  if (isCenter) {
                    setIsLightboxOpen(true);
                  } else {
                    setSlideIndex(index);
                  }
                }}
                initial={false}
                animate={{
                  x: totalCategorySlides > 1 ? `${offset * 68}%` : "0%",
                  scale: isCenter ? 1 : 0.84,
                  opacity: isCenter ? 1 : 0.45,
                  rotateY: totalCategorySlides > 1 ? offset * -14 : 0,
                  zIndex: isCenter ? 20 : 10,
                  filter: isCenter ? "blur(0px)" : "blur(1.5px)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 26,
                }}
                className={`absolute w-[88%] sm:w-[74%] md:w-[68%] aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer ${isCenter
                  ? "border-2 border-[#EA580C] shadow-[0_12px_45px_rgba(234,88,12,0.30)] ring-1 ring-orange-500/40"
                  : "border border-stone-300 dark:border-stone-800 shadow-lg hover:opacity-75"
                  } bg-stone-950`}
              >
                {/* Image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  loading="lazy"
                  className="object-contain transition-transform duration-500 hover:scale-[1.02]"
                  sizes="(max-width: 768px) 90vw, 65vw"
                />

                {/* Subtle vignette on active slide */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

                {/* Active Slide Floating Overlay Header */}
                {isCenter && (
                  <div className="absolute top-2.5 sm:top-3.5 left-2.5 sm:left-3.5 right-2.5 sm:right-3.5 flex items-center justify-between pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 border border-white/20 text-white text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {slide.badge}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsLightboxOpen(true);
                      }}
                      className="p-1.5 rounded-xl bg-black/75 hover:bg-[#EA580C] border border-white/20 text-white transition-colors pointer-events-auto cursor-pointer"
                      title="Zoom Image"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}


              </motion.div>
            );
          })}

          {/* Floating On-Image Side Click Arrows (Only when category has multiple images) */}
          {totalCategorySlides > 1 && (
            <>
              <motion.button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                aria-label="Previous Slide in Category"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-1 sm:left-4 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/90 dark:bg-black/75 hover:bg-[#EA580C] text-stone-800 dark:text-white hover:text-white border border-stone-200 dark:border-white/30 hover:border-orange-400 backdrop-blur-md shadow-xl flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </motion.button>

              <motion.button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                aria-label="Next Slide in Category"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-1 sm:right-4 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/90 dark:bg-black/75 hover:bg-[#EA580C] text-stone-800 dark:text-white hover:text-white border border-stone-200 dark:border-white/30 hover:border-orange-400 backdrop-blur-md shadow-xl flex items-center justify-center transition-all duration-200 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </motion.button>
            </>
          )}
        </div>

        {/* ====================================================
            ACTIVE PROOF SUMMARY DETAIL CARD
        ==================================================== */}
        <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-[#120F0D]/90 border border-stone-200/80 dark:border-white/10 shadow-sm backdrop-blur-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-[#EA580C] uppercase tracking-wider">
                  {currentSlide.clientName} • {activeCategoryMeta.name} • Verified Proof
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-stone-900 dark:text-white">
                {currentSlide.title}
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
                {currentSlide.description}
              </p>
            </div>

            {/* 4 Quick Stat Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 lg:gap-3 shrink-0">
              {currentSlide.highlights.map((item, hIdx) => (
                <div
                  key={hIdx}
                  className="p-2.5 rounded-xl bg-stone-50 dark:bg-[#171310] border border-stone-200/60 dark:border-white/5"
                >
                  <div className="text-[10px] text-stone-500 dark:text-stone-400 font-medium">
                    {item.label}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white mt-0.5">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================
          FULLSCREEN LIGHTBOX MODAL
      ==================================================== */}
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
              {/* Close Button */}
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
                title="Close Lightbox (Esc)"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Lightbox Image */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black">
                <Image
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              {/* Lightbox Footer Bar */}
              <div className="w-full mt-3 flex items-center justify-between text-white text-xs sm:text-sm">
                <div>
                  <span className="font-bold">{currentSlide.title}</span>

                </div>
                {totalCategorySlides > 1 && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevSlide}
                      className="p-2 rounded-xl bg-white/10 hover:bg-[#EA580C] transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-2 rounded-xl bg-white/10 hover:bg-[#EA580C] transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

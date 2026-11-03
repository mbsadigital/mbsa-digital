"use client";

import React from "react";

interface ServiceRealIconProps {
  slug: string;
  className?: string;
  size?: number;
}

export default function ServiceRealIcon({
  slug,
  className = "w-6 h-6",
  size = 24,
}: ServiceRealIconProps) {
  switch (slug) {
    // 01. SEO Services (Google 4-Color Search Lens)
    case "seo-services":
    case "technical-seo":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10.5" cy="10.5" r="7" stroke="#4285F4" strokeWidth="2.5" />
          <path d="M10.5 3.5 A7 7 0 0 1 17.5 10.5" stroke="#EA4335" strokeWidth="2.5" />
          <path d="M17.5 10.5 A7 7 0 0 1 10.5 17.5" stroke="#FBBC05" strokeWidth="2.5" />
          <path d="M10.5 17.5 A7 7 0 0 1 3.5 10.5" stroke="#34A853" strokeWidth="2.5" />
          <path
            d="M15.5 15.5 L20.5 20.5"
            stroke="#4285F4"
            strokeWidth="2.75"
            strokeLinecap="round"
          />
          <path
            d="M7.5 11.5 L9.5 9.5 L11 11 L13.5 8"
            stroke="#2563EB"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8 H13.5 V9.5"
            stroke="#2563EB"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    // 02. SEO Audit (Diagnostic Scan Shield)
    case "seo-audit":
    case "audit":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2 L20 5.5 V11 C20 16.5 16.5 21 12 22 C7.5 21 4 16.5 4 11 V5.5 L12 2 Z"
            fill="url(#audit-shield-grad)"
          />
          <path
            d="M12 4 L18 6.8 V11 C18 15.2 15.5 18.8 12 19.8 C8.5 18.8 6 15.2 6 11 V6.8 L12 4 Z"
            fill="#0F172A"
            opacity="0.25"
          />
          <path
            d="M8.5 11.5 L11 14 L16 8.5"
            stroke="#22D3EE"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="audit-shield-grad" x1="4" y1="2" x2="20" y2="22">
              <stop stopColor="#6366F1" />
              <stop offset="1" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      );

    // 03. Local SEO (Official Google Maps Pin)
    case "local-seo":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2 C7.8 2 4.5 5.3 4.5 9.5 C4.5 14.8 12 22 12 22 C12 22 19.5 14.8 19.5 9.5 C19.5 5.3 16.2 2 12 2 Z"
            fill="#EA4335"
          />
          <path
            d="M12 2 C16.2 2 19.5 5.3 19.5 9.5 C19.5 14.8 12 22 12 22 V9.5 H4.5 C4.5 5.3 7.8 2 12 2 Z"
            fill="#FBBC04"
            opacity="0.35"
          />
          <circle cx="12" cy="9.5" r="3.2" fill="#FFFFFF" />
          <circle cx="12" cy="9.5" r="1.5" fill="#4285F4" />
        </svg>
      );

    // 04. E-commerce SEO (Shopify / Retail Growth)
    case "ecommerce-seo":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="6" width="18" height="15" rx="3" fill="#10B981" opacity="0.9" />
          <path
            d="M8 6 V4 A4 4 0 0 1 16 4 V6"
            stroke="#059669"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M7 14 L10 11 L12.5 13.5 L17 9"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 9 H17 V11.5"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    // 05. International SEO (World Meridian Globe)
    case "international-seo":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="9.5" fill="#0284C7" />
          <ellipse cx="12" cy="12" rx="4.5" ry="9.5" stroke="#FFFFFF" strokeWidth="1.4" opacity="0.8" />
          <path d="M2.5 12 H21.5" stroke="#FFFFFF" strokeWidth="1.4" opacity="0.8" />
          <path d="M4.5 7 H19.5" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.6" />
          <path d="M4.5 17 H19.5" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.6" />
          <circle cx="17.5" cy="7" r="1.8" fill="#F59E0B" />
          <circle cx="6.5" cy="17" r="1.8" fill="#10B981" />
        </svg>
      );

    // 06. Link Building & Digital PR (Authority Chains)
    case "link-building-digital-pr":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="7"
            width="9"
            height="10"
            rx="4.5"
            stroke="url(#link-purple-grad)"
            strokeWidth="2.2"
          />
          <rect
            x="12"
            y="7"
            width="9"
            height="10"
            rx="4.5"
            stroke="url(#link-blue-grad)"
            strokeWidth="2.2"
          />
          <circle cx="12" cy="12" r="1.5" fill="#3B82F6" />
          <defs>
            <linearGradient id="link-purple-grad" x1="3" y1="7" x2="12" y2="17">
              <stop stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#EC4899" />
            </linearGradient>
            <linearGradient id="link-blue-grad" x1="12" y1="7" x2="21" y2="17">
              <stop stopColor="#2563EB" />
              <stop offset="1" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      );

    // 07. AEO & GEO (AI Search / Sparkles Engine)
    case "aeo-geo-ai-search":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2 C12 6.5 15.5 10 20 10 C15.5 10 12 13.5 12 18 C12 13.5 8.5 10 4 10 C8.5 10 12 6.5 12 2 Z"
            fill="url(#aeo-ai-sparkle)"
          />
          <path
            d="M18.5 15 C18.5 17 19.5 18.5 21.5 18.5 C19.5 18.5 18.5 20 18.5 22 C18.5 20 17.5 18.5 15.5 18.5 C17.5 18.5 18.5 17 18.5 15 Z"
            fill="#06B6D4"
          />
          <path
            d="M5.5 2 C5.5 3.5 6.5 4.5 8 4.5 C6.5 4.5 5.5 5.5 5.5 7 C5.5 5.5 4.5 4.5 3 4.5 C4.5 4.5 5.5 3.5 5.5 2 Z"
            fill="#F59E0B"
          />
          <defs>
            <linearGradient id="aeo-ai-sparkle" x1="4" y1="2" x2="20" y2="18">
              <stop stopColor="#06B6D4" />
              <stop offset="0.5" stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
      );

    // 08. Google Ads Management (Official Google Ads 3-Color Geometry)
    case "google-ads-management":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 15.8 L10.5 4.8 C11.2 3.5 12.8 3 14.1 3.7 C15.4 4.4 15.9 6 15.2 7.3 L9.2 18.3 C8.5 19.6 6.9 20.1 5.6 19.4 C4.3 18.7 3.8 17.1 4.5 15.8 Z"
            fill="#FBBC04"
          />
          <path
            d="M19.5 15.8 L13.5 4.8 C12.8 3.5 11.2 3 9.9 3.7 C8.6 4.4 8.1 6 8.8 7.3 L14.8 18.3 C15.5 19.6 17.1 20.1 18.4 19.4 C19.7 18.7 20.2 17.1 19.5 15.8 Z"
            fill="#4285F4"
          />
          <circle cx="6.5" cy="17.5" r="3.2" fill="#34A853" />
        </svg>
      );

    // 09. Meta Ads (Official Meta Gradient Infinity)
    case "meta-ads":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 13.5 C10.2 11 8.8 8.5 6.5 8.5 C4.2 8.5 2.5 10.2 2.5 12.5 C2.5 14.8 4.2 16.5 6.5 16.5 C8.8 16.5 10.2 14.2 12 11.5 C13.8 8.8 15.2 6.5 17.5 6.5 C19.8 6.5 21.5 8.2 21.5 10.5 C21.5 12.8 19.8 14.5 17.5 14.5 C15.2 14.5 13.8 12.2 12 13.5 Z"
            stroke="url(#meta-grad)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="meta-grad" x1="2" y1="6" x2="22" y2="17">
              <stop stopColor="#0081FB" />
              <stop offset="0.5" stopColor="#0064E0" />
              <stop offset="1" stopColor="#0052C8" />
            </linearGradient>
          </defs>
        </svg>
      );

    // 10. LinkedIn Marketing & Ads (Official LinkedIn Blue)
    case "linkedin-marketing-ads":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="5" fill="#0A66C2" />
          <path
            d="M6.5 9.5 H9 V17.5 H6.5 V9.5 Z M7.75 6.2 C8.55 6.2 9.2 6.85 9.2 7.65 C9.2 8.45 8.55 9.1 7.75 9.1 C6.95 9.1 6.3 8.45 6.3 7.65 C6.3 6.85 6.95 6.2 7.75 6.2 Z M10.8 9.5 H13.2 V10.6 C13.55 9.9 14.45 9.3 15.75 9.3 C18.3 9.3 18.8 10.95 18.8 13.15 V17.5 H16.3 V13.6 C16.3 12.65 16.3 11.4 15 11.4 C13.7 11.4 13.5 12.4 13.5 13.5 V17.5 H11 V9.5 H10.8 Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    // 11. YouTube & Video Marketing (Official YouTube Red)
    case "youtube-video-marketing":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="5" fill="#FF0000" />
          <path d="M10 8 L16 12 L10 16 V8 Z" fill="#FFFFFF" />
        </svg>
      );

    // 12. Content & Keyword Strategy (Editorial Target)
    case "content-keyword-strategy":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="3" width="14" height="18" rx="2.5" fill="#F97316" />
          <path d="M6 7 H12" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 10 H14" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 13 H11" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="16.5" cy="16.5" r="4.5" fill="#EF4444" stroke="#FFFFFF" strokeWidth="1.5" />
          <circle cx="16.5" cy="16.5" r="2" fill="#FFFFFF" />
        </svg>
      );

    // 13. Social Media Marketing (Instagram Sunset Gradient)
    case "social-media-marketing":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="6" fill="url(#ig-sunset-grad)" />
          <rect
            x="4.5"
            y="4.5"
            width="15"
            height="15"
            rx="4"
            stroke="#FFFFFF"
            strokeWidth="1.8"
          />
          <circle cx="12" cy="12" r="3.5" stroke="#FFFFFF" strokeWidth="1.8" />
          <circle cx="16.2" cy="7.8" r="1" fill="#FFFFFF" />
          <defs>
            <linearGradient id="ig-sunset-grad" x1="2" y1="2" x2="22" y2="22">
              <stop stopColor="#833AB4" />
              <stop offset="0.5" stopColor="#FD1D1D" />
              <stop offset="1" stopColor="#FCB045" />
            </linearGradient>
          </defs>
        </svg>
      );

    // 14. Influencer Marketing (Gold Creator Star)
    case "influencer-marketing":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" fill="url(#influencer-gold)" />
          <path
            d="M12 5 L14.2 9.5 L19 10.2 L15.5 13.6 L16.3 18.5 L12 16.2 L7.7 18.5 L8.5 13.6 L5 10.2 L9.8 9.5 Z"
            fill="#FFFFFF"
          />
          <circle cx="17.5" cy="6.5" r="3.5" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="1.2" />
          <path d="M16.5 6.5 L17.2 7.2 L18.8 5.6" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
          <defs>
            <linearGradient id="influencer-gold" x1="2" y1="2" x2="22" y2="22">
              <stop stopColor="#F59E0B" />
              <stop offset="1" stopColor="#D97706" />
            </linearGradient>
          </defs>
        </svg>
      );

    // 15. Email Marketing (Klaviyo / Conversion Envelope)
    case "email-marketing":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2" y="5" width="20" height="14" rx="3" fill="#2563EB" />
          <path
            d="M3 6.5 L12 13 L21 6.5"
            stroke="#93C5FD"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="18.5" cy="5.5" r="2.5" fill="#EF4444" stroke="#FFFFFF" strokeWidth="1" />
        </svg>
      );

    // 16. WhatsApp Marketing (Official WhatsApp Green)
    case "whatsapp-marketing":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10.5" fill="#25D366" />
          <path
            d="M12 4.5 C7.9 4.5 4.5 7.9 4.5 12 C4.5 13.4 4.9 14.8 5.6 16 L4.5 19.5 L8.2 18.5 C9.4 19.1 10.7 19.5 12 19.5 C16.1 19.5 19.5 16.1 19.5 12 C19.5 7.9 16.1 4.5 12 4.5 Z"
            fill="#25D366"
          />
          <path
            d="M15.5 13.6 C15.3 13.5 14.3 13 14.1 12.9 C13.9 12.8 13.8 12.8 13.7 13 C13.6 13.2 13.2 13.6 13.1 13.8 C13 13.9 12.9 13.9 12.7 13.8 C12.5 13.7 11.8 13.5 11 12.7 C10.3 12.1 9.9 11.4 9.8 11.2 C9.7 11 9.8 10.9 9.9 10.8 C10 10.7 10.1 10.6 10.2 10.4 C10.3 10.3 10.3 10.2 10.4 10.1 C10.5 10 10.4 9.9 10.4 9.8 C10.3 9.7 9.9 8.8 9.8 8.4 C9.6 8 9.5 8 9.4 8 H9.1 C9 8 8.8 8 8.6 8.2 C8.4 8.4 7.9 8.9 7.9 9.9 C7.9 10.9 8.6 11.9 8.7 12 C8.8 12.1 10.1 14.1 12.1 15 C13.8 15.7 14.2 15.5 14.6 15.5 C15.1 15.4 15.8 14.9 16 14.5 C16.2 14 16.2 13.7 16.1 13.6 C16 13.5 15.8 13.5 15.5 13.6 Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    // 17. Online Reputation Management (Trust 5-Star Shield)
    case "online-reputation-management":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2 L20 5.5 V11.5 C20 16.5 16.5 20.8 12 22 C7.5 20.8 4 16.5 4 11.5 V5.5 L12 2 Z"
            fill="#00B67A"
          />
          <path
            d="M12 6.5 L13.5 9.8 L17 10.3 L14.5 12.7 L15.1 16.2 L12 14.5 L8.9 16.2 L9.5 12.7 L7 10.3 L10.5 9.8 Z"
            fill="#FACC15"
            stroke="#CA8A04"
            strokeWidth="0.8"
          />
        </svg>
      );

    // 18. Website Design & Development (Next.js / Modern Dev Code)
    case "website-design-development":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2.5" y="4.5" width="19" height="15" rx="3.5" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.8" />
          <path d="M6 7.5 H7 M9 7.5 H10 M12 7.5 H13" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
          <path
            d="M8 12 L6 14 L8 16"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 12 L18 14 L16 16"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M13 11 L11 17" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    // 19. E-commerce Website Development (Shopify Storefront)
    case "ecommerce-website-development":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="4" width="18" height="16" rx="3.5" fill="#95BF47" />
          <path
            d="M7 8 C7 5.5 9.2 3.5 12 3.5 C14.8 3.5 17 5.5 17 8"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M9 13 C9.8 15 11.2 16 13 16 C14.5 16 15.5 15.2 16 14"
            stroke="#2C3E50"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    // 20. Branding & Design (Creative Palette & Swatches)
    case "branding-design":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7.5" cy="7.5" r="4.5" fill="#F43F5E" />
          <circle cx="16.5" cy="7.5" r="4.5" fill="#8B5CF6" />
          <circle cx="7.5" cy="16.5" r="4.5" fill="#06B6D4" />
          <circle cx="16.5" cy="16.5" r="4.5" fill="#F59E0B" />
          <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
        </svg>
      );

    // 21. Copywriting & Messaging (High-Impact Pen & Message)
    case "copywriting-messaging":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 17.5 L6.5 20 L20 6.5 L17.5 4 L4 17.5 Z"
            fill="#F59E0B"
          />
          <path d="M3 21 L6.5 20 L4 17.5 Z" fill="#D97706" />
          <path d="M15 6.5 L17.5 9" stroke="#FFFFFF" strokeWidth="1.5" />
          <circle cx="19" cy="18" r="3.5" fill="#2563EB" />
          <path d="M17.5 18 H20.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );

    // 22. Analytics & Reporting (Official Google Analytics 4)
    case "analytics-reporting":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="14" width="4.5" height="7" rx="2.25" fill="#F9AB00" />
          <rect x="9.8" y="8" width="4.5" height="13" rx="2.25" fill="#F9AB00" />
          <rect x="16.5" y="3" width="4.5" height="18" rx="2.25" fill="#E37400" />
          <circle cx="18.7" cy="5.2" r="1.5" fill="#FBBC04" />
        </svg>
      );

    // 23. Conversion Rate Optimisation (CRO Funnel / Speedometer)
    case "conversion-rate-optimisation":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 14 C3 9 7 5 12 5 C17 5 21 9 21 14"
            stroke="#10B981"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path d="M12 14 L16 8" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="12" cy="14" r="2.5" fill="#10B981" />
          <path
            d="M7 19 L12 14 L17 19"
            stroke="#3B82F6"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    // 24. Marketing Automation & AI (Zapier Lightning & Workflow Cog)
    case "marketing-automation-ai":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="9" fill="#8B5CF6" />
          <path
            d="M13 3 L6 13 H12 L11 21 L18 11 H12 L13 3 Z"
            fill="#FF4F00"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      );

    // 25. Lead Generation (Target & Inbound Conversion Magnet)
    case "lead-generation":
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="9.5" fill="#EF4444" />
          <circle cx="12" cy="12" r="6.8" fill="#FFFFFF" />
          <circle cx="12" cy="12" r="4.2" fill="#EF4444" />
          <circle cx="12" cy="12" r="1.8" fill="#FFFFFF" />
          <path
            d="M17 7 L21 3 M21 3 H17.5 M21 3 V6.5"
            stroke="#2563EB"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    // Default Fallback: Vibrant Growth Blue Star
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className={className}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" fill="#2563EB" />
          <path
            d="M12 6 L13.8 10.2 L18 10.8 L14.8 13.8 L15.6 18 L12 15.8 L8.4 18 L9.2 13.8 L6 10.8 L10.2 10.2 Z"
            fill="#FFFFFF"
          />
        </svg>
      );
  }
}


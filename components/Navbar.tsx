"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

/* ============================================================
   NAVIGATION DATA DEFINITIONS (Section-Wise Chronological Order)
============================================================ */

interface NavItem {
  id: string;
  label: string;
  href: string;
  number: string;
  subtitle: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "Home", href: "/", number: "01", subtitle: "Welcome & Hero" },
  { id: "services", label: "Services", href: "/services", number: "02", subtitle: "Growth Solutions" },
  { id: "projects", label: "Portfolio", href: "/projects", number: "03", subtitle: "Case Studies" },
  { id: "analytics", label: "Analytics", href: "/analytics", number: "04", subtitle: "Live GSC Proof" },
  { id: "about", label: "About", href: "/about", number: "05", subtitle: "Profile & Dossier" },
  { id: "skills", label: "Skills", href: "/skills", number: "06", subtitle: "Tools & Skills" },
  { id: "blog", label: "Blogs", href: "/blog", number: "07", subtitle: "Articles & Guides" },
  { id: "contact", label: "Contact", href: "/contact", number: "08", subtitle: "Start a Discussion" },
];

/* ============================================================
   NAVBAR COMPONENT
============================================================ */

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isSubpage = pathname !== "/";

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isAdminPasscodeForm, setIsAdminPasscodeForm] = useState(false);

  // Lock flag to prevent scroll events from overriding active state during smooth scroll
  const isManualScrollRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  /* Check if current view is the admin passcode form */
  useEffect(() => {
    const checkPasscodeGate = () => {
      if (pathname === "/admin") {
        const token =
          typeof window !== "undefined"
            ? localStorage.getItem("digital_portfolio_admin_token")
            : null;
        setIsAdminPasscodeForm(!token);
      } else {
        setIsAdminPasscodeForm(false);
      }
    };

    checkPasscodeGate();
    window.addEventListener("storage", checkPasscodeGate);
    window.addEventListener("admin-auth-change", checkPasscodeGate);
    return () => {
      window.removeEventListener("storage", checkPasscodeGate);
      window.removeEventListener("admin-auth-change", checkPasscodeGate);
    };
  }, [pathname]);

  /* Direct Scroll To Section with Immediate Active Style Transition */
  const scrollToSection = useCallback((targetId: string) => {
    // 1. Directly apply active style to the clicked item
    setActiveSection(targetId);

    // 2. Lock automatic scroll-spy so it doesn't revert during smooth scroll
    isManualScrollRef.current = true;
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // 3. Scroll to element
    if (targetId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      try {
        window.history.pushState(null, "", window.location.pathname);
      } catch {
        // ignore
      }
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navbarHeight = 68;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = Math.max(
          0,
          elementPosition + window.scrollY - navbarHeight
        );

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        try {
          window.history.pushState(null, "", `#${targetId}`);
        } catch {
          // ignore
        }
      }
    }

    // 4. Release lock once smooth scrolling completes
    scrollTimeoutRef.current = setTimeout(() => {
      isManualScrollRef.current = false;
    }, 900);
  }, []);

  /* Interrupt manual scroll lock if user wheels or touches screen */
  useEffect(() => {
    const handleUserInteraction = () => {
      if (isManualScrollRef.current) {
        isManualScrollRef.current = false;
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      }
    };

    window.addEventListener("wheel", handleUserInteraction, { passive: true });
    window.addEventListener("touchmove", handleUserInteraction, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleUserInteraction);
      window.removeEventListener("touchmove", handleUserInteraction);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  /* Close mobile menu on Escape key */
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  /* Close mobile menu when expanding to desktop viewport */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  /* Handle incoming URL hash (e.g. /#contact) on mount or hash change */
  useEffect(() => {
    if (pathname !== "/") return;

    const handleInitialHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const match = NAV_ITEMS.find((item) => item.id === hash);
        if (match) {
          setTimeout(() => {
            scrollToSection(match.id);
          }, 120);
        }
      }
    };

    handleInitialHash();
    window.addEventListener("hashchange", handleInitialHash);
    return () => window.removeEventListener("hashchange", handleInitialHash);
  }, [pathname, scrollToSection]);

  /* Active Section Detection on Homepage (Scroll Spy) */
  const updateActiveSection = useCallback(() => {
    if (pathname !== "/") return;

    const scrollY = window.scrollY;
    setScrolled(scrollY > 25);

    // If scrolling programmatically from click, do not override
    if (isManualScrollRef.current) return;

    // Top area is always hero
    if (scrollY < 120) {
      setActiveSection("hero");
      return;
    }

    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // If near page bottom or contact section is in viewport view
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      const contactRect = contactEl.getBoundingClientRect();
      if (
        windowHeight + scrollY >= documentHeight - 140 ||
        contactRect.top <= windowHeight * 0.45
      ) {
        setActiveSection("contact");
        return;
      }
    }

    // Chronological section list matching NAV_ITEMS
    const sectionIds = [
      "hero",
      "services",
      "projects",
      "analytics",
      "about",
      "skills",
      "blog",
      "contact",
    ];

    const focalY = Math.max(140, Math.min(windowHeight * 0.35, 280));
    let detectedSection: string | null = null;

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (!element) continue;

      const rect = element.getBoundingClientRect();
      if (rect.top <= focalY && rect.bottom >= focalY) {
        detectedSection = id;
        break;
      }
    }

    if (!detectedSection) {
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= focalY) {
          detectedSection = sectionIds[i];
          break;
        }
      }
    }

    if (detectedSection) {
      setActiveSection(detectedSection);
    }
  }, [pathname]);

  /* Scroll & Resize Listeners */
  useEffect(() => {
    updateActiveSection();

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 25);
        updateActiveSection();
        ticking = false;
      });
      ticking = true;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [updateActiveSection]);

  /* Compute current active tab based on route or section */
  const currentActiveSection = useMemo(() => {
    if (pathname === "/services" || pathname.startsWith("/services/")) return "services";
    if (pathname === "/projects" || pathname.startsWith("/projects/")) return "projects";
    if (pathname === "/analytics" || pathname.startsWith("/analytics/")) return "analytics";
    if (pathname === "/about" || pathname.startsWith("/about/")) return "about";
    if (pathname === "/skills" || pathname.startsWith("/skills/")) return "skills";
    if (
      pathname.startsWith("/blog") ||
      pathname.startsWith("/showblog") ||
      pathname.startsWith("/viewblog") ||
      pathname.startsWith("/createblog")
    ) {
      return "blog";
    }
    if (pathname === "/contact" || pathname.startsWith("/contact/")) return "contact";
    return activeSection;
  }, [pathname, activeSection]);

  /* Smart Navigation Handler across all routes */
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) => {
    setMobileMenuOpen(false);

    // If clicking on current active page, smooth scroll to top / hero
    if (pathname === item.href) {
      e.preventDefault();
      if (pathname === "/") {
        scrollToSection(item.id);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    // Otherwise allow normal Next.js <Link> navigation to item.href
  };

  /* Brand Logo Click */
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      scrollToSection("hero");
    }
  };

  /* Contact CTA Click */
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    if (pathname === "/contact") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  /* Close mobile menu on desktop resize */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  if (isAdminPasscodeForm) {
    return null;
  }

  return (
    <>
      {/* ======================================================
          MAIN FLOATING NAVBAR HEADER
      ====================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isSubpage
          ? "bg-[#F8FAFC]/90 dark:bg-[#0B1220]/90 backdrop-blur-2xl border-b border-stone-200/60 dark:border-white/10 shadow-[0_8px_30px_rgba(37,99,235,0.06)] dark:shadow-[0_8px_35px_rgba(0,0,0,0.6)] py-2 sm:py-2.5"
          : "bg-transparent py-3 sm:py-3.5"
          }`}
      >
        {/* Subtle Top Gradient Accent Hairline */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* ==================================================
              1. BRAND LOGO & IDENTITY (Compact below 768px)
          ================================================== */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="group flex items-center gap-2.5 sm:gap-3 shrink-0 min-w-0"
          >
            {/* Animated Logo Monogram Badge */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="relative w-12.5 h-10.5 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white flex items-center justify-center font-black text-xs sm:text-sm shadow-md shadow-orange-500/25 border border-orange-400/40 overflow-hidden shrink-0"
            >
              {/* Inner ambient light overlay */}
              <span className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/20 pointer-events-none" />
              <span className="relative z-10 tracking-tight">MBSA</span>
            </motion.div>

            {/* Brand Title & Tagline - Compact & Truncate Safe on narrow screens */}
            <div className="flex flex-col text-left min-w-0">
              <span className="text-xs sm:text-sm md:text-base font-extrabold tracking-tight text-stone-900 dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-[#14B8A6] transition-colors leading-tight truncate">
                Digital Marketing
              </span>
              <span className="text-[8px] sm:text-[9.5px] font-mono font-medium text-stone-500 dark:text-stone-400 leading-tight truncate">
                Technical SEO Specialist
              </span>
            </div>
          </Link>

          {/* ==================================================
              2. DESKTOP NAVIGATION PILL DOCK
          ================================================== */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 p-1 xl:p-1.5 rounded-full bg-white/70 dark:bg-[#111B2E]/70 border border-blue-500/15 dark:border-blue-500/20 backdrop-blur-xl shadow-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = currentActiveSection === item.id;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative px-2.5 xl:px-3.5 py-1.5 rounded-full text-[11px] xl:text-xs font-bold transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${isActive
                    ? "text-white"
                    : "text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-blue-500/10"
                    }`}
                >
                  {/* Sliding Animated Active Background Pill */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-[#2563EB]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* ==================================================
              3. RIGHT SIDE CONTROLS & CTA BUTTON
          ================================================== */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Theme Toggle (Light / Dark Mode) */}
            <div className="shrink-0">
              <ThemeToggle />
            </div>

            {/* Start a Project Primary Action CTA Button (Desktop & Tablet >= 768px only) */}
            <Link
              href="/contact"
              onClick={handleContactClick}
              className="hidden md:inline-flex group relative items-center gap-2 px-3.5 xl:px-5 py-2 sm:py-2.5 rounded-full bg-[#2563EB] text-white text-xs font-extrabold shadow-lg shadow-[#2563EB]/25 hover:shadow-[#2563EB]/45 border border-blue-400/30 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Start a Project</span>
              <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Mobile Menu Hamburger Toggle Button (Compact, clear touch target below 1024px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              className="lg:hidden relative w-10 h-10 rounded-xl flex items-center justify-center border border-orange-500/25 dark:border-white/15 bg-white/85 dark:bg-[#111B2E]/85 backdrop-blur-xl text-stone-800 dark:text-stone-200 hover:text-[#2563EB] hover:border-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] transition-all shadow-sm cursor-pointer touch-manipulation active:scale-95"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================
          MOBILE NAVIGATION DRAWER OVERLAY
      ======================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Layer with touch event capture to reliably close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/65 backdrop-blur-sm lg:hidden touch-none"
            />

            {/* Floating Mobile Glass Drawer Panel - Strictly constrained within viewport */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed top-[58px] sm:top-[64px] left-3 sm:left-4 right-3 sm:right-4 z-50 p-3 sm:p-4.5 rounded-2xl bg-white/95 dark:bg-[#0B1220]/95 backdrop-blur-2xl border border-stone-200/80 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.85)] lg:hidden max-h-[calc(100dvh-72px)] overflow-y-auto overscroll-contain"
            >
              {/* Clean Nav Links List with generous touch targets (44px min) */}
              <nav className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = currentActiveSection === item.id;

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-150 min-h-[44px] touch-manipulation active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${isActive
                        ? "bg-[#2563EB] text-white shadow-md shadow-orange-500/25"
                        : "text-stone-700 dark:text-stone-200 hover:text-[#2563EB] dark:hover:text-[#14B8A6] hover:bg-orange-500/10 active:bg-orange-500/15"
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`text-[11px] font-mono font-bold ${isActive ? "text-white/80" : "text-stone-400"}`}>
                          {item.number}
                        </span>
                        <span className="font-bold">{item.label}</span>
                      </div>

                      {isActive ? (
                        <span className="w-2 h-2 rounded-full bg-white shadow-xs" />
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5 text-stone-400 opacity-60" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile Drawer Action Footer with full-width CTA */}
              <div className="mt-2.5 pt-2.5 border-t border-stone-200/80 dark:border-white/10">
                <Link
                  href="/contact"
                  onClick={handleContactClick}
                  className="flex items-center justify-center gap-2 w-full min-h-[44px] py-3 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#14B8A6] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-[#2563EB]/25 hover:shadow-[#2563EB]/45 border border-blue-400/30 active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] transition-all touch-manipulation"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
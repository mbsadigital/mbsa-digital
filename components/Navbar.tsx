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
  { id: "hero", label: "Home", href: "/hero", number: "01", subtitle: "Welcome & Hero" },
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
        const navbarHeight = 76;
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
    if (
      pathname.startsWith("/blog") ||
      pathname.startsWith("/showblog") ||
      pathname.startsWith("/viewblog") ||
      pathname.startsWith("/createblog")
    ) {
      return "blog";
    }
    return activeSection;
  }, [pathname, activeSection]);

  /* Smart Navigation Handler across all routes */
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (pathname === "/") {
      scrollToSection(item.id);
    } else {
      if (item.id === "hero") {
        router.push("/");
      } else {
        router.push(`/#${item.id}`);
      }
    }
  };

  /* Brand Logo Click */
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (pathname === "/") {
      scrollToSection("hero");
    } else {
      router.push("/");
    }
  };

  /* Contact CTA Click */
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (pathname === "/") {
      scrollToSection("contact");
    } else {
      router.push("/#contact");
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
          ? "bg-[#FAF8F5]/90 dark:bg-[#080706]/90 backdrop-blur-2xl border-b border-orange-500/15 dark:border-orange-500/20 shadow-[0_8px_30px_rgba(234,88,12,0.06)] dark:shadow-[0_8px_35px_rgba(0,0,0,0.6)] py-2.5 sm:py-3"
          : "bg-transparent py-4 sm:py-5"
          }`}
      >
        {/* Subtle Top Gradient Accent Hairline */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#EA580C]/40 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* ==================================================
              1. BRAND LOGO & IDENTITY
          ================================================== */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="group flex items-center gap-3 shrink-0"
          >
            {/* Animated Logo Monogram Badge */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br from-[#EA580C] to-[#C2410C] text-white flex items-center justify-center font-black text-xs sm:text-sm shadow-md shadow-orange-500/25 border border-orange-400/40 overflow-hidden"
            >
              {/* Inner ambient light overlay */}
              <span className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/20 pointer-events-none" />
              <span className="relative z-10 tracking-tight">DM</span>
            </motion.div>

            {/* Brand Title & Tagline */}
            <div className="flex flex-col text-left">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-stone-900 dark:text-white group-hover:text-[#EA580C] dark:group-hover:text-[#F97316] transition-colors leading-tight">
                Digital Growth
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono font-medium text-stone-500 dark:text-stone-400 leading-tight">
                SEO &amp; Data Specialist
              </span>
            </div>
          </Link>

          {/* ==================================================
              2. DESKTOP NAVIGATION PILL DOCK
          ================================================== */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1.5 rounded-full bg-white/70 dark:bg-[#120F0D]/70 border border-orange-500/15 dark:border-orange-500/20 backdrop-blur-xl shadow-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = currentActiveSection === item.id;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative px-3 xl:px-3.5 py-1.5 rounded-full text-[11px] xl:text-xs font-bold transition-all duration-200 select-none ${isActive
                    ? "text-white"
                    : "text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-orange-500/10"
                    }`}
                >
                  {/* Sliding Animated Active Background Pill */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#EA580C] to-[#C2410C] shadow-md shadow-orange-500/30"
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

            {/* Start a Project Primary Action CTA Button */}
            <Link
              href="/#contact"
              onClick={handleContactClick}
              className="hidden sm:inline-flex group relative items-center gap-2 px-4.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#EA580C] via-[#EA580C] to-[#C2410C] hover:from-[#C2410C] hover:to-[#9A3412] text-white text-xs font-extrabold shadow-[0_4px_20px_rgba(234,88,12,0.32)] hover:shadow-[0_6px_25px_rgba(234,88,12,0.48)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Start a Project</span>
              <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Mobile Menu Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              className="lg:hidden relative w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center border border-orange-500/25 dark:border-orange-500/30 bg-white/80 dark:bg-[#120F0D]/80 backdrop-blur-xl text-stone-800 dark:text-stone-200 hover:text-[#EA580C] hover:border-[#EA580C] transition-all shadow-sm cursor-pointer"
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
            {/* Backdrop Blur Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Floating Mobile Glass Drawer Panel */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed top-18 sm:top-20 left-4 right-4 z-50 p-4 sm:p-5 rounded-2xl bg-white/95 dark:bg-[#120F0D]/95 backdrop-blur-2xl border border-orange-500/25 dark:border-orange-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.35)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.8)] lg:hidden max-h-[calc(100vh-90px)] overflow-y-auto"
            >
              {/* Clean Nav Links List */}
              <nav className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = currentActiveSection === item.id;

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 ${isActive
                        ? "bg-[#EA580C] text-white shadow-md shadow-orange-500/25"
                        : "text-stone-700 dark:text-stone-200 hover:text-[#EA580C] dark:hover:text-[#F97316] hover:bg-orange-500/10"
                        }`}
                    >
                      <span>{item.label}</span>
                      {isActive ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5 text-stone-400 opacity-50" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile Drawer Action Footer */}
              <div className="mt-3 pt-3 border-t border-stone-200/80 dark:border-stone-800">
                <Link
                  href="/#contact"
                  onClick={handleContactClick}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#EA580C] to-[#C2410C] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-orange-500/25 active:scale-98 transition-transform"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
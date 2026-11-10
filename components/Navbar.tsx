"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Search,
  Sparkles,
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
  Award,
  Mail,
  Smartphone,
  ShieldCheck,
  Code2,
  Rocket,
  CheckCircle2,
  Check,
  ArrowUpRight,
  Compass,
  Workflow,
  Building2,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { SERVICES_DATA, SERVICE_CATEGORIES, type ServiceDetail } from "@/lib/servicesData";

/* ============================================================
   ICON MAP HELPER FOR SERVICES
============================================================ */

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
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
  Compass,
};

/* ============================================================
   ABOUT DROPDOWN DATA
============================================================ */

const ABOUT_DROPDOWN_ITEMS = [
  {
    num: "01",
    title: "About MBSA Digital",
    href: "/about",
    badge: "Profile & Principles",
    desc: "Who we are and how we think",
    icon: Sparkles,
  },
  {
    num: "02",
    title: "How we work",
    href: "/how-we-work",
    badge: "Process & Delivery",
    desc: "Our step-by-step delivery process",
    icon: Compass,
  },
];

/* ============================================================
   NAVIGATION DATA DEFINITIONS
============================================================ */

interface NavItem {
  id: string;
  label: string;
  href: string;
  number: string;
  subtitle: string;
  hasDropdown?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "Home", href: "/", number: "01", subtitle: "Welcome & Hero" },
  { id: "services", label: "Services", href: "/services", number: "02", subtitle: "Growth Solutions", hasDropdown: true },
  { id: "projects", label: "Portfolio", href: "/projects", number: "03", subtitle: "Case Studies" },
  { id: "analytics", label: "Analytics", href: "/analytics", number: "04", subtitle: "Live GSC Proof" },
  { id: "about", label: "About", href: "/about", number: "05", subtitle: "Profile & Dossier", hasDropdown: true },
  { id: "industries", label: "Industries", href: "/industries", number: "06", subtitle: "Industries We Serve" },
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
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [mobileAboutExpanded, setMobileAboutExpanded] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("hero");
  const [isAdminPasscodeForm, setIsAdminPasscodeForm] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  /* Close dropdowns on route change */
  useEffect(() => {
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesExpanded(false);
    setMobileAboutExpanded(false);
    setSearchQuery("");
  }, [pathname]);

  /* Close dropdowns on Escape key */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesDropdownOpen(false);
        setAboutDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  /* Close dropdowns when clicking outside */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(e.target as Node)
      ) {
        setServicesDropdownOpen(false);
        setAboutDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* Services Dropdown Hover Management */
  const handleMouseEnterServices = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setAboutDropdownOpen(false);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeaveServices = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 220);
  };

  /* About Dropdown Hover Management */
  const handleMouseEnterAbout = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(true);
  };

  const handleMouseLeaveAbout = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 220);
  };

  /* Direct Scroll To Section */
  const scrollToSection = useCallback((targetId: string) => {
    setActiveSection(targetId);
    isManualScrollRef.current = true;
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

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

    scrollTimeoutRef.current = setTimeout(() => {
      isManualScrollRef.current = false;
    }, 900);
  }, []);

  /* Interrupt manual scroll lock */
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

  /* Close mobile menu on desktop resize */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
        setAboutDropdownOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Active Section Detection on Homepage */
  const updateActiveSection = useCallback(() => {
    if (pathname !== "/") return;

    const scrollY = window.scrollY;
    setScrolled(scrollY > 25);

    if (isManualScrollRef.current) return;

    if (scrollY < 120) {
      setActiveSection("hero");
      return;
    }

    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

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

    const sectionIds = [
      "hero",
      "services",
      "projects",
      "analytics",
      "about",
      "industries",
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

  /* Compute current active tab */
  const currentActiveSection = useMemo(() => {
    if (pathname === "/services" || pathname.startsWith("/services/")) return "services";
    if (pathname === "/projects" || pathname.startsWith("/projects/")) return "projects";
    if (pathname === "/analytics" || pathname.startsWith("/analytics/")) return "analytics";
    if (
      pathname === "/about" ||
      pathname.startsWith("/about/") ||
      pathname === "/how-we-work" ||
      pathname.startsWith("/how-we-work/")
    )
      return "about";
    if (
      pathname === "/industries" ||
      pathname.startsWith("/industries/") ||
      pathname === "/skills" ||
      pathname.startsWith("/skills/")
    )
      return "industries";
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

  /* Smart Navigation Handler */
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);

    if (pathname === item.href) {
      e.preventDefault();
      if (pathname === "/") {
        scrollToSection(item.id);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  /* Direct Service Selection Handler */
  const handleServiceSelect = (slug: string) => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    router.push(`/services/${slug}`);
  };

  /* Direct About Item Selection Handler */
  const handleAboutSelect = (href: string) => {
    setAboutDropdownOpen(false);
    setMobileMenuOpen(false);
    router.push(href);
  };

  /* Brand Logo Click */
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      scrollToSection("hero");
    }
  };

  /* Contact CTA Click */
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);
    if (pathname === "/contact") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  /* Filtered services for search inside dropdown */
  const filteredServices = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return null;
    return SERVICES_DATA.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.shortTitle.toLowerCase().includes(q) ||
        s.desc.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.badge.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  /* 4 Column Organization for Services Mega Dropdown */
  const col1Services = useMemo(
    () => SERVICES_DATA.filter((s) => s.categoryId === "seo-ai-search"),
    []
  );

  const col2Services = useMemo(
    () =>
      SERVICES_DATA.filter(
        (s) => s.categoryId === "paid-media" || s.categoryId === "data-cro-automation"
      ),
    []
  );

  const col3Services = useMemo(
    () =>
      SERVICES_DATA.filter(
        (s) => s.categoryId === "content-social" || s.categoryId === "growth-solutions"
      ),
    []
  );

  const col4Services = useMemo(
    () => SERVICES_DATA.filter((s) => s.categoryId === "websites-creative"),
    []
  );

  if (isAdminPasscodeForm) {
    return null;
  }

  return (
    <>
      {/* ======================================================
          MAIN FLOATING NAVBAR HEADER
      ====================================================== */}
      <header
        ref={headerRef}
        onMouseLeave={() => {
          handleMouseLeaveServices();
          handleMouseLeaveAbout();
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isSubpage || servicesDropdownOpen || aboutDropdownOpen
          ? "bg-[#F8FAFC]/95 dark:bg-[#0B1220]/95 backdrop-blur-2xl border-b border-stone-200/60 dark:border-white/10 shadow-[0_8px_30px_rgba(37,99,235,0.06)] dark:shadow-[0_8px_35px_rgba(0,0,0,0.6)] py-2 sm:py-2.5"
          : "bg-transparent py-3 sm:py-3.5"
          }`}
      >
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

          {/* ==================================================
              1. BRAND LOGO & IDENTITY
          ================================================== */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="group flex items-center gap-2.5 sm:gap-3 shrink-0 min-w-0"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="relative w-11 h-10 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white flex items-center justify-center font-black text-xs sm:text-sm shadow-md shadow-blue-500/25 border border-blue-400/40 overflow-hidden shrink-0"
            >
              <span className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/20 pointer-events-none" />
              <span className="relative z-10 tracking-tight">MBSA</span>
            </motion.div>

            <div className="flex flex-col text-left min-w-0">
              <span className="text-xs sm:text-sm md:text-base font-extrabold tracking-tight text-stone-900 dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors leading-tight truncate">
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
              const isServices = item.id === "services";
              const isAbout = item.id === "about";

              // SERVICES DROPDOWN TRIGGER
              if (isServices) {
                const isServicesActive = isActive;
                const isDropdownOpen = servicesDropdownOpen;

                return (
                  <div
                    key={item.id}
                    onMouseEnter={handleMouseEnterServices}
                    className="relative"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setAboutDropdownOpen(false);
                        setServicesDropdownOpen((prev) => !prev);
                      }}
                      className={`relative px-2.5 xl:px-3.5 py-1.5 rounded-full text-[11px] xl:text-xs font-bold transition-all duration-200 select-none flex items-center gap-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${isServicesActive
                        ? "text-white"
                        : isDropdownOpen
                          ? "text-[#2563EB] dark:text-[#60A5FA] bg-blue-500/15 dark:bg-white/10"
                          : "text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-blue-500/10"
                        }`}
                    >
                      {isServicesActive && (
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

                      <span className="relative z-10 flex items-center gap-1">
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-3 h-3 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""
                            }`}
                        />
                      </span>
                    </button>
                  </div>
                );
              }

              // ABOUT DROPDOWN TRIGGER (COMPACT AS IN USER SPEC)
              if (isAbout) {
                const isAboutActive = isActive;
                const isDropdownOpen = aboutDropdownOpen;

                return (
                  <div
                    key={item.id}
                    onMouseEnter={handleMouseEnterAbout}
                    onMouseLeave={handleMouseLeaveAbout}
                    className="relative"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setServicesDropdownOpen(false);
                        setAboutDropdownOpen((prev) => !prev);
                      }}
                      className={`relative px-2.5 xl:px-3.5 py-1.5 rounded-full text-[11px] xl:text-xs font-bold transition-all duration-200 select-none flex items-center gap-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${isAboutActive
                        ? "text-white"
                        : isDropdownOpen
                          ? "text-[#2563EB] dark:text-[#60A5FA] bg-blue-500/15 dark:bg-white/10"
                          : "text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-blue-500/10"
                        }`}
                    >
                      {isAboutActive && (
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

                      <span className="relative z-10 flex items-center gap-1">
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-3 h-3 transition-transform duration-200 ${aboutDropdownOpen ? "rotate-180" : ""
                            }`}
                        />
                      </span>
                    </button>

                    {/* COMPACT ABOUT DROPDOWN ANCHORED UNDER BUTTON */}
                    <AnimatePresence>
                      {aboutDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.97 }}
                          transition={{ duration: 0.16, ease: "easeOut" }}
                          onMouseEnter={handleMouseEnterAbout}
                          onMouseLeave={handleMouseLeaveAbout}
                          className="hidden lg:block absolute top-full left-0 pt-2 z-50 pointer-events-auto"
                        >
                          <div className="w-72 sm:w-80 rounded-2xl bg-white dark:bg-[#0B1220] border border-slate-200/90 dark:border-white/10 shadow-xl shadow-slate-900/10 dark:shadow-black/70 p-2 overflow-hidden">
                            {ABOUT_DROPDOWN_ITEMS.map((aboutItem) => {
                              const isSelected = pathname === aboutItem.href;
                              return (
                                <Link
                                  key={aboutItem.href}
                                  href={aboutItem.href}
                                  onClick={() => setAboutDropdownOpen(false)}
                                  className={`group block p-3 rounded-xl transition-all duration-150 ${isSelected
                                    ? "bg-blue-50/80 dark:bg-white/[0.08]"
                                    : "hover:bg-slate-50 dark:hover:bg-white/[0.05]"
                                    }`}
                                >
                                  <div className="flex items-center justify-between">
                                    <span
                                      className={`text-[13.5px] font-bold transition-colors leading-snug ${isSelected
                                        ? "text-[#2563EB] dark:text-[#60A5FA]"
                                        : "text-slate-900 dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA]"
                                        }`}
                                    >
                                      {aboutItem.title}
                                    </span>
                                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
                                  </div>
                                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                                    {aboutItem.desc}
                                  </p>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // REGULAR NAV ITEMS
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
            <div className="shrink-0">
              <ThemeToggle />
            </div>

            <Link
              href="/contact"
              onClick={handleContactClick}
              className="hidden sm:inline-flex group items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#2563EB] text-white text-xs sm:text-[13.5px] font-bold border hover:border-blue-800 shadow-md shadow-[#2563EB] hover:shadow-[#2563EB] hover:-translate-y-0.5 transition-all duration-300 min-h-[42px] sm:min-h-[44px] touch-manipulation"
            >
              <span className="relative z-10">Start a Project</span>
              <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden relative w-10 h-10 rounded-xl flex items-center justify-center border border-blue-500/25 dark:border-white/15 bg-white/85 dark:bg-[#111B2E]/85 backdrop-blur-xl text-stone-800 dark:text-stone-200 hover:text-[#2563EB] hover:border-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] transition-all shadow-sm cursor-pointer touch-manipulation active:scale-95"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ======================================================
            DESKTOP 25 SERVICES MEGA DROPDOWN PANEL
        ====================================================== */}
        <AnimatePresence>
          {servicesDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.99 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={handleMouseEnterServices}
              onMouseLeave={handleMouseLeaveServices}
              className="hidden lg:block absolute top-full left-0 right-0 pt-2 px-4 pointer-events-auto"
            >
              <div className="max-w-7xl mx-auto rounded-3xl bg-white dark:bg-[#0B1220] border border-blue-500/20 dark:border-white/10 shadow-2xl shadow-slate-900/15 dark:shadow-black/70 p-6 max-h-[82vh] overflow-y-auto">

                {/* Mega Dropdown Header Bar */}
                <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-slate-200/80 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] animate-pulse" />
                    <div>
                      <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
                        All Service Growth &amp; Technical Solutions
                      </h3>

                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="relative w-64">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search 25 services..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 rounded-xl text-xs bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#2563EB]"
                      />
                      {searchQuery && (
                        <button
                          type="button"
                          onClick={() => setSearchQuery("")}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      )}
                    </div>

                    <Link
                      href="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="px-3.5 py-1.5 rounded-xl bg-blue-500/10 hover:bg-[#2563EB] text-[#2563EB] hover:text-white dark:text-[#60A5FA] dark:hover:text-white text-xs font-bold transition-all inline-flex items-center gap-1.5 border border-blue-500/20"
                    >
                      <span>Explore All Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {filteredServices ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span>Found {filteredServices.length} matching services</span>
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="text-[#2563EB] hover:underline cursor-pointer"
                      >
                        Clear search
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-[460px] overflow-y-auto pr-2">
                      {filteredServices.map((service) => {
                        const Icon = SERVICE_ICONS[service.iconName] || Search;
                        return (
                          <div
                            key={service.id}
                            onClick={() => handleServiceSelect(service.slug)}
                            className="p-3 rounded-xl bg-slate-50 hover:bg-blue-500/10 dark:bg-white/[0.03] dark:hover:bg-blue-500/20 border border-slate-200/60 dark:border-white/5 hover:border-[#2563EB]/40 transition-all cursor-pointer group flex items-start gap-3"
                          >
                            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 text-[#2563EB] dark:text-[#60A5FA] group-hover:scale-110 transition-transform">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-1.5">
                                <span className="text-[10px] font-mono text-slate-400">
                                  #{service.num}
                                </span>
                                <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] truncate">
                                  {service.shortTitle}
                                </h4>
                              </div>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                                {service.desc}
                              </p>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                    {/* COLUMN 1: SEO & AI SEARCH */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200/80 dark:border-white/10">
                        <span className="text-[11px] font-black uppercase tracking-wider text-[#2563EB] dark:text-[#60A5FA] flex items-center gap-1.5">
                          <Search className="w-3.5 h-3.5" />
                          <span>SEO &amp; AI Search</span>
                        </span>
                        <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-blue-500/10 text-[#2563EB]">
                          {col1Services.length}
                        </span>
                      </div>

                      <div className="space-y-1">
                        {col1Services.map((service) => {
                          const Icon = SERVICE_ICONS[service.iconName] || Search;
                          return (
                            <div
                              key={service.id}
                              onClick={() => handleServiceSelect(service.slug)}
                              className="px-2.5 py-1.5 rounded-xl hover:bg-blue-500/10 dark:hover:bg-blue-500/20 text-slate-700 dark:text-slate-300 hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-all cursor-pointer group flex items-center justify-between gap-2"
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <Icon className="w-3.5 h-3.5 text-[#2563EB] shrink-0 opacity-80 group-hover:opacity-100" />
                                <span className="text-xs font-semibold truncate group-hover:font-bold">
                                  {service.shortTitle}
                                </span>
                              </div>

                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* COLUMN 2: PAID MEDIA & DATA/CRO */}
                    <div className="space-y-4">
                      {/* Sub-Group: Paid Media (4) */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/80 dark:border-white/10">
                          <span className="text-[11px] font-black uppercase tracking-wider text-teal-600 dark:text-teal-400 flex items-center gap-1.5">
                            <Target className="w-3.5 h-3.5" />
                            <span>Paid Media &amp; PPC</span>
                          </span>
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-teal-500/10 text-teal-600 dark:text-teal-400">
                            4
                          </span>
                        </div>

                        <div className="space-y-1">
                          {col2Services
                            .filter((s) => s.categoryId === "paid-media")
                            .map((service) => {
                              const Icon = SERVICE_ICONS[service.iconName] || Target;
                              return (
                                <div
                                  key={service.id}
                                  onClick={() => handleServiceSelect(service.slug)}
                                  className="px-2.5 py-1.5 rounded-xl hover:bg-teal-500/10 dark:hover:bg-teal-500/20 text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-300 transition-all cursor-pointer group flex items-center justify-between gap-2"
                                >
                                  <div className="flex items-center gap-2 min-w-0">
                                    <Icon className="w-3.5 h-3.5 text-teal-500 shrink-0 opacity-80 group-hover:opacity-100" />
                                    <span className="text-xs font-semibold truncate group-hover:font-bold">
                                      {service.shortTitle}
                                    </span>
                                  </div>

                                </div>
                              );
                            })}
                        </div>
                      </div>

                      <div className="space-y-2 pt-1">
                        <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/80 dark:border-white/10">
                          <span className="text-[11px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                            <BarChart3 className="w-3.5 h-3.5" />
                            <span>Data, CRO &amp; Analytics</span>
                          </span>
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600">
                            3
                          </span>
                        </div>

                        <div className="space-y-1">
                          {col2Services
                            .filter((s) => s.categoryId === "data-cro-automation")
                            .map((service) => {
                              const Icon = SERVICE_ICONS[service.iconName] || BarChart3;
                              return (
                                <div
                                  key={service.id}
                                  onClick={() => handleServiceSelect(service.slug)}
                                  className="px-2.5 py-1.5 rounded-xl hover:bg-emerald-500/10 dark:hover:bg-emerald-500/20 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-300 transition-all cursor-pointer group flex items-center justify-between gap-2"
                                >
                                  <div className="flex items-center gap-2 min-w-0">
                                    <Icon className="w-3.5 h-3.5 text-emerald-500 shrink-0 opacity-80 group-hover:opacity-100" />
                                    <span className="text-xs font-semibold truncate group-hover:font-bold">
                                      {service.shortTitle}
                                    </span>
                                  </div>

                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>

                    {/* COLUMN 3: CONTENT & SOCIAL */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/80 dark:border-white/10">
                          <span className="text-[11px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                            <Share2 className="w-3.5 h-3.5" />
                            <span>Content, Social &amp; PR</span>
                          </span>
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-600">
                            6
                          </span>
                        </div>

                        <div className="space-y-1">
                          {col3Services
                            .filter((s) => s.categoryId === "content-social")
                            .map((service) => {
                              const Icon = SERVICE_ICONS[service.iconName] || Share2;
                              return (
                                <div
                                  key={service.id}
                                  onClick={() => handleServiceSelect(service.slug)}
                                  className="px-2.5 py-1.5 rounded-xl hover:bg-indigo-500/10 dark:hover:bg-indigo-500/20 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-300 transition-all cursor-pointer group flex items-center justify-between gap-2"
                                >
                                  <div className="flex items-center gap-2 min-w-0">
                                    <Icon className="w-3.5 h-3.5 text-indigo-500 shrink-0 opacity-80 group-hover:opacity-100" />
                                    <span className="text-xs font-semibold truncate group-hover:font-bold">
                                      {service.shortTitle}
                                    </span>
                                  </div>

                                </div>
                              );
                            })}
                        </div>
                      </div>

                      <div className="space-y-2 pt-1">
                        <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/80 dark:border-white/10">
                          <span className="text-[11px] font-black uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
                            <Rocket className="w-3.5 h-3.5" />
                            <span>Growth Leadership</span>
                          </span>
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-sky-500/10 text-sky-600">
                            1
                          </span>
                        </div>

                        <div className="space-y-1">
                          {col3Services
                            .filter((s) => s.categoryId === "growth-solutions")
                            .map((service) => {
                              const Icon = SERVICE_ICONS[service.iconName] || Rocket;
                              return (
                                <div
                                  key={service.id}
                                  onClick={() => handleServiceSelect(service.slug)}
                                  className="px-2.5 py-1.5 rounded-xl hover:bg-sky-500/10 dark:hover:bg-sky-500/20 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-300 transition-all cursor-pointer group flex items-center justify-between gap-2"
                                >
                                  <div className="flex items-center gap-2 min-w-0">
                                    <Icon className="w-3.5 h-3.5 text-sky-500 shrink-0 opacity-80 group-hover:opacity-100" />
                                    <span className="text-xs font-semibold truncate group-hover:font-bold">
                                      {service.shortTitle}
                                    </span>
                                  </div>

                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>

                    {/* COLUMN 4: WEBSITES & CREATIVE */}
                    <div className="space-y-4 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/80 dark:border-white/10">
                          <span className="text-[11px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                            <Code2 className="w-3.5 h-3.5" />
                            <span>Websites &amp; Creative</span>
                          </span>
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-blue-500/10 text-blue-600">
                            {col4Services.length}
                          </span>
                        </div>

                        <div className="space-y-1">
                          {col4Services.map((service) => {
                            const Icon = SERVICE_ICONS[service.iconName] || Code2;
                            return (
                              <div
                                key={service.id}
                                onClick={() => handleServiceSelect(service.slug)}
                                className="px-2.5 py-1.5 rounded-xl hover:bg-blue-500/10 dark:hover:bg-blue-500/20 text-slate-700 dark:text-slate-300 hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-all cursor-pointer group flex items-center justify-between gap-2"
                              >
                                <div className="flex items-center gap-2 min-w-0">
                                  <Icon className="w-3.5 h-3.5 text-[#2563EB] shrink-0 opacity-80 group-hover:opacity-100" />
                                  <span className="text-xs font-semibold truncate group-hover:font-bold">
                                    {service.shortTitle}
                                  </span>
                                </div>

                              </div>
                            );
                          })}
                        </div>
                      </div>


                    </div>

                  </div>
                )}


              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ========================================================
          MOBILE NAVIGATION DRAWER OVERLAY
      ======================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/65 backdrop-blur-sm lg:hidden touch-none"
            />

            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed top-[58px] sm:top-[64px] left-3 sm:left-4 right-3 sm:right-4 z-50 p-3 sm:p-4.5 rounded-2xl bg-white/95 dark:bg-[#0B1220]/95 backdrop-blur-2xl border border-stone-200/80 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.85)] lg:hidden max-h-[calc(100dvh-72px)] overflow-y-auto overscroll-contain"
            >
              <nav className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = currentActiveSection === item.id;
                  const isServices = item.id === "services";
                  const isAbout = item.id === "about";

                  // MOBILE SERVICES EXPANDABLE
                  if (isServices) {
                    return (
                      <div key={item.id} className="flex flex-col">
                        <div
                          className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-150 min-h-[44px] cursor-pointer ${isActive
                            ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/25"
                            : "text-stone-700 dark:text-stone-200 hover:text-[#2563EB] dark:hover:text-[#60A5FA] hover:bg-blue-500/10"
                            }`}
                        >
                          <Link
                            href="/services"
                            onClick={(e) => handleNavClick(e, item)}
                            className="flex items-center gap-3 flex-1"
                          >
                            <span className={`text-[11px] font-mono font-bold ${isActive ? "text-white/80" : "text-stone-400"}`}>
                              {item.number}
                            </span>
                            <span className="font-bold">{item.label}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 font-mono">
                              25
                            </span>
                          </Link>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setMobileServicesExpanded((prev) => !prev);
                            }}
                            className="p-1 rounded-md hover:bg-black/10 dark:hover:bg-white/10"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${mobileServicesExpanded ? "rotate-180" : ""
                                }`}
                            />
                          </button>
                        </div>

                        <AnimatePresence>
                          {mobileServicesExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4 pr-1 py-2 space-y-1.5"
                            >
                              <div className="flex items-center justify-between py-1 px-2 text-xs font-bold text-slate-500">
                                <span>SELECT A SERVICE (25 TOTAL):</span>
                                <Link
                                  href="/services"
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-[#2563EB] hover:underline"
                                >
                                  View all →
                                </Link>
                              </div>

                              <div className="max-h-60 overflow-y-auto space-y-1 pr-1">
                                {SERVICES_DATA.map((service) => {
                                  const Icon = SERVICE_ICONS[service.iconName] || Search;
                                  return (
                                    <div
                                      key={service.id}
                                      onClick={() => handleServiceSelect(service.slug)}
                                      className="flex items-center justify-between p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-blue-500/10 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
                                    >
                                      <div className="flex items-center gap-2 min-w-0">
                                        <Icon className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                                        <span className="truncate">{service.shortTitle}</span>
                                      </div>
                                      <span className="text-[10px] font-mono text-slate-400 shrink-0">
                                        #{service.num}
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  // MOBILE ABOUT EXPANDABLE
                  if (isAbout) {
                    return (
                      <div key={item.id} className="flex flex-col">
                        <div
                          className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-150 min-h-[44px] cursor-pointer ${isActive
                            ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/25"
                            : "text-stone-700 dark:text-stone-200 hover:text-[#2563EB] dark:hover:text-[#60A5FA] hover:bg-blue-500/10"
                            }`}
                        >
                          <Link
                            href="/about"
                            onClick={(e) => handleNavClick(e, item)}
                            className="flex items-center gap-3 flex-1"
                          >
                            <span className={`text-[11px] font-mono font-bold ${isActive ? "text-white/80" : "text-stone-400"}`}>
                              {item.number}
                            </span>
                            <span className="font-bold">{item.label}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 font-mono">
                              2
                            </span>
                          </Link>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setMobileAboutExpanded((prev) => !prev);
                            }}
                            className="p-1 rounded-md hover:bg-black/10 dark:hover:bg-white/10"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${mobileAboutExpanded ? "rotate-180" : ""
                                }`}
                            />
                          </button>
                        </div>

                        <AnimatePresence>
                          {mobileAboutExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4 pr-1 py-2 space-y-1.5"
                            >
                              {ABOUT_DROPDOWN_ITEMS.map((aboutItem) => {
                                const Icon = aboutItem.icon;
                                return (
                                  <div
                                    key={aboutItem.href}
                                    onClick={() => handleAboutSelect(aboutItem.href)}
                                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-blue-500/10 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
                                  >
                                    <div className="flex items-center gap-2.5 min-w-0">
                                      <Icon className="w-4 h-4 text-[#2563EB] shrink-0" />
                                      <div>
                                        <span className="font-bold block truncate">{aboutItem.title}</span>
                                        <span className="text-[10px] text-slate-400 block truncate">{aboutItem.badge}</span>
                                      </div>
                                    </div>
                                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                  </div>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-150 min-h-[44px] touch-manipulation active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${isActive
                        ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/25"
                        : "text-stone-700 dark:text-stone-200 hover:text-[#2563EB] dark:hover:text-[#60A5FA] hover:bg-blue-500/10"
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

              <div className="mt-3 pt-3 border-t border-stone-200/80 dark:border-white/10">
                <Link
                  href="/contact"
                  onClick={handleContactClick}
                  className="group inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-[#2563EB] text-white text-[13.5px] font-bold border hover:border-blue-800 shadow-md shadow-[#2563EB] hover:shadow-[#2563EB] hover:-translate-y-0.5 transition-all duration-300 min-h-[44px] touch-manipulation"
                >
                  <span className="relative z-10">Start a Project</span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

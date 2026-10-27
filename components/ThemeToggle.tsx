"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-stone-200 dark:border-orange-500/25 bg-stone-100/80 dark:bg-[#2563EB]/10" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="
        relative
        w-9
        h-9
        sm:w-10
        sm:h-10
        rounded-xl
        flex
        items-center
        justify-center
        border
        border-orange-200/90
        dark:border-orange-500/30
        bg-white/90
        dark:bg-[#111B2E]/90
        text-stone-700
        dark:text-[#14B8A6]
        shadow-sm
        dark:shadow-[0_0_20px_rgba(37,99,235,0.18)]
        hover:border-orange-400
        dark:hover:border-orange-500
        transition-all
        duration-300
        overflow-hidden
        cursor-pointer
      "
    >
      {/* Glow highlight */}
      <span className="absolute inset-0 bg-gradient-to-tr from-[#2563EB]/15 to-[#14B8A6]/15 opacity-0 dark:opacity-100 transition-opacity" />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative z-10 flex items-center justify-center"
        >
          {isDark ? (
            <Sun className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#14B8A6] drop-shadow-[0_0_8px_rgba(37,99,235,0.9)]" />
          ) : (
            <Moon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#2563EB]" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}

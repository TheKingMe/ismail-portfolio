"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toggleTheme();
  };

  // Before mounting, check if html already has 'dark' or 'light'
  const isDark = mounted ? theme === "dark" : true;

  return (
    <button
      onClick={handleClick}
      type="button"
      className={`relative p-2 rounded-xl transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-indigo-500/50 cursor-pointer select-none active:scale-95 ${
        isDark
          ? "bg-slate-900 border-slate-800 text-amber-400 hover:text-amber-300 hover:border-slate-700 shadow-sm"
          : "bg-white border-slate-200 text-indigo-600 hover:text-indigo-500 hover:border-slate-300 shadow-sm"
      } ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      id="theme-toggle-btn"
    >
      <div className="relative w-5 h-5 flex items-center justify-center pointer-events-none">
        {isDark ? (
          <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 scale-100" />
        ) : (
          <Moon className="w-4 h-4 transition-transform duration-300 rotate-0 scale-100" />
        )}
      </div>
    </button>
  );
}

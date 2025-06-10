"use client";

import { useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark" | "system";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  // Helper function to resolve the actual theme
  const resolveTheme = useCallback((currentTheme: Theme): "light" | "dark" => {
    if (currentTheme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return currentTheme as "light" | "dark";
  }, []);

  // Apply theme to DOM
  const applyTheme = useCallback((themeToApply: Theme) => {
    const root = document.documentElement;
    const resolved = resolveTheme(themeToApply);
    
    if (themeToApply === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.theme = themeToApply;
    }
    
    root.setAttribute("data-theme", resolved);
    
    // Force update resolvedTheme
    setResolvedTheme(resolved);
    
    return resolved;
  }, [resolveTheme]);

  // Mount effect
  useEffect(() => {
    setMounted(true);
    const savedTheme = (localStorage.theme as Theme) || "system";
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, [applyTheme]);

  // Theme change effect
  useEffect(() => {
    if (!mounted) return;
    applyTheme(theme);
  }, [theme, mounted, applyTheme]);

  // Listen for system theme changes when in system mode
  useEffect(() => {
    if (!mounted || theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      const root = document.documentElement;
      const newTheme = e.matches ? "dark" : "light";
      root.setAttribute("data-theme", newTheme);
      setResolvedTheme(newTheme);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, mounted]);

  const setLightMode = useCallback(() => {
    setTheme("light");
    if (mounted) {
      // Immediately apply for instant feedback
      const root = document.documentElement;
      localStorage.theme = "light";
      root.setAttribute("data-theme", "light");
      setResolvedTheme("light");
    }
  }, [mounted]);
  
  const setDarkMode = useCallback(() => {
    setTheme("dark");
    if (mounted) {
      // Immediately apply for instant feedback
      const root = document.documentElement;
      localStorage.theme = "dark";
      root.setAttribute("data-theme", "dark");
      setResolvedTheme("dark");
    }
  }, [mounted]);
  
  const setSystemMode = useCallback(() => {
    setTheme("system");
    if (mounted) {
      // Immediately apply for instant feedback
      const root = document.documentElement;
      localStorage.removeItem("theme");
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.setAttribute("data-theme", systemTheme);
      setResolvedTheme(systemTheme);
    }
  }, [mounted]);

  return {
    theme,
    setTheme,
    setLightMode,
    setDarkMode,
    setSystemMode,
    mounted,
    resolvedTheme,
  };
};
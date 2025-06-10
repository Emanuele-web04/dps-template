"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@/hooks/useTheme";
import { Theme } from "@/types/theme";
import { themes } from "@/lib/themes";
import { cn } from "@/lib/cn";
import { LuCheck, LuMonitor, LuMoon, LuSun } from "react-icons/lu";
import useKeyboardShortcut from "@/hooks/useKeyboardShortcut";

const ThemeToggle = () => {
  const { theme, setLightMode, setDarkMode, setSystemMode, mounted } =
    useTheme();

  // Find current theme object based on active theme
  const getCurrentTheme = (): Theme => {
    return themes.find((t) => t.themeName.toLowerCase() === theme) || themes[0];
  };

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentTheme = getCurrentTheme();
  const Icon = currentTheme.icon;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  useKeyboardShortcut("alt+shift+t", () => setOpen((prev) => !prev));
  useKeyboardShortcut("alt+shift+l", () => setLightMode());
  useKeyboardShortcut("alt+shift+d", () => setDarkMode());
  useKeyboardShortcut("alt+shift+s", () => setSystemMode());

  // Unified theme handler
  const handleThemeChange = (selectedTheme: Theme) => {
    switch (selectedTheme.themeName.toLowerCase()) {
      case "light":
        setLightMode();
        break;
      case "dark":
        setDarkMode();
        break;
      case "system":
        setSystemMode();
        break;
    }
  };

  // Render loading state
  if (!mounted) {
    return (
      <div className="p-2 rounded-md">
        <div className="w-4 h-4 bg-neutral-300 dark:bg-neutral-600 rounded animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="flex relative" ref={dropdownRef}>
      {/* Mobile Layout - 3 inline buttons with desktop styling */}
      <div className="flex lg:hidden cursor-pointer items-center gap-1 bg-white dark:bg-neutral-900 rounded-xl p-1  ">
        {themes.map((themeOption, i) => {
          const ThemeIcon = themeOption.icon;
          const isSelected = currentTheme === themeOption;

          return (
            <button
              key={i}
              onClick={() => handleThemeChange(themeOption)}
              className={cn(
                "flex items-center nav-p hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg px-1.5 py-0.5",
                isSelected ? "text-black! dark:text-white!" : ""
              )}
              aria-label={`${themeOption.themeName} mode`}
            >
              <div className="flex items-center gap-2">
                <ThemeIcon className="w-5 h-5" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Desktop Layout - Dropdown */}
      <span className="relative hidden lg:block">
        <button
          onClick={() => setOpen(!open)}
          className="cursor-pointer hover:shadow-md p-2 hover:rounded-lg hover:ring-1 hover:ring-neutral-200 dark:hover:ring-neutral-600 flex items-center gap-1 nav-p"
        >
          <Icon className="w-4 h-4" />
        </button>
        <span
          className={cn(
            "absolute top-10 right-0 lg:w-70 justify-start items-start bg-white dark:bg-neutral-900 p-2 transition-all rounded-xl ring-1 ring-neutral-200 dark:ring-neutral-800",
            open
              ? "opacity-100 scale-100 shadow-lg dark:shadow-black/40"
              : "opacity-0 scale-0 cursor-none pointer-events-none"
          )}
        >
          {themes.map((themeOption, i) => {
            const ThemeIcon = themeOption.icon;
            const isSelected = currentTheme.themeName === themeOption.themeName;

            return (
              <button
                key={i}
                onClick={() => handleThemeChange(themeOption)}
                className={cn(
                  "flex items-center nav-p hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg w-full px-3 py-2.5",
                  isSelected ? "text-black dark:text-white!" : ""
                )}
              >
                <div className="flex items-center gap-2 w-full">
                  <ThemeIcon className="w-4 h-4" />
                  <p>{themeOption.themeName}</p>
                </div>

                <div className="flex items-center gap-1">
                  {themeOption.shortcutIcons.map((icon, i) => {
                    const Icon = icon;
                    return <Icon key={i} className="w-3 h-3" />;
                  })}
                  <p className="text-sm font-light">{themeOption.key}</p>
                  {isSelected && <LuCheck className="w-4 h-4" />}
                </div>
              </button>
            );
          })}
        </span>
      </span>
    </div>
  );
};

export default ThemeToggle;

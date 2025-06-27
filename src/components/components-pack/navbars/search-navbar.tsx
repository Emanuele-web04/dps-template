"use client";
import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { TbMenu, TbSun, TbMoon, TbSearch } from "react-icons/tb";
import { cn } from "@/lib/cn";

const DevStudioLogo = () => (
  <div className="flex items-center gap-2">
    <div className="bg-black dark:bg-white p-1 rounded-md">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white dark:text-black"
      >
        <path d="M12 2L1.65 21H4.35L7.5 14H16.5L19.65 21H22.35L12 2ZM8.25 12L12 5L15.75 12H8.25Z" />
      </svg>
    </div>
    <span className="font-bold hidden lg:block text-lg text-black dark:text-white">
      DevStudio
    </span>
  </div>
);

const navLinks = [
  { name: "Components", href: "#" },
  { name: "Templates", href: "#", new: false },
  { name: "Pricing", href: "#" },
];

export default function SearchNavbar() {
  const [isThemeDark, setIsThemeDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => setIsThemeDark(!isThemeDark);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl">
        <nav className="bg-white/80 text-black dark:bg-neutral-800/50 dark:text-white backdrop-blur-2xl p-3 rounded-xl shadow-lg w-full border border-r-0 border-l-0 border-t-blue-500/30 border-b-sky-500/30">
          {/* Desktop & Tablet Navbar */}
          <div className="hidden md:flex items-center justify-between gap-4">
            <DevStudioLogo />
            <div className="hidden lg:flex items-center gap-x-6 text-sm text-neutral-600 dark:text-neutral-300 font-light">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-x-4">
              <button
                onClick={toggleTheme}
                className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
              >
                {isThemeDark ? <TbMoon /> : <TbSun />}
              </button>
              <div className="flex items-center gap-x-2 bg-gray-100/80 dark:bg-neutral-800/80 border border-gray-300 dark:border-neutral-700 rounded-lg px-3 py-1.5 focus-within:ring-2 focus-within:ring-blue-500 w-55">
                <TbSearch className="text-neutral-500 dark:text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search Components"
                  className="bg-transparent focus:outline-none w-full text-sm placeholder:text-neutral-500 text-black dark:text-white"
                />
                <div className="text-xs text-neutral-500 dark:text-neutral-400 bg-gray-200/50 dark:bg-neutral-700/50 border border-gray-300/80 dark:border-neutral-600/80 rounded px-1.5 py-0.5">
                  ⌘K
                </div>
              </div>
              <button
                onClick={toggleMenu}
                className="lg:hidden text-black dark:text-white p-2"
              >
                {isMenuOpen ? <HiX /> : <TbMenu />}
              </button>
            </div>
          </div>

          {/* Mobile Navbar */}
          <div className="md:hidden flex items-center justify-between">
            <DevStudioLogo />
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="text-black dark:text-white p-2"
              >
                {isThemeDark ? <TbMoon /> : <TbSun />}
              </button>
              <button className="text-black dark:text-white p-2">
                <TbSearch />
              </button>
              <button
                onClick={toggleMenu}
                className="text-black dark:text-white p-2"
              >
                {isMenuOpen ? <HiX /> : <TbMenu />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Accordion Menu */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out mt-2",
            isMenuOpen ? "max-h-screen" : "max-h-0"
          )}
        >
          <div className="bg-white dark:bg-black rounded-xl p-4 flex flex-col gap-y-2 text-neutral-700 dark:text-neutral-300 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-black dark:hover:text-white p-2 rounded-md transition-colors flex justify-between"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="bg-white dark:bg-black rounded-xl p-4 flex-col gap-y-2 text-neutral-700 dark:text-neutral-300 hidden md:flex lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-black dark:hover:text-white p-2 rounded-md transition-colors flex justify-between"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

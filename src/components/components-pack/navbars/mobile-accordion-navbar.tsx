"use client";

import React, { useState } from "react";
import { HiX, HiChevronDown } from "react-icons/hi";
import { TbMenu } from "react-icons/tb";
import { cn } from "@/lib/cn";

const DevStudioLogo = () => (
  <div className="flex items-center gap-2">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="text-black dark:text-white"
    >
      <path d="M12 2L1.65 21H4.35L7.5 14H16.5L19.65 21H22.35L12 2ZM8.25 12L12 5L15.75 12H8.25Z" />
    </svg>
    <span className="font-semibold text-neutral-900 dark:text-white">
      DevStudio
    </span>
  </div>
);

const DevStudioLogoInverted = () => (
  <div className="flex items-center gap-2">
    <div className="bg-white dark:bg-black p-1 rounded-md">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="text-black dark:text-white"
      >
        <path d="M12 2L1.65 21H4.35L7.5 14H16.5L19.65 21H22.35L12 2ZM8.25 12L12 5L15.75 12H8.25Z" />
      </svg>
    </div>
    <span className="font-semibold text-white dark:text-white">DevStudio</span>
  </div>
);

export default function FullNavGlass() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full ">
      {/* Desktop Navbar - Glassmorphism */}
      <nav className="hidden lg:flex items-center justify-between w-full h-20 px-8 bg-black/80 dark:bg-neutral-800/50 backdrop-blur-2xl border-b border-neutral-800/50 sticky top-0 z-50">
        <DevStudioLogoInverted />
        <div className="flex items-center gap-x-8">
          <a
            href="#"
            className="text-neutral-300 dark:text-neutral-300 hover:text-white dark:hover:text-white transition-colors"
          >
            Services
          </a>
          <a
            href="#"
            className="text-neutral-300 dark:text-neutral-300 hover:text-white dark:hover:text-white transition-colors"
          >
            Products
          </a>
          <a
            href="#"
            className="text-neutral-300 dark:text-neutral-300 hover:text-white dark:hover:text-white transition-colors"
          >
            Pricing
          </a>
        </div>
        <button className="bg-white dark:bg-black text-black dark:text-white px-5 py-2 rounded-lg font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors">
          Book a call
        </button>
      </nav>

      {/* --- Mobile Version --- */}
      <div className="lg:hidden w-full">
        {/* Mobile Header */}
        <nav className="flex items-center justify-between w-full h-20 px-6 bg-white dark:bg-black border-b border-neutral-200 dark:border-neutral-800">
          <DevStudioLogo />
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-neutral-900 dark:text-white"
          >
            {isMenuOpen ? (
              <HiX className="w-7 h-7" />
            ) : (
              <TbMenu className="w-7 h-7" />
            )}
          </button>
        </nav>

        {/* Accordion Content */}
        <div
          className={cn(
            "overflow-hidden bg-white dark:bg-black transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-screen" : "max-h-0"
          )}
        >
          {/* Menu Items */}
          <div className="flex flex-col border-b border-neutral-200 dark:border-neutral-800">
            <div className="border-t border-neutral-200 dark:border-neutral-800">
              <button className="w-full flex items-center justify-between p-4 text-left text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                <span className="text-base">Services</span>
                <HiChevronDown className="w-5 h-5 text-neutral-400" />
              </button>
            </div>
            <div className="border-t border-neutral-200 dark:border-neutral-800">
              <button className="w-full flex items-center justify-between p-4 text-left text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                <span className="text-base">Products</span>
                <HiChevronDown className="w-5 h-5 text-neutral-400" />
              </button>
            </div>
            <div className="border-t border-neutral-200 dark:border-neutral-800">
              <button className="w-full flex items-center justify-between p-4 text-left text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                <span className="text-base">Pricing</span>
                <HiChevronDown className="w-5 h-5 text-neutral-400" />
              </button>
            </div>
          </div>

          {/* Book a Call Button */}
          <div className="p-4">
            <button className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-xl font-semibold text-base hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
              Book a call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

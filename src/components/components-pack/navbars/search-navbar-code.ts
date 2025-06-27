export const searchNavbarCode = `"use client";
import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import {
  TbMenu,
  TbSun,
  TbMoon,
  TbSearch,
  TbBrandDiscord,
  TbBrandTwitter,
} from "react-icons/tb";
import { cn } from "@/lib/cn";

const AceternityLogo = () => (
  <div className="flex items-center gap-2">
    <div className="bg-white p-1 rounded-md">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L2 7L12 12L22 7L12 2Z"
          fill="black"
          stroke="black"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M2 17L12 22L22 17"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12L12 17L22 12"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <span className="font-bold text-lg text-white">Aceternity UI</span>
  </div>
);

const navLinks = [
  { name: "Components", href: "#" },
  { name: "Templates", href: "#", new: true },
  { name: "Pricing", href: "#" },
  { name: "Showcase", href: "#" },
  { name: "Playground", href: "#" },
];

const socialLinks = [
  { name: "Discord", href: "#", icon: TbBrandDiscord },
  { name: "Twitter", href: "#", icon: TbBrandTwitter },
];

export default function SearchNavbar() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="w-full flex justify-center p-4 bg-white dark:bg-black">
      <div className="w-full max-w-7xl">
        <nav className="bg-black text-white p-3 rounded-xl shadow-lg w-full border-t border-blue-500/30">
          {/* Desktop & Tablet Navbar */}
          <div className="hidden md:flex items-center justify-between gap-4">
            <AceternityLogo />
            <div className="hidden lg:flex items-center gap-x-6 text-sm text-neutral-300 font-light">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-white transition-colors flex items-center gap-2">
                  {link.name}
                  {link.new && (
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-0.5 rounded-full border border-emerald-500/50">
                      new
                    </span>
                  )}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-x-4">
              <div className="hidden xl:flex items-center gap-x-4 text-neutral-400">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a key={link.name} href={link.href} className="hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
              <button onClick={toggleTheme} className="text-neutral-400 hover:text-white transition-colors">
                {isDark ? <TbSun /> : <TbMoon />}
              </button>
              <div className="relative">
                <TbSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search Components"
                  className="bg-neutral-900/50 border border-neutral-700 rounded-lg pl-10 pr-4 py-1.5 text-sm w-48 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-neutral-500 bg-neutral-800 border border-neutral-700 rounded px-1.5 py-0.5">
                  ⌘K
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navbar */}
          <div className="md:hidden flex items-center justify-between">
            <AceternityLogo />
            <div className="flex items-center gap-2">
              <button onClick={toggleTheme} className="text-neutral-300 p-2">
                {isDark ? <TbSun /> : <TbMoon />}
              </button>
              <button className="text-neutral-300 p-2">
                <TbSearch />
              </button>
              <button onClick={toggleMenu} className="text-neutral-300 p-2">
                {isMenuOpen ? <HiX /> : <TbMenu />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Accordion Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out mt-2",
            isMenuOpen ? "max-h-screen" : "max-h-0"
          )}
        >
          <div className="bg-black rounded-xl p-4 flex flex-col gap-y-2 text-neutral-300">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-white p-2 rounded-md transition-colors flex justify-between">
                {link.name}
                {link.new && (
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-0.5 rounded-full border border-emerald-500/50">
                        new
                    </span>
                )}
              </a>
            ))}
            <div className="border-t border-neutral-800 my-2"></div>
             {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                    <a key={link.name} href={link.href} className="flex items-center gap-x-3 p-2 rounded-md hover:text-white transition-colors">
                        <Icon className="w-5 h-5"/>
                        <span>{link.name}</span>
                    </a>
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
"`; 
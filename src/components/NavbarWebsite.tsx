"use client";

import { navSocials } from "@/lib/navSocials";
import Link from "next/link";
import React, { useState } from "react";
import { navbarLinks } from "@/lib/navbarLinks";
import { TbMenu, TbX } from "react-icons/tb";
import LogoTitle from "./LogoTitle";
import ThemeToggle from "./ThemeToggle";
import { PiOption } from "react-icons/pi";
import { BsShift } from "react-icons/bs";

const NavbarWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar normale */}
      <div className="flex mx-auto max-w-[1600px] items-center w-full justify-between">
        <div className="flex items-center gap-12">
          <LogoTitle visible={false} />

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-5">
            {navbarLinks.map((nav, i) => (
              <div key={i} className="flex font-inter items-center nav-p">
                {nav.name}
                {nav.name == "SwiftUI" && (
                  <p className="font-mono text-xs text-orange-500 px-1.5 py-0.5 border border-orange-500 rounded-lg">
                    iOS
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Social Links */}
        <div className="hidden lg:flex items-center gap-5">
          {navSocials.map((social, i) => (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={social.link}
              key={i}
              className={`${social.name == "YouTube" ? "text-2xl" : "text-xl"}`}
            >
              <p className="nav-p">{social.name}</p>
            </Link>
          ))}
          <ThemeToggle />
          <a
            href="mailto:emandipietro@gmail.com"
            className="bg-black dark:bg-white text-white dark:text-black font-inter text-sm tracking-tight font-semibold px-3 py-1.5 cursor-pointer rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-200 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-2xl block lg:hidden transition-all hover:text-black dark:hover:text-white z-50 relative text-neutral-700 dark:text-neutral-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <TbX /> : <TbMenu />}
        </button>
      </div>

      {/* Full Screen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white dark:bg-black min-h-screen min-w-screen z-40 lg:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex font-inter tracking-tighter flex-col items-start mt-12 justify-start h-full p-6 md:p-12 text-center">
          {/* Navigation Links */}
          <div className="space-y-6 md:space-y-8 mb-12">
            {navbarLinks.map((nav, i) => (
              <div
                key={i}
                onClick={closeMenu}
                className="flex items-center justify-start text-left hover:text-black dark:hover:text-white cursor-pointer transition-all text-neutral-700 dark:text-white gap-3 font-inter tracking-tight font-medium text-xl"
              >
                {nav.name}
                {nav.name === "SwiftUI" && (
                  <p className="font-mono text-xs text-orange-500 px-1 py-0.5 border border-orange-500 rounded-lg">
                    iOS
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-center items-start space-y-6 md:space-y-8 mb-12">
            {navSocials.map((social, i) => (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={social.link}
                key={i}
                onClick={closeMenu}
                className="text-neutral-700 dark:text-white transition-all hover:text-black dark:hover:text-white cursor-pointer text-xl font-medium font-inter tracking-tight"
              >
                {social.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle for Mobile */}
          <div className="mb-8 flex">
            <ThemeToggle />
           
          </div>

          {/* Contact Button */}
          <a
            href="mailto:emandipietro@gmail.com"
            onClick={closeMenu}
            className="bg-black dark:bg-white text-white dark:text-black font-inter text-base md:text-lg font-medium px-4 py-2 rounded-full transition-all hover:bg-neutral-800 dark:hover:bg-neutral-200"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default NavbarWebsite;

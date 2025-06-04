"use client";

import { navSocials } from "@/lib/navSocials";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { navbarLinks } from "@/lib/navbarLinks";
import { TbMenu, TbX } from "react-icons/tb";
import LogoTitle from "./LogoTitle";

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
      <div className="flex max-w-[1600px] items-center w-full justify-between">
        <div className="flex items-center gap-12">
          <LogoTitle visible={false}/>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-5">
            {navbarLinks.map((nav, i) => (
              <div
                key={i}
                className="flex items-center nav-p"
              >
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
              <p className="text-neutral-400 transition-all hover:text-white cursor-pointer text-sm font-semibold font-inter tracking-tighter">
                {social.name}
              </p>
            </Link>
          ))}
          <a
            href="mailto:emandipietro@gmail.com"
            className="bg-white text-black font-inter text-sm font-semibold px-3 py-1.5 cursor-pointer rounded-lg"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-2xl block lg:hidden transition-all hover:text-white z-50 relative"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <TbX /> : <TbMenu />}
        </button>
      </div>

      {/* Full Screen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black min-h-screen min-w-screen  z-40 lg:hidden transition-all duration-500 ease-in-out ${
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
                className="flex items-center justify-start text-left hover:text-white cursor-pointer transition-all text-white gap-3 font-inter tracking-tight font-medium text-2xl"
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
                className="text-white transition-all hover:text-white cursor-pointer text-2xl font-medium font-inter tracking-tight"
              >
                {social.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <a
            href="mailto:emandipietro@gmail.com"
            onClick={closeMenu}
            className="bg-white text-black font-inter text-base md:text-lg font-semibold px-4 py-2 rounded-lg transition-all hover:bg-neutral-200"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default NavbarWebsite;

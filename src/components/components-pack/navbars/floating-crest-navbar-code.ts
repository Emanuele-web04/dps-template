export const floatingCrestNavbarCode = `"use client";
import React, { useState } from "react";
import { HiChevronDown, HiArrowRight, HiX } from "react-icons/hi";
import { TbSun, TbMenu } from "react-icons/tb";
import { cn } from "@/lib/cn";

const CrestLogo = () => (
    <div className="flex items-center gap-2">
        <div className="bg-indigo-500/80 p-2 rounded-full flex items-center justify-center">
            <TbSun className="w-5 h-5 text-indigo-100" />
        </div>
        <span className="font-semibold text-lg text-neutral-100">Crest</span>
    </div>
);

const navLinks = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#" },
    { name: "Why Us", href: "#" },
    { name: "Benefits", href: "#" },
    { name: "Testimonials", href: "#" },
];

export default function FloatingCrestNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="w-full flex justify-center p-4 bg-gray-100 dark:bg-gray-900">
            <div className="w-full max-w-6xl">
                {/* Desktop Navbar */}
                <nav className="hidden lg:flex items-center justify-between px-3 py-2 bg-[#1C1C1C] rounded-full text-white shadow-lg border border-white/10 w-full">
                    <CrestLogo />
                    <div className="flex items-center gap-6 text-sm font-medium text-neutral-400">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="hover:text-white transition-colors">
                                {link.name}
                            </a>
                        ))}
                        <button className="flex items-center gap-1 hover:text-white transition-colors">
                            <span>Pages</span>
                            <HiChevronDown className="w-4 h-4" />
                        </button>
                    </div>
                    <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors">
                        <span>Download App</span>
                        <HiArrowRight className="w-4 h-4" />
                    </button>
                </nav>

                {/* Mobile Navbar */}
                <div className="lg:hidden w-full">
                    <nav className="flex items-center justify-between px-3 py-2 bg-[#1C1C1C] rounded-full text-white shadow-lg border border-white/10 w-full">
                        <CrestLogo />
                        <button onClick={toggleMenu} className="p-2" aria-label="Toggle menu">
                            {isMenuOpen ? <HiX className="w-6 h-6" /> : <TbMenu className="w-6 h-6" />}
                        </button>
                    </nav>

                    {/* Accordion Menu */}
                    <div
                        className={cn(
                            "overflow-hidden transition-all duration-300 ease-in-out mt-2",
                            isMenuOpen ? "max-h-screen" : "max-h-0"
                        )}
                    >
                        <div className="bg-[#1C1C1C] rounded-3xl p-4 flex flex-col gap-y-4">
                            <div className="flex flex-col gap-y-2 text-base font-medium text-neutral-300">
                                {navLinks.map((link) => (
                                    <a key={link.name} href={link.href} className="hover:text-white transition-colors p-2 rounded-md">
                                        {link.name}
                                    </a>
                                ))}
                                <button className="flex items-center justify-between p-2 rounded-md hover:text-white transition-colors">
                                    <span>Pages</span>
                                    <HiChevronDown className="w-4 h-4" />
                                </button>
                            </div>
                            <button className="w-full flex items-center justify-center gap-2 bg-white text-black px-4 py-3 rounded-xl text-base font-semibold hover:bg-neutral-200 transition-colors">
                                <span>Download App</span>
                                <HiArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
"`; 
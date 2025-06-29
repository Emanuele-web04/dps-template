"use client";
import { useState } from "react";
import {
  HiChevronRight,
  HiPaperAirplane,
  HiTicket,
  HiClock,
  HiCreditCard,
  HiRocketLaunch,
  HiBars3,
} from "react-icons/hi2";
import { HiX } from "react-icons/hi";
import { cn } from "@/lib/cn";

export default function FuturisticHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Start Here", href: "#" },
    { name: "Benefits", href: "#" },
    { name: "Process", href: "#" },
    { name: "Compare", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "FAQs", href: "#" },
  ];
  return (
    <div className="min-h-screen font-inter tracking-tight bg-neutral-50">
      {/* Navigation Header */}
      <nav className="pt-6 sticky top-0 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-l border-r border-neutral-200">
        <div className="max-w-7xl shadow-lg shadow-neutral-200 bg-white border rounded-full border-neutral-100 mx-auto p-2">
          <div className="flex justify-between items-center ">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className=" rounded-lg pl-2">
                  <HiTicket className="w-6 h-6 text-black " />
                </div>
                <span className="text-xl font-bold text-black hidden md:block">
                  Tickeeets
                </span>
              </div>
            </div>

            {/* Navigation Links - Hidden on mobile */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`${
                      link.name === "Start Here"
                        ? "text-black font-medium hover:text-neutral-600"
                        : "text-neutral-600 hover:text-black"
                    } transition-colors`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Button and Mobile Menu Button */}
            <div className="flex items-center space-x-2">
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 rounded-full hover:bg-neutral-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <HiX className="w-6 h-6 text-black" />
                ) : (
                  <HiBars3 className="w-6 h-6 text-black" />
                )}
              </button>

              {/* CTA Button */}
              <button className="bg-black text-white px-4 sm:px-6 py-2 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors">
                View Plans
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out mt-2",
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-white border border-neutral-200 rounded-3xl p-4 shadow-lg shadow-neutral-200 mx-auto max-w-7xl">
            <div className="flex flex-col gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`${
                    link.name === "Start Here"
                      ? "text-black font-medium"
                      : "text-neutral-600"
                  } hover:text-black transition-colors p-3 rounded-lg hover:bg-neutral-50`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Hero Content */}
      <div className="max-w-7xl relative mx-auto border-l border-r border-neutral-200 px-4 sm:px-6 lg:px-8 pt-20">
        {/* New Feature Badge */}
        <div className="flex justify-center mb-12">
          <div className="bg-white ring-1 ring-neutral-200 text-white rounded-full p-1 flex items-center space-x-3">
            <span className="md:text-sm text-xs font-light bg-black shadow-lg px-3 py-1.5 rounded-full">
              New 🎉
            </span>
            <span className="md:text-sm text-xs text-neutral-900 pr-2">
              Make guests feel special with Guest Feature
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center  mb-8">
          <h1 className="font-inter tracking-tighter bg-gradient-to-br from-neutral-950 to-neutral-600 bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl font-semibold text-black leading-tight mb-4">
            A ticket system
            <br />
            acting like an{" "}
            <span className="bg-gradient-to-b from-teal-50 via-teal-700/20 to-teal-50 text-emerald-700 font-semibold px-6 pb-1 md:pb-2 rounded-full inline-block border border-teal-700/20">
              <p className="bg-gradient-to-b from-teal-500/80 to-teal-600/80 bg-clip-text text-transparent pr-0.5">
                Organiser
              </p>
            </span>
          </h1>
        </div>

        {/* Subheading */}
        <div className="text-center mb-12">
          <p className="text-neutral-600 max-w-3xl mx-auto leading-relaxed px-4">
            Not your average ticketing tool. Ticketapp is a hybrid control tower
            for both your street sellers and digital wizards. Built for chaos,
            designed for clarity.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-32">
          <button className="bg-black border-t-2 border-t-neutral-600 ring-1 ring-black text-white px-8 py-4 rounded-full md:text-lg font-medium hover:bg-neutral-800 transition-colors flex items-center space-x-2">
            <HiPaperAirplane className="w-5 h-5" />
            <span>Get an Invite</span>
          </button>
          <button className="bg-white text-black px-8 py-4 rounded-full md:text-lg font-medium border border-neutral-200 hover:bg-neutral-50 transition-colors flex items-center space-x-3">
            <div className="w-8 h-8 bg-neutral-300 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-neutral-500 rounded-full"></div>
            </div>
            <span>Book a Call</span>
          </button>
        </div>

        <span className="block w-full h-px bg-neutral-200 absolute top-10 -translate-x-1/2 left-1/2"></span>
        <span className="block w-full h-px bg-neutral-200 absolute top-10 md:bottom-10 -translate-x-1/2 left-1/2"></span>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="bg-white rounded-3xl p-1.5 shadow-sm hover:shadow-md transition-all duration-300 -rotate-3">
              <div className="bg-neutral-50 rounded-2xl p-3">
                <div className="flex justify-center my-6">
                  <HiClock className="w-14 h-14 text-black" />
                </div>
                <div className="">
                  <span className="text-neutral-400 text-sm font-black tracking-tighter uppercase">
                    STEP 1:
                  </span>
                </div>
                <div className="-space-y-2">
                  <p className="text-neutral-400 text-lg leading-relaxed font-semibold">
                    Set up your{" "}
                    <span className="text-black font-semibold">
                      event in minutes
                    </span>
                    :
                  </p>
                  <p className="text-neutral-400 text-lg leading-relaxed font-semibold">
                    name it, date it,{" "}
                    <span className="text-black font-semibold">done</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-3xl p-1.5 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="bg-neutral-50 rounded-2xl p-3">
                <div className="flex justify-center my-6">
                  <HiCreditCard className="w-14 h-14 text-black" />
                </div>
                <div className="">
                  <span className="text-neutral-400 text-sm font-black tracking-tighter uppercase">
                    STEP 2:
                  </span>
                </div>
                <div className="-space-y-2">
                  <p className="text-neutral-400 text-lg leading-relaxed font-semibold">
                    Add{" "}
                    <span className="text-black font-semibold">
                      tickets, promos,
                    </span>{" "}
                    and
                  </p>
                  <p className="text-neutral-400 text-lg leading-relaxed font-semibold">
                    <span className="text-black font-semibold">payment</span>{" "}
                    rules like a pro.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-3xl p-1.5 shadow-sm hover:shadow-md transition-all duration-300 rotate-3">
              <div className="bg-neutral-50 rounded-2xl p-3">
                <div className="flex justify-center my-6">
                  <HiRocketLaunch className="w-14 h-14 text-black" />
                </div>
                <div className="">
                  <span className="text-neutral-400 text-sm font-black tracking-tighter uppercase">
                    STEP 3:
                  </span>
                </div>
                <div className="-space-y-2">
                  <p className="text-neutral-400 text-lg leading-relaxed font-semibold">
                    <span className="text-black font-semibold">
                      Share your link
                    </span>{" "}
                    and watch the
                  </p>
                  <p className="text-neutral-400 text-lg leading-relaxed font-semibold">
                    <span className="text-black font-semibold">sales</span> fly
                    in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const gradientWaitlistCode = `"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import GlassyBanner from "@/components/ui/GlassyBanner";

const NavLink = ({
  href,
  children,
  dropdown = false,
}: {
  href: string;
  children: React.ReactNode;
  dropdown?: boolean;
}) => (
  <Link
    href={href}
    className="flex items-center text-white/80 transition-colors hover:text-white"
  >
    {children}
    {dropdown && <FiChevronDown className="ml-1" />}
  </Link>
);

export const GradientWaitlist = () => {
  return (
    <div className="relative w-full overflow-clip h-screen bg-black p-4 font-sans">
      {/* Animated Gradients */}
      <div className="absolute -bottom-1/3 -left-1/3 w-3/4 h-3/4">
        <div className="w-full h-full bg-gradient-to-r from-fuchsia-600 animate-pulse to-purple-600 rounded-full blur-[150px] animate-spin-slow opacity-40" />
      </div>
      <div className="absolute -bottom-1/3 -right-1/3 w-3/4 h-3/4">
        <div className="w-full h-full bg-gradient-to-r from-yellow-400 animate-pulse to-orange-500 rounded-full blur-[150px] animate-spin-slow-reverse opacity-40" />
      </div>

      <div className="relative z-10 flex flex-col items-center min-h-screen">
        {/* Navbar */}
        <nav className="flex w-full max-w-7xl items-center justify-between px-6 py-4 ring-1 ring-neutral-800 rounded-full">
          <div className="flex items-center space-x-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="white"
                strokeOpacity="0.5"
                strokeWidth="2"
              />
              <path
                d="M12 6C9.23858 6 7 8.23858 7 11"
                stroke="white"
                strokeOpacity="0.5"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-xl font-bold text-white">Mailfy</span>
          </div>
          <div className="hidden items-center space-x-6 text-sm md:flex">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#" dropdown>
              Blog
            </NavLink>
            <NavLink href="#" dropdown>
              Pages
            </NavLink>
          </div>
          <div className="flex items-center space-x-2">
            <Link
              href="#"
              className="px-4 py-2 text-sm text-white/80 transition-colors hover:text-white"
            >
              Log In
            </Link>
            <Link
              href="#"
              className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black shadow-lg transition-transform hover:scale-105"
            >
              Sign Up
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex flex-1 flex-col items-center justify-center text-center mt-4 sm:mt-8">
          <GlassyBanner text="v1 launching soon" />
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-7xl mt-6">
            Increasing your leads,
            <br /> meetings and deals
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/70 sm:text-lg">
            Efficiently manage and resolve customer issues, improve satisfaction
            and boost your bottom line with our all-in-one customer support
            solution.
          </p>

          {/* Waitlist Form */}
          <form className="mt-8 flex w-full max-w-md flex-col items-center gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full flex-grow rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur-sm placeholder-white/50 transition-all focus:border-white/50 focus:outline-none focus:ring-1 focus:ring-white/50"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto shrink-0 rounded-full bg-white px-6 py-3 font-medium text-black shadow-lg transition-all duration-200 hover:scale-105 border-b-4 border-neutral-300 active:border-b-0 active:scale-[1.02]"
            >
              Join Waitlist
            </button>
          </form>

          {/* Central Image */}
          <div className="mt-12 z-40 w-full max-w-5xl">
            <Image
              src="https://ai-saas-dpstemplate.vercel.app/_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2F4xOED0byZOH13sNKFtDxx2ou220.png&w=3840&q=75"
              alt="Mail App Preview"
              width={1200}
              height={782}
              layout="responsive"
              priority
              className="rounded-xl border border-white/10 shadow-2xl shadow-black/40"
            />
          </div>
        </main>
      </div>
    </div>
  );
};
`; 
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { FaApple } from "react-icons/fa6";

type NavLink = {
  title: string;
  path: string;
};

export const navlinks: NavLink[] = [
  { title: "Features", path: "#features" },
  { title: "FAQ", path: "#faq" },
];

const KhronaHero = () => {
  return (
    <main
      className="text-zinc-900 font-inter tracking-tight min-h-screen relative flex flex-col w-full justify-center max-w-full"
      style={{
        backgroundImage:
          "radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.6px, transparent 0)",
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Fixed bar at bottom — kept as is */}
      <div className="z-10 fixed flex items-center justify-between px-4 py-3 bottom-5 left-1/2 transform -translate-x-1/2 bg-neutral-100/10 backdrop-blur-lg ring-1 ring-neutral-200 rounded-xl shadow-lg max-w-md w-[90%] mx-auto">
        <Link href={"#home"} className="flex items-center space-x-2">
          <Image
            alt="logo"
            src={"/khrona-hero/k3dblack-min.png"}
            width={100}
            height={100}
            className="w-[20px] h-[20px] rounded-full"
          />
          <h3 className="font-medium">Khrona</h3>
        </Link>

        <div className="flex items-center space-x-6">
          {navlinks.map((nav, i) => (
            <div
              key={i}
              className="hover:text-[--korange] text-sm font-medium tracking-tight transition-colors"
            >
              <Link href={nav.path}>{nav.title}</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-10 py-10 w-full max-w-full"
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10">
          <div className="flex flex-col space-y-6 text-left w-full md:w-1/2">
            <div className="flex items-center gap-2">
              <Image
                alt="logo"
                src={"/khrona-hero/k3dblack-min.png"}
                width={300}
                height={300}
                className="rounded-md w-8 h-8 transition-all duration-1000"
                priority
              />
              <h6 className="font-bold text-lg tracking-wider">Khrona</h6>
            </div>
            <h1 className="text-4xl lg:text-5xl font-inter md:text-left text-center w-full font-black tracking-tight flex flex-col -gap-y-2 leading-tight">
              <span className="bg-gradient-to-br from-neutral-950 to-neutral-600 bg-clip-text text-transparent">
                Track your life.
              </span>{" "}
              <span className="bg-gradient-to-br from-neutral-950 to-neutral-600 bg-clip-text text-transparent">
                Understand your
              </span>{" "}
              <span className="bg-gradient-to-br from-neutral-950 to-neutral-600 bg-clip-text text-transparent">
                days.
              </span>
            </h1>
            <p className="md:text-base text-sm text-neutral-600 md:text-left text-center tracking-tight leading-relaxed max-w-xl">
              Track your days, mood, goals, and reflections — all in one place.
              Khrona helps you uncover patterns, build self-awareness, and stay
              aligned with what truly matters. Gain clarity, one day at a time.
            </p>
            <div className="flex flex-col px-8 md:px-0 gap-3 sm:flex-row w-full">
              <Link
                target="_blank"
                href="https://apps.apple.com/app/khrona-get-your-life-together/id6744410827"
                className="group flex items-center gap-2 bg-zinc-900 text-white px-5 py-3 rounded-xl ring-1 ring-black hover:bg-zinc-800 transition-all duration-300 justify-center"
              >
                <FaApple className="w-5 h-5" />
                <span>Download Now</span>
              </Link>
              <Link
                href="mailto:your@email.com"
                className="group flex items-center gap-2 ring-1 ring-black bg-transparent text-black px-5 py-3 rounded-xl hover:bg-zinc-800 hover:text-white transition-all duration-300 justify-center"
              >
                <FiMail className="w-5 h-5" />
                <span>Ask for support</span>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <Image
              src={"/khrona-hero/hero-black.webp"}
              alt="Khrona Dashboard"
              width={1000}
              height={1000}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default KhronaHero;

'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { FaApple } from "react-icons/fa6";

type NavLink = {
    title: string
    path: string
}

export const navlinks: NavLink[] = [
    {
        title: "Features",
        path: "#features"
    },
    {
        title: "FAQ",
        path: "#faq"
    },
]

const KhronaHero = () => {
  return(
  <main className="min-h-screen text-zinc-900 font-sans flex flex-col">
    <div className="z-10 fixed flex items-center justify-between px-4 py-4 mb-3 bottom-5 left-1/2 transform -translate-x-1/2 bg-neutral-100/10 backdrop-blur-lg ring-1 ring-neutral-200 rounded-xl shadow-lg max-w-md w-[90%] mx-auto">
      <Link href={"#home"} className="flex items-center space-x-2">
        <Image
          alt="logo"
          src={"/k3dblack.png"}
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
            className="hover:text-(--korange) text-sm sm:text-base font-medium tracking-tight transition-colors"
          >
            <Link href={nav.path}>{nav.title}</Link>
          </div>
        ))}
      </div>
    </div>
    <section
      id="home"
      className="flex flex-col items-center justify-center lg:min-h-screen text-center px-6 md:px-10 py-12 max-w-6xl mx-auto"
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col space-y-7 items-start">
          <div className="flex space-x-2 items-center">
            <Image
              alt="logo"
              src={"/k3dblack.png"}
              width={100}
              height={100}
              className="w-[30px] h-[30px] rounded-md"
            />
            <h6 className="font-bold text-lg tracking-wider">Khrona</h6>
          </div>
          <h1 className="md:text-left text-center text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            <span className="text-gradient">Track your life.</span>{" "}
            <span className="text-gradient">Understand your</span>{" "}
            <span className="text-gradient">days.</span>
          </h1>
          <p className="md:text-base lg:pr-4 m-auto lg:text-lg font-geist tracking-tight max-w-xl mb-10 text-gray-600 md:text-left leading-relaxed">
            Track your days, mood, goals, and reflections — all in one place.
            Khrona helps you uncover patterns, build self-awareness, and stay
            aligned with what truly matters. Gain clarity, one day at a time.
          </p>
          <div className="flex flex-col gap-3 text-center items-center w-full justify-center md:justify-start md:flex-row ">
            <div className="flex">
              <Link
                target="_blank"
                href={
                  "https://apps.apple.com/app/khrona-get-your-life-together/id6744410827"
                }
                className="group flex ring-1 gap-2 items-center m-0 bg-gradient-to-b from-zinc-950 to-zinc-700 bg-zinc-900 text-white px-5 py-3 lg:px-6.5 lg:py-3.5 w-[220px] justify-center md:w-fit rounded-xl md:rounded-2xl hover:bg-zinc-800 transition-all duration-300"
              >
                <FaApple className="w-5 h-5" />
                <span className="text-base">Download Now</span>
              </Link>
            </div>
            <div className="flex">
              <Link
                href={"mailto:your@email.com"}
                className="group flex items-center gap-2 ring-1 ring-black bg-transparent text-black px-5 py-3 lg:px-6.5 lg:py-3.5 w-[220px] md:w-fit rounded-xl md:rounded-2xl justify-center hover:bg-zinc-800 transition-all duration-300"
              >
                <FiMail className="w-5 h-5" />
                <span className="text-base">Ask for support</span>
              </Link>
            </div>
          </div>
        </div>
        <Image
          width={1080}
          height={1080}
          alt="logo"
          src={"/hero-black.png"}
          className=" object-contain mt-10 md:mt-0 md:w-2/5 md:h-2/5 lg:w-1/2 lg:h-1/2"
        />
      </div>
    </section>
  </main>
  )
};

export default KhronaHero;

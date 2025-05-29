"use client";

import { HammerAnimation } from "@/components/HammerAnimation";
import { socials } from "@/lib/socials";
import Link from "next/link";
import { BsGear } from "react-icons/bs";
import { TbTools } from "react-icons/tb";

const WebsiteInProduction = () => {
  const progress = 5;

  return (
    <div className="min-h-screen font-inter tracking-tighter flex items-center flex-col justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-20" />

      {/* Floating construction elements */}
      <div className="absolute top-20 left-20 animate-bounce">
        <BsGear
          className="w-6 h-6 text-violet-500 animate-spin opacity-60"
          style={{ animationDuration: "3s" }}
        />
      </div>
      <div className="absolute top-40 right-32 animate-pulse">
        <TbTools className="w-4 h-4 text-indigo-500 opacity-50" />
      </div>
      <div className="absolute bottom-32 left-16 animate-bounce delay-1000">
        <div className="w-3 h-3 bg-violet-400 rounded-full opacity-60" />
      </div>
      <div className="absolute top-60 right-20 animate-pulse delay-500">
        <BsGear
          className="w-3 h-3 text-amber-600 animate-spin opacity-40"
          style={{ animationDuration: "4s" }}
        />
      </div>

      {/* Construction barrier animation */}
      <div className="absolute bottom-0  min-w-screen left-0 right-0 h-3 bg-gradient-to-r from-violet-400 via-indigo-400 to-violet-400 opacity-30">
        <div className="h-full bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
      </div>

      <div className="w-full flex flex-col space-y-5 md:space-y-8 items-center justify-center z-10 px-4">
        {/* Main construction icon with hover effect */}

        <HammerAnimation />

        {/* Construction status with animated text */}
        <div className="text-center space-y-">
          <h1 className="text-5xl mb-2 md:text-7xl font-sans font-bold bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
            Under Construction
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <div className="h-1 w-8 bg-violet-400 rounded-full animate-pulse" />
            <BsGear className="w-4 h-4 text-indigo-500 animate-spin" />
            <div className="h-1 w-8 bg-indigo-400 rounded-full animate-pulse delay-300" />
            <TbTools className="w-4 h-4 text-violet-600" />
            <div className="h-1 w-8 bg-violet-400 rounded-full animate-pulse delay-700" />
          </div>
        </div>

        <p className="font-medium text-gray-500 text-center text-sm md:text-base max-w-lg leading-relaxed">
          Our team (just me) is hard at work building something amazing. We'll
          be back online soon with a brand new experience!
        </p>

        {/* Animated progress bar */}
        <div className="w-full max-w-md space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Building progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-400 to-indigo-500 rounded-full transition-all duration-300 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white opacity-30 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Construction crew status */}
        <div className="flex items-center space-x-3 text-sm text-gray-600 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
          <div className="flex items-center space-x-1.5">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs md:text-sm">1 developer online</span>
          </div>
        </div>

        {/* Back button */}
        <div className="flex flex-col max-w-lg w-full justify-center items-center gap-4">
          <Link
            href={"https://waitlist.dpstemplates.com"}
            rel="noopener noreferrer"
            target="_blank"
            className="cursor-pointer bg-gradient-to-b border-2 border-violet-800/60 max-w-50 py-2.5 from-violet-700 to-indigo-900 p-3 rounded-xl shadow-md shadow-black/70 ring-2 ring-purple-800/80 hover:shadow-lg hover:shadow-black/60 hover:translate-y-[-2px] hover:brightness-110 active:shadow-sm active:translate-y-[1px] active:brightness-90 transition-all duration-200"
          >
            <p className="font-inter text-sm tracking-tight text-white/90 font-medium whitespace-nowrap">
              Join the Waitlist!
            </p>
          </Link>
          <div className="flex w-full justify-center gap-3 items-center">
            <span className="inline-flex w-1/3 h-[1px] bg-neutral-200"></span>
            <p className="text-sm w-1/2 md:w-fit text-center text-gray-600 font-medium">
              or check me out here!
            </p>
            <span className="inline-flex  w-1/3 h-[1px] bg-neutral-200"></span>
          </div>
          <div className="flex gap-4">
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <Link
                  href={s.link}
                  target="_blank"
                  rel={"noreferrer noopener"}
                  key={i}
                  className="p-3 hover:bg-neutral-100 hover:-translate-y-1.5 transition-all cursor-pointer ring-1 ring-neutral-200 rounded-xl"
                >
                  <Icon className="w-6 h-6" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Animated construction tape */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-repeating-gradient opacity-80">
        <div
          className="h-full bg-gradient-to-r from-violet-400 via-black to-violet-400 animate-pulse"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fbbf24 0px, #fbbf24 10px, #000 10px, #000 20px)",
            animation: "slide 2s linear infinite",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(-20px);
          }
          100% {
            transform: translateX(20px);
          }
        }
      `}</style>
    </div>
  );
};

export default WebsiteInProduction;

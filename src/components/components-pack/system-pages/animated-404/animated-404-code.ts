export const animated404Code = `"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { LuTelescope } from "react-icons/lu";
import { TbSparkles } from "react-icons/tb";

export const Animated404 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-gray-900">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="grid-bg-light dark:hidden" />
        <div className="hidden grid-bg-dark dark:block" />
      </div>

      {/* Animated background dots */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: \\\`radial-gradient(circle at \\\${mousePosition.x}% \\\${mousePosition.y}%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)\\\`,
        }}
      />

      {/* Floating elements */}
      <div className="absolute left-20 top-20 h-2 w-2 animate-pulse rounded-full bg-blue-400 opacity-60 dark:bg-blue-500" />
      <div className="absolute right-32 top-40 h-1 w-1 animate-bounce rounded-full bg-purple-400 opacity-40 dark:bg-purple-500" />
      <div className="absolute bottom-32 left-16 h-3 w-3 animate-pulse rounded-full bg-indigo-300 opacity-50 dark:bg-indigo-400" />

      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center p-4">
        {/* Icon with continuous animation */}
        <div className="group relative">
          <LuTelescope className="animate-telescope-float text-8xl text-gray-700 dark:text-gray-200" />
          <div className="absolute -right-7 -top-2">
            <TbSparkles
              className="animate-spin text-3xl text-yellow-400 dark:text-yellow-300"
              style={{ animationDuration: "3s" }}
            />
          </div>
        </div>

        {/* Main heading with gradient */}
        <div className="mt-8 space-y-2 text-center">
          <h1 className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text font-inter text-7xl font-bold tracking-tight text-transparent dark:from-gray-100 dark:via-gray-200 dark:to-gray-100">
            404
          </h1>
          <div className="mx-auto h-1 w-24 animate-pulse rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        </div>

        <h2 className="mt-4 font-inter text-2xl font-medium tracking-tight text-gray-700 dark:text-gray-200">
          Page Not Found
        </h2>

        <p className="mt-4 max-w-lg text-center font-inter font-medium leading-relaxed text-gray-500 dark:text-gray-400">
          Looks like this page decided to go on an adventure without us
        </p>

        {/* Interactive button */}
        <Link
          href="/"
          className="group mt-8 flex transform items-center space-x-2 rounded-xl border border-neutral-200 bg-white px-4 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-indigo-50 dark:border-neutral-700 dark:bg-gray-800 dark:hover:border-indigo-500 dark:hover:bg-indigo-950"
        >
          <BsArrowLeft className="transform text-gray-600 transition-all duration-300 group-hover:-translate-x-1 group-hover:text-indigo-600 dark:text-gray-400 dark:group-hover:text-indigo-400" />
          <span className="font-inter font-medium tracking-tight text-black transition-colors duration-300 group-hover:text-indigo-700 dark:text-white dark:group-hover:text-indigo-400">
            Take me home
          </span>
        </Link>
      </div>

      <style jsx>{\\\`
        .grid-bg-light,
        .grid-bg-dark {
          position: absolute;
          inset: 0;
          background-size: 50px 50px;
        }

        .grid-bg-light {
          background-image: linear-gradient(
              to right,
              rgba(0, 0, 0, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
        }

        .grid-bg-dark {
          background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            );
        }

        .animate-telescope-float {
          animation: telescope-float 6s ease-in-out infinite;
        }

        @keyframes telescope-float {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
            color: inherit;
          }
          50% {
            transform: scale(1.1) rotate(-12deg);
            color: #4f46e5;
          }
        }
      \\\`}</style>
    </div>
  );
};`; 
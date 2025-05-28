"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { LuTelescope } from "react-icons/lu";
import { TbSparkles } from "react-icons/tb";

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

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
    <div className="min-h-screen flex items-center flex-col justify-center relative overflow-hidden">
      {/* Animated background dots */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)`,
        }}
      />
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full transition-all animate-pulse opacity-60" />
      <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-40" />
      <div className="absolute bottom-32 left-16 w-3 h-3 bg-indigo-300 rounded-full animate-pulse opacity-50" />

      <div className="w-full flex flex-col space-y-8 items-center justify-center z-10 p-4">
        {/* Icon with hover effect */}
        <div
          className="relative group cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <LuTelescope
            className={`text-8xl text-gray-700 transition-all duration-500 transform ${
              isHovering ? "scale-110 -rotate-12 text-indigo-500" : ""
            }`}
          />
          {isHovering && (
            <div className="absolute -top-2 -right-7">
              <TbSparkles className="text-3xl text-yellow-400 animate-spin duration-1000" />
            </div>
          )}
        </div>

        {/* Main heading with gradient */}
        <div className="text-center space-y-2">
          <h1 className="text-7xl font-inter font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent tracking-tight">
            404
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto animate-pulse" />
        </div>

        <h2 className="text-2xl font-inter font-medium text-gray-700 tracking-tight">
          Page Not Found
        </h2>

        <p className="font-medium font-inter text-gray-500 text-center max-w-lg leading-relaxed">
          Looks like this page decided to go on an adventure without us
        </p>

        {/* Interactive button */}
        <Link
          href="/"
          className="group flex items-center space-x-2 bg-white hover:bg-indigo-50 ring-1 ring-neutral-200 hover:border-indigo-300 px-4 py-2 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <BsArrowLeft className="text-gray-600 group-hover:text-indigo-600 transition-all duration-300 transform group-hover:-translate-x-1" />
          <span className="text-black tracking-tight font-inter group-hover:text-indigo-700 font-medium transition-colors duration-300">
            Take me home
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

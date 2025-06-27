"use client";

import { useState } from "react";
import Link from "next/link";
import { LuMail, LuLock, LuGithub } from "react-icons/lu";
import { FaApple, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ElevatedLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center">
      <div className="lg:w-lg sm:w-[400px] xs:w-xs w-2xs">
        {/* Main Card */}
        <div className="bg-gradient-to-t from-neutral-100 to-neutral-50 dark:from-neutral-900 shadow-[inset_0_0_12px_4px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_12px_1px_rgba(255,255,255,0.1)] dark:to-neutral-800 rounded-2xl p-4 md:p-8 border border-neutral-200/50 dark:border-neutral-800/50">
          {/* Decorative dots and logo area */}
          <div className="flex justify-center mb-8 relative">
            {/* Decorative dots */}
            <div className="absolute top-1/2 z-5 left-1/3 flex space-x-1">
              <div className="w-0.5 h-0.5 bg-neutral-300 dark:bg-neutral-700 rounded-full"></div>
              <div className="w-0.5 h-0.5 bg-neutral-300 dark:bg-neutral-700 rounded-full"></div>
              <div className="w-0.5 h-0.5 bg-neutral-300 dark:bg-neutral-700 rounded-full"></div>
              <div className="w-0.5 h-0.5 bg-neutral-300 dark:bg-neutral-700 rounded-full"></div>
              <div className="w-0.5 h-0.5 bg-neutral-300 dark:bg-neutral-700 rounded-full"></div>
              <div className="w-0.5 h-0.5 bg-neutral-300 dark:bg-neutral-700 rounded-full"></div>
            </div>
            <div className="absolute top-1/2 z-5 right-1/3 flex space-x-1">
              <div className="w-0.5 h-0.5 bg-neutral-300 dark:bg-neutral-700 rounded-full"></div>
              <div className="w-0.5 h-0.5 bg-neutral-300 dark:bg-neutral-700 rounded-full"></div>
              <div className="w-0.5 h-0.5 bg-neutral-300 dark:bg-neutral-700 rounded-full"></div>
              <div className="w-0.5 h-0.5 bg-neutral-300 dark:bg-neutral-700 rounded-full"></div>
              <div className="w-0.5 h-0.5 bg-neutral-300 dark:bg-neutral-700 rounded-full"></div>
              <div className="w-0.5 h-0.5 bg-neutral-300 dark:bg-neutral-700 rounded-full"></div>
            </div>

            {/* Logo */}
            <div className="w-16 h-16 z-10 rounded-full bg-gradient-to-t from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 flex items-center justify-center border border-neutral-300 dark:border-neutral-700">
              <LuGithub className="w-8 h-8 text-neutral-800 dark:text-white" />
            </div>
          </div>

          {/* Welcome Text */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-neutral-800 dark:text-white mb-2">
              Welcome Back
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Don't have an account yet?{" "}
              <Link
                href="/signup"
                className="text-neutral-800 dark:text-white hover:underline font-medium"
              >
                Sign up
              </Link>
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4 mb-6">
            {/* Email Input */}
            <div className="relative">
              <LuMail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-500 dark:text-neutral-400" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 py-2 bg-white dark:bg-neutral-900 border shadow-md dark:shadow-black/20 border-neutral-300/50 dark:border-neutral-700/50 text-neutral-800 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 rounded-xl focus:border-neutral-400 dark:focus:border-neutral-600 focus:outline-none focus:ring-0"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <LuLock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-500 dark:text-neutral-400" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 py-2 bg-white dark:bg-neutral-900 border border-neutral-300/50 dark:border-neutral-700/50 shadow-md  dark:shadow-black/20 text-neutral-800 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 rounded-xl focus:border-neutral-400 dark:focus:border-neutral-600 focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          {/* Login Button */}
          <button className="w-full py-3 ring-1 dark:ring-blue-800 shadow-blue-300 shadow-md dark:shadow-blue-600 inner-shadow bg-gradient-to-b from-sky-500 to-blue-700 text-white font-medium rounded-xl mb-6 transition-colors">
            <p className="">Login</p>
          </button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-neutral-300/50 dark:border-neutral-700/50" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-neutral-50 dark:bg-[#1a1a1a] px-3 text-neutral-600 dark:text-neutral-400">
                OR
              </span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-3 gap-3">
            <div className="shadow-md w-full  rounded-xl dark:shadow-black/30">
              <button className="py-5 w-full bg-neutral-100 dark:bg-neutral-900 inner-shadow border border-neutral-300/50 dark:border-neutral-700/50 hover:bg-neutral-100 dark:hover:bg-[#333333] text-neutral-800 dark:text-white rounded-xl transition-colors flex items-center justify-center">
                <FaApple className="w-5 h-5" />
              </button>
            </div>
            <div className="shadow-md  rounded-xl dark:shadow-black/30">
              <button className="py-5 w-full bg-neutral-100 dark:bg-neutral-900 inner-shadow border border-neutral-300/50 dark:border-neutral-700/50 hover:bg-neutral-100 dark:hover:bg-[#333333] text-neutral-800 dark:text-white rounded-xl transition-colors flex items-center justify-center">
                <FaGoogle className="w-5 h-5" />
              </button>
            </div>
            <div className="shadow-md  rounded-xl dark:shadow-black/30">
              <button className="py-5 w-full bg-neutral-100 dark:bg-neutral-900 inner-shadow border border-neutral-300/50 dark:border-neutral-700/50 hover:bg-neutral-100 dark:hover:bg-[#333333] text-neutral-800 dark:text-white rounded-xl transition-colors flex items-center justify-center">
                <FaXTwitter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

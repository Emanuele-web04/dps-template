"use client";

import { useState } from "react";
import Link from "next/link";
import { LuMail, LuLock, LuGithub, LuEye, LuEyeOff } from "react-icons/lu";
import { FaGoogle, FaApple } from "react-icons/fa";
import { SiBinance } from "react-icons/si";
import { BiWallet } from "react-icons/bi";

export default function MinimalLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center md:p-4 p-2">
      <div className="lg:w-lg sm:w-[400px] xs:w-xs w-2xs">
        {/* Main Card */}
        <div className="bg-white dark:bg-gradient-to-b dark:from-neutral-900 dark:to-neutral-950 rounded-2xl p-4 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700/50">
          {/* Logo */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-gradient-to-b dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center border border-neutral-200 dark:border-neutral-600">
              <LuGithub className="w-6 h-6 text-neutral-600 dark:text-neutral-300" />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-600/50 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 rounded-xl focus:border-neutral-300 dark:focus:border-neutral-500 focus:outline-none focus:ring-0 transition-colors"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-12 bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-600/50 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 rounded-xl focus:border-neutral-300 dark:focus:border-neutral-500 focus:outline-none focus:ring-0 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-500 dark:text-neutral-300 hover:text-neutral-700 dark:hover:text-neutral-100 cursor-pointer"
              >
                {showPassword ? (
                  <LuEyeOff className="w-5 h-5" />
                ) : (
                  <LuEye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button className="w-full text-sm md:py-3 py-2.5 bg-gradient-to-t ring-1 ring-neutral-800 border border-neutral-700 from-neutral-900 to-neutral-600 dark:ring-neutral-100 dark:border-neutral-300 dark:from-neutral-200 dark:to-white text-white dark:text-neutral-900 font-medium rounded-xl mb-6 hover:bg-neutral-800 dark:hover:from-neutral-200 dark:hover:to-neutral-100 transition-all cursor-pointer">
            Log In
          </button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-neutral-200 dark:border-neutral-600/50" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-neutral-800 px-3 text-neutral-500 dark:text-neutral-300">
                OR
              </span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <button className="w-full shadow py-3 px-4 bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-600/50 text-neutral-700 dark:text-neutral-200 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-700/80 transition-colors flex items-center justify-center gap-3 cursor-pointer">
              <FaGoogle className="w-5 h-5" />
              <span className="text-sm md:text-base">Continue with Google</span>
            </button>

            <button className="w-full shadow py-3 px-4 bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-600/50 text-neutral-700 dark:text-neutral-200 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-700/80 transition-colors flex items-center justify-center gap-3 cursor-pointer">
              <FaApple className="w-5 h-5" />
              <span className="text-sm md:text-base">Continue with Apple</span>
            </button>

            <button className="w-full shadow py-3 px-4 bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-600/50 text-neutral-700 dark:text-neutral-200 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-700/80 transition-colors flex items-center justify-center gap-3 cursor-pointer">
              <SiBinance className="w-5 h-5" />
              <span className="text-sm md:text-base">
                Continue with Binance
              </span>
            </button>

            <button className="w-full shadow py-3 px-4 bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-600/50 text-neutral-700 dark:text-neutral-200 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-700/80 transition-colors flex items-center justify-center gap-3 cursor-pointer">
              <BiWallet className="w-5 h-5" />
              <span className="text-sm md:text-base">Continue with Wallet</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-xs text-neutral-600 dark:text-neutral-300">
              Don't have an account yet?{" "}
              <Link
                href="/signup"
                className="text-neutral-900 dark:text-neutral-100 hover:underline font-medium"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

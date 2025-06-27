export const elevatedLoginCode = `"use client";

import React, { useState } from "react";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi2";
import { FaApple, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ElevatedLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900 p-4">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="bg-neutral-800 rounded-2xl border border-neutral-700 p-8 shadow-2xl">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-neutral-800 border-t-transparent rounded-full"></div>
            </div>
          </div>

          {/* Welcome Text */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-neutral-400">
              Don't have an account yet?{" "}
              <button className="text-blue-400 hover:text-blue-300 transition-colors">
                Sign up
              </button>
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Email Field */}
            <div className="relative">
              <HiOutlineMail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="email"
                placeholder="email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-neutral-700 border border-neutral-600 rounded-xl pl-12 pr-4 py-4 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <HiOutlineLockClosed className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-neutral-700 border border-neutral-600 rounded-xl pl-12 pr-4 py-4 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors duration-200"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 h-px bg-neutral-600"></div>
            <span className="px-4 text-neutral-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-neutral-600"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-3 gap-4">
            <button className="bg-neutral-700 hover:bg-neutral-600 border border-neutral-600 rounded-xl p-4 flex items-center justify-center transition-colors duration-200">
              <FaApple className="w-6 h-6 text-white" />
            </button>
            <button className="bg-neutral-700 hover:bg-neutral-600 border border-neutral-600 rounded-xl p-4 flex items-center justify-center transition-colors duration-200">
              <FaGoogle className="w-6 h-6 text-white" />
            </button>
            <button className="bg-neutral-700 hover:bg-neutral-600 border border-neutral-600 rounded-xl p-4 flex items-center justify-center transition-colors duration-200">
              <FaXTwitter className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElevatedLogin;`.trim(); 
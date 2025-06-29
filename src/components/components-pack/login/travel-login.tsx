"use client";

import { useState } from "react";
import { LuMail, LuLock, LuEye, LuEyeOff, LuCheck } from "react-icons/lu";
import { FaGoogle, FaGithub, FaFacebookF } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { people } from "@/lib/images";
import { FaApple } from "react-icons/fa6";
import Image from "next/image";

export default function TravelLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [password, setPassword] = useState("password123");
  const [rememberMe, setRememberMe] = useState(false);

  const profileImages = people.slice(0, 4);

  return (
    <div className="w-full mx-auto md:min-h-screen font-sans flex !p-0 bg-neutral-100 dark:bg-neutral-900 !m-0 !rounded-none overflow-hidden">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 lg:min-h-screen flex flex-col justify-center bg-neutral-100 dark:bg-neutral-900 p-4 sm:p-4 lg:p-8 xl:p-12">
        <div className="mx-auto sm:max-w-md w-full">
          {/* Logo */}
          <div className="relative w-full block lg:hidden mb-5 h-40 rounded-3xl overflow-hidden">
            <Image
              width={300}
              height={300}
              src={
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=1200&fit=crop"
              }
              alt="Voyageur"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 dark:bg-black/40 rounded-3xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <MdFlight className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-semibold">Voyageur</span>
                </div>
                <p className="text-sm opacity-90">Start your next adventure</p>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                <MdFlight className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-black dark:text-white">
                Voyageur
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
              Sign in
            </h1>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email Address
              </label>
              <div className="relative">
                <LuMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="johndoe@gmail.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <div className="relative">
                <LuLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  className="w-full pl-10 pr-10 py-3 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                >
                  {showPassword ? (
                    <LuEyeOff className="w-5 h-5" />
                  ) : (
                    <LuEye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <button
                onClick={() => setRememberMe(!rememberMe)}
                className="flex items-center gap-2 group"
              >
                <div
                  className={`w-4 h-4 border-2 rounded transition-all ${
                    rememberMe
                      ? "bg-blue-600 dark:bg-blue-500 border-blue-600 dark:border-blue-500"
                      : "border-gray-300 dark:border-neutral-600 group-hover:border-gray-400 dark:group-hover:border-neutral-500"
                  } flex items-center justify-center`}
                >
                  {rememberMe && <LuCheck className="w-3 h-3 text-white" />}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                  Remember me
                </span>
              </button>
            </div>

            {/* Sign In Button */}
            <button className="w-full py-2.5 bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-black rounded-xl font-medium transition-colors shadow-sm">
              Sign in
            </button>

            {/* Links */}
            <div className="text-left">
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors"
                >
                  Sign up
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="text-xs text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors"
                >
                  Forgot Password
                </a>
              </div>
            </div>

            {/* Social Login */}
            <div className="flex justify-start space-x-4 pb-2">
              <button className="sm:w-12 sm:h-12 w-8 h-8 rounded-full bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors shadow-sm">
                <FaGoogle className="w-4 h-4 text-black dark:text-white" />
              </button>
              <button className="sm:w-12 sm:h-12 w-8 h-8 rounded-full bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors shadow-sm">
                <FaApple className="w-4 h-4 text-black dark:text-white" />
              </button>
              <button className="sm:w-12 sm:h-12 w-8 h-8 rounded-full bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors shadow-sm">
                <FaFacebookF className="w-4 h-4 text-black dark:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Travel Image Section */}
      <div
        className="hidden lg:flex w-1/2 bg-cover bg-center relative p-4 m-4 rounded-3xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=1200&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 rounded-3xl" />
        <div className="relative flex flex-col justify-center items-start px-6 text-white w-full max-w-lg ml-auto">
          {/* Welcome Text */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-white dark:from-gray-100 dark:via-blue-200 dark:to-gray-100 bg-clip-text text-transparent">
            Welcome to Voyageur
          </h2>
          <p className="text-sm mb-6 md:mb-8 leading-relaxed opacity-90 max-w-md text-gray-100 dark:text-gray-200">
            Voyageur helps travelers discover amazing destinations and create
            unforgettable memories. Join us and start planning your next
            adventure today.
          </p>
          <p className="md:text-sm mb-8 md:mb-12 opacity-80 font-medium text-blue-100 dark:text-blue-200">
            More than 17k people joined us, it's your turn
          </p>

          {/* Call to Action Card */}
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/20 dark:border-white/10 w-full shadow-2xl hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300">
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">
              Discover your perfect destination
            </h3>
            <p className="text-xs md:text-sm mb-4 md:mb-6 leading-relaxed opacity-90 text-gray-100 dark:text-gray-200">
              Be among the first travelers to experience our curated
              destinations and exclusive travel experiences.
            </p>
            <div className="flex items-center -space-x-2">
              {profileImages.map((src, index) => (
                <img
                  key={index}
                  src={src.src}
                  alt={`Traveler ${index + 1}`}
                  className="w-8 h-8 object-cover md:w-10 md:h-10 rounded-full border-2 border-white dark:border-gray-300 shadow-lg hover:scale-110 transition-transform duration-200"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

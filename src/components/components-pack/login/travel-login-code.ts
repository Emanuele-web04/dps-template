export const travelLoginCode = `"use client";

import { useState } from "react";
import { LuMail, LuLock, LuEye, LuEyeOff, LuCheck } from "react-icons/lu";
import { FaGoogle, FaGithub, FaFacebookF } from "react-icons/fa";
import { MdFlight } from "react-icons/md";

export default function TravelLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [password, setPassword] = useState("password123");
  const [rememberMe, setRememberMe] = useState(false);

  const profileImages = [
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
  ];

  return (
    <div className="w-full min-h-screen flex !p-0 !m-0 !rounded-none overflow-hidden">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col min-h-screen justify-center bg-white p-4 sm:p-6 lg:p-8 xl:p-12">
        <div className="max-w-md mx-auto w-full">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <MdFlight className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-black">Voyageur</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-black">Sign in</h1>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <LuMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <LuLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <LuEyeOff className="w-5 h-5" /> : <LuEye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <button
                onClick={() => setRememberMe(!rememberMe)}
                className="flex items-center"
              >
                <div className={\`w-4 h-4 border-2 rounded mr-2 flex items-center justify-center transition-all \${
                  rememberMe ? 'bg-blue-600 border-blue-600' : 'border-gray-300'
                }\`}>
                  {rememberMe && <LuCheck className="w-3 h-3 text-white" />}
                </div>
                <span className="text-sm text-gray-600">Remember me</span>
              </button>
            </div>

            {/* Sign In Button */}
            <button className="w-full py-3 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-colors">
              Sign in
            </button>

            {/* Links */}
            <div className="text-center space-y-2">
              <div className="text-sm text-gray-600">
                Don't have an account?{" "}
                <a href="#" className="text-blue-600 font-medium hover:underline">
                  Sign up
                </a>
              </div>
              <div>
                <a href="#" className="text-sm text-blue-600 font-medium hover:underline">
                  Forgot Password
                </a>
              </div>
            </div>

            {/* Social Login */}
            <div className="flex justify-center space-x-4 pt-4">
              <button className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <FaGoogle className="w-5 h-5 text-red-500" />
              </button>
              <button className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <FaGithub className="w-5 h-5 text-gray-700" />
              </button>
              <button className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <FaFacebookF className="w-5 h-5 text-blue-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Travel Image Section */}
      <div 
        className="hidden lg:flex w-1/2 bg-cover bg-center relative min-h-screen"
        style={{
          backgroundImage: \`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=1200&fit=crop')\`
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative flex flex-col justify-center items-start px-8 lg:px-12 xl:px-16 py-16 text-white w-full max-w-lg ml-auto">
          {/* Logo */}
          <div className="flex items-center mb-12">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-3">
              <MdFlight className="w-7 h-7 text-blue-600" />
            </div>
            <span className="text-2xl font-semibold">Voyageur</span>
          </div>

          {/* Welcome Text */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Welcome to Voyageur
          </h2>
          <p className="text-lg lg:text-xl mb-8 leading-relaxed opacity-90">
            Voyageur helps travelers discover amazing destinations and create unforgettable memories. Join us and start planning your next adventure today.
          </p>
          <p className="text-base lg:text-lg mb-12 opacity-80">
            More than 17k people joined us, it's your turn
          </p>

          {/* Call to Action Card */}
          <div className="bg-black/30 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-white/10 w-full">
            <h3 className="text-xl lg:text-2xl font-semibold mb-4">
              Discover your perfect destination
            </h3>
            <p className="text-sm lg:text-base mb-6 leading-relaxed opacity-90">
              Be among the first travelers to experience our curated destinations and exclusive travel experiences.
            </p>
            <div className="flex items-center -space-x-2">
              {profileImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={\`Traveler \${index + 1}\`}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
              <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center ml-2">
                <span className="text-sm font-medium">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Hero Section */}
      <div className="lg:hidden absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MdFlight className="w-6 h-6" />
            <span className="text-lg font-semibold">Voyageur</span>
          </div>
          <p className="text-sm opacity-90">Start your next adventure</p>
        </div>
      </div>
    </div>
  );
}`; 
"use client";
import {
  FiArrowLeft,
  FiBarChart2,
  FiBell,
  FiCalendar,
  FiChevronRight,
  FiCpu,
  FiEye,
  FiGrid,
  FiHeart,
  FiMessageCircle,
  FiThumbsUp,
  FiTrendingUp,
} from "react-icons/fi";
import Image from "next/image";

export default function GradientHero() {
  return (
    <div className="p-2 md:p-4 h-full bg-white">
      <div className="relative font-sans overflow-hidden rounded-2xl bg-gradient-to-b from-orange-200 via-rose-200 to-pink-200">
        <div className="absolute inset-0 h-full bg-[url('/mobilegrid.webp')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] md:bg-[url('/mobilegrid.webp')]"></div>
        <div className="relative z-10 max-w-7xl h-full mx-auto flex flex-col justify-between">
          {/* Top Section: Navigation + Content */}
          <div>
            {/* Navigation Header */}
            <nav className="flex justify-center pt-6 px-4">
              <div className="bg-black rounded-full p-1 flex items-center justify-between w-full max-w-md">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                  </div>
                  <span className="text-white font-medium">Boostly</span>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="text-white text-sm hover:text-gray-300 transition-colors">
                    Log in
                  </button>
                  <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </nav>

            {/* Main Hero Content */}
            <div className="flex flex-col h-full items-center text-center px-4 mt-16">
              {/* Badge */}
              <div className="mb-8 flex items-center space-x-2 rounded-full border border-pink-200/50 bg-white/50 px-4 py-2 backdrop-blur-sm">
                <div className="h-2 w-2 animate-pulse rounded-full bg-pink-400"></div>
                <span className="md:text-sm text-xs text-gray-700">
                  24K+ Boosted brands this month
                </span>
                <FiChevronRight className="h-4 w-4 text-gray-500" />
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl mb-6 max-w-4xl">
                Know What Works
                <br />
                Before You Publish
              </h1>

              {/* Subheading */}
              <p className="max-w-xl text-sm text-gray-600 md:text-lg mb-8">
                AI-powered platform helping small brands predict, track,
                <br />
                and improve social media post performance
              </p>

              {/* CTA Button */}
              <div className="flex flex-col items-center">
                <button className="text-gray-900 md:px-6 md:py-3 px-4 py-2 rounded-full md:text-base text-sm font-medium hover:shadow-lg transition-shadow  bg-white/80 backdrop-blur-3xl">
                  Give It a Boost
                </button>
                <span className="text-gray-500 md:text-sm text-xs mt-2">
                  Start 7-day Free Trial
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Section: Hero Image - Flush with bottom */}
          <Image
            src="/hero-section/dps-hero.webp"
            alt="DPS Hero"
            width={1000}
            height={1000}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}

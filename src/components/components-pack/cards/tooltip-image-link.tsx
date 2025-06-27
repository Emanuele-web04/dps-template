"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LuLink, LuCopy, LuCheck } from "react-icons/lu";
import Link from "next/link";

export default function ToolTipImageLink() {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Your link data
  const linkUrl = "https://khrona-website.vercel.app/";
  const truncatedUrl =
    linkUrl.length > 30 ? linkUrl.substring(0, 30) + "..." : linkUrl;

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    try {
      await navigator.clipboard.writeText(linkUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="rounded-2xl flex items-center justify-center">
      <div
        className="relative inline-block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="rounded-2xl bg-gray-200 ring-1 ring-neutral-100 dark:bg-neutral-800 cursor-pointer">
          <Image
            src="/khrona-landing.png"
            alt="Khrona Landing"
            width={200}
            height={200}
            className="w-full h-fit rounded-2xl"
          />
        </div>

        {/* Tooltip */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 mt-3 bg-white dark:bg-neutral-800 border-b border-gray-300 dark:border-neutral-600 text-gray-900 dark:text-white rounded-2xl shadow-xl z-10 transition-all duration-200 ${
            isHovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          {/* Arrow pointing up */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-white dark:border-b-gray-900"></div>

          <div className="flex items-center gap-1.5 px-2 py-1.5 min-w-0">
            {/* Link Icon */}
            <LuLink className="w-4 h-4 mx-1.5 text-neutral-500 dark:text-neutral-600 flex-shrink-0" />

            {/* Truncated URL */}
            <Link
              href={linkUrl}
              className="text-sm hover:text-gray-900 dark:hover:text-white transition-all text-neutral-600 dark:text-neutral-400 underline truncate flex-1 min-w-0"
            >
              {truncatedUrl}
            </Link>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className={`p-1.5 cursor-pointer rounded hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors flex-shrink-0 
                text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white
              `}
              title={isCopied ? "Copied!" : "Copy URL"}
            >
              {isCopied ? (
                <LuCheck className="w-4 h-4" />
              ) : (
                <LuCopy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

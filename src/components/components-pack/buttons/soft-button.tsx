"use client";

import { cn } from "@/lib/cn";

export default function SoftButton() {
  return (
    <button
      className={cn(
        "relative group",
        "bg-gradient-to-b from-blue-500 to-blue-600",
        "hover:from-blue-600 hover:to-blue-700",
        "text-white font-semibold text-base sm:text-lg",
        "px-6 py-3 sm:px-8 sm:py-4 rounded-full",
        "flex items-center justify-center",
        "transition-all duration-300",
        "focus:outline-none",
        "active:scale-[0.98] cursor-pointer",
        // Inner shadow effect for soft appearance
        "shadow-[inset_0_4px_10px_-3px_rgba(255,255,255,0.9),inset_0_-8px_6px_-2px_rgba(0,0,0,0.3)]",
        "hover:shadow-[inset_0_6px_12px_-3px_rgba(255,255,255,0.8),inset_0_-10px_8px_-2px_rgba(0,0,0,0.4),0_8px_25px_rgba(59,130,246,0.4)]"
      )}
    >
      <span className="relative z-10 font-bold whitespace-nowrap text-sm sm:text-base">
        Get Your 14 Day Free Trial
      </span>
    </button>
  );
}
 
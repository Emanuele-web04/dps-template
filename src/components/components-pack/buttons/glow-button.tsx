"use client";

import { cn } from "@/lib/cn";
import { LuPlus, LuChevronDown } from "@/utils/icons";

export default function GlowButton() {
  return (
    <button
      className={cn(
        "relative group",
        "bg-violet-700 dark:bg-violet-900",
        "hover:bg-violet-800 dark:hover:bg-violet-800",
        "text-white text-xs sm:text-sm font-semibold",
        "rounded-lg sm:rounded-xl",
        "flex items-center gap-2 sm:gap-3",
        "transition-all duration-300",
        "shadow-lg shadow-violet-500/50 dark:shadow-violet-500/30",
        "hover:shadow-[0_0_40px_rgba(147,51,234,0.8)] dark:hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]",
        "hover:border-violet-400/50 dark:hover:border-violet-400/30",
        "ring-1 ring-violet-500 dark:ring-violet-500",
        "focus:outline-none",
        "active:scale-[0.98] cursor-pointer",
        "divide-x-[1.5px] divide-violet-500 dark:divide-violet-500"
      )}
    >
      {/* Strong glow effect */}
      <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-violet-600 dark:bg-violet-700 opacity-60 blur-xl -z-10 group-hover:opacity-80 transition-opacity duration-300" />

      {/* Plus icon with background */}
      <div className="flex px-3 sm:px-4 py-2 sm:py-2.5 items-center gap-x-2 sm:gap-x-3">
        <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg bg-white/45 dark:bg-white/30 backdrop-blur-sm">
          <LuPlus className="w-3 h-3 sm:w-4 sm:h-4 text-violet-800 dark:text-violet-900" />
        </div>

        {/* Text */}
        <span className="text-sm sm:text-lg font-medium tracking-wide">
          New
        </span>
      </div>
      <LuChevronDown className="w-4 h-4 sm:w-5 sm:h-5 my-2 sm:my-2.5 mr-3 sm:mr-4" />
    </button>
  );
}
 
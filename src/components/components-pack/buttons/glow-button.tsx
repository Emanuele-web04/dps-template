"use client";

import { cn } from "@/lib/cn";
import { LuPlus, LuChevronDown } from "@/utils/icons";

export default function GlowButton() {
  return (
    <button
      className={cn(
        "relative group",
        "bg-violet-800",
        "hover:bg-violet-700",
        "text-white text-xs sm:text-sm font-semibold",
        "rounded-lg sm:rounded-xl",
        "flex items-center gap-1 sm:gap-2",
        "transition-all duration-300",
        "shadow-[0_0_30px_rgba(147,51,234,0.6)]",
        "hover:shadow-[0_0_40px_rgba(147,51,234,0.8)]",
        "hover:border-violet-400/50",
        "ring-1 ring-violet-500",
        "focus:outline-none",
        "active:scale-[0.98] cursor-pointer",
        "divide-x divide-neutral-200 dark:divide-violet-500"
      )}
    >
      {/* Strong glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-violet-600 opacity-60 blur-xl -z-10 group-hover:opacity-80 transition-opacity duration-300" />

      {/* Plus icon with background */}
      <div className="flex px-2 sm:px-3 py-1.5 sm:py-2 items-center gap-x-1 sm:gap-x-2">
        <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg bg-white/45 backdrop-blur-sm">
          <LuPlus className="w-3 h-3 sm:w-4 sm:h-4 text-violet-800" />
        </div>

        {/* Text */}
        <span className="text-sm sm:text-lg font-medium tracking-wide">
          New
        </span>
      </div>
      <LuChevronDown className="w-4 h-4 sm:w-5 sm:h-5 my-1.5 sm:my-2 mr-2 sm:mr-3" />
    </button>
  );
}

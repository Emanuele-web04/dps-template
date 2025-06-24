"use client";

import { cn } from "@/lib/cn";
import { LuSend, PiPaperPlaneTiltFill } from "@/utils/icons";

export default function ShinyButton() {
  return (
    <button
      className={cn(
        "relative group",
        "bg-gradient-to-r from-pink-200 via-cyan-200 to-purple-300",
        "hover:from-pink-300 hover:via-cyan-300 hover:to-purple-400",
        "text-black font-semibold text-lg sm:text-xl",
        "px-4 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl",
        "flex items-center gap-2 sm:gap-3",
        "transition-all duration-300",
        "border border-white/50",
        "focus:outline-none",
        "active:scale-[0.98] cursor-pointer",
        "backdrop-blur-sm"
      )}
    >
      {/* Shiny overlay effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

      {/* Text */}
      <span className="relative z-10 font-bold">Send</span>

      {/* Send icon */}
      <div className="relative z-10 flex items-center justify-center rounded-full text-black/80">
        <PiPaperPlaneTiltFill className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
    </button>
  );
}

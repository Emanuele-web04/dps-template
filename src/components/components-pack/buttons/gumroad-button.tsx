"use client";

import { cn } from "@/lib/cn";

export default function GumroadButton() {
  return (
    <button
      className={cn(
        "bg-white",
        "hover:bg-gray-50",
        "text-gray-900 font-medium",
        "px-4 py-2 sm:px-6 sm:py-3",
        "border-2 border-black",
        "hover:border-gray-800",
        "transition-all duration-200",
        "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        "hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
        "hover:translate-x-[-2px] hover:translate-y-[-2px]",
        "active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        "active:translate-x-[2px] active:translate-y-[2px]",
        "focus:outline-none cursor-pointer"
      )}
    >
      <span className="font-semibold tracking-wide text-sm sm:text-base">
        Learn more
      </span>
    </button>
  );
}

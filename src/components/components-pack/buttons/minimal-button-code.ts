export const minimalButtonCode = `"use client";

import { cn } from "@/lib/cn";
import { LuLink2 } from "@/utils/icons";

export default function MinimalButton() {
  return (
    <button
      className={cn(
        "bg-white dark:bg-neutral-900",
        "hover:bg-gray-50 dark:hover:bg-neutral-800",
        "text-gray-700 dark:text-gray-200 font-medium",
        "px-4 py-2 sm:px-6 sm:py-3",
        "ring-1 ring-neutral-300 dark:ring-neutral-600",
        "shadow-md shadow-black/10 dark:shadow-black/20",
        "rounded-xl sm:rounded-2xl",
        "flex items-center gap-x-1 sm:gap-x-2",
        "transition-all duration-200",
        "focus:outline-none",
        "active:scale-[0.98] cursor-pointer"
      )}
    >
      <LuLink2 className="w-3 h-3 sm:w-4 sm:h-4" />
      <span className="font-semibold text-sm sm:text-base">Copy Link</span>
    </button>
  );
}`; 
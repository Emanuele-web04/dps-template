'use client'

import { cn } from "@/lib/cn";

const NeumorphismButton = () => {
  return (
    <button
      className={cn(
        "cursor-pointer",
        "bg-gradient-to-b ",
        "from-neutral-700 to-black ",
        "dark:from-white dark:via-white dark:to-neutral-200",
        "border-2 ",
        "border-neutral-800/60 ",
        "dark:border-neutral-300",
        "py-2.5 p-3",
        "rounded-2xl w-fit",
        "shadow-md",
        "shadow-black/70",
        "dark:shadow-gray-400/50",
        "ring-2",
        "ring-neutral-800/80",
        "dark:ring-neutral-200",
        "hover:shadow-lg",
        "hover:shadow-black/60",
        "dark:hover:shadow-gray-400/60",
        "hover:translate-y-[-2px]",
        "hover:brightness-110",
        "active:shadow-sm",
        "active:translate-y-[1px]",
        "active:brightness-90",
        "transition-all duration-200",
        "disabled:opacity-50 disabled:cursor-not-allowed"
      )}
    >
      <p
        className={cn("font-inter font-semibold text-lg tracking-tight", 
                   "text-white/95" ,
                   "dark:text-black", 
                   " whitespace-nowrap",
                   )}
      >
        Neumorphism
      </p>
    </button>
  );
};

export default NeumorphismButton;

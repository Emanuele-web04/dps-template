"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";

interface ContactCTAButtonProps {
  href?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
}

export default function ContactCTAButton({
  href = "mailto:emandipietro@gmail.com",
  children = "Reach out to me →",
  className,
  variant = "default",
}: ContactCTAButtonProps) {
  const baseClasses = cn(
    "group active:scale-95 hover:-translate-y-0.5 focus:outline-0 cursor-pointer relative",
    "px-6 py-3 rounded-xl font-semibold transition-all duration-300 overflow-hidden text-sm inline-block",
    variant === "default" &&
      "bg-neutral-900 dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-100",
    variant === "outline" &&
      "border-2 border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800",
    className
  );

  return (
    <Link href={href} className={baseClasses}>
      {children}
      {/* Gradient line effect */}
      <span className="absolute left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent dark:from-transparent dark:via-sky-400 dark:to-transparent h-[1.5px] w-3/4 bottom-0"></span>
      {/* Glow effect on hover */}
      <span className="absolute left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent opacity-0 active:opacity-100 group-hover:opacity-100 via-cyan-500 to-transparent dark:from-transparent dark:via-sky-400 dark:to-transparent h-2 blur-sm w-3/4 bottom-0 transition-opacity duration-300"></span>
    </Link>
  );
}

"use client";

import React from "react";

interface FrameLabelProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
}

const FrameLabel = ({
  children,
  text = "components",
  className = "",
}: FrameLabelProps) => {
  return (
    <span
      className={`border border-dotted relative border-gray-400 dark:border-gray-500 bg-white/90 dark:bg-neutral-900 backdrop-blur-2xl px-3 py-2 inline-block ${className}`}
    >
      {/* Corner dots */}
      <span className="inline-flex absolute -top-1.5 -left-1.5 w-2.5 h-2.5 rounded-full ring-1 ring-gray-400 dark:ring-neutral-500 bg-white dark:bg-black border border-gray-200 dark:border-transparent"></span>
      <span className="inline-flex absolute -top-1.5 -right-1.5 w-2.5 h-2.5 rounded-full ring-1 ring-gray-400 dark:ring-neutral-500 bg-white dark:bg-black border border-gray-200 dark:border-transparent"></span>
      <span className="inline-flex absolute -bottom-1.5 -left-1.5 w-2.5 h-2.5 rounded-full ring-1 ring-gray-400 dark:ring-neutral-500 bg-white dark:bg-black border border-gray-200 dark:border-transparent"></span>
      <span className="inline-flex absolute -bottom-1.5 -right-1.5 w-2.5 h-2.5 rounded-full ring-1 ring-gray-400 dark:ring-neutral-500 bg-white dark:bg-black border border-gray-200 dark:border-transparent"></span>

      {/* Content */}
      <span className="italic font-semibold text-gray-700 dark:text-gray-300">
        {children || text}
      </span>
    </span>
  );
};

export default FrameLabel;

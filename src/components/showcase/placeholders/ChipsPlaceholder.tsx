"use client";
import React from "react";

const ChipsPlaceholder = () => {
  return (
    <div className="w-full h-full bg-white dark:bg-neutral-950  p-4 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto bg-white dark:bg-neutral-900 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 overflow-hidden">
        <div className="p-2 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
        </div>
        <div className="p-6 flex flex-wrap items-center justify-center gap-2 bg-white dark:bg-neutral-900 h-fit">
          <div className="flex items-center gap-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 px-2.5 py-1">
            <div className="h-2 w-10 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-sky-300 dark:border-sky-700 bg-sky-50 dark:bg-sky-900/50 px-2.5 py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-sky-500"></div>
            <div className="h-2 w-12 bg-sky-200 dark:bg-sky-800/50 rounded-full"></div>
          </div>
          <div className="flex items-center gap-1.5 rounded-lg border border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/50 px-2.5 py-1">
            <div className="h-2 w-8 bg-green-200 dark:bg-green-800/50 rounded-full"></div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-yellow-300 dark:border-yellow-700 px-2.5 py-1">
            <div className="h-2 w-14 bg-yellow-200 dark:bg-yellow-800/50 rounded-full"></div>
          </div>
          <div className="flex items-center gap-1.5 rounded-lg border border-purple-300 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/50 px-2.5 py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
            <div className="h-2 w-10 bg-purple-200 dark:bg-purple-800/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChipsPlaceholder;

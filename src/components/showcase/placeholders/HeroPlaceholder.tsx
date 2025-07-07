"use client";
import React from "react";

const HeroPlaceholder = () => {
  return (
    <div className="w-full h-full bg-white dark:bg-neutral-950  p-4 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto bg-white dark:bg-neutral-900/50 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 overflow-hidden">
        <div className="p-2 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
          </div>
          <div className="w-1/2 h-2.5 bg-neutral-200 dark:bg-neutral-800 rounded-full"></div>
        </div>
        <div className="p-6 text-center flex flex-col items-center justify-center h-[160px] bg-white dark:bg-neutral-900">
          <h2 className="text-base leading-5 font-medium text-neutral-700 dark:text-neutral-200">
            Text to enrich your online hero section
          </h2>
          <div className="w-1/3 h-px bg-neutral-300 dark:bg-neutral-700 my-3"></div>
          <div className="flex justify-center items-center gap-2">
            <div className="h-6 w-20 bg-indigo-600 rounded-lg"></div>
            <div className="h-6 w-20 bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-700 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPlaceholder;

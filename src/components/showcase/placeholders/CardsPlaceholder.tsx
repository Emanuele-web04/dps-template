"use client";
import React from "react";

const CardsPlaceholder = () => {
  return (
    <div className="w-full h-full bg-white dark:bg-neutral-950  p-4 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto bg-white dark:bg-neutral-900/50 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 overflow-hidden">
        <div className="p-2 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
        </div>
        <div className="p-4 grid grid-cols-2 gap-3 bg-white dark:bg-neutral-900">
          <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-2 space-y-2">
            <div className="h-12 bg-neutral-200 dark:bg-neutral-800 rounded-md"></div>
            <div className="h-3 bg-neutral-200 dark:bg-neutral-800 rounded-full w-2/3"></div>
            <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full w-full"></div>
          </div>
          <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-2 space-y-2">
            <div className="h-12 bg-neutral-200 dark:bg-neutral-800 rounded-md"></div>
            <div className="h-3 bg-neutral-200 dark:bg-neutral-800 rounded-full w-2/3"></div>
            <div className="h-2 bg-neutral-200 dark:bg-neutral-800 rounded-full w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsPlaceholder;

"use client";
import React from "react";

const SystemPagesPlaceholder = () => {
  return (
    <div className="w-full h-full bg-white dark:bg-neutral-950 p-4 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto bg-white dark:bg-neutral-900/50 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 overflow-hidden">
        <div className="p-2 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
        </div>
        <div className="p-8 flex flex-col items-center justify-center text-center h-[160px] bg-white dark:bg-neutral-900">
          <div className="text-5xl font-light text-neutral-300 dark:text-neutral-700">
            404
          </div>
          <div className="h-2.5 bg-neutral-200 dark:bg-neutral-800 rounded-full w-1/3 mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default SystemPagesPlaceholder;

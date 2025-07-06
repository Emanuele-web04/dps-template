"use client";
import React from "react";

const NavbarsPlaceholder = () => {
  return (
    <div className="w-full h-full bg-white dark:bg-neutral-950  p-4 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto bg-white dark:bg-neutral-900/50 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 overflow-hidden">
        <div className="p-2 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
          </div>
        </div>
        <div className="p-4 bg-white dark:bg-neutral-900">
          <div className="flex items-center justify-between">
            <div className="w-3 h-3 bg-neutral-200 dark:bg-neutral-700 rounded-md"></div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-3 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              <div className="w-12 h-3 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
              <div className="w-12 h-3 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarsPlaceholder;

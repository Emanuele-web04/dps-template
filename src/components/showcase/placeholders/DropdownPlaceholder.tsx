"use client";
import React from "react";

const DropdownPlaceholder = () => {
  return (
    <div className="w-full h-full bg-white dark:bg-neutral-950  p-4 flex items-center justify-center">
      <div className="w-44">
        <div className="h-8 bg-white dark:bg-neutral-900/50 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700 w-full flex items-center justify-between px-2">
          <div className="h-3 w-16 bg-neutral-200 dark:bg-neutral-800 rounded-full"></div>
          <div className="w-3 h-3 bg-neutral-200 dark:bg-neutral-800 rounded-sm"></div>
        </div>
        <div className="h-auto bg-white dark:bg-neutral-900/50 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700 w-full mt-1 p-1 space-y-1">
          <div className="h-5 w-full bg-neutral-100 dark:bg-neutral-800 rounded-md"></div>
          <div className="h-5 w-full bg-indigo-600 dark:bg-indigo-600/20 rounded-md"></div>
          <div className="h-5 w-full bg-neutral-100 dark:bg-neutral-800 rounded-md"></div>
          <div className="h-5 w-full bg-neutral-100 dark:bg-neutral-800 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default DropdownPlaceholder;

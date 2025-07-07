"use client";
import React from "react";

const FormsPlaceholder = () => {
  return (
    <div className="w-full h-full bg-white dark:bg-neutral-950 p-4 flex items-center justify-center">
      <div className="w-full max-w-sm mx-auto bg-white dark:bg-neutral-900 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 p-4 space-y-3">
        <div className="space-y-1">
          <div className="h-2.5 w-1/4 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
          <div className="h-7 w-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg"></div>
        </div>
        <div className="space-y-1">
          <div className="h-2.5 w-1/4 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
          <div className="h-7 w-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg"></div>
        </div>
        <div className="pt-1">
          <div className="h-7 w-1/3 bg-indigo-600 rounded-lg ml-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default FormsPlaceholder;

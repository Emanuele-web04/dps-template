"use client";
import React from "react";

const LoginPlaceholder = () => {
  return (
    <div className="w-full h-full bg-white dark:bg-neutral-950  p-4 flex items-center justify-center">
      <div className="w-full max-w-xs mx-auto bg-white dark:bg-neutral-900 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 p-5 space-y-3">
        <div className="h-4 w-1/3 bg-neutral-200 dark:bg-neutral-800 rounded-full mx-auto"></div>
        <div className="space-y-2 pt-2">
          <div className="h-8 w-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg"></div>
          <div className="h-8 w-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg"></div>
          <div className="h-8 w-full bg-sky-500 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPlaceholder;

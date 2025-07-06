"use client";
import React from "react";

const WaitlistsPlaceholder = () => {
  return (
    <div className="w-full h-full bg-white dark:bg-neutral-950  p-4 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto bg-white dark:bg-neutral-900/50 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 overflow-hidden">
        <div className="p-6 flex flex-col items-center justify-center text-center h-[190px] bg-white dark:bg-neutral-900">
          <div className="w-7 h-7 bg-neutral-200 dark:bg-neutral-800 rounded-lg mb-2 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-neutral-400 dark:text-neutral-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <h3 className="text-md font-medium text-neutral-700 dark:text-neutral-200">
            Want updates?
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">
            Sign up to our newsletter
          </p>
          <div className="flex w-full max-w-xs justify-center gap-x-2">
            <div className="h-8 w-2/3 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg"></div>
            <div className="h-8 w-1/3 bg-sky-500 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistsPlaceholder;

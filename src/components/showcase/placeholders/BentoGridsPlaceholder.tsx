"use client";
import React from "react";

const BentoGridsPlaceholder = () => {
  return (
    <div className="w-full h-full bg-white dark:bg-neutral-950 p-4 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto bg-white dark:bg-neutral-900/50 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 overflow-hidden">
        <div className="p-6 flex flex-col items-center justify-center text-center h-[190px] bg-white dark:bg-neutral-900">
          <h3 className="text-md font-medium text-neutral-700 dark:text-neutral-200 mb-3">
            A better workflow
          </h3>
          <div className="w-full grid grid-cols-5 grid-rows-2 gap-1.5">
            <div className="col-span-3 row-span-1 bg-neutral-100 dark:bg-neutral-800/80 rounded-lg border border-neutral-200 dark:border-neutral-700 flex items-center justify-center p-2 gap-2">
              <div className="w-5 h-5 rounded-full border border-neutral-300 dark:border-neutral-600 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600"></div>
              </div>
              <div className="w-full h-1.5 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
            </div>
            <div className="col-span-2 row-span-1 bg-neutral-100 dark:bg-neutral-800/80 rounded-lg border border-neutral-200 dark:border-neutral-700"></div>
            <div className="col-span-2 row-span-1 bg-neutral-100 dark:bg-neutral-800/80 rounded-lg border border-neutral-200 dark:border-neutral-700 flex items-center p-1.5">
              <div className="w-7 h-7 rounded-full border-2 border-green-400/80"></div>
            </div>
            <div className="col-span-3 row-span-1 bg-neutral-100 dark:bg-neutral-800/80 rounded-lg border border-neutral-200 dark:border-neutral-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGridsPlaceholder;

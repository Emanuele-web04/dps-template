"use client";
import React from "react";
import { LuStar } from "@/utils/icons";
const SoftLabel = () => {
  return (
    <div className="relative mx-3 inline-flex items-center justify-center">
      <div className="relative z-10 flex items-center gap-2 rounded-xl bg-emerald-50 px-4.5 py-2.5 font-semibold text-emerald-900 drop-shadow-lg shadow- ring-3 ring-white dark:bg-emerald-900 dark:text-emerald-50 dark:ring-emerald-600">
        <LuStar className="text-emerald-900 dark:text-emerald-50" />
        <span>Reviews</span>
      </div>
      <div className="absolute -left-1 z-20 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-emerald-50 ring-3 ring-white dark:bg-emerald-900 dark:ring-emerald-600"></div>
      <div className="absolute -right-1 z-20 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-emerald-50 ring-3 ring-white dark:bg-emerald-900 dark:ring-emerald-600"></div>
    </div>
  );
};

export default SoftLabel;

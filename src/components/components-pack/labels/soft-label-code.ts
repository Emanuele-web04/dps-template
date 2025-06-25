export const softLabelCode = `
import React from "react";

const SoftLabel = () => {
  return (
    <div className="relative mx-3 inline-flex items-center justify-center">
      <hr className="absolute top-1/2 w-32 -translate-y-1/2 border-dashed border-gray-300 dark:border-gray-700" />
      <div className="relative z-10 flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-2 font-semibold text-emerald-800 drop-shadow-lg shadow- ring-3 ring-white dark:bg-emerald-900 dark:text-emerald-100 dark:ring-emerald-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-emerald-900 dark:text-emerald-200"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        <span>Reviews</span>
      </div>
      <div className="absolute -left-1.5 z-20 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-emerald-50 ring-3 ring-white dark:bg-emerald-900 dark:ring-emerald-800"></div>
      <div className="absolute -right-1.5 z-20 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-emerald-50 ring-3 ring-white dark:bg-emerald-900 dark:ring-emerald-800"></div>
    </div>
  );
};

export default SoftLabel;
`; 
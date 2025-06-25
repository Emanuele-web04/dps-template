export const filterChipCode = `
import React from "react";

interface FilterChipProps {
  label?: string;
  count?: number;
  onClose?: () => void;
}

const FilterChip = ({ 
  label = "Filter", 
  count = 2,
  onClose
}: FilterChipProps) => {
  return (
    <div className="inline-flex items-center gap-2 py-2.5 bg-white rounded-2xl shadow-lg dark:bg-neutral-900">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 ml-3 rounded-md text-neutral-500 dark:text-neutral-400"
      >
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
      
      <span className="font-semibold text-neutral-900 dark:text-neutral-100">
        {label}
      </span>
      <div className="w-1 h-1 rounded-full bg-neutral-200 dark:bg-neutral-600"></div>
      
      <span className="font-semibold mr-1 text-sky-600 dark:text-blue-400">
        {count}
      </span>
      
      {/* Divider */}
      <div className="w-px h-4 bg-neutral-200 dark:bg-neutral-600"></div>
      
      <button 
        onClick={onClose}
        className="hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer rounded-lg transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 mr-3 text-neutral-400 dark:text-neutral-500"
        >
          <path d="M18 6L6 18" />
          <path d="M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default FilterChip;
`; 
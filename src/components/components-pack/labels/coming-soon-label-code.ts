export const comingSoonLabelCode = `
import React from "react";

interface ComingSoonLabelProps {
  title?: string;
  subtitle?: string;
}

const ComingSoonLabel = ({ 
  title = "Launching our product in Q3", 
  subtitle = "Coming soon" 
}: ComingSoonLabelProps) => {
  return (
    <div className="inline-flex items-center pl-2 sm:pl-3 gap-1 sm:gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-sky-600 to-blue-600 text-white shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
      >
        <path d="M4.5 16.5c-1.5 1.5-1.5 3.5 0 5s3.5 1.5 5 0L12 19l2.5 2.5c1.5 1.5 3.5 1.5 5 0s1.5-3.5 0-5L17 14l2.5-2.5c1.5-1.5 1.5-3.5 0-5s-3.5-1.5-5 0L12 9 9.5 6.5c-1.5-1.5-3.5-1.5-5 0s-1.5 3.5 0 5L7 14z"/>
      </svg>
      <span className="font-medium text-xs sm:text-sm truncate max-w-[120px] sm:max-w-none">{title}</span>
      <div className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-white/20 backdrop-blur-sm m-0.5 sm:m-1 p-1.5 sm:p-2">
        <span className="text-[10px] sm:text-xs font-semibold whitespace-nowrap">{subtitle}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0"
        >
          <path d="m9 11 3 3L22 4"/>
          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.87 0 5.44 1.34 7.1 3.44"/>
        </svg>
      </div>
    </div>
  );
};

export default ComingSoonLabel;
`; 
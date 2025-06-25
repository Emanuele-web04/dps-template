export const cryptoLabelCode = `
import React from "react";

interface CryptoLabelProps {
  percentage?: number;
  cryptoName?: string;
}

const CryptoLabel = ({ percentage = 12.5, cryptoName = "Bitcoin" }: CryptoLabelProps) => {
  const isPositive = percentage >= 0;
  
  return (
    <div className="inline-flex items-center gap-2 rounded-xl ring-1 ring-neutral-300 dark:ring-neutral-700 bg-background px-3 py-2 text-sm font-medium text-foreground shadow-sm">
      <div className={\`w-0 h-0 \${
        isPositive 
          ? "border-l-[3px] border-r-[3px] border-b-[4px] border-l-transparent border-r-transparent border-b-green-500" 
          : "border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-red-500"
      }\`}></div>
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 text-amber-500 dark:text-amber-400"
        fill="currentColor"
      >
        <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.546z M16.231 11.1c.23-1.518-.93-2.332-2.51-2.882l.512-2.054-1.253-.312-.5 1.998c-.329-.082-.667-.159-1.005-.235l.504-2.018-1.252-.312-.512 2.054c-.272-.062-.539-.125-.799-.191l.001-.004-1.726-.431-.333 1.337s.93.213.91.226c.508.127.6.462.584.728L8.34 13.53c.035.009.08.022.13.042l-.132-.033-.820 3.283c-.062.154-.22.385-.576.297.013.018-.91-.227-.91-.227l-.62 1.43 1.63.406c.302.076.598.155.89.229l-.515 2.067 1.252.311.512-2.052c.342.093.673.178 1 .258l-.51 2.038 1.253.311.515-2.066c2.123.402 3.72.24 4.394-1.681.544-1.548-.027-2.44-1.148-3.022.817-.188 1.432-.723 1.598-1.831z M13.8 15.931c-.385 1.549-2.988.712-3.836.501l.685-2.744c.847.211 3.551.629 3.151 2.243z M14.186 11.069c-.351 1.408-2.52.694-3.223.518l.62-2.49c.704.175 2.967.502 2.603 1.972z"/>
      </svg>
      <span>{cryptoName}</span>
      <span className={\`font-semibold ml-2 \${
        isPositive 
          ? "text-green-600 dark:text-green-400" 
          : "text-red-600 dark:text-red-400"
      }\`}>
        {isPositive ? "+" : ""}{percentage.toFixed(1)}%
      </span>
    </div>
  );
};

export default CryptoLabel;
`;

"use client";
import React from "react";
import { SiBitcoinsv } from "@/utils/icons";

interface CryptoLabelProps {
  percentage?: number;
  cryptoName?: string;
}

const CryptoLabel = ({
  percentage = 12.5,
  cryptoName = "Bitcoin",
}: CryptoLabelProps) => {
  const isPositive = percentage >= 0;

  return (
    <div className="inline-flex items-center dark:bg-neutral-900 gap-2 rounded-xl ring-1 ring-neutral-300 dark:ring-neutral-700 px-3 py-2 text-sm font-medium text-foreground shadow-sm">
      <div
        className={`w-0 h-0 ${
          isPositive
            ? "border-l-[3px] border-r-[3px] border-b-[4px] border-l-transparent border-r-transparent border-b-green-500"
            : "border-l-[3px] border-r-[3px] border-t-[4px] border-l-transparent border-r-transparent border-t-red-500"
        }`}
      ></div>
      <SiBitcoinsv className="w-4 h-4 text-amber-500 dark:text-amber-400" />
      <span className="text-neutral-900 dark:text-neutral-100">{cryptoName}</span>
      <span
        className={`font-semibold ml-2 ${
          isPositive
            ? "text-green-600 dark:text-green-400"
            : "text-red-600 dark:text-red-400"
        }`}
      >
        {isPositive ? "+" : ""}
        {percentage.toFixed(1)}%
      </span>
    </div>
  );
};

export default CryptoLabel;

"use client";
import React from "react";

const FeatureList = () => (
  <div className="space-y-2.5 mt-3">
    {Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 bg-neutral-300 dark:bg-neutral-600 rounded-full"></div>
        <div className="w-full h-2 bg-neutral-200 dark:bg-neutral-700/80 rounded-full"></div>
      </div>
    ))}
  </div>
);

const PricingCard = ({
  price,
  highlighted = false,
}: {
  price: string;
  highlighted?: boolean;
}) => (
  <div
    className={`
      ${highlighted ? "h-full bg-white dark:bg-neutral-900 shadow-md border-2 border-sky-500" : "h-[95%] bg-white dark:bg-neutral-900/50 shadow-sm border border-neutral-200 dark:border-neutral-800"}
      rounded-xl p-3 flex flex-col
    `}
  >
    <p
      className={`text-lg font-medium ${
        highlighted
          ? "text-neutral-800 dark:text-neutral-100"
          : "text-neutral-600 dark:text-neutral-300"
      }`}
    >
      {price}
    </p>
    <FeatureList />
    <div
      className={`h-6 w-full ${
        highlighted ? "bg-sky-500" : "bg-neutral-200 dark:bg-neutral-700/80"
      } rounded-lg mt-3`}
    ></div>
  </div>
);

const PricingSectionsPlaceholder = () => {
  return (
    <div className="w-full h-full bg-white dark:bg-neutral-950  p-4 flex items-center justify-center">
      <div className="w-full max-w-lg mx-auto grid grid-cols-2 gap-2 items-center">
        <PricingCard price="$9/m" />
        <PricingCard price="$19/m" highlighted />
      </div>
    </div>
  );
};

export default PricingSectionsPlaceholder;

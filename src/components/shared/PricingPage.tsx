"use client";

import React from "react";
import SegmentedPicker, {
  SegmentedOption,
} from "@/components/ui/segmented-picker";
import PricingContent from "@/components/pricing/PricingContent";
import usePricingFilter, { PricingFilter } from "@/hooks/usePricingFilter";

const PricingPage: React.FC = () => {
  const { activeFilter, filteredPricing, handleFilterChange, getVariant } =
    usePricingFilter();

  // Segmented picker options
  const pickerOptions: SegmentedOption[] = [
    { id: "nextjs", label: "Next.js", value: "nextjs" },
    { id: "swiftui", label: "SwiftUI", value: "swiftui" },
    { id: "all", label: "Both", value: "all" },
  ];

  // Type-safe onChange handler
  const handlePickerChange = (value: string) => {
    handleFilterChange(value as PricingFilter);
  };

  return (
    <div className="bg-clean min-h-screen flex flex-col items-center justify-center mx-auto sm:p-12 p-6 w-full">
      <div className="flex flex-col mt-10 max-w-7xl gap-12">
        {/* Header */}
        <div className="flex flex-col w-full text-center gap-8">
          <div>
            <h1 className="title bg-gradient-to-b py-3 pr-0.5 bg-clip-text text-transparent from-neutral-950 via-neutral-900 to-neutral-600 dark:from-neutral-200 dark:via-neutral-300 dark:to-neutral-500">
              Pricing
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400">
              Find the best price for your necessity.
            </p>
          </div>

          {/* Segmented Picker */}
          <div className="flex justify-center">
            <SegmentedPicker
              options={pickerOptions}
              value={activeFilter}
              onChange={handlePickerChange}
            />
          </div>
        </div>

        {/* Pricing Content */}
        <div className="flex font-inter text-primary tracking-tight flex-col gap-3">
          <PricingContent
            pricings={filteredPricing}
            variant={getVariant(activeFilter)}
            filter={activeFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

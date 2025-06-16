"use client";

import React, { useState, useCallback, useMemo } from "react";
import { cn } from "@/lib/cn";

export interface SegmentedOption {
  id: string;
  label: string;
  value: string;
}

interface SegmentedPickerProps {
  options: SegmentedOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const SegmentedPicker: React.FC<SegmentedPickerProps> = ({
  options,
  value,
  onChange,
  className,
}) => {
  // Memoize the selected index for indicator positioning
  const selectedIndex = useMemo(
    () => options.findIndex((option) => option.value === value),
    [options, value]
  );

  // Simple change handler
  const handleOptionChange = useCallback(
    (newValue: string) => {
      if (newValue === value) return;
      onChange(newValue);
    },
    [value, onChange]
  );

  return (
    <div
      className={cn(
        "relative inline-flex bg-white shadow-md dark:bg-neutral-900 ring-neutral-200 dark:ring-neutral-800 ring-1 rounded-xl p-1",
        className
      )}
    >
      {/* Options */}
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => handleOptionChange(option.value)}
          className={cn(
            "relative z-10 cursor-pointer flex-1 w-20 h-8 text-center md:text-base text-sm font-medium rounded-lg transition-colors duration-200",
            option.value === value
              ? "text-gray-900 dark:text-white bg-neutral-100 dark:bg-neutral-800 "
              : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default SegmentedPicker;
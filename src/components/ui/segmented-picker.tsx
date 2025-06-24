"use client";

import React, { useEffect, useRef, useState } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<{
    width: number;
    left: number;
  }>({ width: 0, left: 0 });

  const handleOptionChange = (newValue: string) => {
    if (newValue === value) return;
    onChange(newValue);
  };

  // Update indicator position when value changes
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const selectedIndex = options.findIndex(option => option.value === value);
    
    if (selectedIndex === -1) return;

    const buttons = container.querySelectorAll('button');
    const selectedButton = buttons[selectedIndex] as HTMLElement;
    
    if (selectedButton) {
      setIndicatorStyle({
        width: selectedButton.offsetWidth,
        left: selectedButton.offsetLeft,
      });
    }
  }, [value, options]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative shadow-[inset_0_4px_10px_-9px_rgba(0,0,0,1)] dark:shadow-[inset_0_4px_10px_-8px_rgba(255,255,255,1)] inline-flex font-inter tracking-tight bg-neutral-100 dark:bg-neutral-900 ring-neutral-200 dark:ring-neutral-800 ring-1 rounded-full p-1",
        className
      )}
    >
      {/* Animated background indicator */}
      <div
        className="absolute top-1 bottom-1 bg-white dark:bg-neutral-700 rounded-full transition-all duration-300 ease-out shadow-sm z-0"
        style={{
          width: `${indicatorStyle.width}px`,
          left: `${indicatorStyle.left}px`,
        }}
      />
      
      {/* Options */}
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => handleOptionChange(option.value)}
          className={cn(
            "relative z-10 cursor-pointer flex-1 w-20 h-8 text-center md:text-base text-sm font-medium rounded-full transition-colors duration-200",
            option.value === value
              ? "text-neutral-900 dark:text-white"
              : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default SegmentedPicker;
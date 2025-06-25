"use client";
import React from "react";
import { TbX, LuFilter } from "@/utils/icons";

interface FilterChipProps {
  label?: string;
  count?: number;
  onClose?: () => void;
}

const FilterChip = ({
  label = "Filter",
  count = 2,
  onClose,
}: FilterChipProps) => {
  return (
    <div className="inline-flex items-center gap-2 py-2.5 bg-white rounded-2xl shadow-lg dark:bg-neutral-900">
      <LuFilter className="w-4 h-4 ml-3 rounded-md text-neutral-500 dark:text-neutral-400" />

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
        <TbX className="w-4 h-4 mr-3 text-neutral-400 dark:text-neutral-500" />
      </button>
    </div>
  );
};

export default FilterChip;

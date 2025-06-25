"use client";
import React from "react";
import { LuRocket, LuSparkles } from "@/utils/icons";

interface ComingSoonLabelProps {
  title?: string;
  subtitle?: string;
}

const ComingSoonLabel = ({
  title = "Launching our product in Q3",
  subtitle = "Coming soon",
}: ComingSoonLabelProps) => {
  return (
    <div className="inline-flex items-center pl-2 sm:pl-3 gap-1 sm:gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-sky-600 to-blue-600 text-white shadow-lg">
      <LuRocket className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
      <span className="font-medium text-xs sm:text-sm">{title}</span>
      <div className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-white/20 backdrop-blur-sm m-0.5 sm:m-1 p-1.5 sm:p-2">
        <span className="text-[10px] sm:text-xs font-semibold whitespace-nowrap">
          {subtitle}
        </span>
        <LuSparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
      </div>
    </div>
  );
};

export default ComingSoonLabel;

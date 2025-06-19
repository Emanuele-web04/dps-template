"use client";

import React, { useState } from "react";
import Code from "../Code";
import { TbCircleCheckFilled } from "@/utils/icons";
import { cn } from "@/lib/cn";

const CopyCode = ({
  code,
  language,
  color,
}: {
  code: string;
  language: string;
  color?: string;
}) => {
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    if (!copy) {
      navigator.clipboard.writeText(code);
      setCopy(true);
      setTimeout(() => {
        setCopy(false);
      }, 1200);
    }
  };

  return (
    <div className="relative">
      <div
        className={cn(
          "text-primary absolute top-1/2 left-1/2 transition-all transform -translate-x-1/2 -translate-y-1/2 z-10",
          copy
            ? "opacity-100 scale-100"
            : "scale-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="flex gap-x-1 px-3 py-2 bg-black dark:bg-white rounded-xl sm:text-base text-sm items-center">
          <TbCircleCheckFilled className="text-emerald-500" />
          <p className="text-white font-medium dark:text-black">Copied!</p>
        </div>
      </div>
      <div 
        className=" rounded-xl ring-1 max-h-130 ring-neutral-200 dark:ring-neutral-800 overflow-hidden flex flex-col bg-neutral-50 dark:bg-neutral-900 cursor-pointer"
        onClick={handleCopy}
      >
        <div className="overflow-clip code-scrollbar">
          <Code className={language} color={color}>
            {code}
          </Code>
        </div>
      </div>
    </div>
  );
};

export default CopyCode;
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
    <>
      <div
        className={cn(
          "text-primary absolute top-1/2 left-1/2 transition-all transform -translate-x-1/2 -translate-y-1/2",
          copy
            ? "opacity-100 scale-100"
            : "scale-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="flex gap-x-1 p-2 bg-black rounded-xl  text-sm items-center">
          <TbCircleCheckFilled className="text-emerald-500" />
          <p className="text-white dark:text-black">Copied!</p>
        </div>
      </div>
      <button
        onClick={handleCopy}
        className="ring-1 overflow-clip ring-neutral-200 dark:ring-neutral-800 rounded-2xl cursor-pointer"
      >
        <Code className={language} color={color}>
          {code}
        </Code>
      </button>
    </>
  );
};

export default CopyCode;

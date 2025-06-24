"use client";

import { cn } from "@/lib/cn";
import { getAllSlugsSync, templates } from "@/lib/templates";
import { TemplateType } from "@/types/template";
import { LuChevronDown } from "@/utils/icons";
import Link from "next/link";
import React, { useState } from "react";

const DropdownMobile = () => {
  const [open, setOpen] = useState(false);

  const handleOpening = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={handleOpening}
        className="flex relative items-center w-fit text-primary lg:hidden max-w-full px-3 py-1.5 minimal-button gap-x-2"
      >
        <p className="">Templates</p>
        <LuChevronDown
          className={cn(
            "text-primary transition-all",
            open ? "rotate-180" : "rotate-0"
          )}
        />
      </button>
      <span
        className={cn(
          "absolute z-50 -bottom-40 max-w-full! sm:w-80 w-50 justify-start items-start bg-white dark:bg-neutral-900 transition-all rounded-xl ring-1 ring-neutral-200 dark:ring-neutral-700",
          open
            ? "opacity-100 scale-100 shadow-lg dark:shadow-black/40"
            : "opacity-0 scale-0 cursor-none pointer-events-none"
        )}
      >
        <div className="flex divide-y items-start divide-neutral-200 dark:divide-neutral-700 flex-col">
          {templates.map((t, i) => (
            <Link
              key={i}
              className="w-full text-left"
              href={`/templates/${t.slug}`}
            >
              <p className="font-inter tracking-tight hover:text-black p-2 dark:hover:text-white dark:text-neutral-300 text-neutral-800 text-sm">
                {t.title}
              </p>
            </Link>
          ))}
        </div>
      </span>
    </>
  );
};

export default DropdownMobile;

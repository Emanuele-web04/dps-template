"use client";

import CodeBlock from "@/components/codegift/Codeblock";
import SimpleTable from "./SimpleTable";
import { LuCheck, LuCopy, LuGift } from "react-icons/lu";
import { codeGifts } from "@/lib/code-gifts";
import { useState } from "react";
import { CodeGiftType } from "@/types/code-gift";
import { motion, AnimatePresence } from "framer-motion";

export default function CodeGift() {
  // Initialize with the first file so `file` is never undefined
  const [file, setFile] = useState<CodeGiftType>(codeGifts[0]);
  const [copy, setCopy] = useState(false);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1200);
  };

  return (
    <div className="section-container xl:max-w-7xl!">
      <div className="text-section mb-8">
        <span className="relative">
          <span className="absolute -top-5 rotate-30 -right-7 bg-gradient-to-br from-sky-50 via-sky-100 to-sky-400 backdrop-blur-2xl ring-2 ring-sky-500 rounded-full">
            <LuGift className="text-lg md:text-2xl text-sky-500 m-2" />
          </span>
          <h1 className="title">A little gift for you!</h1>
        </span>
        <p className="p-section mt-2 font-inter">
          Here's a quick snippet showing a table with users name, role and
          status, full responsive, with light and dark mode.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:max-h-120 max-h-full">
        {/* Left: Preview of the table */}
        <div className="col-span-1">
          <SimpleTable />
        </div>

        {/* Right: Code panel with tabs and animated transitions */}
        <div className="max-w-full rounded-xl ring-1 max-h-130 ring-neutral-800 overflow-clip flex flex-col code-scrollbar col-span-1 bg-neutral-900">
          {/* Tab bar */}
          <div className="flex w-full px-4 py-3 justify-between items-center">
            <div className="relative flex gap-4">
              {codeGifts.map((cg) => {
                const isActive = cg.filename === file.filename;
                return (
                  <motion.button
                    key={cg.filename}
                    onClick={() => setFile(cg)}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      relative cursor-pointer text-xs md:text-sm font-mono transition-colors 
                      ${isActive
                        ? "text-white pb-1"
                        : "text-gray-400 hover:text-gray-200"}
                    `}
                  >
                    {cg.filename}.{cg.language}

                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute hidden md:block bottom-0 left-0 h-[0.3px] bg-white w-full"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Copy button */}
            <button
              onClick={() => handleCopy(file.code)}
              className="text-neutral-400 font-medium cursor-pointer focus:outline-none"
            >
              {copy ? <LuCheck /> : <LuCopy />}
            </button>
          </div>

          {/* Animated code panel */}
          <div className="relative flex-1">
            <AnimatePresence>
              <motion.div
                key={file.filename}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="w-full"
              >
                <CodeBlock className={`language-${file.language}`}>
                  {file.code}
                </CodeBlock>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

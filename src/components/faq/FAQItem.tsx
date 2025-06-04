"use client";

import { FAQ } from "@/types/faq";
import React from "react";
import { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

const FAQItem = ({ question, answer }: FAQ) => {
  const [open, setOpen] = useState(false);
  const handleOpening = () => {
    setOpen((prev) => !prev);
  };
  return (
    <button
      className="flex flex-col min-w-[360px] xs:min-w-md sm:min-w-2xl md:min-w-4xl lg:min-w-5xl items-center justify-center pb-4 w-full"
      onClick={handleOpening}
    >
      <div className="flex flex-col px-4 md:px-6 lg:px-8 max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl w-full items-center justify-between">
        <div className="w-full flex justify-start items-center">
          <h6 className="text-sm pr-3 sm:text-base md:text-lg font-inter w-full text-left tracking-tight font-semibold">
            {question}
          </h6>
          <div
            className={`transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
          >
            {open ? <LuMinus /> : <LuPlus />}
          </div>
        </div>
        <div
          className={`overflow-hidden transition-all w-full duration-300 ease-in-out ${
            open ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <p className="p-card max-w-full! w-full text-left!">{answer}</p>
        </div>
      </div>
    </button>
  );
};

export default FAQItem;

import { heroLabels } from "@/lib/heroLabels";
import React from "react";

const HeroLabels = () => {
  return (
    <div className="flex justify-between gap-4 items-center">
      {heroLabels.map((label, i) => {
        const Icon = label.icon;
        return (
          <div key={i} className="flex items-center gap-1.5 bg-white/80 p-1 sm:p-1.5 rounded-lg sm:rounded-xl ring-1 ring-neutral-100">
            <div className="flex gap-0.5 items-center p-1 bg-white text-gray-400 rounded-sm ring-1 ring-neutral-200 shadow-sm">
              <Icon className="text-xxs sm:text-sm" />
              {i == 1 ? <p className="text-[8px] font-semibold">P</p> : <></>}
            </div>
            <p className="font-semibold text-xxs sm:text-sm font-inter text-gray-700 tracking-tight">{label.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HeroLabels;

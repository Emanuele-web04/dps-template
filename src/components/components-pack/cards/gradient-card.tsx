"use client";

import { BiLogoTypescript, FaReact } from "@/utils/icons";
import { SiTailwindcss } from "@/utils/icons";
import { DiSwift } from "@/utils/icons";
import { RiNextjsFill } from "@/utils/icons";

const ToolsCard = () => {
  return (
    <div className="relative w-[280px] h-[320px] mx-auto">
      <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-b from-neutral-200/20 via-white to-neutral-200/20 dark:bg-gradient-to-b dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 shadow-[inset_0_0_12px_4px_rgba(255,255,255,1)] dark:shadow-[inset_0_0_12px_2px_rgba(255,255,255,0.1)]">
        {/* Tools Icons */}
        <div className="flex flex-col h-full">
          <div className="flex justify-center items-center h-full">
            <div className="flex items-center justify-center gap-3">
              {/* Adobe Illustrator */}
              <div className="w-8 h-8 bg-neutral-200 dark:bg-neutral-950 rounded-full flex items-center justify-center shadow-[inset_0_0_12px_2px_rgba(255,255,255,1)] dark:shadow-[inset_0_0_12px_2px_rgba(255,255,255,0.2)]">
                <BiLogoTypescript className="w-4 h-4 text-sky-600" />
              </div>

              {/* CleanMyMac */}
              <div className="w-10 h-10 bg-neutral-200 dark:bg-neutral-950 rounded-full flex items-center justify-center shadow-[inset_0_0_12px_2px_rgba(255,255,255,1)] dark:shadow-[inset_0_0_12px_2px_rgba(255,255,255,0.2)]">
                <RiNextjsFill className="w-5 h-5 text-black dark:text-white" />
              </div>

              {/* Swift */}
              <div className="w-12 h-12 bg-neutral-200 dark:bg-neutral-950 rounded-full flex items-center justify-center shadow-[inset_0_0_12px_2px_rgba(255,255,255,1)] dark:shadow-[inset_0_0_12px_2px_rgba(255,255,255,0.2)]">
                <DiSwift className="w-7 h-7 text-orange-600 " />
              </div>

              {/* React */}
              <div className="w-10 h-10 bg-neutral-200 dark:bg-neutral-950 rounded-full flex items-center justify-center shadow-[inset_0_0_12px_2px_rgba(255,255,255,1)] dark:shadow-[inset_0_0_12px_2px_rgba(255,255,255,0.2)]">
                <FaReact className="w-5 h-5 text-cyan-500" />
              </div>

              {/* Sparkles */}
              <div className="w-8 h-8 bg-neutral-200 dark:bg-neutral-950 rounded-full flex items-center justify-center shadow-[inset_0_0_12px_2px_rgba(255,255,255,1)] dark:shadow-[inset_0_0_12px_2px_rgba(255,255,255,0.2)]">
                <SiTailwindcss className="w-4 h-4 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Title and Description */}
          <div className="flex flex-1 flex-col px-6 pb-6">
            <h2 className="text-neutral-900 dark:text-white text-full font-bold ">
              Tool Gradient Card
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-xs">
              A card that showcases a set of tools with nice gradients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard;

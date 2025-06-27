export const toolsCardCode = `"use client";

import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { DiSwift } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import { TbSparklesTabler } from "react-icons/tb";

const ToolsCard = () => {
  return (
    <div className="relative w-[320px] h-[400px] mx-auto">
      <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gray-900 dark:bg-gray-100 border border-gray-800 dark:border-gray-200">
        
        {/* Tools Icons */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center gap-3">
            {/* Adobe Illustrator */}
            <div className="w-14 h-14 bg-gray-800 dark:bg-gray-200 rounded-2xl flex items-center justify-center border border-gray-700 dark:border-gray-300">
              <span className="text-orange-500 dark:text-orange-600 font-bold text-lg">AI</span>
            </div>
            
            {/* CleanMyMac */}
            <div className="w-14 h-14 bg-gray-800 dark:bg-gray-200 rounded-2xl flex items-center justify-center border border-gray-700 dark:border-gray-300">
              <div className="w-7 h-7 bg-gray-600 dark:bg-gray-500 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white dark:bg-gray-100 rounded-sm"></div>
              </div>
            </div>
            
            {/* Swift */}
            <div className="w-14 h-14 bg-gray-800 dark:bg-gray-200 rounded-2xl flex items-center justify-center border border-gray-700 dark:border-gray-300">
              <DiSwift className="w-7 h-7 text-orange-400 dark:text-orange-500" />
            </div>
            
            {/* React */}
            <div className="w-14 h-14 bg-gray-800 dark:bg-gray-200 rounded-2xl flex items-center justify-center border border-gray-700 dark:border-gray-300">
              <FaReact className="w-7 h-7 text-blue-400 dark:text-blue-500" />
            </div>
            
            {/* Sparkles */}
            <div className="w-14 h-14 bg-gray-800 dark:bg-gray-200 rounded-2xl flex items-center justify-center border border-gray-700 dark:border-gray-300">
              <TbSparklesTabler className="w-7 h-7 text-purple-400 dark:text-purple-500" />
            </div>
          </div>
        </div>

        {/* Title and Description */}
        <div className="absolute bottom-16 left-6 right-6">
          <h2 className="text-white dark:text-gray-900 text-2xl font-bold mb-3">Damn good card</h2>
          <p className="text-gray-400 dark:text-gray-600 text-sm leading-relaxed">
            A card that showcases a set of tools that you use to create your product.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToolsCard;

// Usage:
// <ToolsCard />
// Tools showcase card with dark/light mode support and technology icons`; 
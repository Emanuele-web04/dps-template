export const searchCardCode = `"use client";

import { LuSearch, LuCalendar, BiCommand, LuFile } from "lucide-react";
import {
  BsEmojiSmile,
  BsCalculator,
  BsPerson,
  BsCreditCard,
} from "react-icons/bs";

const SearchCard = () => {
  return (
    <div className="relative w-[280px] h-full mx-auto">
      <div className="relative w-full flex flex-col gap-y-2 h-full rounded-2xl overflow-hidden bg-white dark:bg-indigo-950/30 p-3">
        {/* Search Input */}
        <div className="relative mb-0.5">
          <div className="flex ring-1 ring-neutral-200/50 dark:ring-neutral-700 gap-x-2 items-center bg-neutral-100 dark:bg-indigo-950/40 rounded-lg px-3 py-1">
            <LuSearch className="w-4 h-4 text-neutral-400 dark:text-slate-500" />
            <input
              type="text"
              placeholder="Type a command or search..."
              className="bg-transparent sm:text-xs text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-slate-500 flex-1 outline-none text-base"
            />
          </div>
        </div>

        {/* Suggestions Section */}
        <div className="flex flex-col gap-y-1">
          <h3 className="text-neutral-400 dark:text-indigo-200/50 text-xs font-medium">
            Suggestions
          </h3>
          <div className="flex flex-col gap-y-1">
            <div className="flex items-center justify-between px-2 py-1 hover:bg-gradient-to-r hover:from-neutral-100 hover:to-transparent dark:hover:from-indigo-950 dark:hover:to-transparent rounded-lg cursor-pointer transition-colors">
              <div className="flex items-center">
                <LuCalendar className="w-4 h-4 text-neutral-700 dark:text-indigo-50 mr-3" />
                <span className="text-neutral-800 dark:text-indigo-50 text-sm">
                  Calendar
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between px-2 py-1 hover:bg-gradient-to-r hover:from-neutral-100 hover:to-transparent dark:hover:from-indigo-950 dark:hover:to-transparent rounded-lg cursor-pointer transition-colors">
              <div className="flex items-center">
                <LuFile className="w-4 h-4 text-neutral-700 dark:text-indigo-50 mr-3" />
                <span className="text-neutral-800 dark:text-indigo-50 text-sm">
                  Search File
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between px-2 py-1 hover:bg-gradient-to-r hover:from-neutral-100 hover:to-transparent dark:hover:from-indigo-950 dark:hover:to-transparent rounded-lg cursor-pointer transition-colors">
              <div className="flex items-center">
                <BsCalculator className="w-4 h-4 text-neutral-700 dark:text-indigo-50 mr-3" />
                <span className="text-neutral-800 dark:text-indigo-50 text-sm">
                  Calculator
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Divider */}
        <div className="h-px bg-neutral-200/50 dark:bg-indigo-800/30"></div>

        {/* Settings Section */}
        <div className="flex flex-col gap-y-1">
          <h3 className="text-neutral-400 dark:text-indigo-200/50 text-xs font-medium">
            Settings
          </h3>
          <div className="flex flex-col gap-y-1">
            <div className="flex items-center justify-between px-2 py-1 hover:bg-gradient-to-r hover:from-neutral-100 hover:to-transparent dark:hover:from-indigo-950 dark:hover:to-transparent rounded-lg cursor-pointer transition-colors">
              <div className="flex items-center">
                <BsPerson className="w-4 h-4 text-neutral-700 dark:text-indigo-50 mr-3" />
                <span className="text-neutral-800 dark:text-indigo-50 text-sm">
                  Profile
                </span>
              </div>
              <div className="flex items-center text-neutral-600 dark:text-indigo-500 text-xs">
                <BiCommand className="w-3 h-3 mr-0.5" />
                <span>P</span>
              </div>
            </div>
            <div className="flex items-center justify-between px-2 py-1 hover:bg-gradient-to-r hover:from-neutral-100 hover:to-transparent dark:hover:from-indigo-950 dark:hover:to-transparent rounded-lg cursor-pointer transition-colors">
              <div className="flex items-center">
                <BsCreditCard className="w-4 h-4 text-neutral-700 dark:text-indigo-50 mr-3" />
                <span className="text-neutral-800 dark:text-indigo-50 text-sm">
                  Billing
                </span>
              </div>
              <div className="flex items-center text-neutral-600 dark:text-indigo-500 text-xs">
                <BiCommand className="w-3 h-3 mr-0.5" />
                <span>S</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;`; 
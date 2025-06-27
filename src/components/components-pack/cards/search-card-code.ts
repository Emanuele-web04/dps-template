export const searchCardCode = `"use client";

import { LuSearch, LuCalendar } from "lucide-react";
import { BsEmojiSmile, BsCalculator, BsPerson, BsCreditCard } from "react-icons/bs";
import { BiCommand } from "react-icons/bi";

const SearchCard = () => {
  return (
    <div className="relative w-[320px] h-[400px] mx-auto">
      <div className="relative w-full h-full rounded-3xl overflow-hidden bg-slate-800 dark:bg-slate-900 p-4">
        
        {/* Search Input */}
        <div className="relative mb-6">
          <div className="flex items-center bg-slate-700 dark:bg-slate-800 rounded-lg px-3 py-3">
            <LuSearch className="w-4 h-4 text-slate-400 mr-3" />
            <input
              type="text"
              placeholder="Type a command or search..."
              className="bg-transparent text-slate-300 placeholder-slate-500 flex-1 outline-none text-sm"
            />
          </div>
        </div>

        {/* Suggestions Section */}
        <div className="mb-6">
          <h3 className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-3">
            Suggestions
          </h3>
          <div className="space-y-1">
            <div className="flex items-center justify-between px-3 py-2 hover:bg-slate-700 rounded-lg cursor-pointer transition-colors">
              <div className="flex items-center">
                <LuCalendar className="w-4 h-4 text-slate-400 mr-3" />
                <span className="text-slate-200 text-sm">Calendar</span>
              </div>
            </div>
            <div className="flex items-center justify-between px-3 py-2 hover:bg-slate-700 rounded-lg cursor-pointer transition-colors">
              <div className="flex items-center">
                <BsEmojiSmile className="w-4 h-4 text-slate-400 mr-3" />
                <span className="text-slate-200 text-sm">Search Emoji</span>
              </div>
            </div>
            <div className="flex items-center justify-between px-3 py-2 hover:bg-slate-700 rounded-lg cursor-pointer transition-colors">
              <div className="flex items-center">
                <BsCalculator className="w-4 h-4 text-slate-400 mr-3" />
                <span className="text-slate-200 text-sm">Calculator</span>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Section */}
        <div>
          <h3 className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-3">
            Settings
          </h3>
          <div className="space-y-1">
            <div className="flex items-center justify-between px-3 py-2 hover:bg-slate-700 rounded-lg cursor-pointer transition-colors">
              <div className="flex items-center">
                <BsPerson className="w-4 h-4 text-slate-400 mr-3" />
                <span className="text-slate-200 text-sm">Profile</span>
              </div>
              <div className="flex items-center text-slate-500 text-xs">
                <BiCommand className="w-3 h-3 mr-0.5" />
                <span>P</span>
              </div>
            </div>
            <div className="flex items-center justify-between px-3 py-2 hover:bg-slate-700 rounded-lg cursor-pointer transition-colors">
              <div className="flex items-center">
                <BsCreditCard className="w-4 h-4 text-slate-400 mr-3" />
                <span className="text-slate-200 text-sm">Billing</span>
              </div>
              <div className="flex items-center text-slate-500 text-xs">
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
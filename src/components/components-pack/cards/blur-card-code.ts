export const blurCardCode = `"use client";

import Image from "next/image";
import { LuNavigation, PiNavigationArrowFill } from "@/utils/icons";

const BlurCard = () => {
  return (
      <div className="relative w-70 h-60 rounded-[30px] shadow-md overflow-hidden ring-4 ring-white dark:ring-neutral-800">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Norwegian fjords"
          width={320}
          height={320}
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end">
          {/* Bottom section with progressive blur that fades upward */}
          <div
            className="relative h-32"
            style={{
              background: \`linear-gradient(to top, 
                rgba(0,0,0,0.8) 0%, 
                rgba(0,0,0,0.6) 30%, 
                rgba(0,0,0,0.3) 60%, 
                transparent 100%
              )\`,
            }}
          >
            {/* Progressive blur layers that fade out */}
            <div
              className="absolute inset-0 backdrop-blur-sm"
              style={{
                maskImage:
                  "linear-gradient(to top, black 40%, black 50%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to top, black 50%, black 40%, transparent 100%)",
              }}
            />
            <div
              className="absolute inset-0 backdrop-blur-[1px]"
              style={{
                maskImage:
                  "linear-gradient(to top, black 20%, transparent 80%)",
                WebkitMaskImage:
                  "linear-gradient(to top, black 20%, transparent 80%)",
              }}
            />

            {/* Text content */}
            <div className="flex items-end p-5 justify-between relative z-10 h-full">
              {/* Location Info */}
              <div className="text-white flex flex-col -space-y-1">
                <h2 className="font-semibold">Lofoten,</h2>
                <p className="text-xs text-neutral-500">Norway</p>
              </div>

              {/* Directions Button */}
              <button className="flex items-center gap-1.5 bg-white/20 dark:bg-white/10 backdrop-blur-xl text-white px-3 py-2 rounded-full hover:bg-black/60 transition-all duration-200">
                <PiNavigationArrowFill className="w-3.5 h-3.5 scale-x-[-1]" />
                <span className="text-xs font-medium">Directions</span>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default BlurCard;

// Usage:
// <BlurCard />
// Beautiful blur card with mountain background and location info`; 
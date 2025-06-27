export const blurCardCode = `"use client";

import Image from "next/image";
import { LuNavigation } from "react-icons/lu";

const BlurCard = () => {
  return (
    <div className="relative w-full flex justify-center min-w-80 max-w-sm mx-auto">
      <div className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-lg ring-4 ring-white">
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
          {/* Bottom section with blur background */}
          <div 
            className="flex items-end px-6 py-4 justify-between relative backdrop-blur-md"
            style={{
              background: \`linear-gradient(to top, 
                rgba(0,0,0,0.8) 0%, 
                rgba(0,0,0,0.6) 30%, 
                rgba(0,0,0,0.3) 60%, 
                rgba(0,0,0,0.1) 80%, 
                transparent 100%
              )\`
            }}
          >
            {/* Location Info */}
            <div className="text-white">
              <h2 className="text-xl font-semibold mb-0.5">Lofoten,</h2>
              <p className="text-sm text-white/90">Norway</p>
            </div>

            {/* Directions Button */}
            <button className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md text-white px-3 py-2 rounded-xl border border-white/20 hover:bg-black/60 transition-all duration-200">
              <LuNavigation className="w-3.5 h-3.5" />
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
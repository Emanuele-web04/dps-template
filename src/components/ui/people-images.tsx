"use client";

import React, { useState } from "react";
import Image from "next/image";
import { images } from "@/lib/images";

const ImagesPeople = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="">
      <div className="flex -space-x-3 relative">
        {images.map((item, i) => (
          <div
            key={i}
            className="relative"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Tooltip */}
            <div
              className={`absolute -top-17 left-1/2 transform font-sans font-bold -translate-x-1/2 bg-neutral-800 border-t-[1px] border-neutral-600 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap z-10 transition-all duration-200 ${
                hoveredIndex === i
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2 pointer-events-none"
              }`}
            >
              <div className="flex flex-col items-center">
                {item.name}
                <p className="text-xxs font-medium text-neutral-400">{item.role}</p>
                </div>
              {/* Arrow pointing down */}
              <div className="absolute  top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-6 border-t-6 border-transparent border-t-neutral-800"></div>
            </div>

            <Image
              src={item.src}
              alt={item.name}
              width={60}
              height={60}
              className={`rounded-full ring-2 ring-white w-14 h-14 object-cover cursor-pointer transition-all duration-200 ${
                hoveredIndex === i
                  ? "transform scale-110 ring-2 ring-blue-300 z-20 relative"
                  : "hover:ring-gray-300"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesPeople;

export const peopleImagesCode = `"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// People data - you can customize this array
const people = [
  {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    name: "Sarah Chen",
    role: "Senior Designer",
    status: "Active",
  },
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    name: "Marcus Rodriguez",
    role: "Lead Developer",
    status: "Away",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    name: "Emma Thompson",
    role: "Product Manager",
    status: "Offline",
  },
  {
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    name: "David Kim",
    role: "Frontend Developer",
    status: "Busy",
  },
  {
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    name: "Lisa Zhang",
    role: "UX Researcher",
    status: "Active",
  },
];

const PeopleImages = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleImageInteraction = (index: number) => {
    setHoveredIndex(hoveredIndex === index ? null : index);
  };

  const handleMouseEnter = (index: number) => {
    // Only set hover on desktop (devices with fine pointer)
    if (window.matchMedia('(hover: hover)').matches) {
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    // Only clear hover on desktop
    if (window.matchMedia('(hover: hover)').matches) {
      setHoveredIndex(null);
    }
  };

  // Close tooltip when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        !window.matchMedia('(hover: hover)').matches
      ) {
        setHoveredIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      <div ref={containerRef} className="flex -space-x-3 relative">
        {people.slice(0, 5).map((item, i) => (
          <div
            key={i}
            className="relative"
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleImageInteraction(i)}
            onTouchStart={() => handleImageInteraction(i)}
          >
            {/* Tooltip */}
            <div
              className={\`absolute -top-17 left-1/2 transform font-sans font-bold -translate-x-1/2 bg-white dark:bg-neutral-800 border-t-[1px] border-neutral-200 dark:border-neutral-600  text-black dark:text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap z-10 transition-all duration-200 \${
                hoveredIndex === i
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2 pointer-events-none"
              }\`}
            >
              <div className="flex flex-col items-center">
                {item.name}
                <p className="text-xxs font-medium text-neutral-400">{item.role}</p>
                </div>
              {/* Arrow pointing down */}
              <div className="absolute  top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-6 border-t-6 border-transparent border-t-white dark:border-t-neutral-800"></div>
            </div>

            <Image
              src={item.src}
              alt={item.name}
              width={60}
              height={60}
              className={\`rounded-full ring-2 ring-white w-14 h-14 object-cover cursor-pointer transition-all duration-200 \${
                hoveredIndex === i
                  ? "transform scale-110 ring-2 ring-blue-300 z-20 relative"
                  : "hover:ring-gray-300"
              }\`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleImages;

// Usage examples:
// <PeopleImages />
// Perfect for showing team members, testimonials, or user avatars
// Customize the people array with your own data and images`; 
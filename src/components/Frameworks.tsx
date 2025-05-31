'use client'
import { frameworks } from "@/lib/frameworks";
import { useState } from "react";

const Frameworks = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="max-w-2xl py-8">
      <div className="relative overflow-hidden">
        <div
          className={`flex flex-wrap gap-y-3 ${isPaused ? "pause-animation" : ""}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {
          frameworks
            .map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 text-neutral-500 whitespace-nowrap mx-5"
                >
                  <Icon className="text-3xl" />
                  <p className="font-bold text-sm font-inter tracking-tighter">
                    {f.name}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll-smooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll-smooth {
          animation: scroll-smooth 10s linear infinite;
        }
        .pause-animation {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Frameworks;

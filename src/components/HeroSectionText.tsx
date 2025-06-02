import React from "react";

const HeroSectionText = () => {
  return (
    <div className="w-fit">
      <h1 className="font-sans w-fit flex flex-col gap-3 sm:gap-5 font-bold tracking-tighter text-4xl sm:text-5xl md:text-6xl">
        <span>Enhance your </span>
        <span>
          <span className="bg-gradient-to-b pr-0.5 bg-clip-text text-transparent from-orange-300 via-orange-400 to-orange-600">
            Apps
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-b pr-0.5 bg-clip-text text-transparent from-gray-200 via-gray-300 to-gray-500">
            SaaS
          </span>{" "}
          with
        </span>
        <span className="flex items-center gap-x-3">
          beautiful{" "}
          <span className="border-1 border-dotted relative border-gray-500 bg-neutral-900 backdrop-blur-2xl p-2 pb-3 md:pb-5 pr-3">
            <span className="inline-flex absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full ring-1 ring-neutral-500 bg-black"></span>
            <span className="inline-flex absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full ring-1 ring-neutral-500 bg-black"></span>
            <span className="inline-flex absolute -bottom-1.5 -left-1.5 w-3 h-3 rounded-full ring-1 ring-neutral-500 bg-black"></span>
            <span className="inline-flex absolute -bottom-1.5 -right-1.5 w-3 h-3 rounded-full ring-1 ring-neutral-500 bg-black"></span>
            components
          </span>
        </span>
      </h1>
    </div>
  );
};

export default HeroSectionText;

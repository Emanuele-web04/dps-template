import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/main-hero/beackground-beams";

export default function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <h2 className="text-xl relative z-20 md:text-2xl lg:text-3xl font-bold h-fit flex flex-col text-center text-black dark:text-white font-inter tracking-tight">
        Copy and Paste{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
    
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 py-4">
            <span className="">Ready to use code</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}

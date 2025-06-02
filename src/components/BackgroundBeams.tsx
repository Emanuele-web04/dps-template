import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/beackground-beams";

export default function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <h2 className="text-xl relative z-20 md:text-2xl lg:text-3xl font-bold h-fit text-center text-black dark:text-white font-inter tracking-tight">
        Copy and Paste{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Ready to use code</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Ready to use code</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}

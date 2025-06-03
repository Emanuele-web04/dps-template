import HeroSectionText from "@/components/HeroSectionText";
import React from "react";
import ImagesPeople from "@/components/ui/people-images";
import IOSToggle from "@/components/ui/ios-toggle";
import RadioInputs from "@/components/ui/radio-inputs";
import FlipWordsDemo from "@/components/FlipWords";
import HoverCard3D from "@/components/ui/hover-3d";
import ToolTipLinkImage from "@/components/ui/tooltip-image-link";
import BackgroundBeamsWithCollisionDemo from "@/components/BackgroundBeams";
import WhatsNewButton from "@/components/WhatsNewButton";
import Buttons from "@/components/Buttons";
import Frameworks from "./Frameworks";

const HeroSection = () => {
  return (
    <div className="flex max-w-[1600px] orverflow-y-scroll h-full flex-col relative mt-20 w-full xl:flex-row justify-between">
      <div className="flex w-full xl:w-fit flex-col gap-y-5">
        <WhatsNewButton />
        <div className=" w-fit">
          <HeroSectionText />
        </div>
        <p className="max-w-lg  sm:max-w-xl ml-0 text-left text-sm md:text-base font-normal font-inter tracking-tight text-gray-300 w-full m-auto">
          Copy-paste ready SwiftUI and Next.js components to ship pixel-perfect
          UIs in minutes without having to worry about styling and animations.
        </p>
        <Buttons />
        <Frameworks />
      </div>

      <div className="flex h-full border-l border-r border-dashed border-neutral-800 gap-5 flex-col">
        <div className="relative w-full divide-x divide-dashed divide-neutral-800 grid-cols-1 gap-5 items-start lg:grid lg:grid-cols-2">
          <div className="relative p-5 grid divide-y divide-dashed divide-neutral-800 w-full gap-5">
            <div className="flex items-center border-b pb-5 border-dashed border-neutral-800 gap-5">
              <IOSToggle />
              <RadioInputs />
            </div>
            <div className="pb-5">
              <ImagesPeople />
            </div>
            <div className="pb-5">
              <div className="p-1 bg-neutral-900/50 rounded-2xl ring-1 ring-neutral-800">
                <FlipWordsDemo />
              </div>
            </div>
            <div className="lg:flex items-center hidden h-[250px] w-full justify-center bg-neutral-900/50 rounded-2xl ring-1 ring-neutral-800">
              <HoverCard3D />
            </div>
          </div>
          <div className="relative grid divide-y pr-5 pl-5 lg:pl-0 divide-dashed divide-neutral-800 w-full gap-5">
            <div className="w-fit lg:w-80">
              <ToolTipLinkImage />
            </div>
            <div className="h-full w-full lg:w-80">
              <BackgroundBeamsWithCollisionDemo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import Frameworks from "@/components/Frameworks";
import HeroSectionText from "@/components/HeroSectionText";
import LightGradient from "@/components/LightGradient";
import { navSocials } from "@/lib/navSocials";
import { navbarLinks } from "@/lib/navbarLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import ImagesPeople from "@/components/ui/people-images";
import IOSToggle from "@/components/ui/ios-toggle";
import RadioInputs from "@/components/ui/radio-inputs";
import FlipWordsDemo from "@/components/FlipWords";
import HoverCard3D from "@/components/ui/hover-3d";
import ToolTipLinkImage from "@/components/ui/tooltip-image-link";
import BackgroundBeamsWithCollisionDemo from "@/components/BackgroundBeams";
import NavbarWebsite from "@/components/NavbarWebsite";
import WhatsNewButton from "@/components/WhatsNewButton";
import Buttons from "@/components/Buttons";

const page = () => {
  return (
    <div
      className="bg-black w-full
      bg-cover bg-center
      bg-[linear-gradient(rgba(0,0,0,1.0),rgba(0,0,0,0.85)),url('/gridd.png')] 
      flex justify-start p-6 md:p-12 items-center min-h-screen relative text-white"
    >
      <LightGradient />
      <div className="z-100 fixed flex w-full items-center justify-between p-6 sm:py-6 sm:px-12 mb-3 top-0 left-1/2 transform -translate-x-1/2 bg-transparent backdrop-blur-lg border-b border-neutral-800 shadow-lg m-auto">
        <NavbarWebsite/>
      </div>
      <div className="flex flex-col relative top-20 xl:top-0 w-full xl:flex-row justify-between">
        <div className="flex w-fit flex-col gap-y-5">
          <WhatsNewButton/>
          <div className=" w-fit">
            <HeroSectionText />
          </div>
          <p className="max-w-lg  sm:max-w-xl ml-0 text-left text-sm md:text-base font-normal font-inter tracking-tight text-gray-300 w-full m-auto">
            Copy-paste ready SwiftUI and Next.js components to ship
            pixel-perfect UIs in minutes without having to worry about styling
            and animations.
          </p>
          <Buttons/>
          <Frameworks />
        </div>

        <div className="flex  border-l border-r border-dashed border-neutral-800 gap-5 flex-col">
          <div className="relative min-h-screen lg:h-full w-full divide-x divide-dashed divide-neutral-800 grid-cols-1 gap-5 items-start lg:grid lg:grid-cols-2">
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
            <div className="relative grid divide-y pr-5 pl-5 lg:pl-0  divide-dashed divide-neutral-800 w-full gap-5">
              <ToolTipLinkImage />
              <div className="h-full w-80">
                <BackgroundBeamsWithCollisionDemo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

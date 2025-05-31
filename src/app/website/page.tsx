import Frameworks from "@/components/Frameworks";
import HeroSectionText from "@/components/HeroSectionText";
import LightGradient from "@/components/LightGradient";
import { frameworks } from "@/lib/frameworks";
import { navSocials } from "@/lib/navSocials";
import { navbarLinks } from "@/lib/navbarLinks";
import { images } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaChevronRight } from "react-icons/fa6";
import ImagesPeople from "@/components/ui/people-images";
import IOSToggle from "@/components/ui/ios-toggle";
import RadioInputs from "@/components/ui/radio-inputs";

const page = () => {
  return (
    <div
      className="bg-black w-full
      bg-cover bg-center
      bg-[linear-gradient(rgba(0,0,0,1.0),rgba(0,0,0,0.85)),url('/gridd.png')] 
      flex justify-start p-12 items-center min-h-screen relative text-white"
    >
      <LightGradient />
      <div className="z-10 fixed flex w-full items-center justify-between p-2 py-1.5 sm:py-6 sm:px-12 mb-3 top-0 left-1/2 transform -translate-x-1/2 bg-transparent backdrop-blur-lg border-b border-neutral-800 shadow-lg m-auto">
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-3">
              <Image
                src={"/navLogo.png"}
                alt="Logo"
                width={100}
                height={100}
                className="w-8 h-8 rounded-lg"
              />
              <h6 className="text-2xl font-bold font-inter tracking-tighter">
                DP's Templates
              </h6>
            </div>
            <div className="flex gap-5">
              {navbarLinks.map((nav, i) => (
                <div
                  key={i}
                  className="flex items-center hover:text-white cursor-pointer transition-all text-neutral-400 gap-2 font-inter tracking-tight font-semibold text-sm"
                >
                  {nav.name}
                  {nav.name == "SwiftUI" && (
                    <p className="font-mono text-xs text-orange-500 px-1.5 py-0.5 border border-orange-500 rounded-lg">
                      iOS
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-5">
            {navSocials.map((social, i) => {
              const Icon = social.icon;
              return (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.link}
                  key={i}
                  className={`${social.name == "YouTube" ? "text-2xl" : "text-xl"}`}
                >
                  <p className="text-neutral-400 transition-all hover:text-white cursor-pointer text-sm font-semibold font-inter tracking-tighter">
                    {social.name}
                  </p>
                </Link>
              );
            })}
            <a
              href="mailto:emandipietro@gmail.com"
              className="bg-white text-black font-inter text-sm font-semibold px-3 py-1.5 cursor-pointer rounded-lg"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex w-fit flex-col  gap-y-5">
          <span className="bg-gradient-to-b from-neutral-500 to-neutral-300 rounded-full w-fit">
            <p className="py-1.5 flex items-center gap-x-2 px-4 m-[0.5px] bg-gradient-to-l from-neutral-800 to-neutral-700 rounded-full text-xs font-semibold tracking-tight font-inter">
              See what's new
              <FaChevronRight className="text-xxs" />
            </p>
          </span>
          <div className=" w-fit">
            <HeroSectionText />
          </div>
          <p className="max-w-xs  sm:max-w-xl ml-0 text-left text-sm md:text-base font-normal font-inter tracking-tight text-gray-300 w-full m-auto">
            Copy-paste ready SwiftUI and Next.js components to ship
            pixel-perfect UIs in minutes without having to worry about styling
            and animations.
          </p>
          <div className="flex w-fit gap-5">
            <button className="font-inter p-8 py-5 rounded-2xl cursor-pointer bg-white text-black text-sm font-medium tracking-tighter">
              <p>Browse Templates</p>
            </button>
            <button className="font-inter p-8 py-5 rounded-2xl bg-transparent cursor-pointer text-white ring-1 ring-neutral-600 text-sm font-medium tracking-tighter">
              <p>Browse Components</p>
            </button>
          </div>
          <Frameworks />
        </div>
        <div className="flex p-6 border-l border-r border-dashed border-neutral-700 gap-5 flex-col">
          <div className="flex items-center border-b pb-5 border-dashed border-neutral-700 gap-5">
            <IOSToggle />
            <RadioInputs />
          </div>
          <ImagesPeople />
        </div>
      </div>
    </div>
  );
};

export default page;

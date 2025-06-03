import React from "react";
import { DiSwift } from "react-icons/di";
import { RiNextjsLine } from "react-icons/ri";
import SwiftIcon from "../ui/swift-icon";
import NextIcon from "../ui/next-icon";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-5 container px-2">
      <h1 className="font-sans flex flex-col items-center justify-center gap-1 tracking-tighter text-5xl md:text-6xl font-bold text-center">
        <span className="pb-2 black-gradient bg-clip-text flex flex-col sm:flex-row text-transparent">
          Ready To Use <span className="m-0 sm:ml-2.5">Components</span>
        </span>
        <span className="font-italic flex flex-col md:flex-row items-center justify-center gap-2 text-neutral-950">
          <span className="flex gap-2">
            in
            <span className="icon-text">
              <SwiftIcon />
              SwiftUI
            </span>
            and
          </span>

          <span className="flex gap-2">
            <span className="icon-text">
              <NextIcon />
              Next.js
            </span>
          </span>
        </span>
      </h1>
      <p className="max-w-xs sm:max-w-xl pt-2 text-center text-sm md:text-base font-medium font-inter tracking-tight text-gray-600 w-full m-auto">
        Paste drop-in SwiftUI and Next.js components to ship pixel-perfect UIs
        in minutes. Join the waitlist for early access.
      </p>
    </div>
  );
};

export default HeroText;

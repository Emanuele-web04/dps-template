import React from "react";
import NextIcon from "./ui/next-icon";
import { componentPacks, nextjsFeatures } from "@/lib/features";
import ComponentsPack from "./ui/components-pack";

const WhatYoullFind = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="title">What You'll Find</h1>
      <p className="text-neutral-300 text-center max-w-2xl mx-auto">
        Production-ready templates and components to accelerate your development
        workflow for your apps and saas
      </p>
      <div className="flex flex-col justify-center items-center">
        <NextIcon />
        <h3 className="h3-title">Next.js Templates</h3>
      </div>
      <div className="grid grid-cols-12 w-full gap-4">
        <ComponentsPack />
      </div>
    </div>
  );
};

export default WhatYoullFind;

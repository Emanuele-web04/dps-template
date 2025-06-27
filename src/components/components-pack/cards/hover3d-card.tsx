"use client";

import HoverCard3D from "@/components/ui/hover-3d";
import React from "react";

const Hover3dCardComponent = () => {
  return (
    <div className="lg:flex flex-1 items-center hidden h-[250px] w-[250px] bg-white justify-center dark:bg-neutral-900/50 rounded-2xl ring-1 ring-neutral-200 dark:ring-neutral-800">
      <HoverCard3D />
    </div>
  );
};

export default Hover3dCardComponent;

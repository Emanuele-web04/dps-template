import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export default function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="w-full rounded-xl border bg-neutral-800 p-4 border-neutral-600">
      <div className="text-sm mx-auto font-normal leading-tight text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites with DP's Templates
      </div>
    </div>
  );
}

import React from "react";
import Dots from "../ui/main-hero/dots";

const HeroSectionText = () => {
  return (
    <div className="w-fit">
      <h1 className="w-fit flex flex-col gap-1 sm:gap-5 title">
        <span>Enhance your </span>
        <span>
          <span className="bg-gradient-to-b pr-0.5 bg-clip-text text-transparent from-orange-400 via-orange-500 to-orange-700 dark:from-orange-300 dark:via-orange-400 dark:to-orange-600">
            Apps
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-b pr-0.5 bg-clip-text text-transparent from-gray-400 via-gray-500 to-gray-600 dark:from-gray-200 dark:via-gray-300 dark:to-gray-500">
            SaaS
          </span>{" "}
          with
        </span>
        <span className="flex items-center gap-x-3">
          beautiful{" "}
          <span className="border-1 border-dotted relative border-gray-400 dark:border-gray-500 bg-gray-100 dark:bg-neutral-900 backdrop-blur-2xl p-1 md:p-2 pb-3 md:pb-5">
            <Dots />
            <span className="italic font-editor font-light! pr-0.5 md:pr-1">
              components
            </span>
          </span>
        </span>
      </h1>
    </div>
  );
};

export default HeroSectionText;

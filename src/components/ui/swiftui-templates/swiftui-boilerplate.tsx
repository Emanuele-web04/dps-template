import LongCardComponent from "@/components/shared/LongCardComponent";
import { cn } from "@/lib/cn";
import { swiftUIBoilerplate } from "@/lib/features";
import React from "react";

const SwiftUIBoilerplate = () => {
  const { icon, title, description } = swiftUIBoilerplate;
  const Bolt = icon[0];
  const AppStore = icon[1];

  return (
    <div
      className={cn(
        "w-full h-full p-4 flex items-center group cursor-pointer",
        "hover:translate-y-[-3px] hover:shadow-xl hover:shadow-black/10",
        "orange-card "
      )}
    >
      <div className="flex flex-col w-full gap-4 items-start">
        <div className="flex w-full gap-5 items-center justify-center">
          <div
            className={cn(
              "group-hover:scale-110 group-hover:shadow-md transition-all duration-300 ease-out",
              "swift-orange-icon"
            )}
          >
            <Bolt className="w-5 h-5 transition-colors duration-300" />
          </div>
          <span className="inline-flex h-px w-full bg-gradient-to-r from-transparent via-neutral-800 to-neutral-900 dark:via-neutral-300 dark:to-neutral-200"></span>
          <div
            className={cn(
              "group-hover:scale-110 group-hover:shadow-md transition-all duration-300 ease-out",
              "swift-orange-icon"
            )}
          >
            <AppStore className="w-6 h-6 transition-colors duration-300" />
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start">
          <h6 className="h6-title transition-colors w-full text-center sm:text-left duration-200">
            {title}
          </h6>
          <p className="p-card md:text-left! transition-colors duration-200">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwiftUIBoilerplate;

import { Feature } from "@/types/feature";
import React from "react";
import { cn } from "@/lib/cn"; // Your cn utility

interface LongCardProps extends Feature {
  variant?: "neutral" | "blue" | "green" | "purple" | "orange" | "red";
}

const LongCardComponent = ({
  icon,
  title,
  description,
  variant = "neutral",
}: LongCardProps) => {
  const Icon = icon[0];

  const getVariantClasses = (variant: string) => {
    switch (variant) {
      case "orange":
        return "orange-card";
      case "neutral":
      default:
        return "card-component hover:bg-neutral-100 dark:hover:from-neutral-800 dark:hover:to-neutral-900/50 hover:from-neutral-200 hover:to-neutral-300";
    }
  };

  const getVariantIcon = (variant: string) => {
    switch (variant) {
      case "orange":
        return "swift-orange-icon";
      case "neutral":
        return "rounded-icon";
    }
  };

  return (
    <div
      className={cn(
        "w-full h-full p-4 flex items-center group cursor-pointer",
        "hover:translate-y-[-3px] hover:shadow-xl hover:shadow-black/10",
        "hover:bg-gradient-to-r transition-all duration-300 ease-out",
        getVariantClasses(variant)
      )}
    >
      <div className="flex gap-4 items-center">
        <div
          className={cn(
            "group-hover:scale-110 group-hover:shadow-md transition-all duration-300 ease-out",
            getVariantIcon(variant)
          )}
        >
          <Icon className="w-5 h-5 transition-colors duration-300" />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <h6 className="h6-title transition-colors duration-200">{title}</h6>
          <p className="p-card text-left! transition-colors duration-200">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LongCardComponent;

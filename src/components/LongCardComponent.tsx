import { Feature } from "@/types/feature";
import React from "react";
import { cn } from "@/lib/cn"; // Your cn utility

interface LongCardProps extends Feature {
  variant?: 'neutral' | 'blue' | 'green' | 'purple' | 'orange' | 'red';
}

const LongCardComponent = ({ icon, title, description, variant = 'neutral' }: LongCardProps) => {
  const Icon = icon[0];
  
  const getVariantClasses = (variant: string) => {
    switch (variant) {
      case 'orange':
        return 'bg-orange-900/70 ring-1 backdrop-blur-2xl ring-orange-800 rounded-2xl hover:from-orange-800 hover:to-orange-900/50';
      case 'neutral':
      default:
        return 'card-component hover:from-neutral-800 hover:to-neutral-900/50';
    }
  };

  const getVariantIcon = (variant: string) => {
    switch (variant) {
        case 'orange':
            return 'rounded-full p-4 bg-gradient-to-b from-orange-700 to-orange-900 w-12 h-12 flex items-center justify-center ring-1 ring-orange-600'
        case 'neutral':
            return 'rounded-icon'
    }
  }

  return (
    <div className={cn(
      "w-full h-full p-4 flex items-center group cursor-pointer",
      "hover:translate-y-[-3px] hover:shadow-xl hover:shadow-black/10",
      "hover:bg-gradient-to-r transition-all duration-300 ease-out",
      getVariantClasses(variant)
    )}>
      <div className="flex gap-4 items-center">
        <div className={cn(
            "group-hover:scale-110 group-hover:shadow-md transition-all duration-300 ease-out",
            getVariantIcon(variant)
        )}>
          <Icon className="w-5 h-5 transition-colors duration-300" />
        </div>
        <div className="flex flex-col gap-1 items-start">
          <h6 className="h6-title transition-colors duration-200">{title}</h6>
          <p className="p-card text-left! transition-colors duration-200">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default LongCardComponent;
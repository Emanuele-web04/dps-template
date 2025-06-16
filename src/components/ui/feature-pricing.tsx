import React from "react";
import { IconType } from "react-icons";

interface Props {
    icon: IconType,
    text: string | React.ReactNode // Accept both string and JSX
}

const FeaturePricing = ({icon, text}: Props) => {
    const Icon = icon
  return (
    <div className="flex items-start gap-x-4">
      <Icon className="w-4 h-4 text-sky-500 relative top-0.5" />
      <p className="text-sm flex-1 text-left text-primary font-medium">
        {text}
      </p>
    </div>
  );
};

export default FeaturePricing;

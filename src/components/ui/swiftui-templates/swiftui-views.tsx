import LongCardComponent from "@/components/shared/LongCardComponent";
import { advancedViews } from "@/lib/features";
import React from "react";

const SwiftUIViews = () => {
  const { icon, title, description } = advancedViews;
  return (
    <LongCardComponent
      title={title}
      icon={icon}
      description={description}
      variant="orange"
    />
  );
};

export default SwiftUIViews;

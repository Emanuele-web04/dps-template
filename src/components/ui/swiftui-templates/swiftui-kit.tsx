import LongCardComponent from "@/components/shared/LongCardComponent";
import { uiComponents } from "@/lib/features";
import React from "react";

const SwiftUIKit = () => {
  const { icon, title, description } = uiComponents;
  return (
    <LongCardComponent
      icon={icon}
      title={title}
      description={description}
      variant="orange"
    />
  );
};

export default SwiftUIKit;

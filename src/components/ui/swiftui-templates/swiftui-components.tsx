import LongCardComponent from "@/components/LongCardComponent";
import { glassmorphismKit } from "@/lib/features";
import React from "react";

const SwiftUIComponents = () => {
    const {icon, title, description} = glassmorphismKit
  return <LongCardComponent title={title} icon={icon} description={description} variant="orange"/>;
};

export default SwiftUIComponents;

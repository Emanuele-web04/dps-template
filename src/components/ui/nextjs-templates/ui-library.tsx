import React from "react";
import LongCardComponent from "../../shared/LongCardComponent";
import { uiLibrary } from "@/lib/features";

const UiLibrary = () => {
  const { icon, title, description } = uiLibrary;
  return (
    <LongCardComponent icon={icon} title={title} description={description} />
  );
};

export default UiLibrary;

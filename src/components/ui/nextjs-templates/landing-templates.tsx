import { landingTemplates } from "@/lib/features";
import React from "react";
import LongCardComponent from "../../shared/LongCardComponent";

const LandingTemplates = () => {
  const { icon, title, description } = landingTemplates;
  return (
    <LongCardComponent icon={icon} title={title} description={description} />
  );
};

export default LandingTemplates;

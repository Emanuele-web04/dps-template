import React from "react";
import LongCardComponent from "../../shared/LongCardComponent";
import { systemPages } from "@/lib/features";

const SystemPages = () => {
  const { icon, title, description } = systemPages;
  return (
    <LongCardComponent icon={icon} title={title} description={description} />
  );
};

export default SystemPages;

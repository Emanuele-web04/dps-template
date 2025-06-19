"use client";

import React, { useState } from "react";
import Code from "../Code";
import { TbCircleCheckFilled } from "@/utils/icons";
import { cn } from "@/lib/cn";

const CopyCode = ({
  code,
  language,
  color,
}: {
  code: string;
  language: string;
  color?: string;
}) => {
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    if (!copy) {
      navigator.clipboard.writeText(code);
      setCopy(true);
      setTimeout(() => {
        setCopy(false);
      }, 1200);
    }
  };

  return (
    
          <Code className={language} color={color}>
            {code}
          </Code>
       
  );
};

export default CopyCode;
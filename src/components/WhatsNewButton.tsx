import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const WhatsNewButton = () => {
  return (
    
      <span className="bg-gradient-to-b from-neutral-500 to-neutral-300 rounded-full w-fit">
        <p className="py-1.5 flex items-center gap-x-2 px-4 m-[0.5px] bg-gradient-to-l from-neutral-800 to-neutral-700 rounded-full text-xs font-semibold tracking-tight font-inter">
          See what's new
          <FaChevronRight className="text-xxs" />
        </p>
      </span>
  
  );
};

export default WhatsNewButton;

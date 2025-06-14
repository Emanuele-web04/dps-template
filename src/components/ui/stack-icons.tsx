import React from "react";
import { IconType } from "react-icons";

const StackIcons = ({ stack=[] }: { stack: IconType[] }) => {
  return (
    <div className="flex -space-x-1.5 md:-space-x-2">
      {stack.map((Icon, i) => (
        <div
          key={i}
          className="text-primary bg-white dark:bg-neutral-900 rounded-full ring-1 dark:ring-neutral-600 ring-neutral-200"
        >
          <Icon className="md:m-2.5 md:w-5 md:h-5 m-1.5 w-4 h-4" />
        </div>
      ))}
    </div>
  );
};

export default StackIcons;

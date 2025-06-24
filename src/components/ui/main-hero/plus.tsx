import { PiPlusThin } from "@/utils/icons";
import React from "react";

const Plus = () => {
  return (
    <>
      <span className="inline-flex absolute -top-3 -left-3     text-neutral-200 dark:text-neutral-700">
        <PiPlusThin className="text-2xl" />
      </span>
      <span className="inline-flex absolute -top-3 -right-3  text-neutral-200 dark:text-neutral-700">
      <PiPlusThin    className="text-2xl" />
      </span>
      <span className="inline-flex absolute -bottom-3 -left-3    text-neutral-200 dark:text-neutral-700">
        <PiPlusThin className="text-2xl" />
      </span>
      <span className="inline-flex absolute -bottom-3 -right-3   text-neutral-200 dark:text-neutral-700 ">
        <PiPlusThin className="text-2xl" />
      </span>
    </>
  );
};

export default Plus;

import React from "react";

const Dots = () => {
  return (
    <>
      <span className="inline-flex absolute -top-1.5 -left-1.5 w-3 h-3 rounded-full ring-1 ring-gray-400 dark:ring-neutral-500 bg-white dark:bg-black border border-gray-200 dark:border-transparent"></span>
      <span className="inline-flex absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full ring-1 ring-gray-400 dark:ring-neutral-500 bg-white dark:bg-black border border-gray-200 dark:border-transparent"></span>
      <span className="inline-flex absolute -bottom-1.5 -left-1.5 w-3 h-3 rounded-full ring-1 ring-gray-400 dark:ring-neutral-500 bg-white dark:bg-black border border-gray-200 dark:border-transparent"></span>
      <span className="inline-flex absolute -bottom-1.5 -right-1.5 w-3 h-3 rounded-full ring-1 ring-gray-400 dark:ring-neutral-500 bg-white dark:bg-black border border-gray-200 dark:border-transparent"></span>
    </>
  );
};

export default Dots;

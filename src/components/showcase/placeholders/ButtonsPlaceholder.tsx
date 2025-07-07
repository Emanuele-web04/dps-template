"use client";
import React from "react";

const ButtonsPlaceholder = () => {
  return (
    <div className="w-full h-full bg-white dark:bg-neutral-950  p-4 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto flex items-center justify-center gap-3">
        <div className="h-7 w-20 bg-indigo-600 rounded-lg"></div>
        <div className="h-7 w-20 bg-neutral-200 dark:bg-neutral-800 rounded-lg"></div>
      </div>
    </div>
  );
};

export default ButtonsPlaceholder;

import React from "react";

const LightGradient = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-0 -left-80 rotate-45 w-[900px] h-60 rounded-full bg-gradient-to-l from-gray-300 to-gray-100 dark:from-gray-700 dark:via-gray-500 dark:to-gray-800 filter blur-[90px]  opacity-20 animate-blob"></div>
    </div>
  );
};

export default LightGradient;

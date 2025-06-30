import React from "react";

const Plus = () => {
  return (
    <>
      {/* Top-left plus */}
      <div className="absolute -top-[8.3px] -left-[8.3px] w-4 h-4 pointer-events-none">
        {/* Horizontal line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-neutral-200 dark:bg-neutral-700 transform -translate-y-1/2"></div>
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-700 transform -translate-x-1/2"></div>
      </div>

      {/* Top-right plus */}
      <div className="absolute -top-[8.3px] -right-[8.3px] w-4 h-4 pointer-events-none">
        {/* Horizontal line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-neutral-200 dark:bg-neutral-700 transform -translate-y-1/2"></div>
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-700 transform -translate-x-1/2"></div>
      </div>

      {/* Bottom-left plus */}
      <div className="absolute -bottom-[8.3px] -left-[8.3px] w-4 h-4 pointer-events-none">
        {/* Horizontal line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-neutral-200 dark:bg-neutral-700 transform -translate-y-1/2"></div>
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-700 transform -translate-x-1/2"></div>
      </div>

      {/* Bottom-right plus */}
      <div className="absolute -bottom-[8.3px] -right-[8.3px] w-4 h-4 pointer-events-none">
        {/* Horizontal line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-neutral-200 dark:bg-neutral-700 transform -translate-y-1/2"></div>
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px  bg-neutral-200 dark:bg-neutral-700 transform -translate-x-1/2"></div>
      </div>
    </>
  );
};

export default Plus;

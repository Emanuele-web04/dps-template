import React from "react";

const Buttons = () => {
  return (
    <div className="flex md:flex-row flex-col w-full md:w-fit gap-5">
      <button className="font-inter p-8 py-4 md:py-5 rounded-2xl cursor-pointer bg-black text-white dark:bg-white dark:text-black text-sm font-medium tracking-tighter">
        <p>Browse Templates</p>
      </button>
      <button className="font-inter p-8 py-4 md:py-5 rounded-2xl bg-transparent cursor-pointer text-black ring-neutral-300 dark:text-white ring-1 dark:ring-neutral-600 text-sm font-medium tracking-tighter">
        <p>Browse Components</p>
      </button>
    </div>
  );
};

export default Buttons;

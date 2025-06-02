import React from "react";

const Buttons = () => {
  return (
    <div className="flex w-fit gap-5">
      <button className="font-inter p-8 py-5 rounded-2xl cursor-pointer bg-white text-black text-sm font-medium tracking-tighter">
        <p>Browse Templates</p>
      </button>
      <button className="font-inter p-8 py-5 rounded-2xl bg-transparent cursor-pointer text-white ring-1 ring-neutral-600 text-sm font-medium tracking-tighter">
        <p>Browse Components</p>
      </button>
    </div>
  );
};

export default Buttons;

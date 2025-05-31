"use client";
import React, { useState } from "react";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";

const radioInputs = ["Not cool", "Cool"];

const RadioInputs = () => {
  const [selected, setSelected] = useState("Cool");
  return (
    <div className="flex gap-2 h-fit">
      {radioInputs.map((option, i) => (
        <label
        key={option}
        className={`
          flex w-fit items-center p-3 py-2 rounded-xl cursor-pointer
          ring-1 ring-neutral-600
      
          /* transizioni su colore e box-shadow */
          transition-colors duration-200 ease-in-out
      
          ${selected === option
            ? "bg-neutral-900/70"           /* sfondo in stato selezionato */
            : "hover:bg-neutral-900/70"}    /* sfondo al passaggio */
        `}
      >
        <input
          type="radio"
          value={option}
          checked={selected === option}
          onChange={(e) => setSelected(e.target.value)}
          className="sr-only"
        />
        <div className="flex items-center gap-2">
          {selected === option ? (
            <IoIosRadioButtonOn />
          ) : (
            <IoIosRadioButtonOff />
          )}
          <span className="font-inter text-sm tracking-tight text-white">
            {option}
          </span>
        </div>
      </label>
      
      ))}
    </div>
  );
};

export default RadioInputs;

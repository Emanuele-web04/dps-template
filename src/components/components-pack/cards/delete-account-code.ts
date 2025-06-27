export const deleteAccountCode = `"use client";

import React, { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";

type ColorOption = {
  color: string;
  name: string;
};

const colors: ColorOption[] = [
  {
    color:
      "bg-gradient-to-r from-violet-300 to-violet-400 hover:from-violet-400 hover:to-violet-500",
    name: "violet",
  },
  {
    color:
      "bg-gradient-to-r from-red-300 to-red-400 hover:from-red-400 hover:to-red-500",
    name: "red",
  },
  {
    color:
      "bg-gradient-to-r from-sky-300 to-sky-400 hover:from-sky-400 hover:to-sky-500",
    name: "sky",
  },
  {
    color:
      "bg-gradient-to-r from-emerald-300 to-emerald-400 hover:from-emerald-400 hover:to-emerald-500",
    name: "emerald",
  },
  {
    color:
      "bg-gradient-to-r from-orange-300 to-orange-400 hover:from-orange-400 hover:to-orange-500",
    name: "orange",
  },
];

const DeleteAccountCard = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-4">
      {/* Color Picker - Positioned above the card */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-xs font-medium text-gray-600 dark:text-neutral-400">
          Choose Color
        </p>
        <div className="flex gap-2 p-2 bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-gray-200 dark:border-neutral-700">
          {colors.map((color, i) => {
            const isSelected = color.name === selectedColor.name;
            return (
              <button
                key={i}
                onClick={() => setSelectedColor(color)}
                className={\`rounded-full w-6 h-6 cursor-pointer transition-all duration-200 ease-in-out transform \${color.color} \${
                  isSelected
                    ? "scale-110 ring-2 ring-gray-400 dark:ring-neutral-300 shadow-md"
                    : "opacity-80 hover:scale-105 hover:opacity-100"
                }\`}
              />
            );
          })}
        </div>
      </div>

      {/* Delete Account Modal */}
      <div className="p-5 rounded-2xl w-full max-w-xs bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 font-sans flex gap-y-3 flex-col items-center shadow-lg">
        <h2 className="font-semibold font-sans tracking-tight text-lg text-gray-900 dark:text-neutral-100">
          Delete Account
        </h2>
        <p className="tracking-tight font-medium text-sm text-center text-gray-500 dark:text-neutral-400">
          Are you sure you want to delete your account?
        </p>
        <div className="flex space-x-2 font-medium w-full mt-2">
          <button
            type="button"
            className="w-full cursor-pointer text-center bg-gray-100 dark:bg-neutral-700 py-2 rounded-lg text-gray-600 dark:text-neutral-300 hover:bg-gray-200 dark:hover:bg-neutral-600 hover:scale-95 transition-all text-sm duration-300"
          >
            Cancel
          </button>
          <button
            type="button"
            className={\`w-full cursor-pointer text-center hover:scale-95 transition-all \${selectedColor.color} duration-300 py-2 rounded-lg text-sm text-white shadow-sm\`}
          >
            <div className="flex space-x-1.5 w-full items-center justify-center">
              <HiOutlineTrash className="w-4 h-4" />
              <span>Delete</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountCard;`; 
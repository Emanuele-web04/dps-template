import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

type BgColorGradient = {
    gradient: string
}

const ModalDelete = ({ gradient }: BgColorGradient) => {
  return (
    <div className="p-5 rounded-3xl sm:rounded-4xl w-full sm:max-w-md bg-white font-sans flex gap-y-2.5 m-0 flex-col items-center shadow-lg">
      <h2 className="font-semibold font-sans tracking-tighter text-xl md:text-2xl">
        Delete Account
      </h2>
      <p className="tracking-tighter font-medium text-sm sm:text-base m-0 text-center text-neutral-400">
        Are you sure you want to delete <br /> your account?
      </p>
      <div className="flex space-x-2 font-medium w-full mt-2">
        <button
          type="button"
          className="w-full text-center bg-neutral-100 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl text-neutral-500 hover:bg-neutral-200 hover:text-neutral-600 hover:scale-95 transition-all text-sm sm:text-base duration-300"
        >
          Cancel
        </button>
        <button
          type="button"
          className={`w-full text-center hover:scale-95 transition-all ${gradient} duration-300 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl text-sm sm:text-base text-white`}
        >
          <div className="flex space-x-1.5 w-full items-center justify-center">
            <HiOutlineTrash />
            <h6>Delete</h6>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ModalDelete;

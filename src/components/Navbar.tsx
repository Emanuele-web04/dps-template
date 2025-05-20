import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="flex justify-center w-full gap-2 items-center">
      <Image src={"/dpstem.png"} alt="logo" width={20} height={20} className="w-3 h-3 sm:w-6 sm:h-6"/>
      <span className="hidden md:block">
        <h6 className="font-italic font-medium! text-lg black-gradient bg-clip-text text-transparent">
          DP's Templates
        </h6>
      </span>
    </div>
  );
};

export default Navbar;

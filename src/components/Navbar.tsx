import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="flex justify-center w-full gap-2 items-center">
      <Image src={"/dpstem.png"} alt="logo" width={20} height={20} className="w-3 h-3 sm:w-5 sm:h-5"/>
 
        <h6 className="font-italic md:font-normal! font-light! text-xs md:text-lg black-gradient bg-clip-text text-transparent">
          DP's Templates
        </h6>
  
    </div>
  );
};

export default Navbar;

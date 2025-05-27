'use client'

import Image from "next/image";
import { navLinks } from "@/types/navLinks";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [navLink, setNavLink] = useState("");

  return (
    <div className="flex items-center w-full gap-8">
      <div className="flex justify-start md:justify-center w-full gap-2 items-center">
        <Image
          src={"/dpstem.png"}
          alt="logo"
          width={20}
          height={20}
          className="w-3 h-3 sm:w-5 sm:h-5"
        />

        <h6 className="font-italic md:font-normal! font-light! text-xs md:text-lg black-gradient bg-clip-text text-transparent">
          DP's Templates
        </h6>
      </div>
      <div className="flex gap-2 ml-2">
          {navLinks.map((nav, i) => (
            <Link key={i} href={nav.to} onClick={() => setNavLink(nav.name)}>
              <p className={`font-editor md:text-base text-xs font-medium duration-200 transition-all hover:text-indigo-500 ${nav.name === navLink ? "text-indigo-500" : ""}`}>
                {nav.name}
              </p>
            </Link>
          ))}
        </div>
    </div>
  );
};

export default Navbar;



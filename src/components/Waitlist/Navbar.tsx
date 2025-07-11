"use client";

import { navLinks } from "@/types/waitlistNavLinks";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [navLink, setNavLink] = useState("");

  return (
    <div className="flex items-center w-full gap-8">
      <div className="flex justify-start md:justify-center w-full gap-2.5 items-center">
        <Image
          src={"/dpstem.webp"}
          alt="Logo"
          width={1000}
          height={1000}
          className="w-8 h-8 rounded-lg"
        />

        <h6 className="font-italic md:font-normal! font-light! text-base md:text-lg black-gradient bg-clip-text text-transparent">
          DP's Templates
        </h6>
      </div>
      <div className="flex gap-2 ml-2">
        {navLinks.map((nav, i) => (
          <Link key={i} href={nav.to} onClick={() => setNavLink(nav.name)}>
            <p
              className={`font-editor text-base font-medium duration-200 transition-all hover:text-indigo-500 ${nav.name === navLink ? "text-indigo-500" : ""}`}
            >
              {nav.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

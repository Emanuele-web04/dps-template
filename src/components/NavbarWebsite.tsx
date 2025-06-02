import { navSocials } from "@/lib/navSocials";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { navbarLinks } from "@/lib/navbarLinks";
import { TbMenu } from "react-icons/tb";
const NavbarWebsite = () => {
  return (
    <div className="flex items-center w-full justify-between">
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-3">
          <Image
            src={"/navLogo.png"}
            alt="Logo"
            width={1000}
            height={1000}
            className="w-8 h-8 inline-flex rounded-lg"
          />
          <h6 className="text-2xl hidden  md:block font-bold font-inter tracking-tighter">
            DP's Templates
          </h6>
        </div>
        <div className="hidden lg:flex gap-5">
          {navbarLinks.map((nav, i) => (
            <div
              key={i}
              className="flex items-center hover:text-white cursor-pointer transition-all text-neutral-400 gap-2 font-inter tracking-tight font-semibold text-sm"
            >
              {nav.name}
              {nav.name == "SwiftUI" && (
                <p className="font-mono text-xs text-orange-500 px-1.5 py-0.5 border border-orange-500 rounded-lg">
                  iOS
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-5">
        {navSocials.map((social, i) => {
          const Icon = social.icon;
          return (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={social.link}
              key={i}
              className={`${social.name == "YouTube" ? "text-2xl" : "text-xl"}`}
            >
              <p className="text-neutral-400 transition-all hover:text-white cursor-pointer text-sm font-semibold font-inter tracking-tighter">
                {social.name}
              </p>
            </Link>
          );
        })}
        <a
          href="mailto:emandipietro@gmail.com"
          className="bg-white text-black font-inter text-sm font-semibold px-3 py-1.5 cursor-pointer rounded-lg"
        >
          Contact
        </a>
      </div>
      <TbMenu className="text-2xl block lg:hidden" />
    </div>
  );
};

export default NavbarWebsite;

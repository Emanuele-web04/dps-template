import React from "react";
import LogoTitle from "../shared/LogoTitle";
import { portfolio, twitter, youtube } from "@/lib/footerSocial";
import FooterLink from "../ui/footer-link";
import Link from "next/link";
import { navbarLinks } from "@/lib/navbarLinks";
import { navSocials } from "@/lib/navSocials";
import Copyright from "../ui/copyright";

const Footer = () => {
  return (
    <div className="bg-transparent w-full h-full mt-20 px-6 py-12 md:px-12  mx-auto md:py-20 border-t border-neutral-200 dark:border-neutral-800 backdrop-blur-2xl">
      <div className="w-full h-full flex max-w-[1600px] mx-auto md:flex-row flex-col justify-between">
        <div className="flex flex-col  justify-between">
          <div className="flex flex-col gap-4 h-full">
            <LogoTitle visible={true} size={"normal"} />
            <div className="flex flex-col gap-2">
              <FooterLink
                text="A product by"
                link={portfolio}
                linkText="Emanuele Di Pietro"
              />
              <FooterLink
                text="Building in public"
                link={twitter}
                linkText="@emanueledpt"
              />
              <FooterLink
                text="Documenting my journey on"
                link={youtube}
                linkText="YouTube"
              />
            </div>
          </div>
          <div className="hidden md:block">
            <Copyright />
          </div>
        </div>
        <div className="grid grid-cols-2 mt-10 md:mt-0 gap-10">
          <div className="flex flex-col col-span-1 gap-4 h-full">
            {navbarLinks.map((link, i) => (
              <div key={i} className="">
                <Link target="_blank" rel="noopener norefferer" href={link.to}>
                  <p className="nav-p font-normal!">{link.name}</p>
                </Link>
              </div>
            ))}
            <Link
              target="_blank"
              rel="noopener norefferer"
              href={"https://waitlist.dpstemplates.com"}
            >
              <p className="nav-p font-normal!">News Letter</p>
            </Link>
          </div>
          <div className="flex flex-col col-span-1 gap-4 h-full">
            {navSocials.map((link, i) => (
              <div key={i} className="">
                <Link
                  target="_blank"
                  rel="noopener norefferer"
                  href={link.link}
                >
                  <p className="nav-p font-normal!">{link.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="block mt-10 md:hidden">
          <Copyright />
        </div>
      </div>
    </div>
  );
};

export default Footer;

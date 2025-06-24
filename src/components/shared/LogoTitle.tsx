import React from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import Link from "next/link";
const LogoTitle = ({visible = false, size="normal"}: {visible: boolean, size: "small" | "normal"}) => {

    const imageSize = () => {
        switch (size) {
            case "normal":
                return "w-6 h-6"
            case "small":
                return "w-6 h-6 "
        }
    }

  return (
    <Link href={"/website"} className="flex items-center gap-3">
      <Image
        src={"/logo-black.png"}
        alt="Logo"
        width={1000}
        height={1000}
        className={cn(
            "dark:hidden z-50 inline-flex ",
            size === "normal" ? "w-7 h-7 md:w-8 md:h-8 rounded-md md:rounded-lg" : "w-6 h-6 rounded-md"
        )}
      />
      <Image
        src={"/navLogo.png"}
        alt="Logo"
        width={1000}
        height={1000}
        className={cn(
            "z-50 hidden dark:inline-flex rounded-md md:rounded-lg",
            size === "normal" ? "w-7 h-7 md:w-8 md:h-8 rounded-md md:rounded-lg" : "w-6 h-6 rounded-md"
        )}
      />
      <h6 className={`${size === "normal" ? "text-2xl" : "text-lg"} ${visible ? "block" : "hidden"} text-black dark:text-white md:block font-bold font-inter tracking-tighter`}>
        DP's Templates
      </h6>
    </Link>
  );
};

export default LogoTitle;

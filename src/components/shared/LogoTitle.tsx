import React from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import Link from "next/link";
const LogoTitle = ({
  visible = false,
  size = "normal",
}: {
  visible: boolean;
  size: "small" | "normal";
}) => {
  const imageSize = () => {
    switch (size) {
      case "normal":
        return "w-6 h-6";
      case "small":
        return "w-6 h-6 ";
    }
  };

  return (
    <Link href={"/website"} className="flex items-center gap-3">
      <Image
        width={100}
        height={100}
        src={"/logo-black.webp"}
        className="w-6 h-6 not-dark:hidden"
        alt="DPS Template"
      />
      <Image
        width={100}
        height={100}
        src={"/navLogo.webp"}
        className="w-6 h-6 dark:hidden"
        alt="DPS Template"
      />
      <h6
        className={`${size === "normal" ? "text-2xl" : "text-lg"} ${visible ? "block" : "hidden"} text-black dark:text-white md:block font-bold font-inter tracking-tighter`}
      >
        DP's Templates
      </h6>
    </Link>
  );
};

export default LogoTitle;

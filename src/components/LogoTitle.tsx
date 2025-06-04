import React from "react";
import Image from "next/image";
const LogoTitle = ({visible = false}: {visible: boolean}) => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={"/navLogo.png"}
        alt="Logo"
        width={1000}
        height={1000}
        className="w-7 h-7 md:w-8 z-50 md:h-8 inline-flex rounded-md md:rounded-lg"
      />
      <h6 className={`text-2xl ${visible ? "block" : "hidden"} md:block font-bold font-inter tracking-tighter`}>
        DP's Templates
      </h6>
    </div>
  );
};

export default LogoTitle;

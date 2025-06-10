import React from "react";
import NavbarWebsite from "@/components/NavbarWebsite";
import HeroGridTemplateSection from "@/components/HeroGridTemplateSection";

const page = () => {
  return (
    <div className="bg-white dark:bg-black w-full bg-fixed bg-center overflow-x-hidden overflow-y-auto min-h-screen relative text-white">
      <div className="navbar-style">
        <NavbarWebsite />
      </div>
      <div className="flex flex-col min-h-screen">
        <HeroGridTemplateSection />
      </div>
    </div>
  );
};

export default page;

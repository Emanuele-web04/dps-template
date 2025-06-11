import React from "react";
import NavbarWebsite from "@/components/NavbarWebsite";
import HeroGridTemplateSection from "@/components/HeroGridTemplateSection";

const page = () => {
  return (
    <div className="bg-clean">
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

import LightGradient from "@/components/LightGradient";
import React from "react";
import NavbarWebsite from "@/components/NavbarWebsite";
import HeroSection from "@/components/HeroSection";
import WhatYoullFind from "@/components/WhatYoullFind";
import FAQSection from "@/components/faq/FAQSection";

const page = () => {
  return (
    <div
      className="bg-black w-full
      bg-fixed bg-center overflow-x-hidden overflow-y-auto
      bg-[linear-gradient(rgba(0,0,0,1.0),rgba(0,0,0,0.85)),url('/gridd.png')] 
      flex flex-col justify-start p-6 md:p-12 items-center min-h-screen relative text-white"
    >
      <LightGradient />
      <div className="z-100 fixed flex w-full items-center justify-between p-6 py-4 sm:py-6 sm:px-12 mb-3 top-0 left-1/2 transform -translate-x-1/2 bg-transparent backdrop-blur-lg border-b border-neutral-800 shadow-lg m-auto">
        <NavbarWebsite />
      </div>
      <HeroSection />
      <WhatYoullFind />
      <FAQSection/>
    </div>
  );
};

export default page;

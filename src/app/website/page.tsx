import LightGradient from "@/components/LightGradient";
import React from "react";
import NavbarWebsite from "@/components/NavbarWebsite";
import HeroSection from "@/components/landing/HeroSection";
import WhatYoullFind from "@/components/landing/WhatYoullFind";
import FAQSection from "@/components/faq/FAQSection";
import Footer from "@/components/landing/Footer";
import CodeGift from "@/components/codegift/CodeGift";

const page = () => {
  return (
    <div className="bg-white dark:bg-black w-full bg-fixed bg-center overflow-x-hidden overflow-y-auto bg-[linear-gradient(rgba(255,255,255,255),rgba(0,0,0,0)),url('/gridd.png')] dark:bg-[linear-gradient(rgba(0,0,0,1.0),rgba(0,0,0,0.85)),url('/gridd.png')] min-h-screen relative text-black dark:text-white">
      <LightGradient />
      
        <NavbarWebsite size="normal"/>
     

      {/* Main content wrapper */}
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 flex flex-col justify-start p-6 md:p-12 items-center">
          <HeroSection />
          <CodeGift />
          <WhatYoullFind />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default page;

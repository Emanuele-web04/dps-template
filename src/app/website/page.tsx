import LightGradient from "@/components/effects/LightGradient";
import React from "react";
import NavbarWebsite from "@/components/layout/NavbarWebsite";
import HeroSection from "@/components/landing/HeroSection";
import WhatYoullFind from "@/components/landing/WhatYoullFind";
import FAQSection from "@/components/faq/FAQSection";
import Footer from "@/components/landing/Footer";
import CodeGift from "@/components/codegift/CodeGift";

const page = () => {
  return (
    <div className="bg-[linear-gradient(rgba(255,255,255,1.0),rgba(255,255,255,0)),url('/gridd.webp')] dark:bg-[linear-gradient(rgba(0,0,0,1.0),rgba(0,0,0,0.85)),url('/gridd.webp')] min-h-screen relative text-black dark:text-white">
      <LightGradient />
      <NavbarWebsite size="normal" />
      {/* Main content wrapper */}
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 flex flex-col justify-start p-6 sm:p-12 items-center">
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

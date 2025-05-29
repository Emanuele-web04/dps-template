import BackgroundGradient from "@/components/BackgroundGradient";
import HeroLabels from "@/components/HeroLabels";
import HeroText from "@/components/HeroText";
import EmailForm from "@/components/JoinWaitlist/EmailForm";
import Navbar from "@/components/Navbar";
import ShowcaseImages from "@/components/ShowcaseImages";
import TemplatesShowcase from "@/components/WhatYoullFind";
import React from "react";
const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center overflow-y-scroll overflow-x-hidden relative bg-white bg-[url('/mobilegrid.png')] md:bg-[url('/desktopgrid.png')] bg-center bg-no-repeat bg-cover bg-fixed">
      {/* Gradient blobs */}
      <BackgroundGradient />

      {/* Navbar */}
      <div className="z-10 fixed flex w-[280px] md:w-fit items-center justify-between p-2 py-1.5 sm:py-2 sm:px-4 mb-3 top-5 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-lg ring-1 ring-neutral-100 rounded-lg md:rounded-xl shadow-lg m-auto">
        <Navbar />
      </div>

      {/* Content */}
      <div className="p-4 min-h-screen md:p-0 relative md:top-5 flex flex-col gap-6 justify-center items-center" id="hero">
        <HeroLabels />
        <HeroText />
        <EmailForm />
        <div className="md:block hidden">
          <ShowcaseImages />
        </div>
      </div>
      <TemplatesShowcase/>
    </div>
  );
};

export default Home;

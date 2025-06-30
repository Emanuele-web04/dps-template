import React from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { TemplateType } from "@/types/template";
import AddToCart from "../ui/neumorphism-button/add-to-cart";
import SquareGrid from "../ui/square-grid";
import FeaturesSection from "./TemplateFeatureSection";
import StackIcons from "../ui/stack-icons";
import Link from "next/link";
import ContactCTACard from "./ContactCTACard";

const TemplatePage = ({
  title,
  desc,
  images,
  stack,
  price,
  preview,
}: TemplateType) => {
  return (
    <div className="fade-in-up min-h-screen xl:max-w-7xl mx-auto p-6! sm:py-6! sm:p-12!">
      <div className="relative mx-auto">
        <div className="flex mt-5! md:mt-12! square-grid px-0.5! w-full gap-x-10 justify-between items-end">
          <SquareGrid />
          <div className="flex z-20 flex-col w-full items-start justify-start">
            <h1 className="title-font grid-title mx-0!">{title}</h1>
            <p className="my-4 mx-0 font-inter text-sm max-w-2xl md:text-base text-left font-normal text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {desc}
            </p>
            <div className="flex flex-col md:flex-row gap-y-5 w-full justify-between">
              <StackIcons stack={stack} />
              <div className="flex relative flex-col md:flex-row justify-end items-start gap-y-4 md:gap-2">
                <Link
                  href={preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center hover:-translate-y-1 transition-all duration-300 md:w-fit px-6 py-3 md:py-2.5 minimal-button text-primary"
                >
                  Live Preview
                </Link>
                <div className="flex w-full md:w-fit relative flex-col">
                  <AddToCart price={price} />
                  <p className="md:absolute flex gap-1 justify-center w-full md:w-fit top-0 mt-4 md:mt-0 md:top-12 text-xs mx-auto md:text-sm text-primary font-inter">
                    or get this with{" "}
                    <Link className="font-bold" href="/pricing?filter=nextjs">
                      bundle
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid mt-10 grid-cols-1 md:grid-cols-2 w-full gap-2 p-1 md:p-2 rounded-3xl bg-neutral-200 dark:bg-neutral-800">
          {images.map((img, i) => (
            <Image
              className={cn(
                "w-full h-full ring-1 shadow-lg dark:ring-neutral-600 ring-neutral-200 rounded-3xl col-span-1 object-contain"
              )}
              key={i}
              src={img}
              alt=""
              width={1000}
              height={1000}
            />
          ))}
        </div>
        <FeaturesSection />
        <ContactCTACard variant="website" />
      </div>
    </div>
  );
};

export default TemplatePage;

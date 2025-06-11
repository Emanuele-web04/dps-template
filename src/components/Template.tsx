import React from "react";
import SquareGrid from "./ui/square-grid";
import AddToCart from "./ui/add-to-cart";
import {
  RiNextjsFill,
  FaReact,
  SiTailwindcss,
  TbBrandFramerMotion,
} from "@/utils/icons";
import Image from "next/image";
import { cn } from "@/lib/cn";
import Dots from "./ui/dots";
import Footer from "./landing/Footer";

const Template = () => {
  const icons = [RiNextjsFill, FaReact, SiTailwindcss, TbBrandFramerMotion];
  const price = 49;

  function rangeTo() {
    const images: string[] = [];
    for (let i = 0; i < 4; i++) {
      images.push("/khrona-landing.png");
    }

    return images;
  }

  const images = rangeTo();
  return (
    <div className="fade-in-up min-h-screen xl:max-w-7xl mx-auto p-6! md:p-12!">
      <div className="relative mx-auto">
        <div className="flex mt-12! square-grid px-0.5! w-full gap-x-10 justify-between items-end">
          <SquareGrid />
          <div className="flex z-20 flex-col w-full items-start justify-start">
            <h1 className="title-font grid-title mx-0!">AI Saas Template</h1>
            <p className="my-4 mx-0 text-sm max-w-2xl md:text-base text-left font-normal text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Modern and minimalist templates for building your next product.
              Built with React, Next.js, Tailwind CSS, Framer Motion and
              TypeScript.
            </p>
            <div className="flex flex-col md:flex-row gap-y-5 w-full justify-between">
              <div className="flex -space-x-2">
                {icons.map((icon, i) => {
                  const Icon = icon;
                  return (
                    <div
                      key={i}
                      className="bg-white dark:bg-neutral-900 rounded-full ring-1 dark:ring-neutral-600 ring-neutral-100"
                    >
                      <Icon className="md:m-2.5 md:w-5 md:h-5 m-2 w-4 h-4" />
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col md:flex-row justify-end items-center gap-y-4 md:gap-2">
                <button className="w-full md:w-fit px-6 py-3 md:py-2.5 dark:hover:bg-neutral-950 hover:bg-neutral-50 cursor-pointer font-inter text-sm font-medium tracking-tight ring-1 dark:ring-neutral-600 ring-neutral-200 shadow-md rounded-xl text-primary bg-white dark:bg-neutral-900">
                  Live Preview
                </button>
                <AddToCart price={price} />
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:p-8 mt-10 grid-cols-1 md:grid-cols-2 w-full gap-2">
          {images.map((img, i) => {
            const even = i % 2 === 0;
            const top = i < 2;
            return (
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
            );
          })}
        </div>
        <div className="flex lg:flex-row flex-col items-start md:p-8 mt-20 justify-between w-full">
          <h3 className="h3-title text-3xl! text-primary">Features</h3>
          <div className="relative w-full md:w-fit mt-6 lg:mt-0">
            <Dots />
            <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-y divide-dashed dark:divide-neutral-600 divide-neutral-200 border-l border-t border-dashed dark:border-neutral-600 border-neutral-200">
              <div className="flex p-4 col-span-1 flex-col items-start justify-start text-left">
                <h3 className="h6-title text-primary text-lg!">
                  Optimised SEO
                </h3>
                <p className="p-card text-left!">
                  Using Next.js metadata and ssr you have optimised seo for
                  search ranking
                </p>
              </div>
              <div className="flex p-4 col-span-1 flex-col items-start justify-start text-left">
                <h3 className="h6-title text-primary text-lg!">
                  Optimised SEO
                </h3>
                <p className="p-card text-left!">
                  Using Next.js metadata and ssr you have optimised seo for
                  search ranking
                </p>
              </div>
              <div className="flex p-4 col-span-1 flex-col items-start justify-start text-left">
                <h3 className="h6-title text-primary text-lg!">
                  Optimised SEO
                </h3>
                <p className="p-card text-left!">
                  Using Next.js metadata and ssr you have optimised seo for
                  search ranking
                </p>
              </div>
              <div className="flex p-4 col-span-1 flex-col items-start justify-start text-left">
                <h3 className="h6-title text-primary text-lg!">
                  Optimised SEO
                </h3>
                <p className="p-card text-left!">
                  Using Next.js metadata and ssr you have optimised seo for
                  search ranking
                </p>
              </div>
              <div className="flex p-4 col-span-1 flex-col items-start justify-start text-left">
                <h3 className="h6-title text-primary text-lg!">
                  Optimised SEO
                </h3>
                <p className="p-card text-left!">
                  Using Next.js metadata and ssr you have optimised seo for
                  search ranking
                </p>
              </div>
              <div className="flex p-4 border-b border-r border-dashed dark:border-neutral-600 border-neutral-200 col-span-1 flex-col items-start justify-start text-left">
                <h3 className="h6-title text-primary text-lg!">
                  Optimised SEO
                </h3>
                <p className="p-card text-left!">
                  Using Next.js metadata and ssr you have optimised seo for
                  search ranking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;

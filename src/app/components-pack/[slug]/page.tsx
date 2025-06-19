import Code from "@/components/Code";
import CodeWrapper from "@/components/CodeWrapper";
import SidebarComponent from "@/components/SidebarComponent";
import AddToCart from "@/components/ui/add-to-cart";
import SquareGrid from "@/components/ui/square-grid";
import StackIcons from "@/components/ui/stack-icons";
import { getAllComponentSlugs, getComponentBySlug } from "@/lib/components";
import { BiLogoTypescript, LuTerminal } from "@/utils/icons";
import { notFound } from "next/navigation";
import React from "react";

export async function generateStaticParams() {
  const slugs = await getAllComponentSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = await getComponentBySlug(slug);
  if (!component) return notFound();

  const {
    title,
    desc,
    price,
    image,
    longDesc,
    components,
    stack,
    installation,
    utils,
  } = component;

  return (
    <div className="bg-clean fade-in-up text-primary font-inter tracking-tight min-h-screen w-full sm:p-12 max-w-screen-xl mx-auto p-6">
      <div className="relative flex w-full mx-auto">
        <SidebarComponent components={components} />
        <div className="relative flex-1">
          <div className="flex mt-6! square-grid h-fit! px-0.5! w-full gap-10 justify-between items-end">
            <SquareGrid />
            <div className="flex z-20 text-left flex-col w-full items-start justify-start">
              <h1 className="title-font grid-title w-full text-left">
                {title}
              </h1>
              <p className="my-4 mx-0 font-inter text-sm max-w-2xl md:text-base text-left font-normal text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {desc}
              </p>
              <div className="flex flex-col md:flex-row gap-y-5 w-full justify-between">
                <StackIcons stack={stack} />
                <div className="flex relative flex-col md:flex-row justify-end items-start gap-y-4 md:gap-2">
                  <div className="flex w-full md:w-fit relative flex-col">
                    <AddToCart price={price} />
                    <p className="md:absolute flex gap-1 justify-center w-full md:w-fit top-0 mt-4 md:mt-0 md:top-12 text-xs mx-auto md:text-sm text-primary font-inter">
                      or get this with <strong>bundle</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Installation code */}
          <div className="flex flex-col mt-10">
            <h2 id="installation" className="scroll-mt-[100px] h2-title">
              Installation
            </h2>
            <p className="p-card text-left!">
              Quick guide to setup the component
            </p>
            <CodeWrapper Icon={LuTerminal} code={installation} path="Terminal" language="language-bash"/>
            <CodeWrapper Icon={BiLogoTypescript} code={utils} path="lib/utils.ts" color="#FF738A" language="language-ts"/>

            {/* Single Components array */}
            <div className="flex flex-col gap-y-4">
              {components.map((c, i) => (
                <div key={i} id={`component-${i}`}>
                  <h3>{c.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

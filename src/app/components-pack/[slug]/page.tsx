import CodeWrapper from "@/components/shared/CodeWrapper";
import SidebarComponent from "@/components/layout/SidebarComponent";
import SubComponentLayout from "@/components/shared/SubComponentLayout";
import AddToCart from "@/components/ui/neumorphism-button/add-to-cart";
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = await getComponentBySlug(slug);
  if (!component) return notFound();

  const { title, desc, components } = component;

  // Create a list of component names for better SEO
  const componentsList = components.map((c) => c.title).join(", ");
  const extendedDescription = `${desc} Includes ${componentsList}. Production-ready components with copy-paste code, TypeScript support, and full customization.`;

  return {
    title: `${title} | DP's Templates`,
    description: extendedDescription,
    openGraph: {
      title: `${title} - Ready-to-Use React Components`,
      description: extendedDescription,
      type: "website",
      images: [
        {
          url: "https://dpstemplates.com/placeholder.png",
          width: 1200,
          height: 630,
          alt: `${title} - React Components Collection`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - DP's Templates`,
      description: extendedDescription,
      images: ["https://dpstemplates.com/placeholder.png"],
    },
    keywords: `${title.toLowerCase()}, react components, nextjs, typescript, tailwindcss, ui components, ${componentsList.toLowerCase()}, copy paste components`,
  };
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
      <div className="relative md:flex w-full mx-auto">
        <SidebarComponent components={components} />
        {/* Add flex-1 and min-w-0 to the main content container */}
        <div className="relative flex-1 min-w-0">
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
          <div className="flex flex-col mt-4">
            <h2 id="installation" className="scroll-mt-[100px] h2-title">
              Installation
            </h2>
            <p className="p-style my-2">Quick guide to setup the component</p>
            <p className="p-style">
              <code>1.</code> Copy and paste this into the terminal to install
              the required dependencies.
            </p>
            {/* Add w-0 flex-1 to CodeWrapper containers */}
            <div className="flex-1">
              <CodeWrapper
                Icon={LuTerminal}
                code={installation}
                path="Terminal"
                language="language-bash"
              />
            </div>
            <p className="p-style">
              <code>2.</code> Create{" "}
              <code className="text-sm code-tag text-primary">/lib</code>{" "}
              folder, then create the file{" "}
              <code className="text-sm code-tag text-primary">utils.ts</code>.
              Copy and paste this inside of it.
            </p>
            <div className="flex-1">
              <CodeWrapper
                Icon={BiLogoTypescript}
                code={utils}
                path="lib/utils.ts"
                color="#FF738A"
                language="language-ts"
              />
            </div>
            {/* Single Components array */}
            <div className="flex flex-col mt-6 gap-y-8">
              {components.map((c, i) => (
                <SubComponentLayout key={i} {...c} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

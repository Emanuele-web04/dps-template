"use client";

import { cn } from "@/lib/cn";
import { SingleComponent } from "@/types/component";
import {
  BiLogoTypescript,
  FaReact,
  LuCheck,
  LuCodeXml,
  LuCopy,
  PiLaptop,
} from "@/utils/icons";
import React, { useState } from "react";
import { IconType } from "react-icons";
import CodeBlock from "../codegift/Codeblock";
import { useCopyToCLipboard } from "@/hooks/useCopyToClipboard";
import Plus from "../ui/main-hero/plus";
import PricingContent from "../pricing/PricingContent";
import { allNextPricing } from "@/lib/nextjs-pricing/pricings";

type ButtonSubComponent = {
  Icon: IconType;
  text: string;
  id: string;
};

const buttons: ButtonSubComponent[] = [
  { Icon: PiLaptop, text: "Preview", id: "preview" },
  { Icon: LuCodeXml, text: "Code", id: "code" },
];

const SubComponentLayout = ({
  title,
  code,
  slug,
  preview,
  npm,
  desc,
}: SingleComponent) => {
  const [selection, setSelection] = useState(buttons[0].id);
  const hasPaid = false;

  const handleSelection = (id: string) => {
    setSelection(id);
  };

  const { copy, handleCopy } = useCopyToCLipboard();

  return (
    <div
      id={`${slug}`}
      className="flex scroll-mt-[100px] flex-col gap-y-1 md:gap-y-2"
    >
      <h3 className="h3-title">{title}</h3>
      <p className="p-style mt-0!">{desc}</p>
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center mt-2 gap-x-2">
          {buttons.map((b, i) => {
            const Icon = b.Icon;
            return (
              <button
                key={i}
                onClick={() => handleSelection(b.id)}
                className={cn(
                  "flex items-center gap-x-1 ring-1 dark:ring-neutral-800 ring-neutral-200 rounded-xl transition-all cursor-pointer px-4 py-1.5 md:text-base text-sm",
                  selection === b.id ? "bg-neutral-100 dark:bg-neutral-900" : ""
                )}
              >
                <Icon />
                <p>{b.text}</p>
              </button>
            );
          })}
        </div>
        {selection === "preview" ? (
          <div className="bg-neutral-100/50 relative dark:bg-neutral-900/50 w-full flex justify-center border border-dashed dark:border-neutral-700 border-neutral-200">
            <Plus />
            <div className=" p-2 rounded-md w-full flex justify-center mx-auto h-fit  m-2">
              {React.createElement(preview)}
            </div>
          </div>
        ) : !hasPaid ? (
          <div className="flex font-inter text-primary tracking-tight flex-col gap-3">
            <PricingContent
              pricings={allNextPricing}
              variant={"neutral"}
              filter={"nextjs"}
            />
          </div>
        ) : (
          <div className=" ring-neutral-100 p-1 dark:ring-neutral-800 overflow-x-auto  flex flex-col">
            <div className="code-wrapper w-full overflow-clip">
              <div className="flex w-full justify-between items-center">
                <div className="flex p-2  text-neutral-500 items-center gap-x-1">
                  <FaReact />
                  <p className="font-mono text-sm">{slug}.tsx</p>
                </div>
                <button
                  onClick={() => handleCopy(code)}
                  className="text-neutral-500 transition-all px-3 font-medium cursor-pointer focus:outline-none"
                >
                  {copy ? (
                    <div className="flex items-center text-sm gap-x-2">
                      <LuCheck />
                      <p className="">Copied!</p>
                    </div>
                  ) : (
                    <div className="flex items-center text-sm gap-x-2">
                      <LuCopy />
                      <p>Copy</p>
                    </div>
                  )}
                </button>
              </div>
              <div className="overflow-auto w-full rounded-2xl ring-1 ring-neutral-200 dark:ring-neutral-800 code-scrollbar flex-1 min-h-0">
                <CodeBlock className="language-tsx">{code}</CodeBlock>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubComponentLayout;

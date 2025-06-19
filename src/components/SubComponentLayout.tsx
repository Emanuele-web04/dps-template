"use client";

import { cn } from "@/lib/cn";
import { SingleComponent } from "@/types/component";
import { LuCodeXml, PiLaptop } from "@/utils/icons";
import React, { useState } from "react";
import { IconType } from "react-icons";
import Code from "./Code";
import KhronaHero from "./hero-sections/KhronaHero";

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

  const handleSelection = (id: string) => {
    setSelection(id);
  };

  return (
    <div id={`component`} className="flex flex-col gap-y-2">
      <h6 className="h6-title">{title}</h6>
      <p className="p-style mt-0!">{desc}</p>
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-2">
          {buttons.map((b, i) => {
            const Icon = b.Icon;
            return (
              <button
                key={i}
                onClick={() => handleSelection(b.id)}
                className={cn(
                  "flex items-center gap-x-1 ring-1 ring-neutral-200 rounded-xl transition-all cursor-pointer px-4 py-1.5 ",
                  selection === b.id ? "bg-neutral-100" : ""
                )}
              >
                <Icon />
                <p>{b.text}</p>
              </button>
            );
          })}
        </div>
        {selection === "preview" ? (
          <div className="bg-neutral-100 ring-1 ring-neutral-200">
            <div className="ring-1 bg-white ring-neutral-200 rounded-3xl m-2">
              {preview()}
            </div>
          </div>
        ) : (
          <KhronaHero />
        )}
      </div>
    </div>
  );
};

export default SubComponentLayout;

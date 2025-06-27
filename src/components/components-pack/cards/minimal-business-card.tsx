"use client";

import { socials } from "@/lib/socials";
import { people } from "@/lib/images";
import Link from "next/link";
import React from "react";
import { VscAccount } from "react-icons/vsc";
import Image from "next/image";

const MinimalBusinessCard = () => {
  const imagePath: string | undefined = people[3].src;

  // Sample social handles
  const socialHandles = [
    { name: "X", handle: "@johndoe" },
    { name: "YouTube", handle: "@johndoechannel" },
    { name: "Instagram", handle: "@johndoe_official" },
    { name: "TikTok", handle: "@johndoe" },
  ];

  return (
    <div className="font-sans flex justify-center items-center m-auto sm:p-0">
      <div className="flex flex-col bg-white dark:bg-neutral-800 shadow-lg ring-1 ring-neutral-200 dark:ring-neutral-700 w-full max-w-lg rounded-3xl divide-y divide-neutral-100 dark:divide-neutral-700">
        {/* photo + name component */}

        <div className="p-4 grid grid-cols-8">
          {imagePath ? (
            <Image
              src={imagePath}
              width={80}
              height={80}
              alt="Profile"
              className="w-16 h-16 sm:w-18 sm:h-18 col-span-3 sm:col-span-2 rounded-full object-cover"
            />
          ) : (
            <span className="w-16 h-16 sm:w-18 sm:h-18 col-span-3 sm:col-span-2 bg-gradient-to-br from-gray-300 to-gray-100 dark:from-neutral-600 dark:to-neutral-700 rounded-full flex items-center justify-center">
              <VscAccount className="text-gray-400 dark:text-neutral-400 text-3xl" />
            </span>
          )}

          <div className="flex flex-col col-span-5">
            <h3 className="font-semibold text-lg text-gray-900 dark:text-neutral-100">
              John Doe
            </h3>
            <p className="text-sm text-neutral-400 dark:text-neutral-400">
              Founder of Company
            </p>
            <p className="text-sm text-neutral-400 dark:text-neutral-400">
              New York, USA
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col divide-y divide-neutral-100 dark:divide-neutral-700">
            {socials.map((social, i) => {
              const Icon = social.icon;
              const socialHandle = socialHandles.find(
                (s) => s.name === social.name
              );

              return (
                <Link
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 grid grid-cols-8 hover:bg-gray-50 dark:hover:bg-neutral-700/50 transition-colors"
                >
                  <div className="flex w-28 col-span-3 sm:col-span-2 text-neutral-500 dark:text-neutral-400 items-center gap-2">
                    <Icon className="sm:text-lg" />
                    <p className="text-sm sm:text-base">{social.name}</p>
                  </div>
                  <h6 className="font-medium col-span-5 text-gray-900 dark:text-neutral-100">
                    {socialHandle?.handle || `@${social.link.split("/").pop()}`}
                  </h6>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimalBusinessCard;

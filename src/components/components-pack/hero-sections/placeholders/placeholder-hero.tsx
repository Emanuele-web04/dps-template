"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PlaceholderHeroProps {
  slug?: string;
}

const PlaceholderHero = ({ slug }: PlaceholderHeroProps) => {
  return (
    <div className="relative block md:grid md:min-h-screen w-full grid-cols-[1fr_2.5rem_auto_2.5rem_1fr] grid-rows-[1fr_1px_auto_1px_1fr] bg-white [--pattern-fg:var(--color-neutral-950)]/5 dark:bg-neutral-950 dark:[--pattern-fg:var(--color-white)]/10">
      <div className="col-start-3 row-start-3 flex max-w-lg flex-col bg-neutral-100 md:p-2 dark:bg-neutral-900/50">
        <div className="rounded-xl leading-normal bg-white px-6 py-10 md:p-10 text-sm/7 text-neutral-700 dark:bg-neutral-950 dark:text-neutral-300">
          <div className="flex items-center mb-11.5 gap-x-3">
            <Image
              width={100}
              height={100}
              src="/navLogo.webp"
              className="w-6 h-6 dark:hidden"
              alt="DPS Template"
            />
            <Image
              width={100}
              height={100}
              src="/logo-black.webp"
              className=" w-6 h-6 not-dark:hidden"
              alt="DPS Template"
            />
            <h1 className="text-lg font-medium">Hero Section</h1>
          </div>
          <div className="space-y-6">
            <p className="leading-normal">
              For viewing the full hero section click on See Preview to see it
              in action.
            </p>
            <ul className="space-y-3">
              <li className="flex">
                <svg
                  className="h-[1lh] w-5.5 shrink-0"
                  viewBox="0 0 22 22"
                  fill="none"
                  strokeLinecap="square"
                >
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle
                    cx="11"
                    cy="11"
                    r="10.5"
                    className="stroke-sky-400/25"
                  />
                  <path
                    d="M8 11.5L10.5 14L14 8"
                    className="stroke-sky-800 dark:stroke-sky-300"
                  />
                </svg>
                <p className="ml-3">
                  Responsive design with
                  <code className="font-mono ml-1 font-medium text-neutral-950 dark:text-white">
                    Tailwind CSS
                  </code>
                </p>
              </li>
              <li className="flex">
                <svg
                  className="h-[1lh] w-5.5 shrink-0"
                  viewBox="0 0 22 22"
                  fill="none"
                  strokeLinecap="square"
                >
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle
                    cx="11"
                    cy="11"
                    r="10.5"
                    className="stroke-sky-400/25"
                  />
                  <path
                    d="M8 11.5L10.5 14L14 8"
                    className="stroke-sky-800 dark:stroke-sky-300"
                  />
                </svg>
                <p className="ml-3">
                  Dark mode support with{" "}
                  <code className="font-mono ml-1 font-medium text-neutral-950 dark:text-white">
                    theme switching
                  </code>
                </p>
              </li>
              <li className="flex">
                <svg
                  className="h-[1lh] w-5.5 shrink-0"
                  viewBox="0 0 22 22"
                  fill="none"
                  strokeLinecap="square"
                >
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle
                    cx="11"
                    cy="11"
                    r="10.5"
                    className="stroke-sky-400/25"
                  />
                  <path
                    d="M8 11.5L10.5 14L14 8"
                    className="stroke-sky-800 dark:stroke-sky-300"
                  />
                </svg>
                <p className="ml-3">
                  Beautiful icons with
                  <code className="font-mono ml-1 font-medium text-neutral-950 dark:text-white">
                    React Icons
                  </code>
                </p>
              </li>
              <li className="flex">
                <svg
                  className="h-[1lh] w-5.5 shrink-0"
                  viewBox="0 0 22 22"
                  fill="none"
                  strokeLinecap="square"
                >
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle
                    cx="11"
                    cy="11"
                    r="10.5"
                    className="stroke-sky-400/25"
                  />
                  <path
                    d="M8 11.5L10.5 14L14 8"
                    className="stroke-sky-800 dark:stroke-sky-300"
                  />
                </svg>
                <p className="ml-3">
                  Copy-paste ready components with instant preview
                </p>
              </li>
            </ul>
            <p>
              Perfect for building landing pages, showcasing products, or
              creating stunning first impressions.
            </p>
          </div>
          <hr className="my-6 w-full border-(--pattern-fg)" />
          <p className="mb-3">Ready to see the hero sections in action?</p>
          <p className="font-semibold">
            {slug ? (
              <Link
                href={`/components-pack/previews/hero-sections/${slug}`}
                className="text-neutral-950 underline decoration-sky-400 underline-offset-3 hover:decoration-2 dark:text-white"
              >
                See Preview &rarr;
              </Link>
            ) : (
              <span className="text-neutral-500 cursor-not-allowed">
                No preview available
              </span>
            )}
          </p>
        </div>
      </div>
      <div className="relative hidden md:block -right-px col-start-2 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      <div className="relative hidden md:block -left-px col-start-4 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
      <div className="relative hidden md:block -bottom-px col-span-full col-start-1 row-start-2 h-px bg-(--pattern-fg)"></div>
      <div className="relative hidden md:block -top-px col-span-full col-start-1 row-start-4 h-px bg-(--pattern-fg)"></div>
    </div>
  );
};

export default PlaceholderHero;

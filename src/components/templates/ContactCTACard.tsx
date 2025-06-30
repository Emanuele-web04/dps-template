import React from "react";
import Image from "next/image";
import Plus from "../ui/main-hero/plus";
import Link from "next/link";

const ContactCTACard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative mt-25 font-inter mb-8 grid w-full grid-cols-[1fr_0.75rem_auto_0.75rem_1fr] md:grid-cols-[1fr_2.5rem_auto_2.5rem_1fr] grid-rows-[1fr_1px_auto_1px_1fr] bg-white [--pattern-fg:var(--color-neutral-950)]/5 dark:bg-neutral-950 dark:[--pattern-fg:var(--color-white)]/10">
        <div className="col-start-3 tracking-tight row-start-3 flex max-w-2xl flex-col bg-neutral-100 p-2 dark:bg-neutral-900/50">
          <div className="relative leading-normal bg-white border border-neutral-200 dark:border-neutral-700 p-4 sm:p-6 md:p-10 text-sm/7 text-neutral-700 dark:bg-neutral-950 dark:text-neutral-300">
            <Plus />

            <div className="flex items-center mb-8 gap-x-3">
              <Image
                width={100}
                height={100}
                src="/navLogo.png"
                className="w-6 h-6 dark:hidden"
                alt="DPS Template"
              />
              <Image
                width={100}
                height={100}
                src="/logo-black.png"
                className="w-6 h-6 not-dark:hidden"
                alt="DPS Template"
              />
              <h1 className="font-semibold tracking-tighter">
                Custom Development
              </h1>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white leading-tight">
                Want a modern, majestic website tailored to your needs?{" "}
                <span className="text-sky-500 dark:text-sky-400">
                  Get in touch
                </span>
              </h2>

              <p className="leading-normal text-neutral-600 dark:text-neutral-300">
                I've created hundreds of websites, and helped{" "}
                <span className="text-sky-500 dark:text-sky-400">
                  companies and startups
                </span>{" "}
                improve their websites and apps from scratch.
              </p>

              <ul className="space-y-3">
                <li className="flex">
                  <svg
                    className="h-[1lh] w-5.5 shrink-0"
                    viewBox="0 0 22 22"
                    fill="none"
                    strokeLinecap="square"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="11"
                      className="fill-sky-400/25"
                    />
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
                    Custom web applications with
                    <code className="font-mono ml-1 font-medium text-neutral-950 dark:text-white">
                      Next.js & React
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
                    <circle
                      cx="11"
                      cy="11"
                      r="11"
                      className="fill-sky-400/25"
                    />
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
                    <circle
                      cx="11"
                      cy="11"
                      r="11"
                      className="fill-sky-400/25"
                    />
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
                    Exceptional quality and delighted end results guaranteed
                  </p>
                </li>
              </ul>

              <p className="text-neutral-600 dark:text-neutral-300">
                Perfect for startups, businesses, indie-devs, or anyone needing
                a professional web presence.
              </p>
            </div>

            <hr className="my-6 w-full border-neutral-200 dark:border-neutral-700" />

            <p className="text-neutral-600 mb-6 dark:text-neutral-300">
              Ready to build something extraordinary?
            </p>

            <Link
              href="mailto:emandipietro@gmail.com"
              className="bg-neutral-900 group active:scale-95 hover:-translate-y-0.5 focus:outline-0 cursor-pointer relative dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-300 overflow-hidden text-sm inline-block"
            >
              Reach out to me &rarr;
              <span className="absolute left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent dark:from-transparent dark:via-sky-400 dark:to-transparent h-[1.5px] w-3/4 bottom-0"></span>
              <span className="absolute left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent opacity-0 active:opacity-100 group-hover:opacity-100 via-cyan-500 to-transparent dark:from-transparent dark:via-sky-400 dark:to-transparent h-2 blur-sm w-3/4 bottom-0 transition-opacity duration-300"></span>
            </Link>
          </div>
        </div>

        {/* Decorative lines */}
        <div className="relative -right-px col-start-2 row-span-full row-start-1 border-x border-x-neutral-950/5 dark:border-x-white/10 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
        <div className="relative -left-px col-start-4 row-span-full row-start-1 border-x border-x-neutral-950/5 dark:border-x-white/10 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
        <div className="relative -bottom-px col-span-full col-start-1 row-start-2 h-px bg-neutral-950/5 dark:bg-white/10"></div>
        <div className="relative -top-px col-span-full col-start-1 row-start-4 h-px bg-neutral-950/5 dark:bg-white/10"></div>
      </div>
    </div>
  );
};

export default ContactCTACard;

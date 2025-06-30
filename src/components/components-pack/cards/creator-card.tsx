"use client";

import Image from "next/image";
import { people } from "@/lib/images";
import { FaReact, LuBookmark, LuStar } from "@/utils/icons";

const CreatorCard = () => {
  // Using the fourth person from the people array (index 3)
  const person = people[3];

  return (
    <div className="md:w-[320px] w-[280px] bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-sm">
      {/* Card Content Container */}
      <div className="p-2 flex flex-col w-full md:gap-y-8 gap-y-3">
        {/* Background Image */}
        <div className="relative h-[140px] w-full rounded-2xl overflow-hidden mb-5">
          <Image
            src="/placeholder.webp"
            alt="Background pattern"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Profile Content */}
        <div className="relative w-full md:px-4 px-2">
          {/* Profile Image */}
          <div className="absolute px-4 md:-top-20 -top-15 left-0">
            <div className="md:h-[74px] md:w-[74px] h-[50px] w-[50px] rounded-full overflow-hidden ring-1 ring-white backdrop-blur-2xl dark:ring-neutral-900 bg-pink-100">
              <Image
                src={person.src}
                alt={person.name}
                width={74}
                height={74}
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="pb-1 w-full">
            <div className="flex w-full justify-between">
              <div className="flex flex-col mb-4">
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                  Alexander Ross
                </h2>
                <p className=" text-sm text-neutral-500 dark:text-neutral-400">
                  Next.js Developer
                </p>
              </div>
              <button className="h-8 w-8 flex items-center justify-center rounded-full bg-white dark:bg-neutral-800 shadow-sm">
                <LuBookmark className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
              </button>
            </div>

            {/* Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800ˇ text-white p-1 rounded-full">
                <span className="w-6 h-6 text-xs flex items-center justify-center bg-blue-500 text-white rounded-full font-bold">
                  <FaReact className="w-4 h-4" />
                </span>
                <span className="text-xs pr-2 text-black dark:text-white font-medium">
                  React Expert
                </span>
              </div>
              <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-full">
                +6
              </span>
            </div>

            {/* Stats */}
            <div className="flex items-start px-4 justify-between mb-6">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 font-semibold text-neutral-900 dark:text-white">
                  <LuStar className="w-4 h-4" />
                  <span>4.9</span>
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">
                  rating
                </div>
              </div>
              <div className="h-10 w-px bg-neutral-200 dark:bg-neutral-700"></div>
              <div className="flex flex-col items-center">
                <div className=" font-semibold text-neutral-900 dark:text-white">
                  $35k+
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">
                  earned
                </div>
              </div>
              <div className="h-10 w-px bg-neutral-200 dark:bg-neutral-700"></div>
              <div className="flex flex-col items-center">
                <div className=" font-semibold text-neutral-900 dark:text-white">
                  $45/hr
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400">
                  rate
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-[20px] text-sm font-medium hover:opacity-90 transition-opacity">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;

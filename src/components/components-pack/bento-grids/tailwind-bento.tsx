"use client";

import { FaAngular, FaReact, FaVuejs } from "react-icons/fa";
import {
  FiArrowRight,
  FiBox,
  FiFigma,
  FiGrid,
  FiLayout,
  FiLayers,
  FiCode,
} from "react-icons/fi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiSvelte } from "react-icons/si";

const TailwindBento = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 gap-2 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3">
        {/* Card 1: Components */}
        <div className="lg:col-start-1 lg:row-start-1 flex flex-col justify-between rounded-xl border bg-white p-5 border-gray-200 dark:border-neutral-800 dark:bg-neutral-900">
          <div>
            <FiGrid className="mb-3 text-2xl text-purple-500 dark:text-purple-400" />
            <h3 className="mb-2 text-lg font-bold text-neutral-800 dark:text-neutral-100">
              500+ Components
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              From grid layouts to navbars, buttons, forms, tables and many
              more.
            </p>
          </div>
          <a
            href="#"
            className="mt-4 flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400"
          >
            Get started <FiArrowRight />
          </a>
        </div>

        {/* Card 2: Centerpiece - Examples */}
        <div className="relative lg:col-start-2 lg:row-start-1 lg:row-span-2 flex flex-col items-center justify-center overflow-hidden rounded-xl border bg-white p-5 text-center border-gray-200 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.1),transparent)] dark:bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.15),transparent)]"></div>
          <div className="relative z-10 flex flex-col items-center justify-center">
            <p className="text-xs font-semibold uppercase text-purple-500 dark:text-purple-400">
              Over
            </p>
            <p className="my-2 bg-gradient-to-b from-purple-500 to-blue-500 bg-clip-text text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent dark:from-purple-400 dark:to-blue-400">
              150
            </p>
            <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
              Templates
            </h3>
            <p className="mx-auto mb-5 max-w-xs text-sm text-neutral-600 dark:text-neutral-400">
              Kick-start your project effortlessly with our wide range of
              examples and layouts using modern frameworks.
            </p>
            <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
              View Templates <FiArrowRight />
            </button>
          </div>
        </div>

        {/* Card 3: Design System */}
        <div className="lg:col-start-3 lg:row-start-1 flex flex-col justify-between rounded-xl border bg-white p-5 border-gray-200 dark:border-neutral-800 dark:bg-neutral-900">
          <div>
            <FiFigma className="mb-3 text-2xl text-pink-500 dark:text-pink-400" />
            <h3 className="mb-2 text-lg font-bold text-neutral-800 dark:text-neutral-100">
              Design System
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Complete design system with Figma components and assets.
            </p>
          </div>
          <a
            href="#"
            className="mt-4 flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400"
          >
            Explore more <FiArrowRight />
          </a>
        </div>

        {/* Card 4: Framework Guides */}
        <div className="lg:col-start-1 h-full bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.1),transparent)] dark:bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.15),transparent)] lg:row-start-2 lg:row-span-2 flex flex-col rounded-xl border border-gray-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex flex-col justify-between h-full">
            <div className="lg:mt-8">
              <div className="grid h-full relative grid-cols-3 place-items-center gap-4">
                <FaAngular className="lg:text-4xl text-3xl relative lg:top-10 text-red-500" />
                <SiSvelte className="lg:text-4xl text-3xl  text-orange-500" />
                <FaReact className="lg:text-4xl text-3xl relative lg:top-10 text-blue-400" />
                <FaVuejs className="lg:text-4xl text-3xl relative lg:top-10 lg:text-green-500" />
                <TbBrandNextjs className="lg:text-4xl text-3xl relative lg:top-20 text-black dark:text-white" />
                <FiCode className="lg:text-4xl text-3xl relative lg:top-10 text-cyan-400" />
              </div>
            </div>
            <div className="flex flex-col justify-end mt-4">
              <h3 className="mb-2 text-lg font-bold text-neutral-800 dark:text-neutral-100">
                Framework Support
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Seamlessly integrated with all your favorite development tools
                and frameworks.
              </p>
            </div>
          </div>
          <a
            href="#"
            className="mt-4 flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400"
          >
            Learn more <FiArrowRight />
          </a>
        </div>

        {/* Card 5: Free Templates */}
        <div className="lg:col-start-3 lg:row-start-2 lg:row-span-2 flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
          <div>
            <FiLayout className="mb-3 text-2xl text-blue-500 dark:text-blue-400" />
            <h3 className="mb-2 text-lg font-bold text-neutral-800 dark:text-neutral-100">
              Starter Templates
            </h3>
            <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-400">
              Ready-to-use templates to build your projects at lightning speed
              with modern best practices.
            </p>
            <div className="rounded-lg lg:mt-12 bg-neutral-100 p-2 dark:bg-neutral-800/50">
              <div className="mb-2 flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                <div className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                <div className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-600" />
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 w-full rounded-full bg-neutral-200 dark:bg-neutral-700" />
                <div className="h-1.5 w-2/3 rounded-full bg-neutral-200 dark:bg-neutral-700" />
              </div>
            </div>
          </div>
          <a
            href="#"
            className="mt-4 flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400"
          >
            View all <FiArrowRight />
          </a>
        </div>

        {/* Card 6: Developer Tools */}
        <div className="lg:col-start-2 lg:row-start-3 flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
          <div>
            <FiLayers className="mb-3 text-2xl text-green-500 dark:text-green-400" />
            <h3 className="mb-2 text-lg font-bold text-neutral-800 dark:text-neutral-100">
              Developer Tools
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Powerful CLI tools and plugins to enhance your development
              workflow.
            </p>
          </div>
          <a
            href="#"
            className="mt-4 flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400"
          >
            See how it works <FiArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TailwindBento;

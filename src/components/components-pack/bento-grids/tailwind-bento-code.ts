export const tailwindBentoCode = `"use client";

import { FaAngular, FaReact, FaVuejs } from "react-icons/fa";
import { FiArrowRight, FiBox, FiFigma, FiGrid, FiLayout, FiLayers } from "react-icons/fi";
import { TbBrandNextjs } from "react-icons/tb";

const TailwindBento = () => {
  return (
    <div className="min-h-screen bg-neutral-950 p-4 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {/* Card 1: Components */}
        <div className="bg-neutral-900 rounded-2xl p-6 flex flex-col justify-between border border-neutral-800">
          <div>
            <FiGrid className="text-3xl text-purple-400 mb-4" />
            <h3 className="font-bold text-xl mb-2 text-neutral-100">640+ Components</h3>
            <p className="text-sm text-neutral-400">
              From grid layouts to navbars, buttons, forms, tables and many more.
            </p>
          </div>
          <a href="#" className="text-sm text-blue-400 flex items-center gap-1 mt-6">
            Get started <FiArrowRight />
          </a>
        </div>

        {/* Card 2: Framework Guides */}
        <div className="bg-neutral-900 rounded-2xl p-6 flex flex-col justify-between border border-neutral-800">
          <div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <FaAngular className="text-5xl text-red-500" />
              <FaVuejs className="text-5xl text-green-500" />
              <FaReact className="text-5xl text-blue-400" />
              <TbBrandNextjs className="text-5xl" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-neutral-100">Framework Guides</h3>
            <p className="text-sm text-neutral-400">
              Preline UI is seamlessly integrated with all your dev favorite tools.
            </p>
          </div>
          <a href="#" className="text-sm text-blue-400 flex items-center gap-1 mt-6">
            Learn more <FiArrowRight />
          </a>
        </div>

        {/* Card 3: Centerpiece - Examples */}
        <div className="bg-neutral-900 rounded-2xl p-6 flex flex-col items-center text-center justify-between border border-neutral-800 lg:row-span-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.15),transparent)]"></div>
          <div>
            <p className="text-sm uppercase text-purple-400 font-semibold">Over</p>
            <p className="text-7xl font-bold bg-gradient-to-b from-purple-400 to-blue-400 bg-clip-text text-transparent my-2">
              205
            </p>
            <h3 className="font-bold text-xl text-neutral-100">Examples</h3>
          </div>
          <div>
            <p className="text-sm text-neutral-400 max-w-xs mx-auto mb-6">
              Kick-start your project effortlessly with Preline UI's wide range of examples.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 mx-auto">
              View Examples <FiArrowRight />
            </button>
          </div>
        </div>

        {/* Card 4: Preline UI Figma */}
        <div className="bg-neutral-900 rounded-2xl p-6 flex flex-col justify-between border border-neutral-800">
          <div>
            <FiFigma className="text-3xl text-pink-400 mb-4" />
            <h3 className="font-bold text-xl mb-2 text-neutral-100">Preline UI Figma</h3>
            <p className="text-sm text-neutral-400">
              The largest free design system for Figma.
            </p>
          </div>
          <a href="#" className="text-sm text-blue-400 flex items-center gap-1 mt-6">
            Explore more <FiArrowRight />
          </a>
        </div>

        {/* Card 5: Free Templates */}
        <div className="bg-neutral-900 rounded-2xl p-6 flex flex-col justify-between border border-neutral-800">
          <div>
            <FiLayout className="text-3xl text-blue-400 mb-4" />
            <h3 className="font-bold text-xl mb-2 text-neutral-100">Free Templates</h3>
            <p className="text-sm text-neutral-400 mb-4">
              Free, ready-to-use templates to build your projects at lightning speed.
            </p>
            <div className="bg-neutral-800/50 rounded-lg p-2">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
              </div>
              <div className="space-y-1.5">
                <div className="w-full h-2 rounded-full bg-neutral-700" />
                <div className="w-2/3 h-2 rounded-full bg-neutral-700" />
              </div>
            </div>
          </div>
          <a href="#" className="text-sm text-blue-400 flex items-center gap-1 mt-6">
            View all <FiArrowRight />
          </a>
        </div>

        {/* Card 6: Tailwind CSS Plugins */}
        <div className="bg-neutral-900 rounded-2xl p-6 flex flex-col justify-between border border-neutral-800">
          <div>
            <FiLayers className="text-3xl text-green-400 mb-4" />
            <h3 className="font-bold text-xl mb-2 text-neutral-100">Tailwind CSS Plugins</h3>
            <p className="text-sm text-neutral-400">
              Completely unstyled, fully accessible UI plugins for popular features.
            </p>
          </div>
          <a href="#" className="text-sm text-blue-400 flex items-center gap-1 mt-6">
            See how it works <FiArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TailwindBento;`; 
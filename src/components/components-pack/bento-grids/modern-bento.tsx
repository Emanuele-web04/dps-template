"use client";

import {
  FiArrowRight,
  FiFile,
  FiGrid,
  FiMessageSquare,
  FiPlusCircle,
  FiThumbsUp,
} from "react-icons/fi";
import Image from "next/image";

const ModernBento = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl mx-auto">
        {/* Card 1: Main Feature */}
        <div className="lg:col-span-2 md:col-span-2 bg-white h-full flex flex-col justify-end rounded-2xl p-2 shadow-sm">
          <Image
            src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-releases.png"
            alt="Feature placeholder"
            width={800}
            height={400}
            className="rounded-xl object-center w-full h-full"
          />
          <div className="flex flex-col w-full justify-center text-center mt-4 mb-2 -space-y-1">
            <h3 className="font-semibold text-black">
              Note, Task, Whiteboard & more.
            </h3>
            <p className="text-neutral-600 text-sm">
              Manage your business end-to-end in our set of free native apps.
            </p>
          </div>
        </div>

        {/* Card 2: Speed */}
        <div className="bg-white h-full flex flex-col justify-end rounded-2xl p-2 shadow-sm">
          <Image
            src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-speed.png"
            alt="Speed placeholder"
            width={400}
            height={200}
            className="rounded-xl object-cover w-full h-full"
          />
          <div className="flex flex-col w-full justify-center text-center mt-4 mb-2 -space-y-1">
            <h3 className="font-semibold text-black">Built for speed.</h3>
            <p className="text-neutral-600 text-sm">
              Switch between apps in one stroke of a key.
            </p>
          </div>
        </div>

        {/* Card 3: Views */}
        <div className="bg-white h-full flex flex-col justify-end rounded-2xl p-2 shadow-sm">
          <Image
            src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
            alt="Views placeholder"
            width={800}
            height={400}
            className="rounded-xl object-contain w-full flex-1"
          />
          <div className="flex flex-col w-full justify-center text-center mt-4 mb-2 -space-y-1">
            <h3 className="font-semibold text-black">Switch between views</h3>
            <p className="text-neutral-600 text-sm">
              Table view, Kanban View, Tile View. We got you covered.
            </p>
          </div>
        </div>

        {/* Card 4: Auto-enrichment */}
        <div className="lg:col-span-1 bg-white h-full flex flex-col justify-end rounded-2xl p-2 shadow-sm">
          <Image
            src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-network.png"
            alt="Auto-enrichment placeholder"
            width={400}
            height={200}
            className="rounded-xl object-cover w-full flex-1"
          />
          <div className="flex flex-col w-full justify-center text-center mt-4 mb-2 -space-y-1">
            <h3 className="font-semibold text-black">Auto-enrichment.</h3>
            <p className="text-neutral-600 text-sm">
              Maintain clean data and auto-enrich your document using our AI
              engine.
            </p>
          </div>
        </div>

        {/* Card 5: AI-native apps */}
        <div className="lg:col-span-1 bg-white h-full flex flex-col justify-end rounded-2xl p-2 shadow-sm">
          <Image
            width={512}
            height={512}
            src="https://img.icons8.com/nolan/512/E090F0/05BDF5/cursor-ai.png"
            alt="chatgpt"
            className="rounded-xl object-contain  xs:w-1/2 flex justify-between mx-auto p-15 opacity-50 md:w-full flex-1"
          />
          <div className="flex flex-col w-full justify-center text-center mt-4 mb-2 -space-y-1">
            <h3 className="font-semibold text-black">AI-native apps</h3>
            <p className="text-neutral-600 text-sm">
              Invoke your AI employees within documents to help you do work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernBento;

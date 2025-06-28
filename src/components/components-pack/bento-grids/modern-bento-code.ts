export const modernBentoCode = `
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
        <div className="lg:col-span-2 md:col-span-2 bg-white h-full flex flex-col justify-end dark:bg-neutral-900 rounded-2xl p-2 shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1748609523112-da78cb7210a2?q=80&w=3100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Feature placeholder"
            width={800}
            height={400}
            className="rounded-xl object-cover w-full flex-1"
          />
          <div className="flex flex-col w-full justify-center text-center mt-4 mb-2 -space-y-1">
            <h3 className="font-semibold text-black dark:text-white ">
              Note, Task, Whiteboard & more.
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Manage your business end-to-end in our set of free native apps.
            </p>
          </div>
        </div>

        {/* Card 2: Speed */}
        <div className="bg-white h-full flex flex-col justify-end dark:bg-neutral-900 rounded-2xl p-2 shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Speed placeholder"
            width={400}
            height={200}
            className="rounded-xl object-cover w-full flex-1"
          />
          <div className="flex flex-col w-full justify-center text-center mt-4 mb-2 -space-y-1">
            <h3 className="font-semibold text-black dark:text-white">
              Built for speed.
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Switch between apps in one stroke of a key. T you're in Task, N
              you're in Note.
            </p>
          </div>
        </div>

        {/* Card 3: Views */}
        <div className="bg-white h-full flex flex-col justify-end dark:bg-neutral-900 rounded-2xl p-2 shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Views placeholder"
            width={400}
            height={200}
            className="rounded-xl object-cover w-full flex-1"
          />
          <div className="flex flex-col w-full justify-center text-center mt-4 mb-2 -space-y-1">
            <h3 className="font-semibold text-black dark:text-white">
              Switch between views
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Table view, Kanban View, Tile View. We got you covered.
            </p>
          </div>
        </div>

        {/* Card 4: Auto-enrichment */}
        <div className="lg:col-span-1 bg-white h-full flex flex-col justify-end dark:bg-neutral-900 rounded-2xl p-2 shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Auto-enrichment placeholder"
            width={400}
            height={200}
            className="rounded-xl object-cover w-full flex-1"
          />
          <div className="flex flex-col w-full justify-center text-center mt-4 mb-2 -space-y-1">
            <h3 className="font-semibold text-black dark:text-white">
              Auto-enrichment.
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Maintain clean data and auto-enrich your document using our AI
              engine.
            </p>
          </div>
        </div>

        {/* Card 5: AI-native apps */}
        <div className="lg:col-span-1 bg-white h-full flex flex-col justify-end dark:bg-neutral-900 rounded-2xl p-2 shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1721314787850-5745fdfb06b4?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="AI-native placeholder"
            width={400}
            height={200}
            className="rounded-xl object-cover w-full flex-1"
          />
          <div className="flex flex-col w-full justify-center text-center mt-4 mb-2 -space-y-1">
            <h3 className="font-semibold text-black dark:text-white">
              AI-native apps
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Invoke your AI employees within documents to help you do work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernBento;
`;
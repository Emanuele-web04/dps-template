import React from "react";
import Image from "next/image";
import Plus from "../ui/main-hero/plus";
import ContactCTAButton from "../components-pack/buttons/contact-cta-button";

const MoreComingPlaceholder = () => {
  return (
    <div className="flex scroll-mt-[100px] flex-col gap-y-1 md:gap-y-2">
      <h3 className="h3-title">More Components Coming Soon</h3>
      <p className="p-style mt-0!">
        We're constantly adding new components to help you build faster.
      </p>

      <div className="flex flex-col gap-y-4 mt-2">
        <div className="relative font-inter tracking-tight w-full bg-neutral-100/50 dark:bg-neutral-950 border border-dashed border-neutral-200 dark:border-neutral-700">
          <Plus />

          {/* Minimal grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.sky.200)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.sky.200)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,theme(colors.sky.900)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.sky.900)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>

          <div className="relative flex flex-col items-center justify-center py-8 px-6">
            <div className="text-center space-y-4 max-w-xs">
              <div className="space-y-2">
                <h1 className="text-xl font-semibold text-neutral-900 dark:text-white">
                  More coming soon! 🚀
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Have a specific component in mind? I'd love to build it for
                  you.
                </p>
              </div>

              <ContactCTAButton className="px-4! py-2!" href="mailto:emandipietro@gmail.com?subject=Custom Component Request">
                Request a component &rarr;
              </ContactCTAButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreComingPlaceholder;

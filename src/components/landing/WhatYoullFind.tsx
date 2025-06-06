import React from "react";
import NextIcon from "../ui/next-icon";
import { componentPacks, nextjsFeatures } from "@/lib/features";
import ComponentsPack from "../ui/nextjs-templates/components-pack";
import LandingTemplates from "../ui/nextjs-templates/landing-templates";
import UiLibrary from "../ui/nextjs-templates/ui-library";
import SystemPages from "../ui/nextjs-templates/system-pages";
import IconTitleTemplates from "../ui/icon-title-templates";
import SwiftIcon from "../ui/swift-icon";
import SwiftUIBoilerplate from "../ui/swiftui-templates/swiftui-boilerplate";
import SwiftUIKit from "../ui/swiftui-templates/swiftui-kit";
import SwiftUIComponents from "../ui/swiftui-templates/swiftui-components";
import SwiftUIViews from "../ui/swiftui-templates/swiftui-views";

const WhatYoullFind = () => {
  return (
    <div className="section-container fade-in-up">
      <div className="text-section">
        <h1 className="title">What You'll Find</h1>
        <p className="p-section">
          Production-ready templates and components to accelerate your
          development workflow for your apps and saas
        </p>
      </div>
      <IconTitleTemplates icon={<NextIcon />} text="Next.js Templates" />
      <div className="bento-grid mb-7 max-w-4xl">
        <ComponentsPack />
        <div className="flex flex-col col-span-12 md:col-span-7 gap-4">
          <LandingTemplates />
          <UiLibrary />
          <SystemPages />
        </div>
      </div>
      <IconTitleTemplates icon={<SwiftIcon />} text="SwiftUI Templates" />
      <div className="bento-grid max-w-4xl">
        {/* Full width top card */}
        <div className="col-span-12 order-2 md:order-1">
          <SwiftUIKit />
        </div>

        {/* Right column - 2 stacked cards (appears second on mobile) */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-4 order-3 md:order-2">
          <SwiftUIComponents />
          <SwiftUIViews />
        </div>

        {/* Left card - smaller (appears first on mobile) */}
        <div className="col-span-12 md:col-span-5 order-1 md:order-4">
          <SwiftUIBoilerplate />
        </div>
      </div>
    </div>
  );
};

export default WhatYoullFind;

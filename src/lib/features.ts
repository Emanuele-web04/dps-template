import { LuLayoutGrid, LuZap, LuSparkles, LuCalendar, LuRocket, LuPackage } from "react-icons/lu";
import { TbLayoutBoard, TbDeviceDesktopExclamation } from "react-icons/tb";
import { Feature } from "@/types/feature";
import {
    LuImage,
    LuCreditCard,
    LuMessageCircle,
    LuFileText,
  } from "react-icons/lu";
  import { GrAppleAppStore } from "react-icons/gr";

export const swiftUIBoilerplate: Feature = {
  icon: [LuZap, GrAppleAppStore],
  title: "SwiftUI Boilerplate",
  description: "Modern views, animations, SwiftData CRUD operations",
};

export const uiComponents: Feature = {
  icon: [TbLayoutBoard],
  title: "UI Components",
  description: "Modal sheets, transitions, onboarding carousels",
};

export const glassmorphismKit: Feature = {
  icon: [LuSparkles],
  title: "Glassmorphism Kit",
  description: "Cards, toggles, tab bars, buttons with modern styling",
};

export const advancedViews: Feature = {
  icon: [LuCalendar],
  title: "Advanced Views",
  description: "Calendar views, progress rings, rating components",
};

// (Se ti serve l’array completo, puoi ricomporlo così)
export const iosFeatures: Feature[] = [
  swiftUIBoilerplate,
  uiComponents,
  glassmorphismKit,
  advancedViews,
];

// Next.js Features: un blocco per ciascuna

export const componentPacks: Feature = {
    icon: [
      LuPackage,       // Pacchetti di componenti
      LuImage,         // Sezioni hero (immagini/banner)
      LuCreditCard,    // Card prezzi
      LuMessageCircle, // Testimonianze
      LuFileText,      // Form
    ],
    title: "Component Packs",
    description: "Hero sections, pricing cards, testimonials, forms",
  };

export const landingTemplates: Feature = {
  icon: [LuRocket],
  title: "Landing Templates",
  description: "AI tools, mobile apps, portfolios",
};

export const uiLibrary: Feature = {
  icon: [LuLayoutGrid],
  title: "UI Library",
  description: "Buttons, toggles, inputs, dropdowns",
};

export const systemPages: Feature = {
  icon: [TbDeviceDesktopExclamation],
  title: "System Pages",
  description: "Waitlist, unsubscribe, not-found, error pages",
};

// (Se ti serve l’array completo, puoi ricomporlo così)
export const nextjsFeatures: Feature[] = [
  componentPacks,
  landingTemplates,
  uiLibrary,
  systemPages,
];

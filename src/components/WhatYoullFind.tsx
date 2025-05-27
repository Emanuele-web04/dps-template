import { DiSwift } from "react-icons/di";
import { RiNextjsLine } from "react-icons/ri";
import { LuBadgeAlert, LuLayoutGrid, LuZap } from "react-icons/lu";
import { LuSparkles } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";
import { TbLayoutBoard } from "react-icons/tb";
import { LuRocket } from "react-icons/lu";
import { LuBuilding2 } from "react-icons/lu";
import { LuPackage } from "react-icons/lu";
import { TbDeviceDesktopExclamation } from "react-icons/tb";

const TemplatesShowcase = () => {
  const iosFeatures = [
    {
      icon: <LuZap className="w-5 h-5" />,
      title: "SwiftUI Boilerplate",
      description: "Modern views, animations, SwiftData CRUD operations",
    },
    {
      icon: <TbLayoutBoard className="w-5 h-5" />,
      title: "UI Components",
      description: "Modal sheets, transitions, onboarding carousels",
    },
    {
      icon: <LuSparkles className="w-5 h-5" />,
      title: "Glassmorphism Kit",
      description: "Cards, toggles, tab bars, buttons with modern styling",
    },
    {
      icon: <LuCalendar className="w-5 h-5" />,
      title: "Advanced Views",
      description: "Calendar views, progress rings, rating components",
    },
  ];

  const nextjsFeatures = [
    {
      icon: <LuPackage className="w-5 h-5" />,
      title: "Component Packs",
      description: "Hero sections, pricing cards, testimonials, forms",
    },
    {
      icon: <LuRocket className="w-5 h-5" />,
      title: "Landing Templates",
      description: "AI tools, mobile apps, portfolios",
    },
    {
      icon: <LuLayoutGrid className="w-5 h-5" />,
      title: "UI Library",
      description: "Buttons, toggles, inputs, dropdowns",
    },

    {
      icon: <TbDeviceDesktopExclamation className="w-5 h-5" />,
      title: "System Pages",
      description: "Waitlist, unsubscribe, not-found, error pages",
    },
  ];

  return (
    <div className="z-1 container min-h-screen flex-col flex justify-center items-center w-full px-4 py-16"  id="templates">
      <div className="text-center flex flex-col gap-2 mb-7">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight ">
          <span className="black-gradient font-sans bg-clip-text text-transparent">
            What You'll Get
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Production-ready templates and components to accelerate your
          development workflow
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* iOS/SwiftUI Section */}
        <div className="space-y-6">
          <div className="flex items-center w-full justify-center gap-3 mb-6">
            <div className="icon-text flex-col items-center!">
              <DiSwift className="px-0.5 bg-gradient-to-b from-orange-400 ring-orange-300 to-orange-600 icon" />
              <h3 className="text-xl font-semibold font-sans tracking-tight">
                iOS Templates
              </h3>
            </div>
          </div>

          <div className="space-y-4">
            {iosFeatures.map((feature, index) => (
              <div
                key={index}
                className="group p-4 rounded-2xl ring-1 ring-gray-200 hover:ring-orange-300 transition-all duration-200 hover:shadow-sm bg-white/30 backdrop-blur-xl"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-orange-50 text-orange-600 group-hover:bg-orange-100 transition-colors">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold tracking-tight font-inter text-gray-900 ">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-inter tracking-tight leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next.js Section */}
        <div className="space-y-6">
          <div className="flex flex-col justify-center w-full items-center gap-3 mb-6">
            <div className="icon-text flex-col items-center!">
              <RiNextjsLine className="px-1.5 bg-gradient-to-b from-neutral-600 ring-neutral-400 to-neutral-900 icon" />
              <h3 className="text-xl font-semibold font-sans tracking-tight">
                Next.js Templates
              </h3>
            </div>
          </div>

          <div className="space-y-4">
            {nextjsFeatures.map((feature, index) => (
              <div
                key={index}
                className="group p-4 rounded-2xl ring-1 ring-gray-200 hover:ring-neutral-400 transition-all duration-200 hover:shadow-sm bg-white/30 backdrop-blur-xl"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-neutral-50 text-neutral-700 group-hover:bg-neutral-100 transition-colors">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold tracking-tight font-inter text-gray-900 ">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 tracking-tight font-inter leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatesShowcase;

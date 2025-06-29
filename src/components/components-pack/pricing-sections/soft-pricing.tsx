"use client";

import type React from "react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { FaAward, FaPlus } from "react-icons/fa6";
import { cn } from "@/lib/cn";

interface PricingPlan {
  id: string;
  title: string;
  icon: React.ReactNode;
  theme: "dark" | "light";
  price: string;
  priceLabel: string;
  idealFor: string;
  features: Array<{
    text: string;
    highlighted?: boolean;
  }>;
  primaryButton: string;
  headerDescription?: string;
  secondaryButton?: string;
  topToggle?: {
    label: string;
    enabled: boolean;
  };
  bottomToggle?: {
    label: string;
    enabled: boolean;
  };
}

const pricingPlans: PricingPlan[] = [
  {
    id: "retainer",
    title: "Retainer",
    icon: <FaAward className="w-6 h-6" />,
    theme: "dark",
    price: "$5199",
    priceLabel: "per month",
    idealFor: "Ideal for those who need an ongoing quick design support.",
    features: [
      { text: "1 Active request at a time" },
      { text: "2X Senior designer" },
      { text: "Bi-weekly progress meetings" },
      { text: "Fast turnaround" },
      { text: "Unlimited design requests" },
      { text: "Up to 100 hours of design work each month" },
      { text: "Expert project management" },
      { text: "Communication through Async, Slack, Loom & Meetings" },
      { text: "Free Website Development with Framer", highlighted: true },
    ],
    primaryButton: "Get Started Today",
    secondaryButton: "or Book a Call",
    topToggle: {
      label: "Make It Faster",
      enabled: true,
    },
  },
  {
    id: "landing-page",
    title: "Landing Page Design",
    headerDescription:
      "Bring your dream website to life in just days, not months. (upto 2 pages)",
    idealFor:
      "Ideal for a single, high-impact landing page designed to maximize conversions.",
    icon: <FiGlobe className="w-6 h-6" />,
    theme: "light",
    price: "$2149",
    priceLabel: "one time",
    features: [
      { text: "Wireframes" },
      { text: "Custom Layout" },
      { text: "Desktop, Tablet, Mobile Responsive Design" },
      { text: "Brand Consistency" },
      { text: "Figma File" },
      { text: "Updates every 48 hours" },
      { text: "2X Revision" },
      { text: "+$400 For Each Extra Page" },
    ],
    primaryButton: "Book a Call",
    bottomToggle: {
      label: "Website development (Framer) +$2k",
      enabled: false,
    },
  },
];

const ToggleSwitch = ({
  label,
  enabled,
  onToggle,
  theme = "light",
}: {
  label: string;
  enabled: boolean;
  onToggle?: (enabled: boolean) => void;
  theme?: "dark" | "light";
}) => {
  const isDark = theme === "dark";
  return (
    <div className="flex items-center gap-2">
      <span
        className={`text-xs font-medium ${isDark ? "text-neutral-400" : "text-neutral-500"}`}
      >
        {label}
      </span>
      <button
        onClick={() => onToggle?.(!enabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isDark ? "bg-neutral-700" : "bg-neutral-200"}`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enabled ? "translate-x-6" : "translate-x-1"}`}
        />
      </button>
    </div>
  );
};

const Button = ({
  children,
  onClick,
  theme = "light",
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  theme?: "dark" | "light";
  className?: string;
}) => {
  const isDark = theme === "dark";
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 font-semibold transition-all duration-200 rounded-full hover:scale-105 active:scale-95 ${className} ${
        isDark ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      {children}
    </button>
  );
};

const FeatureItem = ({
  text,
  highlighted = false,
  theme = "light",
}: {
  text: string;
  highlighted?: boolean;
  theme?: "dark" | "light";
}) => {
  const isDark = theme === "dark";
  const checkColor = isDark ? "#A3A3A3" : "#A3A3A3";
  const textColor = isDark ? "white" : "black";
  const highlightedColor = "#2DD4BF";

  return (
    <div className="flex items-center pb-2 gap-3">
      <div className="flex-shrink-0">
        {highlighted ? (
          <div className="w-5 h-5 rounded-full flex items-center justify-center bg-teal-400/20">
            <FaPlus className="w-3 h-3 text-teal-400" />
          </div>
        ) : (
          <FaCheck className="w-4 h-4" style={{ color: checkColor }} />
        )}
      </div>
      <span
        className="text-sm"
        style={{ color: highlighted ? highlightedColor : textColor }}
      >
        {text}
      </span>
    </div>
  );
};

const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  const [topToggleEnabled, setTopToggleEnabled] = useState(
    plan.topToggle?.enabled || false
  );
  const [bottomToggleEnabled, setBottomToggleEnabled] = useState(
    plan.bottomToggle?.enabled || false
  );

  const isDark = plan.theme === "dark";

  const cardStyles = {
    background: isDark ? "#1C1C1E" : "#FFFFFF",
    border: isDark ? "1px solid #2C2C2E" : "1px solid #E5E7EB",
    borderRadius: "24px",
    boxShadow: isDark
      ? "0 20px 40px -10px rgba(0, 0, 0, 0.3)"
      : "0 20px 40px -10px rgba(0, 0, 0, 0.08)",
  };

  return (
    <div
      className="flex flex-col font-sans h-full w-full p-2 transition-all duration-300"
      style={cardStyles}
    >
      <div className={cn("flex flex-col p-4 rounded-2xl ring-1 ", isDark ? "bg-neutral-800 ring-neutral-700" : "bg-neutral-100 ring-neutral-200")}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col items-start gap-4">
            <div className={`text-3xl ${isDark ? "text-white" : "text-black"}`}>
              {plan.icon}
            </div>
            <h3
              className={`text-2xl font-bold ${isDark ? "text-white" : "text-black"}`}
            >
              {plan.title}
            </h3>
          </div>
          {plan.topToggle && (
            <ToggleSwitch
              label={plan.topToggle.label}
              enabled={topToggleEnabled}
              onToggle={setTopToggleEnabled}
              theme={plan.theme}
            />
          )}
        </div>

        {plan.headerDescription && (
          <p className="text-neutral-500 text-sm mb-4">
            {plan.headerDescription}
          </p>
        )}

        <div
          className={`p-3 rounded-2xl text-sm mb-6 ${isDark ? "bg-neutral-700 text-neutral-300" : "bg-neutral-200 text-neutral-600"}`}
        >
          {plan.idealFor}
        </div>

        <div className={cn("space-y-3 divide-y", isDark ? "divide-neutral-700" : "divide-neutral-200")}>
          {plan.features.map((feature, index) => (
            <FeatureItem
              key={index}
              text={feature.text}
              highlighted={feature.highlighted}
              theme={plan.theme}
            />
          ))}
        </div>

      </div>
        <div className="flex-grow"></div>
      {plan.bottomToggle && (
        <div className="mt-6 px-4">
          <ToggleSwitch
            label={plan.bottomToggle.label}
            enabled={bottomToggleEnabled}
            onToggle={setBottomToggleEnabled}
            theme={plan.theme}
          />
        </div>
      )}

      <div className="mt-4 p-4">
        <div className="flex items-end justify-between">
          <div className="text-left">
            <p
              className={`text-3xl font-bold ${isDark ? "text-white" : "text-black"}`}
            >
              {plan.price}
              <span
                className={`text-sm font-normal ml-1 ${isDark ? "text-neutral-400" : "text-neutral-500"}`}
              >
                {plan.priceLabel}
              </span>
            </p>
          </div>
          <div className="text-right flex flex-col items-center">
            <Button theme={plan.theme}>{plan.primaryButton}</Button>
            {plan.secondaryButton && (
              <button
                className={`mt-2 text-sm ${isDark ? "text-neutral-500" : "text-neutral-400"} hover:underline`}
              >
                {plan.secondaryButton}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const SoftPricingSection = () => {
  return (
    <section className="min-h-screen font-sans w-full bg-neutral-100 py-16 lg:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-800 mb-4">
            Flexible Plans for Your Needs
          </h1>
          <p className="text-base text-neutral-600 max-w-2xl mx-auto">
            Choose the perfect plan to kickstart your project. We offer both
            retainer-based support and one-time project pricing.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="flex">
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftPricingSection;

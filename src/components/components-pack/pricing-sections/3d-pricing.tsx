"use client";

import type React from "react";
import { FaRocket, FaBolt, FaBuilding, FaCheck } from "react-icons/fa";

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  icon: React.ReactNode;
  recommended?: boolean;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description:
      "Perfect for solopreneurs and small businesses just starting out",
    monthlyPrice: 190,
    icon: <FaRocket className="w-6 h-6" />,
    features: [
      "Up to 500 contacts",
      "Email marketing",
      "Basic reporting",
      "Mobile app access",
      "Email support",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    description:
      "Perfect for solopreneurs and small businesses just starting out",
    monthlyPrice: 49,
    icon: <FaBolt className="w-6 h-6" />,
    recommended: true,
    features: [
      "Up to 5,000 contacts",
      "Advanced automation",
      "Custom workflows",
      "Phone & chat support",
      "Integrations",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description:
      "Perfect for solopreneurs and small businesses just starting out",
    monthlyPrice: 99,
    icon: <FaBuilding className="w-6 h-6" />,
    features: [
      "Unlimited contacts",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Custom fields",
    ],
  },
];

// Custom Button Component
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
}

const Button = ({
  children,
  onClick,
  className = "",
  variant = "primary",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full px-6 py-3 rounded-lg font-medium transition-all duration-200 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900
        border border-neutral-600 text-neutral-300 hover:text-white
        transform hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-br from-neutral-900 to-neutral-800
        ${className}
      `}
      style={{
        boxShadow: `
          inset 0 1px 2px rgba(255, 255, 255, 0.1),
          inset 0 -1px 2px rgba(0, 0, 0, 0.3),
          0 4px 8px rgba(0, 0, 0, 0.3),
          0 2px 4px rgba(0, 0, 0, 0.2)
        `,
      }}
    >
      {children}
    </button>
  );
};

// Badge Component
const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-neutral-300 border border-neutral-600 bg-gradient-to-br from-neutral-900 to-neutral-800"
      style={{
        boxShadow: `
          inset 0 1px 2px rgba(255, 255, 255, 0.1),
          inset 0 -1px 2px rgba(0, 0, 0, 0.3),
          0 2px 4px rgba(0, 0, 0, 0.2)
        `,
      }}
    >
      {children}
    </div>
  );
};

// Recommended Badge Component
const RecommendedBadge = () => {
  return (
    <div className="absolute -top-3 z-30 left-1/2 transform -translate-x-1/2">
      <div
        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-neutral-200 border border-neutral-500 bg-gradient-to-br from-neutral-900 to-neutral-800"
        style={{
          boxShadow: `
            inset 0 1px 2px rgba(255, 255, 255, 0.15),
            inset 0 -1px 2px rgba(0, 0, 0, 0.3),
            0 4px 8px rgba(0, 0, 0, 0.4),
            0 2px 4px rgba(0, 0, 0, 0.3)
          `,
        }}
      >
        Recommended
      </div>
    </div>
  );
};

// Feature Item Component
const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 mb-3">
    <FaCheck className="w-4 h-4 text-neutral-200 flex-shrink-0" />
    <span className="text-sm text-neutral-300">{text}</span>
  </div>
);

// Pricing Card Component
const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  const price = plan.monthlyPrice;

  return (
    <div className="relative w-full">
      {plan.recommended && <RecommendedBadge />}
      <div
        className={`
          relative h-full rounded-2xl p-8 transition-all duration-300
          border border-neutral-700 hover:border-neutral-600
          transform hover:scale-[1.02] hover:-translate-y-1 bg-gradient-to-br from-neutral-800 to-neutral-900
          ${plan.recommended ? "ring-1 ring-neutral-600" : ""}
        `}
        style={{
          boxShadow: `
            inset 0 2px 4px rgba(255, 255, 255, 0.1),
            inset 0 -2px 4px rgba(0, 0, 0, 0.3),
            inset 1px 0 2px rgba(255, 255, 255, 0.05),
            inset -1px 0 2px rgba(0, 0, 0, 0.2),
            0 20px 25px -5px rgba(0, 0, 0, 0.4),
            0 10px 10px -5px rgba(0, 0, 0, 0.3),
            0 4px 6px -1px rgba(0, 0, 0, 0.2)
          `,
        }}
      >
        {/* Icon */}
        <div className="mb-6">
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-neutral-600 bg-gradient-to-br from-neutral-700 to-neutral-800"
            style={{
              boxShadow: `
                inset 0 2px 4px rgba(0, 0, 0, 0.3), 
                inset 0 -2px 4px rgba(255, 255, 255, 0.1),
                0 2px 4px rgba(0, 0, 0, 0.2)
              `,
            }}
          >
            <div className="text-neutral-300">{plan.icon}</div>
          </div>
        </div>

        {/* Plan Name and Description */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-3">{plan.name}</h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            {plan.description}
          </p>
        </div>

        {/* Pricing */}
        <div className="mb-8">
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-4xl font-bold text-white">${price}</span>
            <span className="text-sm text-neutral-400">/Per Month</span>
          </div>
        </div>

        {/* Features */}
        <div className="mb-8">
          <h4 className="text-sm font-semibold text-neutral-300 mb-4">
            This Plan includes
          </h4>
          <div className="space-y-1">
            {plan.features.map((feature, index) => (
              <FeatureItem key={index} text={feature} />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-auto">
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

// Main CRM Pricing Section Component
export default function CRMPricingSection() {
  return (
    <section className="min-h-screen bg-neutral-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <Badge>Pricing</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Grow Your Business With Our CRM
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your needs and watch your business
            flourish
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="flex">
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

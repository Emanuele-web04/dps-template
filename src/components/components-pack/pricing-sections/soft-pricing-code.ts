export const softPricingCode = `
"use client"

import type React from "react"

import { useState } from "react"
import { FaLightbulb, FaGlobe, FaCheck, FaPlus } from "react-icons/fa"

interface PricingPlan {
  id: string
  title: string
  subtitle: string
  description?: string
  icon: React.ReactNode
  features: Array<{
    text: string
    highlighted?: boolean
  }>
  price: string
  priceLabel: string
  primaryButton: string
  secondaryButton?: string
  toggle?: {
    label: string
    enabled: boolean
  }
  theme: "dark" | "light"
}

const pricingPlans: PricingPlan[] = [
  {
    id: "retainer",
    title: "Retainer",
    subtitle: "Ideal for those who need an ongoing quick design support.",
    icon: <FaLightbulb className="w-6 h-6" />,
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
    price: "$5199",
    priceLabel: "per month",
    primaryButton: "Get Started Today",
    secondaryButton: "or Book a Call",
    toggle: {
      label: "Make It Faster",
      enabled: true,
    },
    theme: "dark",
  },
  {
    id: "landing-page",
    title: "Landing Page Design",
    subtitle: "Bring your dream website to life in just days, not months. (upto 2 pages)",
    description: "Ideal for a single, high-impact landing page designed to maximize conversions.",
    icon: <FaGlobe className="w-6 h-6" />,
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
    price: "$2149",
    priceLabel: "one time",
    primaryButton: "Book a Call",
    toggle: {
      label: "Website development (Framer) +2x",
      enabled: false,
    },
    theme: "light",
  },
]

// Custom Toggle Switch Component
const ToggleSwitch = ({
  label,
  enabled,
  onToggle,
  theme = "light",
}: {
  label: string
  enabled: boolean
  onToggle?: (enabled: boolean) => void
  theme?: "dark" | "light"
}) => {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm font-medium" style={{ color: theme === "dark" ? "#ffffff" : "#374151" }}>
        {label}
      </span>
      <button
        onClick={() => onToggle?.(!enabled)}
        className="relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        style={{
          backgroundColor: enabled ? "#10b981" : theme === "dark" ? "#4b5563" : "#d1d5db",
          boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <span
          className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm"
          style={{
            transform: enabled ? "translateX(24px)" : "translateX(4px)",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
          }}
        />
      </button>
    </div>
  )
}

// Custom Button Component
const Button = ({ 
  children, 
  onClick, 
  variant = "primary", 
  theme = "light", 
  className = "" 
}: {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary"
  theme?: "dark" | "light"
  className?: string
}) => {
  const getButtonStyles = () => {
    if (theme === "dark") {
      return variant === "primary"
        ? {
            background: "linear-gradient(145deg, #ffffff, #f3f4f6)",
            color: "#1f2937",
            boxShadow: \`
              0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06),
              inset 0 1px 0 rgba(255, 255, 255, 0.2)
            \`,
          }
        : {
            background: "transparent",
            color: "#d1d5db",
          }
    } else {
      return variant === "primary"
        ? {
            background: "linear-gradient(145deg, #1f2937, #111827)",
            color: "#ffffff",
            boxShadow: \`
              0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06),
              inset 0 1px 0 rgba(255, 255, 255, 0.1)
            \`,
          }
        : {
            background: "transparent",
            color: "#6b7280",
          }
    }
  }

  const styles = getButtonStyles()

  return (
    <button
      onClick={onClick}
      className={\`px-6 py-3 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:scale-105 active:scale-95 \${className}\`}
      style={{
        ...styles,
        borderRadius: "9999px",
        boxShadow: variant === "primary" ? styles.boxShadow : "none",
      }}
    >
      {children}
    </button>
  )
}

// Feature Item Component
const FeatureItem = ({ 
  text, 
  highlighted = false, 
  theme = "light" 
}: {
  text: string
  highlighted?: boolean
  theme?: "dark" | "light"
}) => {
  const checkColor = highlighted ? "#10b981" : theme === "dark" ? "#ffffff" : "#9ca3af"
  const textColor = highlighted ? "#10b981" : theme === "dark" ? "#ffffff" : "#4b5563"

  return (
    <div className="flex items-start gap-3 mb-3">
      <div className="flex-shrink-0 mt-0.5">
        {highlighted ? (
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(145deg, #10b981, #059669)",
              boxShadow: "0 2px 4px rgba(16, 185, 129, 0.3)",
            }}
          >
            <FaPlus className="w-3 h-3 text-white" />
          </div>
        ) : (
          <FaCheck className="w-4 h-4" style={{ color: checkColor }} />
        )}
      </div>
      <span className="text-sm leading-relaxed" style={{ color: textColor }}>
        {text}
      </span>
    </div>
  )
}

// Pricing Card Component
const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  const [toggleEnabled, setToggleEnabled] = useState(plan.toggle?.enabled || false)

  const cardStyles = {
    background:
      plan.theme === "dark"
        ? "linear-gradient(145deg, #1f2937, #111827)"
        : "linear-gradient(145deg, #ffffff, #f8fafc)",
    boxShadow:
      plan.theme === "dark"
        ? \`
          0 25px 50px -12px rgba(0, 0, 0, 0.4),
          0 10px 20px -5px rgba(0, 0, 0, 0.3),
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        \`
        : \`
          0 25px 50px -12px rgba(0, 0, 0, 0.15),
          0 10px 20px -5px rgba(0, 0, 0, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.8)
        \`,
    borderRadius: "24px",
  }

  return (
    <div
      className="relative p-8 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2"
      style={cardStyles}
    >
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div
            className="w-12 h-12 flex items-center justify-center"
            style={{
              background:
                plan.theme === "dark"
                  ? "linear-gradient(145deg, #374151, #1f2937)"
                  : "linear-gradient(145deg, #f3f4f6, #e5e7eb)",
              boxShadow:
                plan.theme === "dark"
                  ? "inset 0 2px 4px rgba(0, 0, 0, 0.3), inset 0 -2px 4px rgba(255, 255, 255, 0.1)"
                  : "inset 0 2px 4px rgba(0, 0, 0, 0.1), inset 0 -2px 4px rgba(255, 255, 255, 0.8)",
              borderRadius: "16px",
            }}
          >
            <div style={{ color: plan.theme === "dark" ? "#ffffff" : "#4b5563" }}>{plan.icon}</div>
          </div>
          {plan.toggle && (
            <ToggleSwitch
              label={plan.toggle.label}
              enabled={toggleEnabled}
              onToggle={setToggleEnabled}
              theme={plan.theme}
            />
          )}
        </div>

        <h3
          className="text-2xl font-bold mb-3"
          style={{ color: plan.theme === "dark" ? "#ffffff" : "#1f2937" }}
        >
          {plan.title}
        </h3>

        <div
          className="text-sm p-4 mb-4"
          style={{
            background:
              plan.theme === "dark"
                ? "linear-gradient(145deg, #374151, #1f2937)"
                : "linear-gradient(145deg, #f8fafc, #f1f5f9)",
            boxShadow:
              plan.theme === "dark"
                ? "inset 0 2px 4px rgba(0, 0, 0, 0.2)"
                : "inset 0 2px 4px rgba(0, 0, 0, 0.05)",
            color: plan.theme === "dark" ? "#d1d5db" : "#6b7280",
            borderRadius: "16px",
          }}
        >
          {plan.subtitle}
        </div>

        {plan.description && (
          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: plan.theme === "dark" ? "#9ca3af" : "#6b7280" }}
          >
            {plan.description}
          </p>
        )}
      </div>

      {/* Features */}
      <div className="mb-8">
        {plan.features.map((feature, index) => (
          <FeatureItem key={index} text={feature.text} highlighted={feature.highlighted} theme={plan.theme} />
        ))}
      </div>

      {/* Bottom section with toggle if exists */}
      {plan.id === "landing-page" && plan.toggle && (
        <div className="mb-6">
          <ToggleSwitch
            label={plan.toggle.label}
            enabled={toggleEnabled}
            onToggle={setToggleEnabled}
            theme={plan.theme}
          />
        </div>
      )}

      {/* Pricing and CTA */}
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-baseline gap-1 mb-2">
            <span
              className="text-3xl font-bold"
              style={{ color: plan.theme === "dark" ? "#ffffff" : "#1f2937" }}
            >
              {plan.price}
            </span>
            <span
              className="text-sm"
              style={{ color: plan.theme === "dark" ? "#9ca3af" : "#6b7280" }}
            >
              {plan.priceLabel}
            </span>
          </div>
          {plan.secondaryButton && (
            <button
              className="text-sm underline hover:no-underline transition-all"
              style={{ color: plan.theme === "dark" ? "#9ca3af" : "#6b7280" }}
            >
              {plan.secondaryButton}
            </button>
          )}
        </div>
        <Button variant="primary" theme={plan.theme}>
          {plan.primaryButton}
        </Button>
      </div>
    </div>
  )
}

// Main Soft Pricing Section Component
const SoftPricingSection = () => {
  return (
    <section className="min-h-screen py-16 px-4" style={{ background: "#f1f5f9" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="flex">
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoftPricingSection
`; 
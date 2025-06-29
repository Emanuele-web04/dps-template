export const minimalPricingCode = `
"use client"

import type React from "react"

import { FaCheck, FaShoppingCart, FaShieldAlt } from "react-icons/fa"
import { HiBadgeCheck } from "react-icons/hi"

interface PricingPlan {
  id: string
  name: string
  subtitle: string
  currentPrice: string
  originalPrice: string
  featured?: boolean
  specifications: {
    processor: string
    graphics: string
    memory: string
    storage: string
  }
  includes: string[]
  idealFor: string
}

const pricingPlans: PricingPlan[] = [
  {
    id: "lite",
    name: "Lite Plan",
    subtitle: "Starter trading computer",
    currentPrice: "$2,120.10",
    originalPrice: "$2,998.64",
    specifications: {
      processor: "AMD Ryzen 2600X (4 cores)",
      graphics: "NVIDIA GeForce RTX 2070",
      memory: "32GB (2 x 16GB) DDR4 3200MHz",
      storage: "500Gb NVMe M.2 SS",
    },
    includes: [
      "Up to 2 monitors supported",
      "Enhanced Cybersecurity for traders",
      "Tradecopier compatible",
      "Optimized for backtesting strategies",
    ],
    idealFor: "Perfect for entry-level traders",
  },
  {
    id: "ultra-intermediate",
    name: "Ultra Plan",
    subtitle: "Intermediate trading computer",
    currentPrice: "$4,798.54",
    originalPrice: "$6,998.64",
    featured: true,
    specifications: {
      processor: "AMD Ryzen 5600X (8 cores)",
      graphics: "NVIDIA GeForce RTX 3070 Ti SUPER",
      memory: "64GB (2 x 32) DDR5 4200MHz",
      storage: "1TB NVMe M.2 SS",
    },
    includes: [
      "Up to 2 monitors supported",
      "Enhanced Cybersecurity for traders",
      "Tradecopier compatible",
      "Optimized for backtesting strategies",
    ],
    idealFor: "Perfect for intermediate traders",
  },
  {
    id: "ultra-advanced",
    name: "Ultra Plan",
    subtitle: "Starter trading computer",
    currentPrice: "$6,590.54",
    originalPrice: "$8,998.64",
    specifications: {
      processor: "AMD Ryzen 5600X (8 cores)",
      graphics: "NVIDIA GeForce RTX 3070 Ti SUPER",
      memory: "256GB (2 x 128GB) DDR6 5200MHz",
      storage: "1TB NVMe M.2 SS",
    },
    includes: [
      "Up to 2 monitors supported",
      "Enhanced Cybersecurity for traders",
      "Tradecopier compatible",
      "Optimized for backtesting strategies",
    ],
    idealFor: "Perfect for entry-level traders",
  },
]

// Custom Button Component
interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary"
  className?: string
  disabled?: boolean
}

const Button = ({ children, onClick, variant = "primary", className = "", disabled = false }: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

  const variantStyles = {
    primary: "bg-neutral-900 text-white hover:bg-neutral-800 focus:ring-neutral-500",
    secondary: "bg-white text-neutral-900 hover:bg-neutral-100 focus:ring-neutral-300 border border-neutral-200",
  }

  return (
    <button onClick={onClick} disabled={disabled} className={\`\${baseStyles} \${variantStyles[variant]} \${className}\`}>
      {children}
    </button>
  )
}

// Custom Card Component
interface CardProps {
  children: React.ReactNode
  className?: string
  featured?: boolean
}

const Card = ({ children, className = "", featured = false }: CardProps) => {
  const baseStyles = "rounded-2xl w-full shadow-lg transition-all duration-300 h-full"
  const featuredStyles = featured ? "bg-neutral-950 text-white shadow-2xl" : "bg-white text-neutral-900 ring-1 ring-neutral-200"

  return <div className={\`\${baseStyles} \${featuredStyles} \${className}\`}>{children}</div>
}

// Specification Item Component
const SpecificationItem = ({
  label,
  value,
  isDark = false,
}: {
  label: string
  value: string
  isDark?: boolean
}) => (
  <div className="flex items-start gap-3 mb-4">
  
    <HiBadgeCheck className={\`w-5 h-5 \${isDark ? "text-white" : "text-black"}\`} />
    <div>
      <div className={\`text-sm font-medium \${isDark ? "text-neutral-300" : "text-neutral-500"}\`}>{label}</div>
      <div className={\`text-sm font-thin \${isDark ? "text-white" : "text-neutral-900"}\`}>{value}</div>
    </div>
  </div>
)

// Include Item Component
const IncludeItem = ({
  text,
  isDark = false,
}: {
  text: string
  isDark?: boolean
}) => (
  <div className="flex items-center gap-3 mb-3">
    <FaCheck className={\`w-4 h-4 flex-shrink-0 \${isDark ? "text-white" : "text-neutral-600"}\`} />
    <span className={\`text-sm \${isDark ? "text-white" : "text-neutral-700"}\`}>{text}</span>
  </div>
)

// Pricing Card Component
const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  const isDark = plan.featured

  return (
    <Card featured={plan.featured}>
      <div className="p-6 h-full flex flex-col">
        {/* Header */}
        <div className="mb-8">
          <h3 className={\`text-2xl font-bold mb-2 \${isDark ? "text-white" : "text-neutral-900"}\`}>{plan.name}</h3>
          <p className={\`text-sm \${isDark ? "text-neutral-400" : "text-neutral-500"}\`}>{plan.subtitle}</p>
        </div>

        {/* Pricing */}
        <div className="mb-8">
          <div className="flex items-baseline gap-3 mb-6">
            <span className={\`text-4xl font-semibold \${isDark ? "text-white" : "text-neutral-900"}\`}>{plan.currentPrice}</span>
            <span className={\`text-lg line-through \${isDark ? "text-neutral-500" : "text-neutral-400"}\`}>
              {plan.originalPrice}
            </span>
          </div>

          <Button
            variant={isDark ? "secondary" : "primary"}
            className={\`w-full mb-4 \${
              isDark ? "bg-white text-neutral-900 hover:bg-neutral-100" : "bg-neutral-900 text-white hover:bg-neutral-800"
            }\`}
          >
            <FaShoppingCart className="w-4 h-4 mr-2" />
            Purchase Now
          </Button>

          <div className="flex items-center justify-center gap-2">
            <FaShieldAlt className={\`w-4 h-4 \${isDark ? "text-neutral-400" : "text-neutral-500"}\`} />
            <span className={\`text-sm \${isDark ? "text-neutral-400" : "text-neutral-500"}\`}>Ships in 5-7 business days</span>
          </div>
        </div>

        {/* Computer Specifications */}
        <div className="mb-8">
          <h4 className={\`font-medium mb-4 \${isDark ? "text-white" : "text-neutral-900"}\`}>
            Computer Specifications
          </h4>
          <SpecificationItem label="Processor" value={plan.specifications.processor} isDark={isDark} />
          <SpecificationItem label="Graphics" value={plan.specifications.graphics} isDark={isDark} />
          <SpecificationItem label="Memory" value={plan.specifications.memory} isDark={isDark} />
          <SpecificationItem label="Storage" value={plan.specifications.storage} isDark={isDark} />
        </div>

        {/* Includes */}
        <div className="flex-grow mb-8">
          <h4 className={\`text-lg font-semibold mb-4 \${isDark ? "text-white" : "text-neutral-900"}\`}>Includes</h4>
          {plan.includes.map((item, index) => (
            <IncludeItem key={index} text={item} isDark={isDark} />
          ))}
        </div>

        {/* Ideal For */}
        <div
          className="mt-auto pt-4 border-t border-opacity-20"
          style={{
            borderColor: isDark ? "#ffffff" : "#000000",
          }}
        >
          <div className="text-center">
            <span className={\`text-sm font-medium \${isDark ? "text-white" : "text-neutral-900"}\`}>*Ideal for: </span>
            <span className={\`text-sm \${isDark ? "text-neutral-400" : "text-neutral-500"}\`}>{plan.idealFor}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}

// Main Pricing Section Component
export default function PricingSection() {
  return (
    <section className="py-16 px-4 bg-neutral-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">Pricing Plan</h1>
          <p className="text-base text-neutral-600 max-w-3xl mx-auto">
            Optimized PCs for futures, stocks, forex & top trading platforms.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl mx-auto">
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
`; 
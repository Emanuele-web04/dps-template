"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pricing } from "@/types/pricing";
import PricingCard from "./PricingCard";
import { cn } from "@/lib/cn";

interface PricingContentProps {
  pricings: Pricing[];
  variant: "neutral" | "orange";
  filter: string;
}

const PricingContent: React.FC<PricingContentProps> = ({
  pricings,
  variant,
  filter,
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={filter}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={cn(
          " gap-3 w-full",
          filter === "all" ? "flex flex-1 justify-center min-w-lg" : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        )}
      >
        {pricings.map((pricing, i) => (
          <motion.div
            key={`${filter}-${pricing.title}-${i}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.2,
              delay: i * 0.1,
              ease: "easeOut",
            }}
            className="h-full"
          >
            <PricingCard pricing={pricing} variant={variant} filter={filter} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default PricingContent;

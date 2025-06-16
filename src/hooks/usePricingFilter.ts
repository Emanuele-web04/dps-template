import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Pricing } from "@/types/pricing";
import { allNextPricing } from "@/lib/nextjs-pricing/pricings";
import { allSwiftPricing } from "@/lib/swiftui-pricing/swift-pricing";

export type PricingFilter = "nextjs" | "swiftui" | "all";

export interface PricingData {
  nextjs: Pricing[];
  swiftui: Pricing[];
  all: Pricing[];
}

const usePricingFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Initialize state from URL params or default to "all"
  const [activeFilter, setActiveFilter] = useState<PricingFilter>(() => {
    const filter = searchParams.get("filter") as PricingFilter;
    return filter && ["nextjs", "swiftui", "all"].includes(filter) ? filter : "all";
  });

  // Simple pricing data - no need to memoize static data
  const pricingData: PricingData = {
    nextjs: allNextPricing,
    swiftui: allSwiftPricing,
    all: [...allNextPricing, ...allSwiftPricing]
  };

  // Get filtered pricing - simple lookup, no memoization needed
  const filteredPricing = pricingData[activeFilter];

  // Simple filter change handler - no callback needed
  const handleFilterChange = (filter: PricingFilter) => {
    setActiveFilter(filter);
    
    // Update URL
    const params = new URLSearchParams(searchParams.toString());
    params.set("filter", filter);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // Sync with URL changes (for browser back/forward)
  useEffect(() => {
    const filter = searchParams.get("filter") as PricingFilter;
    if (filter && ["nextjs", "swiftui", "all"].includes(filter) && filter !== activeFilter) {
      setActiveFilter(filter);
    }
  }, [searchParams, activeFilter]);

  // Simple variant getter - no callback needed
  const getVariant = (filter: PricingFilter) => {
    return filter === "swiftui" ? "orange" : "neutral";
  };

  return {
    activeFilter,
    filteredPricing,
    handleFilterChange,
    getVariant,
    pricingData
  };
};

export default usePricingFilter; 
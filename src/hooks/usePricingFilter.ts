import { useState, useMemo, useCallback, useEffect } from "react";
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

  // Memoize the pricing data to prevent unnecessary recalculations
  const pricingData = useMemo<PricingData>(() => ({
    nextjs: allNextPricing,
    swiftui: allSwiftPricing,
    all: [...allNextPricing, ...allSwiftPricing]
  }), []);

  // Memoize the current filtered data
  const filteredPricing = useMemo(() => 
    pricingData[activeFilter], 
    [pricingData, activeFilter]
  );

  // Update URL when filter changes
  const updateURL = useCallback((filter: PricingFilter) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("filter", filter);
    router.push(`?${params.toString()}`, { scroll: false });
  }, [router, searchParams]);

  // Optimized filter change handler
  const handleFilterChange = useCallback((filter: PricingFilter) => {
    setActiveFilter(filter);
    updateURL(filter);
  }, [updateURL]);

  // Sync with URL changes (for browser back/forward)
  useEffect(() => {
    const filter = searchParams.get("filter") as PricingFilter;
    if (filter && ["nextjs", "swiftui", "all"].includes(filter) && filter !== activeFilter) {
      setActiveFilter(filter);
    }
  }, [searchParams, activeFilter]);

  // Get the appropriate variant for the current filter
  const getVariant = useCallback((filter: PricingFilter) => {
    return filter === "swiftui" ? "orange" : "neutral";
  }, []);

  return {
    activeFilter,
    filteredPricing,
    handleFilterChange,
    getVariant,
    pricingData
  };
};

export default usePricingFilter; 
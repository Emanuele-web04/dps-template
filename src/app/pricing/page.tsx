import React, { Suspense } from "react";
import PricingPageClient from "@/components/pricing/PricingPageClient";
import PricingPageLoading from "@/components/pricing/PricingPageLoading";

const PricingPage: React.FC = () => {
  return (
    <Suspense fallback={<PricingPageLoading />}>
      <PricingPageClient />
    </Suspense>
  );
};

export default PricingPage;

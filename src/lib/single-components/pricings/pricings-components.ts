import { SingleComponent } from "@/types/component";
import MinimalPricing from "@/components/components-pack/pricing-sections/minimal-pricing";
import { minimalPricingCode } from "@/components/components-pack/pricing-sections/minimal-pricing-code";
import { MinimalPricingPreview, ThreeDPricingPreview, SoftPricingPreview } from "@/components/components-pack/pricing-sections/placeholders/placeholders";
import CRMPricingSection from "@/components/components-pack/pricing-sections/3d-pricing";
import { threeDPricingCode } from "@/components/components-pack/pricing-sections/3d-pricing-code";
import SoftPricingSection from "@/components/components-pack/pricing-sections/soft-pricing";
import { softPricingCode } from "@/components/components-pack/pricing-sections/soft-pricing-code";

const minimalPricing: SingleComponent = {
    title: "Minimal Pricing",
    desc: "A minimal pricing section with a featured plan.",
    code: minimalPricingCode,
    slug: "minimal-pricing",
    preview: MinimalPricingPreview,
    realPreview: MinimalPricing
}

const threeDPricing: SingleComponent = {
    title: "3D Pricing Style",
    desc: "A pricing section with a 3D, tactile feel.",
    code: threeDPricingCode,
    slug: "3d-pricing",
    preview: ThreeDPricingPreview,
    realPreview: CRMPricingSection
}

const softPricing: SingleComponent = {
    title: "Soft Pricing",
    desc: "A soft, modern pricing section with light and dark themes.",
    code: softPricingCode,
    slug: "soft-pricing",
    preview: SoftPricingPreview,
    realPreview: SoftPricingSection
}

export const pricingComponents: SingleComponent[] = [
    minimalPricing,
    threeDPricing,
    softPricing
]


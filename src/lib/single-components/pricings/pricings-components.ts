import KhronaHero from "@/components/hero-sections/KhronaHero";
import { SingleComponent } from "@/types/component";
import { fullTableCode } from "../../code-gifts";

const pricingBanner: SingleComponent = {
    title: "Banner Pricing",
    desc: "Pricing with banner on top",
    code: fullTableCode,
    slug: "pricing-banner",
    preview: KhronaHero
}
const minimalPricing: SingleComponent = {
    title: "Minimal Pricing",
    desc: "Minimal Pricing with black and white contrast",
    code: fullTableCode,
    slug: "full-navbar-glass",
    preview: KhronaHero
}
const shadowPricings: SingleComponent = {
    title: "Shadow Pricings",
    desc: "Shadow Pricings in dark mode",
    code: fullTableCode,
    slug: "floating-navbar",
    preview: KhronaHero
}


export const pricingComponents: SingleComponent[] = [
    pricingBanner,
    minimalPricing,
    shadowPricings
]


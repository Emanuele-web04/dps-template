import KhronaHero from "@/components/hero-sections/KhronaHero";
import { SingleComponent } from "@/types/component";
import { fullTableCode } from "../code-gifts";

const futureHeroSection: SingleComponent = {
    title: "Futuristic Hero Section",
    desc: "Hero section with a touch of futuristic gradient",
    code: fullTableCode,
    slug: "futuristic-hero-section",
    preview: KhronaHero
}
const gradientHeroSection: SingleComponent = {
    title: "Gradient Hero Section",
    desc: "Hero section with a beautiful gradient background",
    code: fullTableCode,
    slug: "gradient-hero-section",
    preview: KhronaHero
}
const productHeroSection: SingleComponent = {
    title: "Product Hero Section",
    desc: "Hero section displaying a product",
    code: fullTableCode,
    slug: "product-hero-section",
    preview: KhronaHero
}
const minimalHeroSection: SingleComponent = {
    title: "Minimal Hero Section",
    desc: "Minimal hero section with a touch of color",
    code: fullTableCode,
    slug: "minimal-hero-section",
    preview: KhronaHero
}

export const singleComponents: SingleComponent[] = [
    gradientHeroSection,
    futureHeroSection,
    minimalHeroSection,
    productHeroSection
]


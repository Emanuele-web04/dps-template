import KhronaHero from "@/components/hero-sections/KhronaHero";
import { SingleComponent } from "@/types/component";
import { fullTableCode } from "../../code-gifts";
import GradientHero from "@/components/components-pack/hero-sections/gradient-hero";
import PlaceholderHero from "@/components/components-pack/hero-sections/placeholders/placeholder-hero";
import { FuturisticHeroPreview, ProductHeroPreview, MinimalHeroPreview, GradientHeroPreview } from "@/components/components-pack/hero-sections/placeholders/placeholders";
import FuturisticHero from "@/components/components-pack/hero-sections/futuristic-hero";

// Component wrappers to pass slug props

const futureHeroSection: SingleComponent = {
    title: "Futuristic Hero Section",
    desc: "Hero section with a touch of futuristic gradient",
    code: fullTableCode,
    slug: "futuristic-hero-section",
    preview: FuturisticHeroPreview,
    realPreview: FuturisticHero
}
const gradientHeroSection: SingleComponent = {
    title: "Gradient Hero Section",
    desc: "Hero section with a beautiful gradient background",
    code: fullTableCode,
    slug: "gradient-hero-section",
    preview: GradientHeroPreview,
    realPreview: GradientHero
}
const productHeroSection: SingleComponent = {
    title: "Product Hero Section",
    desc: "Hero section displaying a product",
    code: fullTableCode,
    slug: "product-hero-section",
    preview: ProductHeroPreview,
    realPreview: KhronaHero
}
const minimalHeroSection: SingleComponent = {
    title: "Minimal Hero Section",
    desc: "Minimal hero section with a touch of color",
    code: fullTableCode,
    slug: "minimal-hero-section",
    preview: MinimalHeroPreview,
    realPreview: KhronaHero
}

export const heroComponents: SingleComponent[] = [
    gradientHeroSection,
    futureHeroSection,
    minimalHeroSection,
    productHeroSection
]


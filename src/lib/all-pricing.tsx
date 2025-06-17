import { Pricing } from "@/types/pricing"
import { LuLayoutGrid } from "@/utils/icons"

const featuresTemplates = [
    "Everything from Next.js",
    "Everything from SwiftUI",
]

export const templatesPricing: Pricing = {
    title: "All Bundle",
    features: featuresTemplates, 
    desc: "One time payment", 
    icon: LuLayoutGrid,
    price: 199
}

export const allPricing: Pricing[] = [
    templatesPricing,
]
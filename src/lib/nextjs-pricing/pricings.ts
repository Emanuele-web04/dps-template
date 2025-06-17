import { Pricing } from "@/types/pricing"
import { LuPackage, TbArrowMerge, TbLayoutBoard } from "@/utils/icons"

const featuresComponents = [
    "Access to 40+ production-ready components",
    "Lifetime access to all future updates",
    "Copy-paste ready code with no setup required",
    "Well-documented with inline comments for easy navigation",
    "Perfect for AI code editors to enhance and customize",
    "Unlimited personal and commercial use included"
]

export const componentsPricing: Pricing = {
    title: "Components Bundle",
    features: featuresComponents, 
    desc: "One time payment", 
    icon: LuPackage,
    price: 59
}

const featuresTemplates = [
    "Access to 4+ complete, production-ready templates",
    "Lifetime access to all future template updates",
    "Full source code with complete project structure",
    "Production-ready codebase with best practices",
    "Comprehensive documentation and setup guides",
    "Unlimited personal and commercial use included",
    "Easy customization with modular architecture"
]

export const templatesPricing: Pricing = {
    title: "Templates Bundle",
    features: featuresTemplates, 
    desc: "One time payment", 
    icon: TbLayoutBoard,
    price: 89
}

const nextjsAll = "Complete access to everything - the ultimate value"

export const nextjsPricing: Pricing = {
    title: "All",
    features: [nextjsAll], 
    desc: "One time payment", 
    icon: TbArrowMerge,
    price: 129,
    extra: ["Everything in Components Bundle"]
}

export const allNextPricing: Pricing[] = [
    componentsPricing, 
    templatesPricing,
    nextjsPricing
]

import { Pricing } from "@/types/pricing"
import { LuPackage, TbArrowMerge, TbLayoutBoard } from "@/utils/icons"

const featuresComponents = [
    "Access to 30+ components, ready to use.",
    "Lifetime access to future components too.",
    "Copy and Paste reade-to-use code for your apps.",
    "Comments integrated with the code, so it is easy to understand and navigate.",
    "Copy code to paste into AI code editors to improve and personalize your work.",
    "Usable for personal and commercial use.",
]

export const componentsPricing: Pricing = {
    title: "Components Bundle",
    features: featuresComponents, 
    desc: "One time payment", 
    icon: LuPackage,
    price: 59
}

const featuresTemplates = [
    "Access to 2+ boilerplates, ready to use.",
    "Lifetime access to future boilerplates too.",
    "Copy and Paste reade-to-use code.",
    "Zip folder to donwload with the source code.",
    "Ready-to-distribution code.",
    "Documented code: comments integrated with the code, so it is easy to understand and navigate.",
    "Copy code to paste into AI code editors to improve and personalize your work.",
    "Usable for personal and commercial use.",
]

export const templatesPricing: Pricing = {
    title: "Boilerplates Bundle",
    features: featuresTemplates, 
    desc: "One time payment", 
    icon: TbLayoutBoard,
    price: 89
}

const swiftuiAll = "Lifetime access to all."

export const swiftuiPricing: Pricing = {
    title: "All",
    features: [swiftuiAll], 
    desc: "One time payment", 
    icon: TbArrowMerge,
    price: 189
}

export const allSwiftPricing: Pricing[] = [
    componentsPricing, 
    templatesPricing,
    swiftuiPricing
]
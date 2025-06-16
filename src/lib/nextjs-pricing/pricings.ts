import { Pricing } from "@/types/pricing"
import { LuPackage, TbArrowMerge, TbLayoutBoard } from "@/utils/icons"


const featuresComponents = [
    "Access to 40+ components, ready to use.",
    "Lifetime access to future components too.",
    "Copy and Paste reade-to-use code.",
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
    "Access to 4+ templates, ready to use.",
    "Lifetime access to future templates too.",
    "Copy and Paste reade-to-use code.",
    "Zip folder to donwload with the source code.",
    "Documented code: comments integrated with the code, so it is easy to understand and navigate.",
    "Copy code to paste into AI code editors to improve and personalize your work.",
    "Usable for personal and commercial use.",
    "Simple ReadMe to introducing you to the codebase.",
]

export const templatesPricing: Pricing = {
    title: "Templates Bundle",
    features: featuresTemplates, 
    desc: "One time payment", 
    icon: TbLayoutBoard,
    price: 89
}

const nextjsAll = "Lifetime access to all."

export const nextjsPricing: Pricing = {
    title: "All",
    features: [nextjsAll], 
    desc: "One time payment", 
    icon: TbArrowMerge,
    price: 189,
    extra: ["Everything in Components Bundle"]
}

export const allNextPricing: Pricing[] = [
    componentsPricing, 
    templatesPricing,
    nextjsPricing
]

import { Pricing } from "@/types/pricing"
import { LuPackage, TbArrowMerge, TbLayoutBoard } from "@/utils/icons"

const featuresComponents = [
    "Access to 30+ iOS-ready SwiftUI components",
    "Lifetime access to all future component updates",
    "Copy-paste ready code with no configuration needed",
    "Well-documented with inline comments for easy understanding",
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
    "Access to 2+ complete, App Store-ready boilerplates",
    "Lifetime access to all future boilerplate updates",
    "Full Xcode project with complete iOS app structure",
    "App Store-ready code with Apple's best practices",
    "Comprehensive documentation and deployment guides",
    "Unlimited personal and commercial use included",
    "Easy customization with modular SwiftUI architecture"
]

export const templatesPricing: Pricing = {
    title: "Boilerplates Bundle",
    features: featuresTemplates, 
    desc: "One time payment", 
    icon: TbLayoutBoard,
    price: 89
}

const swiftuiAll = "Complete access to everything - the ultimate value"

export const swiftuiPricing: Pricing = {
    title: "All",
    features: [swiftuiAll], 
    desc: "One time payment", 
    icon: TbArrowMerge,
    price: 129
}

export const allSwiftPricing: Pricing[] = [
    componentsPricing, 
    templatesPricing,
    swiftuiPricing
]
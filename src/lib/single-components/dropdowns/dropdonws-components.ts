import KhronaHero from "@/components/hero-sections/KhronaHero";
import { SingleComponent } from "@/types/component";
import { fullTableCode } from "../../code-gifts";

const accountDropdown: SingleComponent = {
    title: "Account Dropdown",
    desc: "Account Dropdown with different labels",
    code: fullTableCode,
    slug: "account-dropdown",
    preview: KhronaHero
}
const minimalDropdown: SingleComponent = {
    title: "Minimal Dropdown",
    desc: "Minimal dropdown in grayscale",
    code: fullTableCode,
    slug: "minimal-dropdown",
    preview: KhronaHero
}
const containerDropdown: SingleComponent = {
    title: "Container Dropdown",
    desc: "Container dropdown",
    code: fullTableCode,
    slug: "container-dropdown",
    preview: KhronaHero
}
const accentDropdown: SingleComponent = {
    title: "Accent Dropdown",
    desc: "Accent Dropdown with accent color for selection",
    code: fullTableCode,
    slug: "accent-dropdown",
    preview: KhronaHero
}

export const dropdownComponents: SingleComponent[] = [
    accountDropdown,
    minimalDropdown,
    containerDropdown,
    accentDropdown
]


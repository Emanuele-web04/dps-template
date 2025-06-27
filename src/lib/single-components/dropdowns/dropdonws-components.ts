import KhronaHero from "@/components/hero-sections/KhronaHero";
import { SingleComponent } from "@/types/component";
import { fullTableCode } from "../../code-gifts";
import AccountDropdown from "@/components/components-pack/dropdown/account-dropdown";
import { accountDropdownCode } from "@/components/components-pack/dropdown/account-dropdown-code";
import AccentDropdown from "@/components/components-pack/dropdown/accent-dropdown";
import { accentDropdownCode } from "@/components/components-pack/dropdown/accent-dropdown-code";
import ContainerDropdown from "@/components/components-pack/dropdown/container-dropdown";
import { containerDropdownCode } from "@/components/components-pack/dropdown/container-dropdown-code";
import MinimalDropdown from "@/components/components-pack/dropdown/minimal-dropdown";
import { minimalDropdownCode } from "@/components/components-pack/dropdown/minimal-dropdown-code";

const accountDropdown: SingleComponent = {
    title: "Account Dropdown",
    desc: "Interactive account dropdown with profile avatar, share button, and menu items including PRO badge",
    code: accountDropdownCode,
    slug: "account-dropdown",
    preview: AccountDropdown
}
const minimalDropdown: SingleComponent = {
    title: "Minimal Dropdown",
    desc: "Minimal Shadcn-style dropdown with sections, keyboard shortcuts, and upward opening",
    code: minimalDropdownCode,
    slug: "minimal-dropdown",
    preview: MinimalDropdown
}
const containerDropdown: SingleComponent = {
    title: "Container Dropdown",
    desc: "Container dropdown with three-dot trigger and action menu",
    code: containerDropdownCode,
    slug: "container-dropdown",
    preview: ContainerDropdown
}
const accentDropdown: SingleComponent = {
    title: "Accent Dropdown",
    desc: "Accent Dropdown with accent color for selection",
    code: accentDropdownCode,
    slug: "accent-dropdown",
    preview: AccentDropdown
}

export const dropdownComponents: SingleComponent[] = [
    accountDropdown,
    minimalDropdown,
    containerDropdown,
    accentDropdown
]


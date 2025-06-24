import KhronaHero from "@/components/hero-sections/KhronaHero";
import { SingleComponent } from "@/types/component";
import { fullTableCode } from "../../code-gifts";

const fullNavbar: SingleComponent = {
    title: "Full Navbar",
    desc: "Full width navbar with solid color",
    code: fullTableCode,
    slug: "full-navbar",
    preview: KhronaHero
}
const fullNavbarGlass: SingleComponent = {
    title: "Full Navbar Glassmorphism",
    desc: "Full width navbar with glassmorphism",
    code: fullTableCode,
    slug: "full-navbar-glass",
    preview: KhronaHero
}
const floatingNavbar: SingleComponent = {
    title: "Floating Navbar",
    desc: "Top floating navbar with rounded corners",
    code: fullTableCode,
    slug: "floating-navbar",
    preview: KhronaHero
}
const floatingNavbarGlass: SingleComponent = {
    title: "Capsule Navbar Glassmorphism",
    desc: "Top floating capsule navbar with glassmorphism",
    code: fullTableCode,
    slug: "capsule-navbar",
    preview: KhronaHero
}
const searchNavbar: SingleComponent = {
    title: "Navbar with Searchbar",
    desc: "Navbar with searchbar component",
    code: fullTableCode,
    slug: "search-navbar",
    preview: KhronaHero
}

export const navbarComponents: SingleComponent[] = [
    fullNavbar,
    fullNavbarGlass,
    floatingNavbar,
    floatingNavbarGlass,
    searchNavbar
]


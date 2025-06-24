import KhronaHero from "@/components/hero-sections/KhronaHero";
import { SingleComponent } from "@/types/component";
import { fullTableCode } from "../../code-gifts";

const bentoWhite: SingleComponent = {
    title: "Soft Bento Grid",
    desc: "Soft bento grid with elegant borders",
    code: fullTableCode,
    slug: "soft-bento",
    preview: KhronaHero
}
const bento3d: SingleComponent = {
    title: "3D Bento Grid",
    desc: "3D bento grid with shadow and realistic feel",
    code: fullTableCode,
    slug: "3d-bento",
    preview: KhronaHero
}
const modernBento: SingleComponent = {
    title: "Modern Bento Grid",
    desc: "Modern bento grid with a touch of softness",
    code: fullTableCode,
    slug: "modern-bento",
    preview: KhronaHero
}
const tailwindBento: SingleComponent = {
    title: "Tailwind Style Bento",
    desc: "Tailwind style bento with a play of rounded corners",
    code: fullTableCode,
    slug: "accent-dropdown",
    preview: KhronaHero
}

export const bentoComponents: SingleComponent[] = [
    bentoWhite,
    bento3d,
    modernBento,
    tailwindBento
]


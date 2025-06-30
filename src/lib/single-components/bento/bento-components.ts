

import { SingleComponent } from "@/types/component";
import { fullTableCode } from "../../code-gifts";
import ModernBento from "@/components/components-pack/bento-grids/modern-bento";
import { modernBentoCode } from "@/components/components-pack/bento-grids/modern-bento-code";
import SoftBento from "@/components/components-pack/bento-grids/soft-bento";
import { softBentoCode } from "@/components/components-pack/bento-grids/soft-bento-code";
import TailwindBento from "@/components/components-pack/bento-grids/tailwind-bento";
import { tailwindBentoCode } from "@/components/components-pack/bento-grids/tailwind-bento-code";

const softBento: SingleComponent = {
    title: "Soft Bento Grid",
    desc: "Soft bento grid with elegant financial dashboard style",
    code: softBentoCode,
    slug: "soft-bento",
    preview: SoftBento
}

const modernBento: SingleComponent = {
    title: "Modern Bento Grid",
    desc: "Modern bento grid with a touch of softness",
    code: tailwindBentoCode,
    slug: "modern-bento",
    preview: TailwindBento
}

const tailwindBento: SingleComponent = {
    title: "Tailwind White Style Bento",
    desc: "A dark, elegant bento grid inspired by Preline UI.",
    code: tailwindBentoCode,
    slug: "tailwind-bento",
    preview: ModernBento
}


export const bentoComponents: SingleComponent[] = [
    tailwindBento,
    modernBento,
    softBento,
]


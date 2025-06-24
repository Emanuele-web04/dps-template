import KhronaHero from "@/components/hero-sections/KhronaHero";
import { SingleComponent } from "@/types/component";
import { fullTableCode } from "../../code-gifts";

const cvForm: SingleComponent = {
    title: "CV Form",
    desc: "CV Form with file upload",
    code: fullTableCode,
    slug: "cv-form",
    preview: KhronaHero
}
const clientForm: SingleComponent = {
    title: "Client Form",
    desc: "Client Form with calendar",
    code: fullTableCode,
    slug: "client-form",
    preview: KhronaHero
}

export const formComponents: SingleComponent[] = [
   cvForm,
   clientForm
]


import KhronaHero from "@/components/hero-sections/KhronaHero";
import { SingleComponent } from "@/types/component";
import { fullTableCode } from "../../code-gifts";

const elevatedLogin: SingleComponent = {
    title: "Elevated Login",
    desc: "Elevate Login with Google, X and Apple",
    code: fullTableCode,
    slug: "elevated-login",
    preview: KhronaHero
}
const minimalLogin: SingleComponent = {
    title: "Minimal Login",
    desc: "Minimal Login with different sign-ins",
    code: fullTableCode,
    slug: "minimal-login",
    preview: KhronaHero
}
const imageLogin: SingleComponent = {
    title: "Image Login",
    desc: "Login with side image",
    code: fullTableCode,
    slug: "image-login",
    preview: KhronaHero
}


export const loginComponents: SingleComponent[] = [
   elevatedLogin,
   minimalLogin,
   imageLogin
]

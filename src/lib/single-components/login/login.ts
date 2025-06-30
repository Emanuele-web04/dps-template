import ElevatedLogin from "@/components/components-pack/login/elevated-login";
import { elevatedLoginCode } from "@/components/components-pack/login/elevated-login-code";
import MinimalLogin from "@/components/components-pack/login/minimal-login";
import { minimalLoginCode } from "@/components/components-pack/login/minimal-login-code";

import { SingleComponent } from "@/types/component";
import { fullTableCode } from "../../code-gifts";
import TravelLogin from "@/components/components-pack/login/travel-login";
import AddClientForm from "@/components/components-pack/forms/client-form";
import { clientFormCode } from "@/components/components-pack/forms/client-form-code";

const elevatedLogin: SingleComponent = {
    title: "Elevated Login",
    desc: "Elevate Login with Google, X and Apple",
    code: elevatedLoginCode,
    slug: "elevated-login",
    preview: ElevatedLogin
}
const minimalLogin: SingleComponent = {
    title: "Minimal Login",
    desc: "Minimal Login with different sign-ins",
    code: minimalLoginCode,
    slug: "minimal-login",
    preview: MinimalLogin
}
const imageLogin: SingleComponent = {
    title: "Image Login",
    desc: "Login with side image",
    code: fullTableCode,
    slug: "image-login",
    preview: TravelLogin
}



export const loginComponents: SingleComponent[] = [
   elevatedLogin,
   minimalLogin,
   imageLogin
]

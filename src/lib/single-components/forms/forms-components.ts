import CVForm from "@/components/components-pack/forms/cv-form";
import { cvFormCode } from "@/components/components-pack/forms/cv-form-code";
import { SingleComponent } from "@/types/component";
import { fullTableCode } from "../../code-gifts";
import ClientForm from "@/components/components-pack/forms/client-form";

const cvForm: SingleComponent = {
    title: "CV Form",
    desc: "CV Form with file upload and drag & drop functionality",
    code: cvFormCode,
    slug: "cv-form",
    preview: CVForm
}
const clientForm: SingleComponent = {
    title: "Client Form",
    desc: "Client Form with calendar",
    code: fullTableCode,
    slug: "client-form",
    preview: ClientForm
}

export const formComponents: SingleComponent[] = [
   cvForm,
   clientForm
]


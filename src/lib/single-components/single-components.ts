import KhronaHero from "@/components/hero-sections/KhronaHero";
import { SingleComponent } from "@/types/component";
import { fullTableCode } from "../code-gifts";

const singleComponent: SingleComponent = {
    title: "Hero section + blurred navbar",
    desc: "Hero section with navbar that has a backdrop blur",
    npm: `npm i react-icons`,
    code: fullTableCode,
    preview: KhronaHero
}

export const singleComponents: SingleComponent[] = [
    singleComponent,
    singleComponent,
    singleComponent,
    singleComponent,
    singleComponent,
    singleComponent,
]


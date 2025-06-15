import { IconType } from "react-icons"

export type TemplateType = {
    // view content 
    
}

export type ComponentType = {
    title: string
    desc: string
    image: string
    stack: IconType[]
    slug: string
    longDesc: string
    ogImage: string
    price: number

    // component: SingleComponent[]
}

export type SingleComponent = {
    title: string
    desc: string
    image: string
    npm: string
    code: string
}
import { IconType } from "react-icons"

export type TemplateType = {
    // view content 
    title: string
    desc: string
    images: string[]
    stack: IconType[]

    // metadata
    slug: string
    longDesc: string
    ogImage: string

    price: number
    preview: string
}
import { ComponentType } from "react"

export type Template = {
    slug: string
    Component: ComponentType<{}>
    // metadata
    title: string
    desc: string
    longDesc: string
    ogImage: string
}
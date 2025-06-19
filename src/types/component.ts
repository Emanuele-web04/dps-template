import { IconType } from "react-icons"

export type ComponentType = {
    title: string
    desc: string
    image: string
    installation: string
    stack: IconType[]
    slug: string
    longDesc: string
    ogImage: string
    price: number
    utils: string
    components: SingleComponent[]
}

export type SingleComponent = {
    title: string
    desc: string
    npm: string
    code: string
    preview: () => React.JSX.Element
}
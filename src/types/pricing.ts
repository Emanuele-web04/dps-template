import { IconType } from "react-icons"

export type Pricing = {
    price: number
    desc: string
    icon: IconType
    title: string
    features: string[]
    extra?: string[]
}
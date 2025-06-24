import { IconType } from "react-icons"

export type Pricing = {
    price: number
    discountPrice: number
    desc: string
    icon: IconType
    title: string
    features: string[]
    extra?: string[]
}
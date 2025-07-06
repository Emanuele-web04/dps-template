import React from "react";
import { IconType } from "react-icons"

export type ComponentType = {
    title: string
    desc: string
    image: React.ComponentType
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
    npm?: string
    code: string
    slug: string
    preview: React.ComponentType
    realPreview?: React.ComponentType // For isolated preview pages
}
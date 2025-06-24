import React from "react";
import KhronaHero from "@/components/hero-sections/KhronaHero";
import { SingleComponent } from "@/types/component";
import { fullTableCode } from "../../code-gifts";
import NeumorphismButton from "./neumorphism";
import IOSToggle from "@/components/ui/ios-toggle";
  
  const toggleButton: SingleComponent = {
    title: "iOS Style Toggle",
    desc: "Standard iOS Toggle Style",
    code: fullTableCode,
    slug: "toggle",
    preview: IOSToggle
}
const glowButton: SingleComponent = {
    title: "Glow Button",
    desc: "Glow Button with shadow and borders",
    code: fullTableCode,
    slug: "glow-button",
    preview: KhronaHero
}
const minimalButton: SingleComponent = {
    title: "Minimal Button",
    desc: "Minimal Button with subtle shadow and border",
    code: fullTableCode,
    slug: "minimal-button",
    preview: KhronaHero
}
const gumroadButton: SingleComponent = {
    title: "Gumroad Style Button",
    desc: "Bordered gumroad style button",
    code: fullTableCode,
    slug: "gumroad-button",
    preview: KhronaHero
}
const shinyButton: SingleComponent = {
    title: "Shiny Button",
    desc: "Shiny Button with gradients",
    code: fullTableCode,
    slug: "shiny-button",
    preview: KhronaHero
}
const softButton: SingleComponent = {
    title: "Soft Button",
    desc: "Soft button with shadows",
    code: fullTableCode,
    slug: "soft-button",
    preview: KhronaHero
}
const neumorphismButtonComponent: SingleComponent = {
    title: "Neumorphism Button",
    desc: "Neumorphism button 3d effect",
    code: fullTableCode,
    slug: "neumorphism-button",
    preview: NeumorphismButton
}
const segmentedPicker: SingleComponent = {
    title: "Segmented Picker",
    desc: "Segmented picker with modern shadows and inner shadows",
    code: fullTableCode,
    slug: "segmented-picker",
    preview: NeumorphismButton
}


// Export all button components in a single array
export const buttonComponents: SingleComponent[] = [
    toggleButton,
    glowButton,
    minimalButton,
    gumroadButton,
    shinyButton,
    softButton,
    neumorphismButtonComponent,
    segmentedPicker
]


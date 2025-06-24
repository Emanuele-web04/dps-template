import React from "react";
import KhronaHero from "@/components/hero-sections/KhronaHero";
import { SingleComponent } from "@/types/component";
import { fullTableCode } from "../../code-gifts";
import NeumorphismButton from "./neumorphism";
import IOSToggle from "@/components/ui/ios-toggle";
import GlowButton from "@/components/components-pack/buttons/glow-button";
import { glowButtonCode } from "@/components/components-pack/buttons/glow-button-code";
import GumroadButton from "@/components/components-pack/buttons/gumroad-button";
import { gumroadButtonCode } from "@/components/components-pack/buttons/gumroad-button-code";
import MinimalButton from "@/components/components-pack/buttons/minimal-button";
import { minimalButtonCode } from "@/components/components-pack/buttons/minimal-button-code";
import ShinyButton from "@/components/components-pack/buttons/shiny-button";
import { shinyButtonCode } from "@/components/components-pack/buttons/shiny-button-code";
import SoftButton from "@/components/components-pack/buttons/soft-button";
import { softButtonCode } from "@/components/components-pack/buttons/soft-button-code";
import SegmentedPickerComponent from "@/components/components-pack/buttons/segmented-picker";
import { segmentedPickerCode } from "@/components/components-pack/buttons/segmented-picker-code";
  
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
    code: glowButtonCode,
    slug: "glow-button",
    preview: GlowButton
}
const minimalButton: SingleComponent = {
    title: "Minimal Button",
    desc: "Minimal Button with subtle shadow and border",
    code: minimalButtonCode,
    slug: "minimal-button",
    preview: MinimalButton
}
const gumroadButton: SingleComponent = {
    title: "Gumroad Style Button",
    desc: "Bordered gumroad style button",
    code: gumroadButtonCode,
    slug: "gumroad-button",
    preview: GumroadButton
}
const shinyButton: SingleComponent = {
    title: "Shiny Button",
    desc: "Shiny Button with gradients",
    code: shinyButtonCode,
    slug: "shiny-button",
    preview: ShinyButton
}
const softButton: SingleComponent = {
    title: "Soft Button",
    desc: "Soft button with inner shadows",
    code: softButtonCode,
    slug: "soft-button",
    preview: SoftButton
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
    code: segmentedPickerCode,
    slug: "segmented-picker",
    preview: SegmentedPickerComponent
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


import KhronaHero from "@/components/hero-sections/KhronaHero";
import { SingleComponent } from "@/types/component";
import { fullTableCode } from "../../code-gifts";

const statusBadge: SingleComponent = {
    title: "Status Badge",
    desc: "Status badge with different states and colors",
    code: fullTableCode,
    slug: "status-badge",
    preview: KhronaHero
}
const minimalTag: SingleComponent = {
    title: "Minimal Tag",
    desc: "Minimal tag with different colors and icons",
    code: fullTableCode,
    slug: "minimal-tag",
    preview: KhronaHero
}
const comingSoonLabel: SingleComponent = {
    title: "Coming Soon Label",
    desc: "Coming Soon label that indicates the release",
    code: fullTableCode,
    slug: "coming-soon-label",
    preview: KhronaHero
}
const onlineStatusBadge: SingleComponent = {
    title: "Online Status Badge",
    desc: "Online & Offline status badge with pulsing circle",
    code: fullTableCode,
    slug: "online-status-badge",
    preview: KhronaHero
}
const profileChip: SingleComponent = {
    title: "Profile Chip",
    desc: "Profile chip with close button and picture",
    code: fullTableCode,
    slug: "profile-chip",
    preview: KhronaHero
}



// Export all button components in a single array
export const badgeComponents: SingleComponent[] = [
    statusBadge,
    minimalTag,
    comingSoonLabel,
    onlineStatusBadge,
    profileChip
]


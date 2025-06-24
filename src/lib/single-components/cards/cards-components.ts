import KhronaHero from "@/components/hero-sections/KhronaHero";
import { SingleComponent } from "@/types/component";
import { fullTableCode } from "../../code-gifts";

const deleteAccountCard: SingleComponent = {
    title: "Delete Account Card",
    desc: "Delete account minimal card ",
    code: fullTableCode,
    slug: "delete-account-card",
    preview: KhronaHero
}
const creatorCard: SingleComponent = {
    title: "Creator Card",
    desc: "Creator card for social media",
    code: fullTableCode,
    slug: "creator-card",
    preview: KhronaHero
}
const minimalBusinessCard: SingleComponent = {
    title: "Minimal Business Card",
    desc: "Minimal Business card with socials",
    code: fullTableCode,
    slug: "minimal-business-card",
    preview: KhronaHero
}
const messageCard: SingleComponent = {
    title: "Message Card",
    desc: "Message card for chat app",
    code: fullTableCode,
    slug: "message-card",
    preview: KhronaHero
}
const gradientCard: SingleComponent = {
    title: "Gradient Card",
    desc: "Gradient info card",
    code: fullTableCode,
    slug: "gradient-card",
    preview: KhronaHero
}
const hover3dCard: SingleComponent = {
    title: "Hover 3d Card",
    desc: "Hover 3d Card to play with the mouse",
    code: fullTableCode,
    slug: "hover-3d-card",
    preview: KhronaHero
}
const searchCard: SingleComponent = {
    title: "Search Card",
    desc: "Search card with suggestions and settings",
    code: fullTableCode,
    slug: "search-card",
    preview: KhronaHero
}
const notificationCard: SingleComponent = {
    title: "Notification Card",
    desc: "Modern notification card",
    code: fullTableCode,
    slug: "search-card",
    preview: KhronaHero
}


export const cardComponents: SingleComponent[] = [
    deleteAccountCard,
    creatorCard,
    minimalBusinessCard,
    messageCard,
    gradientCard,
    hover3dCard,
    searchCard,
    notificationCard
]


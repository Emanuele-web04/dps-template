import KhronaHero from "@/components/hero-sections/KhronaHero";
import { SingleComponent } from "@/types/component";
import { fullTableCode } from "../../code-gifts";
import ToolTipImageLink from "@/components/components-pack/cards/tooltip-image-link";
import PeopleImages from "@/components/components-pack/cards/people-images";
import DeleteAccountCard from "@/components/components-pack/cards/delete-account";
import MinimalBusinessCard from "@/components/components-pack/cards/minimal-business-card";
import CreatorCard from "@/components/components-pack/cards/creator-card";
import MessageCard from "@/components/components-pack/cards/message-card";
import BlurCard from "@/components/components-pack/cards/blur-card";
import ToolsCard from "@/components/components-pack/cards/gradient-card";
import SearchCard from "@/components/components-pack/cards/search-card";
import NotificationCard from "@/components/components-pack/cards/notification-card";
import { tooltipImageLinkCode } from "@/components/components-pack/cards/tooltip-image-link-code";
import { peopleImagesCode } from "@/components/components-pack/cards/people-images-code";
import { deleteAccountCode } from "@/components/components-pack/cards/delete-account-code";
import { minimalBusinessCardCode } from "@/components/components-pack/cards/minimal-business-card-code";
import { creatorCardCode } from "@/components/components-pack/cards/creator-card-code";
import { hover3dCode } from "@/components/components-pack/cards/hover-3d-code";
import { messageCardCode } from "@/components/components-pack/cards/message-card-code";
import { blurCardCode } from "@/components/components-pack/cards/blur-card-code";
import { toolsCardCode } from "@/components/components-pack/cards/gradient-card-code";
import { searchCardCode } from "@/components/components-pack/cards/search-card-code";
import { notificationCardCode } from "@/components/components-pack/cards/notification-card-code";
import Hover3dCardComponent from "@/components/components-pack/cards/hover3d-card";

const deleteAccountCard: SingleComponent = {
    title: "Delete Account Card",
    desc: "Interactive delete account modal with customizable color themes",
    code: deleteAccountCode,
    slug: "delete-account-card",
    preview: DeleteAccountCard
}
const creatorCard: SingleComponent = {
    title: "Creator Card",
    desc: "Modern creator profile card with stats and contact button",
    code: creatorCardCode,
    slug: "creator-card",
    preview: CreatorCard
}
const minimalBusinessCard: SingleComponent = {
    title: "Minimal Business Card",
    desc: "Clean business card with profile info and social media links",
    code: minimalBusinessCardCode,
    slug: "minimal-business-card",
    preview: MinimalBusinessCard
}
const messageCard: SingleComponent = {
    title: "Message Card",
    desc: "Clean message notification card with action buttons",
    code: messageCardCode,
    slug: "message-card",
    preview: MessageCard
}
const toolsCard: SingleComponent = {
    title: "Gradient Card",
    desc: "Gradient showcase card with dark/light mode support and technology icons",
    code: toolsCardCode,
    slug: "tools-card",
    preview: ToolsCard
}
const hover3dCard: SingleComponent = {
    title: "Hover 3d Card",
    desc: "Interactive 3D hover card with mouse tracking and visual effects",
    code: hover3dCode,
    slug: "hover-3d-card",
    preview: Hover3dCardComponent
}
const searchCard: SingleComponent = {
    title: "Search Card",
    desc: "Interactive search card with recent searches and quick actions",
    code: searchCardCode,
    slug: "search-card",
    preview: SearchCard
}
const notificationCard: SingleComponent = {
    title: "Notification Card",
    desc: "Clean notification card with unread indicators and action buttons",
    code: notificationCardCode,
    slug: "notification-card",
    preview: NotificationCard
}

// New Components - Tooltip and People Images
const tooltipImageLink: SingleComponent = {
    title: "Tooltip Image Link",
    desc: "Interactive image card with hover tooltip, link preview, and copy functionality",
    code: tooltipImageLinkCode,
    slug: "tooltip-image-link",
    preview: ToolTipImageLink
}

const peopleImages: SingleComponent = {
    title: "Tooltip Team People",
    desc: "Overlapping profile images with hover tooltips showing names and roles",
    code: peopleImagesCode,
    slug: "tooltip-team-people",
    preview: PeopleImages
}

const blurCard: SingleComponent = {
    title: "Blur Card",
    desc: "Beautiful blur card with mountain background and location info",
    code: blurCardCode,
    slug: "blur-card",
    preview: BlurCard
}


export const cardComponents: SingleComponent[] = [
    deleteAccountCard,
    minimalBusinessCard,
    creatorCard,
    messageCard,
    tooltipImageLink,
    peopleImages,
    toolsCard,
    hover3dCard,
    searchCard,
    notificationCard,
    blurCard
]


import React from "react";
import StatusBadge from "@/components/components-pack/labels/status-badge";
import { statusBadgeCode } from "@/components/components-pack/labels/status-badge-code";
import KhronaHero from "@/components/hero-sections/KhronaHero";
import { SingleComponent } from "@/types/component";
import { fullTableCode } from "../../code-gifts";
import SoftLabel from "@/components/components-pack/labels/soft-label";
import { softLabelCode } from "@/components/components-pack/labels/soft-label-code";
import CryptoLabel from "@/components/components-pack/labels/crypto-label";
import { cryptoLabelCode } from "@/components/components-pack/labels/crypto-label-code";
import ComingSoonLabel from "@/components/components-pack/labels/coming-soon-label";
import { comingSoonLabelCode } from "@/components/components-pack/labels/coming-soon-label-code";
import OnlineStatusBadge from "@/components/components-pack/labels/online-status-badge";
import { onlineStatusBadgeCode } from "@/components/components-pack/labels/online-status-badge-code";
import FilterChip from "@/components/components-pack/labels/profile-chip";
import { filterChipCode } from "@/components/components-pack/labels/profile-chip-code";

const statusBadge: SingleComponent = {
    title: "Status Badge",
    desc: "Status badge with different states and colors",
    code: statusBadgeCode,
    slug: "status-badge",
    preview: StatusBadge
}
const cryptoLabel: SingleComponent = {
    title: "Crypto Label",
    desc: "Crypto label with Bitcoin icon and trend indicators",
    code: cryptoLabelCode,
    slug: "crypto-label",
    preview: CryptoLabel
}
const softLabel: SingleComponent = {
    title: "Soft Label",
    desc: "Soft label with icon and text, perfect for reviews or tags.",
    code: softLabelCode,
    slug: "soft-label",
    preview: SoftLabel
}
const comingSoonLabel: SingleComponent = {
    title: "Coming Soon Label",
    desc: "Coming Soon label that indicates the release",
    code: comingSoonLabelCode,
    slug: "coming-soon-label",
    preview: ComingSoonLabel
}
const onlineStatusBadge: SingleComponent = {
    title: "Online Status Badge",
    desc: "Online & Offline status badge with pulsing circle",
    code: onlineStatusBadgeCode,
    slug: "online-status-badge",
    preview: OnlineStatusBadge
}
const filterChip: SingleComponent = {
    title: "Filter Chip",
    desc: "Filter chip with count and close button",
    code: filterChipCode,
    slug: "filter-chip",
    preview: FilterChip
}

// Export all button components in a single array
export const badgeComponents: SingleComponent[] = [
    filterChip,
    statusBadge,
    onlineStatusBadge,
    cryptoLabel,
    softLabel,
    comingSoonLabel,
]


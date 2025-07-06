import { ComponentType } from "@/types/component";
import { BiLogoTypescript, FaReact, RiNextjsFill, SiTailwindcss, TbBrandFramerMotion } from "@/utils/icons";
import { heroComponents } from "./single-components/hero-sections/hero-components";
import { navbarComponents } from "./single-components/navbars/navbar-components";
import { cardComponents } from "./single-components/cards/cards-components";
import { buttonComponents } from "./single-components/buttons/buttons-components";
import { dropdownComponents } from "./single-components/dropdowns/dropdonws-components";
import { formComponents } from "./single-components/forms/forms-components";
import { loginComponents } from "./single-components/login/login";
import { pricingComponents } from "./single-components/pricings/pricings-components";
import { badgeComponents } from "./single-components/badges/badges-components";
import { bentoComponents } from "./single-components/bento/bento-components";
import { systemPagesComponents } from "./single-components/system-pages/system-page-components";
import { waitlistComponents } from "./single-components/waitlists/waitlist-components";

function rangeTo() {
    const images: string[] = [];
    for (let i = 0; i < 4; i++) {
      images.push("/khrona-landing.webp");
    }

    return images;
  }

export const placeholders = rangeTo();

const iconsStack = [RiNextjsFill, FaReact, SiTailwindcss, TbBrandFramerMotion, BiLogoTypescript];
const iconsStack2 = [RiNextjsFill, FaReact, SiTailwindcss, BiLogoTypescript];

const utils = `
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`

export const components: ComponentType[] = [
    {
    title: "Hero Sections", 
    desc: "A collection of modern and engaging hero section components designed to capture attention and drive conversions.", 
    image: "https://tailwindcss.com/plus-assets/img/ui-blocks/marketing/heroes.png", 
    stack: iconsStack, 
    slug:"hero-sections", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 10,
    installation: "npm i motion clsx tailwind-merge react-icons",
    utils: utils,
    components: heroComponents
    },
    {
    title: "Navbars", 
    desc: "Responsive navigation bar components with mobile menus, theme toggles, and smooth animations for modern websites.", 
    image: "https://tailwindcss.com/plus-assets/img/ui-blocks/marketing/headers.png", 
    stack: iconsStack2, 
    slug:"navbars", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 6,
    components: navbarComponents,
    installation: "npm i motion clsx tailwind-merge react-icons",
    utils: utils,
    },
    {
    title: "System Pages", 
    desc: "A collection of modern and engaging system pages like 404 & Error.", 
    image: "https://tailwindcss.com/plus-assets/img/ui-blocks/marketing/404-pages.png", 
    stack: iconsStack2, 
    slug:"system-pages", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 10,
    components: systemPagesComponents,
    installation: "npm i motion clsx tailwind-merge react-icons",
    utils: utils,
    },
    {
    title: "Waitlists", 
    desc: "A collection of modern and engaging waitlist pages with gradient backgrounds and email signup forms.", 
    image: "https://tailwindcss.com/plus-assets/img/ui-blocks/marketing/newsletter-sections.png", 
    stack: iconsStack, 
    slug:"waitlists", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 10,
    components: waitlistComponents,
    installation: "npm i motion clsx tailwind-merge react-icons",
    utils: utils,
    },
    {
    title: "Cards", 
    desc: "Versatile card components for displaying content, products, and information with hover effects and responsive design.", 
    image: "https://tailwindcss.com/plus-assets/img/ui-blocks/application-ui/feeds.png", 
    stack: iconsStack2, 
    slug:"cards", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 14,
    components: cardComponents,
    installation: "npm i clsx tailwind-merge react-icons",
    utils: utils,
    },
    {
    title: "Buttons", 
    desc: "A comprehensive button library with various styles, sizes, and states for consistent user interface design.", 
    image: "https://tailwindcss.com/plus-assets/img/ui-blocks/application-ui/buttons.png", 
    stack: iconsStack2, 
    slug:"buttons", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 8,
    components: buttonComponents,
    installation: "npm i clsx tailwind-merge react-icons",
    utils: utils,
    },
    {
    title: "Dropdown", 
    desc: "Interactive dropdown components with customizable options, animations, and keyboard navigation support.", 
    image: "https://tailwindcss.com/plus-assets/img/ui-blocks/application-ui/dropdowns.png", 
    stack: iconsStack2, 
    slug:"dropdown", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 6,
    components: dropdownComponents,
    installation: "npm i clsx tailwind-merge react-icons",
    utils: utils,
    },
    {
    title: "Forms", 
    desc: "Complete form components with validation, file upload, and accessibility features for user data collection.", 
    image: "https://tailwindcss.com/plus-assets/img/ui-blocks/application-ui/form-layouts.png", 
    stack: iconsStack2, 
    slug:"forms", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 6,
    components: formComponents,
    installation: "npm i clsx tailwind-merge react-icons",
    utils: utils,
    },
    {
    title: "Login", 
    desc: "Authentication components including signup, login, and password recovery forms with modern design patterns.", 
    image: "https://tailwindcss.com/plus-assets/img/ui-blocks/application-ui/sign-in-forms.png", 
    stack: iconsStack2, 
    slug:"login", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 8,
    components: loginComponents,
    installation: "npm i clsx tailwind-merge react-icons",
    utils: utils,
    },
    {
    title: "Pricing Sections", 
    desc: "Professional pricing table components with feature comparisons and call-to-action buttons for SaaS products.", 
    image: "https://tailwindcss.com/plus-assets/img/ui-blocks/marketing/pricing.png", 
    stack: iconsStack2, 
    slug:"pricing-sections", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 10,
    components: pricingComponents,
    installation: "npm i clsx tailwind-merge react-icons",
    utils: utils,
    },
    {
    title: "Bento Grids", 
    desc: "Modern bento grid layouts for showcasing content, features, and portfolios with creative visual arrangements.", 
    image: "https://tailwindcss.com/plus-assets/img/ui-blocks/marketing/bento-grids.png", 
    stack: iconsStack2, 
    slug:"bento-grids", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 8,
    components: bentoComponents,
    installation: "npm i clsx tailwind-merge react-icons",
    utils: utils,
    },
    {
    title: "Chips", 
    desc: "Flexible chips, badges and labels components for status indicators, categories, and information display with various styles.", 
    image: "https://tailwindcss.com/plus-assets/img/ui-blocks/application-ui/badges.png", 
    stack: iconsStack2, 
    slug:"labels", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 8,
    components: badgeComponents,
    installation: "npm i clsx tailwind-merge react-icons",
    utils: utils,
    },
]

export async function getAllComponentSlugs(): Promise<string[]> {
  return components.map(c => c.slug)
}

export async function getComponentBySlug(slug: string): Promise<ComponentType | null> {
    const comp = components.find(c => c.slug === slug) ?? null
    return comp
}
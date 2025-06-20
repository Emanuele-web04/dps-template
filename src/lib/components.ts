import { ComponentType } from "@/types/component";
import { BiLogoTypescript, FaReact, RiNextjsFill, SiTailwindcss, TbBrandFramerMotion } from "@/utils/icons";
import { singleComponents } from "./single-components/single-components";

function rangeTo() {
    const images: string[] = [];
    for (let i = 0; i < 4; i++) {
      images.push("/khrona-landing.png");
    }

    return images;
  }

export const placeholders = rangeTo();

const iconsStack = [RiNextjsFill, FaReact, SiTailwindcss, TbBrandFramerMotion, BiLogoTypescript];

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
    image: "/khrona-landing.png", 
    stack: iconsStack, 
    slug:"hero-sections", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 12,
    installation: "npm i react-icons tailwind-merge",
    utils: utils,
    components: singleComponents
    },
    {
    title: "Navbars", 
    desc: "Responsive navigation bar components with mobile menus, theme toggles, and smooth animations for modern websites.", 
    image: "/khrona-landing.png", 
    stack: iconsStack, 
    slug:"navbars", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 49,
    components: singleComponents,
    installation: "npm i react-icons",
    utils: utils,
    },
    {
    title: "Cards", 
    desc: "Versatile card components for displaying content, products, and information with hover effects and responsive design.", 
    image: "/khrona-landing.png", 
    stack: iconsStack, 
    slug:"cards", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 49,
    components: singleComponents,
    installation: "npm i react-icons",
    utils: utils,
    },
    {
    title: "Buttons", 
    desc: "A comprehensive button library with various styles, sizes, and states for consistent user interface design.", 
    image: "/khrona-landing.png", 
    stack: iconsStack, 
    slug:"buttons", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 49,
    components: singleComponents,
    installation: "npm i react-icons",
    utils: utils,
    },
    {
    title: "Dropdown", 
    desc: "Interactive dropdown components with customizable options, animations, and keyboard navigation support.", 
    image: "/khrona-landing.png", 
    stack: iconsStack, 
    slug:"dropdown", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 49,
    components: singleComponents,
    installation: "npm i react-icons",
    utils: utils,
    },
    {
    title: "Forms", 
    desc: "Complete form components with validation, error handling, and accessibility features for user data collection.", 
    image: "/khrona-landing.png", 
    stack: iconsStack, 
    slug:"forms", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 49,
    components: singleComponents,
    installation: "npm i react-icons",
    utils: utils,
    },
    {
    title: "Signup/Login", 
    desc: "Authentication components including signup, login, and password recovery forms with modern design patterns.", 
    image: "/khrona-landing.png", 
    stack: iconsStack, 
    slug:"signup-login", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 49,
    components: singleComponents,
    installation: "npm i react-icons",
    utils: utils,
    },
    {
    title: "Pricing Sections", 
    desc: "Professional pricing table components with feature comparisons and call-to-action buttons for SaaS products.", 
    image: "/khrona-landing.png", 
    stack: iconsStack, 
    slug:"pricing-sections", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 49,
    components: singleComponents,
    installation: "npm i react-icons",
    utils: utils,
    },
    {
    title: "Bento Grids", 
    desc: "Modern bento grid layouts for showcasing content, features, and portfolios with creative visual arrangements.", 
    image: "/khrona-landing.png", 
    stack: iconsStack, 
    slug:"bento-grids", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 49,
    components: singleComponents,
    installation: "npm i react-icons",
    utils: utils,
    },
    {
    title: "Badges", 
    desc: "Flexible badges and labels components for status indicators, categories, and information display with various styles.", 
    image: "/khrona-landing.png", 
    stack: iconsStack, 
    slug:"labels", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 49,
    components: singleComponents,
    installation: "npm i react-icons",
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
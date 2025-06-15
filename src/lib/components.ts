import { ComponentType } from "@/types/component";
import { BiLogoTypescript, FaReact, RiNextjsFill, SiTailwindcss, TbBrandFramerMotion } from "@/utils/icons";

function rangeTo() {
    const images: string[] = [];
    for (let i = 0; i < 4; i++) {
      images.push("/khrona-landing.png");
    }

    return images;
  }

export const placeholders = rangeTo();

const iconsStack = [RiNextjsFill, FaReact, SiTailwindcss, TbBrandFramerMotion, BiLogoTypescript];

export const components: ComponentType[] = [
    {
    title: "Hero Sections", 
    desc: "A collection of modern and engaging hero section components designed to capture attention and drive conversions.", 
    image: "/khrona-landing.png", 
    stack: iconsStack, 
    slug:"hero-sections", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 49,
    },
    {
    title: "Navbars", 
    desc: "Responsive navigation bar components with mobile menus, theme toggles, and smooth animations for modern websites.", 
    image: "/khrona-landing.png", 
    stack: iconsStack, 
    slug:"navbars", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 49
    },
    {
    title: "Cards", 
    desc: "Versatile card components for displaying content, products, and information with hover effects and responsive design.", 
    image: "/khrona-landing.png", 
    stack: iconsStack, 
    slug:"cards", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 49
    },
    {
    title: "Buttons", 
    desc: "A comprehensive button library with various styles, sizes, and states for consistent user interface design.", 
    image: "/khrona-landing.png", 
    stack: iconsStack, 
    slug:"buttons", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 49
    },
    {
    title: "Dropdown", 
    desc: "Interactive dropdown components with customizable options, animations, and keyboard navigation support.", 
    image: "/khrona-landing.png", 
    stack: iconsStack, 
    slug:"dropdown", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 49
    },
    {
    title: "Forms", 
    desc: "Complete form components with validation, error handling, and accessibility features for user data collection.", 
    image: "/khrona-landing.png", 
    stack: iconsStack, 
    slug:"forms", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 49
    },
    {
    title: "Signup/Login", 
    desc: "Authentication components including signup, login, and password recovery forms with modern design patterns.", 
    image: "/khrona-landing.png", 
    stack: iconsStack, 
    slug:"signup-login", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 49
    },
    {
    title: "Pricing Sections", 
    desc: "Professional pricing table components with feature comparisons and call-to-action buttons for SaaS products.", 
    image: "/khrona-landing.png", 
    stack: iconsStack, 
    slug:"pricing-sections", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 49
    },
    {
    title: "Bento Grids", 
    desc: "Modern bento grid layouts for showcasing content, features, and portfolios with creative visual arrangements.", 
    image: "/khrona-landing.png", 
    stack: iconsStack, 
    slug:"bento-grids", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 49
    },
    {
    title: "Labels", 
    desc: "Flexible label and badge components for status indicators, categories, and information display with various styles.", 
    image: "/khrona-landing.png", 
    stack: iconsStack, 
    slug:"labels", 
    longDesc: "Ciao", 
    ogImage: "", 
    price: 49
    },
]

export function getAllComponentSlugsSync(): string[] {
  return components.map(c => c.slug)
}

export async function getComponentBySlug(slug: string): Promise<ComponentType | null> {
    const comp = components.find(c => c.slug === slug) ?? null
    return comp
}
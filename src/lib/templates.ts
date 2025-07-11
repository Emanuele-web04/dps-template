import { TemplateType } from "@/types/template";
import { BiLogoTypescript, FaReact, RiNextjsFill, SiTailwindcss, TbBrandFramerMotion } from "@/utils/icons";

function rangeTo() {
    const images: string[] = [];
    for (let i = 0; i < 4; i++) {
      images.push("/placeholder.webp");
    }

    return images;
  }

// Static image arrays for each template
function getMinimalPortfolioImages() {
    return [
        "/templates/minimal-portfolio/home.webp",
        "/templates/minimal-portfolio/about.webp", 
        "/templates/minimal-portfolio/work.webp",
        "/templates/minimal-portfolio/projects.webp",
    ];
}

function getProductLandingImages() {
    return [
        "/templates/product-landing/hero.webp",
        "/templates/product-landing/cards.webp",
        "/templates/product-landing/transactions.webp",
        "/templates/product-landing/ai.webp"
    ];
}

function getAISaaSImages() {
    return [
        "/templates/ai-saas-template/hero.webp",
        "/templates/ai-saas-template/data.webp",
        "/templates/ai-saas-template/world.webp",
        "/templates/ai-saas-template/pricing.webp"
    ];
}

function getAppLandingImages() {
    return [
        "/templates/app-landing/hero.webp",
        "/templates/app-landing/features.webp",
        "/templates/app-landing/phone.webp",
        "/templates/app-landing/protection.webp"
    ];
}

export const placeholders = rangeTo();

const aiSaaSIcons = [RiNextjsFill, FaReact, SiTailwindcss, TbBrandFramerMotion, BiLogoTypescript];


export const templates: TemplateType[] = [
    {
    title: "AI SaaS Template", 
    desc: "Every AI SaaS template is a multi-page template focused on AI applications offering SaaS solutions.", 
    images: getAISaaSImages(), 
    stack: aiSaaSIcons, 
    slug:"ai-saas-template", 
    longDesc: "Ciao", 
    ogImage: "", 
    preview: "https://ai-saas-dpstemplate.vercel.app/",
    price: 39
    },
    {
    title: "Minimal Portfolio", 
    desc: "A clean and minimal portfolio template designed for creative professionals and developers to showcase their work.", 
    images: getMinimalPortfolioImages(), 
    stack: aiSaaSIcons, 
    slug:"minimal-portfolio", 
    longDesc: "Ciao", 
    ogImage: "", 
    preview: "https://minimal-portfolio-dpstemplates.vercel.app/",
    price: 35
    },
    {
    title: "Product Landing Page", 
    desc: "A conversion-focused landing page template optimized for product launches and marketing campaigns.", 
    images: getProductLandingImages(), 
    stack: aiSaaSIcons, 
    slug:"product-landing-page", 
    longDesc: "Ciao", 
    ogImage: "", 
    preview: "https://product-landing-dpstemplates.vercel.app/",
    price: 39
    },
    {
    title: "App Landing Page", 
    desc: "A modern mobile-first landing page template perfect for mobile apps and software applications.", 
    images: getAppLandingImages(), 
    stack: aiSaaSIcons, 
    slug:"app-landing-page", 
    longDesc: "A modern mobile-first landing page template perfect for mobile apps and software applications.", 
    ogImage: "", 
    preview: "https://app-landing-dpstemplate.vercel.app/",
    price: 35
    },
]

export async function getAllSlugs(): Promise<string[]> {
    return templates.map(t => t.slug)
}

export function getAllSlugsSync(): string[] {
  return templates.map(t => t.slug)
}

export async function getTemplateBySlug(slug: string): Promise<TemplateType | null> {
    const tpl = templates.find(t => t.slug === slug) ?? null
    return tpl
}
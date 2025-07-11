import { pricingComponents } from "@/lib/single-components/pricings/pricings-components";
import { notFound } from "next/navigation";
import React from "react";

// Generate static params for all pricing section component slugs
export async function generateStaticParams() {
  return pricingComponents.map((component) => ({
    slug: component.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = pricingComponents.find((c) => c.slug === slug);

  if (!component) return notFound();

  const { title, desc } = component;

  return {
    title: `${title} | Pricing Sections Preview`,
    description: `${desc} - Live preview of ${title} component.`,
    openGraph: {
      title: `${title} - Pricing Section Preview`,
      description: `${desc} - Live preview of ${title} component.`,
      type: "website",
    },
    robots: {
      index: false, // Don't index preview pages
      follow: false,
    },
  };
}

export default async function PricingPreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Find the specific pricing component by slug
  const component = pricingComponents.find((c) => c.slug === slug);

  if (!component) {
    return notFound();
  }

  // Get the real preview component (actual component) or fallback to preview (placeholder)
  const PreviewComponent = component.realPreview || component.preview;

  return (
    <div className="min-h-screen w-full">
      <PreviewComponent />
    </div>
  );
}

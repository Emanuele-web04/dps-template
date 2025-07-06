import { waitlistComponents } from "@/lib/single-components/waitlists/waitlist-components";
import { notFound } from "next/navigation";
import React from "react";

export async function generateStaticParams() {
  return waitlistComponents.map((component) => ({
    slug: component.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const component = waitlistComponents.find((c) => c.slug === slug);

  if (!component) return notFound();

  const { title, desc } = component;

  return {
    title: `${title} | Waitlist Preview`,
    description: `${desc} - Live preview of ${title} component.`,
    openGraph: {
      title: `${title} - Waitlist Preview`,
      description: `${desc} - Live preview of ${title} component.`,
      type: "website",
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function WaitlistPreviewPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const component = waitlistComponents.find((c) => c.slug === slug);

  if (!component) {
    return notFound();
  }

  const PreviewComponent = component.realPreview || component.preview;

  return (
    <div className="min-h-screen w-full">
      <PreviewComponent />
    </div>
  );
}

import TemplatePage from "@/components/templates/TemplatePage";
import { getTemplateBySlug, getAllSlugs } from "@/lib/templates";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = await getTemplateBySlug(slug);
  if (!template) return notFound();

  return {
    title: template.title + " | DP's Templates",
    description: template.desc,
    openGraph: {
      title: template.title + " | DP's Templates",
      description: template.desc,
      images: [
        {
          url: template.ogImage || template.images[0],
          width: 1200,
          height: 630,
          alt: template.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: template.title + " | DP's Templates",
      description: template.desc,
      images: [template.ogImage || template.images[0]],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = await getTemplateBySlug(slug);
  if (!template) return notFound();

  return (
    <div className="bg-clean">
      <TemplatePage {...template} />
    </div>
  );
}

import { getComponentBySlug } from "@/lib/components";
import SubComponentLayout from "@/components/shared/SubComponentLayout";
import { notFound } from "next/navigation";
import { ComponentType } from "@/types/component";

export default async function WaitlistsPage() {
  const component: ComponentType | null = await getComponentBySlug("waitlists");

  if (!component) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-y-12">
      {component.components?.map((c, i) => (
        <SubComponentLayout
          key={i}
          title={c.title}
          desc={c.desc}
          slug={c.slug}
          preview={c.preview}
          code={c.code}
        />
      ))}
    </div>
  );
}

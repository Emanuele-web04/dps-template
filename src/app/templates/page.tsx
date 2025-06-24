import HeroGridTemplateSection from "@/components/showcase/HeroGridTemplateSection";
import { templates } from "@/lib/templates";
import ShowcaseTemplate from "@/components/showcase/ShowcaseTemplate";
import DropdownMobile from "@/components/showcase/DropdownMobile";
import Aside from "@/components/shared/Aside";

const Page = () => {
  return (
    <div className="">
      <div className="max-w-7xl flex flex-col mx-auto">
        <HeroGridTemplateSection
          title={"Templates"}
          text={
            "Modern and minimalist templates for building your next product. Built with React, Next.js, Tailwind CSS, Framer Motion and TypeScript."
          }
        >
          <DropdownMobile />
        </HeroGridTemplateSection>

        <div className="max-w-7xl px-6 sm:px-12 grid md:mt-0 mt-8 items-start lg:grid-cols-12">
          {/* Sidebar */}
          <Aside />

          {/* Main content */}
          <div className="col-span-1 lg:col-span-10 flex flex-col gap-y-12">
            {templates.map((t, i) => (
              <ShowcaseTemplate key={i} {...t} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

import HeroGridTemplateSection from "@/components/HeroGridTemplateSection";
import { templates } from "@/lib/templates";
import Link from "next/link";
import ShowcaseTemplate from "@/components/ShowcaseTemplate";
import { LuChevronDown } from "@/utils/icons";
import DropdownMobile from "@/components/DropdownMobile";
const Page = () => {
  return (
    <div className="bg-clean min-h-screen w-full">
      <div className="max-w-7xl flex flex-col mx-auto">
        <HeroGridTemplateSection>
          <DropdownMobile />
        </HeroGridTemplateSection>

        <div className="max-w-7xl grid items-start lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="col-span-2 top-20 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] shrink-0 lg:sticky lg:block lg:self-start">
            <div className="flex flex-col gap-3 relative overflow-hidden h-full py-0 pr-6 lg:py-0">
              <strong className="text-lg text-primary font-semibold">
                Templates
              </strong>
              {templates.map((t, i) => (
                <Link key={i} href={`/templates/${t.slug}`}>
                  <p className="aside-text font-normal! cursor-pointer ml-0 transition-all hover:ml-2 hover:text-black dark:hover:text-white dark:text-neutral-300 text-neutral-800">
                    {t.title}
                  </p>
                </Link>
              ))}
            </div>
          </aside>

          {/* Main content */}
          <div className="col-span-1 md:mt-0 mt-8 lg:col-span-10 flex flex-col px-6 sm:px-12 gap-y-12">
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

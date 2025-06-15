import HeroGridTemplateSection from "@/components/HeroGridTemplateSection";
import { templates } from "@/lib/templates";
import ShowcaseTemplate from "@/components/ShowcaseTemplate";
import DropdownMobile from "@/components/DropdownMobile";
import Aside from "@/components/Aside";
import { components } from "@/lib/components";
import Link from "next/link";
import ShowcaseComponent from "@/components/ShowcaseComponent";
import DropdownMobileComponent from "@/components/DropdownMobileComponent";

const Page = () => {
  return (
    <div className="">
      <div className="max-w-7xl flex flex-col mx-auto">
        <HeroGridTemplateSection
          title={"Components Pack"}
          text={
            "Browse from our ever growing collection of components that helps your website stand out."
          }
        >
          <DropdownMobileComponent />
        </HeroGridTemplateSection>

        <div className="max-w-7xl px-6 sm:px-12 grid mt-8 items-start lg:grid-cols-11">
          {/* Sidebar */}
          <Aside />
          {/* Main content */}
          <div className="col-span-1 lg:col-span-9 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((c, i) => (
              <ShowcaseComponent key={i} {...c} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

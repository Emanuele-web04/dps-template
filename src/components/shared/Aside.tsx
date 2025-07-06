import React from "react";
import AsideText from "@/components/ui/aside-text";
import { components } from "@/lib/components";
import { templates } from "@/lib/templates";

const Aside = () => {
  return (
    <aside className="col-span-2 top-23 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] shrink-0 lg:sticky lg:block lg:self-start">
      <div className="flex mt-5 flex-1 flex-col gap-3 relative overflow-hidden h-full py-0 pr-6 lg:py-0">
        <AsideText array={templates} title={"Templates"} type="template" />
        <AsideText
          array={components}
          title={"Components Pack"}
          type="component"
        />
      </div>
    </aside>
  );
};

export default Aside;

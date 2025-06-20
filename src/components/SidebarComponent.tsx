"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { SingleComponent } from "@/types/component";

type SidebarProps = {
  components: SingleComponent[];
};

export default function SidebarComponent({ components }: SidebarProps) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible entry
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.reduce((prev, current) =>
            current.intersectionRatio > prev.intersectionRatio ? current : prev
          );
          const id = mostVisible.target.getAttribute("id");
          if (id) {
            setActive(id);
          }
        }
      },
      {
        rootMargin: "-50% 0px -40% 0px",
        threshold: [0, 0.0, 0.0, 0],
      }
    );

    // Add a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      document.querySelectorAll("section[id]").forEach((section) => {
        observer.observe(section);
      });
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = (id: string) => {
    setActive(id);
  };

  return (
    <div className="sticky top-25 self-start hidden h-[calc(100vh-121px)] md:w-[240px] lg:w-[284px] md:flex md:shrink-0 md:flex-col md:justify-between">
      <div className="overflow-hidden relative">
        <div className="styled-scrollbar flex h-[calc(100vh-260px)] flex-col overflow-y-scroll pb-4 pr-2 dark:text-white">
          <div className="flex flex-col space-y-4">
            <p className="font-semibold">Getting Started</p>
            <Link
              href="#installation"
              onClick={() => handleLinkClick("installation")}
              data-active={active === "installation" ? true : undefined}
              className="sidebar-text"
            >
              Installation
            </Link>
            {components.map((c, i) => (
              <Link
                key={i}
                href={`#${c.slug}`}
                onClick={() => handleLinkClick(`${c.slug}`)}
                data-active={active === `${c.slug}` ? true : undefined}
                className="sidebar-text"
              >
                {c.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

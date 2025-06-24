import { cn } from "@/lib/cn";
import clsx from "clsx";
import Dots from "../ui/dots";

const features = [
  {
    title: "Built with Next.js, Tailwind & Framer Motion",
    description:
      "A well-structured template that's super easy to customize and play with.",
  },
  {
    title: "Modern, Minimal & Clean Design",
    description:
      "Tasteful microinteractions keep your users engaged without clutter.",
  },
  {
    title: "SEO Optimized",
    description:
      "Optimized for search engines with a focus on SEO best practices.",
  },
  {
    title: "Mobile Responsive",
    description: "Ensures optimal viewing across all devices and screen sizes.",
  },
  {
    title: "TypeScript",
    description:
      "Built with TypeScript for type-safety and autocompletion everywhere.",
  },
  {
    title: "Easy to Deploy & Customize",
    description:
      "Deploy to Vercel, Netlify, or your favorite host in one click.",
  },
];

export default function FeaturesSection() {
  const cols = 2;
  const rows = Math.ceil(features.length / cols);

  return (
    <div className="flex lg:flex-row flex-col items-start mt-20 justify-between w-full">
      <h3 className="h3-title text-3xl! text-primary">Features</h3>
      <div className="relative w-full md:w-fit mt-6 lg:mt-0">
        <Dots />
        <div
          className="
            grid grid-cols-1 md:grid-cols-2
            divide-x divide-y divide-dashed
            dark:divide-neutral-600 divide-neutral-200
            border-l border-t border-dashed
            dark:border-neutral-600 border-neutral-200
          "
        >
          {features.map((feat, idx) => {
            const isRightEdge = idx % cols === cols - 1;
            const isBottomEdge = idx >= (rows - 1) * cols;

            return (
              <div
                key={idx}
                className={cn(
                  "flex p-4 flex-col items-start justify-start text-left",
                  {
                    "border-r border-dashed dark:border-neutral-600 border-neutral-200":
                      isRightEdge,
                    "border-b border-dashed dark:border-neutral-600 border-neutral-200":
                      isBottomEdge,
                  }
                )}
              >
                <h3 className="h6-title text-primary text-lg!">{feat.title}</h3>
                <p className="p-card text-left!">{feat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

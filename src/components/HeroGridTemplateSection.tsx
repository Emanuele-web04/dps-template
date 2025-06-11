import SquareGrid from "./ui/square-grid";

const HeroGridTemplateSection = () => {
  return (
    <div className="square-grid">
      <SquareGrid />
      {/* Content */}
      <div className="relative z-20">
        <h1 className="title-font grid-title text-center!">
          Templates
        </h1>
        <p className="my-6 text-sm md:text-lg text-center font-normal text-neutral-600 dark:text-neutral-300 mx-auto max-w-3xl leading-relaxed">
          Modern and minimalist templates for building your next product. Built
          with React, Next.js, Tailwind CSS, Framer Motion and TypeScript.
        </p>
        {/* Optional CTA buttons */}
      </div>
    </div>
  );
};

export default HeroGridTemplateSection;

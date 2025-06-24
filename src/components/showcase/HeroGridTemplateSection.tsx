import SquareGrid from "../ui/square-grid";

const HeroGridTemplateSection = ({
  title,
  text,
  children,
}: {
  title: string;
  text: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="square-grid">
      <SquareGrid />
      {/* Content */}
      <div className="relative z-20">
        <h1 className="title-font grid-title text-center!">{title}</h1>
        <p className="my-6 font-inter tracking-tight text-sm md:text-lg text-center font-normal text-neutral-600 dark:text-neutral-300 mx-auto max-w-3xl leading-relaxed">
          {text}
        </p>
        {/* Optional CTA buttons */}
        <div className="w-full flex justify-center text-center">{children}</div>
      </div>
    </div>
  );
};

export default HeroGridTemplateSection;

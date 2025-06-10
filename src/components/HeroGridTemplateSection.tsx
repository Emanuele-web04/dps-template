const HeroGridTemplateSection = () => {
  const gridSize = 50; // 20x20 grid = 400 squares
  const indices = Array.from({ length: gridSize * gridSize }, (_, i) => i);

  return (
    <div className="relative mt-25 h-full mx-auto w-full overflow-hidden px-4 pt-10 pb-4 sm:px-6 md:pt-10 md:pb-20 lg:px-8">
      <div
        className="absolute inset-0 max-w-7xl mx-auto pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 80%)",
        }}
      >
        <div
          className="absolute w-screen inset-0 bg-gray-200 dark:bg-neutral-700"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${gridSize}, 40px)`,
            gridTemplateRows: `repeat(${gridSize}, 40px)`,
            gap: "1px",
            justifyContent: "center",
            alignContent: "center",
            transform: "scale(1.05)",
          }}
        >
          {indices.map((i) => {
            const hasshadow = i % 2 === 0;
            return (
              <div
                key={i}
                className={`w-10 h-10 rounded-[1px] bg-gray-100 dark:bg-neutral-800 ${
                  hasshadow
                    ? "shadow-[0px_0px_0px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_0px_3px_rgba(0,0,0,0.2)_inset]"
                    : ""
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20">
        <h1 className="mx-auto title max-w-5xl text-center tracking-tight font-medium bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-800 bg-clip-text text-transparent dark:from-neutral-200 dark:via-neutral-100 dark:to-white text-3xl md:text-5xl lg:text-5xl md:leading-tight pt-4">
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

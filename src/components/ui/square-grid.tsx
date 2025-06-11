import React from "react";

const SquareGrid = () => {
  const gridSize = 50; // 20x20 grid = 400 squares
  const indices = Array.from({ length: gridSize * gridSize }, (_, i) => i);

  return (
    <div
      className="absolute inset-0 max-w-8xl mx-auto pointer-events-none"
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
  );
};

export default SquareGrid;

import { TbHammer } from "react-icons/tb";

export const HammerAnimation = () => {
  return (
    <div className="flex items-center justify-center">
      <TbHammer
        className="text-7xl md:text-8xl text-violet-600"
        style={{
          animation: "hammerBuild 1.5s ease-in-out infinite",
          transformOrigin: "bottom left",
        }}
      />
    </div>
  );
};
import React from "react";
import { componentPacks } from "@/lib/features";

const ComponentsPack = () => {
  const { icon, title, description } = componentPacks;

  // Separiamo l'icona centrale dalle altre 4
  const [CenterIcon, ...ringIcons] = icon;

  // Calcola le posizioni degli angoli per un cerchio perfetto
  // Partendo da -90° (top) e distribuendo uniformemente
  const getCircularPosition = (index: number, total: number, radius = 70) => {
    const angle = ((index * 360) / total - 90) * (Math.PI / 180); // Converte in radianti
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return {
      transform: `translate(${x}px, ${y}px)`,
    };
  };

  return (
    <div className="col-span-12 md:col-span-5 p-8 flex flex-col justify-between items-center min-h-80 card-component group cursor-pointer hover:translate-y-[-3px] hover:shadow-xl hover:shadow-black/10 hover:bg-gradient-to-r hover:from-neutral-100 hover:to-neutral-200 dark:hover:from-neutral-800 dark:hover:to-neutral-900 transition-all duration-300 ease-out">
      {/* Contenitore per icone in cerchio */}
      <div className="relative w-40 h-40 mt-4 flex items-center justify-center">
        {/* Cerchio di sfondo sottile */}
        <div className="absolute inset-0 rounded-full border border-neutral-300/70 dark:border-neutral-700/30 group-hover:border-neutral-600/50 transition-colors duration-300"></div>

        {/* Icona centrale con effetto glow */}
        <div className="relative z-10">
          <div className="rounded-icon group-hover:scale-110 group-hover:shadow-md transition-all duration-300 ease-out">
            <CenterIcon className="w-10 h-10 text-black dark:text-white transition-colors duration-300" />
          </div>
        </div>

        {/* Icone intorno in posizioni circolari */}
        {ringIcons.map((IconComponent, idx) => (
          <div
            key={idx}
            className="absolute z-10 transition-all duration-300 group-hover:scale-110"
            style={getCircularPosition(idx, ringIcons.length)}
          >
            <div className="rounded-icon group-hover:shadow-md transition-all duration-300 ease-out">
              <IconComponent className="w-5 h-5 text-black dark:text-white transition-colors duration-300" />
            </div>
          </div>
        ))}

        {/* Linee di connessione sottili (opzionali) */}
        {ringIcons.map((_, idx) => {
          const angle = ((idx * 360) / ringIcons.length - 90) * (Math.PI / 180);
          const x = Math.cos(angle) * 35;
          const y = Math.sin(angle) * 35;
          return (
            <div
              key={`line-${idx}`}
              className="absolute w-px h-8 bg-gradient-to-t from-neutral-600/40 to-transparent origin-bottom group-hover:from-neutral-500/60 transition-colors duration-300"
              style={{
                transform: `translate(${x}px, ${y}px) rotate(${(idx * 360) / ringIcons.length - 90}deg)`,
              }}
            />
          );
        })}
      </div>

      {/* Titolo e descrizione */}
      <div className="flex flex-col items-center mt-8">
        <h6 className="h6-title transition-colors duration-200">{title}</h6>
        <p className="p-card transition-colors duration-200">{description}</p>
      </div>
    </div>
  );
};

export default ComponentsPack;

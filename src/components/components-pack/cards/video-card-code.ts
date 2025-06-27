export const videoCardCode = `"use client";

import Image from "next/image";
import { people } from "@/lib/images";

const VideoCard = () => {
  // Using the first person from the people array
  const person = people[0];

  return (
    <div className="relative w-full max-w-sm mx-auto h-[480px] rounded-3xl overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        alt="City skyline at night"
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-6">
        {/* Author Info - Top */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20">
            <Image
              src={person.src}
              alt={person.name}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-white font-medium text-sm">
              Manu Arora
            </h3>
            <p className="text-white/70 text-sm">
              2 min read
            </p>
          </div>
        </div>

        {/* Title and Description - Bottom */}
        <div className="space-y-4">
          <h1 className="text-white text-4xl font-bold leading-tight">
            Author Card
          </h1>
          <p className="text-white/80 text-base leading-relaxed">
            Card with Author avatar, complete name and time to read - most suitable for blogs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;`.trim(); 
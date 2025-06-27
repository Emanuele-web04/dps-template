"use client";

import Image from "next/image";
import { people } from "@/lib/images";

const VideoCard = () => {
  // Using the first person from the people array
  const person = people[3];

  return (
    <div className="relative w-2xs mx-auto h-[480px] rounded-3xl overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        alt="City skyline at night"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between">
        {/* Author Info - Top */}
        <div className="flex items-center bg-gradient-to-b from-black/70 to-transparent p-4 gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={person.src}
              alt={person.name}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div className="-space-y-0.5">
            <h3 className="text-white font-medium text-sm">John Doe</h3>
            <p className="text-white/70 text-xxs">2 min ago</p>
          </div>
        </div>

        {/* Title and Description - Bottom */}
        <div className="space-y-1 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h1 className="text-white text-sm font-bold leading-tight">
            Fun Fact about New York
          </h1>
          <p className="text-white/80 text-xs">
            Explore the hidden gems of New York City. <br /> #NewYork
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

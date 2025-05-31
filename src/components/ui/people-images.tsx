"use client";

import { images } from "@/lib/images";
import React from "react";
import Image from "next/image";
const ImagesPeople = () => {
  return (
    <div>
      <div className="flex -space-x-3">
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Image ${i + 1}`}
            width={60}
            height={60}
            objectFit="true"
            className="rounded-full ring-2 ring-white w-12 h-12 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesPeople;

"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2 p-1 md:p-2 rounded-3xl bg-neutral-200 dark:bg-neutral-800">
      {images.map((img, i) => (
        <div
          key={i}
          className={cn(
            "w-full h-full ring-1 shadow-lg dark:ring-neutral-600 ring-neutral-200 rounded-3xl col-span-1 overflow-hidden"
          )}
        >
          <Image
            className="w-full h-full object-contain"
            src={img}
            alt={`${title} screenshot ${i + 1}`}
            width={1000}
            height={1000}
            priority={i === 0}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import ImageViewer from "./ImageViewer";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImageViewer = (index: number) => {
    setCurrentImageIndex(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  const navigateToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      {/* Images Grid with Click Handlers */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2 p-1 md:p-2 rounded-3xl bg-neutral-200 dark:bg-neutral-800">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => openImageViewer(i)}
            className={cn(
              "w-full h-full ring-1 shadow-lg dark:ring-neutral-600 ring-neutral-200 rounded-3xl col-span-1 overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            )}
          >
            <Image
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              src={img}
              alt={`${title} screenshot ${i + 1}`}
              width={1000}
              height={1000}
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </button>
        ))}
      </div>

      {/* Image Viewer Modal */}
      <ImageViewer
        images={images}
        currentIndex={currentImageIndex}
        isOpen={isViewerOpen}
        onClose={closeImageViewer}
        onNavigate={navigateToImage}
      />
    </>
  );
};

export default ImageGallery;

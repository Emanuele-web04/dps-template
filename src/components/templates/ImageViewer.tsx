"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { TbX, TbChevronLeft, TbChevronRight } from "react-icons/tb";
import { cn } from "@/lib/cn";

interface ImageViewerProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          e.preventDefault();
          onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
          break;
        case "ArrowRight":
          e.preventDefault();
          onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const goToPrevious = () => {
    onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
  };

  const goToNext = () => {
    onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
  };

  return (
    <div className="fixed inset-0 overflow-hidden z-100000 flex w-screen mx-auto left-1/2 -translate-x-1/2 items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 min-w-screen h-screen bg-white/90 dark:bg-black/100 backdrop-blur-xs"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative top-1/12 md:top-1/20 h-full z-10 max-w-7xl w-full mx-4 m-0">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 dark:text-white text-black pt-4 sm:pt-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">
              {currentIndex + 1} of {images.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close image viewer"
          >
            <TbX size={24} />
          </button>
        </div>

        {/* Image Container */}
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 z-10 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
            aria-label="Previous image"
          >
            <TbChevronLeft size={24} />
          </button>

          {/* Main Image */}
          <div className="relative bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-2xl mx-auto">
            <Image
              src={images[currentIndex]}
              alt={`Template screenshot ${currentIndex + 1}`}
              width={1200}
              height={800}
              className="w-auto h-auto max-h-[70vh] object-contain"
              priority
            />
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 z-10 p-3 bg-black/50 hover:bg-black/70 text-white  rounded-full transition-colors"
            aria-label="Next image"
          >
            <TbChevronRight size={24} />
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => onNavigate(index)}
              className={cn(
                "relative w-16 h-12 rounded-lg overflow-hidden ring-2 transition-all",
                index === currentIndex
                  ? "ring-white"
                  : "ring-transparent hover:ring-white/50"
              )}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
              {index === currentIndex && (
                <div className="absolute inset-0 bg-white/20" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;

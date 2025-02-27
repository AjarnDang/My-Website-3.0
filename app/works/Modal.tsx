/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { X } from "lucide-react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import Image from "next/image";

// Skeleton Loader Component
const SkeletonLoader: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md ${className}`} />
);

const Modal: React.FC<{
  show: boolean;
  onClose: () => void;
  imgGallery: string[];
}> = ({ show, onClose, imgGallery }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [loadingImages, setLoadingImages] = useState<boolean[]>(imgGallery.map(() => true));

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 animate-fadeIn">
      {/* Modal Content */}
      <div className="relative w-4/5 max-w-3xl bg-neutral-100 dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
        {/* Close Button */}
        <div className="mb-8">
        <button className="absolute top-4 right-4 hover:opacity-70" onClick={onClose}>
          <X size={24} strokeWidth={3} />
        </button>
        </div>

        {/* Main Image Gallery */}
        <Swiper
          pagination={{ type: "fraction" }}
          spaceBetween={10}
          navigation={false}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Pagination, Thumbs]}
          className="relative"
        >
          {imgGallery.map((img, index) => (
            <SwiperSlide key={index}>
              {/* Show skeleton while loading */}
              {loadingImages[index] && <SkeletonLoader className="max-h-[400px] min-h-full w-full" />}
              
              <Image
                src={img}
                className={`max-h-[400px] min-h-full w-full object-contain object-center rounded-md border border-gray-400 dark:border-gray-200 transition-opacity duration-300 ${
                  loadingImages[index] ? "opacity-20" : "opacity-100"
                }`}
                alt={`Slide ${index + 1}`}
                onLoad={() => {
                  setLoadingImages((prev) => {
                    const updated = [...prev];
                    updated[index] = false;
                    return updated;
                  });
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail Navigation */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mt-4"
        >
          {imgGallery.map((img, index) => (
            <SwiperSlide key={index} className="cursor-pointer">
              {/* Show skeleton while loading */}
              {loadingImages[index] && <SkeletonLoader className="w-full max-h-24" />}
              
              <Image
                src={img}
                className={`w-full max-h-24 object-cover rounded-md border border-gray-400 dark:border-gray-200 transition-opacity duration-300 ${
                  loadingImages[index] ? "opacity-20" : "opacity-100"
                }`}
                alt={`Thumb ${index + 1}`}
                onLoad={() => {
                  setLoadingImages((prev) => {
                    const updated = [...prev];
                    updated[index] = false;
                    return updated;
                  });
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Modal;
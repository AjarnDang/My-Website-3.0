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
  <div
    className={`bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md ${className}`}
  />
);

const Modal: React.FC<{
  show: boolean;
  onClose: () => void;
  imgGallery: string[];
}> = ({ show, onClose, imgGallery }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [loadingImages, setLoadingImages] = useState<boolean[]>(
    imgGallery.map(() => true)
  );

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50 animate-fadeIn">
      {/* Modal Content */}
      <div className="relative w-full h-screen md:w-full md:h-screen lg:w-3/5 lg:max-h-[80vh] bg-neutral-100 dark:bg-neutral-800 shadow-lg p-6 md:rounded-none lg:rounded-2xl overflow-auto">
        {/* Close Button */}
        <div className="mb-4 flex justify-end">
          <button
            className="hover:opacity-70"
            onClick={onClose}
            aria-label="Close Modal"
          >
            <X size={24} strokeWidth={3} />
          </button>
        </div>

        {/* Main Image Gallery */}
        <div className="flex-1 flex flex-col">
          <div className="relative flex-1">
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
                  {loadingImages[index] && (
                    <div className="w-full h-full bg-gray-300 dark:bg-gray-700 animate-pulse" />
                  )}

                  <Image
                    src={img}
                    className={`max-h-full h-[50vh] lg:min-h-full min-h-[70vh] w-full object-contain object-center rounded-md border border-gray-400 dark:border-gray-200 transition-opacity duration-300 ${
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
          </div>
          {/* Thumbnail Navigation */}
          <div>
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
                  {loadingImages[index] && (
                    <div className="w-full max-h-24 bg-gray-300 dark:bg-gray-700 animate-pulse" />
                  )}

                  <Image
                    src={img}
                    className={`w-full max-h-24 h-24 object-cover rounded-md border border-gray-400 dark:border-gray-200 transition-opacity duration-300 ${
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
      </div>
    </div>
  );
};

export default Modal;

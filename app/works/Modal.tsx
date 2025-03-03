"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { X } from "lucide-react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const Modal: React.FC<{
  show: boolean;
  onClose: () => void;
  imgGallery: string[];
}> = ({ show, onClose, imgGallery }) => {
  const [loadingImages, setLoadingImages] = useState<boolean[]>(
    imgGallery.map(() => true)
  );
  const [disableNavigation, setDisableNavigation] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setDisableNavigation(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Disable scrolling when modal is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50 animate-fadeIn">
      {/* Modal Content */}
      <div className="relative w-full h-screen md:w-4/5 md:h-5/6 lg:w-3/5 lg:max-h-[85vh] bg-neutral-100 dark:bg-neutral-800 shadow-lg p-6 md:rounded-lg overflow-hidden flex flex-col">
        {/* Close Button */}
        <div className="absolute top-10 right-4">
          <button
            className="hover:opacity-70 p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
            onClick={onClose}
            aria-label="Close Modal"
          >
            <X size={24} strokeWidth={3} />
          </button>
        </div>

        {/* Main Image Gallery */}
        <div className="flex-1 flex items-center justify-center">
          <Swiper
            pagination={{ type: "fraction" }}
            spaceBetween={10}
            navigation={!disableNavigation}
            modules={[FreeMode, Navigation, Pagination]}
            className="relative w-full"
          >
            {imgGallery.map((img, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                {loadingImages[index] && (
                  <div className="w-full h-full bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md" />
                )}

                <Image
                  src={img}
                  width={800}
                  height={600}
                  className={`w-auto h-auto max-w-full max-h-[70vh] object-contain rounded-md border border-gray-400 dark:border-gray-200 transition-opacity duration-300 ${
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
      </div>
    </div>
  );
};

export default Modal;

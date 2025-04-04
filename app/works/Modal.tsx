"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { X } from "lucide-react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import type { Swiper as SwiperType } from 'swiper';

const Modal: React.FC<{
  show: boolean;
  onClose: () => void;
  imgGallery: string[];
}> = ({ show, onClose, imgGallery }) => {
  const [loadingImages, setLoadingImages] = useState<boolean[]>(
    imgGallery.map(() => true)
  );
  const [disableNavigation, setDisableNavigation] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // ทำการโหลดรูปภาพล่วงหน้าเมื่อเปิด Modal
  useEffect(() => {
    if (show) {
      // โหลดรูปภาพทั้งหมดใน Gallery ล่วงหน้า
      imgGallery.forEach((imgUrl, index) => {
        const img = new window.Image();
        img.src = imgUrl;
        img.onload = () => {
          setLoadingImages(prev => {
            const newLoading = [...prev];
            newLoading[index] = false;
            return newLoading;
          });
        };
      });
    }
  }, [show, imgGallery]);

  // การตรวจสอบขนาดหน้าจอเพื่อกำหนดการนำทาง
  useEffect(() => {
    const handleResize = () => {
      setDisableNavigation(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ปิดการเลื่อนหน้าจอเมื่อเปิด Modal
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

  // ฟังก์ชันสำหรับจัดการการโหลดรูปภาพแต่ละรูป
  const handleImageLoad = useCallback((index: number) => {
    setLoadingImages(prev => {
      const updated = [...prev];
      updated[index] = false;
      return updated;
    });
  }, []);

  // กำหนดค่าเมื่อ Slide มีการเปลี่ยนแปลง เพื่อให้สามารถโหลดรูปภาพที่จะแสดงถัดไปล่วงหน้า
  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentImgIndex(swiper.activeIndex);
    
    // ถ้ามีภาพถัดไป ให้เตรียมโหลดล่วงหน้า
    const nextIndex = swiper.activeIndex + 1;
    if (nextIndex < imgGallery.length) {
      const nextImg = new window.Image();
      nextImg.src = imgGallery[nextIndex];
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50 animate-fadeIn">
      {/* Modal Content */}
      <div className="relative w-full h-screen md:w-4/5 md:h-5/6 lg:w-3/5 lg:max-h-[85vh] bg-neutral-100 dark:bg-neutral-800 shadow-lg p-6 md:rounded-lg overflow-hidden flex flex-col">
        {/* Close Button */}
        <div className="absolute md:top-4 top-12 right-4 z-50">
          <button
            className="hover:opacity-70 p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
            onClick={onClose}
            aria-label="Close Modal"
          >
            <X size={24} strokeWidth={3} />
          </button>
        </div>

        {/* แสดงเลขหน้า (custom pagination) */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-full z-40">
          <span className="text-sm font-medium">
            {currentImgIndex + 1} / {imgGallery.length}
          </span>
        </div>

        {/* Main Image Gallery */}
        <div className="flex-1 flex items-center justify-center">
          <Swiper
            pagination={false} // ปิดการแสดงผล pagination เริ่มต้นของ Swiper
            spaceBetween={10}
            navigation={!disableNavigation}
            modules={[FreeMode, Navigation, Pagination]}
            className="relative w-full"
            onSlideChange={handleSlideChange}
            initialSlide={0}
          >
            {imgGallery.map((img, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                {/* Skeleton loader */}
                {loadingImages[index] && (
                  <div className="w-full h-[70vh] bg-gray-300 dark:bg-gray-700 animate-pulse rounded-md flex items-center justify-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Loading...</div>
                  </div>
                )}

                <Image
                  src={img}
                  width={800}
                  height={600}
                  className={`w-auto h-auto max-w-full max-h-[70vh] object-contain rounded-md border border-gray-400 dark:border-gray-200 transition-opacity duration-300 ${
                    loadingImages[index] ? "opacity-0" : "opacity-100"
                  }`}
                  alt={`Image ${index + 1}`}
                  priority={index === 0 || index === currentImgIndex || index === currentImgIndex + 1}
                  onLoad={() => handleImageLoad(index)}
                  onLoadingComplete={() => handleImageLoad(index)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* CSS สำหรับซ่อน pagination เริ่มต้นของ Swiper */}
      <style jsx global>{`
        .swiper-pagination {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default Modal;

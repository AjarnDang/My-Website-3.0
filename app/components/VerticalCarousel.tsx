"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const VerticalCarousel: React.FC = () => {
  const horizontalSwiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="overflow-hidden">
      {/* Vertical Swiper */}
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{ clickable: true }}
        modules={[Mousewheel, Pagination]}
        className="h-[85vh] w-full "
      >
        {/* Section 1 */}
        <SwiperSlide className="bg-transparent p-5">
          <div>
            <h1 className="font-extrabold lg:text-5xl">
              {" "}
              Hi, Im Thornthan Jomtharak
            </h1>
          </div>
        </SwiperSlide>

        {/* Section 2 - Horizontal Carousel */}
        <SwiperSlide className="flex flex-col items-center justify-center text-2xl p-5">
          <h2 className="mb-4">Horizontal Carousel</h2>
          <div className="w-4/5">
            <Swiper
              onSwiper={(swiper) => (horizontalSwiperRef.current = swiper)}
              direction="horizontal"
              slidesPerView={1}
              spaceBetween={20}
              pagination={{ clickable: true }}
              className="h-60"
            >
              <SwiperSlide className="flex items-center justify-center text-lg">
                Slide A
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center text-lg">
                Slide B
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center text-lg">
                Slide C
              </SwiperSlide>
            </Swiper>
          </div>
        </SwiperSlide>

        {/* Section 3 */}
        <SwiperSlide className="flex items-center justify-center text-2xl p-5">
          Section 3
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default VerticalCarousel;

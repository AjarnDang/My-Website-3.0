"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import About from "./About";
import Experiences from "./Experiences";

const VerticalCarousel: React.FC = () => {
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
        className="h-screen w-full "
      >
        {/* Section 1 */}
        <SwiperSlide className="bg-transparent">
          <About />
        </SwiperSlide>

        {/* Section 2 - Horizontal Carousel */}
        <SwiperSlide className="flex flex-col items-center justify-center text-2xl p-5">
          <Experiences />
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

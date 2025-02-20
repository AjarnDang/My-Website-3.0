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
        <SwiperSlide className="bg-transparent px-32 py-32">
          <div className="lg:flex h-full">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
              <div>
                <h1 className="font-extrabold lg:text-5xl mb-4">
                  Thornthan Jomtharak
                </h1>
                <h4 className="font-bold lg:text-xl mb-4">Experienced Web developer <br />& UX/UI Designer</h4>
                <p className="mb-4 leading-6">
                I craft digital experiences at the intersection of UX/UI,
                Web3, and technology.
                </p>
              </div>
              <div>
                <p className="mb-4 leading-6">
                Hey, Thornthan’s here! I’m a Web developer and UX/UI Designer who
                always inspired and freshed.
                </p>
                <p className="mb-4 leading-6">
                  With a background in Information Technology and more than two
                  years of industry experience, I specialize in designing and
                  building functional, modern, and intuitive interfaces.
                  Currently, I work full-time as a UX/UI Designer, where I bring
                  ideas to life through Next.js, TypeScript, and Framer.
                </p>
                <p className="mb-4 leading-6">
                  Beyond design, I’m always exploring Web3 technologies,
                  experimenting with decentralized applications (dApps),
                  blockchain UX, and digital ownership. I believe in the future
                  of seamless, user-friendly decentralized ecosystems, and I’m
                  on a mission to make them more accessible.
                </p>
              </div>
            </div>
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

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styled from "styled-components";
import { X } from "lucide-react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import Image from "next/image";

// Styled components
const ModalWrapper = styled.div<{ $show: boolean }>` // Changed 'show' to '$show' to avoid passing it to the DOM
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${({ $show }) => ($show ? "flex" : "none")}; // Use '$show' instead of 'show'
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  animation: ${({ $show }) => ($show ? "fadeIn 0.5s" : "fadeOut 0.5s")};

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;

const ModalContent = styled.div`
  position: relative;
  padding: 1.5rem;
  width: 80%;
  max-width: 800px;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Modal: React.FC<{
  show: boolean;
  onClose: () => void;
  imgGallery: string[];
}> = ({ show, onClose, imgGallery }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null); // Fixed typing issue

  return (
    <ModalWrapper $show={show}> {/* Changed 'show' to '$show' to avoid DOM warning */}
      <ModalContent className="dark:bg-neutral-800 bg-neutral-100">
        <div className="mb-8">
          <CloseButton onClick={onClose}>
            <X size={24} strokeWidth={3} />
          </CloseButton>
        </div>

        {/* Main Image Gallery */}
        <Swiper
          pagination={{ type: "fraction" }}
          spaceBetween={10}
          navigation={false}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Pagination, Thumbs]}
          className="mySwiper2 relative"
        >
          {imgGallery.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={img}
                className="max-h-[400px] min-h-full w-full object-contain object-center rounded-md border dark:border-gray-200 border-gray-400"
                alt={`Slide ${index + 1}`}
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
          className="mySwiper mt-4"
        >
          {imgGallery.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={img}
                className="w-full max-h-24 object-cover rounded-md border dark:border-gray-200 border-gray-400"
                alt={`Thumb ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
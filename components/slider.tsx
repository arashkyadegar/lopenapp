
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import React from "react";
import { getDefaultImageAvator } from "@/utility/imageUtility";

export default function SliderComponent({ props }: any) {
  const images = props;

  return (
    <div className="w-full order-1  sm:order-2 col-span-3 relative ">
      <Swiper
        className=" shadow-md shadow-gray-500 w-full h-80"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={true}
        loop={true}
        navigation={true}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
        onNavigationNext={() => {}}
        onNavigationPrev={() => {}}
      >
        {images.map((image: any) => (
                  <SwiperSlide key={image}>
                  <img
                    src={getDefaultImageAvator(image)} 
                    width={500}
                    height={500}
                    className="w-full h-full aspect-auto"
                    alt="user avator"
                    crossOrigin = "anonymous"
                              />
                </SwiperSlide>

        ))}

      </Swiper>
    </div>
  );
}

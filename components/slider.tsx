import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import React from "react";
import { getDefaultImageAvator } from "@/utility/imageUtility";

export default function SliderComponent({ props }: any) {
  const images = props;

  return (
    <div className="w-full order-1  sm:order-2 col-span-3 relative ">
      <Swiper
        className="rounded-lg w-full h-80"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay,EffectFade]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={true}
        loop={true}
        effect="fade"
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
              className="w-full h-full aspect-video rounded-lg "
              alt="lopencandy"
              crossOrigin="anonymous"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

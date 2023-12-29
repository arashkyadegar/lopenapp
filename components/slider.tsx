import { PropsWithChildren } from "react";
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
import Image from "next/image";
import React from "react";

export default function SliderComponent({ props }: any) {
  return (
    <div className="w-full order-1  sm:order-2 col-span-3 relative ">
      <Swiper
        className=" shadow-md shadow-gray-500 "
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={true}
        loop={true}
        navigation={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        onNavigationNext={() => {}}
        onNavigationPrev={() => {}}
      >
        <SwiperSlide>
          <Image
            src="/slider (5).jpg"
            width={500}
            height={500}
            className="w-full h-full aspect-auto"
            alt="user avator"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slider (6).jpg"
            width={500}
            height={500}
            className="w-full  h-full  aspect-auto"
            alt="user avator"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <Image
            src="/slider (7).jpg"
            width={500}
            height={500}
            className="w-full h-full   aspect-auto"
            alt="user avator"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

import Image from "next/image";
import { Inter } from "next/font/google";
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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="p-5 ">
      <Swiper
        className="h-72 rounded-md"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={true}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img className="w-full  aspect-auto" src="slider (2).jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full aspect-auto" src="slider (3).jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full  aspect-auto" src="slider (4).jpg"></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

Home.Layout = "Main";

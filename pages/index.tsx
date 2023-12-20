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
    <>
      {/* swiper-top */}
      <div className="p-5">
        <Swiper
          className="h-72 shadow-md shadow-gray-500"
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
      {/* most liked products */}
      <div className="p-4 mx-4 bg-white   shadow-md shadow-gray-500">
        <div className="flex flex-row-reverse border-b-4 mb-4 px-2 py-1 border-[#80BB01] text-right font-bold">
          <div>
            <a>محبوب ترین ها</a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center grid-rows-1 gap-4">
          {/* single product card */}
          <div className="text-right  w-full max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="relative  mb-2 overflow-hidden ">
              <span className="flex font-bold  items-center  bg-red-600 w-16 h-6 justify-center text-center text-xs absolute text-white">
                <a>15%</a>
              </span>
              <a href="#" className="">
                <img
                  className="hover:scale-125 transition duration-500 cursor-pointer"
                  src="IMG_20231218_211335.jpg"
                  alt="product image"
                />
              </a>
            </div>

            <div className="px-5 pb-5 ">
              <div className="flex flex-row gap-4 mb-2  justify-center">
                <a href="#">
                  <h1 className="text-left text-[#80BB01] text-base line-clamp-1  font-semibold tracking-tight dark:text-white">
                    15000 تومان
                  </h1>
                </a>

                <a href="#">
                  <h1 className="line-through text-base line-clamp-1 font-semibold tracking-tight  dark:text-white">
                    18000 تومان
                  </h1>
                </a>
              </div>

              <a href="#">
                <h5 className="text-base mb-4 text-center font-semibold tracking-tight dark:text-white">
                  آبنبات مخصوص هلدار
                </h5>
              </a>
              <div className="flex flex-row w-full justify-between  items-center  mt-2.5 ">
                <div className="flex flex-row ">
                  <div className="flex flex-row items-center  rtl:space-x-reverse">
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                  <div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                      5.0
                    </span>
                  </div>
                </div>
                {/* <div>
                  <a
                    href="#"
                    className="text-white bg-slate-300  hover:bg-[#80BB01] 
                    focus:outline-none p-2  font-medium rounded-lg text-xs text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    افزودن به سبد خرید
                  </a>
                </div> */}
              </div>
            </div>
          </div>

          {/* single product card */}
          <div className="text-right w-full max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="relative  mb-2 overflow-hidden ">
              <span className="flex font-bold  items-center bg-red-600 w-16 h-6 justify-center text-center text-xs absolute text-white">
                <a>15%</a>
              </span>
              <a href="#">
                <img
                  className="hover:scale-125 transition duration-500 cursor-pointer"
                  src="IMG_20231218_211339.jpg"
                  alt="product image"
                />
              </a>
            </div>

            <div className="px-5 pb-5 ">
              <div className="flex flex-row gap-4 mb-2  justify-center">
                <a href="#">
                  <h1 className="text-left text-[#80BB01] text-base line-clamp-1  font-semibold tracking-tight dark:text-white">
                    15000 تومان
                  </h1>
                </a>

                <a href="#">
                  <h1 className="line-through text-base line-clamp-1 font-semibold tracking-tight  dark:text-white">
                    18000 تومان
                  </h1>
                </a>
              </div>

              <a href="#">
                <h5 className="text-base mb-4 text-center font-semibold tracking-tight dark:text-white">
                  آبنبات مخصوص هلدار
                </h5>
              </a>
              <div className="flex flex-row w-full justify-between  items-center  mt-2.5 ">
                <div className="flex flex-row ">
                  <div className="flex flex-row items-center  rtl:space-x-reverse">
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                  <div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                      5.0
                    </span>
                  </div>
                </div>
                {/* <div>
                  <a
                    href="#"
                    className="text-white bg-slate-300  hover:bg-[#80BB01] 
                    focus:outline-none p-2  font-medium rounded-lg text-xs text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    افزودن به سبد خرید
                  </a>
                </div> */}
              </div>
            </div>
          </div>

          {/* single product card */}
          <div className="text-right w-full max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="relative  mb-2 overflow-hidden ">
              <span className="flex font-bold  items-center bg-red-600 w-16 h-6 justify-center text-center text-xs absolute text-white">
                <a>15%</a>
              </span>
              <a href="#">
                <img
                  className="hover:scale-125 transition duration-500 cursor-pointer"
                  src="IMG_20231218_211323.jpg"
                  alt="product image"
                />
              </a>
            </div>

            <div className="px-5 pb-5 ">
              <div className="flex flex-row gap-4 mb-2  justify-center">
                <a href="#">
                  <h1 className="text-left text-[#80BB01] text-base line-clamp-1  font-semibold tracking-tight dark:text-white">
                    15000 تومان
                  </h1>
                </a>

                <a href="#">
                  <h1 className="line-through text-base line-clamp-1 font-semibold tracking-tight  dark:text-white">
                    18000 تومان
                  </h1>
                </a>
              </div>

              <a href="#">
                <h5 className="text-base mb-4 text-center font-semibold tracking-tight dark:text-white">
                  آبنبات مخصوص هلدار
                </h5>
              </a>
              <div className="flex flex-row w-full justify-between  items-center  mt-2.5 ">
                <div className="flex flex-row ">
                  <div className="flex flex-row items-center  rtl:space-x-reverse">
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                  <div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                      5.0
                    </span>
                  </div>
                </div>
                {/* <div>
                  <a
                    href="#"
                    className="text-white bg-slate-300  hover:bg-[#80BB01] 
                    focus:outline-none p-2  font-medium rounded-lg text-xs text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    افزودن به سبد خرید
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Home.Layout = "Main";

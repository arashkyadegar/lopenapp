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
      <div className="sm:grid-cols-4 grid grid-cols-1 p-5 gap-6 group">
        {/* swiper-top */}
          <a className="bg-red-400  w-44 h-44 absolute z-10 hidden group-hover:flex transition-all duration-500 ">
            this is me
          </a>
          <div className="w-full col-span-3 relative ">
            <Swiper
              className="h-72 shadow-md shadow-gray-500 "
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
                <img
                  className="w-full   aspect-auto"
                  src="slider (2).jpg"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-full  aspect-auto" src="slider (3).jpg"></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full   aspect-auto"
                  src="slider (4).jpg"
                ></img>
              </SwiperSlide>
            </Swiper>
          </div>

        <div className="flex flex-row justify-center sm:flex-col   my-auto w-full gap-4 h-fit ">
          {/* free delivery */}

          <div className="  bg-white flex flex-col sm:flex-row   justify-center sm:justify-end  shadow-md shadow-gray-500  p-2  items-center">
            <a className="text-sm ">ارسال رایگان</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              data-slot="icon"
              className="w-10 h-10 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          {/* safe payment */}
          <div className="bg-white flex flex-col sm:flex-row  justify-center sm:justify-end  shadow-md shadow-gray-500  p-2  items-center ">
            <a className="text-sm">پرداخت امن</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              data-slot="icon"
              className="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>

          {/* full time backup */}
          <div className="bg-white flex flex-col sm:flex-row   justify-center sm:justify-end  shadow-md shadow-gray-500  p-2  items-center">
            <a className="text-sm ">پشتیبانی شبانه روزی</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              data-slot="icon"
              className="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* most liked products */}
      <div className="p-4 mx-4 bg-white shadow-md shadow-gray-300 my-4 ">
        <div className="flex flex-row-reverse border-b-4 mb-4 px-2 py-1 border-[#EF5621] text-right font-bold">
          <div className="">
            <a>محبوب ترین ها</a>
          </div>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center grid-rows-1 gap-4">
          {/* single product card */}
          <div className="text-right text-sm  w-full max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
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
                  <h1 className="text-left text-[#80BB01]  line-clamp-1  font-semibold tracking-tight dark:text-white">
                    15000 تومان
                  </h1>
                </a>

                <a href="#">
                  <h1 className="line-through  line-clamp-1 font-semibold tracking-tight  dark:text-white">
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
                <div>
                  <a
                    href="#"
                    className="text-white bg-slate-300 transition duration-500 hover:bg-[#80BB01] 
                    focus:outline-none p-2  font-medium rounded-lg text-xs text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    افزودن به سبد خرید
                  </a>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div className="p-1 mx-4 bg-white shadow-md shadow-gray-300 my-4 ">
        {/* middle of page 2 pictures */}
        <div className="flex flex-row gap-10 justify-around w-5/6 mx-auto h-20 m-2 overflow-hidden">
          <img
            src="sugar.jpg"
            alt=""
            className="h-fit w-1/3 aspect-auto rounded-md "
          />
          <img
            src="sugar.jpg"
            alt=""
            className="h-fit w-1/3 aspect-auto rounded-md "
          />
        </div>
      </div>
      {/* most liked products 2 */}
      <div className="p-4 mx-4 bg-white shadow-md shadow-gray-300 my-4 ">
        <div className="flex flex-row-reverse border-b-4 mb-4 px-2 py-1 border-[#EF5621] text-right font-bold">
          <div>
            <a>محبوب ترین ها</a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center grid-rows-1 gap-4">
          {/* single product card */}
          <div className="text-right text-sm  w-full max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
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
                  <h1 className="text-left text-[#80BB01]  line-clamp-1  font-semibold tracking-tight dark:text-white">
                    15000 تومان
                  </h1>
                </a>

                <a href="#">
                  <h1 className="line-through  line-clamp-1 font-semibold tracking-tight  dark:text-white">
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
                <div>
                  <a
                    href="#"
                    className="text-white bg-slate-300 transition duration-500  hover:bg-[#80BB01] 
                    focus:outline-none p-2  font-medium rounded-lg text-xs text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    افزودن به سبد خرید
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

Home.Layout = "Main";

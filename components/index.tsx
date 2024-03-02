import React, { useEffect, useState } from "react";
import SliderComponent from "./slider";
import ProductCardComponent from "./product_card";
import AdsDoubleComponent from "./ads_double";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  FreeMode,
} from "swiper/modules";
// Import Swiper styles
import ProductCard1Component from "./product_card1";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { isPlainObject } from "redux";
import Head from "next/head";

export default function IndexComponent({ props }: any) {
  const products = JSON.parse(props.products);
  const products_inoff = products.filter((x: any) =>
    isPlainObject(x.discounts)
  );
  const products_normal = products.filter((x: any) => x.discounts.length == 0);
  const siteinfo = JSON.parse(props.siteinfo)[0];

  return (
    <>

      <div className=" px-5 gap-0  sm:gap-6 group">
        <SliderComponent props={siteinfo.headerImages} />
      </div>
      {/* most new products */}
      <div className="mx-4 p-4  h-[300px] rounded-xl mb-4 mt-4 aspect-auto bg-[#EF3A4F] ">
        <div className="flex flex-row h-fit  overflow-hidden rounded-xl  z-10">
          <div className=" flex flex-col w-1/4 font-bold text-white text-center">
            <div className="flex flex-col  pt-20 rounded-xl  gap-1    justify-center items-center">
              <h2 className="sm:text-2xl">شگفت </h2>
              <h2 className="sm:text-2xl">انگیزهای</h2>
              <h2 className="sm:text-2xl">لپن</h2>
            </div>
          </div>
          <div className="overflow-hidden w-full pr-2 gap-4">
            <Swiper
              className="rounded-lg h-full w-full"
              modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                Autoplay,
                FreeMode,
              ]}
              freeMode={true}
              spaceBetween={20}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                400: {
                  slidesPerView: 3,
                },
                639: {
                  slidesPerView: 3,
                },
                865: {
                  slidesPerView: 5,
                },
              }}
              loop={true}
            >
              {products_normal.map((product: any) => (
                <SwiperSlide key={product._id} className="swiper-slide1 ">
                  <ProductCardComponent props={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* most new products */}
      <div className="mx-4  p-4  h-[300px] rounded-xl mb-4 aspect-auto bg-[#C1D97A] ">
        <div className="flex flex-row h-fit  overflow-hidden rounded-xl  z-10">
          <div className=" flex flex-col w-1/4 font-bold text-white text-center">
            <div className="flex flex-col  pt-20 rounded-xl  gap-1    justify-center items-center">
              <h2 className="sm:text-2xl">تازه ترین</h2>
              <h2 className="sm:text-2xl">محصولات</h2>
              <h2 className="sm:text-2xl">لپن</h2>
            </div>
          </div>
          <div className="overflow-hidden w-full pr-2 gap-4">
            <Swiper
              className="rounded-lg h-full w-full"
              // breakpoints={{
              //   0: {
              //     slidesPerView: 1,
              //   },
              //   400: {
              //     slidesPerView: 3,
              //   },
              //   639: {
              //     slidesPerView: 3,
              //   },
              //   865: {
              //     slidesPerView: 5,
              //   },
              // }}
              modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                Autoplay,
                FreeMode,
              ]}
              spaceBetween={20}
              slidesPerView={5}
              //  navigation={true}
              freeMode={true}
              //  centeredSlides={true}
              // autoplay={true}
              loop={true}
              onSlideChange={() => {}}
              onSwiper={(swiper) => {}}
              onNavigationNext={() => {}}
              onNavigationPrev={() => {}}
            >
              {products.map((product: any) => (
                <SwiperSlide key={product._id} className="swiper-slide1 ">
                  <ProductCardComponent props={product} />
                </SwiperSlide>
              ))}

            </Swiper>
          </div>
        </div>
      </div>
      {/* most wanted products */}
      {/* <div className="p-4 mx-4 h-[300px] bg-white rounded-xl mb-4 aspect-auto ">
        <div className="flex flex-col p-2 h-fit  sm:flex-row overflow-hidden rounded-xl bg-[#C1D97A]  z-10">
          <div className=" flex flex-col w-full sm:w-64  font-bold text-white text-center">
            <div className="flex flex-row sm:mt-28 sm:flex-col gap-1   mx-auto items-center">
              <h2 className="sm:text-2xl">پر طرفدار ترین</h2>
              <h2 className="sm:text-2xl">محصولات</h2>
              <h2 className="sm:text-2xl">لپن</h2>

            </div>
          </div>
          <div className=" w-full sm:w-4/5 p-2 gap-4">
            <Swiper
              className="rounded-lg h-80"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                400: {
                  slidesPerView: 2,
                },
                639: {
                  slidesPerView: 3,
                },
                865: {
                  slidesPerView: 3,
                },
              }}
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              loop={true}
              onSlideChange={() => {}}
              onSwiper={(swiper) => {}}
              onNavigationNext={() => {}}
              onNavigationPrev={() => {}}
            >
              {products.map((product: any) => (
                <SwiperSlide key={product._id} className="h-auto">
                  <ProductCardComponent props={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div> */}
      {/* middle of page 2 pictures
            <div className="p-1 mx-4 bg-[#E9E9E9]    shadow-md shadow-gray-300 my-4 ">
        <div className="flex flex-row gap-10 justify-around w-5/6 mx-auto h-20 m-2 overflow-hidden">
          <AdsDoubleComponent />
          <AdsDoubleComponent />
        </div>
      </div> */}

      {/* most liked products 2 */}
      <div className="p-4 mx-4 h-auto bg-white  my-4 rounded-xl">
        <div className="flex flex-row mb-4 px-2 py-1 border-[#0B6FB3] justify-center font-bold">
          <div className="flex flex-row  sm:flex-col gap-1   mx-auto items-center">
            <h2 className="sm:text-2xl">پر طرفدار ترین</h2>
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-24 h-20 hidden mx-auto my-10 sm:flex"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg> */}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 justify-center gap-4">
          {products.map((product: any) => (
            <ProductCard1Component
              className="h-[90]"
              key={product._id}
              props={product}
            />
          ))}
        </div>
      </div>
    </>
  );
}

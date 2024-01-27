import React, { useEffect, useState } from "react";
import TriplexTopButtonsComponent from "./triplexـ_top_bottons";
import SliderComponent from "./slider";
import ProductCardComponent from "./product_card";
import AdsDoubleComponent from "./ads_double";
export default function IndexComponent({ props }: any) {
  const products = JSON.parse(props.products);
  const siteinfo = JSON.parse(props.siteinfo)[0];
  return (
    <>
      <div className="sm:grid-cols-4 grid grid-cols-1 p-5 gap-0  sm:gap-6 group">
        {/* <a className="bg-red-400  w-44 h-44 absolute z-10 hidden group-hover:flex transition-all duration-500 ">
         this is me
       </a> */}
        <TriplexTopButtonsComponent />
        <SliderComponent props={siteinfo.headerImages} />
      </div>

      {/* most new products */}
      <div className="p-4 mx-4 bg-white    shadow-md shadow-gray-300 mb-4 ">
        <div className="flex flex-row border-b-4 mb-4 px-2 py-1 border-[#EF5621] text-right font-bold">
          <div className="">
            <a>تازه ترین ها</a>
          </div>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4 grid-rows-1 gap-4">
          {products.map((product: any) => (
            <ProductCardComponent key={product._id} props={product} />
          ))}
        </div>
      </div>
      {/* middle of page 2 pictures */}
      <div className="p-1 mx-4 bg-white    shadow-md shadow-gray-300 my-4 ">
        <div className="flex flex-row gap-10 justify-around w-5/6 mx-auto h-20 m-2 overflow-hidden">
          <AdsDoubleComponent />
          <AdsDoubleComponent />
        </div>
      </div>
      {/* most liked products 2 */}
      <div className="p-4 mx-4 bg-white    shadow-md shadow-gray-300 my-4 ">
        <div className="flex flex-row border-b-4 mb-4 px-2 py-1 border-[#EF5621] text-right font-bold">
          <div>
            <a>محبوب ترین ها</a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center grid-rows-1 gap-4">
          {products.map((product: any) => (
            <ProductCardComponent key={product._id} props={product} />
          ))}
        </div>
      </div>
    </>
  );
}

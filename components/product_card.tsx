import React from "react";
import Link from "next/link";
import ScoreComponent from "./score";
import { getNewPrice } from "@/utility/discount";
import { getDefaultImageAvator } from "@/utility/imageUtility";
export default function ProductCardComponent({ props }: any) {
  const product = props;
  let discount = 0;
  let newPrice = 0;
  if (product.discounts.value != undefined) {
    discount = product.discounts.value;
    newPrice = getNewPrice(product.price, discount);
    //newPrice = product.price - (discount / 100) * product.price;
  }

  return (
    <>
      {/* single product card */}
      <div className="text-right relative rounded-xl text-sm w-full max-w-sm bg-white    border border-[#FBF6EE] hover:border-[#FFB534] transition duration-200 shadow dark:bg-gray-800 dark:border-gray-700">
        {discount > 0 && (
          <span className="flex left-0 font-bold bg-red-600  items-center w-16 h-6 justify-center text-center text-xs absolute text-white">
            <a>{discount} %</a>
          </span>
        )}
        <div className="flex mb-2 h-44  overflow-hidden mt-6 justify-center">
          <div>
            <a href="#" className=" w-full h-full">
              <img
                src={getDefaultImageAvator(product.images[0])}
                width={500}
                height={500}
                className=" hover:scale-110 w-fit aspect-auto transition duration-500 cursor-pointer"
                alt={product.name}
                title={product.name}
                crossOrigin = "anonymous"
              />
            </a>
          </div>
        </div>
        <a href="#">
            <h5 className="text-base mb-4 text-center font-semibold tracking-tight dark:text-white">
              {product.name}
            </h5>
          </a>
        <div className="px-5 pb-5 ">
          <div className="flex flex-row gap-4 mb-2  justify-center">
            {discount > 0 && (
              <>
                <a href="#">
                  <h1 className="text-left text-[#80BB01]  line-clamp-1  font-semibold tracking-tight dark:text-white">
                    {newPrice} تومان
                  </h1>
                </a>
                <a href="#">
                  <h1 className="line-through  line-clamp-1 font-semibold tracking-tight  dark:text-white">
                    {product.price} تومان
                  </h1>
                </a>
              </>
            )}
          </div>
          {discount === 0 && (
              <a href="#">
                <h1 className="text-left text-[#80BB01]  line-clamp-1  font-semibold tracking-tight dark:text-white">
                  {product.price} تومان
                </h1>
              </a>
            )}

          <div className="flex flex-col gap-4 sm:flex-row-reverse w-full justify-between  items-center  mt-2.5 ">
            <ScoreComponent props={product.score} />
            <div className=" bg-slate-300 px-2 py-1">
              <Link
                href={{
                  pathname: `/product`,
                  query: { id: product._id },
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  data-slot="icon"
                  className="w-6 h-6 cursor-pointer  hover:text-[#80BB01] transition-all duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

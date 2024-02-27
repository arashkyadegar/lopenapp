import React from "react";
import Link from "next/link";
import { getNewPrice } from "@/utility/discount";
import { getDefaultImageAvator } from "@/utility/imageUtility";
import { turnToFa } from "@/utility/regex";
export default function ProductCard1Component({ props }: any) {
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
      <div className="text-right h-80 min-h-80 relative rounded-xl overflow-hidden text-sm   bg-white  border   border-slate-200 hover:border-[#FFB534] transition duration-200 shadow dark:bg-gray-800 dark:border-gray-700">
        {discount > 0 && (
          <span className="flex left-0 font-bold bg-red-600  items-center w-16 h-6 justify-center text-center text-xs absolute text-white">
            <a>{turnToFa(discount.toString())} %</a>
          </span>
        )}
        <div className="flex    overflow-hidden mt-6 justify-center">
          <div className=" w-full justify-center">
            <div className="flex justify-center">
              <img
                src={getDefaultImageAvator(product.images[0])}
                className="min-h-52 min-w-52 max-h-52 max-w-52 rounded-xl hover:scale-110 w-fit aspect-square  transition duration-500 cursor-pointer"
                alt={product.name}
                title={product.name}
                crossOrigin="anonymous"
              />
            </div>
          </div>
        </div>
        <a href="#">
          <h5 className="text-sm mt-2  text-center font-semibold tracking-tight dark:text-white">
            {product.name}
          </h5>
        </a>
        <div className="h-10 ">
          <div className="flex flex-row gap-1  justify-center items-center">
            {discount === 0 && (
              <div className="flex flex-row mt-2 justify-center items-center">
                <h1 className="text-center text-xs text-[#80BB01]  line-clamp-1  font-semibold tracking-tight dark:text-white">
                  {turnToFa(product.price.toString())} ت
                </h1>
              </div>
            )}
            {discount > 0 && (
              <div className="flex flex-row  md:mt-2 gap-1 lg:flex-row">
                <a href="#">
                  <h1 className="text-center  line-through  text-xs  font-semibold tracking-tight  dark:text-white">
                    {turnToFa(product.price.toString())} ت
                  </h1>
                </a>
                <a href="#">
                  <h1 className="text-center text-xs text-[#80BB01]  dark:text-white">
                    {turnToFa(newPrice.toString())} <span className="text-xs">ت</span>
                  </h1>
                </a>
              </div>
            )}
          </div>

          <div className="absolute bg-transparent  bottom-1 flex flex-row justify-center gap-1 w-full   items-center  mt-2.5 ">
            {/* <ScoreComponent props={product.score} /> */}

            <div className="hover:border-lime-400 hover:scale-110 hover:text-lime-600 bg-opacity-10 bg-lime-300  cursor-pointer  border  rounded-r-xl bg-transparent transition-all delay-75 duration-200 px-2 py-1">
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
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </Link>
            </div>

            <div className="hover:border-pink-400 hover:scale-110 hover:text-pink-600 bg-opacity-10 bg-pink-300 cursor-pointer  border  bg-transparent transition-all duration-200 delay-75 px-2 py-1">
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
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </Link>
            </div>

            <div className="hover:border-indigo-400 hover:scale-110 hover:text-indigo-600 bg-opacity-10  bg-indigo-300  cursor-pointer  border  rounded-l-xl bg-transparent transition-all duration-200 delay-75 px-2 py-1">
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
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
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

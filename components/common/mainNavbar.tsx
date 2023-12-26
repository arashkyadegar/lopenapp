// components/common/MainNavBar.tsx
import React, { PropsWithChildren, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MainNavBar({ children }: PropsWithChildren) {
  return (
    <>
      <div className="flex border border-[#F3F4F8] bg-[#F3F4F8]  flex-row-reverse relative justify-between px-4 items-center ">
        <div className="flex flex-row gap-2">
          {/* user */}
          <div className="cursor-pointer flex flex-row-reverse relative pt-1">
            <div className=" bg-[#80BB01] w-5 h-5 items-center justify-center text-center text-xs rounded-full absolute  ">
              <a>1</a>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              data-slot="icon"
              className="w-6 h-6  m-2 hover:text-[#80BB01] transition-all duration-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
          {/* basket */}
          <div className=" cursor-pointer flex flex-row-reverse  relative  pt-1">
            <div className=" bg-[#80BB01] w-5 h-5 items-center justify-center text-center text-xs rounded-full absolute  ">
              <a>12</a>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              data-slot="icon"
              className="w-6 h-6  m-2 hover:text-[#80BB01] transition-all duration-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
          <div className="absolute z-40 bg-white w-11/12  sm:w-5/12 left-5 top-10  shadow-md shadow-gray-500">
            <div className=" grid w-full grid-cols-7 gap-2 font-bold text-xs border items-center justify-between border-gray-300 p-2">
              {/* grids title row */}
              <div className="col-span-1 text-center">
                <a>#</a>
              </div>
              <div className="col-span-1 text-center">
                <a>تصویر</a>
              </div>
              <div className="col-span-2 text-right">
                <a>محصول</a>
              </div>
              <div className="col-span-1 text-center">
                <a>تعداد</a>
              </div>
              <div className="col-span-1  text-left">
                <a>تخفیف</a>
              </div>
              <div className="col-span-1  text-center">
                <a>قیمت</a>
              </div>
            </div>
            <div className=" grid w-full grid-cols-7 gap-2 text-xs border items-center justify-between border-gray-300 p-2">
              {/* grids body */}
              <div className="col-span-1 text-center ">
                <a>1</a>
              </div>
              <div className="col-span-1 ">
                <a>
                  <Image
                    src="/images1.jpg"
                    width={500}
                    height={500}
                    className=" w-6 h-6 mx-auto"
                    alt="user avator"
                  />
                </a>
              </div>
              <div className="col-span-2 ">
                <a>ابنبات هلدار</a>
              </div>
              <div className="col-span-1 text-center">
                <a>1</a>
              </div>
              <div className="col-span-1 text-left">
                <a className=" text-red-400">1000</a>
              </div>
              <div className="col-span-1 text-center">
                <a>2000</a>
              </div>

              <div className="col-span-1  text-center ">
                <a>1</a>
              </div>
              <div className="col-span-1">
                <a>
                  <Image
                    src="/images3.jpg"
                    width={500}
                    height={500}
                    className=" w-6 h-6  mx-auto"
                    alt="user avator"
                  />
                </a>
              </div>
              <div className="col-span-2">
                <a>ابنبات هلدار</a>
              </div>
              <div className="col-span-1  text-center">
                <a>2</a>
              </div>
              <div className="col-span-1 text-left">
                <a className=" text-red-400 ">500</a>
              </div>
              <div className="col-span-1 text-center">
                <a>4500</a>
              </div>

              <div className="col-span-1  text-center">
                <a>1</a>
              </div>
              <div className="col-span-1">
                <a>
                  <Image
                    src="/images2.jpg"
                    width={500}
                    height={500}
                    className=" w-6 h-6  mx-auto"
                    alt="user avator"
                  />
                </a>
              </div>
              <div className="col-span-2">
                <a>ابنبات هلدار</a>
              </div>
              <div className="col-span-1  text-center">
                <a>4</a>
              </div>
              <div className="col-span-1 text-left">
                <a className=" text-red-400 ">3000</a>
              </div>
              <div className="col-span-1  text-center ">
                <a>2500</a>
              </div>

              <div className="col-span-1   ">
                <a href="" className="underline">
                  سبد خرید
                </a>
              </div>
              <div className="col-span-2  ">
                <a href="" className="underline">
                  تسویه حساب
                </a>
              </div>
              <div className="col-span-1   col-start-6">
                <a>قیمت کل</a>
              </div>
              <div className="col-span-1 text-center">
                <a>10000</a>
              </div>
            </div>
          </div>
        </div>
        {/* language select */}
        <div className="text-xs">
          <a
            href=""
            className=" hover:text-[#80BB01] transition-all duration-300"
          >
            انگلیسی
          </a>{" "}
          |{" "}
          <a
            href=""
            className="hover:text-[#80BB01] transition-all duration-300"
          >
            فارسی
          </a>
        </div>
      </div>
      {/* nvbar */}
      <nav className=" bg-white  dark:bg-gray-900  w-full z-20 top-0 start-0 shadow-md shadow-gray-500 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-start mx-auto p-4">
          {/* hambergur-button */}
          <div className="flex space-x-3 md:space-x-0">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex transition-all duration-300 items-center ml-2 w-10 h-10 justify-center text-sm   rounded-lg md:hidden hover:text-[#80BB01] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          {/* lopen-logo */}
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 "
          >
            <Image
              src="/Capturelogo.PNG"
              width={500}
              height={500}
              className="h-8 w-10"
              alt="lopen Logo"
            />
            <span className="self-center text-2xl text-gray-600 font-semibold whitespace-nowrap dark: ">
              آبنبات لوپن
            </span>
          </a>
          {/* navbar-menu */}
          <div
            className="justify-start   order-3 md:order-none w-full md:flex md:w-auto md:mr-10 mr-0"
            id="navbar-sticky"
          >
            <ul
              className="text-base gap-2  flex flex-col text-right  text-gray-600  p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse 
            md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              <li className="border-[#FEEBB4] ml-4 hover:border-[#FEEBB4] transition-all duration-300 ">
                <Link
                  href={{
                    pathname: `/`,
                  }}
                >
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: `/checkout`,
                  }}
                >
فاکتور                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: `/about`,
                  }}
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: `/contactus`,
                  }}
                >
                  ارتباط با ما
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: `/singleproduct`,
                  }}
                >
                  محصول
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

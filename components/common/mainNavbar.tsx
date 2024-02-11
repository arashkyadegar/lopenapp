// components/common/MainNavBar.tsx
import React, { PropsWithChildren, useEffect, useState } from "react";

import Link from "next/link";
import BasketSmallComponent from "../basket_smal";
import myAppContext from "@/components/context/context";
import { useMediaQuery } from "react-responsive";
import { getDefaultImageAvator } from "@/utility/imageUtility";
import { useOutsideClick } from "./hooks";
export default function MainNavBar({ props }: any) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 640px)" });
  const { smallBasketToggle, setSmallBasketToggle } =
    React.useContext(myAppContext);
  const { navbarToggle, setNavbarToggle } = React.useContext(myAppContext);

  function toggleSmallBasket() {
    setSmallBasketToggle(!smallBasketToggle);
  }

  const toggleNavbar = () => {
    setNavbarToggle(!navbarToggle);
  };

  const ref = useOutsideClick(() => {
    // setNavbarToggle(false);

  });

  const ref2 = useOutsideClick(() => {
    setSmallBasketToggle(false);
    // console.log('Clicked outside of MyComponent');
  });

  return (
    <>
      <div className="flex  bg-[#EEEEEE] relative px-4 items-center ">
        <nav className="bg-[#EEEEEE]  dark:bg-gray-900  w-full z-20 top-0 start-0 ">
          <div  className="max-w-screen-xl flex flex-wrap items-center justify-start mx-auto p-4">
            {/* hambergur-button */}
            <div  className="flex w-full space-x-3 md:space-x-0">
              <div  ref={ref}>
              <button 
                onClick={() => toggleNavbar()}
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex transition-all duration-300 items-center ml-2 w-10 h-10 justify-center text-sm   rounded-lg  focus:outline-none   dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              </div>
    
              <a
                href="https://flowbite.com/"
                className="flex items-center space-x-3 "
              >
                <img
                  src="/logo.png"

                  width={500}
                  height={500}
                  className="h-8 w-10"
                  alt="lopen Logo"
                  crossOrigin="anonymous"
                />
                <span className="self-center text-2xl text-gray-600 font-semibold dark: ">
                  آبنبات لپن
                </span>
              </a>
            </div>
            {/* lopen-logo */}
          </div>
        </nav>
        <div className="flex flex-row gap-2">
          {/* user */}
          <div className="cursor-pointer flex flex-row relative pt-1">
            <div className=" bg-[#80BB01] w-5 h-5 items-center justify-center text-center text-xs rounded-full absolute  ">
              <a>1</a>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              data-slot="icon"
              className="w-6 h-6  m-2 hover:text-[#80BB01] transition-all duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
          {/* basket */}
          <div ref={ref2} className=" cursor-pointer flex flex-row-reverse  relative  pt-1">
            <div className=" bg-[#80BB01] w-5 h-5 items-center justify-center text-center text-xs rounded-full absolute  ">
              <a>12</a>
            </div>
            <svg
              onClick={() => {
                toggleSmallBasket();
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              data-slot="icon"
              className="w-6 h-6  m-2 hover:text-[#80BB01] transition-all duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
          {smallBasketToggle && <BasketSmallComponent  />}
        </div>
      </div>
      {/* navbar-menu */}
      {navbarToggle && (
        <div 
          className="justify-start border  z-30 absolute right-3 bg-[#EEEEEE] w-1/2 sm:w-1/3 transition-all duration-300 rounded-b-lg  order-3"
          id="navbar-sticky"
        >
          <ul 
            className="text-base gap-2  flex flex-col text-right  text-gray-600  p-4  font-medium  rounded-lg   
              dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li className=" ml-4 border  border-[#EEEEEE] p-1 rounded-lg   hover:border-[#80BB01] transition-all duration-300 ">
              <Link
                href={{
                  pathname: `/`,
                }}
              >
                صفحه اصلی
              </Link>
            </li>
            <li className=" ml-4 border  border-[#EEEEEE] p-1 rounded-lg   hover:border-[#80BB01] transition-all duration-300 ">
              <Link
                href={{
                  pathname: `/checkout`,
                }}
              >
                فاکتور
              </Link>
            </li>

            <li className=" ml-4 border  border-[#EEEEEE] p-1 rounded-lg   hover:border-[#80BB01] transition-all duration-300 ">
              <Link
                href={{
                  pathname: `/faqs`,
                }}
              >
                سوالات متداول
              </Link>
            </li>
            <li className=" ml-4 border  border-[#EEEEEE] p-1 rounded-lg   hover:border-[#80BB01] transition-all duration-300 ">
              <Link
                href={{
                  pathname: `/about`,
                }}
              >
                درباره ما
              </Link>
            </li>
            {/* <li>
                  <Link
                    href={{
                      pathname: `/admin/dashboard/main`,
                    }}
                  >
                     admin
                  </Link>
                </li> */}
            <li className=" ml-4 border  border-[#EEEEEE] p-1 rounded-lg   hover:border-[#80BB01] transition-all duration-300 ">
              <Link
                href={{
                  pathname: `/contactus`,
                }}
              >
                ارتباط با ما
              </Link>
            </li>
            {/* <li>
                  <Link
                    href={{
                      pathname: `/singleproduct`,
                    }}
                  >
                    محصول
                  </Link>
                </li> */}
          </ul>
        </div>
      )}
    </>
  );
}

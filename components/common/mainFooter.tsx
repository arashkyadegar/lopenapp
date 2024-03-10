// components/common/MainFooter.tsx
import React, { PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import { getDefaultImageAvator } from "@/utility/imageUtility";
import EnamadComponent from "../enamad";
export default function MainFooter({ props }: any) {

  return (
    <>
      <div className="flex flex-col sm:flex-row text-[#B4B8C6] bg-[#303033] ">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col   p-4 ">
            <p className="font-bold"> آبنبات لپن</p>
            <div className="flex flex-row  h-4  justify-center flex-wrap gap-3 p-2">
              <a className="text-xs">
                <Link
                  href={{
                    pathname: `/`,
                  }}
                >
                  صفحه اصلی
                </Link>
              </a>

              <a href="#" className="text-xs">
                <Link
                  href={{
                    pathname: `/contactus`,
                  }}
                >
                  تماس با ما
                </Link>
              </a>
              <a href="#" className="text-xs">
                <Link
                  href={{
                    pathname: `/faqs`,
                  }}
                >
                  سوالات متداول
                </Link>
              </a>
              <a href="#" className="text-xs">
                <Link
                  href={{
                    pathname: `/about`,
                  }}
                >
                  درباره ما
                </Link>
              </a>
              {/* <a href="#" className="text-xs">
              راهنمای خرید
            </a> */}
            </div>
          </div>

          <div className="flex flex-col gap-2   p-4">
            <p className="font-bold">اطلاعات تماس</p>
            <div className="flex flex-row justify-center gap-4 px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                />
              </svg>

              <a className="text-xs w-64">
                خراسان شمالی - بجنورد خیابان شهید بهشتی شمالی - روبه روی
                مسجد جامع
              </a>
            </div>
            <div className="flex flex-row justify-center gap-4 px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <a className="text-xs">۳۲۷۳۵۴۹۲ (۰۵۸) </a>
            </div>

  

            <div className="flex h-fit w-full gap-2 flex-row px-4 justify-center">
              <div className="p-2 w-30 h-full border border-gray-600 hover:bg-pink-100 hover:border-gray-500 transition-all duration-300 cursor-pointer rounded-md">
                <img
                  className="max-w-xs w-6 h-6"
                  src="icons8-instagram-16.png"
                  alt="lopencandy's instagram link"
                />
              </div>
              <div className="p-2 w-30 h-full border border-gray-600 hover:bg-blue-100 hover:border-gray-500 transition-all duration-300 cursor-pointer rounded-md">
                <img
                  className="max-w-xs w-6 h-6"
                  src="icons8-twitter-16.png"
                  alt="lopencandy's twitter link"
                />
              </div>
              <div className="p-2 w-30 h-full border border-gray-600 hover:bg-green-100 hover:border-gray-500 transition-all duration-300 cursor-pointer rounded-md">
                <img
                  className="max-w-xs w-6 h-6"
                  src="icons8-whatsapp-48.png"
                  alt="lopencandy's whatsapp link"
                />
                {/* <img src="icons8-whatsapp-48.png" alt="" className="w-6 h-6" /> */}
              </div>
              <div className="p-2 w-30 h-full border border-gray-600 hover:bg-blue-100 hover:border-gray-500 transition-all duration-300 cursor-pointer rounded-md">
                <img
                  className="max-w-xs w-6 h-6"
                  src="icons8-twitter-16.png"
                  alt="lopencandy's twitter link"
                />
                {/* <img src="icons8-twitter-16.png" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto gap-2  p-4">
          <EnamadComponent />
        </div>
      </div>
    </>
  );
}

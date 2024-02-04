// components/common/MainFooter.tsx
import React, { PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import { getDefaultImageAvator } from "@/utility/imageUtility";
export default function MainFooter({ props }: any) {
  return (
    <>
      <div className="flex flex-row text-[#B4B8C6] bg-[#303033] ">
        <div className="flex flex-col gap-2 w-3/4  p-4">
          <p className="font-bold">اطلاعات تماس</p>
          <div className="flex flex-row gap-4 px-4">
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
            <a className="text-xs">0583222</a>
          </div>

          <div className="flex flex-row gap-4 px-4">
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
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>

            <a className="text-xs">0915</a>
          </div>

          <div className="flex flex-row gap-4 px-4">
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

            <a className="text-xs">خراسان شمالی - بجنورد</a>
          </div>

          <div className="flex flex-row gap-4 px-4 justify-center">
            <div className="p-2 border border-gray-400">
              <img 
                src='icons8-instagram-16.png'
                width={500}
                height={500}
                alt="user avator"
     
              />
            </div>
            <div className="p-2 border border-gray-400">
            <img 

                src='icons8-twitter-16.png'
                width={500}
                height={500}
                alt="user avator"
           
              />
     
            </div>
            <div className="p-1 border border-gray-400">
            <img 

                src='icons8-whatsapp-48.png'
                width={500}
                height={500}
                alt="user avator"
        
              />
              {/* <img src="icons8-whatsapp-48.png" alt="" className="w-6 h-6" /> */}
            </div>
            <div className="p-2 border border-gray-400">
            <img 

                src='icons8-twitter-16.png'
                width={500}
                height={500}
                alt="user avator"

              />
              {/* <img src="icons8-twitter-16.png" alt="" /> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full  p-4 ">
          <p className="font-bold"> آبنبات لپن</p>
          <div className="flex flex-row flex-wrap gap-3 p-2">
            <a href="#" className="text-xs">
              صفحه اصلی
            </a>
            <a href="#" className="text-xs">
              تماس با ما
            </a>
            <a href="#" className="text-xs">
              چرا لپن
            </a>
            <a href="#" className="text-xs">
              ارتباط با ما
            </a>
            <a href="#" className="text-xs">
              راهنمای خرید
            </a>
          </div>
        </div>
        <div className="flex flex-col w-full  p-4">3</div>
      </div>
    </>
  );
}

import React from "react";
export default function TriplexTopButtonsComponent({ props }: any) {
  return (
    <>
      <div className="flex order-2 sm:order-1 flex-row  sm:flex-col   my-auto w-full gap-4 h-fit justify-between">
        {/* free delivery */}

        <div className="  bg-white grow    flex flex-col sm:flex-row-reverse   justify-center sm:justify-end  shadow-md shadow-gray-500  p-2  items-center">
          <a className="text-sm ">ارسال رایگان</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            data-slot="icon"
            className="w-10 h-10 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        {/* safe payment */}
        <div className="bg-white    flex flex-col sm:flex-row-reverse   justify-center sm:justify-end  shadow-md shadow-gray-500  p-2  items-center ">
          <a className="text-sm">پرداخت امن</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            data-slot="icon"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </div>
        {/* full time backup */}
        <div className="bg-white  grow  flex flex-col sm:flex-row-reverse    justify-center sm:justify-end  shadow-md shadow-gray-500  p-2  items-center">
          <a className="text-sm ">پشتیبانی شبانه روزی</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            data-slot="icon"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

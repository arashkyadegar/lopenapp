import { PropsWithChildren } from "react";

import Image from "next/image";
import React from "react";
export default function BasketSmallComponent({ props }: any) {

  return (
    <>
      <div className="absolute z-40 bg-white w-11/12  sm:w-5/12 left-5 top-10  shadow-md shadow-gray-500">
        <div className=" grid w-full grid-cols-6 gap-2 font-bold text-xs border items-center justify-between border-gray-300 p-2">
          {/* grids title row */}

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
        <div className=" grid w-full grid-cols-6 gap-2 text-xs border items-center justify-between border-gray-300 p-2">
          {/* grids body */}
          <div className="col-span-1 text-center">
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
      </div>
    </>
  );
}

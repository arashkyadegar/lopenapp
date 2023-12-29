import { PropsWithChildren } from "react";

import Image from "next/image";
import React from "react";
export default function CheckoutGridComponent({ props }: any) {
  return (
    <>
      {" "}
      <div className="grid mx-2 grid-cols-6 items-center divide divide-gray-200">
        <div className="flex  items-center justify-center col-span-1 h-16 border border-gray-200 text-center">
          <a>تصویر</a>
        </div>
        <div className="flex  items-center justify-center col-span-1 h-16 border text-center">
          <a>نام محصول</a>
        </div>
        <div className="flex  items-center justify-center border h-16 text-center">
          <a>قیمت </a>
        </div>
        <div className="flex  items-center justify-center border h-16 text-center">
          <a>تعداد </a>
        </div>
        <div className="flex  items-center justify-center border h-16  text-center">
          <a>تخفیف </a>
        </div>
        <div className="flex  items-center justify-center border h-16 text-center">
          <a>قیمت کل </a>
        </div>
        <div className="border flex col-span-1 h-24 justify-center items-center">
          <a>
            <Image
              src="/images1.jpg"
              width={500}
              height={500}
              className=" w-14 h-14 mx-auto"
              alt="user avator"
            />
          </a>
        </div>
        <div className="border flex col-span-1 h-24 justify-center items-center">
          <a> آبنبات هلدار </a>
        </div>
        <div className="border flex col-span-1 h-24 justify-center items-center">
          <a> 7800 </a>
        </div>
        <div className="border flex col-span-1 h-24 justify-center items-center">
          <input
            type="number"
            min="1"
            defaultValue={1}
            name="floating_email"
            id="floating_email"
            className="w-10 h-5 outline-none border border-gray-400"
            placeholder=" "
            required
          />
        </div>
        <div className="border flex col-span-1 h-24 justify-center items-center">
          <a> 7800 </a>
        </div>
        <div className="border flex col-span-1 h-24 justify-center items-center">
          <a> 7800 </a>
        </div>
      </div>
    </>
  );
}

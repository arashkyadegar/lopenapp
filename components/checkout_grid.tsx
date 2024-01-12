import { PropsWithChildren } from "react";

import Image from "next/image";
import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";

export default function CheckoutGridComponent({ props }: any) {
  const factorState = useAppSelector((state) => state.entities.factor);
  return (
    <>
      <div className="grid mx-2 grid-cols-6 items-center divide divide-gray-200">
        <div className="flex  font-bold   items-center justify-center col-span-1 h-16 border border-gray-200 text-center">
          <a>#</a>
        </div>
        <div className="flex font-bold items-center justify-center col-span-1 h-16 border text-center">
          <a>نام محصول</a>
        </div>
        <div className="flex font-bold   items-center justify-center border h-16 text-center">
          <a>قیمت </a>
        </div>
        <div className="flex font-bold   items-center justify-center border h-16 text-center">
          <a>تعداد </a>
        </div>
        <div className="flex font-bold   items-center justify-center border h-16  text-center">
          <a>تخفیف </a>
        </div>
        <div className="flex font-bold   items-center justify-center border h-16 text-center">
          <a>قیمت کل </a>
        </div>
        {factorState.list.map((item: any) => (
          <>
            <div className="border flex col-span-1 h-16 justify-center items-center">
              <a className="text-xs">{item.productId}</a>
            </div>
            <div className="border flex col-span-1 h-16 justify-center items-center">
              <a>{item.productName}</a>
            </div>
            <div className="border flex col-span-1 h-16 justify-center items-center">
              <a>{item.unitPrice}</a>
            </div>
            <div className="border flex col-span-1 h-16 justify-center items-center">
              <a>{item.count}</a>
            </div>
            <div className="border flex col-span-1 h-16 justify-center items-center">
              <a>{item.discount}</a>
            </div>
            <div className="border flex col-span-1 h-16 justify-center items-center">
              <a>{item.prices}</a>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

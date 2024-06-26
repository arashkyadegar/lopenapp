import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { produce } from "immer";
import {
  factorItemRecieved,
} from "@/redux/store/factorItems";
import { converEnDateToFaDate } from "@/utility/discount";
import { turnToFa } from "@/utility/regex";
export default function CheckoutGridComponent({ props }: any) {
  const btn_display = props;
  const dispatch = useAppDispatch();
  let totalSum = 0;
  const factorItemsState = useAppSelector(
    (state) => state.entities.factorItems
  );
  useEffect(() => {}, []);

  factorItemsState.list.forEach((item: any) => {
    totalSum += item.prices;
  });

  function submitDeleteFactorItem(productId: any): void {
    if (confirm("قصد حذف محصول را دارید ؟ ")) {
      const nextState = produce(factorItemsState, (draftState) => {
        draftState.list = draftState.list.filter(
          (el: any) => el.productId != productId
        );
      });
      dispatch(factorItemRecieved(nextState.list));
    }
  }
  return (
    <div className="grid text-xs grid-cols-7 md:text-sm  items-center divide divide-gray-200">
      <div className="  flex   font-bold   items-center justify-center col-span-1 h-16 border border-gray-200 text-center">
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
      <div className="flex font-bold   items-center justify-center border h-16 text-center">
        <a> تاریخ </a>
      </div>

      {/* <div className="flex font-bold   items-center justify-center border h-16 text-center">
        <a> عملیات </a>
      </div> */}

      {factorItemsState.list.map((item: any) => (
        <>
          <div className="border   flex  col-span-1 h-16 justify-center items-center">
            <a className="text-xs">{item.productId.substring(0, 9)}</a>
          </div>
          <div className="border flex col-span-1 h-16 justify-center items-center">
            <a>{item.productName}</a>
          </div>
          <div className="border flex col-span-1 h-16 justify-center items-center">
            <a>{turnToFa(item.unitPrice)}</a>
          </div>
          <div className="border flex col-span-1 h-16 justify-center items-center">
            {/* <input
                type="number"
                min="1"
                name="floating_email"
                id="floating_email"
                className="p-1 w-10 h-9 outline-none border border-gray-400"
                placeholder=" "
                x-productId={item.productId}
                onChange={fillFactorGridCount}
                value={item.count}
              /> */}
            <a>{turnToFa(item.count)}</a>
          </div>
          <div className="border flex col-span-1 h-16 justify-center items-center">
            <a>{turnToFa(item.discount)} %</a>
          </div>
          <div className="border flex col-span-1 h-16 justify-center items-center">
            <a>{turnToFa(item.prices)}</a>
          </div>
          <div className="flex  items-center justify-center border h-16 text-center">
            <a> {converEnDateToFaDate(item.date)} </a>
          </div>

          {/* <div className="border flex col-span-1 h-16 justify-center items-center">
            {btn_display && (
              <>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6  hover:text-blue-500 transition-all cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </a>
                <a onClick={() => submitDeleteFactorItem(item.productId)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 cursor-pointer rounded-md h-4 border-red-400 hover:border hover:text-white hover:bg-red-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </a>
              </>
            )}
          </div> */}
        </>
      ))}
      <div className="border flex col-span-1 col-start-6 col-end-8 h-16 justify-start items-center pr-6">
       <a>جمع کل</a> : <a> {turnToFa(totalSum.toString())} </a>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import { produce } from "immer";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import {
  factorItemReAdded,
  factorItemRecieved,
  factorItemsRemoved,
} from "@/redux/store/factorItems";
import { getNewPrice } from "@/utility/discount";
import { turnToFa } from "@/utility/regex";
import Link from "next/link";
import myAppContext from "./context/context";
export default function BasketSmallComponent({ props }: any) {
  const { smallBasketToggle, setSmallBasketToggle } =
    React.useContext(myAppContext);
  const dispatch = useAppDispatch();
  const factorState = useAppSelector((state) => state.entities.factorItems);
  useEffect(() => {
    // dispatch(factorItemsRemoved([]));
  }, []);
  function fillFactorGridCount(event: any): void {
    let value = event.target.value.trim();
    if (value === "") {
      value = 1;
    }

    const productId = event.target.getAttribute("x-productId");
    let obj = factorState.list.find((x: any) => x.productId == productId);
    if (obj != undefined) {
      let price = obj["unitPrice"];
      let newPrice = 0;
      let discount = 0;
      const nextState = produce(factorState, (draftState) => {
        const item = draftState.list.map((i: any) => {
          if (i.productId == productId) {
            if (i.discount != undefined) {
              discount = i.discount;
              newPrice = getNewPrice(price, discount);
              //newPrice = product.price - (discount / 100) * product.price;
            }
            i.count = parseInt(value);
            if (i.discount != 0) {
              i.prices = newPrice * parseInt(i.count);
            } else {
              i.prices = i.unitPrice * parseInt(i.count);
            }
          }
        });
      });
      dispatch(factorItemReAdded(nextState.list));
    }
  }

  function submitDeleteFactorItem(productId: any): void {
    if (confirm("قصد حذف محصول را دارید ؟ ")) {
      const nextState = produce(factorState, (draftState) => {
        draftState.list = draftState.list.filter(
          (el: any) => el.productId != productId
        );
        console.log(draftState.list);
      });
      dispatch(factorItemRecieved(nextState.list));
    }
  }

  if (factorState.list.length == 0)
    return (
      <div className="absolute z-40 bg-white left-5 top-16 border hover:border-[#80BB01] p-4">
        سبد خرید شما خالیست
      </div>
    );
  function toggleSmallBasket() {
    setSmallBasketToggle(!smallBasketToggle);
  }
  return (
    <div
      onClick={() => {
        toggleSmallBasket();
      }}
      className="z-30 flex flex-col items-center justify-center   fixed inset-0"
    >
      <div className="absolute border border-gray-300 hover:border-[#80BB01] transition-all duration-200 z-40 bg-white top-16 left-5   rounded-lg overflow-hidden">
        <div className="flex flex-col w-52 text-xs">
          <div className="flex flex-row justify-end">
            <a
              onClick={() => {
                toggleSmallBasket();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4  cursor-pointer bg-green-600  h-4transition-all duration-300 hover: text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
              </svg>
            </a>
          </div>
          <div className="flex flex-col w-52 text-xs  p-1  items-center ">
            {factorState.list.map((item: any) => (
              <div
                key={item.productId}
                className="flex flex-col  w-full  border-gray-300"
              >
                <div className="flex flex-row justify-end  border-gray-300">
                  <a onClick={() => submitDeleteFactorItem(item.productId)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4  cursor-pointer bg-red-600  h-4transition-all duration-300 hover: text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </a>
                </div>
                <div className="flex flex-row w-full border ">
                  <div className="w-1/3   px-1  flex font-bold border-l  items-center justify-right col-span-3 h-6  text-center">
                    <a>نام محصول</a>
                  </div>
                  <div className="w-2/3  flex col-span-3 h-6 justify-right px-1  items-center">
                    <a>{item.productName}</a>
                  </div>
                </div>
                <div className="flex flex-row w-full border   px-1">
                  <div className="w-1/3  flex font-bold  border-l  items-center justify-right  h-6 text-right px-1">
                    <a>قیمت </a>
                  </div>
                  <div className="w-2/3  flex col-span-1 h-6 justify-right items-center px-1">
                    <a>{turnToFa(item.unitPrice)}</a>
                  </div>
                </div>
                <div className="flex flex-row w-full border  px-1">
                  <div className="w-1/3  flex font-bold border-l   items-center justify-right  h-6 text-center px-1">
                    <a>تعداد </a>
                  </div>
                  <div className=" flex col-span-1 h-6 justify-right items-right px-1">
                    <input
                      type="number"
                      min="1"
                      defaultValue={0}
                      name="floating_email"
                      id="floating_email"
                      className="p-1 my-1 w-10 h-4 outline-none border "
                      placeholder=" "
                      x-productId={item.productId}
                      onChange={fillFactorGridCount}
                      value={item.count}
                    />
                  </div>
                </div>
                <div className="flex flex-row w-full border  px-1">
                  <div className="w-1/3 flex font-bold border-l   items-center justify-right  h-6  text-center px-1">
                    <a>تخفیف </a>
                  </div>
                  <div className="w-2/3 text-red-600 flex col-span-1 h-6 justify-right items-center px-1">
                    <a>{turnToFa(item.discount)}</a>
                  </div>
                </div>
                <div className="flex flex-row w-full ">
                  <div className="w-1/3 flex font-bold border   items-center justify-right  h-6  text-center px-1">
                    <a>قیمت کل </a>
                  </div>
                  <div className="w-2/3 font-bold border text-green-600 flex col-span-1 h-6 justify-right items-center px-1">
                    <a>{turnToFa(item.prices)}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center hover:font-bold text-blue-600">
          <Link
            className="text-xs "
            href={{
              pathname: `/checkout`,
            }}
          >
            مشاهده سبد خرید
          </Link>
        </div>
      </div>
    </div>
  );
}

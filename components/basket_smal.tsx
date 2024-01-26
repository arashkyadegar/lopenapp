
import React from "react";
import { produce } from "immer";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { factorReAdded, factorsRecieved } from "@/redux/store/factor";
import { getNewPrice } from "@/utility/discount";
export default function BasketSmallComponent({ props }: any) {
  const dispatch = useAppDispatch();
  const factorState = useAppSelector((state) => state.entities.factor);
  function fillFactorGridCount(event: any): void {
    const value = event.target.value;
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
      dispatch(factorReAdded(nextState.list));
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
      dispatch(factorsRecieved(nextState.list));
    }
  }

  return (

      <div className="absolute z-40 bg-white w-12/12  sm:w-7/12 left-5 top-10  shadow-md shadow-gray-500">
        <div className="grid text-xs  grid-cols-8 items-center divide divide-gray-200">
          {/* <div className="flex  font-bold   items-center justify-center col-span-1 h-16 border border-gray-200 text-center">
            <a>#</a>
          </div> */}
          <div className="flex font-bold items-center justify-center col-span-3 h-6 border text-center">
            <a>نام محصول</a>
          </div>
          <div className="flex font-bold   items-center justify-center border h-6 text-center">
            <a>قیمت </a>
          </div>
          <div className="flex font-bold   items-center justify-center border h-6 text-center">
            <a>تعداد </a>
          </div>
          <div className="flex font-bold   items-center justify-center border h-6  text-center">
            <a>تخفیف </a>
          </div>
          <div className="flex font-bold   items-center justify-center border h-6 text-center">
            <a>قیمت کل </a>
          </div>
          <div className="flex font-bold   items-center justify-center border h-6 text-center">
            <a>عملیات</a>
          </div>
          {factorState.list.map((item: any) => (
            <>
              {/* <div className="border flex col-span-1 h-16 justify-center items-center">
                <a className="text-xs">{item.productId}</a>
              </div> */}
              <div className="border flex col-span-3 h-6 justify-center items-center">
                <a>{item.productName}</a>
              </div>
              <div className="border flex col-span-1 h-6 justify-center items-center">
                <a>{item.unitPrice}</a>
              </div>
              <div className="border flex col-span-1 h-6 justify-center items-center">
                <input
                  type="number"
                  min="1"
                  name="floating_email"
                  id="floating_email"
                  className="p-1 w-10 h-5 outline-none border border-gray-400"
                  placeholder=" "
                  x-productId={item.productId}
                  onChange={fillFactorGridCount}
                  value={item.count}
                />
              </div>
              <div className="border flex col-span-1 h-6 justify-center items-center">
                <a>{item.discount}</a>
              </div>
              <div className="border flex col-span-1 h-6 justify-center items-center">
                <a>{item.prices}</a>
              </div>
              <div className="flex font-bold   items-center justify-center border h-6 text-center">
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
              </div>
            </>
          ))}
        </div>
      </div>

 
  );
}

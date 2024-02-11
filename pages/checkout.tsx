import myAppContext from "@/components/context/context";

import React, { ReactElement, useEffect, useState } from "react";
import CheckoutFormComponent from "@/components/checkout_form";
import CheckoutGridComponent from "@/components/checkout_grid";
import MainLayout from "@/components/common/mainLayout";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
export default function Checkout() {

  return (
    <>
    <div className="container px-4">
      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-between w-4/4 rounded-xl  gap-4 py-4  my-4 bg-white">
          <div className="px-2">
            <a className=" flex text-2xl border-b p-4 border-gray-400">
              جزیات محصول
            </a>
          </div>
            <div className="flex flex-col ">
              <div className="flex flex-col  gap-2">
                <div className="px-2 mb-4">
                  <a className=" flex text-2xl border-b p-4 border-gray-400">
                    خرید شما
                  </a>
                </div>
                <CheckoutGridComponent />
                <CheckoutFormComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Checkout.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

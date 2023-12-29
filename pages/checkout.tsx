import myAppContext from "@/components/context/context";
import Image from "next/image";
import React, { useState } from "react";
import CheckoutFormComponent from "@/components/checkout_form";
import CheckoutGridComponent from "@/components/checkout_grid";
export default function Checkout() {
  // form-validation-end
  return (
    <>
      <div className="container p-4">
        <div className="flex flex-col  gap-4">
          <div className="flex flex-col justify-between   gap-4 py-4  mb-4 bg-white shadow-md shadow-gray-500 ">
            <div className="px-2">
              <a className=" flex text-2xl border-b p-4 border-gray-400">
                جزییات پرداخت
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

Checkout.Layout = "Main";

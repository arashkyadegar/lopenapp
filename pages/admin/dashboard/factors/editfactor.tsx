"use client";
import CheckoutGridComponent from "@/components/checkout_grid";
import { ReactElement, useEffect } from "react";
import AdminLayout from "../adminLayout";
import CheckoutFormViewComponent from "@/components/checkout_formview";
import {getFactorAction } from "@/redux/store/factorForm";
import { useAppDispatch } from "@/redux/store/hooks";
import { getFactorItemsAction } from "@/redux/store/factorItems";


export default function EditFactor() {
  const dispatch = useAppDispatch();
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");

  useEffect(() => {
    dispatch(getFactorAction(id));
    dispatch(getFactorItemsAction(id));
  },[]);
  return (
    <>
      <div className="container p-4">
        <div className="flex flex-col  gap-4">
          <div className="flex flex-col justify-between   gap-4 py-4  mb-4 bg-white shadow-md shadow-gray-500 ">
            <div className="px-2">
              <a className=" flex text-2xl border-b p-4 border-gray-400">
                جزییات فاکتور
              </a>
            </div>
            <div className="flex flex-col ">
              <CheckoutGridComponent />
              <CheckoutFormViewComponent  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
EditFactor.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

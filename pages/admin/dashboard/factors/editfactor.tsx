"use client";
import CheckoutGridComponent from "@/components/checkout_grid";
import { ReactElement, useEffect } from "react";
import AdminLayout from "../adminLayout";
import CheckoutFormViewComponent from "@/components/checkout_formview";
import { getFactorAction } from "@/redux/store/factorForm";
import { useAppDispatch } from "@/redux/store/hooks";
import { getFactorItemsAction } from "@/redux/store/factorItems";

export default function EditFactor() {
  const dispatch = useAppDispatch();
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");

  useEffect(() => {
    dispatch(getFactorAction(id));
    dispatch(getFactorItemsAction(id));
  }, []);
  return (
    <div className="flex flex-col  w-full gap-4">
      <div className="flex flex-col justify-between w-full  mb-4 bg-white shadow-md shadow-gray-500 ">
        <div className="">
          <div className="">
            <div className="">
              <a className=" flex text-xl border-b px-1 border-gray-400">
                جزییات فاکتور
              </a>
            </div>
            <div className="flex flex-col ">
              <CheckoutGridComponent />
              <CheckoutFormViewComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
EditFactor.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

import { ReactElement, useEffect, useState } from "react";
import AdminLayout from "../adminLayout";
import validator from "validator";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { ToastFail } from "@/utility/tostify";
import { submitAddDiscountAction } from "@/redux/store/discount";
import {
  discountFormCleard,
  setFormSDate,
  setFormEDate,
  setFormTitle,
  setFormValue,
  setFormProductId,
} from "@/redux/store/discountForm";
import { rgx_date, rgx_insecure } from "@/utility/regex";
import { getProductsAction } from "@/redux/store/products";

export default function AddDiscount() {
  const dispatch = useAppDispatch();
  const productsState = useAppSelector((state) => state.entities.products);
  const discountFormState = useAppSelector(
    (state) => state.entities.discountForm
  );
  useEffect(() => {
    dispatch(discountFormCleard());
    dispatch(getProductsAction());
  }, []);
  async function submitAddDiscount(event: any): Promise<void> {
    // event.preventDefault();

    if (discountFormState.data.formIsValid) {
      const x = {
        _id: "",
        sDate: discountFormState.data.sDate,
        eDate: discountFormState.data.eDate,
        title: discountFormState.data.title,
        type: 1,
        value: discountFormState.data.value,
        productId: discountFormState.data.productId,
      };
      try {
        dispatch(submitAddDiscountAction(x));
      } catch (err) {
        console.log("rrrr");
      }
    } else {
      ToastFail("لطفا مقادیر فیلد ها را با دقت وارد کنید");
    }
  }
  function fillDiscountValue(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      dispatch(
        setFormValue({
          valueError: "لطفا  میزان تخفیف را وارد کنید",
          formIsValid: false,
          value: text,
        })
      );
    } else if (!validator.matches(text, /^[0-9]+$/)) {
      dispatch(
        setFormValue({
          valueError: "لطفا  میزان تخفیف را به عدد وارد کنید",
          formIsValid: false,
          value: text,
        })
      );
    } else {
      dispatch(
        setFormValue({
          valueError: "",
          formIsValid: true,
          value: text,
        })
      );
    }
  }

  function fillDiscountTitle(event: any): void {
    let text: string = event.target.value;
    if (validator.isEmpty(text)) {
      dispatch(
        setFormTitle({
          titleError: "لطفا عنوان تخفیف را وارد کنید",
          formIsValid: false,
          title: text,
        })
      );
    }else if (validator.matches(text, rgx_insecure)) {
      dispatch(
        setFormTitle({
          titleError: "لطفا کارکترهای غیرمجاز وارد نکنید",
          formIsValid: false,
          title: text,
        })
      );
    } else {
      dispatch(
        setFormTitle({
          titleError: "",
          title: text,
          formIsValid: true,
        })
      );
    }
  }

  function fillDiscountSDate(event: any): void {
    let text: string = event.target.value;
    if (validator.isEmpty(text)) {
      dispatch(
        setFormSDate({
          sDateError: "لطفا تاریخ شروع را وارد کنید",
          formIsValid: false,
          eDate: text,
        })
      );
    } else if (!validator.matches(text, rgx_date)) {
      dispatch(
        setFormSDate({
          sDateError: "لطفا تاریخ شروع را بصورت yyyy-mm-dd وارد کنید",
          formIsValid: false,
          sDate: text,
        })
      );
    } else {
      dispatch(
        setFormSDate({
          sDateError: "",
          sDate: text,
          formIsValid: true,
        })
      );
    }
  }

  function fillDiscountEDate(event: any): void {
    let text: string = event.target.value;
    if (validator.isEmpty(text)) {
      dispatch(
        setFormEDate({
          eDateError: "لطفا تاریخ پایان را وارد کنید",
          formIsValid: false,
          eDate: text,
        })
      );
    } else if (!validator.matches(text, rgx_date)) {
      dispatch(
        setFormEDate({
          eDateError: "لطفا تاریخ پایان را بصورت yyyy-mm-dd وارد کنید",
          formIsValid: false,
          eDate: text,
        })
      );
    } else {
      dispatch(
        setFormEDate({
          eDateError: "",
          eDate: text,
          formIsValid: true,
        })
      );
    }
  }

  function fillDiscountProductId(event: any): void {
    const text = event.target.value;

    dispatch(
      setFormProductId({
        productIdError: "",
        productId: text,
        formIsValid: true,
      })
    );
  }

  return (

    <div className="flex flex-col  w-full gap-4">
    <div className="flex flex-col justify-between w-full  mb-4 bg-white shadow-md shadow-gray-500 ">
      <div >
        <main >
          <div >
            <a className=" flex text-xl border-b px-1 border-gray-400">
                    ثبت اطلاعات تخفیف
                  </a>
                </div>

                <div>
                  <div className="w-full md:w-1/2 mx-auto">
                    <div className="flex flex-col gap-2 m-2">
                      <label htmlFor="title" className="w-20 text-sm font-bold">
                        عنوان<span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className="p-1 border
            border-gray-300 bg-[#F9FAFB]"
                        onChange={fillDiscountTitle}
                        value={discountFormState.data.title}
                      />
                      <p className="text-red-400 text-xs">
                        {discountFormState.data.titleError}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 m-2">
                      <label htmlFor="value" className="w-30 text-sm font-bold">
                        میزان (٪)<span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="value"
                        id="value"
                        className="p-1 border border-gray-300 bg-[#F9FAFB]"
                        onChange={fillDiscountValue}
                        value={discountFormState.data.value}
                      />
                      <p className="text-red-400 text-xs">
                        {discountFormState.data.valueError}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 m-2">
                      <label htmlFor="sDate" className="w-20 text-sm font-bold">
                        تاریخ شروع<span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="sDate"
                        id="sDate"
                        className="p-1 border border-gray-300 bg-[#F9FAFB]"
                        onChange={fillDiscountSDate}
                        value={discountFormState.data.sDate}
                      />
                      <p className="text-red-400 text-xs">
                        {discountFormState.data.sDateError}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 m-2">
                      <label htmlFor="eDate" className="w-20 text-sm font-bold">
                        تاریخ پایان<span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="eDate"
                        id="eDate"
                        className="p-1 border border-gray-300 bg-[#F9FAFB]"
                        onChange={fillDiscountEDate}
                        value={discountFormState.data.eDate}
                      />
                      <p className="text-red-400 text-xs">
                        {discountFormState.data.eDateError}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 m-2">
                      <label
                        htmlFor="productId"
                        className="w-40 text-sm font-bold"
                      >
                        محصول<span className="text-red-600">*</span>
                      </label>
                      <select
                        typeof="text"
                        name="productId"
                        id="productId"
                        className="p-1 outline-none border border-gray-300 bg-[#F9FAFB]"
                        onChange={fillDiscountProductId}
                      >
                        {productsState.list.map((prdct: any) => (
                          <option key={prdct._id} value={prdct._id}>
                            {prdct.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex justify-end p-2">
                      <button
                        type="button"
                        onClick={submitAddDiscount}
                        className="text-white bg-green-400 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        ثبت تخفیف
                      </button>
                    </div>
                  </div>
                  <div className=" flex flex-col"></div>
                </div>
              </main>
            </div>
          </div>
          <div></div>
        </div>

 
  );
}

AddDiscount.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

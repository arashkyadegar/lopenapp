import { useEffect } from "react";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { ToastFail, ToastSuccess } from "@/utility/tostify";
import myAppContext from "./context/context";

export default function CheckoutFormViewComponent({ props }: any) {
  const factorFormState = useAppSelector((state) => state.entities.factorForm);
  const { msgModal, setMsgModal } = React.useContext(myAppContext);
  const factorItemsState = useAppSelector(
    (state) => state.entities.factorItems
  );
  useEffect(() => {
    //dispatch(siteinfoFormFilled(siteInfo));
  }, []);
  async function submitCancelFactor(event: any): Promise<void> {
    alert("فاکتور کنسل شد");
  }
  function toggleMsgModal() {
    setMsgModal(!msgModal);
  }
  async function submitAddFactor(event: any): Promise<void> {
    event.preventDefault();

    // if (factorFormState.data.formIsValid) {
    //   let desc = "";
    //   if (factorFormState.data.desc.trim() == "") {
    //     desc = "توضیحات ندارد";
    //   }

    const factor = {
      _id: "",
      factorNumber: "",
      wbuserId: "",
      refCode: "",
      factorContent: "",
      additionalInfo: "",
      price: 1,
      statusId: 0,
      paymentType: 0,

      fName: factorFormState.data.fName,
      lName: factorFormState.data.lName,
      tel: factorFormState.data.tel,
      mobile: factorFormState.data.mobile,
      state: factorFormState.data.state,
      city: factorFormState.data.city,
      postalCode: factorFormState.data.postalCode,
      address: factorFormState.data.address,
      desc: factorFormState.data.desc,
    };
    const items = factorItemsState.list;
    try {
      ToastSuccess();
    } catch (err) {
      console.log("rrrr");
    }
    // } else {
    //   ToastFail("لطفا مقادیر فیلد ها را با دقت وارد کنید");
    // }
  }
  return (
    <>
      <div className="flex flex-col  w-full gap-4">
        <div className="px-2 mb-4">
          <a className=" flex text-2xl border-b p-4 border-gray-400">مشخصات</a>
        </div>
        <div className="flex flex-col  w-full">
          <form className="w-full flex  flex-col md:flex-row ">
            <div className="w-full md:w-1/2">
              <div className="flex flex-col  gap-2 m-2">
                <label htmlFor="fName" className="w-20 text-sm font-bold">
                  نام
                </label>
                <input
                  disabled
                  type="text"
                  name="fName"
                  id="fName"
                  className=" p-1 outline-none   border border-gray-300  bg-[#F9FAFB]"
                  placeholder="نام"
                  value={factorFormState.data.fName}
                />
              </div>
              <div className="flex flex-col  gap-2  m-2">
                <label htmlFor="lName" className="w-20 text-sm  font-bold">
                  نام خانوادگی
                </label>
                <input
                  disabled
                  type="text"
                  name="lName"
                  id="lName"
                  className="p-1 outline-none   border border-gray-300  bg-[#F9FAFB]"
                  placeholder="نام خانوادگی"
                  value={factorFormState.data.lName}
                />
              </div>

              <div className="flex flex-col  gap-2  m-2 ">
                <label htmlFor="mobile" className="w-20 text-sm  font-bold">
                  موبایل
                </label>
                <input
                  disabled
                  type="text"
                  name="mobile"
                  id="mobile"
                  className="p-1 outline-none   border border-gray-300  bg-[#F9FAFB]"
                  placeholder="موبایل"
                  value={factorFormState.data.mobile}
                />
              </div>

              <div className="flex flex-col  gap-2  m-2 ">
                <label htmlFor="tel" className="w-20 text-sm  font-bold">
                  تلفن
                </label>
                <input
                  disabled
                  type="text"
                  name="tel"
                  id="tel"
                  className=" p-1 outline-none   border border-gray-300  bg-[#F9FAFB]"
                  placeholder="تلفن"
                  value={factorFormState.data.tel}
                />
              </div>
              <div className="flex flex-col   gap-2   mx-2 sm:mt-2   ">
                <label htmlFor="address" className="w-20 text-sm  font-bold">
                  آدرس
                </label>
                <textarea
                  disabled
                  name="address"
                  id="address"
                  rows={4}
                  className="grow p-2 outline-none   border border-gray-300  bg-[#F9FAFB]"
                  placeholder="آدرس"
                  value={factorFormState.data.address}
                ></textarea>
                <p className="text-red-400 text-xs h-5">
                  {factorFormState.data.addressError}
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="flex flex-col   gap-2  mx-2 sm:mt-2 ">
                <label htmlFor="state" className="w-20 text-sm  font-bold">
                  استان
                </label>

                <input
                  disabled
                  type="text"
                  name="state"
                  id="state"
                  className=" p-1 outline-none   border border-gray-300  bg-[#F9FAFB]"
                  value={factorFormState.data.state}
                />
              </div>
              <div className="flex flex-col  gap-2  mx-2 sm:mt-2  ">
                <label htmlFor="text_city" className="w-20 text-sm  font-bold">
                  شهر
                </label>
                <input
                  disabled
                  type="text"
                  name="city"
                  id="city"
                  className=" p-1 outline-none   border border-gray-300  bg-[#F9FAFB]"
                  value={factorFormState.data.city}
                />
              </div>

              <div className="flex flex-col  gap-2  m-2 ">
                <label htmlFor="postalCode" className="w-20 text-sm  font-bold">
                  کد پستی
                </label>
                <input
                  disabled
                  type="text"
                  name="postalCode"
                  id="postalCode"
                  className=" p-1 outline-none   border border-gray-300  bg-[#F9FAFB]"
                  placeholder="کد پستی"
                  value={factorFormState.data.postalCode}
                />
              </div>

              <div className="flex flex-col  gap-2  m-2 ">
              <label htmlFor="email" className="w-20 text-sm  font-bold">
                ایمیل
              </label>
              <input
               disabled
                type="text"
                name="email"
                id="email"
                className=" p-1 outline-none   border border-gray-300  bg-[#F9FAFB]"
                placeholder="ایمیل"
           
                value={factorFormState.data.email}
              />

            </div>
              <div className="flex flex-col    gap-2  m-2  ">
                <label htmlFor="desc" className="w-20 text-sm  font-bold">
                  توضیحات
                </label>
                <textarea
                  disabled
                  name="desc"
                  id="desc"
                  rows={4}
                  className="grow p-2 outline-none   border border-gray-300  bg-[#F9FAFB]"
                  placeholder="توضیحات"
                  value={factorFormState.data.desc}
                ></textarea>
              </div>
              <div className="flex justify-end p-2 gap-3">
                <button
                  type="button"
                  onClick={toggleMsgModal}
                  className=" text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  ارسال پیام
                </button>

                <button
                  type="button"
                  onClick={submitAddFactor}
                  className=" text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  تایید
                </button>

                <button
                  type="button"
                  onClick={submitCancelFactor}
                  className=" text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

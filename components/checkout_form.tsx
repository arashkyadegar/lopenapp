import myAppContext from "@/components/context/context";
import { useEffect } from "react";
import React, { useState } from "react";
import statesJson from "../utility/states.json";
import citiesJson from "../utility/citys.json";
import { CityEntity, StateEntity } from "@/models/entities";
import validator from "validator";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { factorFormCleard, factorFormFilled } from "@/redux/store/factorForm";
import { ToastFail } from "@/utility/tostify";
import {
  factorItemRecieved,
  submitAddFactorAction,
} from "@/redux/store/factorItems";

export default function CheckoutFormComponent({ props }: any) {
  const stateList: Array<StateEntity> = statesJson;
  const cityList: Array<CityEntity> = citiesJson;
  let stateId = "0";
  const { cities, setCities } = React.useContext(myAppContext);
  const { citiesUlToggle, setCitiesUlToggle } = React.useContext(myAppContext);
  const { statesUlToggle, setStatesUlToggle } = React.useContext(myAppContext);
  const [states, setStates] = React.useState(statesJson);

  const dispatch = useAppDispatch();
  const factorFormState = useAppSelector((state) => state.entities.factorForm);
  const factorItemsState = useAppSelector(
    (state) => state.entities.factorItems
  );
  useEffect(() => {
    // dispatch(factorFormCleard());
  }, []);

  function stateTextKeyUp(event: any): void {
    const node = event.target as HTMLInputElement;
    const stateName = node.value;
    const filtered = stateList.filter((state) => state.name.match(stateName));
    setStates(filtered);
  }

  function stateChange(event: any): void {
    const node = event.target as HTMLInputElement;
    stateId = node.value;
    const stateName = node.innerHTML;
    let filtered = cityList.filter((city) => city.stateId == stateId);

    dispatch(
      factorFormFilled({
        ...factorFormState.data,
        state: stateName,
      })
    );
    // state
    setCities(filtered);
    stateUlToggle();
  }

  function cityChange(event: any): void {
    const node = event.target as HTMLElement;
    const city = node.innerHTML;
    dispatch(
      factorFormFilled({
        ...factorFormState.data,
        city: city,
      })
    );
    cityUlToggle();
  }

  function cityTextKeyUp(event: any): void {
    const node = event.target as HTMLInputElement;
    const cityName = node.value;
    const base = cities;
    if (cityName.trim() != "") {
      const filtered = cities.filter((city) => city.name.match(cityName));
      setCities(filtered);
    } else {
      setCities(base);
    }
  }

  function stateUlToggle(): void {
    setStatesUlToggle(!statesUlToggle);
  }

  function cityUlToggle(): void {
    setCitiesUlToggle(!citiesUlToggle);
  }
  // form-validation-start
  function fillFNameText(event: any) {
    let text: string = event.target.value;
    if (validator.isEmpty(text)) {
      dispatch(
        factorFormFilled({
          ...factorFormState.data,
          fNameError: "لطفا نام خود را وارد کنید",
          formIsValid: false,
          fName: text,
        })
      );
    } else {
      dispatch(
        factorFormFilled({
          ...factorFormState.data,
          fNameError: "",
          fName: text,
          formIsValid: true,
        })
      );
    }
  }

  function fillLNameText(event: any) {
    let text: string = event.target.value;
    if (validator.isEmpty(text)) {
      dispatch(
        factorFormFilled({
          ...factorFormState.data,
          lNameError: "لطفا نام خانوادگی خود را وارد کنید",
          formIsValid: false,
          lName: text,
        })
      );
    } else {
      dispatch(
        factorFormFilled({
          ...factorFormState.data,
          lNameError: "",
          lName: text,
          formIsValid: true,
        })
      );
    }
  }

  function fillMobileText(event: any) {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      dispatch(
        factorFormFilled({
          ...factorFormState.data,
          mobileError: "لطفا موبایل خود را وارد کنید",
          formIsValid: false,
          mobile: text,
        })
      );
    } else {
      dispatch(
        factorFormFilled({
          ...factorFormState.data,
          mobileError: "",
          mobile: text,
          formIsValid: true,
        })
      );
    }
  }
  function fillEmailText(event: any) {
    let text: string = event.target.value;
    if (validator.isEmpty(text)) {
      dispatch(
        factorFormFilled({
          ...factorFormState.data,
          emailError: "لطفا ایمیل خود را وارد کنید",
          formIsValid: false,
          email: text,
        })
      );
    } else if (!validator.isEmail(text)) {
      dispatch(
        factorFormFilled({
          ...factorFormState.data,
          emailError: "لطفا ایمیل خود را بصورت صحیح وارد کنید",
          formIsValid: false,
          email: text,
        })
      );
    } else {
      dispatch(
        factorFormFilled({
          ...factorFormState.data,
          emailError: "",
          email: text,
          formIsValid: true,
        })
      );
    }
  }
  function fillTelText(event: any) {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      dispatch(
        factorFormFilled({
          ...factorFormState.data,
          telError: "لطفا تلفن خود را وارد کنید",
          formIsValid: false,
          tel: text,
        })
      );
    } else {
      dispatch(
        factorFormFilled({
          ...factorFormState.data,
          telError: "",
          tel: text,
          formIsValid: true,
        })
      );
    }
  }
  function fillDescText(event: any) {
    let text: string = event.target.value;
    dispatch(
      factorFormFilled({
        ...factorFormState.data,
        desc: text,
      })
    );
  }
  function fillAddressText(event: any) {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      dispatch(
        factorFormFilled({
          ...factorFormState.data,
          addressError: "لطفا آدرس خود را وارد کنید",
          formIsValid: false,
          address: text,
        })
      );
    } else {
      dispatch(
        factorFormFilled({
          ...factorFormState.data,
          addressError: "",
          address: text,
          formIsValid: true,
        })
      );
    }
  }

  function fillPostCodeText(event: any) {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      dispatch(
        factorFormFilled({
          ...factorFormState.data,
          postalCodeError: "لطفا کد پستی خود را وارد کنید",
          formIsValid: false,
          postalCode: text,
        })
      );
    } else {
      dispatch(
        factorFormFilled({
          ...factorFormState.data,
          postalCodeError: "",
          postalCode: text,
          formIsValid: true,
        })
      );
    }
  }

  async function submitAddFactor(event: any): Promise<void> {
    event.preventDefault();

    // if (factorFormState.data.formIsValid) {
    //   const factor = {
    //     _id: "",
    //     factorNumber: "",
    //     wbuserId: "",
    //     refCode: "",
    //     factorContent: "",
    //     additionalInfo: "",
    //     price: 1,
    //     statusId: 0,
    //     paymentType: 0,

    //     fName: factorFormState.data.fName,
    //     lName: factorFormState.data.lName,
    //     email:factorFormState.data.email,
    //     tel: factorFormState.data.tel,
    //     mobile: factorFormState.data.mobile,
    //     state: factorFormState.data.state,
    //     city: factorFormState.data.city,
    //     postalCode: factorFormState.data.postalCode,
    //     address: factorFormState.data.address,
    //     desc: factorFormState.data.desc,
    //   };
    //   const items = factorItemsState.list;
    //   try {
    //     dispatch(submitAddFactorAction(factor, items));
    //     dispatch(factorItemRecieved([]));
    //   } catch (err) {
    //     console.log("rrrr");
    //   }
    // } else {
    //   ToastFail("لطفا مقادیر فیلد ها را با دقت وارد کنید");
    // }
  }
  return (
    <>
      <div className=" mb-4">
        <a className=" flex text-2xl border-b border-gray-400">مشخصات</a>
      </div>
      <form className="flex flex-col sm:flex-row w-full">
        <div className="flex flex-col  sm:w-1/2">
          <div className="flex flex-col  gap-2 m-2">
            <label htmlFor="fName" className="w-20 text-sm font-bold">
              نام<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              className=" p-1 outline-none h-8  border border-gray-300  bg-[#F9FAFB]"
              placeholder="نام"
              onChange={fillFNameText}
              value={factorFormState.data.fName}
            />
            <p className="text-red-400 text-xs h-5">
              {factorFormState.data.fNameError}
            </p>
          </div>
          <div className="flex flex-col  gap-2  m-1">
            <label htmlFor="lName" className="w-20 text-sm  font-bold">
              نام خانوادگی<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="lName"
              id="lName"
              className="p-1 outline-none h-8   border border-gray-300  bg-[#F9FAFB]"
              placeholder="نام خانوادگی"
              onChange={fillLNameText}
              value={factorFormState.data.lName}
            />
            <p className="text-red-400 text-xs h-5">
              {factorFormState.data.lNameError}
            </p>
          </div>

          <div className="flex flex-col  gap-2  m-2 ">
            <label htmlFor="mobile" className="w-20 text-sm  font-bold">
              موبایل<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="mobile"
              id="mobile"
              className="p-1 outline-none   border border-gray-300  bg-[#F9FAFB]"
              placeholder="موبایل"
              onChange={fillMobileText}
              value={factorFormState.data.mobile}
            />
            <p className="text-red-400 text-xs h-5">
              {factorFormState.data.mobileError}
            </p>
          </div>

          <div className="flex flex-col  gap-2  m-2 ">
            <label htmlFor="tel" className="w-20 text-sm  font-bold">
              تلفن<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="tel"
              id="tel"
              className=" p-1 outline-none   border border-gray-300  bg-[#F9FAFB]"
              placeholder="تلفن"
              onChange={fillTelText}
              value={factorFormState.data.tel}
            />
            <p className="text-red-400 text-xs h-5">
              {factorFormState.data.telError}
            </p>
          </div>

          <div className="flex flex-col   gap-2   mx-2 sm:mt-2   ">
            <label htmlFor="address" className="w-20 text-sm  font-bold">
              آدرس<span className="text-red-600">*</span>
            </label>
            <textarea
              name="address"
              id="address"
              rows={4}
              className="grow p-2 outline-none   border border-gray-300  bg-[#F9FAFB]"
              placeholder="آدرس"
              onChange={fillAddressText}
              value={factorFormState.data.address}
            ></textarea>
            <p className="text-red-400 text-xs h-5">
              {factorFormState.data.addressError}
            </p>
          </div>
        </div>
        <div className="flex flex-col  sm:w-1/2">
          <div className="flex flex-col   gap-2  mx-2 sm:mt-2 ">
            <label htmlFor="text_state" className="w-20 text-sm  font-bold">
              استان<span className="text-red-600">*</span>
            </label>
            <div className="flex flex-col mb-3">
              <div className="flex flex-row w-full items-center relative">
                <div className="h-8 w-full   outline-none   border border-gray-300  bg-[#F9FAFB]">
                  <input
                    value={factorFormState.data.state}
                    className="bg-transparent outline-none "
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 absolute left-1 top-3 cursor-pointer"
                    onClick={stateUlToggle}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
              {statesUlToggle && (
                <ul className=" p-1 outline-none   border border-gray-300  bg-[#F9FAFB]">
                  <li>
                    <input
                      type="text"
                      onKeyUp={stateTextKeyUp}
                      className="p-1 outline-none w-full  border border-gray-300"
                    ></input>
                  </li>
                  {states.map((element) => (
                    <li
                      key={element.id}
                      onClick={stateChange}
                      value={element.id}
                      className="hover:bg-[#80BB01]  hover:text-white cursor-pointer"
                    >
                      {element.name}
                    </li>
                  ))}
                </ul>
              )}
              <p className="text-red-400 text-xs h-5">
                {factorFormState.data.stateError}
              </p>
            </div>
          </div>
          <div className="flex flex-col  gap-2  mx-2 sm:mt-2  ">
            <label htmlFor="text_city" className="w-20 text-sm  font-bold">
              شهر<span className="text-red-600">*</span>
            </label>

            <div className="flex flex-col  mb-3 ">
              <div className="flex flex-row items-center relative">
                <div className="h-8 w-full  outline-none   border border-gray-300  bg-[#F9FAFB]">
                  <input
                    value={factorFormState.data.city}
                    className="bg-transparent outline-none "
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 absolute left-1 top-3 cursor-pointer"
                    onClick={cityUlToggle}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
              {citiesUlToggle && (
                <ul className="h-40 overflow-y-auto p-1 outline-none   border border-gray-300  bg-[#F9FAFB]">
                  <li>
                    <input
                      type="text"
                      onKeyUp={cityTextKeyUp}
                      className="p-1 outline-none  w-full  border border-gray-300"
                    ></input>
                  </li>
                  {cities.map((element) => (
                    <li
                      key={element.name}
                      onClick={cityChange}
                      className="hover:bg-[#80BB01]  hover:text-white cursor-pointer"
                    >
                      {element.name}
                    </li>
                  ))}
                </ul>
              )}
              <p className="text-red-400 text-xs h-5">
                {factorFormState.data.cityError}
              </p>
            </div>
          </div>

          <div className="flex flex-col  gap-2  m-2 ">
            <label htmlFor="postalCode" className="w-20 text-sm  font-bold">
              کد پستی<span className="text-red-600">*</span>
            </label>
                   
            <input
              type="text"
              name="postalCode"
              id="postalCode"
              className=" p-1 outline-none   border border-gray-300  bg-[#F9FAFB]"
              placeholder="کد پستی"
              onChange={fillPostCodeText}
              value={factorFormState.data.postalCode}
            />
            <p className="text-red-400 text-xs h-5">
              {factorFormState.data.postalCodeError}
            </p>
          </div>

          <div className="flex flex-col  gap-2  m-2 ">
            <label htmlFor="email" className="w-20 text-sm  font-bold">
              ایمیل<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className=" p-1 outline-none   border border-gray-300  bg-[#F9FAFB]"
              placeholder="ایمیل"
              onChange={fillEmailText}
              value={factorFormState.data.email}
            />
            <p className="text-red-400 text-xs h-5">
              {factorFormState.data.emailError}
            </p>
          </div>
          <div className="flex flex-col    gap-2  m-2  ">
            <label htmlFor="desc" className="w-20 text-sm  font-bold">
              توضیحات
            </label>
            <textarea
              name="desc"
              id="desc"
              rows={4}
              className="grow p-2 outline-none   border border-gray-300  bg-[#F9FAFB]"
              placeholder="توضیحات"
              onChange={fillDescText}
              value={factorFormState.data.desc}
            ></textarea>
          </div>
          <div className="flex justify-end p-2">
            {/* <button
              type="button"
              onClick={submitAddFactor}
              className=" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              ارسال
            </button> */}
          </div>
        </div>
      </form>
    </>
  );
}

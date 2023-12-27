import myAppContext from "@/components/context/context";
import Image from "next/image";
import React, { useState } from "react";
import statesJson from "../utility/states.json";
import citiesJson from "../utility/citys.json";
import { CityEntity, FactorForm, StateEntity } from "@/models/entities";
import validator from "validator";
export default function Checkout() {
  const stateList: Array<StateEntity> = statesJson;
  const cityList: Array<CityEntity> = citiesJson;

  const { cities, setCities } = React.useContext(myAppContext);
  const { citiesUlToggle, setCitiesUlToggle } = React.useContext(myAppContext);
  const { statesUlToggle, setStatesUlToggle } = React.useContext(myAppContext);
  const [states, setStates] = React.useState(statesJson);

  const [factorForm, setFactorForm] = useState(new FactorForm());
  function stateTextKeyUp(event: any): void {
    const node = event.target as HTMLInputElement;
    const stateName = node.value;
    const filtered = stateList.filter((state) => state.name.match(stateName));
    setStates(filtered);
  }

  function stateChange(event: any): void {
    const node = event.target as HTMLInputElement;
    const stateId = node.value;
    let filtered = cityList.filter((city) => city.stateId == stateId);
    setCities(filtered);
    stateUlToggle();
  }

  function cityChange(event: any): void {
    const node = event.target as HTMLElement;
    const city = node.innerHTML;
    //alert(city);
    cityUlToggle();
  }

  function cityTextKeyUp(event: any): void {
    const node = event.target as HTMLInputElement;
    const cityName = node.value;
    const filtered = cities.filter((city) => city.name.match(cityName));
    setCities(filtered);
  }

  function stateUlToggle(): void {
    setStatesUlToggle(!statesUlToggle);
  }

  function cityUlToggle(): void {
    setCitiesUlToggle(!citiesUlToggle);
  }
  // form-validation-start
  function fillFNameText(event: any) {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      setFactorForm({
        ...factorForm,
        fNameError: "لطفا نام خود را وارد کنید",
        formIsValid: false,
      });
    } else {
      setFactorForm({
        ...factorForm,
        fNameError: "",
        fName: text,
        formIsValid: true,
      });
    }
  }

  function fillLNameText(event: any) {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      setFactorForm({
        ...factorForm,
        lNameError: "لطفا نام خانوادگی خود را وارد کنید",
        formIsValid: false,
      });
    } else {
      setFactorForm({
        ...factorForm,
        lNameError: "",
        lName: text,
        formIsValid: true,
      });
    }
  }

  function fillMobileText(event: any) {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      setFactorForm({
        ...factorForm,
        mobileError: "لطفا موبایل خود را وارد کنید",
        formIsValid: false,
      });
    } else {
      setFactorForm({
        ...factorForm,
        mobileError: "",
        mobile: text,
        formIsValid: true,
      });
    }
  }

  function fillPhoneText(event: any) {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      setFactorForm({
        ...factorForm,
        phoneError: "لطفا تلفن خود را وارد کنید",
        formIsValid: false,
      });
    } else {
      setFactorForm({
        ...factorForm,
        phoneError: "",
        phone: text,
        formIsValid: true,
      });
    }
  }

  function fillAddressText(event: any) {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      setFactorForm({
        ...factorForm,
        addressError: "لطفا آدرس خود را وارد کنید",
        formIsValid: false,
      });
    } else {
      setFactorForm({
        ...factorForm,
        addressError: "",
        address: text,
        formIsValid: true,
      });
    }
  }

  function fillPostCodeText(event: any) {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      setFactorForm({
        ...factorForm,
        postCodeError: "لطفا کد پستی خود را وارد کنید",
        formIsValid: false,
      });
    } else {
      setFactorForm({
        ...factorForm,
        postCodeError: "",
        postCode: text,
        formIsValid: true,
      });
    }
  }

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
            <div className="flex flex-row ">
              <div className="flex flex-col border border-red-400 w-2/3">
                <div className=" col-span-5 sm:col-span-3">
                  <form className="max-w-md mx-auto rtl">
                    <div className="flex flex-col  gap-2 m-2">
                      <label
                        htmlFor="text_fName"
                        className="w-20 text-sm font-bold"
                      >
                        نام
                      </label>
                      <input
                        type="text"
                        name="text_fName"
                        id="fName"
                        onChange={fillFNameText}
                        className=" p-1 outline-none   border border-gray-300  bg-[#F9FAFB]"
                        placeholder="نام"
                      />
                      <p className="text-red-400 text-xs">
                        {factorForm.fNameError}
                      </p>
                    </div>
                    <div className="flex flex-col  gap-2  m-2 ">
                      <label
                        htmlFor="text_lName"
                        className="w-20 text-sm  font-bold"
                      >
                        نام خانوادگی
                      </label>
                      <input
                        type="text"
                        name="text_lName"
                        id="lName"
                        onChange={fillLNameText}
                        className="p-1 outline-none   border border-gray-300  bg-[#F9FAFB]"
                        placeholder="نام خانوادگی"
                      />
                      <p className="text-red-400 text-xs">
                        {factorForm.lNameError}
                      </p>
                    </div>

                    <div className="flex flex-col  gap-2  m-2 ">
                      <label
                        htmlFor="text_mobile"
                        className="w-20 text-sm  font-bold"
                      >
                        موبایل
                      </label>
                      <input
                        type="text"
                        name="text_mobile"
                        id="mobile"
                        onChange={fillMobileText}
                        className="p-1 outline-none   border border-gray-300  bg-[#F9FAFB]"
                        placeholder="موبایل"
                      />
                      <p className="text-red-400 text-xs">
                        {factorForm.mobileError}
                      </p>
                    </div>

                    <div className="flex flex-col  gap-2  m-2 ">
                      <label
                        htmlFor="text_phone"
                        className="w-20 text-sm  font-bold"
                      >
                        تلفن
                      </label>
                      <input
                        type="text"
                        name="text_phone"
                        id="phone"
                        onChange={fillPhoneText}
                        className=" p-1 outline-none   border border-gray-300  bg-[#F9FAFB]"
                        placeholder="تلفن"
                      />
                      <p className="text-red-400 text-xs">
                        {factorForm.phoneError}
                      </p>
                    </div>

                    <div className="flex flex-col   gap-2  m-2  ">
                      <label
                        htmlFor="text_address"
                        className="w-20 text-sm  font-bold"
                      >
                        آدرس
                      </label>
                      <textarea
                        name="text_address"
                        id="address"
                        onChange={fillAddressText}
                        className="grow p-1 outline-none   border border-gray-300  bg-[#F9FAFB]"
                        placeholder="آدرس"
                      ></textarea>
                      <p className="text-red-400 text-xs">
                        {factorForm.addressError}
                      </p>
                    </div>
                    <div className="flex flex-col   gap-2  m-2  ">
                      <label
                        htmlFor="text_state"
                        className="w-20 text-sm  font-bold"
                      >
                        استان
                      </label>

                      <div className="flex flex-col w-1/2">
                        <div className="flex flex-row w-full items-center relative">
                          <div className="h-9 w-full p-1 outline-none   border border-gray-300  bg-[#F9FAFB]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-4 h-4 absolute left-1 top-3 cursor-pointer"
                              onClick={stateUlToggle}
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
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
                                onClick={stateChange}
                                value={element.id}
                                className="hover:bg-[#80BB01]  hover:text-white cursor-pointer"
                              >
                                {element.name}
                              </li>
                            ))}
                            {/* <li
                            onClick={stateChanged}
                            className="hover:bg-[#80BB01]  hover:text-white cursor-pointer"
                          >
                            خراسان رضوی
                          </li>
                          <li className="hover:bg-[#80BB01]  hover:text-white  cursor-pointer">
                            خراسان شمالی
                          </li>
                          <li className="hover:bg-[#80BB01]  hover:text-white  cursor-pointer">
                            خراسان جنوبی
                          </li> */}
                          </ul>
                        )}
                        <p className="text-red-400 text-xs">
                          {factorForm.stateError}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col  gap-2  m-2  ">
                      <label
                        htmlFor="text_city"
                        className="w-20 text-sm  font-bold"
                      >
                        شهر
                      </label>

                      <div className="flex flex-col  w-1/2">
                        <div className="flex flex-row items-center relative">
                          <div className="h-9 w-full p-1 outline-none   border border-gray-300  bg-[#F9FAFB]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-4 h-4 absolute left-1 top-3 cursor-pointer"
                              onClick={cityUlToggle}
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </div>
                        </div>
                        {citiesUlToggle && (
                          <ul className=" p-1 outline-none   border border-gray-300  bg-[#F9FAFB]">
                            <li>
                              <input
                                type="text"
                                onKeyUp={cityTextKeyUp}
                                className="p-1 outline-none  w-full  border border-gray-300"
                              ></input>
                            </li>
                            {cities.map((element) => (
                              <li
                                onClick={cityChange}
                                className="hover:bg-[#80BB01]  hover:text-white cursor-pointer"
                              >
                                {element.name}
                              </li>
                            ))}
                          </ul>
                        )}
                        <p className="text-red-400 text-xs">
                          {factorForm.cityError}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col  gap-2  m-2 ">
                      <label
                        htmlFor="text_postalCode"
                        className="w-20 text-sm  font-bold"
                      >
                        کد پستی
                      </label>
                      <input
                        type="text"
                        name="text_postalCode"
                        id="postalCode"
                        onChange={fillPostCodeText}
                        className=" p-1 outline-none   border border-gray-300  bg-[#F9FAFB]"
                        placeholder="کد پستی"
                      />
                      <p className="text-red-400 text-xs">
                        {factorForm.postCodeError}
                      </p>
                    </div>

                    <div className="flex flex-col    gap-2  m-2  ">
                      <label
                        htmlFor="text_info"
                        className="w-20 text-sm  font-bold"
                      >
                        توضیحات
                      </label>
                      <textarea
                        name="text_info"
                        id="info"
                        className="grow p-1 outline-none   border border-gray-300  bg-[#F9FAFB]"
                        placeholder="توضیحات"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      ارسال
                    </button>
                  </form>
                </div>
              </div>
              <div className="flex flex-col border border-blue-400 w-1/3">
                <div className="px-2">
                  <a className=" flex text-2xl border-b p-4 border-gray-400">
                    خرید شما
                  </a>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Checkout.Layout = "Main";

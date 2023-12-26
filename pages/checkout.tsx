import myAppContext from "@/components/context/context";
import Image from "next/image";
import React from "react";
import statesJson from "../utility/states.json";
import citiesJson from "../utility/citys.json";
import { CityEntity, StateEntity } from "@/models/entities";
export default function Checkout() {
  const stateList: Array<StateEntity> = statesJson;
  const cityList: Array<CityEntity> = citiesJson;

  const { cities, setCities } = React.useContext(myAppContext);
  const { citiesUlToggle, setCitiesUlToggle } = React.useContext(myAppContext);
  const { statesUlToggle, setStatesUlToggle } = React.useContext(myAppContext);
  const [states, setStates] = React.useState(statesJson);

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
              <div className="flex flex-col border border-red-400 w-1/2">
                <div className=" col-span-5 sm:col-span-3">
                  <form className="max-w-md mx-auto rtl">
                    <div className="flex flex-col sm:flex-row sm:items-center  gap-2 m-2">
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
                        className="p-1 outline-none   border border-gray-300  bg-[#F9FAFB]"
                        placeholder="نام"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row  sm:items-center  gap-2  m-2 ">
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
                        className="p-1 outline-none   border border-gray-300  bg-[#F9FAFB]"
                        placeholder="نام خانوادگی"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row  sm:items-center  gap-2  m-2 ">
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
                        className="p-1 outline-none   border border-gray-300  bg-[#F9FAFB]"
                        placeholder="موبایل"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row  sm:items-center  gap-2  m-2 ">
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
                        className=" p-1 outline-none   border border-gray-300  bg-[#F9FAFB]"
                        placeholder="تلفن"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row   gap-2  m-2  ">
                      <label
                        htmlFor="text_address"
                        className="w-20 text-sm  font-bold"
                      >
                        آدرس
                      </label>
                      <textarea
                        name="text_address"
                        id="address"
                        className="grow p-1 outline-none   border border-gray-300  bg-[#F9FAFB]"
                        placeholder="آدرس"
                      ></textarea>
                    </div>
                    <div className="flex flex-col sm:flex-row    gap-2  m-2  ">
                      <label
                        htmlFor="text_state"
                        className="w-20 text-sm  font-bold"
                      >
                        استان
                      </label>

                      <div className="flex flex-col sm:w-1/2">
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
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row    gap-2  m-2  ">
                      <label
                        htmlFor="text_city"
                        className="w-20 text-sm  font-bold"
                      >
                        شهر
                      </label>

                      <div className="flex flex-col  sm:w-1/2">
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
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row  sm:items-center  gap-2  m-2 ">
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
                        className=" p-1 outline-none   border border-gray-300  bg-[#F9FAFB]"
                        placeholder="کد پستی"
                      />
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
              <div className="flex flex-col border border-blue-400 w-1/2">
                2
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Checkout.Layout = "Main";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
export default function SingleProduct() {
  return (
    <>
      <div className="container p-4">
        <div className="flex flex-col  justify-center w-full gap-4">
          <div className="flex flex-col justify-between w-4/4  gap-4 py-4  my-4 bg-white shadow-md shadow-gray-500 ">
            <div className="px-2">
              <a className=" flex text-2xl border-b p-4 border-gray-400">
                جزیات محصول
              </a>
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 p-4">
                <div className="">
                  {/* single product image */}
                  <div className="text-right relative text-sm  mx-auto  max-w-sm bg-white    border border-[#FBF6EE]           hover:border-[#FFB534] transition duration-200 shadow dark:bg-gray-800 dark:border-gray-700">
                    <span className="flex left-0 font-bold bg-red-600  items-center w-16 h-6 justify-center text-center text-xs absolute text-white">
                      <a>15%</a>
                    </span>
                    <div className="flex mb-2 h-72  overflow-hidden mt-6 justify-center">
                      <div>
                        <a href="#" className=" w-full h-full aspect-auto">
                          <Image
                            src="/images3.jpg"
                            width={800}
                            height={800}
                            className=" hover:scale-110 w-fit h-full aspect-auto transition duration-500 cursor-pointer"
                            alt="product image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* swiper-top */}
                  <div className="  w-52 aspect-auto  my-4 mx-auto flex justify-center ">
                    <Swiper
                      className=""
                      modules={[
                        Navigation,
                        Pagination,
                        Scrollbar,
                        A11y,
                        Autoplay,
                      ]}
                      spaceBetween={1}
                      slidesPerView={3}
                      autoplay={false}
                      loop={true}
                      //    navigation={true}
                      onSlideChange={() => console.log("slide change")}
                      onSwiper={(swiper) => console.log(swiper)}
                      onNavigationNext={() => {}}
                      onNavigationPrev={() => {}}
                    >
                      <SwiperSlide className="cursor-pointer border hover:border-[#FFB534] transition duration-200">
                        <Image
                          src="/images1.jpg"
                          width={500}
                          height={500}
                          className=" mx-auto  h-full  aspect-square "
                          alt="user avator"
                        />
                      </SwiperSlide>

                      <SwiperSlide className="cursor-pointer border hover:border-[#FFB534] transition duration-200">
                        <Image
                          src="/images2.jpg"
                          width={500}
                          height={500}
                          className=" mx-auto  h-full  aspect-square "
                          alt="user avator"
                        />
                      </SwiperSlide>
                      <SwiperSlide className="cursor-pointer border hover:border-[#FFB534] transition duration-200">
                        <Image
                          src="/images3.jpg"
                          width={500}
                          height={500}
                          className=" mx-auto  h-full  aspect-square "
                          alt="user avator"
                        />
                      </SwiperSlide>
                      <SwiperSlide className="cursor-pointer border hover:border-[#FFB534] transition duration-200">
                        <Image
                          src="/images4.jpg"
                          width={500}
                          height={500}
                          className=" mx-auto  h-full  aspect-square "
                          alt="user avator"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                {/* products properties */}
                <div>
                  <div className="px-5 pb-5 ">
                    <div className="flex flex-col gap-2 mb-2">
                      <a href="#">
                        <h5 className="text-base  text-right font-semibold tracking-tight dark:text-white">
                          آبنبات مخصوص هلدار
                        </h5>
                      </a>
                      <div className="flex flex-col  border-b pb-4 border-gray-300 gap-4  w-full justify-between  ">
                        <div className="flex flex-row ">
                          <div className="flex flex-row items-center">
                            <svg
                              className="w-4 h-4 text-yellow-300"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-yellow-300"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-yellow-300"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-yellow-300"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg
                              className="w-4 h-4 text-gray-200 dark:text-gray-600"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          </div>
                          <div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                              5.0
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-row gap-4">
                          <a href="#">
                            <h1 className="text-right text-[#80BB01]  line-clamp-1  font-semibold tracking-tight dark:text-white">
                              15000 تومان
                            </h1>
                          </a>
                          <a href="#">
                            <h1 className=" line-through  line-clamp-1 font-semibold tracking-tight  dark:text-white">
                              18000 تومان
                            </h1>
                          </a>
                        </div>
                        <div>
                          <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                            است
                          </p>
                        </div>
                        <div className=" flex flex-row gap-2 items-center">
                          <div>
                            <input
                              type="number"
                              min="1"
                              defaultValue={1}
                              name="floating_email"
                              id="floating_email"
                              className="p-1 w-10 h-9 outline-none border border-gray-400"
                              placeholder=" "
                              required
                            />
                          </div>
                          <div className=" flex flex-row w-1/2 items-center justify-right bg-slate-300 px-3 py-2  cursor-pointer hover:text-white  hover:bg-[#80BB01] transition-all duration-300">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              data-slot="icon"
                              className="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                              />
                            </svg>
                            <a>افزودن به سبد خرید</a>
                          </div>
                        </div>
                      </div>
                      <a className="text-2xl my-2">مشخصات</a>

                      <div className="grid grid-cols-5 gap-4">
                        <div className="col-span-2  p-1">
                          <a>ابعاد :</a>
                        </div>
                        <div className="col-span-3 border-b border-gray-200">
                          <a>۸.۵×۷۵.۹×۱۶۴.۶ میلی‌متر</a>
                        </div>
                        <div className="col-span-2  p-1">
                          <a>وزن :</a>
                        </div>
                        <div className="col-span-3 border-b border-gray-200">
                          <a>900 گرم</a>
                        </div>

                        <div className="col-span-2  p-1">
                          <a>ش بهداشت :</a>
                        </div>
                        <div className="col-span-3  border-b border-gray-200">
                          <a>۱۶۲۷۳ ب</a>
                        </div>

                        <div className="col-span-2   p-1">
                          <a>نوع :</a>
                        </div>
                        <div className="col-span-3 border-b border-gray-200">
                          <a>آبنبات هلدار مخصوص</a>
                        </div>

                        <div className="col-span-2 p-1">
                          <a>ترکیبات :</a>
                        </div>
                        <div className="col-span-3  border-b border-gray-200">
                          <a>شکر نعنا آرد سفید </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* users comments  */}

            <div className="p-4 mx-4 bg-white    shadow-md shadow-gray-300 my-4 ">
              <div className="flex flex-row border-b-4 mb-4 px-2 py-1 border-[#EF5621] text-right font-bold">
                <div className="">
                  <a> نظرات کاربران</a>
                </div>
              </div>

              <div className="flex flex-row gap-2 mb-4 p-4">
                <div>
                  <a>متن </a>
                </div>
                <textarea
                  className="w-9/12 border p-2 border-gray-300 outline-none"
                  name=""
                  id=""
                  cols={35}
                  rows={3}
                ></textarea>
                <button className="px-2 bg-slate-300 hover:bg-[#80BB01] w-2/12 h-fit">
                  ارسال
                </button>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {/* user single comment */}
                <div className="flex flex-col border-b even:bg-[#F3F4F8] border-gray-400 p-4 my-2">
                  <div className="flex flex-row justify-between">
                    <a className="text-base font-bold ">ارشک یادگار</a>
                    <a>1392/01/01</a>
                  </div>

                  <p className="text-sm text-justify mt-4">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده
                  </p>
                </div>
                {/* user single comment */}
                <div className="flex flex-col border-b even:bg-[#F3F4F8] border-gray-400 p-4  my-2">
                  <div className="flex flex-row justify-between">
                    <a className="text-base font-bold ">ارشک یادگار</a>
                    <a>1392/01/01</a>
                  </div>

                  <p className="text-sm text-justify mt-4">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده
                  </p>
                </div>
                {/* user single comment */}
                <div className="flex flex-col border-b even:bg-[#F3F4F8] border-gray-400 p-4  my-2">
                  <div className="flex flex-row justify-between">
                    <a className="text-base font-bold ">ارشک یادگار</a>
                    <a>1392/01/01</a>
                  </div>

                  <p className="text-sm text-justify mt-4">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}
SingleProduct.Layout = "Main";

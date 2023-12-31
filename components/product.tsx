import { PropsWithChildren, useEffect } from "react";
import Image from "next/image";
import React from "react";
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
import CommentComponent from "@/components/comment";
import CommentAddComponent from "@/components/comment_add";
import { getNewPrice } from "@/utility/discount";
import ScoreComponent from "./score";
import { factorAdded, factorReAdded } from "@/redux/store/factor";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { selectedProductUpdated } from "@/redux/store/selectedProduct";
import { produce } from "immer";

export default function ProductComponent({ props }: any) {
  const dispatch = useAppDispatch();
  const selectedProductState = useAppSelector(
    (state) => state.entities.selectedProduct
  );
  const factorState = useAppSelector((state) => state.entities.factor);
  const product = JSON.parse(props.product)[0];
  let discount = 0;
  let newPrice = 0;
  if (product.discounts.value != undefined) {
    discount = product.discounts.value;
    newPrice = getNewPrice(product.price, discount);
    //newPrice = product.price - (discount / 100) * product.price;
  }

  function addProductToFactor(): void {
    const factorItem = {
      _id: "",
      factorId: "",
      productId: product._id,
      unitPrice: product.price,
      discount: discount,
      count: selectedProductState.data.count,
      prices: product.price * parseInt(selectedProductState.data.count),
      date: "",
    };

    //calculate discoutn if there is one
    if (discount != 0) {
      factorItem.prices = newPrice * parseInt(factorItem.count);
    } else {
      factorItem.prices = factorItem.unitPrice * parseInt(factorItem.count);
    }
    
    //if item is reselected we should update the count
    let obj = factorState.list.find((x: any) => x.productId == product._id);
    if (obj) {
      const nextState = produce(factorState, (draftState) => {
        const item = draftState.list.map((i: any) => {
          if (i.productId == product._id) {
            let old_count = selectedProductState.data.count;
            let count = i.count;
            i.count = parseInt(count) + parseInt(old_count);
          }
        });
      });
      dispatch(factorReAdded(nextState.list));
    } else {
      dispatch(factorAdded(factorItem));
    }
  }
  function changeProductImage(event: any) {
    const imgSrc = event.target.src;
    dispatch(
      selectedProductUpdated({
        ...selectedProductState.data,
        image: imgSrc,
      })
    );
  }

  function changeProductCount(event: any) {
    const value = event.target.value;
    dispatch(
      selectedProductUpdated({
        ...selectedProductState.data,
        count: value,
      })
    );
  }
  useEffect(() => {
    dispatch(
      selectedProductUpdated({
        _id: product._id,
        name: product.name,
        weight: product.weight,
        size: product.size,
        healthId: product.healthId,
        type: product.type,
        components: product.components,
        desc: product.desc,
        score: product.score,
        price: product.price,
        display: product.display,
        isAvailable: product.isAvailable,
        tags: product.tags,
        image: product.image,
        images: product.images,
        userId: "",
        date: "",
        count: "1",
      })
    );
    // }
    //dispatch(commentsRecieved(comments));
  }, []);
  return (
    <div className="container px-4">
      <div className="flex flex-col w-full">
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
                  {discount > 0 && (
                    <span className="flex left-0 font-bold bg-red-600  items-center w-16 h-6 justify-center text-center text-xs absolute text-white">
                      <a>{discount} %</a>
                    </span>
                  )}
                  <div className="flex mb-2 h-72  overflow-hidden mt-6 justify-center">
                    <div>
                      <a href="#" className=" w-full h-full aspect-auto">
                        <Image
                          src={selectedProductState.data.image}
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
                    {product.images.map((image: any) => (
                      <SwiperSlide
                        onClick={changeProductImage}
                        className="cursor-pointer border hover:border-[#FFB534] transition duration-200"
                      >
                        <Image
                          src={image}
                          width={500}
                          height={500}
                          className=" mx-auto  h-full"
                          alt="user avator"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              {/* products properties */}
              <div>
                <div className="px-5 pb-5 ">
                  <div className="flex flex-col gap-2 mb-2">
                    <a
                      href="#"
                      className="text-base  text-right font-semibold tracking-tight dark:text-white"
                    >
                      {product.name}
                    </a>
                    <div className="flex flex-col  border-b pb-4 border-gray-300 gap-4  w-full justify-between  ">
                      <div className="flex flex-row ">
                        <ScoreComponent props={product.score} />
                      </div>
                      <div className="flex flex-row gap-4">
                        {discount > 0 && (
                          <>
                            <a href="#">
                              <h1 className="text-left text-[#80BB01]  line-clamp-1  font-semibold tracking-tight dark:text-white">
                                {newPrice} تومان
                              </h1>
                            </a>
                            <a href="#">
                              <h1 className="line-through  line-clamp-1 font-semibold tracking-tight  dark:text-white">
                                {product.price} تومان
                              </h1>
                            </a>
                          </>
                        )}

                        {discount === 0 && (
                          <a href="#">
                            <h1 className="text-left text-[#80BB01]  line-clamp-1  font-semibold tracking-tight dark:text-white">
                              {product.price} تومان
                            </h1>
                          </a>
                        )}
                      </div>
                      <div>
                        <p>{product.desc}</p>
                      </div>
                      <div className=" flex flex-row gap-2 items-center">
                        <div>
                          <input
                            onChange={changeProductCount}
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
                        <div
                          onClick={addProductToFactor}
                          className=" flex flex-row w-1/2 items-center justify-right bg-slate-300 px-3 py-2  cursor-pointer hover:text-white  hover:bg-[#80BB01] transition-all duration-300"
                        >
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
                        <a>{product.size} </a>
                      </div>
                      <div className="col-span-2  p-1">
                        <a>وزن :</a>
                      </div>
                      <div className="col-span-3 border-b border-gray-200">
                        <a>{product.weight}</a>
                      </div>

                      <div className="col-span-2  p-1">
                        <a>ش بهداشت :</a>
                      </div>
                      <div className="col-span-3  border-b border-gray-200">
                        <a>{product.healthId}</a>
                      </div>

                      {/* <div className="col-span-2   p-1">
                        <a>نوع :</a>
                      </div>
                      <div className="col-span-3 border-b border-gray-200">
                      <a>{product.healthId}</a>
                      </div> */}

                      <div className="col-span-2 p-1">
                        <a>ترکیبات :</a>
                      </div>
                      <div className="col-span-3  border-b border-gray-200">
                        <a>{product.components}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* users comments  */}

          <div className="p-4 mx-4 bg-white    shadow-md shadow-gray-300 mb-4 ">
            <div className="flex flex-row border-b-4 mb-4 px-2 py-1 border-[#EF5621] text-right font-bold">
              <div className="">
                <a> نظرات کاربران</a>
              </div>
            </div>

            <CommentAddComponent />
            <div className="grid grid-cols-1 gap-2">
              <CommentComponent />
              <CommentComponent />
              <CommentComponent />
              <CommentComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

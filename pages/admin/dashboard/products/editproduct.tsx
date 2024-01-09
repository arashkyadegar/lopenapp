import Image from "next/image";
import { ReactElement, useEffect } from "react";
import AdminLayout from "../adminLayout";

import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import {
  productFormCleard,
  productFormFilled,
  setFormComponents,
  setFormDesc,
  setFormDisplay,
  setFormFiles,
  setFormHealthId,
  setFormImages,
  setFormIsAvailable,
  setFormName,
  setFormPrice,
  setFormSize,
  setFormTags,
  setFormWeight,
} from "@/redux/store/productForm";
import validator from "validator";
import { submitEditProductAction } from "@/redux/store/product";
import { FileService } from "@/services/fileService";
import { ToastFail, ToastSuccess } from "@/utility/tostify";
import { ProductEntity } from "@/models/entities";
import { getDefaultImageAvator } from "@/utility/imageUtility";
export default function Editproduct(rslt: any) {
  let product = JSON.parse(rslt.product)[0];
  const formdata = new FormData();
  let tags = product.tags.toString();
  product.tags = tags;
  const dispatch = useAppDispatch();
  const productFormState = useAppSelector(
    (state) => state.entities.productForm
  );
  useEffect(() => {
    dispatch(productFormFilled(product));
  }, []);
  function formClear() {
    formdata.delete("files");
    dispatch(productFormCleard());
    // setAddProductForm({
    //   ...addProductForm,
    //   _id: "",
    //   name: " ",
    //   weight: " ",
    //   size: " ",
    //   healthId: " ",
    //   type: "1",
    //   components: "",
    //   desc: "",
    //   score: 0,
    //   price: 0,
    //   display: false,
    //   isAvailable: false,
    //   tags: "",
    //   image: "",
    //   images: [],
    //   userId: "",
    //   files: [],
    // });
  }
  async function submitEditProduct(event: any): Promise<void> {
    // event.preventDefault();

    if (true) {
      const x = {
        _id: productFormState.data._id,
        name: productFormState.data.name,
        weight: productFormState.data.weight,
        size: productFormState.data.size,
        healthId: productFormState.data.healthId,
        type: "1",
        components: productFormState.data.components,
        desc: productFormState.data.desc,
        score: 0,
        price: productFormState.data.price,
        display: productFormState.data.display,
        isAvailable: productFormState.data.isAvailable,
        tags: productFormState.data.tags.trim().split(","),
        image: productFormState.data.image,
        images: productFormState.data.images,
        files: [],
        userId: "",
      };
      try {
        dispatch(submitEditProductAction(x));
      } catch (err) {
        console.log("rrrr");
      }
    }
  }
  function fillPrdctName(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      dispatch(
        setFormName({
          nameError: "لطفا نام محصول را وارد کنید",
          formIsValid: false,
          name: text,
        })
      );
      // dispatch(
      //   productFormFilled({
      //     nameError: "لطفا نام محصول را وارد کنید",
      //     formIsValid: false,
      //     name: text,
      //   })
      // );
    } else {
      dispatch(
        setFormName({
          nameError: "",
          name: text,
          formIsValid: true,
        })
      );

      // setAddProductForm({
      //   ...addProductForm,
      //   nameError: "",
      //   name: text,
      //   formIsValid: true,
      // });
    }
  }

  function fillPrdctWeight(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      // setAddProductForm({
      //   ...addProductForm,
      //   weightError: "لطفا وزن محصول را وارد کنید",
      //   formIsValid: false,
      //   weight: text,
      // });
      dispatch(
        setFormWeight({
          weightError: "لطفا نام محصول را وارد کنید",
          formIsValid: false,
          weight: text,
        })
      );
    } else {
      // setAddProductForm({
      //   ...addProductForm,
      //   weightError: "",
      //   weight: text,
      //   formIsValid: true,
      // });
      dispatch(
        setFormWeight({
          weightError: "",
          weight: text,
          formIsValid: true,
        })
      );
    }
  }

  function fillPrdctSize(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      // setAddProductForm({
      //   ...addProductForm,
      //   sizeError: "لطفا سایز محصول را وارد کنید",
      //   formIsValid: false,
      //   size: text,
      // });

      dispatch(
        setFormSize({
          sizeError: "لطفا سایز محصول را وارد کنید",
          formIsValid: false,
          size: text,
        })
      );
    } else {
      dispatch(
        setFormSize({
          sizeError: "",
          size: text,
          formIsValid: true,
        })
      );
      // setAddProductForm({
      //   ...addProductForm,
      //   sizeError: "",
      //   size: text,
      //   formIsValid: true,
      // });
    }
  }

  function fillPrdctHealthId(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      dispatch(
        setFormHealthId({
          healthIdError: "لطفا شناسه بهداشت  را وارد کنید",
          formIsValid: false,
          healthId: text,
        })
      );
      // setAddProductForm({
      //   ...addProductForm,
      //   healthIdError: "لطفا شناسه بهداشت  را وارد کنید",
      //   formIsValid: false,
      //   healthId: text,
      // });
    } else {
      dispatch(
        setFormHealthId({
          healthIdError: "",
          healthId: text,
          formIsValid: true,
        })
      );
      // setAddProductForm({
      //   ...addProductForm,
      //   healthIdError: "",
      //   healthId: text,
      //   formIsValid: true,
      // });
    }
  }

  function fillPrdctPrice(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      // setAddProductForm({
      //   ...addProductForm,
      //   priceError: "لطفا   قیمت محصول را وارد کنید",
      //   formIsValid: false,
      //   price: parseInt(text),
      // });
      dispatch(
        setFormPrice({
          priceError: "لطفا   قیمت محصول را وارد کنید",
          formIsValid: false,
          price: parseInt(text),
        })
      );
    } else {
      dispatch(
        setFormPrice({
          priceError: "",
          price: parseInt(text),
          formIsValid: true,
        })
      );
      // setAddProductForm({
      //   ...addProductForm,
      //   priceError: "",
      //   price: parseInt(text),
      //   formIsValid: true,
      // });
    }
  }

  function fillPrdctDisplay(event: any): void {
    const text = event.target.value;
    const isTrueSet = text === "true";
    dispatch(
      setFormDisplay({
        displayError: "",
        display: isTrueSet,
        formIsValid: true,
      })
    );
    // setAddProductForm({
    //   ...addProductForm,
    //   displayError: "",
    //   display: text,
    //   formIsValid: true,
    // });
  }

  function fillPrdctIsAvailable(event: any): void {
    const text = event.target.value;
    const isTrueSet = text === "true";
    dispatch(
      setFormIsAvailable({
        isAvailableError: "",
        isAvailable: isTrueSet,
        formIsValid: true,
      })
    );
    // // setAddProductForm({
    // //   ...addProductForm,
    // //   isAvailableError: "",
    // //   isAvailable: text,
    // //   formIsValid: true,
    // // });
  }

  function fillPrdctComponents(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      dispatch(
        setFormComponents({
          componentsError: "لطفا ترکیبات محصول را وارد کنید",
          formIsValid: false,
          components: text,
        })
      );
      // setAddProductForm({
      //   ...addProductForm,
      //   componentsError: "لطفا ترکیبات محصول را وارد کنید",
      //   formIsValid: false,
      //   components: text,
      // });
    } else {
      dispatch(
        setFormComponents({
          componentsError: "",
          components: text,
          formIsValid: true,
        })
      );
      // setAddProductForm({
      //   ...addProductForm,
      //   componentsError: "",
      //   components: text,
      //   formIsValid: true,
      // });
    }
  }

  function fillPrdctDesc(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      dispatch(
        setFormDesc({
          descError: "لطفا توضیحات محصول را وارد کنید",
          formIsValid: false,
          desc: text,
        })
      );
      // setAddProductForm({
      //   ...addProductForm,
      //   descError: "لطفا توضیحات محصول را وارد کنید",
      //   formIsValid: false,
      //   desc: text,
      // });
    } else {
      dispatch(
        setFormDesc({
          descError: "",
          desc: text,
          formIsValid: true,
        })
      );
      // setAddProductForm({
      //   ...addProductForm,
      //   descError: "",
      //   desc: text,
      //   formIsValid: true,
      // });
    }
  }

  function fillPrdctTags(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      dispatch(
        setFormTags({
          tagsError: "لطفا برچسبهای محصول را وارد کنید",
          formIsValid: false,
          tags: text,
        })
      );

      // setAddProductForm({
      //   ...addProductForm,
      //   tagsError: "لطفا برچسبهای محصول را وارد کنید",
      //   formIsValid: false,
      //   tags: text,
      // });
    } else {
      dispatch(
        setFormTags({
          tagsError: "",
          tags: text,
          formIsValid: true,
        })
      );

      // setAddProductForm({
      //   ...addProductForm,
      //   tagsError: "",
      //   tags: text,
      //   formIsValid: true,
      // });
    }
    // text.trim().split(",")
  }
  async function fillPrdctFile(event: any): Promise<void> {
    let count = event.target.files.length;
    if (count === 3) {
      formdata.append("files", event.target.files[0]);
      formdata.append("files", event.target.files[1]);
      formdata.append("files", event.target.files[2]);
      const uploader = new FileService();
      try {
        const result = await uploader.upload(formdata);
        dispatch(
          setFormImages({
            imagesError: "",
            images: JSON.parse(result).files,
            formIsValid: true,
          })
        );
        // setAddProductForm({
        //   ...addProductForm,
        //   imagesError: "",
        //   files: JSON.parse(result).files,
        //   formIsValid: true,
        // });
        ToastSuccess();
      } catch (err) {
        ToastFail();
      }
    } else {
      // setAddProductForm({
      //   ...addProductForm,
      //   imagesError: "حداقل ۳ تصویر را باید انتخاب کنید",
      //   formIsValid: false,
      // });
    }
  }
  return (
    <>
      <div className="container p-4">
        <div className="flex flex-col  w-full mx-auto aspect-video gap-4">
          <div className="flex flex-col justify-between w-4/4  gap-4 py-4  mb-4 bg-white shadow-md shadow-gray-500 ">
            <div className="px-2">
              <main className="p-4">
                <div className="px-2 ">
                  <a className=" flex text-2xl border-b p-4 border-gray-400">
                    ثبت اطلاعات محصول
                  </a>
                </div>

                <div>
                  <div className="w-1/2 mx-auto">
                    <div className="flex flex-col gap-2 m-2">
                      <input
                        id="files"
                        name="files"
                        type="file"
                        accept=".png,.jpg"
                        multiple
                        onChange={fillPrdctFile}
                      />

                      {productFormState.data.images !== undefined && (
                        <div className="flex flex-row gap-2 m-2">
                          {productFormState.data.images.map((image: any) => (
                            <img
                              className="w-10 h-10"
                              src={getDefaultImageAvator(image)}
                            />
                          ))}
                        </div>
                      )}
                      {/* <>
                        <div>
                          {productFormState.data.images.map((image: any) => (
                            <img
                              className="w-10 h-10"
                              src={getDefaultImageAvator(image)}
                            />
                          ))}
                        </div>
                      </> */}
                      <p className="text-red-400 text-xs">
                        {productFormState.data.imagesError}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 m-2">
                      <label htmlFor="_id" className="w-20 text-sm font-bold">
                        کد محصول
                      </label>
                      <input
                        type="text"
                        name="_id"
                        id="_id"
                        className="p-1 border
            border-gray-300 bg-[#F9FAFB]"
                        disabled
                        value={productFormState.data._id}
                      />
                    </div>

                    <div className="flex flex-col gap-2 m-2">
                      <label htmlFor="name" className="w-20 text-sm font-bold">
                        نام
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="p-1 border
            border-gray-300 bg-[#F9FAFB]"
                        onChange={fillPrdctName}
                        value={productFormState.data.name}
                      />
                      <p className="text-red-400 text-xs">
                        {productFormState.data.nameError}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 m-2">
                      <label
                        htmlFor="weight"
                        className="w-20 text-sm font-bold"
                      >
                        وزن
                      </label>
                      <input
                        type="text"
                        name="weight"
                        id="weight"
                        className="p-1 border border-gray-300 bg-[#F9FAFB]"
                        onChange={fillPrdctWeight}
                        value={productFormState.data.weight}
                      />
                      <p className="text-red-400 text-xs">
                        {productFormState.data.weightError}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 m-2">
                      <label htmlFor="size" className="w-20 text-sm font-bold">
                        سایز
                      </label>
                      <input
                        type="text"
                        name="size"
                        id="size"
                        className="p-1 border border-gray-300 bg-[#F9FAFB]"
                        onChange={fillPrdctSize}
                        value={productFormState.data.size}
                      />
                      <p className="text-red-400 text-xs">
                        {productFormState.data.sizeError}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 m-2">
                      <label
                        htmlFor="healthId"
                        className="w-40 text-sm font-bold"
                      >
                        شماره سلامت
                      </label>
                      <input
                        type="text"
                        name="healthId"
                        id="healthId"
                        className="p-1 border border-gray-300 bg-[#F9FAFB]"
                        onChange={fillPrdctHealthId}
                        value={productFormState.data.healthId}
                      />
                      <p className="text-red-400 text-xs">
                        {productFormState.data.healthIdError}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 m-2">
                      <label htmlFor="price" className="w-20 text-sm font-bold">
                        قیمت
                      </label>
                      <input
                        type="text"
                        name="price"
                        id="price"
                        className="p-1 outline-none border border-gray-300 bg-[#F9FAFB]"
                        onChange={fillPrdctPrice}
                        value={productFormState.data.price}
                      />
                      <p className="text-red-400 text-xs">
                        {productFormState.data.priceError}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 m-2">
                      <label
                        htmlFor="display"
                        className="w-40 text-sm font-bold"
                      >
                        وضعیت نمایش
                      </label>
                      <select
                        typeof="text"
                        name="display"
                        id="display"
                        className="p-1 outline-none border border-gray-300 bg-[#F9FAFB]"
                        onChange={fillPrdctDisplay}
                      >
                        <option value="true">نمایش</option>
                        <option value="false">پنهان</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2 m-2">
                      <label
                        htmlFor="isAvailable"
                        className="w-20 text-sm font-bold"
                      >
                        موجودی
                      </label>

                      <select
                        name="isAvailable"
                        id="isAvailable"
                        onSelect={fillPrdctIsAvailable}
                        className="p-1 outline-none border border-gray-300 bg-[#F9FAFB]"
                      >
                        <option value="true">موجود</option>
                        <option value="false">اتمام</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2 mx-2 sm:mt-2">
                      <label
                        htmlFor="components"
                        className="w-20 text-sm font-bold"
                      >
                        ترکیبات
                      </label>
                      <textarea
                        name="components"
                        id="components"
                        rows={4}
                        className="grow p-2 outline-none border border-gray-300 bg-[#F9FAFB]"
                        onChange={fillPrdctComponents}
                        value={productFormState.data.components}
                      ></textarea>
                      <p className="text-red-400 text-xs">
                        {productFormState.data.componentsError}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 mx-2">
                      <label htmlFor="desc" className="w-20 text-sm font-bold">
                        توضیحات
                      </label>
                      <textarea
                        name="desc"
                        id="desc"
                        rows={4}
                        className="grow p-2 outline-none border border-gray-300 bg-[#F9FAFB]"
                        onChange={fillPrdctDesc}
                        value={productFormState.data.desc}
                      ></textarea>
                      <p className="text-red-400 text-xs">
                        {productFormState.data.descError}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 m-2">
                      <label htmlFor="tags" className="w-20 text-sm font-bold">
                        برچسب ها
                      </label>
                      <textarea
                        name="tags"
                        id="tags"
                        className="grow p-1 outline-none border border-gray-300 bg-[#F9FAFB]"
                        onChange={fillPrdctTags}
                        value={productFormState.data.tags}
                      ></textarea>
                      <p className="text-red-400 text-xs">
                        {productFormState.data.tagsError}
                      </p>
                    </div>

                    <div className="flex justify-end p-2">
                      <button
                        type="button"
                        onClick={submitEditProduct}
                        className="text-white bg-green-400 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        ثبت تغییرات
                      </button>
                    </div>
                  </div>
                  <div className=" flex flex-col">
                    <img src="" />
                    <img src="" />
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
// This gets called on every request
export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const baseURL = process.env.NEXT_PUBLIC_BASEURL;
  const res = await fetch(`${baseURL}/api/products/${id}`);
  const repo = await res.json();
  const product = JSON.stringify(repo);
  return { props: { product } };
}
Editproduct.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

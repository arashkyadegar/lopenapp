import { ReactElement, useEffect } from "react";
import AdminLayout from "../adminLayout";
import validator from "validator";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { submitAddProductAction } from "@/redux/store/product";
import { FileService } from "@/services/fileService";
import {
  ToastAuthFail,
  ToastFail,
  ToastInfo,
  ToastSuccess,
} from "@/utility/tostify";

import {
  productFormCleard,
  setFormComponents,
  setFormDesc,
  setFormDisplay,
  setFormHealthId,
  setFormImages,
  setFormIsAvailable,
  setFormName,
  setFormPrice,
  setFormSize,
  setFormTags,
  setFormWeight,
} from "@/redux/store/productForm";
import { getDefaultImageAvator } from "@/utility/imageUtility";
import { ResponseStatus } from "@/utility/responseStatus";
export default function Addproduct() {
  const formdata = new FormData();
  const dispatch = useAppDispatch();
  const productFormState = useAppSelector(
    (state) => state.entities.productForm
  );

  useEffect(() => {
    dispatch(productFormCleard());
  },[]);
  async function submitAddProduct(event: any): Promise<void> {
    // event.preventDefault();

    if (productFormState.data.formIsValid) {
      const x = {
        _id: "",
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
        userId: "",
      };
      try {
        dispatch(submitAddProductAction(x));
      } catch (err) {
        console.log("rrrr");
      }
    } else {
      ToastFail("لطفا مقادیر فیلد ها را با دقت وارد کنید");
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
    } else {
      dispatch(
        setFormName({
          nameError: "",
          name: text,
          formIsValid: true,
        })
      );
    }
  }

  function fillPrdctWeight(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      dispatch(
        setFormWeight({
          weightError: "لطفا وزن محصول را وارد کنید",
          formIsValid: false,
          weight: text,
        })
      );
    } else if (!validator.matches(text, /^[0-9]+$/)) {
      dispatch(
        setFormWeight({
          weightError: "لطفا وزن محصول را به عدد وارد کنید",
          formIsValid: false,
          weight: text,
        })
      );
    } else {
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
    } else {
      dispatch(
        setFormHealthId({
          healthIdError: "",
          healthId: text,
          formIsValid: true,
        })
      );
    }
  }

  function fillPrdctPrice(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      dispatch(
        setFormPrice({
          priceError: "لطفا قیمت محصول را وارد کنید",
          formIsValid: false,
          price: text,
        })
      );
    } else if (!validator.matches(text, /^[0-9]+$/)) {
      dispatch(
        setFormPrice({
          priceError: "لطفا قیمت محصول را به عدد وارد کنید",
          formIsValid: false,
          price: text,
        })
      );
    } else {
      dispatch(
        setFormPrice({
          priceError: "",
          price: text,
          formIsValid: true,
        })
      );
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
    } else {
      dispatch(
        setFormComponents({
          componentsError: "",
          components: text,
          formIsValid: true,
        })
      );
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
    } else {
      dispatch(
        setFormDesc({
          descError: "",
          desc: text,
          formIsValid: true,
        })
      );
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
    } else {
      dispatch(
        setFormTags({
          tagsError: "",
          tags: text,
          formIsValid: true,
        })
      );
    }
  }
  async function fillPrdctFile(event: any): Promise<void> {
    let count = event.target.files.length;
    if (count === 3) {
      formdata.append("files", event.target.files[0]);
      formdata.append("files", event.target.files[1]);
      formdata.append("files", event.target.files[2]);
      const uploader = new FileService();
      // try {
      const response = await uploader.upload(formdata);
      switch (response.status) {
        case ResponseStatus.OK: {
          const repo = await response.json();
          dispatch(
            setFormImages({
              imagesError: "",
              images: repo.files,
              formIsValid: true,
            })
          );
          ToastSuccess();
          break;
        }
        case ResponseStatus.BAD_REQUEST: {
          ToastFail();
          break;
        }
        case ResponseStatus.UNAUTHORIZED: {
          ToastAuthFail();
        }
      }

      //   if (response.status != 200) {
      //     console.log("errr1");
      //     console.log(response.status);
      //     ToastFail();
      //   } else {
      //     dispatch(
      //       setFormImages({
      //         imagesError: "",
      //         images: JSON.parse(response).files,
      //         formIsValid: true,
      //       })
      //     );
      //     // setAddProductForm({
      //     //   ...addProductForm,
      //     //   imagesError: "",
      //     //   files: JSON.parse(result).files,
      //     //   formIsValid: true,
      //     // });
      //     ToastSuccess();
      //   }
      // } catch (err) {
      //   console.log("errr2");
      //   //ToastFail();
      // }
      // } else {
      // setAddProductForm({
      //   ...addProductForm,
      //   imagesError: "حداقل ۳ تصویر را باید انتخاب کنید",
      //   formIsValid: false,
      // });
      // }
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
                              key={image}
                              src={getDefaultImageAvator(image)}
                              className="w-10 h-10"
                              alt="product image"
                              crossOrigin = "anonymous"
                            />
                          ))}
                        </div>
                      )}
                      <p className="text-red-400 text-xs">
                        {productFormState.data.imagesError}
                      </p>
                    </div>
                    {/* <div className="flex flex-col gap-2 m-2">
                      <label htmlFor="_id" className="w-20 text-sm font-bold">
                        کد محصول
                      </label>
                      <input
                        type="text"
                        name="_id"
                        id="_id"
                        className="p-1 border
            border-gray-300 bg-[#F9FAFB]"
                      />
                    </div> */}

                    <div className="flex flex-col gap-2 m-2">
                      <label htmlFor="name" className="w-20 text-sm font-bold">
                        نام<span className="text-red-600">*</span>
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
                        وزن (گرم)<span className="text-red-600">*</span>
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
                        سایز<span className="text-red-600">*</span>
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
                        شماره سلامت<span className="text-red-600">*</span>
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
                        قیمت<span className="text-red-600">*</span>
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
                        وضعیت نمایش<span className="text-red-600">*</span>
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
                        موجودی<span className="text-red-600">*</span>
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
                        ترکیبات<span className="text-red-600">*</span>
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
                        توضیحات<span className="text-red-600">*</span>
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
                        برچسب ها<span className="text-red-600">*</span>
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
                        onClick={submitAddProduct}
                        className="text-white bg-green-400 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        ثبت محصول
                      </button>
                    </div>
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

Addproduct.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

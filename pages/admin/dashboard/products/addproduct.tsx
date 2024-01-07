import Image from "next/image";
import { ReactElement, useEffect, useState } from "react";
import AdminLayout from "../adminLayout";
import { AddProductForm, ProductEntity } from "@/models/entities";
import validator from "validator";
import { useAppDispatch } from "@/redux/store/hooks";
import { submitAddProductAction } from "@/redux/store/product";
import { FileService } from "@/services/fileService";
import { ProductService } from "@/services/productService";
export default function Addproduct() {
  const formdata = new FormData();
  const dispatch = useAppDispatch();
  const [addProductForm, setAddProductForm] = useState(new AddProductForm());
  useEffect(() => {
    formClear();
  }, []);
  function formClear() {
    formdata.delete("files");
    setAddProductForm({
      ...addProductForm,
      _id: "",
      name: " ",
      weight: " ",
      size: " ",
      healthId: " ",
      type: "1",
      components: "",
      desc: "",
      score: 0,
      price: 0,
      display: false,
      isAvailable: false,
      tags: [],
      image: "",
      images: [],
      userId: "",
    });
  }
  async function submitAddProduct(event: any): Promise<void> {
    // event.preventDefault();
    if (true) {
      const x = {
        _id: "",
        name: addProductForm.name,
        weight: addProductForm.weight,
        size: addProductForm.size,
        healthId: addProductForm.healthId,
        type: "1",
        components: addProductForm.components,
        desc: addProductForm.desc,
        score: 0,
        price: addProductForm.price,
        display: addProductForm.display,
        isAvailable: addProductForm.isAvailable,
        tags: addProductForm.tags,
        image: addProductForm.image,
        images: addProductForm.files,
        userId: "",
      };
      dispatch(submitAddProductAction(x));
    }
  }
  function fillPrdctName(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      setAddProductForm({
        ...addProductForm,
        nameError: "لطفا نام محصول را وارد کنید",
        formIsValid: false,
      });
    } else {
      setAddProductForm({
        ...addProductForm,
        nameError: "",
        name: text,
        formIsValid: true,
      });
    }
  }

  function fillPrdctWeight(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      setAddProductForm({
        ...addProductForm,
        weightError: "لطفا وزن محصول را وارد کنید",
        formIsValid: false,
      });
    } else {
      setAddProductForm({
        ...addProductForm,
        weightError: "",
        weight: text,
        formIsValid: true,
      });
    }
  }

  function fillPrdctSize(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      setAddProductForm({
        ...addProductForm,
        sizeError: "لطفا سایز محصول را وارد کنید",
        formIsValid: false,
      });
    } else {
      setAddProductForm({
        ...addProductForm,
        sizeError: "",
        size: text,
        formIsValid: true,
      });
    }
  }

  function fillPrdctHealthId(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      setAddProductForm({
        ...addProductForm,
        healthIdError: "لطفا شناسه بهداشت  را وارد کنید",
        formIsValid: false,
      });
    } else {
      setAddProductForm({
        ...addProductForm,
        healthIdError: "",
        healthId: text,
        formIsValid: true,
      });
    }
  }

  function fillPrdctPrice(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      setAddProductForm({
        ...addProductForm,
        priceError: "لطفا   قیمت محصول را وارد کنید",
        formIsValid: false,
      });
    } else {
      setAddProductForm({
        ...addProductForm,
        priceError: "",
        price: parseInt(text),
        formIsValid: true,
      });
    }
  }

  function fillPrdctDisplay(event: any): void {
    let text: boolean = event.target.value;

    setAddProductForm({
      ...addProductForm,
      displayError: "",
      display: text,
      formIsValid: true,
    });
  }

  function fillPrdctIsAvailable(event: any): void {
    let text: boolean = event.target.value;
    console.log(text);
    setAddProductForm({
      ...addProductForm,
      isAvailableError: "",
      isAvailable: text,
      formIsValid: true,
    });
  }

  function fillPrdctComponents(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      setAddProductForm({
        ...addProductForm,
        componentsError: "لطفا ترکیبات محصول را وارد کنید",
        formIsValid: false,
      });
    } else {
      setAddProductForm({
        ...addProductForm,
        componentsError: "",
        components: text,
        formIsValid: true,
      });
    }
  }

  function fillPrdctDesc(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      setAddProductForm({
        ...addProductForm,
        descError: "لطفا توضیحات محصول را وارد کنید",
        formIsValid: false,
      });
    } else {
      setAddProductForm({
        ...addProductForm,
        descError: "",
        desc: text,
        formIsValid: true,
      });
    }
  }

  function fillPrdctTags(event: any): void {
    let text: string = validator.escape(event.target.value);
    let tags = text.trim().split(",");
    if (validator.isEmpty(text)) {
      setAddProductForm({
        ...addProductForm,
        tagsError: "لطفا برچسبهای محصول را وارد کنید",
        formIsValid: false,
      });
    } else {
      setAddProductForm({
        ...addProductForm,
        tagsError: "",
        tags: tags,
        formIsValid: true,
      });
    }
  }
  async function fillPrdctFile(event: any): Promise<void> {
    formdata.append("files", event.target.files[0]);
    formdata.append("files", event.target.files[1]);
    formdata.append("files", event.target.files[2]);
    const uploader = new FileService();
    const result = await uploader.upload(formdata);

    setAddProductForm({
      ...addProductForm,
      tagsError: "",
      files: JSON.parse(result).files,
    });
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
                {addProductForm.files.map((image: any) => (
                  <p>{image}</p>
                ))}
                <div>
                  <div className="flex flex-col gap-2 m-2">
                    <input
                      id="files"
                      name="files"
                      type="file"
                      accept=".png,.jpg"
                      multiple
                      onChange={fillPrdctFile}
               
                    />
                  </div>
                  <div className="w-1/2 mx-auto">
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
                        value={addProductForm.name}
                      />
                      <p className="text-red-400 text-xs">
                        {addProductForm.nameError}
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
               
                        value={addProductForm.weight}
                        onChange={fillPrdctWeight}
                      />
                      <p className="text-red-400 text-xs">
                        {addProductForm.weightError}
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
              
                        value={addProductForm.size}
                        onChange={fillPrdctSize}
                      />
                      <p className="text-red-400 text-xs">
                        {addProductForm.sizeError}
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
                
                        value={addProductForm.healthId}
                        onChange={fillPrdctHealthId}
                      />
                      <p className="text-red-400 text-xs">
                        {addProductForm.healthIdError}
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
                        value={addProductForm.price}
                      />
                      <p className="text-red-400 text-xs">
                        {addProductForm.priceError}
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
                        
                        onSelect={fillPrdctDisplay}
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
                        value={addProductForm.components}
                      ></textarea>
                      <p className="text-red-400 text-xs">
                        {addProductForm.componentsError}
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
                        value={addProductForm.desc}
                      ></textarea>
                      <p className="text-red-400 text-xs">
                        {addProductForm.desc}
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
                        value={addProductForm.tags}

                      ></textarea>
                      <p className="text-red-400 text-xs">
                        {addProductForm.tagsError}
                      </p>
                    </div>

                    <div className="flex justify-end p-2">
                      <button
                        type="button"
                        onClick={submitAddProduct}
                        className="text-white bg-blue-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        ثبت تغییرات
                      </button>

                      <button
                        type="button"
                        onClick={formClear}
                        className="text-white bg-blue-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                         clear
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

Addproduct.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

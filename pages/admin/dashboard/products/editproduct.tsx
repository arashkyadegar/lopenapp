import Image from "next/image";
import { ReactElement } from "react";
import AdminLayout from "../adminLayout";
export default function Editproduct(rslt: any) {
  const product = JSON.parse(rslt.product)[0];
  let tags = product.tags.toString();

  return (
    <>
      <div className="container p-4">
        <div className="flex flex-col  w-full mx-auto aspect-video gap-4">
          <div className="flex flex-col justify-between w-4/4  gap-4 py-4  mb-4 bg-white shadow-md shadow-gray-500 ">
            <div className="px-2">
              <main className="p-4">
                <div className="px-2 ">
                  <a className=" flex text-2xl border-b p-4 border-gray-400">
                    ویرایش اطلاعات محصول
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
                      />
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
                        placeholder="کد محصول"
                        value={product._id}
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
                        placeholder="نام"
                        value={product.name}
                      />
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
                        placeholder="وزن محصول"
                        value={product.weight}
                      />
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
                        placeholder="سایز"
                        value={product.size}
                      />
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
                        placeholder="شماره سلامت"
                        value={product.healthId}
                      />
                    </div>

                    <div className="flex flex-col gap-2 m-2">
                      <label htmlFor="score" className="w-20 text-sm font-bold">
                        امتیاز
                      </label>
                      <input
                        type="text"
                        name="score"
                        id="score"
                        className="p-1 outline-none border border-gray-300 bg-[#F9FAFB]"
                        placeholder="امتیاز"
                        value={product.score}
                      />
                    </div>

                    <div className="flex flex-col gap-2 m-2">
                      <label
                        htmlFor="text_type"
                        className="w-20 text-sm font-bold"
                      >
                        نوع
                      </label>
                      <input
                        type="text"
                        name="type"
                        id="type"
                        className="p-1 outline-none border border-gray-300 bg-[#F9FAFB]"
                        placeholder=" نوع"
                        value={product.type}
                      />
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
                        placeholder="قیمت"
                        value={product.price}
                      />
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
                        aria-placeholder="نمایش"
                      ></select>
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
                        className="p-1 outline-none border border-gray-300 bg-[#F9FAFB]"
                      ></select>
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
                        placeholder="ترکیبات"
                      >
                        {product.components}
                      </textarea>
                      <p className="text-red-400 text-xs h-5"></p>
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
                        placeholder="توضیحات"
                      >
                        {product.desc}
                      </textarea>
                      <p className="text-red-400 text-xs h-5"></p>
                    </div>

                    <div className="flex flex-col gap-2 m-2">
                      <label htmlFor="tags" className="w-20 text-sm font-bold">
                        برچسب ها
                      </label>
                      <textarea
                        name="tags"
                        id="tags"
                        className="grow p-1 outline-none border border-gray-300 bg-[#F9FAFB]"
                        placeholder=" برچسب ها"
                      >
                        {tags}
                      </textarea>
                    </div>

                    <div className="flex justify-end p-2">
                      <button
                        type="submit"
                        className="text-white bg-blue-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

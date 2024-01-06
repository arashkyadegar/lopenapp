import Image from "next/image";
import { ReactElement } from "react";
import AdminLayout from "../adminLayout";
import Link from "next/link";

// This gets called on every request
export async function getStaticProps() {
  const baseURL = process.env.NEXT_PUBLIC_BASEURL;
  const res = await fetch(`${baseURL}/api/products`);
  const repo = await res.json();
  const products = JSON.stringify(repo);
  return { props: { products } };
}

export default function Products(rslt: any) {
  const products = JSON.parse(rslt.products);
  console.log(products);
  return (
    <>
      <div className="container p-4">
        <div className="flex flex-col  w-full  aspect-video gap-4">
          <div className="flex flex-col justify-between w-4/4  gap-4   mb-4 bg-white shadow-md shadow-gray-500 ">
            <div className="px-2">
              <a className=" flex text-2xl border-b p-1 border-gray-400">
                products
              </a>
            </div>
            <div>
              <ul className="flex flex-row gap-4 px-4">
                <li>
                  <Link
                    href={{
                      pathname: `/admin/dashboard/products/addproduct`,
                    }}
                  >
                    ثبت محصول
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: `/admin/dashboard/products/editproduct`,
                      query: { id: "222" },
                    }}
                  >
                    edit
                  </Link>
                </li>
              </ul>
            </div>
            <div className="grid  grid-cols-6 items-center divide divide-gray-200">
              <div className="flex  items-center justify-center col-span-2  border border-gray-200 text-center">
                <a>کد</a>
              </div>
              <div className="flex  items-center justify-center col-span-2 border text-center">
                <a>نام محصول</a>
              </div>
              <div className="flex  items-center justify-center border  text-center">
                <a>قیمت </a>
              </div>

              <div className="flex  items-center justify-center border  text-center">
                <a>عملیات </a>
              </div>

              {products.map((product: any) => (
                <>
                  <div className="border flex col-span-2 p-1 justify-center items-center">
                    <a>{product._id}</a>
                  </div>
                  <div className="border flex col-span-2 p-1 justify-center items-center">
                    <a>{product.name}</a>
                  </div>
                  <div className="border flex col-span-1 p-1  justify-center items-center">
                    <a>{product.price}</a>
                  </div>

                  <div className="border flex col-span-1 p-1 justify-center items-center">
                    <a className="hover:text-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </a>
                    {/* edit button */}
                    <Link
                      href={{
                        pathname: `/admin/dashboard/products/editproduct`,
                        query: { id: product._id },
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </Link>

                    <a className="hover:text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </a>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

Products.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

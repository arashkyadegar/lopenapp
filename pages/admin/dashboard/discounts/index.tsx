import { ReactElement } from "react";
import AdminLayout from "../adminLayout";
import Link from "next/link";
import { useAppDispatch } from "@/redux/store/hooks";
import { submitDeleteDiscountAction } from "@/redux/store/discount";

// This gets called on every request
export async function getServerSideProps(context: any) {
  const { req } = context;
  const { cookies } = req;

  const baseURL = process.env.NEXT_PUBLIC_BASEURL;
  const response = await fetch(`${baseURL}/api/discounts`, {
    method: "GET",
    credentials: "include",
    headers: {
      authorization: cookies.alonefighterx,
    },
  });

  if (response.status == 401) {
    return {
      redirect: {
        permanent: false,
        destination: process.env.NEXT_PUBLIC_LOGINREDIRECT
      }
    }
  }
  const repo = await response.json();
  const discounts = JSON.stringify(repo);
  return { props: { discounts } };
}

export default function Discounts(rslt: any) {
  const discounts = JSON.parse(rslt.discounts);
  console.log(discounts);
  const dispatch = useAppDispatch();

  function submitDeleteDiscount(id: any) {
    if (confirm("قصد حذف تخفیف را دارید ؟ ")) {
      dispatch(submitDeleteDiscountAction(id));
    }
  }
  return (
    <>
      <div className="container p-4">
        <div className="flex flex-col  w-full  aspect-video gap-4">
          <div className="flex flex-col justify-between w-4/4  gap-4   mb-4 bg-white shadow-md shadow-gray-500 ">
            <div className="px-2">
              <a className=" flex text-2xl border-b p-1 border-gray-400">
                 تخفیف ها
              </a>
            </div>
            <div>
              <ul className="flex flex-row gap-4 px-4">
                <li className="bg-blue-400 w-10 p-2 rounded-md ">
                  <Link
                    href={{
                      pathname: `/admin/dashboard/discounts/adddiscount`,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-white hover:text-black hover:bg-blue-400 transition-all"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="grid  grid-cols-5 items-center divide divide-gray-200">
              <div className="flex  items-center justify-center col-span-1  border border-gray-200 text-center">
                <a>کد</a>
              </div>
              <div className="flex  items-center justify-center col-span-1 border text-center">
                <a> عنوان تخفیف</a>
              </div>
              <div className="flex  items-center justify-center border  text-center">
                <a>نام محصول </a>
              </div>
              <div className="flex  items-center justify-center border  text-center">
                <a>میزان </a>
              </div>

              <div className="flex  items-center justify-center border  text-center">
                <a>عملیات</a>
              </div>

              {discounts.map((discount: any) => (
                <>
                  <div className="border flex col-span-1 p-2 justify-center items-center">
                    <a className="text-xs">{discount._id}</a>
                  </div>
                  <div className="border flex col-span-1 p-1 justify-center items-center">
                    <a>{discount.title}</a>
                  </div>
                  <div className="border flex col-span-1 p-1 justify-center items-center">
                    <a>{discount.product.name}</a>
                  </div>
                  <div className="border flex col-span-1 p-1  justify-center items-center">
                    <a>{discount.value}</a>
                  </div>

                  <div className="border flex col-span-1 p-1 justify-center items-center">

                    {/* edit button */}
                    <Link
                      href={{
                        pathname: `/admin/dashboard/discounts/editdiscount`,
                        query: { id: discount._id },
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6  hover:text-blue-500 transition-all"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </Link>

                    <a
                      onClick={() => submitDeleteDiscount(discount._id)}
                      className="hover:text-red-500 cursor-pointer transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
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

Discounts.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

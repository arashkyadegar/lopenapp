import Link from "next/link";
import React, { PropsWithChildren } from "react";

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div>
        {" "}
        <ul
          className="text-base gap-2  flex flex-col text-right  text-gray-600  p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse 
            md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li className="border-[#FEEBB4] ml-4 hover:border-[#FEEBB4] transition-all duration-300 ">
            <Link
              href={{
                pathname: `/admin/dashboard/products`,
              }}
            >
              لیست محصولات
            </Link>
          </li>
          <li className="border-[#FEEBB4] ml-4 hover:border-[#FEEBB4] transition-all duration-300 ">
            <Link
              href={{
                pathname: `/admin/dashboard/discounts`,
              }}
            >
              لیست تخفیف ها
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: `/admin/dashboard/products/addproduct`,
              }}
            >
            محصول جدید
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: `/about`,
              }}
            >
              درباره ما
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: `/admin/dashboard/main`,
              }}
            >
              admin
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: `/contactus`,
              }}
            >
              ارتباط با ما
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: `/singleproduct`,
              }}
            >
              محصول
            </Link>
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </>
  );
}

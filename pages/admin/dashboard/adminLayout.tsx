import Link from "next/link";
import React, { PropsWithChildren } from "react";

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className=" mx-4 py-2">
        <ul className="text-base gap-2 flex flex-row text-right">
          <li className="px-2 py-4 text-white  rounded-md bg-emerald-400 hover:bg-emerald-600 text-center  ml-4  transition-all duration-300 ">
            <Link
              href={{
                pathname: `/admin/dashboard/products`,
              }}
            >
              لیست محصولات
            </Link>
          </li>
          <li className="px-2 py-3 text-white  rounded-md bg-emerald-400 hover:bg-emerald-600 text-center  ml-4  transition-all duration-300 ">
            <Link
              href={{
                pathname: `/admin/dashboard/discounts`,
              }}
            >
              لیست تخفیف ها
            </Link>
          </li>
          <li className="px-2 py-4 text-white  rounded-md bg-emerald-400 text-center   hover:bg-emerald-600   ml-4  transition-all duration-300">
            <Link
              href={{
                pathname: `/admin/dashboard/faqs`,
              }}
            >
              سوالات متداول
            </Link>
          </li>

          <li className="px-2 py-4 text-white  rounded-md bg-emerald-400  hover:bg-emerald-600 text-center  ml-4  transition-all duration-300 ">
            <Link
              href={{
                pathname: `/admin/dashboard/siteinfo/editsiteInfo`,
              }}
            >
              تنظیمات سایت
            </Link>
          </li>
          <li className="px-2 py-4 text-white  rounded-md bg-emerald-400 hover:bg-emerald-600 text-center  ml-4  transition-all duration-300 ">
            <Link
              href={{
                pathname: `/admin/dashboard/factors`,
              }}
            >
              فاکتورها
            </Link>
          </li>

          <li className="px-2 py-4 text-white  rounded-md bg-emerald-400 hover:bg-emerald-600 text-center  ml-4  transition-all duration-300 ">
            <Link
              href={{
                pathname: `/admin/dashboard/login`,
              }}
            >
              لاگین
            </Link>
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </>
  );
}

import Head from "next/head";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>آبنبات لوپن</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <ul className="text-base gap-1 flex flex-row flex-wrap text-right">
          <li className="px-1 text-white  rounded-md bg-emerald-400 hover:bg-emerald-600 text-center   transition-all duration-300 ">
            <Link
              href={{
                pathname: `/admin/dashboard/products`,
              }}
            >
              لیست محصولات
            </Link>
          </li>
          <li className="px-1 text-white  rounded-md bg-emerald-400 hover:bg-emerald-600 text-center  ml-4  transition-all duration-300 ">
            <Link
              href={{
                pathname: `/admin/dashboard/discounts`,
              }}
            >
              لیست تخفیف ها
            </Link>
          </li>
          <li className="px-1 text-white  rounded-md bg-emerald-400 text-center   hover:bg-emerald-600   ml-4  transition-all duration-300">
            <Link
              href={{
                pathname: `/admin/dashboard/faqs`,
              }}
            >
              سوالات متداول
            </Link>
          </li>

          <li className="px-1 text-white  rounded-md bg-emerald-400  hover:bg-emerald-600 text-center  ml-4  transition-all duration-300 ">
            <Link
              href={{
                pathname: `/admin/dashboard/siteinfo/editsiteInfo`,
              }}
            >
              تنظیمات سایت
            </Link>
          </li>
          <li className="px-1 text-white  rounded-md bg-emerald-400 hover:bg-emerald-600 text-center  ml-4  transition-all duration-300 ">
            <Link
              href={{
                pathname: `/admin/dashboard/factors`,
              }}
            >
              فاکتورها
            </Link>
          </li>

          <li className="px-1 text-white  rounded-md bg-emerald-400 hover:bg-emerald-600 text-center  ml-4  transition-all duration-300 ">
            <Link
              href={{
                pathname: `/admin/dashboard/login`,
              }}
            >
              لاگین
            </Link>
          </li>
        </ul>
   
      <div className="w-full p-1">{children}</div>
    </>
  );
}

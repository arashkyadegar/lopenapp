import Image from "next/image";
import { ReactElement } from "react";
import AdminLayout from "../adminLayout";
import Link from "next/link";
export default function Products() {
  return (
    <>
      <div className="container p-4">
        <div className="flex flex-col items-center justify-center w-full mx-auto aspect-video gap-4">
          <div className="flex flex-col justify-between w-4/4  gap-4 py-4  mb-4 bg-white shadow-md shadow-gray-500 ">
            <div className="px-2">
              <a className=" flex text-2xl border-b p-4 border-gray-400">
                products
              </a>
            </div>
          </div>
          <div>
            <Link
              href={{
                pathname: `/admin/dashboard/products/editproduct`,
                query: { id: '222' },
              }}
            >
               edit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

Products.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

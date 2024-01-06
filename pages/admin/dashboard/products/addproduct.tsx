import Image from "next/image";
import { ReactElement } from "react";
import AdminLayout from "../adminLayout";
export default function Addproduct() {
  return (
    <>
      <div className="container p-4">
        <div className="flex flex-col items-center justify-center w-full mx-auto aspect-video gap-4">
          <div className="flex flex-col justify-between w-4/4  gap-4 py-4  mb-4 bg-white shadow-md shadow-gray-500 ">
            <div className="px-2">
              <a className=" flex text-2xl border-b p-4 border-gray-400">
                add a product
              </a>
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

import Link from "next/link";
import { ReactElement } from "react";
export default function Custom401() {
  return (
    <div className="container p-4">
      <div className="flex flex-col items-center justify-center w-full mx-auto aspect-video gap-4">
        <div className="flex flex-col justify-between w-4/4  gap-4 py-4  mb-4 bg-white shadow-md shadow-gray-500 ">
          <div className="px-2">
            <a className=" flex text-2xl border-b p-4 border-gray-400">
              401 - Server-side error occurred
            </a>
          </div>
          <div className="flex px-2  justify-center">
            <Link className="  text-2xl border-b p-4 border-gray-400"
              href={{
                pathname: `/admin/dashboard/login`,
              }}
            >
              login
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

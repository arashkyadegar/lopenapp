import { ReactElement, useEffect } from "react";
import AdminLayout from "../adminLayout";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { submitDeleteFactorAction } from "@/redux/store/factorItems";
import { getFactorsAction } from "@/redux/store/factors";

export default function Factors() {
  const factorsState = useAppSelector((state) => state.entities.factors);
  const dispatch = useAppDispatch();

  function submitDeleteFactor(id: any) {
    if (confirm("قصد حذف فاکتور را دارید ؟ ")) {
      dispatch(submitDeleteFactorAction(id));
    }
  }

  useEffect(() => {
    dispatch(getFactorsAction());
  }, []);
  return (
    <div className="flex">
      <div className="flex flex-col w-full  bg-white shadow-md shadow-gray-500 ">
        <div className="">
        <a className="flex text-xl border-b p-1 border-gray-400">
            فاکتور ها
          </a>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-5 items-center divide divide-gray-200">
          <div className="p-1 hidden md:flex  font-bold items-center justify-center col-span-1  border border-gray-200 text-center">
            <a>کد</a>
          </div>
          <div className="p-1 flex font-bold  items-center justify-center col-span-1 border text-center">
            <a>شماره فاکتور</a>
          </div>
          <div className="p-1 px-1 font-bold flex  items-center col-span-2  justify-right border  text-center">
            <a>نام مشتری </a>
          </div>

          <div className="p-1 flex font-bold  items-center justify-center border  text-center">
            <a>عملیات </a>
          </div>

          {factorsState.list.map((factor: any) => (
            <>
              <div className="p-1 border hidden md:flex  col-span-1  justify-center items-center">
                <a >{factor._id}</a>
              </div>
              <div className="p-1 border flex col-span-1  justify-center items-center">
                <a>{factor.factorNumber}</a>
              </div>
              <div className="p-1 border flex col-span-2  justify-right items-center">
                <a>{factor.fName + " " + factor.lName}</a>
              </div>

              <div className="p-1 border flex col-span-1  justify-center items-center">
                {/* edit button */}
                <Link
                  href={{
                    pathname: `/admin/dashboard/factors/editfactor`,
                    query: { id: factor._id },
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
                  onClick={() => submitDeleteFactor(factor._id)}
                  className="hover:text-red-500 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer"
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
  );
}

Factors.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

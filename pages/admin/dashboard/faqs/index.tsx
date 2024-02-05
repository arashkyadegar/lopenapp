import { ReactElement, useEffect } from "react";
import AdminLayout from "../adminLayout";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { getFaqsAction, submitDeleteFaqAction } from "@/redux/store/faqs";
import Link from "next/link";

export default function Faqs() {
  const faqsState = useAppSelector((state) => state.entities.faqs);
  const dispatch = useAppDispatch();

  function submitDeleteFaq(id: any) {
    if (confirm("قصد حذف سوال را دارید ؟ ")) {
      dispatch(submitDeleteFaqAction(id));
    }
  }

  useEffect(() => {
    dispatch(getFaqsAction());
  }, []);

  return (
    <div className="flex">
      <div className="flex flex-col w-full bg-white shadow-md shadow-gray-500 ">
        <div className="">
          <a className="flex text-xl border-b p-1 border-gray-400">
            سوالات متداول
          </a>
        </div>
        <div>
          <ul className="flex flex-row">
            <li className="bg-blue-400 w-10 p-2 rounded-md ">
              <Link
                href={{
                  pathname: `/admin/dashboard/faqs/addfaq`,
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
        <div className="grid   grid-cols-3 md:grid-cols-5 items-center divide divide-gray-200">
          <div className="p-1   hidden md:flex  font-bold  items-center justify-center col-span-1  border border-gray-200 text-center">
            <a>کد</a>
          </div>
          <div className="p-1  px-2 font-bold flex  items-center justify-right col-span-1 border text-center">
            <a>سوال</a>
          </div>
          <div className="p-1  px-2 font-bold flex  items-center justify-right border  text-center">
            <a>پاسخ </a>
          </div>
          <div className="p-1  hidden md:flex font-bold  items-center justify-center border  text-center">
            <a> نمایش </a>
          </div>
          <div className="p-1  flex font-bold  items-center justify-center border  text-center">
            <a>عملیات </a>
          </div>

          {faqsState.list.map((faq: any) => (
            <>
              <div className="border p-1   hidden md:flex   col-span-1  justify-center items-center">
                <a >{faq._id}</a>
              </div>
              <div className="border p-1   flex col-span-1 justify-right items-center">
                <a className=" line-clamp-1"> {faq.question}</a>
              </div>
              <div className="p-1  border line-clamp-1 flex col-span-1  justify-start  items-center">
                <a className=" line-clamp-1">{faq.answer}</a>
              </div>
              <div className="p-1  border line-clamp-1 hidden md:flex col-span-1  justify-center  items-center">
                <a className=" line-clamp-1">{faq.priority}</a>
              </div>

              <div className="p-1 border flex col-span-1  justify-center items-center">
                {/* edit button */}
                <Link
                  href={{
                    pathname: `/admin/dashboard/faqs/editfaq`,
                    query: { id: faq._id },
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6   hover:text-blue-500  transition-all"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </Link>

                <a
                  onClick={() => submitDeleteFaq(faq._id)}
                  className="hover:text-red-500  cursor-pointer  transition-all"
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
  );
}
Faqs.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

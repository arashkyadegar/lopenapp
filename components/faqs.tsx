import { useEffect } from "react";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { faqsRecieved } from "@/redux/store/faqs";

export default function FaqsComponent({ props }: any) {
  const faqs = JSON.parse(props.faqs);
  const dispatch = useAppDispatch();
  const faqsState = useAppSelector((state) => state.entities.faqs);
  function toggleFaqsList(event: any): void {
    const xId = event.target.getAttribute("x-id");
    const nextShapes = faqsState.list.map((item: any) => {
      if (item._id === xId) {
        {
          let x = item.display;
          return {
            ...item,
            display: !x,
          };
        }
      } else {
        // Return a new circle 50px below
        return {
          ...item,
          display: false,
        };
      }
    });
    dispatch(faqsRecieved(nextShapes));
  }
  useEffect(() => {
    dispatch(faqsRecieved(faqs));
  }, []);
  return (
    <>
      <div className="container px-4">
        <div className="flex flex-col w-full">
          <div className="flex flex-col justify-between w-4/4 rounded-xl  gap-4 py-4  my-4 bg-white">
            <div className="px-2">
              <a className=" flex text-2xl border-b p-4 border-gray-400">
                سوالات متداول
              </a>
            </div>
            <div className="flex flex-col sm:flex-row w-full  p-2">
              <div className="flex flex-col w-full bg-white">
                {faqsState.list.map((item: any) => (
                  <ul
                    className=" border  my-1 border-[#80BB01] rounded-xl overflow-hidden"
                    key={item._id}
                  >
                    <li
                      onClick={toggleFaqsList}
                      x-id={item._id}
                      className="bg-[#80BB01] cursor-pointer p-2 text-white flex flex-row justify-between "
                    >
                      <a
                        x-id={item._id}
                        onClick={toggleFaqsList}
                        className=" line-clamp-1"
                      >
                        {item.question}
                      </a>
                      <div className="w-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 bg-white text-[#80BB01] rounded-full"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </div>
                    </li>
                    {item.display ? (
                      <ul className="h-auto text-sm transition-all duration-300">
                        <li className="p-2 ">
                          <p className="font-bold text-base mb-2"> {item.question}</p>
                          <p >{item.answer}</p>
                        </li>
                      </ul>
                    ) : (
                      <ul className="h-0  text-sm transition-all duration-300">
                        <li className="p-2 ">
                          <p className="font-bold text-base mb-2"> {item.question}</p>
                          <p>{item.answer}</p>
                        </li>
                      </ul>
                    )}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

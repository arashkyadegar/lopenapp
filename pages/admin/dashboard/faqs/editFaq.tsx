import MainLayout from "@/components/common/mainLayout";
import { ReactElement, useEffect } from "react";
import AdminLayout from "../adminLayout";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import {
  faqFormFilled,
  setFormAnswer,
  setFormPriority,
  setFormQuestion,
} from "@/redux/store/faqForm";
import validator from "validator";
import { submitEditFaqAction } from "@/redux/store/faqs";
import { ToastFail } from "@/utility/tostify";

export default function EditFaq(rslt: any) {
  let faq = JSON.parse(rslt.faq)[0];
  const dispatch = useAppDispatch();
  const faqFormState = useAppSelector((state) => state.entities.faqForm);
  useEffect(() => {
    dispatch(faqFormFilled(faq));
  }, []);

  async function submitEditFaq(event: any): Promise<void> {
    // event.preventDefault();
    if (faqFormState.data.formIsValid) {
      const x = {
        _id: faqFormState.data._id,
        groupId: 0,
        question: faqFormState.data.question,
        answer: faqFormState.data.answer,
        display: false,
        priority: faqFormState.data.priority,
        date: "",
      };
      try {
        dispatch(submitEditFaqAction(x));
      } catch (err) {
        console.log("rrrr");
      }
    } else {
      ToastFail("لطفا مقادیر فیلد ها را با دقت وارد کنید");
    }
  }
  function fillFaqQuestion(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      dispatch(
        setFormQuestion({
          questionError: "لطفا  متن سوال را وارد کنید",
          formIsValid: false,
          question: text,
        })
      );
    } else {
      dispatch(
        setFormQuestion({
          questionError: "",
          question: text,
          formIsValid: true,
        })
      );
    }
  }

  function fillFaqAnswer(event: any): void {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      dispatch(
        setFormAnswer({
          answerError: "لطفا  متن پاسخ را وارد کنید",
          formIsValid: false,
          answer: text,
        })
      );
    } else {
      dispatch(
        setFormAnswer({
          answerError: "",
          answer: text,
          formIsValid: true,
        })
      );
    }
  }
  function fillFaqpPriority(event: any): void {
    let value = validator.escape(event.target.value);
    dispatch(
      setFormPriority({
        priorityError: "",
        formIsValid: true,
        priority: value,
      })
    );
  }
  return (
    <>
      <div className="container p-4">
        <div className="flex flex-col  w-full mx-auto aspect-video gap-4">
          <div className="flex flex-col justify-between w-4/4  gap-4 py-4  mb-4 bg-white shadow-md shadow-gray-500 ">
            <div className="px-2">
              <main className="p-4">
                <div className="px-2 ">
                  <a className=" flex text-2xl border-b p-4 border-gray-400">
                    تغییر اطلاعات سوالات متداول
                  </a>
                </div>

                <div>
                  <div className="w-1/2 mx-auto">
                    <div className="flex flex-col gap-2 m-2">
                      <label htmlFor="_id" className="w-20 text-sm font-bold">
                        کد سوال
                      </label>
                      <input
                        type="text"
                        name="_id"
                        id="_id"
                        className="p-1 border
            border-gray-300 bg-[#F9FAFB]"
                        disabled
                        value={faqFormState.data._id}
                      />
                    </div>
                    <div className="flex flex-col gap-2 m-2">
                      <label
                        htmlFor="question"
                        className="w-20 text-sm font-bold"
                      >
                        متن سوال
                      </label>
                      <input
                        type="text"
                        name="question"
                        id="question"
                        className="p-1 border
            border-gray-300 bg-[#F9FAFB]"
                        onChange={fillFaqQuestion}
                        value={faqFormState.data.question}
                      />
                      <p className="text-red-400 text-xs">
                        {faqFormState.data.questionError}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 mx-2 sm:mt-2">
                      <label
                        htmlFor="answer"
                        className="w-20 text-sm font-bold"
                      >
                        متن پاسخ
                      </label>
                      <textarea
                        name="answer"
                        id="answer"
                        rows={4}
                        className="grow p-2 outline-none border border-gray-300 bg-[#F9FAFB]"
                        onChange={fillFaqAnswer}
                        value={faqFormState.data.answer}
                      ></textarea>
                      <p className="text-red-400 text-xs">
                        {faqFormState.data.answerError}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 m-2">
                      <label
                        htmlFor="priority"
                        className="w-25 text-sm font-bold"
                      >
                        اولویت نمایش
                      </label>
                      <input
                        type="number"
                        min="1"
                        name="priority"
                        id="priority"
                        className="p-1 border border-gray-300 bg-[#F9FAFB]"
                        onChange={fillFaqpPriority}
                        value={faqFormState.data.priority}
                      />
                      <p className="text-red-400 text-xs">
                        {faqFormState.data.priorityError}
                      </p>
                    </div>

                    <div className="flex justify-end p-2">
                      <button
                        type="button"
                        onClick={submitEditFaq}
                        className="text-white bg-green-400 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        ثبت تغییرات
                      </button>
                    </div>
                  </div>
                  <div className=" flex flex-col">
                    <img src="" />
                    <img src="" />
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
// This gets called on every request
export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const { req } = context;
  const { cookies } = req;
  console.log("cookies", cookies.cookieName);

  const baseURL = process.env.NEXT_PUBLIC_BASEURL;
  const res = await fetch(`${baseURL}/api/faqs/${id}`,{
    method: "GET",
    credentials: "include",
    headers: {
      Authorization: cookies.cookieName
    }
  });
  const repo = await res.json();
  const faq = JSON.stringify(repo);
  return { props: { faq } };
}
EditFaq.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

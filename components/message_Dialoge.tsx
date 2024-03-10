import React, { useEffect } from "react";
import messagesJson from "../utility/messages.json";
import { MessageEntity } from "@/models/entities";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";

import validator from "validator";
import {
  msgFormCleard,
  msgFormFilled,
  submitPostMessageAction,
} from "@/redux/store/messageForm";
import { rgx_insecure } from "@/utility/regex";
import myAppContext from "./context/context";
import { ToastFail } from "@/utility/tostify";

export default function MessageDialogeComponent({ props }: any) {
  const { msgModal, setMsgModal } = React.useContext(myAppContext);
  const { msgType, setMsgType } = React.useContext(myAppContext);
  const messageList: Array<MessageEntity> = messagesJson;
  const dispatch = useAppDispatch();
  const msgFormState = useAppSelector((state) => state.entities.messageForm);
  const factorFormState = useAppSelector((state) => state.entities.factorForm);
  useEffect(() => {
    dispatch(msgFormCleard());
  }, []);
  function fillMsgText(event: any) {
    let text: string = event.target.value;
    if (validator.isEmpty(text)) {
      dispatch(
        msgFormFilled({
          ...msgFormState.data,
          textError: "لطفا متن پیام را وارد کنید",
          formIsValid: false,
          text: text,
        })
      );
    } else if (validator.matches(text, rgx_insecure)) {
      dispatch(
        msgFormFilled({
          ...msgFormState.data,
          textError: "لطفا کارکترهای غیرمجاز وارد نکنید",
          formIsValid: false,
          text: text,
        })
      );
    } else {
      dispatch(
        msgFormFilled({
          ...msgFormState.data,
          textError: "",
          text: text,
          formIsValid: true,
        })
      );
    }
  }
  async function submitSendMsg() {
    if (msgType == "sms") {
      sendMsgViaSms();
    } else if (msgType == "email") {
      sendMsgViaEmail();
    }
  }

  async function sendMsgViaEmail() {
    if (msgFormState.data.formIsValid) {
      if (validator.isEmpty(factorFormState.data.email)) {
        ToastFail("ایمیل مشتری خالی میباشد");
      } else {
        // const m = new MessageService();
        const message = {
          reciever: factorFormState.data.email,
          subject: msgFormState.data.subject,
          text: msgFormState.data.text,
        };
        // const result = await m.sendEmail(message);
        try {
          dispatch(submitPostMessageAction(message));
        } catch (err) {
          console.log("rrrr");
        }
      }
    } else {
      ToastFail("لطفا مقادیر فیلد ها را با دقت وارد کنید");
    }
  }
  async function sendMsgViaSms() {
    if (msgFormState.data.formIsValid) {
      if (validator.isEmpty(factorFormState.data.mobile)) {
        ToastFail("موبایل مشتری خالی میباشد");
      } else {
        alert("sending sms");
        // const m = new MessageService();
        // const message = {
        //   reciever: "yadegar.arashk@gmail.com",
        //   subject: msgFormState.data.subject,
        //   text: msgFormState.data.text,
        // };
        // const result = await m.sendEmail(message);
      }
    } else {
      ToastFail("لطفا مقادیر فیلد ها را با دقت وارد کنید");
    }
  }

  function changeMessage(event: any) {
    const node = event.target;
    const text = node.value;
    const filtered = messageList.filter((msg) => msg.title.match(text));
    const greeting =
      "جناب آقای/خانم " +
      factorFormState.data.fName +
      " " +
      factorFormState.data.lName +
      "\n";

    dispatch(
      msgFormFilled({
        ...msgFormState.data,
        textError: "",
        subject: text,
        formIsValid: true,
        text: greeting + filtered[0].text,
      })
    );
  }
  function changeMsgType(event: any) {
    const text = event.target.value;
    setMsgType(text);
    console.log(text);
  }
  function toggleMsgModal() {
    setMsgModal(!msgModal);
  }

  return (
    <>
      <div className="absolute shadow-lg shadow-black bg-white w-6/12 text-black  rounded-lg  overflow-hidden">
        <div className="flex flex-col  mx-auto   border-gray-500 w-full">
          <div className="flex flex-row justify-between bg-slate-200">
            <label htmlFor="text_state" className="w-20 text-sm m-1  font-bold">
              ارسال پیام
            </label>
            <svg
              onClick={toggleMsgModal}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7  cursor-pointer bg-red-600  h-4transition-all duration-300 hover: text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="flex flex-col   gap-2  mx-2 mt-2 ">
            <div className="flex flex-col sm:flex-row flex-wrap  gap-2">
              <select
                onClick={changeMessage}
                className=" p-1 outline-none w-full sm:w-fit  border border-gray-300  bg-[#F9FAFB]"
              >
                {messageList.map((element) => (
                  <option id={element.text} key={element.id}>
                    {element.title}
                  </option>
                ))}
              </select>

              <select
                onClick={changeMsgType}
                className=" outline-none w-full sm:w-fit    border border-gray-300  bg-[#F9FAFB]"
              >
                <option id="email" value="email">
                  ایمیل
                </option>
                <option id="sms" value="sms">
                  اس ام اس
                </option>
              </select>
            </div>

            <div>
              <textarea
                name="text"
                id="text"
                rows={4}
                className="grow p-2 w-full outline-none   border border-gray-300  bg-[#F9FAFB]"
                placeholder="متن پیام"
                onChange={fillMsgText}
                value={msgFormState.data.text}
              ></textarea>

              <p className="text-red-400 text-xs">
                {msgFormState.data.textError}
              </p>
            </div>
          </div>
          <div className="flex justify-end flex-wrap p-2 gap-2 relative">
      
              <button
                disabled={msgFormState.isLoading}
                type="button"
                onClick={submitSendMsg}
                className="text-white cursor-pointer flex justify-center bg-green-400   font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                {msgFormState.isLoading && (
                  <span className=" w-6 h-6 z-40 absolute">
                    <img src="/facebook.gif" />
                  </span>
                )}
                ارسال
              </button>
              <button
              type="button"
              onClick={toggleMsgModal}
              className="text-white cursor-pointer flex justify-center bg-red-500   font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
              انصراف
            </button>
  
          </div>
        </div>
      </div>
    </>
  );
}

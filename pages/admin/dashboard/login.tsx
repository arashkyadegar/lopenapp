import myAppContext from "@/components/context/context";
import { submitSigninAction, userRecieved } from "@/redux/store/user";
import { LoginService } from "@/services/loginService";
import { ToastFail, ToastInfo, ToastSuccess } from "@/utility/tostify";
import { useAppDispatch, useAppSelector } from "../../../redux/store/hooks";
import Link from "next/link";
import React from "react";
import validator from "validator";
export default function Login({ props }: any) {
  const { loginForm, setLoginForm } = React.useContext(myAppContext);
  const dispatch = useAppDispatch();
  async function submitLoginApi(event: any): Promise<void> {
    event.preventDefault();
    // if (loginForm.formIsValid) {
    const email = "admin";
    const password = "admin";
    const remember = "true";
    // const baseUrl = `${process.env.NEXT_PUBLIC_BASEURL}/api/auth/login/`;
    // const res = await fetch(baseUrl, {
    //   method: "POST",
    //   credentials:"include",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: email,
    //     password: password,
    //     remember: remember,
    //   })
    // });

    // const result = await res.text();
    //console.log(result);
     dispatch(submitSigninAction(email, password, remember));
    // const loginService = new LoginService();
    // loginService
    //   .login(email, password, remember)
    //   .then((rslt) => {
    //     const value = JSON.parse(rslt);
    //     switch (value.status) {
    //       case 200: {

    //         ToastSuccess("شما با موفقیت لاگین کردید");
    //         break;
    //       }
    //       case 400: {
    //         ToastFail("کلمه عبور اشتباه میباشد");
    //         break;
    //       }
    //       case 404: {
    //         ToastInfo("نام کاربری موجود نمیباشد");
    //         break;
    //       }
    //     }
    //   })
    //   .catch((err) => {
    //     ToastFail();
    //   });
    // }
  }
  function fillLoginPassword(event: any) {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      setLoginForm({
        ...loginForm,
        password: text,
        passwordError: "لطفا کلمه عبور را وارد کنید",
        formIsValid: false,
      });
    } else {
      setLoginForm({
        ...loginForm,
        password: text,
        passwordError: "",
        formIsValid: true,
      });
    }
  }
  function fillLoginEmail(event: any) {
    let text: string = validator.escape(event.target.value);
    if (validator.isEmpty(text)) {
      setLoginForm({
        ...loginForm,
        emailError: "لطفا نام کاربری را وارد کنید",
        formIsValid: false,
      });
    } else {
      setLoginForm({
        ...loginForm,
        email: text,
        emailError: "",
        formIsValid: true,
      });
    }
  }

  return (
    <div className="container p-4">
      <div className="flex flex-col items-center justify-center w-full mx-auto gap-4">
        <div className="flex flex-col justify-between   gap-4 py-4  mb-4 bg-white shadow-md shadow-gray-500 ">
          <div className="px-2 ">
            <a className="w-full flex text-center text-2xl border-b p-4 border-gray-400">
              Login
            </a>
          </div>
          <form onSubmit={submitLoginApi}>
            <div className="w-full mx-auto">
              <div className="flex flex-col gap-2 m-2">
                <label htmlFor="email" className="w-20 text-sm font-bold">
                  نام کاربری
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="p-1 border
            border-gray-300 bg-[#F9FAFB]"
                  onChange={fillLoginEmail}
                  value={loginForm.email}
                />
                <p className="text-red-400 text-xs">{loginForm.emailError}</p>
              </div>
              <div className="flex flex-col gap-2 mx-2 sm:mt-2">
                <label htmlFor="password" className="w-20 text-sm font-bold">
                  کلمه عبور
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="p-1 border
            border-gray-300 bg-[#F9FAFB]"
                  onChange={fillLoginPassword}
                  value={loginForm.password}
                />
                <p className="text-red-400 text-xs">
                  {loginForm.passwordError}
                </p>
              </div>

              <div className="flex justify-end p-2">
                <button
                  type="submit"
                  className="text-white bg-green-400 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  ورود
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

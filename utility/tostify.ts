import { toast } from "react-toastify";
import { ResponseStatus } from "./responseStatus";

export const ToastSuccess = (message = "عملیات با موفقیت انجام شد") => {
  toast.success(`${ResponseStatus.OK} : ${message}`, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const ToastInfo = (message = "عملیات با موفقیت انجام شد") => {
  toast.warning(`${message}`, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const ToastFail = (message = "خطا در انجام عملیات!") => {
  toast.error(`${ResponseStatus.BAD_REQUEST} : ${message}`, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export const ToastAuthFail = (message = " لطفا لاگین کنید") => {
  toast.error(`${ResponseStatus.UNAUTHORIZED} : ${message}`, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};


import { toast } from "react-toastify";
import * as actions from "../api";
import { ResponseStatus } from "../../../utility/responseStatus";
import { ToastFail, ToastSuccess } from "@/utility/tostify";
const api =
  ({ dispatch }: any) =>
  (next: any) =>
  async (action: any) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);
    next(action);
    const baseURL = process.env.NEXT_PUBLIC_BASEURL;
    const { url, method, onSuccess, onError, body, headers } = action.payload;
    console.log(action.headers);
    const requestOptions = {
      method: method,
      headers: headers,
      body: body,
    };
    try {
      const response = await fetch(baseURL + url, requestOptions);
      console.log(response.status);
      switch (response.status) {
        case ResponseStatus.OK: {
          const comments = await response.json();
          // General
          dispatch(actions.apiCallSucceeded(comments));
          // specified
          dispatch({ type: onSuccess, payload: comments });
          ToastSuccess();
          break;
        }
        case ResponseStatus.BAD_REQUEST: {
          ToastFail();
          break;
        }
        case ResponseStatus.NOT_FOUND: {
          ToastFail("مورد درخواستی یافت نشد");
          break;
        }
      }
    } catch (error: any) {
      // General handling
      dispatch(actions.apiCallFailed(error.message));

      //specified handling
    }
  };
export default api;

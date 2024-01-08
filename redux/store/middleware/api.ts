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

    const requestOptions = {
      method: method,
      headers: headers,
      body: body,
    };
    console.log(action.headers);
    try {
      const response = await fetch(baseURL + url, requestOptions);
      const result = await response.text();
      switch (response.status) {
        case ResponseStatus.OK: {
          const x = JSON.parse(result);
          console.log(x);
          ///const comments = await response.json();
          // // General
          // dispatch(actions.apiCallSucceeded(comments));
          // // specified
          dispatch({ type: onSuccess, payload: x });
          ToastSuccess();
          return('OK')
          break;
        }
        case ResponseStatus.BAD_REQUEST: {
          dispatch({ type: onError });
          ToastFail(result);
          return('BAD')
          break;
        }
        case ResponseStatus.NOT_FOUND: {
          ToastFail("مورد درخواستی یافت نشد");
          return('ME')
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

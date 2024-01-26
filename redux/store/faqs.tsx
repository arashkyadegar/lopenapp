import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";


const REMOVE_POST = "REMOVE_FACTOR";

// Part 1
export interface FaqsInitialState {
  faqs: [];
}
export const initialState: FaqsInitialState = {
  faqs: [],
};

// Part 2
export const faqsSlice = createSlice({
  name: "faqs",
  initialState: {
    list: [],
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
    
    faqsRecieved: (state: any, action: PayloadAction<any>) => {
      state.list = action.payload;
      state.lastFetch = Date.now();
    },
    faqsToggled: (state: any, action: PayloadAction<any>) => {

      state.list =action.payload;
      state.lastFetch = Date.now();
    },
    faqsFaild: (state: any, action: PayloadAction<any>) => {},
  },
});
// export const fetchFaqs = (id: any) =>
//   apiCallBegan({
//     url: "/api/wbfaqs/",
//     onSuccess: "faqs/faqsRecieved",
//     onError: "faqs/faqsFaild",
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     //body: JSON.stringify(product),
//   });
  export const submitDeleteFaqAction = (id: any) =>
  apiCallBegan({
    url: "/api/faqs/" + id,
    onSuccess: "faqs/faqsFaild",
    onError: "faqs/faqsFaild",
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });

export const submitEditFaqAction = (product: any) =>
  apiCallBegan({
    url: "/api/faqs/" + product._id,
    onSuccess: "faqs/faqsFaild",
    onError: "faqs/faqsFaild",
    credentials:"include",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

export const submitAddFaqAction = (product: any) =>
  apiCallBegan({
    url: "/api/faqs/",
    onSuccess: "faqForm/faqFormCleard",
    onError: "faqs/faqsFaild",
    credentials:"include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
export const { faqsRecieved, faqsToggled } = faqsSlice.actions;
export default faqsSlice.reducer;

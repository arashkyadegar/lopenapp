import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

// Part 1
export interface PostInitialState {
  product: number;
}
export const initialState: PostInitialState = {
  product: 0,
};

// Part 2
export const messageFormSlice = createSlice({
  name: "messageForm",
  initialState: {
    data: {
      _id: "",
      subject: "",
      msgType: "email",
      text: "",
      textError:"",
      reciver: "",
      formIsValid: false,
    },
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
    msgFormCleard: (state: any) => {
      state.data = {
        _id: "",
        subject: "",
        msgType: "email",
        text: "",
        textError:"",
        reciver: "",
        date: {},
      };
      state.isLoading = false;
      state.lastFetch = Date.now();
    },
    msgFormFetched: (state: any, action: PayloadAction<any>) => {
      state.data = action.payload[0];
      state.data.formIsValid = true;
      state.lastFetch = Date.now();
    },
    msgFormRequested: (state: any, action: PayloadAction<any>) => {
      state.isLoading = true;
    },
    msgFormFilled: (state: any, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.lastFetch = Date.now();
    },
    msgFormLoadingStoped: (state: any, action: PayloadAction<any>) => {
      state.isLoading = false;
    },
    //     setFormQuestion: (state: any, action: PayloadAction<any>) => {
    //       state.data.question = action.payload.question;
    //       state.data.questionError = action.payload.questionError;
    //       state.data.formIsValid = action.payload.formIsValid;
    //     },
    //     setFormAnswer: (state: any, action: PayloadAction<any>) => {
    //       state.data.answer = action.payload.answer;
    //       state.data.answerError = action.payload.answerError;
    //       state.data.formIsValid = action.payload.formIsValid;
    //     },
    //     setFormPriority: (state: any, action: PayloadAction<any>) => {
    //       state.data.priority = action.payload.priority;
    //       state.data.priorityError = action.payload.priorityError;
    //       state.data.formIsValid = action.payload.formIsValid;
    //     },
  },
});

// action creator

export const getFactorAction = (id: any) =>
  apiCallBegan({
    url: "/api/factors/" + id,
    onSuccess: "factorForm/factorsRecieved",
    onError: "products/productsFaild",
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  export const submitPostMessageAction = (message: any) =>
  apiCallBegan({
    url: "/api/emails/",
    onSuccess: "products/productFaild",
    onError: "messageForm/msgFormLoadingStoped",
    onStart: "messageForm/msgFormRequested",
    credentials:"include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });

export const {
  msgFormRequested,
  msgFormLoadingStoped,
  msgFormCleard,
  msgFormFilled,
  //   setFormAnswer,
  //   setFormPriority,
} = messageFormSlice.actions;
export default messageFormSlice.reducer;

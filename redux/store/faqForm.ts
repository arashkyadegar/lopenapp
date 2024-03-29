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
export const faqFormSlice = createSlice({
  name: "faqForm",
  initialState: {
    data: {
      _id: "",
      groupId: 0,
      question: "",
      answer: "",
      display: true,
      priority: 0,
      date: {},
      questionError: "",
      answerError: "",
      priorityError: "",
      formIsValid: false,
    },
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
    faqFormRequested: (state: any, action: PayloadAction<any>) => {
      state.isLoading = true;
    },

    faqFormLoadingStoped: (state: any, action: PayloadAction<any>) => {
      state.isLoading = false;
    },
    faqFormCleard: (state: any) => {
      state.data = {
        _id: "",
        groupId: 0,
        question: "",
        answer: "",
        display: true,
        priority: 0,
        date: {},
      };
      state.isLoading = false;
      state.lastFetch = Date.now();
    },
    faqFormFetched: (state: any, action: PayloadAction<any>) => {
      state.data = action.payload[0];
      state.data.formIsValid = true;
      state.lastFetch = Date.now();
    },
    faqFormFilled: (state: any, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.lastFetch = Date.now();
    },
    setFormQuestion: (state: any, action: PayloadAction<any>) => {
      state.data.question = action.payload.question;
      state.data.questionError = action.payload.questionError;
      state.data.formIsValid = action.payload.formIsValid;
    },
    setFormAnswer: (state: any, action: PayloadAction<any>) => {
      state.data.answer = action.payload.answer;
      state.data.answerError = action.payload.answerError;
      state.data.formIsValid = action.payload.formIsValid;
    },
    setFormPriority: (state: any, action: PayloadAction<any>) => {
      state.data.priority = action.payload.priority;
      state.data.priorityError = action.payload.priorityError;
      state.data.formIsValid = action.payload.formIsValid;
    }
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

export const {
  setFormQuestion,
  faqFormCleard,
  faqFormFilled,
  setFormAnswer,
  setFormPriority,

  faqFormRequested,
  faqFormLoadingStoped,
} = faqFormSlice.actions;
export default faqFormSlice.reducer;

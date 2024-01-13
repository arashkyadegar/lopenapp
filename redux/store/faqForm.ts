import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
//import { AuthToken } from "@/utility/readToken";

//Action types

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
    },
  },
});

// action creator
export const {
  faqFormCleard,
  faqFormFilled,
  setFormQuestion,
  setFormAnswer,
  setFormPriority,
} = faqFormSlice.actions;
export default faqFormSlice.reducer;

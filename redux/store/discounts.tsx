import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";


const REMOVE_POST = "REMOVE_FACTOR";

// Part 1
export interface DiscountsInitialState {
  discounts: {
    list:string[],
    isLoading: false,
    lastFetch: null,
  };
}
export const initialState: DiscountsInitialState = {
  discounts: {
    list:[],
    isLoading: false,
    lastFetch: null,
  },
};

// Part 2
export const discountsSlice = createSlice({
  name: "discounts",
  initialState: {
    list:[],
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
    discountsRecieved: (state: any, action: PayloadAction<any>) => {
      state.list = action.payload;
      state.lastFetch = Date.now();
    },
    discountsFaild: (state: any, action: PayloadAction<any>) => {
      state.list = [];
      state.lastFetch = Date.now();
    },
  },
});

export const getDiscountsAction = () =>
  apiCallBegan({
    url: "/api/discounts/",
    onSuccess: "discounts/discountsRecieved",
    onError: "discounts/discountsFaild",
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });

export const { discountsRecieved,discountsFaild } = discountsSlice.actions;
export default discountsSlice.reducer;

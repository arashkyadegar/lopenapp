import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";


const REMOVE_POST = "REMOVE_FACTOR";

// Part 1
export interface FaqsInitialState {
  factors: {
    list:string[],
    isLoading: false,
    lastFetch: null,
  };
}
export const initialState: FaqsInitialState = {
  factors: {
    list:[],
    isLoading: false,
    lastFetch: null,
  },
};

// Part 2
export const factorsSlice = createSlice({
  name: "factors",
  initialState: {
    list:[],
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
    factorsRecieved: (state: any, action: PayloadAction<any>) => {
      state.list = action.payload;
      state.lastFetch = Date.now();
    },
    factorsFaild: (state: any, action: PayloadAction<any>) => {
      state.list = [];
      state.lastFetch = Date.now();
    },
  },
});
export const getFactorsAction = () =>
  apiCallBegan({
    url: "/api/factors/",
    onSuccess: "factors/factorsRecieved",
    onError: "factors/factorsFaild",
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });


export const { factorsRecieved,factorsFaild } = factorsSlice.actions;
export default factorsSlice.reducer;

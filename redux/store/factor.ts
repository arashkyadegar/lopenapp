import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
//import { AuthToken } from "@/utility/readToken";

//Action types

const REMOVE_POST = "REMOVE_FACTOR";

// Part 1
export interface FactorInitialState {
  factors: [];
}
export const initialState: FactorInitialState = {
  factors: [],
};

// Part 2
export const factorSlice = createSlice({
  name: "factor",
  initialState: {
    list: [],
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
    factorsRecieved: (state: any, action: PayloadAction<any>) => {
      state.list = action.payload;
      state.lastFetch = Date.now();
    },
    factorAdded: (state: any, action: PayloadAction<any>) => {
     // state.list =[];
      state.list.push(action.payload);
    },
    factorReAdded: (state: any, action: PayloadAction<any>) => {
      // state.list =[];
      state.list = action.payload;
    },
  },
});

export const { factorAdded, factorReAdded } = factorSlice.actions;
export default factorSlice.reducer;

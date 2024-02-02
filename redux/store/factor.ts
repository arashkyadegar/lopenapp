import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const REMOVE_POST = "REMOVE_FACTOR";

// Part 1
export interface PostInitialState {
  product: number;
}
export const initialState: PostInitialState = {
  product: 0,
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

export const submitAddFactorAction = (factor: any, items: any) =>
  apiCallBegan({
    url: "/api/factors/",
    onSuccess: "factorForm/factorFormCleard",
    onError: "products/productFaild",
    credentials:"include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({factor:factor, items:items}),
  });


  export const submitDeleteFactorAction = (id: any) =>
  apiCallBegan({
    url: "/api/factors/" + id,
    onSuccess: "factors/factorFaild",
    onError: "factors/factorFaild",
    credentials:"include",
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });

export const submitEditFactorAction = (factor: any) =>
  apiCallBegan({
    url: "/api/factors/" + factor._id,
    onSuccess: "factors/factorFaild",
    onError: "factors/factorFaild",
    credentials:"include",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(factor),
  });

export const { factorAdded, factorReAdded, factorsRecieved } =
  factorSlice.actions;
export default factorSlice.reducer;

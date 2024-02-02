import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";


const REMOVE_POST = "REMOVE_FACTOR";

// Part 1
export interface FaqsInitialState {
  products: {
    list:string[],
    isLoading: false,
    lastFetch: null,
  };
}
export const initialState: FaqsInitialState = {
  products: {
    list:[],
    isLoading: false,
    lastFetch: null,
  },
};

// Part 2
export const productsSlice = createSlice({
  name: "products",
  initialState: {
    list:[],
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
    productsRecieved: (state: any, action: PayloadAction<any>) => {
      state.list = action.payload;
      state.lastFetch = Date.now();
    },
    productsFaild: (state: any, action: PayloadAction<any>) => {
      state.list = [];
      state.lastFetch = Date.now();
    },
  },
});

export const getProductsAction = () =>
  apiCallBegan({
    url: "/api/products/",
    onSuccess: "products/productsRecieved",
    onError: "products/productsFaild",
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });

export const { productsRecieved,productsFaild } = productsSlice.actions;
export default productsSlice.reducer;

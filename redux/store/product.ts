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
export const productSlice = createSlice({
  name: "product",
  initialState: {
    data: {},
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
    productAdded: (state: any, action: PayloadAction<number>) => {
      state.data = action.payload;
      state.lastFetch = Date.now();
    },
  },
});

// action creator

export const submitAddProductAction = (product: any) =>
  apiCallBegan({
    url: "/api/products/",
    onSuccess: "product/productAdded",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //  Authorization: `${token}`,
    },

    body: JSON.stringify(product),
  });

export const { productAdded } = productSlice.actions;
export default productSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import { useState } from "react";
import { AddProductForm } from "@/models/entities";
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
    productAdded: (state: any, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.lastFetch = Date.now();
    },
    productFaild: (state: any, action: PayloadAction<any>) => {},
  },
});

// action creator
export const submitDeleteProductAction = (id: any) =>
  apiCallBegan({
    url: "/api/products/" + id,
    onSuccess: "products/productFaild",
    onError: "products/productFaild",
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });

export const submitEditProductAction = (product: any) =>
  apiCallBegan({
    url: "/api/products/" + product._id,
    onSuccess: "products/productFaild",
    onError: "products/productFaild",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

export const submitAddProductAction = (product: any) =>
  apiCallBegan({
    url: "/api/products/",
    onSuccess: "productForm/productFormCleard",
    onError: "products/productFaild",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

export const { productAdded } = productSlice.actions;
export default productSlice.reducer;

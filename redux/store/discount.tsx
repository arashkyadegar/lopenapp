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
export const discountSlice = createSlice({
  name: "discount",
  initialState: {
    data: {},
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
    discountAdded: (state: any, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.lastFetch = Date.now();
    },
    discountFaild: (state: any, action: PayloadAction<any>) => {},
  },
});

// action creator
export const submitDeleteDiscountAction = (id: any) =>
  apiCallBegan({
    url: "/api/discounts/" + id,
    onSuccess: "discount/discountFaild",
    onError: "discount/discountFaild",
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    //body: JSON.stringify(product),
  });

export const submitEditDiscoutAction = (product: any) =>
  apiCallBegan({
    url: "/api/discounts/" + product._id,
    onSuccess: "discount/discountFaild",
    onError: "discount/discountFaild",
    credentials:"include",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

export const submitAddDiscountAction = (product: any) =>
  apiCallBegan({
    url: "/api/discounts/",
    onSuccess: "discountForm/discountFormCleard",
    onError: "discount/discountFaild",
    credentials:"include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

export const { discountAdded } = discountSlice.actions;
export default discountSlice.reducer;

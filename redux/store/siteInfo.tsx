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
export const siteinfoFormSlice = createSlice({
  name: "siteinfo",
  initialState: {
    data: {},
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
     siteinfoAdded: (state: any, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.lastFetch = Date.now();
    },
    siteinfoFaild: (state: any, action: PayloadAction<any>) => {},
  },
});

// action creator
export const submitEditSiteinfoAction = (siteInfo: any) =>
  apiCallBegan({
    url: "/api/siteinfosxxx/",
    onSuccess: "siteinfo/siteinfoAdded",
    onError: "siteinfo/siteinfoFaild",
    credentials:"include",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(siteInfo),
  });

export const { siteinfoAdded } = siteinfoFormSlice.actions;
export default siteinfoFormSlice.reducer;

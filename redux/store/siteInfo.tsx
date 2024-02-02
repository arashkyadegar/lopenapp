import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

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
    url: "/api/siteinfos/",
    onSuccess: "siteinfo/siteinfoAdded",
    onError: "siteinfo/siteinfoFaild",
    credentials: "include",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(siteInfo),
  });

export const getSiteinfoAction = () =>
  apiCallBegan({
    url: "/api/siteinfos/",
    onSuccess: "siteinfoForm/siteinfoFormFetched",
    onError: "products/productsFaild",
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
export const { siteinfoAdded } = siteinfoFormSlice.actions;
export default siteinfoFormSlice.reducer;

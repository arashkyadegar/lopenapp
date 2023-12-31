//import { User } from "@/models/entities";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

// Part 2
export const selectedProductSlice = createSlice({
  name: "selectedProduct",
  initialState: {
    data: {
      _id: "",
      name: "",
      weight: "",
      size: "",
      healthId: "",
      type: "",
      components: "",
      desc: "",
      score: "",
      price: "",
      display: "",
      isAvailable: "",
      tags: "",
      image: "",
      images: "",
      userId: "",
      date: "",
      count:""
    },
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
    selectedProductDislike: (state: any, action: PayloadAction<any>) => {
      state.data.liked = false;
    },
    selectedProductLike: (state: any, action: PayloadAction<any>) => {
      state.data.liked = true;
    },
    selectedProductUpdated: (state: any, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.lastFetch = Date.now();
    },
  },
});

// Part 3
export const {
  selectedProductUpdated,
  selectedProductLike,
  selectedProductDislike,
} = selectedProductSlice.actions;

// action creators
export const submitSendLikeAction = (userId: any, postId: any) =>
  apiCallBegan({
    url: "/likes/",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    onSuccess: "selectedPost/selectedPostLike",
    body: JSON.stringify({
      userId: userId,
      postId: postId,
      date: "",
    }),
  });

export const submitDeleteLikeAction = (userId: any, postId: any) =>
  apiCallBegan({
    url: "/likes/",
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    onSuccess: "selectedPost/selectedPostDislike",
    body: JSON.stringify({
      userId,
      postId,
      date: "",
    }),
  });

export default selectedProductSlice.reducer;

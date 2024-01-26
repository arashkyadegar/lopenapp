import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
;

export const fileSlice = createSlice({
  name: "file",
  initialState: {
    data: {
      name: "",
    },
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
    fileUploaded: (state: any, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.lastFetch = Date.now();
    },
  },
});

// action creator
export const submitUploadAction =(formdata: any) =>
  apiCallBegan({
    url: "/uploads/",
    method: "POST",
    credentials:"include",
    header: "",
    onSuccess: "file/fileUploaded",
    body: formdata,
  });

// Part 3
export const { fileUploaded } = fileSlice.actions;
export default fileSlice.reducer;

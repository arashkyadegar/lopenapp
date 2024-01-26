import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Part 1
export interface PostInitialState {
  product: number;
}
export const initialState: PostInitialState = {
  product: 0,
};

// Part 2
export const discountFormSlice = createSlice({
  name: "discountForm",
  initialState: {
    data: {
      _id: "",
      sDate: "",
      eDate: "",
      title: "",
      type: 0,
      value: 0,
      productId: "",
      date: {},
      sDateError: "",
      eDateError: "",
      titleError: "",
      valueError: "",
      productIdError: "",
      formIsValid: false,
    },
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
    discountFormCleard: (state: any) => {
      state.data = {
        _id: "",
        sDate: "",
        eDate: "",
        title: "",
        type: 0,
        value: 0,
        productId: "",
        date: {},
        sDateError: "",
        eDateError: "",
        titleError: "",
        valueError: "",
        productIdError: "",
        formIsValid: false,
      };
      state.lastFetch = Date.now();
    },
    discountFormFilled: (state: any, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.lastFetch = Date.now();
    },
    setFormSDate: (state: any, action: PayloadAction<any>) => {
      state.data.sDate = action.payload.sDate;
      state.data.sDateError = action.payload.sDateError;
      state.data.formIsValid = action.payload.formIsValid;
    },
    setFormEDate: (state: any, action: PayloadAction<any>) => {
      state.data.eDate = action.payload.eDate;
      state.data.eDateError = action.payload.eDateError;
      state.data.formIsValid = action.payload.formIsValid;
    },
    setFormTitle: (state: any, action: PayloadAction<any>) => {
      state.data.title = action.payload.title;
      state.data.titleError = action.payload.titleError;
      state.data.formIsValid = action.payload.formIsValid;
    },
    setFormValue: (state: any, action: PayloadAction<any>) => {
      state.data.value = action.payload.value;
      state.data.valueError = action.payload.valueError;
      state.data.formIsValid = action.payload.formIsValid;
    },
    setFormProductId: (state: any, action: PayloadAction<any>) => {
      state.data.productId = action.payload.productId;
      state.data.productIdError = action.payload.productIdError;
      state.data.formIsValid = action.payload.formIsValid;
    },
  },
});

// action creator
export const {
  discountFormCleard,
  discountFormFilled,
  setFormSDate,
  setFormEDate,
  setFormTitle,
  setFormValue,
  setFormProductId,
} = discountFormSlice.actions;
export default discountFormSlice.reducer;

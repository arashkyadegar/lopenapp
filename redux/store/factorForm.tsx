import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PostInitialState {
  factor: number;
}
export const initialState: PostInitialState = {
  factor: 0,
};

// Part 2
export const factorFormSlice = createSlice({
  name: "factorForm",
  initialState: {
    data: {
      _id: "",
      factorNumber: "",
      wbuserId: "",
      refCode: "",
      factorContent: "",
      additionalInfo: "",
      price: 0,
      statusId: 0,
      paymentType: 0,

      fName: "",
      lName: "",
      mobile: "",
      tel: "",
      state: "",
      city: "",
      postalCode: "",
      address: "",
      desc: "",

      fNameError: "",
      lNameError: "",

      telError: "",
      mobileError: "",
      stateError: "",
      cityError: "",
      postalCodeError: "",
      addressError: "",
      descError: "",

      formIsValid: false,
    },
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
    factorFormCleard: (state: any) => {
      state.data = {
        _id: "",
        factorNumber: "",
        wbuserId: "",
        refCode: "",
        factorContent: "",
        additionalInfo: "",
        price: 0,
        statusId: 0,
        paymentType: 0,

        fName: "",
        lName: "",
        mobile: "",
        tel: "",
        state: "",
        city: "",
        postalCode: "",
        address: "",
        desc: "",
        formIsValid: false,
      };
      state.lastFetch = Date.now();
    },
    factorFormFilled: (state: any, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.lastFetch = Date.now();
    },
  },
});

// action creator
export const { factorFormFilled, factorFormCleard } = factorFormSlice.actions;
export default factorFormSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
//import { AuthToken } from "@/utility/readToken";

//Action types

// Part 1
export interface PostInitialState {
  siteinfo: number;
}
export const initialState: PostInitialState = {
  siteinfo: 0,
};

// Part 2
export const siteinfoFormSlice = createSlice({
  name: "siteinfoForm",
  initialState: {
    data: {
      _id: "1",
      address1: "",
      address2: "",
      tel1: "",
      tel2: "",
      mobile1: "",
      mobile2: "",
      email1: "",
      email2: "",
      twitter: "",
      googlePlus: "",
      instagram: "",
      linkedin: "",
      whatsapp: "",
      skype: "",
      headerImages: [],
      logo1: "",
      logo2: "",
      footerImage1: "",
      footerImage2: "",
      headerTitle: "",
      footerDescription: "",
      copyRightText: "",
      copyRightYear: "",
      languageId: "",
      address1Error: "",
      address2Error: "",
      tel1Error: "",
      tel2Error: "",
      mobile1Error: "",
      mobile2Error: "",
      email1Error: "",
      email2Error: "",
      twitterError: "",
      googlePlusError: "",
      instagramError: "",
      linkedinError: "",
      whatsappError: "",
      skypeError: "",
      headerImagesError: [],
      logo1Error: "",
      logo2Error: "",
      footerImage1Error: "",
      footerImage2Error: "",
      headerTitleError: "",
      footerDescriptionError: "",
      copyRightTextError: "",
      copyRightYearError: "",
      languageIdError: "",
      formIsValid: false,
    },
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
    siteinfoFormCleard: (state: any) => {
      state.data = {
        _id: "1",
        address1: "",
        address2: "",
        tel1: "",
        tel2: "",
        mobile1: "",
        mobile2: "",
        email1: "",
        email2: "",
        twitter: "",
        googlePlus: "",
        instagram: "",
        linkedin: "",
        whatsapp: "",
        skype: "",
        headerImages: [],
        logo1: "",
        logo2: "",
        footerImage1: "",
        footerImage2: "",
        headerTitle: "",
        footerDescription: "",
        copyRightText: "",
        copyRightYear: "",
        languageId: "",
        formIsValid: false,
      };
      state.lastFetch = Date.now();
    },
    siteinfoFormFilled: (state: any, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.lastFetch = Date.now();
    },
    // siteinfoFormUpdated: (state: any, action: PayloadAction<any>) => {
    //   state.data = action.payload;
    // },
  },
});

// action creator
export const { siteinfoFormFilled, siteinfoFormCleard } =
  siteinfoFormSlice.actions;
export default siteinfoFormSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";



// Part 1
export interface PostInitialState {
  product: number;
}
export const initialState: PostInitialState = {
  product: 0,
};

// Part 2
export const productFormSlice = createSlice({
  name: "productForm",
  initialState: {
    data: {
      _id: "",
      name: "",
      weight: 0,
      size: "",
      healthId: "",
      type: "",
      components: "",
      desc: "",
      score: 0,
      price: 0,
      display: true,
      isAvailable: true,
      tags: "",
      image: "",
      images: [],
      files: [],
      userId: "",
      date: {},
      nameError: "",
      weightError: "",
      sizeError: "",
      healthIdError: "",
      typeError: "",
      componentsError: "",
      descError: "",
      scoreError: "",
      priceError: "",
      displayError: "",
      isAvailableError: "",
      tagsError: "",
      imageError: "",
      imagesError: "",
      userIdError: "",
      count:"1",
      formIsValid: false,
    },
    isLoading: false,
    lastFetch: null,
  },
  reducers: {
    productFormCleard: (state: any) => {
      state.data = {
        _id: "",
        name: "",
        weight: 0,
        size: "",
        healthId: "",
        type: "",
        components: "",
        desc: "",
        score: 0,
        price: 0,
        display: true,
        isAvailable: true,
        tags: "",
        image: "",
        images: Array<any>(),
        files: Array<any>(),
        userId: "",
        date: {},
        nameError: "",
        weightError: "",
        sizeError: "",
        healthIdError: "",
        typeError: "",
        componentsError: "",
        descError: "",
        scoreError: "",
        priceError: "",
        displayError: "",
        isAvailableError: "",
        tagsError: "",
        imageError: "",
        imagesError: "",
        userIdError: "",
        formIsValid: false,
      };
      state.lastFetch = Date.now();
    },
    productFormFilled: (state: any, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.lastFetch = Date.now();
    },
    setFormCount: (state: any, action: PayloadAction<any>) => {
      state.data.count = action.payload.count;

    },
    setFormName: (state: any, action: PayloadAction<any>) => {
      state.data.name = action.payload.name;
      state.data.nameError = action.payload.nameError;
      state.data.formIsValid = action.payload.formIsValid;
    },
    setFormWeight: (state: any, action: PayloadAction<any>) => {
      state.data.weight = action.payload.weight;
      state.data.weightError = action.payload.weightError;
      state.data.formIsValid = action.payload.formIsValid;
    },
    setFormSize: (state: any, action: PayloadAction<any>) => {
      state.data.size = action.payload.size;
      state.data.sizeError = action.payload.sizeError;
      state.data.formIsValid = action.payload.formIsValid;
    },
    setFormHealthId: (state: any, action: PayloadAction<any>) => {
      state.data.healthId = action.payload.healthId;
      state.data.healthIdError = action.payload.healthIdError;
      state.data.formIsValid = action.payload.formIsValid;
    },
    setFormComponents: (state: any, action: PayloadAction<any>) => {
      state.data.components = action.payload.components;
      state.data.componentsError = action.payload.componentsError;
      state.data.formIsValid = action.payload.formIsValid;
    },
    setFormDesc: (state: any, action: PayloadAction<any>) => {
      state.data.desc = action.payload.desc;
      state.data.descError = action.payload.descError;
      state.data.formIsValid = action.payload.formIsValid;
    },
    setFormPrice: (state: any, action: PayloadAction<any>) => {
      state.data.price = action.payload.price;
      state.data.priceError = action.payload.priceError;
      state.data.formIsValid = action.payload.formIsValid;
    },
    setFormDisplay: (state: any, action: PayloadAction<any>) => {
      state.data.display = action.payload.display;
      state.data.displayError = action.payload.displayError;
      state.data.formIsValid = action.payload.formIsValid;
    },
    setFormIsAvailable: (state: any, action: PayloadAction<any>) => {
      state.data.isAvailable = action.payload.isAvailable;
      state.data.isAvailableError = action.payload.isAvailableError;
      state.data.formIsValid = action.payload.formIsValid;
    },
    setFormTags: (state: any, action: PayloadAction<any>) => {
      state.data.tags = action.payload.tags;
      state.data.tagsError = action.payload.tagsError;
      state.data.formIsValid = action.payload.formIsValid;
    },
    setFormImage: (state: any, action: PayloadAction<any>) => {
      state.data.image = action.payload.image;
      state.data.imageError = action.payload.imageError;
      state.data.formIsValid = action.payload.formIsValid;
    },
    setFormImages: (state: any, action: PayloadAction<any>) => {
      state.data.images = action.payload.images;
      state.data.imagesError = action.payload.imagesError;
      state.data.formIsValid = action.payload.formIsValid;
    },
    setFormFiles: (state: any, action: PayloadAction<any>) => {
      state.data.files = action.payload.files;
      state.data.filesError = action.payload.filesError;
      state.data.formIsValid = action.payload.formIsValid;
    },
  },
});

// action creator
export const {
  productFormFilled,
  productFormCleard,
  setFormName,
  setFormTags,
  setFormImages,
  setFormImage,
  setFormFiles,
  setFormWeight,
  setFormSize,
  setFormHealthId,
  setFormComponents,
  setFormDesc,
  setFormPrice,
  setFormDisplay,
  setFormCount,
  setFormIsAvailable,
} = productFormSlice.actions;
export default productFormSlice.reducer;

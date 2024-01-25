import { createContext, useContext, useState } from "react";
import {
  AddProductForm,
  CityEntity,
  FactorForm,
  FaqEntity,
  LoginForm,
  StateEntity,
} from "../../models/entities";
const myAppContext = createContext({
  // addProductForm: {
  //   _id: "",
  //   name: '',
  //   weight: 0,
  //   size: "",
  //   healthId: "",
  //   type: "",
  //   components: "",
  //   desc: "",
  //   score: 0,
  //   price: 0,
  //   display: false,
  //   isAvailable: false,
  //   tags: "",
  //   image: "",
  //   images: Array<any>(),
  //   files:Array<any>(),
  //   userId: "",
  //   date: {},
  //   nameError: "",
  //   weightError: "",
  //   sizeError: "",
  //   healthIdError: "",
  //   typeError: "",
  //   componentsError: "",
  //   descError: "",
  //   scoreError: "",
  //   priceError: "",
  //   displayError: "",
  //   isAvailableError: "",
  //   tagsError: "",
  //   imageError: "",
  //   imagesError: "",
  //   userIdError: "",
  //   formIsValid: false,
  // },
  // setAddProductForm: (addProductForm: AddProductForm) => {},
  faqItemToggle:false,
  setFaqItemToggle:(faqItemToggle:boolean) =>{},
  navbarToggle: false,
  setNavbarToggle: (navbarToggle: boolean) => {},
  smallBasketToggle: false,
  setSmallBasketToggle: (smallBasketToggle: boolean) => {},
  cities: Array<CityEntity>(),
  setCities: (cities: any[]) => {},
  states: Array<StateEntity>(),
  setStates: (states: any[]) => {},
  citiesUlToggle: false,
  setCitiesUlToggle: (citiesUlToggle: boolean) => {},
  statesUlToggle: false,
  setStatesUlToggle: (statesUlToggle: boolean) => {},
  factorForm: {
    formIsValid: false,
    fNameError: "",
    lNameError: "",
    mobileError: "",
    phoneError: "",
    addressError: "",
    stateError: "",
    cityError: "",
    postCodeError: "",
  },
  setFactorForm: (commentForm: FactorForm) => {},
  loginForm: {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    formIsValid: false,
  },
  setLoginForm: (loginForm: LoginForm) => {},
});

export default myAppContext;

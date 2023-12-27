import { createContext, useContext, useState } from "react";
import { CityEntity, FactorForm, StateEntity } from "../../models/entities";
const myAppContext = createContext({
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
});

export default myAppContext;

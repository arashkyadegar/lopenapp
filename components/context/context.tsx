import { createContext, useContext, useState } from "react";
import { CityEntity, StateEntity } from "../../models/entities";
const myAppContext = createContext({
  cities: Array<CityEntity>(),
  setCities: (cities: any[]) => {},
  states: Array<StateEntity>(),
  setStates: (states: any[]) => {},
  citiesUlToggle:false,
  setCitiesUlToggle:(citiesUlToggle: boolean) => {},
  statesUlToggle:false,
  setStatesUlToggle:(statesUlToggle: boolean) => {},
});

export default myAppContext;

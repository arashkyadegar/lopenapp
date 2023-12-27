import MainLayout from "@/components/common/mainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import myAppContext from "@/components/context/context";
import { useContext, useState } from "react";

import { CityEntity, FactorForm, StateEntity } from "@/models/entities";
export default function App({ Component, pageProps }: AppProps) {
  const stateList: Array<StateEntity> = [];
  const cityList: Array<CityEntity> = [];

  const [states, setStates] = useState(stateList);
  const [cities, setCities] = useState(cityList);

  const [citiesUlToggle, setCitiesUlToggle] = useState(false);
  const [statesUlToggle, setStatesUlToggle] = useState(false);

  const [smallBasketToggle, setSmallBasketToggle] = useState(false);
  const [navbarToggle, setNavbarToggle] = useState(false);
  const [factorForm, setFactorForm] = useState(new FactorForm());
  return (
    <myAppContext.Provider
      value={{
        navbarToggle,
        setNavbarToggle,
        smallBasketToggle,
        setSmallBasketToggle,
        factorForm,
        setFactorForm,
        states,
        setStates,
        cities,
        setCities,
        citiesUlToggle,
        setCitiesUlToggle,
        statesUlToggle,
        setStatesUlToggle,
      }}
    >
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </myAppContext.Provider>
  );
}

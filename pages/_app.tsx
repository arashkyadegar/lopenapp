import MainLayout from "@/components/common/mainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import myAppContext from "@/components/context/context";
import { useContext, useState } from "react";

import { CityEntity, FactorForm, StateEntity } from "@/models/entities";
import { initialState } from "@/redux/store/posts";
import { wrapperForPersistStore, wrapperForStore } from "@/redux/store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
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
  const { store } = wrapperForPersistStore.useWrappedStore(initialState);
  let persistor = persistStore(store);
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
      <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
       </PersistGate> 
      </Provider>
    </myAppContext.Provider>
  );
}

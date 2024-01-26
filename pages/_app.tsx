import MainLayout from "@/components/common/mainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import myAppContext from "@/components/context/context";
import { ReactElement, ReactNode, useContext, useState } from "react";

import {
  AddProductForm,
  CityEntity,
  FactorForm,
  FaqEntity,
  LoginForm,
  StateEntity,
} from "@/models/entities";
import { initialState } from "@/redux/store/product";
import { wrapperForPersistStore, wrapperForStore } from "@/redux/store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { NextPage } from "next";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  // Use the layout defined at the page level, if available
  const [states, setStates] = useState(Array<StateEntity>());
  const [cities, setCities] = useState(Array<CityEntity>());

  const [citiesUlToggle, setCitiesUlToggle] = useState(false);
  const [statesUlToggle, setStatesUlToggle] = useState(false);
  const [faqs, setFaqs] = useState(Array<FaqEntity>());

  const [smallBasketToggle, setSmallBasketToggle] = useState(false);
  const [navbarToggle, setNavbarToggle] = useState(false);
  const [faqItemToggle, setFaqItemToggle] = useState(false);
  const [factorForm, setFactorForm] = useState(new FactorForm());
  const [loginForm, setLoginForm] = useState(new LoginForm());
 // const [addProductForm, setAddProductForm] = useState(new AddProductForm());
  const { store } = wrapperForPersistStore.useWrappedStore(initialState);
  let persistor = persistStore(store);
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <myAppContext.Provider
      value={{
        loginForm,
        setLoginForm,
        faqItemToggle,
        setFaqItemToggle,
        // addProductForm,
        // setAddProductForm,
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
          {getLayout(<Component {...pageProps}  />)}
          <ToastContainer />
        </PersistGate>
      </Provider>
    </myAppContext.Provider>
  );
  // Use the layout defined at the page level, if available
}

App.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

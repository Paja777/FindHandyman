import React, { ReactNode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// As a basic setup, import your same slice reducers,
import { accountSlice, AccountState } from "../features/account/accountSlice";
import { adSlice, AdState } from "../features/roleHandyman/adSlice";

interface RootState {
  account: AccountState;
  ad: AdState;
}

interface RenderWithProvidersOptions {
  preloadedState?: Partial<RootState>;
  store?: ReturnType<typeof configureStore>;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in,
    store = configureStore({
      reducer: { account: accountSlice.reducer, ad: adSlice.reducer },
      preloadedState,
    }),
    ...renderOptions
  }: RenderWithProvidersOptions = {}
) {
  function Wrapper({ children }: { children?: ReactNode }) {
    return (
      <Provider store={store}>
        <Router>{children}</Router>
      </Provider>
    );
  }

  // Return an object with the store and all of RTL's query functions,
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

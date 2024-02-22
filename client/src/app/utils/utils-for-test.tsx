import React, { ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { adSlice } from "../features/roleHandyman/adSlice";
import { RootState } from "../store/configureStore"; // Assuming RootState is defined in configureStore
import { accountSlice } from "../features/account/accountSlice";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

interface RenderWithProvidersOptions {
  preloadedState?: Partial<RootState>;
  store?: EnhancedStore<RootState>;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
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

  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions } as RenderOptions), // Explicitly cast to RenderOptions
  };
}

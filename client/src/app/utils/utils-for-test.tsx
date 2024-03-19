import React, { ReactNode } from "react";
import { render } from "@testing-library/react";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { adSlice } from "../features/ads/adSlice";
import { RootState } from "../store/configureStore"; // Assuming RootState is defined in configureStore
import "@testing-library/jest-dom";
import { BrowserRouter } from 'react-router-dom';


interface RenderWithProvidersOptions {
  preloadedState?: Partial<RootState>;
  store?: EnhancedStore<RootState>;
  route?: string;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { ad: adSlice.reducer },
      preloadedState,
    }),
    route = '/',
    ...renderOptions
  }: RenderWithProvidersOptions = {}
) {
  function Wrapper({ children }: { children?: ReactNode }) {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );
  }

  window.history.pushState({}, 'Test page', route);

  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }), // Explicitly cast to RenderOptions
  };
}


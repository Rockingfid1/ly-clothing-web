"use client";
import { createContext } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export const GlobalLayout = createContext({});

export default function GlobalLayoutProvider({ children }) {
  const ctxValue = {};
  return (
    <Provider store={store}>
      <GlobalLayout.Provider value={ctxValue}>{children}</GlobalLayout.Provider>
    </Provider>
  );
}

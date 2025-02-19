"use client";
import { createContext } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { createTheme, ThemeProvider } from "@mui/material";
import { FONT_FAMILY } from "../constants/fonts/fonts";
import MainRootLayout from "@/components/MainRootLayout/MainRootLayout";

export const GlobalLayout = createContext({
  theme: null,
});

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 900,
      fontFamily: FONT_FAMILY.playfair,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 800,
      fontFamily: FONT_FAMILY.playfair,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      fontFamily: FONT_FAMILY.playfair,
    },
    body1: {
      fontFamily: FONT_FAMILY.playfair,
    },
    body2: {
      fontFamily: FONT_FAMILY.playfair,
      fontSize: "0.7rem",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xsSm: 450,
      smMd: 750,
      mdLg: 990,
      lgXl: 1350,
    },
  },
});

export default function GlobalLayoutProvider({ children }) {
  const ctxValue = {};
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalLayout.Provider value={ctxValue}>
          <MainRootLayout shouldShow />
          {children}
        </GlobalLayout.Provider>
      </Provider>
    </ThemeProvider>
  );
}

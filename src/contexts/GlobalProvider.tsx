import { useState, type ReactNode } from "react";
import { GlobalContext } from "./GlobalContext";


export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches); //initialize with the user preference color scheme

  return (
    <GlobalContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

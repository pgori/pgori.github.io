import React, { useState, type ReactNode } from "react";
import { GlobalContext } from "./GlobalContext";


export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <GlobalContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

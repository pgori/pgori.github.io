import { createContext } from "react";

export type GlobalContextType = {
  isDarkTheme: boolean;
  setIsDarkTheme: (value: boolean) => void;
};

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

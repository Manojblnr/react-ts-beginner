import React, { createContext } from "react";
import { theme } from "./theme";


export const ThemeContext = createContext(theme);

const ThemeContextProvider = ({children}) => {
  return (
    <>
        <ThemeContext.Provider value={theme}    >
            {children}
        </ThemeContext.Provider>
    </>
  )
};

export default ThemeContextProvider;

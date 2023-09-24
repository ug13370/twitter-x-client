import { useState } from "react";
import AppContext from "./AppContext";

export const AppContextProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("light");
  
  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

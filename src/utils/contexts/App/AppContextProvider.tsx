import { useState } from "react";
import AppContext from "./AppContext";

export const AppContextProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("dark");
  const [userDetails, setUserDetails] = useState(null);

  return (
    <AppContext.Provider
      value={{ theme, setTheme, userDetails, setUserDetails }}
    >
      {children}
    </AppContext.Provider>
  );
};

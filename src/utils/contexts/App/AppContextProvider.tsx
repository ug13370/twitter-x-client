import { useState } from "react";
import AppContext from "./AppContext";
import { logoutUser } from "../../../apis/auth";

export const AppContextProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("dark");
  const [loggingOut, setLoggingOut] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [updateTimeline, setUpdateTimeline] = useState(false);

  const logoutUserHandler = () => {
    setLoggingOut(true);
    logoutUser()
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {
        setLoggingOut(false);
      });
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        loggingOut,
        userDetails,
        setUserDetails,
        updateTimeline,
        logoutUserHandler,
        setUpdateTimeline,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

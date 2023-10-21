import { useEffect, useState } from "react";
import AlertContext from "./AlertContext";

export const AlertContextProvider = ({ children }: any) => {
  const [alert, setAlert] = useState<any>({
    id: "",
    type: "",
    message: "",
    variant: "",
  });

  useEffect(() => {
    if (alert.id !== "") {
      setTimeout(resetAlert, 5000);
    }
  }, [alert]);

  const resetAlert = () => {
    console.log("Clearing alert...");
    setAlert((prevVal: any) => {
      return { ...prevVal, id: "" };
    });
  };

  return (
    <AlertContext.Provider value={{ alert, setAlert, resetAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

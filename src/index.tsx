/** React Imports */
import React from "react";
import ReactDOM from "react-dom/client";

/** MUI Imports */
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

/** SCSS Imports */
import "./index.scss";

/** Context Imports */
import { AppContextProvider } from "./utils/contexts/App/AppContextProvider";

/** Component Imports */
import App from "./App";

/** Other Imports */
import reportWebVitals from "./reportWebVitals";
import { AlertContextProvider } from "./utils/contexts/Alert/AlertContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AppContextProvider>
    <AlertContextProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <App />
      </LocalizationProvider>
    </AlertContextProvider>
  </AppContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/** React Imports */

/** MUI Imports */

/** SCSS Imports */

/** Context Imports */

/** Component Imports */

/** Other Imports */

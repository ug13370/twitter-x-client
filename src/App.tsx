/** React Imports */
import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

/** MUI Imports */
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

/** SCSS Imports */
import "./App.scss";

/** Context Imports */
import AppContext from "./utils/contexts/App/AppContext";

/** Component Imports */
import { AuthPage, LandingPage } from "./pages";

/** Other Imports */
import { ThemeSettings } from "./theme";

const App = () => {
  const { theme } = useContext(AppContext);
  const themeObj = createTheme(ThemeSettings(theme));

  return (
    <ThemeProvider theme={themeObj}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              path=""
              element={<Navigate to="/Auth" replace={true} />}
            ></Route>
            <Route path="Auth" element={<AuthPage />} />
            <Route path="Home" element={<LandingPage />} />
            <Route path="Profile" element={<LandingPage />} />
            <Route path="Activity" element={<LandingPage />} />
            <Route path="*" element={<Navigate to="/Auth" replace={true} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

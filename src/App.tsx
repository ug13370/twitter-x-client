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

const PrivateRoute = (props: any) => {
  const { element } = props;
  const { userDetails } = useContext(AppContext);
  const isAuthenticated = !!userDetails;

  return isAuthenticated ? element : <Navigate to="/Auth" replace={true} />;
};

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
            <Route
              path="Home"
              element={<PrivateRoute element={<LandingPage />} />}
            />
            <Route
              path="Profile"
              element={<PrivateRoute element={<LandingPage />} />}
            />
            <Route
              path="Activity"
              element={<PrivateRoute element={<LandingPage />} />}
            />
            <Route path="*" element={<Navigate to="/Auth" replace={true} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

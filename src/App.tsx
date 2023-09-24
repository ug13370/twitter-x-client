import "./App.scss";
import { AuthPage } from "./pages";
import { useContext } from "react";
import { ThemeSettings } from "./theme";
import AppContext from "./utils/contexts/App/AppContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DarkLightToggleComponent } from "./core-components";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

function App() {
  const { theme } = useContext(AppContext);
  const themeObj = createTheme(ThemeSettings(theme));

  return (
    <ThemeProvider theme={themeObj}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div style={{ position: "relative" }}>
          <DarkLightToggleComponent />
          <AuthPage />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;

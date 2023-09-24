import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./App.scss";
import { AuthPage } from "./pages";
import { ThemeSettings } from "./theme";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  const theme = createTheme(ThemeSettings("dark"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div>
          <AuthPage />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;

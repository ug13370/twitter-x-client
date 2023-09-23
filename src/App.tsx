import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./App.scss";
import { AuthPage } from "./pages";
import { ThemeSettings } from "./theme";

function App() {
  const theme = createTheme(ThemeSettings("dark"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <AuthPage />
      </div>
    </ThemeProvider>
  );
}

export default App;

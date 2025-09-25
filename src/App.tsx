import { CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./Home";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;

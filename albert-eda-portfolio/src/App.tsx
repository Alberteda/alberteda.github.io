import "./App.css";
import { LandingPage } from "./components/pages/landing-page/LandingPage";
import { BrowserRouter } from "react-router-dom";
import theme from "./hooks/use-theme/usetheme";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

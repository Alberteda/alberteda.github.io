import "./App.css";
import { LandingPage } from "./components/pages/landing-page/LandingPage";
import ProjectPage from "./components/pages/project-page/ProjectPage"; // Ensure this path is correct and the file exists
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./hooks/use-theme/usetheme";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/experience" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

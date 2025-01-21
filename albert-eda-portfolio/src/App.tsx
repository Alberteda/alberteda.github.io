import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./hooks/use-theme/usetheme";
import { ThemeProvider } from "@mui/material";
import { LandingPage } from "./components/pages/landing-page/LandingPage";
import ProjectPage from "./components/pages/project-page/ProjectPage";
import Projects from "./components/pages/project/Projects";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/experience" element={<ProjectPage />} />
          <Route path="/project" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

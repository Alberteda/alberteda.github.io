import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import theme from "./hooks/use-theme/usetheme";
import { ThemeProvider } from "@mui/material";
import { LandingPage } from "./components/pages/landing-page/LandingPage";
import ProjectPage from "./components/pages/project-page/ProjectPage";
import Projects from "./components/pages/project/Projects";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/experience" element={<ProjectPage />} />
          <Route path="/project/:projectName" element={<Projects />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;

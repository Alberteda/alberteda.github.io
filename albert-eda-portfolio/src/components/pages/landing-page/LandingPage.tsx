import { Box, Typography, Divider, Card, CardContent, Chip, Stack } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { StyledImageWrapper, StyledImage, StyledSocials, StyledButton } from "./styled";
import ProfilePicture from "./profile-pic.jpg";
import Linkedin from "../../../assets/linkedin.svg";
import GitHub from "../../../assets/github.svg";
import Mail from "../../../assets/mail.svg";
import { useState } from "react";
import Projects from "../projects/Projects";
import { useScreenSizes } from "../../../hooks/use-screen-sizes/useScreenSizes";

export const LandingPage = () => {
  const [skillCategories, setSkillCategories] = useState({
    programmingLangues: true,
    frameworks: true,
    tools: true,
  });

  const [showProjects, setShowProjects] = useState(false);
  const [showProgrammingLanguages, setShowProgrammingLanguages] = useState([
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "C",
    "C#",
    "HTML",
    "CSS",
    "SQL",
    "PHP",
    "Go",
  ]);
  const [showFrameworks, setShowFrameworks] = useState([
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
  ]);
  const [showTools, setShowTools] = useState([
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Figma",
    "Jira",
    "Confluence",
    "Slack",
  ]);
  const [showCancelFilterIcon, setshowCancelFilterIcon] = useState(true);

  const [languageContainer, setLanguageContainer] = useState();

  const { isDevice } = useScreenSizes();

  return (
    <Box p="1rem">
      <Box display="flex" flexDirection="column" mb="3rem" gap="2rem">
        <Box textAlign={"left"}>
          <Typography variant={isDevice ? "h4" : "h2"} fontWeight={"700"} color={"white"}>
            Software Engineer
          </Typography>
          <Typography variant="subtitle2" fontWeight={"regular"} color={"white"}>
            Ottawa, ON, Canada
          </Typography>
        </Box>
        <Box display="flex" gap="2rem">
          <StyledImageWrapper>
            <StyledImage src={ProfilePicture} alt="profile-picture" />
          </StyledImageWrapper>
          <Box display="flex" gap="1rem" justifyContent="center" alignItems={"center"}>
            <a href="https://www.linkedin.com/in/alberteda" target="_blank" rel="noopener noreferrer">
              <StyledSocials src={Linkedin} />
            </a>
            <a href="https://github.com/alberteda" target="_blank" rel="noopener noreferrer">
              <StyledSocials src={GitHub} />
            </a>
            <a href="mailto:alberteda32@gmail.com" target="_blank" rel="noopener noreferrer">
              <StyledSocials src={Mail} />
            </a>
          </Box>
        </Box>

        <Box display="flex" gap="1rem" justifyContent="left" mt="1rem">
          <StyledButton
            variant="outlined"
            onClick={() => {
              setShowProjects(true);
            }}
            sx={{
              backgroundColor: "rgb(252, 211, 77)",
              color: "rgb(124, 45, 18)",
              borderColor: "rgb(124, 45, 18)",
              fontWeight: "bold",
              boxShadow: "5px 5px 0 rgb(124, 45, 18)",
              transition: "box-shadow 100ms ease",
              "&:hover": {
                boxShadow: "2px 2px 0 rgb(124, 45, 18)",
              },
              "&:active": {
                boxShadow: "0 0 0 0 rgb(124, 45, 18)",
                transition: "box-shadow 50ms ease",
              },
            }}
          >
            <Typography variant="button" color="rgb(124, 45, 18)" fontWeight={"700"}>
              PROJECTS
            </Typography>
          </StyledButton>
          <StyledButton
            variant="outlined"
            sx={{
              backgroundColor: "rgb(252, 211, 77)",
              color: "rgb(124, 45, 18)",
              borderColor: "rgb(124, 45, 18)",
              fontWeight: "bold",
              boxShadow: "5px 5px 0 rgb(124, 45, 18)",
              transition: "box-shadow 100ms ease",
              "&:hover": {
                boxShadow: "2px 2px 0 rgb(124, 45, 18)",
              },
              "&:active": {
                boxShadow: "0 0 0 0 rgb(124, 45, 18)",
                transition: "box-shadow 50ms ease",
              },
            }}
            onClick={() => {
              setShowProjects(true);
            }}
          >
            <Typography variant="button" color="rgb(124, 45, 18)" fontWeight={"700"}>
              EXPERIENCE
            </Typography>
          </StyledButton>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection="column" gap="1rem">
        <Box textAlign="left">
          <Typography variant="body1" color={"white"} mb="0.5rem">
            {" "}
            Albert Eda is a Software Engineer working at <span style={{ color: "#BB86FC" }}>
              OBSIDI.
            </span>{" "}
          </Typography>
          <Typography variant="body1" color={"white"}>
            With over a year of experience, he has been instrumental in delivering impactful updates and
            innovative features to the Obsidi platform, empowering professionals around the globe.
          </Typography>
        </Box>
        <Box textAlign={"left"}>
          <Typography variant="body1" color={"white"}>
            Beyond coding, Albert channels his creativity through music production, film photography, and
            exploring immersive gaming experiences.
          </Typography>
        </Box>
      </Box>
      <Card
        elevation={2}
        sx={{
          backgroundColor: "#3a512b",
          borderRadius: "12px",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            "&.MuiCardContent-root	": {
              padding: "20px 20px 30px 20px !important",
            },
          }}
        >
          <Typography variant="h6" color={"white"} textAlign={"left"}>
            Skills
          </Typography>

          <Divider />
          <Box display={"flex"} flexDirection="column" gap="1.5rem">
            <Box display={"flex"} flexDirection="column" gap="0.5rem">
              <Typography variant="body1" color={"white"} textAlign={"left"} fontWeight={"700"}>
                Programming Languages
              </Typography>
              <Box
                overflow={"auto"}
                sx={{ scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}
              >
                {showProgrammingLanguages && (
                  <Stack direction="row" gap="0.5rem">
                    {showProgrammingLanguages.map((language, index) => {
                      return <Chip key={index} label={language} variant="outlined" />;
                    })}
                  </Stack>
                )}
              </Box>
            </Box>
            <Box display={"flex"} flexDirection="column" gap="0.5rem">
              <Typography variant="body1" color={"white"} textAlign={"left"} fontWeight={"700"}>
                Frameworks{" "}
              </Typography>
              <Box
                overflow={"auto"}
                sx={{ scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}
              >
                {showFrameworks && (
                  <Stack direction="row" gap="0.5rem">
                    {showFrameworks.map((framework, index) => {
                      return <Chip key={index} label={framework} variant="outlined" />;
                    })}
                  </Stack>
                )}
              </Box>
            </Box>
            <Box display={"flex"} flexDirection="column" gap="0.5rem">
              <Typography variant="body1" color={"white"} textAlign={"left"} fontWeight={"700"}>
                Tools
              </Typography>
              <Box
                overflow={"auto"}
                sx={{ scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}
              >
                {showTools && (
                  <Stack direction="row" gap="0.5rem">
                    {showTools.map((tool, index) => {
                      return <Chip key={index} label={tool} variant="outlined" />;
                    })}
                  </Stack>
                )}
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Box mt="5rem">
        <Typography variant="subtitle1" color="white" fontWeight={"700"}>
          Albert Eda 2025 ©
        </Typography>
      </Box>
      <Projects visible={showProjects} setVisible={setShowProjects} />
    </Box>
  );
};

export default LandingPage;

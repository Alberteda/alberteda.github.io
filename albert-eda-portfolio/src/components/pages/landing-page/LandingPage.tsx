import { Box, Typography, Divider, Card, CardContent, Chip, Stack } from "@mui/material";
import { StyledImageWrapper, StyledImage, StyledSocials, StyledButton } from "./styled";
import ProfilePicture from "./profile-pic.jpg";
import Linkedin from "../../../assets/linkedin.svg";
import GitHub from "../../../assets/github.svg";
import Mail from "../../../assets/mail.svg";
import { useState } from "react";
import Projects from "../projects/Projects";
import { useScreenSizes } from "../../../hooks/use-screen-sizes/useScreenSizes";

export const LandingPage = () => {
  const [showProjects, setShowProjects] = useState(false);
  const skills = [
    { skill: "language", value: "JavaScript" },
    { skill: "language", value: "TypeScript" },
    { skill: "language", value: "Python" },
    { skill: "language", value: "Java" },
    { skill: "language", value: "C++" },
    { skill: "language", value: "C" },
    { skill: "language", value: "C#" },
    { skill: "language", value: "HTML" },
    { skill: "language", value: "CSS" },
    { skill: "language", value: "SQL" },
    { skill: "language", value: "PHP" },
    { skill: "language", value: "Go" },
    { skill: "framework", value: "React" },
    { skill: "framework", value: "React Native" },
    { skill: "framework", value: "Next.js" },
    { skill: "framework", value: "Node.js" },
    { skill: "framework", value: "Express.js" },
    { skill: "framework", value: "Tailwind CSS" },
    { skill: "framework", value: "Bootstrap" },
    { skill: "framework", value: "Material UI" },
    { skill: "tool", value: "Git" },
    { skill: "tool", value: "GitHub" },
    { skill: "tool", value: "VS Code" },
    { skill: "tool", value: "Postman" },
    { skill: "tool", value: "Figma" },
    { skill: "tool", value: "Jira" },
    { skill: "tool", value: "Confluence" },
    { skill: "tool", value: "Slack" },
  ];

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
          <Box>
            <Box display="flex" gap="1rem">
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
            <Box display="flex" flexDirection="column" gap="1rem" mt="1rem">
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
        </Box>
      </Box>
      <Box display={"flex"} flexDirection="column" gap="1rem">
        <Box textAlign="left">
          <Typography variant="body1" color={"white"} mb="0.5rem">
            Albert Eda is a Software Engineer at <span style={{ color: "#BB86FC" }}>OBSIDI</span>, where he
            has played a pivotal role in enhancing the platform's capabilities over the past three years. His
            contributions have driven impactful full-stack updates and introduced innovative features to
            OBSIDI — a global leader in professional networking and empowerment.
            <br />
            <br /> Beyond engineering, Albert expresses his creativity through music production, film
            photography, and immersive gaming experiences.
          </Typography>
        </Box>
      </Box>

      <Box m="2rem 0 1rem 0">
        <Typography variant="h6" color={"white"} textAlign={"left"}>
          Skills
        </Typography>
      </Box>

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          "&.MuiCardContent-root	": {
            padding: "0 !important",
          },
        }}
      >
        <Box display={"flex"} flexDirection="column" gap="1.5rem">
          <Box display={"flex"} flexDirection="column" gap="1rem">
            <Typography variant="body1" color={"white"} textAlign={"left"} fontWeight={"700"}>
              Programming Languages
            </Typography>
            <Box
              overflow={"auto"}
              sx={{ scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}
            >
              {skills && (
                <Stack direction="row" gap="0.5rem">
                  {skills.map(({ skill, value }, index) => {
                    return (
                      skill === "language" && (
                        <Chip
                          key={index}
                          label={value}
                          variant="outlined"
                          sx={{ backgroundColor: "#4B8063", color: "white", fontWeight: "700" }}
                        />
                      )
                    );
                  })}
                </Stack>
              )}
            </Box>
          </Box>
          <Box display={"flex"} flexDirection="column" gap="1rem">
            <Typography variant="body1" color={"white"} textAlign={"left"} fontWeight={"700"}>
              Frameworks{" "}
            </Typography>
            <Box
              overflow={"auto"}
              sx={{ scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}
            >
              {skills && (
                <Stack direction="row" gap="0.5rem">
                  {skills.map(({ skill, value }, index) => {
                    return (
                      skill === "framework" && (
                        <Chip
                          key={index}
                          label={value}
                          variant="outlined"
                          sx={{ backgroundColor: "#4B8063", color: "white", fontWeight: "700" }}
                        />
                      )
                    );
                  })}
                </Stack>
              )}
            </Box>
          </Box>
          <Box display={"flex"} flexDirection="column" gap="1rem">
            <Typography variant="body1" color={"white"} textAlign={"left"} fontWeight={"700"}>
              Tools
            </Typography>
            <Box
              overflow={"auto"}
              sx={{ scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}
            >
              {skills && (
                <Stack direction="row" gap="0.5rem">
                  {skills.map(({ skill, value }, index) => {
                    return (
                      skill === "tool" && (
                        <Chip
                          key={index}
                          label={value}
                          variant="outlined"
                          sx={{ backgroundColor: "#4B8063", color: "white", fontWeight: "700" }}
                        />
                      )
                    );
                  })}
                </Stack>
              )}
            </Box>
          </Box>
        </Box>
      </CardContent>

      <Box mt="1rem">
        <Typography variant="caption" color="white" fontWeight={"700"}>
          Albert Eda 2025 ©
        </Typography>
      </Box>
      <Projects visible={showProjects} setVisible={setShowProjects} />
    </Box>
  );
};

export default LandingPage;

import { Box, Typography } from "@mui/material";
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

  const { isDevice } = useScreenSizes();

  return (
    <Box
      display="flex"
      flexDirection="column"
      maxWidth={isDevice ? "100%" : "75vw"}
      p="1rem"
      alignItems={"center"}
    >
      <Box display="flex" flexDirection="column" mb="3rem" gap="2rem">
        <Box textAlign={"left"}>
          <Typography variant={isDevice ? "h4" : "h2"} fontWeight={"700"} color={"white"} mb={"0rem"}>
            Software Engineer
          </Typography>
          <Typography variant="body1" color={"white"}>
            Ottawa, ON, Canada
          </Typography>
        </Box>
        <Box width="100%" display="flex" gap="2rem">
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
        <Box display="flex" gap="1rem" justifyContent="left" width="100%" mt="1rem">
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
          <Typography variant="subtitle1" color={"white"}>
            Beyond coding, Albert channels his creativity through music production, film photography, and
            exploring immersive gaming experiences.
          </Typography>
        </Box>
      </Box>
      <Box mt="5rem">
        <Typography variant="button" color="white" fontWeight={"700"}>
          Albert Eda 2025 ©
        </Typography>
      </Box>
      <Projects visible={showProjects} setVisible={setShowProjects} />
    </Box>
  );
};

export default LandingPage;

import { Box, Typography, Button } from "@mui/material";
import { StyledImageWrapper, StyledImage, StyledDivider, StyledSocials, StyledButton } from "./styled";
import ConstructionIcon from "@mui/icons-material/Construction";
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
    <Box display="flex" flexDirection="column" maxWidth={isDevice ? "100%" : "75vw"} p="1rem">
      <Box display="flex" flexDirection="column" mb="5rem" gap="2rem">
        <Box textAlign={"left"}>
          <Typography variant={isDevice ? "h4" : "h2"} fontWeight={"700"} color={"white"} mb={"0rem"}>
            Software Engineer
          </Typography>
          <Typography variant="body1" color={"white"}>
            Ottawa, ON, Canada
          </Typography>
        </Box>
        <Box>
          <Box width="100%">
            <Box display="flex" sx={{ float: "left" }}>
              <StyledImageWrapper>
                <StyledImage src={ProfilePicture} alt="profile-picture" />
              </StyledImageWrapper>
            </Box>
            <Box>
              <Box display="flex" flexDirection="column" gap="1rem" justifyContent="center">
                <Box display="flex" gap="1rem" justifyContent="center">
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
                <Box display="flex" flexDirection="column" gap="1rem" justifyContent="center" width="80%">
                  <StyledButton
                    endIcon={
                      <ConstructionIcon
                        sx={{
                          color: "rgb(124, 45, 18)",
                          "&:hover": {
                            color: "#EE5100",
                          },
                        }}
                      />
                    }
                    variant="outlined"
                    onClick={() => {
                      setShowProjects(true);
                    }}
                  >
                    <Typography variant="body2" color="rgb(124, 45, 18)" fontWeight={"700"}>
                      PROJECTS
                    </Typography>
                  </StyledButton>
                  <StyledButton
                    endIcon={
                      <ConstructionIcon
                        sx={{
                          color: "rgb(124, 45, 18)",
                          "&:hover": {
                            color: "#EE5100",
                          },
                        }}
                      />
                    }
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
                    <Typography variant="body2" color="rgb(124, 45, 18)" fontWeight={"700"}>
                      PROJECTS
                    </Typography>
                  </StyledButton>
                </Box>
              </Box>
              <Typography variant="body1" color={"white"} lineHeight={1.6}>
                <br /> <br /> <br /> <br />
                Albert Eda is a Software Engineer who previously worked at OBSIDI, EPIC, and CIMSLAB. With
                over 5 years of experience creating digital products, his work is a blend of several
                disciplines — full-stack development, mobile development, application development, data
                analysis, and artificial intelligence.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" gap="3rem">
        <Box display="flex" flexDirection="column" gap="2rem" justifyContent="center">
          <Box display={"grid"} gridTemplateRows={"1fr"} gap="1rem">
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="h4" fontWeight={"700"} color={"white"}>
                Hey, I'm Albert
              </Typography>
              <StyledDivider style={{ marginTop: "0.5rem" }} />
            </Box>
            <Box textAlign="center">
              <Typography variant="body1" color={"white"}>
                I'm a Software Engineer at
                <Button
                  href="https://app.obsidi.com/"
                  target="_blank"
                  rel="noopener noreferrer" // security: protects the processing of opening a new tab, disabling the windows opener and referer properties
                  sx={{
                    borderRadius: "10px",
                    border: "2px solid #BB86FC",
                    marginLeft: "0.5rem",
                  }}
                >
                  <Typography variant="body2" color="#BB86FC" fontWeight={"700"}>
                    OBSIDI
                  </Typography>
                </Button>{" "}
                .
                <br />
                Over the past year and a half, I've made substantial contributions to the development of the{" "}
                <span style={{ color: "#BB86FC", fontWeight: "700" }}>Obsidi</span> platform.
              </Typography>
            </Box>
            <Box textAlign={"center"}>
              <Typography variant="subtitle1" color={"white"}>
                In my free time I run an entertainment studio, based in Ottawa. I like to make music, take
                photos on film, and play video games.
              </Typography>
            </Box>
          </Box>

          <Box mt="-1.5rem">
            <Typography variant="button" color="white" fontWeight={"700"}>
              Albert Eda 2023 ©
            </Typography>
          </Box>
        </Box>
      </Box>
      <Projects visible={showProjects} setVisible={setShowProjects} />
    </Box>
  );
};

export default LandingPage;

import { Box, Typography, Container } from "@mui/material";
import Skills from "../../skills/skills";
import { useScreenSizes } from "../../../hooks/use-screen-sizes/useScreenSizes";
import { useNavigate } from "react-router-dom";
import { useSkills } from "../../../hooks/use-skills/useSkills";
import { StyledImageWrapper, StyledImage, StyledSocials, StyledButton } from "./styled";
import ProfilePicture from "./profile-pic.jpg";
import Linkedin from "../../../assets/linkedin.svg";
import GitHub from "../../../assets/github.svg";
import Mail from "../../../assets/mail.svg";

export const LandingPage = () => {
  const navigate = useNavigate();
  const { isDevice } = useScreenSizes();
  const { skills } = useSkills();

  return (
    <Container
      sx={{
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
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
            <Box display="flex" flexDirection="column" mt="1rem">
              <StyledButton
                variant="outlined"
                onClick={() => {
                  navigate("/experience");
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
      <Skills skills={skills} titleVariant="body1" fontWeight="700" />
      <Box mt="1rem">
        <Typography variant="caption" color="white" fontWeight={"700"}>
          Albert Eda 2025 ©
        </Typography>
      </Box>
    </Container>
  );
};

export default LandingPage;

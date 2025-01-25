import { Box, Typography, Container } from "@mui/material";
import Skills from "../../skills/Skills";
import { useScreenSizes } from "../../../hooks/use-screen-sizes/useScreenSizes";
import { useNavigate } from "react-router-dom";
import { useSkills } from "../../../hooks/use-skills/useSkills";
import { StyledImageWrapper, StyledImage, StyledSocials, StyledButton } from "./styled";
import ProfilePicture from "../../../assets/profile-pic.jpg";
import Linkedin from "../../../assets/linkedin.svg";
import GitHub from "../../../assets/github.svg";
import Mail from "../../../assets/mail.svg";
import NextWeekIcon from "@mui/icons-material/NextWeek";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

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
                variant="text"
                onClick={() => {
                  navigate("/experience");
                }}
                endIcon={
                  <NextWeekIcon
                    sx={{
                      width: "15px",
                    }}
                  />
                }
                sx={{
                  color: "white",
                  "& .MuiButton-endIcon": {
                    color: "white",
                    marginLeft: "-1px",
                  },
                }}
              >
                <Typography variant="button" color="white" fontWeight={"700"}>
                  PROJECTS
                </Typography>
              </StyledButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection="column" gap="1rem">
        <Box textAlign="left">
          <Typography
            variant="body1"
            color={"white"}
            mb="0.5rem"
            lineHeight="1.5rem"
            fontWeight={"400"}
            letterSpacing={"0.5px"}
          >
            I'm a senior software engineer at{" "}
            <a
              href="https://obsidi.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <span style={{ color: "#BB86FC", fontWeight: "600" }}> Obsidi</span>
              <OpenInNewIcon sx={{ fontSize: "20px", color: "#BB86FC" }} />
            </a>
            , specializing in full-stack development with a focus on backend systems. I helped build the
            Obsidi Job Board platform, connecting professionals with impactful career opportunities, and
            previously worked on <br />
            <a
              href="https://www.epic.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", whiteSpace: "nowrap" }}
            >
              <span style={{ color: "#f90808", fontWeight: "600" }}> Epic</span>
              <OpenInNewIcon sx={{ fontSize: "18px", color: "#f90808" }} />
            </a>{" "}
            patient care systems at the Ottawa Hospital, enhancing healthcare workflows. <br />
            <br />I also take on freelance projects to tackle diverse challenges in software development.
            Currently, I'm exploring new technologies like Three.js, Rust, and AI/ML engineering. <br />{" "}
            <br /> Beyond coding, I channel my creativity through cooking, music production, film photography,
            and video games, which inspire me both personally and professionally.
          </Typography>
        </Box>
      </Box>

      <Box m="2rem 0 1rem 0">
        <Typography variant="h6" color={"white"} textAlign={"left"}>
          Skills
        </Typography>
      </Box>
      <Skills skills={skills} titleVariant="body1" fontWeight="700" />
      <Box m="2rem 0 0.5rem 0">
        <Typography variant="body2" color="white" fontWeight={"600"}>
          Albert Eda 2025 ©
        </Typography>
      </Box>
    </Container>
  );
};

export default LandingPage;

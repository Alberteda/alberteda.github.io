import { Box, Typography, Container } from "@mui/material";
import projects from "../../../hooks/use-projects/useProjects";
import { KeyboardBackspace } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { useSkills } from "../../../hooks/use-skills/useSkills";
import Skills from "../../skills/Skills";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Projects = () => {
  const navigate = useNavigate();
  const { projectName } = useParams();
  const { getProjectSkillsByValue } = useSkills();

  const project = projects.find((project) => project.projectName === projectName);

  const projectTechnology = project?.technology.split(",");

  const filteredSkills = getProjectSkillsByValue(projectTechnology!);

  return (
    <Container
      sx={{
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        alignItems: "middle",
      }}
    >
      <Box onClick={() => navigate("/experience")}>
        <KeyboardBackspace sx={{ color: "white" }} />
      </Box>

      <Box display={"flex"} justifyContent={"left"} gap="0.6rem" alignItems={"center"}>
        <Box>
          <Typography variant="subtitle1" fontWeight="bolder">
            {project?.projectName}
          </Typography>
        </Box>
        <Box>
          <Typography variant="overline">{project?.year}</Typography>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" gap="0.3rem" alignItems={"center"}>
        <Box width={"100%"}>
          <img
            src={project?.imageScreenshot}
            alt=""
            style={{
              width: "100%",
              borderRadius: "8px",
              objectFit: "cover",
              boxShadow: "0px 3px 5px 0px rgba(0,0,0,0.75)",
            }}
          />
        </Box>
        <Box>
          <Typography variant="overline">{project?.screenshotTitle}</Typography>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" gap="1rem">
        <Box>
          <Typography variant="body1" fontWeight="bolder">
            Role
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1">{project?.role}</Typography>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" gap="1rem">
        <Box>
          <Typography variant="body1" fontWeight="bolder">
            Description
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1">{project?.projectDescription}</Typography>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" gap="1rem">
        <Typography variant="body1" fontWeight="bolder">
          Technologies
        </Typography>
        <Skills skills={filteredSkills} titleVariant="body2" fontWeight="400" />
      </Box>

      <Box display="flex" flexDirection="column">
        <Typography variant="body1" fontWeight="bolder">
          Link
        </Typography>
        <Box display="flex" gap="0.1rem">
          <Typography variant="body2" fontWeight="500">
            <a
              href={project?.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              {project?.projectName}
            </a>
          </Typography>
          <OpenInNewIcon sx={{ fontSize: "20px", color: "white" }} />
        </Box>
      </Box>
    </Container>
  );
};

export default Projects;

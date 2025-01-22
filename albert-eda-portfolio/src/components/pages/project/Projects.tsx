import { Box, Typography, Container } from "@mui/material";
import projects from "../../../hooks/use-projects/useProjects";
import { KeyboardBackspace } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { useSkills } from "../../../hooks/use-skills/useSkills";
import Skills from "../../skills/skills";

const Projects = () => {
  const navigate = useNavigate();
  const { projectName } = useParams();
  const { getProjectSkillsByValue } = useSkills();

  const project = projects.find((project) => project.projectName === projectName);

  const projectTechnology = [project.technology];

  const filteredSkills = getProjectSkillsByValue(project?.technology);

  return (
    <Container
      sx={{
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        paddingTop: "2rem",
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

      <Box>
        <Typography>Project Sanpshot</Typography>
      </Box>

      <Box display="flex" flexDirection="column" gap="1rem">
        <Box>
          <Typography variant="body1" fontWeight="bolder">
            Role
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2">{project?.Role}</Typography>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column">
        <Typography variant="body1" fontWeight="bolder">
          Project Team
        </Typography>
        <Typography variant="body1">{project?.Team}</Typography>
      </Box>

      <Box display="flex" flexDirection="column">
        <Typography variant="body1" fontWeight="bolder">
          Project Technologies
        </Typography>
        <Skills skills={filteredSkills} />
      </Box>

      <Box display="flex" flexDirection="column">
        <Typography variant="body1" fontWeight="bolder">
          Project Links
        </Typography>
        <Typography>{project?.projectLink}</Typography>
      </Box>
    </Container>
  );
};

export default Projects;

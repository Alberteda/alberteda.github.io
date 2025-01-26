import { useNavigate } from "react-router-dom";
import { Box, Container, Typography, Divider } from "@mui/material";
import { KeyboardBackspace } from "@mui/icons-material";
import projects from "../../../hooks/use-projects/useProjects";

const ProjectPage = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ display: "grid", gap: "1rem", paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Box display="flex" alignItems={"center"}>
        <Box onClick={() => navigate("/")}>
          <KeyboardBackspace sx={{ color: "white" }} />
        </Box>
        <Box width="100%" display="flex" justifyContent="center">
          <Typography variant="body1" fontWeight="bold" color={"white"}>
            Projects
          </Typography>
        </Box>
      </Box>
      <Box textAlign={"left"}>
        <Typography variant="body1" color={"white"}>
          A showcase of some projects I've contributed to over the years — a blend of personal passion and
          professional experience.
        </Typography>
      </Box>
      <Box display="flex" gap={"1.5rem"} flexDirection={"column"} alignItems={"center"} mt="2rem">
        {projects.map((project) => {
          return (
            <Box
              key={project.id}
              display="flex"
              width={"100%"}
              alignItems={"center"}
              gap={"1rem"}
              onClick={() => navigate(`/project/${project.projectName}`)}
            >
              <Box>
                <Typography
                  fontWeight={"bold"}
                  color={"white"}
                  textAlign={"left"}
                  variant="body2"
                  whiteSpace={"nowrap"}
                >
                  {project.projectName}
                </Typography>
              </Box>
              <Box width={"100%"}>
                <Divider
                  sx={{
                    width: "100%",
                    backgroundColor: "#7d6e0e",
                    height: "2px",
                    borderRadius: "50%",
                  }}
                />
              </Box>
              <Box>
                <Typography color={"white"} textAlign={"left"} variant="body2" noWrap>
                  {project.year}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default ProjectPage;

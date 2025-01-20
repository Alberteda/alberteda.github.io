import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Typography, Divider } from "@mui/material";
import { KeyboardBackspace } from "@mui/icons-material";

const ProjectPage = () => {
  const projects = [
    {
      id: 1,
      projectName: "Obsidi",
      location: "Toronto, Ontario, Canada",
      projectDescription:
        "Obsidi® is a job board built for Black tech professionals to connect with employers of choice",
      projectLink: "https://app.obsidi.com/",
      year: "2022 - Present",
    },
    {
      id: 2,
      projectName: "Ichota",
      location: "Herrogate, North Yorkshire, UK",
      projectDescription:
        "ichota is a dating app designed for busy professionals, helping them connect and build meaningful relationships despite their demanding schedules and limited time to socialize.",
      projectLink: "https://ichota.co.uk/",
      year: "2024 - Present",
    },
    {
      id: 3,
      projectName: "San Bruno Group",
      location: "Ottawa, Ontario, Canada",
      projectDescription:
        "San Bruno Group specializes in premium window and glass solutions, offering expert sales, installation, and service for residential and commercial projects.",
      projectLink: "https://sanbrunogroup.ca/",
      year: "2024",
    },
    {
      id: 4,
      projectName: "Dreamland Cafe",
      location: "Ottawa, Ontario, Canada",
      projectDescription:
        "Located in the heart of Ottawa's Little Italy, DreamLand Cafe offers incredible fresh pasta dishes, made with love and finesse.",
      projectLink: "https://dreamlandcafe.ca/",
      year: "2024",
    },
  ];

  const navigate = useNavigate();

  return (
    <Container sx={{ display: "grid", gap: "1rem", paddingTop: "1rem", paddingBottom: "2rem" }}>
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
          A showcase of projects I've contributed to over the years — a blend of personal passion and
          professional experience.
        </Typography>
      </Box>
      <Box display="flex" gap={"1.5rem"} flexDirection={"column"} alignItems={"center"} mt="2rem">
        {projects.map((project) => {
          return (
            <Box key={project.id} display="flex" width={"100%"} alignItems={"center"} gap={"1rem"}>
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
                    backgroundColor: "#E2D372",
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

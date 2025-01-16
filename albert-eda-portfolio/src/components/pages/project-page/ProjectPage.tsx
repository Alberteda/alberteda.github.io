import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { KeyboardBackspace } from "@mui/icons-material";

const ProjectPage = () => {
  return (
    <Container sx={{ display: "grid", gap: "1rem", paddingTop: "1rem", paddingBottom: "2rem" }}>
      <Box display="flex" alignItems={"center"}>
        <Box>
          <KeyboardBackspace sx={{ color: "white" }} />
        </Box>
        <Box width="100%" display="flex" justifyContent="center">
          <Typography variant="subtitle2" fontWeight="bold" color={"white"}>
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
    </Container>
  );
};

export default ProjectPage;

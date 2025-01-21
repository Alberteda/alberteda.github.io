import {
  Box,
  Typography,
  Container,
  Button,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  CardActions,
  Divider,
} from "@mui/material";
import { FunctionComponent } from "react";
import OBSIDI from "../../../assets/obsidi_logo_white.png";
import GitHub from "../../../assets/github.svg";
import styled from "styled-components";

const Projects = () => {
  return (
    <Container
      sx={{
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Box display={"flex"} justifyContent={"space-around"}>
        <Box>
          <Typography>Title</Typography>
        </Box>
        <Box>
          <Typography>Project Date</Typography>
        </Box>
      </Box>

      <Box>
        <Typography>Project Sanpshot</Typography>
      </Box>

      <Box>
        <Typography>Project Role</Typography>
      </Box>

      <Box>
        <Typography>Project Team</Typography>
      </Box>

      <Box>
        <Typography>Project Context</Typography>
      </Box>

      <Box>
        <Typography>Project Features & Mechanics</Typography>
      </Box>

      <Box>
        <Typography>Project Technologies</Typography>
      </Box>

      <Box>
        <Typography>Project Links</Typography>
      </Box>
    </Container>
  );
};

export default Projects;

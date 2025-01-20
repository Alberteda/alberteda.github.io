import {
  Dialog,
  Box,
  Typography,
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

export const StyledSocials = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;

export const StyledDivider = styled(Divider)`
  width: 30%;
  height: 0.1rem;
  background-color: #8aaae5;
  border-radius: 20px;
`;

export const StyledDialog = styled(Dialog)`
  && {
    // increase specificity to override the default styles
    .MuiDialog-paper {
      border-radius: 20px;
    }
  }
`;

interface ProjectsProps {
  visible: boolean;
  setVisible: (value: boolean | ((prevValue: boolean) => boolean)) => void; // accepts a setState function
}

export const Project: FunctionComponent<ProjectsProps> = ({ visible, setVisible }) => {
  return (
    <StyledDialog
      open={visible}
      keepMounted
      onClose={() => {
        setVisible(false);
      }}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      fullWidth
    >
      <Box bgcolor="#232526" padding="2rem">
        <Box mb="2rem">
          <Typography variant="h5" color="white" fontWeight="bolder">
            PROJECTS
          </Typography>
          <StyledDivider />
        </Box>
        <Box display="flex" padding="1rem 0">
          <Box>
            <Card
              sx={{
                backgroundColor: "#232526",
                maxWidth: "30rem",
                paddingBottom: "1rem",
                boxShadow: "2px 2px 5px #BB86FC",
              }}
            >
              <CardHeader
                avatar={<Avatar src={OBSIDI} sx={{ width: "8rem", height: "auto", borderRadius: "0" }} />}
              />
              <CardContent>
                <Typography color="white" variant="body1" fontWeight="bold">
                  An employment-focused, multi-sided marketplace that enables access to networking and future
                  job opportunities Black professionals globally.
                </Typography>
                <Typography color="white" variant="body2" mt="1rem" letterSpacing="2px">
                  React, Typescript, Node JS, PostgreSQL, Postman, Dockers
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", gap: "1rem", paddingLeft: "1rem" }}>
                <a href="https://github.com/albert-eda-bptn" target="_blank" rel="noopener noreferrer">
                  <StyledSocials src={GitHub} />
                </a>
                <Button
                  size="small"
                  href="https://app.obsidi.com/"
                  target="_blank"
                  rel="noopener noreferrer" // security: protects the processing of opening a new tab, disabling the windows opener and referer properties
                  style={{ fontWeight: "bold", color: "white" }}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Box>
      </Box>
    </StyledDialog>
  );
};

export default Project;

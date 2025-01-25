import { Box, Button, Divider } from "@mui/material";
import styled from "styled-components";

export const StyledBox = styled(Box)`
  background-color: #8aaae5;
  text-align: center;
  border-radius: 20px;
  width: 100%;
  height: 100%;
`;

export const StyledImageWrapper = styled(Box)`
  background-color: grey;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;

export const StyledSocials = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;

export const StyledDivider = styled(Divider)`
  width: 80%;
  height: 0.1rem;
  background-color: #8aaae5;
  border-radius: 20px;
`;

export const StyledFeed = styled(Box)`
  background-color: #8aaae5;
  text-align: center;
  border-radius: 20px;
  width: 60.875rem;
`;

export const StyledButton = styled(Button)`
  padding: 0.5rem 1rem;

  letter-spacing: 1.1px;
  text-decoration: none;
  color: white;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  @media (min-width: 768px) {
    .button-54 {
      padding: 0.25em 0.75em;
    }
  }
`;

import { Box } from "@mui/material"
import styled from "styled-components"

export const StyledBox = styled(Box)`
    background-color: #8AAAE5;
    text-align: center;
    border-radius: 20px;
    width: 100%;
    height: 100%;
`

export const StyledImageWrapper = styled(Box)`
    background-color: grey;
    width: 16.25rem;
    height: 16.25rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
`

export const StyledNavBar = styled(Box)`
    width: 32.875rem;
    height: 5rem;
    background-color: #8AAAE5;
    border-radius: 20px;
`

export const StyledFeed = styled(Box)`
    background-color: #8AAAE5;
    text-align: center;
    border-radius: 20px;
    width: 60.875rem;
`
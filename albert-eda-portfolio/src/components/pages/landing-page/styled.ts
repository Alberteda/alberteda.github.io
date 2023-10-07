import { Box, Button, Divider } from "@mui/material"
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

export const StyledSocials = styled.img`
    width: 3rem;
    height: 3rem;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
`

export const StyledDivider1 = styled(Divider)`
    width: 15rem;
    height: 0.4rem;
    background-color: #8AAAE5;
    border-radius: 20px;
    justify-self: right;
`

export const StyledDivider2 = styled(Divider)`
    width: 21rem;
    height: 0.4rem;
    background-color: #8AAAE5;
    border-radius: 20px;
    justify-self: right;
`

export const StyledDivider3 = styled(Divider)`
    width: 32rem;
    height: 0.4rem;
    background-color: #8AAAE5;
    border-radius: 20px;
    justify-self: right;
`

export const StyledFeed = styled(Box)`
    background-color: #8AAAE5;
    text-align: center;
    border-radius: 20px;
    width: 60.875rem;
`

export const StyledResumeButton = styled(Button)`
    width: 16.25rem;
    height: 3.25rem;
`
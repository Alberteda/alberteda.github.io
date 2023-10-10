import { Dialog, Box, Typography, Button, Card, CardHeader, Avatar, CardMedia, CardContent, CardActions, Divider } from "@mui/material"
import { FunctionComponent } from "react"
import OBSIDI from "../../../assets/obsidi_logo_white.png"
import ObsidiBanner from "../../../assets/obsidi-banner.png"
import GitHub from '../../../assets/github.svg'
import styled from "styled-components"

export const StyledSocials = styled.img`
    width: 2rem;
    height: 2rem;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
`

export const StyledDivider = styled(Divider)`
    width: 80%;
    height: 0.1rem;
    background-color: #8AAAE5;
    border-radius: 20px;
`

export const StyledDialog = styled(Dialog)`
    && { // increase specificity to override the default styles

        .MuiDialog-paper {
            border-radius: 10px;
        }
    }
`

interface ProjectsProps {
    visible: boolean
    setVisible: (value: boolean | ((prevValue: boolean) => boolean)) => void // accepts a setState function
}

export const Projects: FunctionComponent<ProjectsProps> = ({ visible, setVisible}) => {
    return (
        <StyledDialog 
            open={visible}
            keepMounted
            onClose={() => {setVisible(false)}}
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
                <Box border="2px solid white" display="flex">
                    <Box>
                        <Card sx={{ backgroundColor: "#232526", maxWidth: "30rem" }}>
                            <CardHeader
                                avatar={
                                    <Avatar src={OBSIDI} sx={{ width: "8rem", height: "auto", borderRadius: "0" }} />
                                }
                            />
                            <CardMedia
                                component="img"
                                sx={{
                                    height: "15rem",
                                    width: "auto",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    margin: "auto"
                                }}
                                image={ObsidiBanner}
                                alt="Welcome to OBSIDI banner"
                            />
                            <CardContent>
                                <Typography color="white" variant="body1">
                                    An employment-focused, multi-sided marketplace that enables access to networking and future job opportunities Black professionals globally.
                                </Typography>
                                <Typography color="red" variant="body2" mt="1rem">
                                    React, Material UI, Styled Components, Typescript, Node JS, PostgreSQL, Postman, Dockers
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: "flex", gap: "1rem" }}>
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
    )
}

export default Projects
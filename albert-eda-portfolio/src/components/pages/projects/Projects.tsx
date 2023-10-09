import { Modal, Box, Typography, Button, Card, CardHeader, Avatar, CardMedia, CardContent, CardActions } from "@mui/material"
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

interface ProjectsProps {
    visible: boolean
    setVisible: (value: boolean | ((prevValue: boolean) => boolean)) => void // accepts a setState function
}

export const Projects: FunctionComponent<ProjectsProps> = ({ visible, setVisible}) => {
    return (
        <Modal 
            open={visible} 
            onClose={() => {setVisible(false)}}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Box 
                bgcolor="#232526" padding="5rem"
            >
                <Box border="2px solid #F4D03F">
                    <Card sx={{ backgroundColor: "#232526", maxWidth: "25rem" }}>
                        <CardHeader
                            avatar={
                                <Avatar src={OBSIDI} sx={{ width: "10rem", height: "2rem", borderRadius: "0"}} />
                            }
                        />
                        <CardMedia
                            component="img"
                            sx={{
                                height: "20rem",
                                width: "auto",
                                objectFit: "cover",
                                objectPosition: "center",
                                margin: "auto"
                            }}
                            image={ObsidiBanner}
                            alt="Welcome to OBSIDI banner"
                        />
                        <CardContent>
                            <Typography color="white">
                                Obsidi By BPTN is an employment-focused, multi-sided marketplace that enables Black professionals to network globally, learn, go to events, connect with executives from leading tech companies and access future job opportunities.
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
        </Modal>
    )
}

export default Projects
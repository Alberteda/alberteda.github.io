import { Box, Typography, Button, Modal } from "@mui/material"
import { StyledImageWrapper, StyledImage, StyledDivider, StyledResumeButton, StyledSocials } from "./styled"
import ConstructionIcon from '@mui/icons-material/Construction'
import ProfilePicture from './profile-pic.jpg'
import Linkedin from '../../../assets/linkedin.svg'
import GitHub from '../../../assets/github.svg'
import Mail from '../../../assets/mail.svg'
import { useState } from "react"

export const LandingPage = () => {

  const [open, setOpen] = useState(false)

  return (
    <Box padding="1rem 20rem">
      <Box
        display="flex"
        flexDirection="column"
        mb="5rem"
        gap="3rem"
      >
        <Box textAlign={"left"}>
          <Typography variant="h5" fontWeight={"bolder"} color={"white"}>
            Albert Eda
          </Typography>
        </Box>
        <Box textAlign={"left"}>
          <Typography variant="h2" fontWeight={"700"} color={"white"} mb={"0.5rem"}>
            Software Engineer
          </Typography>
          <Typography variant="body1" color={"white"}>
            Ottawa, ON, Canada
          </Typography>
        </Box>
      </Box>
      <Box display="flex" gap="20rem">
        <Box display="flex" flexDirection="column" gap="2rem">
            <StyledImageWrapper>
              <StyledImage src={ProfilePicture} alt="profile-picture"/>
            </StyledImageWrapper>
              <StyledResumeButton 
                endIcon={
                  <ConstructionIcon
                    sx={{
                      color: '#F4D03F',
                      width: "1.5rem",
                      height: "1.5rem",
                      '&:hover': {
                        color: "#EE5100",
                      }
                    }}
                  />
                }
                variant="outlined" 
                sx={{ 
                      borderRadius: "20px", 
                      border: "4px solid #F4D03F", 
                      color: 'linear-gradient(132deg, #F4D03F 0%, #16A085 100%)',
                      '&:hover': {
                        border: "4px solid #EE5100"
                      }
                    }}
                onClick={() => setOpen(true)}
              >
                <Typography variant="body1" color="white" fontWeight={"700"}>
                  PROJECTS
                </Typography>
              </StyledResumeButton>
              <Box display="flex" gap="1rem" alignSelf="center">
              <a href="https://www.linkedin.com/in/alberteda" target="_blank" rel="noopener noreferrer">
                <StyledSocials src={Linkedin} />
              </a>
              <a href="https://github.com/alberteda" target="_blank" rel="noopener noreferrer">
                <StyledSocials src={GitHub} />
              </a>
              <a href="mailto:alberteda32@gmail.com" target="_blank" rel="noopener noreferrer">
                <StyledSocials src={Mail} />
              </a>
              </Box>
              <Box>
                <Typography variant="button" color="white" fontWeight={"700"}>
                  Albert Eda 2023 ©
                </Typography>
              </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap="2rem" justifyContent="center">
          <Box display={"grid"} gridTemplateRows={"1fr"} gap="2rem">
            <Box textAlign={"center"}>
              <Typography variant="h2" fontWeight={"700"} color={"white"}>
                Hey, I'm Albert
              </Typography>
              <StyledDivider style={{ marginTop: "0.5rem" }} />
            </Box>
            <Box textAlign={"left"}>
              <Typography variant="h6" color={"white"}>
                I'm a Software Engineer at 
                  <Button
                    href="https://app.obsidi.com/"
                    target="_blank"
                    rel="noopener noreferrer" // security: protects the processing of opening a new tab, disabling the windows opener and referer properties
                    sx={{ 
                          borderRadius: "10px", 
                          border: "2px solid #BB86FC",
                          marginLeft: "0.5rem"
                        }}>
                          <Typography variant="body1" color="#BB86FC" fontWeight={"700"}>
                            OBSIDI
                          </Typography>
                  </Button> . 
                Over the past year and a half, I've made substantial contributions to the development of the <span style={{ color: "#BB86FC", fontWeight: "700" }}>OBSIDI</span> platform.
              </Typography>
            </Box>
            <Box textAlign={"left"}>
              <Typography variant="h6" color={"white"}>
                In my free time I run an entertainment studio, based in Ottawa. I like to make music, take photos on film, and play video games.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Box width="400px" bgcolor="red" justifyContent={"center"}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Box>
    
  )
}

export default LandingPage

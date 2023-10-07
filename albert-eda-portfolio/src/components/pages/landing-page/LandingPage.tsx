import { Box, Typography, Button } from "@mui/material"
import { StyledImageWrapper, StyledImage, StyledNavBar, StyledResumeButton } from "./styled"
import ProfilePicture from './profile-pic.jpg'
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined'

export const LandingPage = () => {

  return (
  <Box padding="1rem 20rem">
      <Box
        display="flex"
        flexDirection="column"
        mb="5rem"
        gap="3rem"
      >
        <Box textAlign={"left"}>
          <Typography variant="subtitle1" fontWeight={"800"} color={"white"}>
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
                  <DownloadForOfflineOutlinedIcon
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
              >
                <Typography variant="body1" color="white" fontWeight={"700"}>
                  Resume
                </Typography>
              </StyledResumeButton>
        </Box>
        <Box display={"grid"} gridTemplateRows={"1fr"} gap="2rem">
          <StyledNavBar justifySelf={"right"}>

          </StyledNavBar>
          <Box alignItems={"center"}>
            <Typography variant="h1" fontWeight={"700"} color={"white"}>
              Hey, I'm Albert
            </Typography>
          </Box>
          <Box textAlign={"left"}>
            <Typography variant="h6" color={"white"}>
              I'm a Software Engineer at 
                <Button 
                  sx={{ 
                        borderRadius: "10px", 
                        border: "2px solid #BB86FC",
                        marginLeft: "0.5rem"
                      }}>
                        <Typography variant="body1" color="#BB86FC" fontWeight={"700"}>
                          OBSIDI
                        </Typography>
                </Button> . 
              Over the years, I have made substantial contributions to the developement of the OBSIDI platform.
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
    
  )
}

export default LandingPage

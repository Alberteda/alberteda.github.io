import { Box, Typography } from "@mui/material"
import { StyledImageWrapper, StyledImage, StyledNavBar, StyledFeed, StyledResumeButton } from "./styled"
import ProfilePicture from './profile-pic.jpg'

export const LandingPage = () => {

  return (
  <Box padding="1rem 8.063rem">
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
                variant="outlined" 
                sx={{ 
                      borderRadius: "20px", 
                      border: "4px solid #F4D03F", 
                      color: 'linear-gradient(132deg, #F4D03F 0%, #16A085 100%)',
                      '&:hover': {
                        backgroundColor: "#F76B1C",
                        border: "4px solid #EE5100", 
                      }
                    }}
              >
                <Typography variant="body1" color="white" fontWeight={"700"}>
                  Resume
                </Typography>
              </StyledResumeButton>
        </Box>
        <Box display={"grid"} gridTemplateRows={"0.5fr 1fr"} gap="5rem">
          <StyledNavBar justifySelf={"right"}>

          </StyledNavBar>
          <StyledFeed>
            okko
          </StyledFeed>
        </Box>
      </Box>
    </Box>
    
  )
}

export default LandingPage

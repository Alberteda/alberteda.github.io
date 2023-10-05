import { Box, Typography } from "@mui/material"
import { StyledBox, StyledImageWrapper, StyledImage } from "./styled"
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
      <Box display={"grid"} gridTemplateColumns={"1fr 2fr"} gap={'3rem'} margin={"auto"}>
        <Box>
          <StyledImageWrapper>
            <StyledImage src={ProfilePicture} alt="profile-picture"/>
          </StyledImageWrapper>
        
        </Box>
        <StyledBox>
          
        </StyledBox>
      </Box>
    </Box>
    
  )
}

export default LandingPage

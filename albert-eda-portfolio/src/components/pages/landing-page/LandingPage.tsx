import { Typography, Box } from "@mui/material"

export const LandingPage = () => {

  return (
    <Box display={"grid"} gridTemplateColumns={"1fr 2fr"} sx={{ minHeight: "100vh" }} gap={'3rem'} padding={"20rem 8rem"}>
      <Box bgcolor={"lightblue"} textAlign={"left"}>
        <Typography variant="h1">
          Hey, I'm Albert
        </Typography>
        <Typography>
          I'm a full-stack software engineer at OBSIDI. Recently, I've been a high contributor to the developement of the OBSIDI platform.
        </Typography>
        <Typography>
          In my free time I run an indie Record Label, I like to explore cities -local and afar, play soccer, take photos on film, and play a heroic amount of video games.
        </Typography>
      </Box>
      <Box bgcolor={"lightblue"}>
        <Typography variant="h1">
          Hey, I'm Albert
        </Typography>
        <Typography>
          I'm a full-stack software engineer at OBSIDI. Recently, I've been a high contributor to the developement of the OBSIDI platform.
        </Typography>
        <Typography>
          In my free time I run an indie Record Label, I like to explore cities -local and afar, play soccer, take photos on film, and play a heroic amount of video games.
        </Typography>
      </Box>
    </Box>
    
  )
}

export default LandingPage

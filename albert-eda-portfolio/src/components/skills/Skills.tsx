import { Box, CardContent, Chip, Stack, Typography, TypographyVariant } from "@mui/material";

interface Skill {
  skill: string;
  value: string;
}

interface SkillsProps {
  skills: Skill[];
  titleVariant: TypographyVariant;
  fontWeight: string;
}

const Skills = ({ skills, titleVariant, fontWeight }: SkillsProps) => {
  return (
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        "&.MuiCardContent-root	": {
          padding: "0 !important",
        },
      }}
    >
      <Box display={"flex"} flexDirection="column" gap="1.5rem">
        <Box display={"flex"} flexDirection="column" gap="1rem">
          <Typography variant={titleVariant} color={"white"} textAlign={"left"} fontWeight={fontWeight}>
            Programming Languages
          </Typography>
          <Box overflow={"auto"} sx={{ scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}>
            {skills && (
              <Stack direction="row" gap="0.5rem">
                {skills.map(({ skill, value }, index) => {
                  return (
                    skill === "language" && (
                      <Chip
                        key={index}
                        label={value}
                        variant="outlined"
                        sx={{ backgroundColor: "#4B8063", color: "white", fontWeight: "700" }}
                      />
                    )
                  );
                })}
              </Stack>
            )}
          </Box>
        </Box>
        <Box display={"flex"} flexDirection="column" gap="1rem">
          <Typography variant={titleVariant} color={"white"} textAlign={"left"} fontWeight={fontWeight}>
            Frameworks{" "}
          </Typography>
          <Box overflow={"auto"} sx={{ scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}>
            {skills && (
              <Stack direction="row" gap="0.5rem">
                {skills.map(({ skill, value }, index) => {
                  return (
                    skill === "framework" && (
                      <Chip
                        key={index}
                        label={value}
                        variant="outlined"
                        sx={{ backgroundColor: "#4B8063", color: "white", fontWeight: "700" }}
                      />
                    )
                  );
                })}
              </Stack>
            )}
          </Box>
        </Box>
        <Box display={"flex"} flexDirection="column" gap="1rem">
          <Typography variant={titleVariant} color={"white"} textAlign={"left"} fontWeight={fontWeight}>
            Tools
          </Typography>
          <Box overflow={"auto"} sx={{ scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}>
            {skills && (
              <Stack direction="row" gap="0.5rem">
                {skills.map(({ skill, value }, index) => {
                  return (
                    skill === "tool" && (
                      <Chip
                        key={index}
                        label={value}
                        variant="outlined"
                        sx={{ backgroundColor: "#4B8063", color: "white", fontWeight: "700" }}
                      />
                    )
                  );
                })}
              </Stack>
            )}
          </Box>
        </Box>
      </Box>
    </CardContent>
  );
};

export default Skills;

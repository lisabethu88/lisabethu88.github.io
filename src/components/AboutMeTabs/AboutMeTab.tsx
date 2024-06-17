import { Box, Typography, Chip } from "@mui/material";
import React from "react";
import { skills } from "../../data/data.ts";
import {
  forestGreen,
  darkMauve,
  cream,
  darkBlue,
  gold,
  lightSage,
  medMauve,
  bodyFont,
  headingFont,
} from "../../constants.ts";
interface AboutMeTabProps {
  darkMode: boolean;
}

const AboutMeTab = ({ darkMode }: AboutMeTabProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            color={darkMode ? gold : forestGreen}
            fontWeight="bold"
            fontFamily={headingFont}
            fontSize={30}
            letterSpacing={4}
            margin={1}
          >
            Welcome!
          </Typography>{" "}
        </Box>
        <Chip
          label="Software Engineer | Front End Developer"
          sx={{
            margin: 1,
            backgroundColor: darkMode ? lightSage : medMauve,
            color: darkMode ? darkBlue : darkMauve,
            fontFamily: bodyFont,
            fontSize: ".8rem",
            borderRadius: 10,
            fontWeight: 500,
          }}
        />
        <Typography
          padding={2}
          fontFamily={bodyFont}
          color={darkMode ? cream : darkMauve}
        >
          My name is Lisa Utsett and I am a passionate developer based in Hudson
          Valley, NY. Coding isn't just a job for me; it's something I genuinely
          enjoy, and I find fulfillment in learning and the creative
          problem-solving it involves. I'm committed to being a reliable team
          member and thrive in collaborative environments, where I can
          contribute positively and work effectively with others to achieve our
          goals. I'm always looking for ways to improve my skills and learn new
          technologies, and I'm excited to see where my journey in tech will
          take me.
        </Typography>
        <Box sx={{ paddingY: 3 }}>
          <Typography
            variant="overline"
            fontFamily={headingFont}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            fontSize={15}
            color={darkMode ? gold : forestGreen}
            marginBottom={2}
          >
            Skills:{" "}
          </Typography>
          {skills.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              sx={{
                margin: 0.5,
                backgroundColor: darkMode ? lightSage : medMauve,
                color: darkMode ? darkBlue : darkMauve,
                fontFamily: bodyFont,
                fontWeight: 500,
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default AboutMeTab;

import { Typography, Chip, Button, Box } from "@mui/material";
import React from "react";
import { IProjectData } from "../../interfaces/IProjectData.ts";
import {
  bodyFont,
  cream,
  darkBlue,
  darkMauve,
  forestGreen,
  headingFont,
  lightSage,
  medMauve,
  gold,
} from "../../constants.ts";

interface ProjectSlideProps {
  projectData: IProjectData;
  darkMode: boolean;
}

const ProjectSlide = ({
  darkMode,
  projectData: { techStack, title, description, imgPath, githubLink, demoLink },
}: ProjectSlideProps) => {
  return (
    <Box
      sx={{
        padding: 1,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h5"
        fontFamily={headingFont}
        fontWeight={600}
        color={darkMode ? gold : forestGreen}
      >
        {title}
      </Typography>{" "}
      <Typography
        padding={1}
        fontFamily={bodyFont}
        color={darkMode ? cream : darkMauve}
      >
        {description}
      </Typography>
      <Box>
        {techStack.map((tech, index) => {
          return (
            <Chip
              label={tech}
              sx={{
                margin: 0.5,
                backgroundColor: darkMode ? lightSage : medMauve,
                color: darkMode ? darkBlue : darkMauve,
                fontFamily: bodyFont,
                fontWeight: 500,
              }}
              key={index}
            />
          );
        })}
      </Box>
      <Box
        sx={{
          width: "100%",
          margin: "5px auto",
          justifyContent: "center",
          display: "flex",
          marginY: 3,
        }}
      >
        <img
          src={imgPath}
          alt="project screenshot"
          className="rounded max-w-[400px] border-2 border-gray-300"
        />
      </Box>
      {/* <Button
        sx={{
          fontFamily: bodyFont,
          color: darkMode ? gold : forestGreen,
          textDecoration: "underline",
        }}
        href={githubLink}
      >
        Github
      </Button> */}
      <Button
        sx={{
          fontFamily: bodyFont,
          color: darkMode ? gold : forestGreen,
          textDecoration: "underline",
        }}
        href={demoLink}
      >
        Demo
      </Button>
    </Box>
  );
};

export default ProjectSlide;

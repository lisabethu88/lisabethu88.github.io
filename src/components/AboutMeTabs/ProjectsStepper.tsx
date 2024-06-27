import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import {
  darkMauve,
  forestGreen,
  gold,
  medMauve,
  lightSage,
  headingFont,
} from "../../constants.ts";
import { projectsData } from "../../data/data.ts";
import ProjectSlide from "./ProjectSlide.tsx";

interface ProjectsStepperProps {
  darkMode: boolean;
}

const ProjectsStepper = ({ darkMode }: ProjectsStepperProps) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const maxSteps = projectsData.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ width: "100%", minHeight: "375px" }}>
        <ProjectSlide
          darkMode={darkMode}
          projectData={projectsData[activeStep]}
        />
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          backgroundColor: "transparent",
          fontFamily: headingFont,
          color: darkMode ? lightSage : forestGreen,
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{
              color: darkMode ? gold : darkMauve,
              fontFamily: headingFont,
              textTransform: "capitalize",
              fontWeight: "bold",
              "&.Mui-disabled": {
                color: darkMode ? "#566987" : "rgba(0, 0, 0, 0.26)",
              },
            }}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{
              color: darkMode ? gold : darkMauve,
              fontFamily: headingFont,
              textTransform: "capitalize",
              fontWeight: "bold",
              "&.Mui-disabled": {
                color: darkMode ? "#566987" : "rgba(0, 0, 0, 0.26)",
              },
            }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default ProjectsStepper;

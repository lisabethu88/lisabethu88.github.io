import { Box } from "@mui/material";
import React from "react";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { forestGreen, gold } from "../../constants.ts";
import ProjectsStepper from "./ProjectsStepper.tsx";
import LaptopIcon from "@mui/icons-material/Laptop";
interface ProjectsTabProps {
  darkMode: boolean;
}

const ProjectsTab = ({ darkMode }: ProjectsTabProps) => {
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
      <ProjectsStepper darkMode={darkMode} />
    </Box>
  );
};
export default ProjectsTab;

import { Box } from "@mui/material";
import React from "react";
import JobsStepper from "./JobsStepper.tsx";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import {
  darkGreen,
  forestGreen,
  medMauve,
  lightSage,
  gold,
} from "../../constants.ts";
interface ExperienceTabProps {
  darkMode: boolean;
}

const ExperienceTab = ({ darkMode }: ExperienceTabProps) => {
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
      <JobsStepper darkMode={darkMode} />
    </Box>
  );
};
export default ExperienceTab;

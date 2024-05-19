import { Box, Typography } from "@mui/material";
import React from "react";
import {
  darkBlue,
  medMauve,
  darkMauve,
  lightSage,
  headingFont,
  lightMauve,
  cream,
} from "../constants.ts";
import { grey } from "@mui/material/colors";
interface FooterProps {
  darkMode: boolean;
}
const Footer = ({ darkMode }: FooterProps) => {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        bgcolor: darkMode ? darkBlue : medMauve,
        padding: 1,
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      }}
    >
      <Typography
        fontFamily={headingFont}
        color={darkMode ? lightSage : darkMauve}
        fontWeight={600}
        letterSpacing={1}
      >
        2024, Developed by Lisa Utsett using React and MUI
      </Typography>
    </Box>
  );
};

export default Footer;

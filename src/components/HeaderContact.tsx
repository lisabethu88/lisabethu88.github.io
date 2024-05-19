import { IconButton } from "@mui/material";
import React from "react";
import { darkMauve, gold, lightSage } from "../constants.ts";
interface HeaderContactProps {
  darkMode: boolean;
  icon: React.ReactNode;
  link: string;
}
const HeaderContact = ({ darkMode, icon, link }: HeaderContactProps) => {
  return (
    <IconButton
      href={link}
      sx={{
        my: { xs: 0, md: 2 },
        color: darkMode ? lightSage : darkMauve,
        display: "block",
        padding: 0,
      }}
    >
      {icon}
    </IconButton>
  );
};
export default HeaderContact;

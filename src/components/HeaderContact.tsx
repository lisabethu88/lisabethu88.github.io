import { Box, IconButton } from "@mui/material";
import React from "react";
interface HeaderContactProps {
  headerTextColor: string;
  icon: React.ReactNode;
  link: string;
}
const HeaderContact = ({ headerTextColor, icon, link }) => {
  return (
    <IconButton
      href={link}
      sx={{ my: { xs: 0, md: 2 }, color: headerTextColor, display: "block" }}
    >
      {icon}
    </IconButton>
  );
};
export default HeaderContact;

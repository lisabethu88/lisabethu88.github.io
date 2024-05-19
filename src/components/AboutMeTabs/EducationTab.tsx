import { Box, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import React, { useEffect, useState } from "react";
import SchoolIcon from "@mui/icons-material/School";
import {
  darkMauve,
  cream,
  gray,
  medMauve,
  black,
  forestGreen,
  gold,
  lightSage,
  headingFont,
} from "../../constants.ts";
interface AboutMeTabProps {
  darkMode: boolean;
}

const EducationTab = ({ darkMode }: AboutMeTabProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <List sx={{ width: "100%", paddingY: 3 }}>
        <ListItem>
          <ListItemIcon>
            <img
              src="../adk.jpeg"
              className="w-[60px] rounded-full mr-2"
              alt="suny adirondack logo"
            />
          </ListItemIcon>
          <ListItemText
            primary="SUNY Adirondack, Queensbury, NY"
            secondary={
              <>
                <span className="flex justify-between w-full">
                  Associates of Science in Computer Science{" "}
                  <span>2018 - 2020</span>
                </span>
                <label>3.7 GPA</label>
              </>
            }
            primaryTypographyProps={{
              fontFamily: headingFont,
              fontWeight: "bold",
              color: darkMode ? lightSage : darkMauve,
              textTransform: "uppercase",
            }}
            secondaryTypographyProps={{
              fontFamily: headingFont,
              color: darkMode ? cream : gray,
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <img
              className="w-[60px] rounded-full mr-2"
              src="../adabadge.png"
              alt="ada certificate badge"
            />
          </ListItemIcon>
          <ListItemText
            primary="Ada Developers Academy, Seattle, WA"
            secondary={
              <span className="flex justify-between w-full">
                Certificate of Achievement
                <span>2022 - 2023</span>
              </span>
            }
            primaryTypographyProps={{
              fontFamily: headingFont,
              fontWeight: "bold",
              color: darkMode ? lightSage : darkMauve,
              textTransform: "uppercase",
            }}
            secondaryTypographyProps={{
              fontFamily: headingFont,
              color: darkMode ? cream : gray,
            }}
          />
        </ListItem>
      </List>
    </Box>
  );
};
export default EducationTab;

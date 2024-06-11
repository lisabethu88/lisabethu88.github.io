import { Box, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import React from "react";

import {
  darkMauve,
  cream,
  gray,
  lightSage,
  headingFont,
  gold,
  forestGreen,
  lightMauve,
} from "../../constants.ts";
interface AboutMeTabProps {
  darkMode: boolean;
}

const EducationTab = ({ darkMode }: AboutMeTabProps) => {
  const imgStyles = {
    maxWidth: "200px",
    width: "100%",
    margin: "20px",
    transition: "transform 300ms ease-in-out",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "0.375rem",
  };
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <a target="_blank" href="../degree.JPG">
            <img
              src="../degree.JPG"
              alt="SUNY Adirondack degree"
              style={imgStyles}
            />
          </a>
          <a target="_blank" href="../adacertificate.png">
            <img
              src="../adacertificate.png"
              alt="Ada Developers Academy certificate"
              style={imgStyles}
            />
          </a>
        </Box>
      </List>
    </Box>
  );
};
export default EducationTab;

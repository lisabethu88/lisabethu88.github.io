import { Box, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import React from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import {
  darkMauve,
  forestGreen,
  gold,
  gray,
  lightSage,
  cream,
  bodyFont,
  headingFont,
} from "../../constants.ts";
import { IJobData } from "../../interfaces/IJobData.ts";
interface JobSlideProps {
  darkMode: boolean;
  jobData: IJobData;
}

const JobSlide = ({ darkMode, jobData }: JobSlideProps) => {
  return (
    <Box paddingY={3}>
      <List>
        <ListItem
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <ListItemText
            sx={{ width: "100%" }}
            primary={jobData.company}
            secondary={
              <span className="flex justify-between w-full">
                {jobData.title} <span>{jobData.date}</span>
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
          <List sx={{ listStyle: "inside" }}>
            {jobData.listItems.map((item: string, index: number) => {
              return (
                <ListItem key={index} sx={{ padding: 0 }}>
                  <ListItemIcon sx={{ minWidth: 25 }}>
                    <DoubleArrowIcon
                      sx={{ color: darkMode ? gold : forestGreen }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    secondaryTypographyProps={{
                      fontFamily: bodyFont,
                      color: darkMode ? cream : gray,
                    }}
                    secondary={item}
                  />
                </ListItem>
              );
            })}
          </List>
        </ListItem>
      </List>
    </Box>
  );
};

export default JobSlide;

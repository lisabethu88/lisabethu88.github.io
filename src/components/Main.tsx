import React from "react";
import {
  cream,
  darkBlue,
  darkMauve,
  forestGreen,
  gold,
  lightForestGreen,
  lightMauve,
  lightSage,
  medMauve,
  medSage,
} from "../constants.ts";
import { Box } from "@mui/material";
import ProfileTabs from "./AboutMeTabs/ProfileTabs.tsx";

interface MainProps {
  darkMode: boolean;
}
const Main = ({ darkMode }: MainProps) => {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        paddingTop: {
          xs: "25px",
          sm: "50px",
          md: "75px",
        },
        paddingBottom: { xs: "150px", lg: 0 },
        bgcolor: darkMode ? darkBlue : medMauve,
        height: "fit-content",
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: { xs: "wrap", lg: "nowrap" },
        // overflowY: "scroll",
        gap: { xs: 1, lg: 5 },
        marginBottom: { xs: "50px", lg: 0 },
      }}
    >
      <Box
        sx={{
          // height: { xs: "fit-content", sm: "100%" },
          marginTop: { xs: "0", lg: "100px" },
          maxWidth: { xs: "150px", sm: "200px", md: "350px" },
          borderRadius: "50%",
          backgroundColor: darkMode ? gold : forestGreen,
          boxShadow: "2px 1px 4px 1px rgba(0, 0, 0, 0.2)",
          borderWidth: { xs: "4px", md: "8px" },
          borderStyle: "solid",
          borderColor: darkMode ? medSage : cream,
          transition: "0.4s, background-position 0s",
          backgroundSize: "0% 100%",
          backgroundRepeat: "no-repeat",
          //transition: "0.5s ease-in-out",
          // backgroundImage: `linear-gradient(180deg, ${
          //   darkMode ? medSage : forestGreen
          // }, ${darkMode ? gold : darkMauve})`,
          "&:hover": {
            transition: "0.5s ease-in-out",
            // // boxShadow: "2px 1px 7px 2px rgba(0, 0, 0, 0.5)",
            backgroundSize: "100% 100%",
            backgroundImage: `linear-gradient(120deg, ${
              darkMode ? lightSage : darkMauve
            }, ${darkMode ? gold : forestGreen})`,
            transform: "scale(1.1)",
          },
        }}
      >
        <img
          alt="Woman smiling on a laptop"
          src={"../mecartoon6.png"}
          style={{ borderRadius: "50%" }}
        />
      </Box>
      <ProfileTabs darkMode={darkMode} />
    </Box>
  );
};
export default Main;

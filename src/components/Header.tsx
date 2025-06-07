import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Avatar, Tooltip } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import HeaderContact from "./HeaderContact.tsx";
import {
  darkBlue,
  darkMauve,
  headingFont,
  lightSage,
  medMauve,
} from "../constants.ts";
interface HeaderProps {
  handleSetMode: () => void;
  darkMode: boolean;
}
const pagesInfo = [
  {
    icon: (
      <Tooltip title="GitHub">
        <GitHubIcon
          sx={{
            height: { xs: 30, md: 50 },
            width: { xs: 30, md: 50 },
            margin: 1,
          }}
        />
      </Tooltip>
    ),
    link: "https://github.com/lisabethu88",
  },
  {
    icon: (
      <Tooltip title="LinkedIn">
        <LinkedInIcon
          sx={{
            height: { xs: 30, md: 50 },
            width: { xs: 30, md: 50 },
            margin: 1,
          }}
        />
      </Tooltip>
    ),
    link: "https://www.linkedin.com/in/lisa-utsett-3319371b8/",
  },
  {
    icon: (
      <Tooltip title="Email">
        <EmailIcon
          sx={{
            height: { xs: 30, md: 50 },
            width: { xs: 30, md: 50 },
            margin: 1,
          }}
        />
      </Tooltip>
    ),
    link: "mailto:lisabethutsett@gmail.com",
  },
];
const Header = ({ handleSetMode, darkMode }: HeaderProps) => {
  return (
    <AppBar
      position={"sticky"}
      sx={{
        backgroundColor: darkMode ? darkBlue : medMauve,
        color: "#cdb227",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            margin: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              // paddingTop: { xs: "16px", md: 0 },
              gap: { xs: 0, md: 2 },
            }}
          >
            <Avatar
              sx={{
                mr: 1,
                width: { xs: 30, md: 50 },
                height: { xs: 30, md: 50 },
              }}
              src={
                darkMode ? "../pet-logo-dark-3.png" : "../pet-logo-light-3.png"
              }
              alt="Logo of two dogs and a cat"
            />

            <Typography
              variant="h6"
              noWrap={false}
              component="a"
              sx={{
                display: { xs: "flex" },
                fontFamily: headingFont,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: darkMode ? lightSage : darkMauve,
                textDecoration: "none",
                fontSize: { xs: "1.1rem", md: "2rem" },
                textAlign: { xs: "left", md: "left" },
                textTransform: "capitalize",
              }}
            >
              Lisa Utsett
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            {pagesInfo.map((pageInfo, index) => {
              return (
                <HeaderContact
                  key={index}
                  darkMode={darkMode}
                  icon={pageInfo.icon}
                  link={pageInfo.link}
                />
              );
            })}
            <Tooltip
              title={darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleSetMode}
                sx={{
                  my: { xs: 0, md: 2 },
                  color: darkMode ? lightSage : darkMauve,
                }}
              >
                {!darkMode ? (
                  <LightModeIcon
                    sx={{
                      height: { xs: 30, md: 50 },
                      width: { xs: 30, md: 50 },
                    }}
                  />
                ) : (
                  <DarkModeIcon
                    sx={{
                      height: { xs: 30, md: 50 },
                      width: { xs: 30, md: 50 },
                    }}
                  />
                )}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;

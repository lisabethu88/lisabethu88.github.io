import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Avatar } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import HeaderContact from "./HeaderContact.tsx";
const pagesInfo = [
  {
    icon: (
      <GitHubIcon
        sx={{
          height: { xs: 30, md: 50 },
          width: { xs: 30, md: 50 },
          margin: 1,
        }}
      />
    ),
    link: "https://github.com/lisabethu88",
  },
  {
    icon: (
      <LinkedInIcon
        sx={{
          height: { xs: 30, md: 50 },
          width: { xs: 30, md: 50 },
          margin: 1,
        }}
      />
    ),
    link: "https://www.linkedin.com/in/lisa-utsett-3319371b8/",
  },
  {
    icon: (
      <EmailIcon
        sx={{
          height: { xs: 30, md: 50 },
          width: { xs: 30, md: 50 },
          margin: 1,
        }}
      />
    ),
    link: "mailto:lisabethutsett@gmail.com",
  },
];
const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const [darkMode, setDarkMode] = useState(false);
  const handleSetMode = () => {
    setDarkMode(!darkMode);
  };

  const darkColor = "#334c5b";
  const lightColor = "#d4d2c6";
  const [headerBGColor, setHeaderBGColor] = useState(lightColor);
  const [headerTextColor, setHeaderTextColor] = useState(darkColor);

  useEffect(() => {
    if (darkMode) {
      setHeaderBGColor(darkColor);
      setHeaderTextColor(lightColor);
    } else {
      setHeaderBGColor(lightColor);
      setHeaderTextColor(darkColor);
    }
  }, [darkMode]);
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: headerBGColor,
        color: headerTextColor,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            margin: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingTop: { xs: "16px", md: 0 },
            }}
          >
            <Avatar
              sx={{
                mr: 1,
                width: { xs: 30, md: 50 },
                height: { xs: 30, md: 50 },
                border: "2px solid",
              }}
              src="../avatar.jpeg"
            />
            <Typography
              variant="h6"
              noWrap={false}
              component="a"
              sx={{
                display: { xs: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: "1.5rem",
                textAlign: { xs: "left", md: "left" },
              }}
            >
              Lisa Utsett
            </Typography>{" "}
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
                  headerTextColor={headerTextColor}
                  icon={pageInfo.icon}
                  link={pageInfo.link}
                />
              );
            })}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleSetMode}
              color="inherit"
              sx={{ my: { xs: 0, md: 2 } }}
            >
              {!darkMode ? (
                <LightModeIcon
                  sx={{
                    height: { xs: 30, md: 50 },
                    width: { xs: 30, md: 50 },
                    margin: 1,
                  }}
                />
              ) : (
                <DarkModeIcon
                  sx={{
                    height: { xs: 30, md: 50 },
                    width: { xs: 30, md: 50 },
                    margin: 1,
                  }}
                />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;

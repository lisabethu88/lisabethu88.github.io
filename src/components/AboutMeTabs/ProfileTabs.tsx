import { Card, Box, Tabs, Tab } from "@mui/material";
import React from "react";
import AboutMeTab from "./AboutMeTab.tsx";
import ExperienceTab from "./ExperienceTab.tsx";
import {
  darkBlue,
  darkMauve,
  forestGreen,
  gold,
  medMauve,
  cream,
  lightSage,
  medSage,
  headingFont,
} from "../../constants.ts";
import EducationTab from "./EducationTab.tsx";
import { grey } from "@mui/material/colors";
import ProjectsTab from "./ProjectsTabs.tsx";
import BackHandIcon from "@mui/icons-material/BackHand";
import LaptopIcon from "@mui/icons-material/Laptop";
import WorkHistory from "@mui/icons-material/WorkHistory";
import SchoolIcon from "@mui/icons-material/School";
interface ProfileTabsProps {
  darkMode: boolean;
}

const ProfileTabs = ({ darkMode }: ProfileTabsProps) => {
  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  const tabLabels = [
    {
      label: "About Me",
      icon: (
        <BackHandIcon
          sx={{
            fontSize: "1.1rem",
          }}
          className="wave"
        />
      ),
    },
    {
      label: "Projects",
      icon: (
        <LaptopIcon
          sx={{
            fontSize: "1.1rem",
          }}
        />
      ),
    },
    {
      label: "Experience",
      icon: (
        <WorkHistory
          sx={{
            fontSize: "1.1rem",
          }}
        />
      ),
    },
    {
      label: "Education",
      icon: (
        <SchoolIcon
          sx={{
            fontSize: "1.1rem",
          }}
        />
      ),
    },
  ];
  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
      <Box
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        component="div"
        sx={{
          "&.MuiButtonBase-root": { fontSize: "2rem" },
        }}
      >
        {value === index && (
          <Card
            sx={{
              maxWidth: "800px",
              padding: 3,
              border: "none",
              backgroundColor: darkMode ? medSage : "#f7f5f5",
            }}
          >
            {children}
          </Card>
        )}
      </Box>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: "100%", maxWidth: 800, height: "100%", overflowY: "scroll" }}
    >
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="about me tabs"
          className="about-me-tabs"
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: darkMode ? darkBlue : medMauve,
            width: "100%",
            borderTopLeftRadius: 5,
          }}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile={true}
        >
          {tabLabels.map((tabLabel, index) => (
            <Tab
              label={tabLabel.label}
              icon={tabLabel.icon}
              {...a11yProps(index)}
              sx={{
                fontSize: { xs: ".75rem", md: "1rem" },
                fontWeight: 600,
                fontFamily: headingFont,
                color: darkMode ? gold : forestGreen,
                textTransform: "uppercase",
                backgroundColor: "transparent",
                "&.Mui-selected": {
                  color: darkMode ? lightSage : darkMauve,
                  backgroundColor: darkMode ? medSage : cream,
                },
                display: "flex",
                flexDirection: { xs: "column", sm: "row-reverse" },
                gap: { xs: 0, sm: 1 },
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            />
          ))}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <AboutMeTab darkMode={darkMode} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ProjectsTab darkMode={darkMode} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ExperienceTab darkMode={darkMode} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <EducationTab darkMode={darkMode} />
      </CustomTabPanel>
    </Box>
  );
};
export default ProfileTabs;

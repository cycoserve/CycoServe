import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Details from "./Details";

interface VideoSingleTabProps {
  details: string;
  summary: string;
  title: string;
}

const VideoSingleTab: React.FC<VideoSingleTabProps> = ({
  details,
  title,
  summary,
}) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Summary" value="1" />
            <Tab label="Full Details" value="2" />
            <Tab label="Comments" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">{summary}</TabPanel>
        <TabPanel value="2">
          <Details htmlContent={details} />
        </TabPanel>
        <TabPanel value="3">{title}</TabPanel>
      </TabContext>
    </Box>
  );
};

export default VideoSingleTab;

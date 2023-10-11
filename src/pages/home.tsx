import { useContext } from "react";
import { ThemeSettings } from "../theme";
import { Box, Typography } from "@mui/material";
import { NewPostComponent, TweetCellComponent } from "../page-components";
import AppContext from "../utils/contexts/App/AppContext";

const styles = (themeSettings: any) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      ".header": {
        padding: "1.2rem",
      },
      ".tweets": {
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      },
      ".show-box-shadow": {
        boxShadow: "0 6px 3px -3px rgba(0,0,0,0.2)",
      },
    },
  };
};

const Header = (props: any) => {
  const { className } = props;
  return (
    <Box className={className}>
      <Typography variant="h4">Home</Typography>
    </Box>
  );
};

const HomePage = (props: any) => {
  const { sx } = props;
  const { theme } = useContext(AppContext);
  return (
    <Box sx={{ ...sx, ...styles(ThemeSettings(theme)).root }}>
      <Header className="header" />
      <NewPostComponent className="show-box-shadow" />
      <Box className="tweets">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((data:number,index:number) => {
          return <TweetCellComponent compKey={index} />;
        })}
      </Box>
    </Box>
  );
};

export default HomePage;

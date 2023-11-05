import { useContext } from "react";
import { ThemeSettings } from "../theme";
import { Box, Skeleton } from "@mui/material";
import AppContext from "../utils/contexts/App/AppContext";

const styles = (themeSettings: any) => {
  return {
    root: {
      margin: "1.2rem",

      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      "& .skeleton-header": {
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        alignItems: "center",
      },
      "& .skeleton-content": {
        padding: "3.5rem",
      },
    },
  };
};

const TweetSkeletonComponent = (props: any) => {
  const { compKey = "" } = props;

  // Contexts
  const { theme } = useContext(AppContext);
  return (
    <Box sx={{ ...styles(ThemeSettings(theme)).root }} key={compKey}>
      <Box className="skeleton-header">
        <Skeleton animation="wave" variant="circular" width={40} height={40} />
        <Box sx={{ width: "100%" }}>
          <Skeleton animation="wave" height={15} width="60%" />
          <Skeleton animation="wave" height={15} width="30%" />
        </Box>
      </Box>
      <Skeleton
        className="skeleton-content"
        animation="wave"
        variant="rectangular"
      />
      <Skeleton animation="wave" height={25} width="100%" />
    </Box>
  );
};

export default TweetSkeletonComponent;

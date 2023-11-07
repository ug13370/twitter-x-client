import { useContext } from "react";
import { ThemeSettings } from "../theme";
import { Box, Skeleton } from "@mui/material";
import AppContext from "../utils/contexts/App/AppContext";

const styles = (themeSettings: any) => {
  return {
    root: {
      margin: "0.6rem",
      "& .skeleton-userInfo": {
        display: "flex",
        flexDirection: "row",
        gap: "1.3rem",
        alignItems: "center",
      },
    },
  };
};

const UserToFollowSkeleton = () => {
  const { theme } = useContext(AppContext);

  return (
    <Box sx={{ ...styles(ThemeSettings(theme)).root }}>
      <Box className="skeleton-userInfo">
        <Skeleton animation="wave" variant="circular" width={50} height={40} />
        <Box sx={{ width: "100%" }}>
          <Skeleton animation="wave" height={18} width="80%" />
          <Skeleton animation="wave" height={18} width="50%" />
        </Box>
      </Box>
    </Box>
  );
};

export default UserToFollowSkeleton;

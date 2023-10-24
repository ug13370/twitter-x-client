import { useContext } from "react";
import { ThemeSettings } from "../theme";
import { Box, Typography } from "@mui/material";
import AppContext from "../utils/contexts/App/AppContext";
import FolderOffOutlinedIcon from "@mui/icons-material/FolderOffOutlined";

const styles = (themeSettings: any) => {
  return {
    root: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      gap: "0.5rem",
      "& .no-data-found-icon": {
        height: "10%",
        width: "10%",
      },
      "& .content": {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      },
    },
  };
};

const DataNotFoundComponent = (props: any) => {
  const { message = "No Data Found", subMessage = "" } = props;

  // Contexts
  const { theme } = useContext(AppContext);

  return (
    <Box sx={{ ...styles(ThemeSettings(theme)).root }}>
      <FolderOffOutlinedIcon className="no-data-found-icon" />
      <Box className="content">
        {message !== "" && <Typography variant="h5">{message}</Typography>}
        {subMessage !== "" && (
          <Typography variant="body1">{subMessage}</Typography>
        )}
      </Box>
    </Box>
  );
};

export default DataNotFoundComponent;

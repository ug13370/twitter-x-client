import { useContext } from "react";
import { ThemeSettings } from "../theme";
import { Box, Typography } from "@mui/material";
import AppContext from "../utils/contexts/App/AppContext";
import FolderOffOutlinedIcon from "@mui/icons-material/FolderOffOutlined";

const styles = (themeSettings: any) => {
  return {
    root: {
      flex: 1,
      gap: "0.5rem",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",

      opacity: 0.7,
      "& .no-data-found-icon": {
        width: "10%",
        height: "10%",
      },
      "& .content": {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        "> *": { textAlign: "center" },
      },
    },
  };
};

const DataNotFoundComponent = (props: any) => {
  const {
    sx = {},
    className = "",
    subMessage = "",
    message = "No Data Found",
  } = props;

  // Contexts
  const { theme } = useContext(AppContext);

  return (
    <Box
      className={className}
      sx={{ ...sx, ...styles(ThemeSettings(theme)).root }}
    >
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

import { useContext } from "react";
import { Card, IconButton, SvgIcon } from "@mui/material";
import AppContext from "../utils/contexts/App/AppContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const styles = () => {
  return {
    right: 0,
    top: "2rem",
    width: "4rem",
    position: "absolute",
    borderRadius: "2rem 0rem 0rem 2rem",
  };
};

const DarkLightToggleComponent = () => {
  const { theme, setTheme } = useContext(AppContext);
  return (
    <Card sx={styles()}>
      <IconButton
        color="primary"
        onClick={() => {
          setTheme((prevTheme: string) =>
            prevTheme === "light" ? "dark" : "light"
          );
        }}
      >
        <SvgIcon
          component={theme === "light" ? LightModeOutlinedIcon : LightModeIcon}
        ></SvgIcon>
      </IconButton>
    </Card>
  );
};

export default DarkLightToggleComponent;

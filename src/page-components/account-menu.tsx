import { LogoComponent } from ".";
import { useContext } from "react";
import { ThemeSettings } from "../theme";
import { ButtonComponent } from "../core-components";
import AppContext from "../utils/contexts/App/AppContext";
import { Avatar, Box, Button, Typography } from "@mui/material";

const styles = (themeSettings: any) => {
  return {
    root: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    avatar: {
      marginRight: "0.7rem",
      width: "2.8rem",
      height: "2.8rem",
      boxShadow: themeSettings.shadows[4],
      backgroundColor: themeSettings.palette.background.alt,
    },
    userInfo: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  };
};

const AccountMenu = (props: any) => {
  const { sx } = props;
  const { theme } = useContext(AppContext);
  return (
    <ButtonComponent
      borderRadius={10}
      padding={1}
      sx={{ ...sx, ...styles(ThemeSettings(theme)).root }}
    >
      <Avatar sx={styles(ThemeSettings(theme)).avatar}>
        <LogoComponent width="2rem" />
      </Avatar>
      <Box sx={styles(ThemeSettings(theme)).userInfo}>
        <Typography variant="h6">Utkarsh Gupta</Typography>
        <Typography variant="subtitle1">@utkarsh1508999</Typography>
      </Box>
    </ButtonComponent>
  );
};

export default AccountMenu;

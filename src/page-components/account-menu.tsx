import { LogoComponent } from ".";
import { useContext } from "react";
import { ThemeSettings } from "../theme";
import { ButtonComponent } from "../core-components";
import { Avatar, Box, Typography } from "@mui/material";
import AppContext from "../utils/contexts/App/AppContext";

const styles = (themeSettings: any, showJustIcons: boolean) => {
  return {
    root: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    avatar: {
      marginRight: showJustIcons ? "0rem" : "0.7rem",
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
  const { sx = {}, showJustIcons = false } = props;
  const { theme } = useContext(AppContext);
  return (
    <ButtonComponent
      borderRadius={10}
      padding={1}
      sx={{ ...sx, ...styles(ThemeSettings(theme), showJustIcons).root }}
    >
      <Avatar sx={styles(ThemeSettings(theme), showJustIcons).avatar}>
        <LogoComponent width="2rem" />
      </Avatar>
      {!showJustIcons && (
        <Box sx={styles(ThemeSettings(theme), showJustIcons).userInfo}>
          <Typography variant="h6">Utkarsh Gupta</Typography>
          <Typography variant="subtitle1">@utkarsh1508999</Typography>
        </Box>
      )}
    </ButtonComponent>
  );
};

export default AccountMenu;

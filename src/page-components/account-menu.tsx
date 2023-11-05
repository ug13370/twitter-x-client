import { LogoComponent } from ".";
import { ThemeSettings } from "../theme";
import { useContext, useEffect, useState } from "react";
import { ButtonComponent, PopoverComponent } from "../core-components";
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

const PopoverContentStyles = (themeSettings: any) => {
  return {
    root: {
      padding: "0.6rem",
    },
  };
};

const PopoverContent = (props: any) => {
  const { userDetails = {} } = props;

  const { theme, loggingOut, logoutUserHandler } = useContext(AppContext);

  const handleLogoutBtnClick = () => {
    logoutUserHandler();
  };

  return (
    <Box sx={{ ...PopoverContentStyles(ThemeSettings(theme)).root }}>
      <ButtonComponent
        padding="0.7"
        fullWidth={true}
        borderRadius={10}
        loading={loggingOut}
        onClick={handleLogoutBtnClick}
      >
        Log Out {userDetails.user_id}
      </ButtonComponent>
    </Box>
  );
};

const AccountMenu = (props: any) => {
  const { sx = {}, showJustIcons = false, userDetails = {} } = props;

  const { theme } = useContext(AppContext);

  const [popoverAnchorEl, setPopoverAnchorEl] =
    useState<HTMLButtonElement | null>(null);

  const handleClickOnAccountButton = (e: any) => {
    setPopoverAnchorEl(e.currentTarget);
  };

  return (
    <>
      <ButtonComponent
        padding={1}
        borderRadius={10}
        sx={{ ...sx, ...styles(ThemeSettings(theme), showJustIcons).root }}
        onClick={handleClickOnAccountButton}
      >
        <Avatar sx={styles(ThemeSettings(theme), showJustIcons).avatar}>
          <LogoComponent width="2rem" />
        </Avatar>
        {!showJustIcons && (
          <Box sx={styles(ThemeSettings(theme), showJustIcons).userInfo}>
            <Typography variant="h6">{userDetails.name}</Typography>
            <Typography variant="subtitle1">{userDetails.user_id}</Typography>
          </Box>
        )}
      </ButtonComponent>
      <PopoverComponent
        borderRadius={2.5}
        id="accountMenuPopover"
        anchorEl={popoverAnchorEl}
        handleClose={() => {
          setPopoverAnchorEl(null);
        }}
        content={<PopoverContent userDetails={userDetails} />}
      />
    </>
  );
};

export default AccountMenu;

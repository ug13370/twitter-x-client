import { Avatar, Box, Card, Typography } from "@mui/material";
import { ButtonComponent } from "../core-components";
import { LogoComponent } from ".";
import { ThemeSettings } from "../theme";
import { useContext } from "react";
import AppContext from "../utils/contexts/App/AppContext";

const styles = (themeSettings: any) => {
  return {
    root: {
      margin: "2rem",
      height: "20rem",
      display: "flex",
      flexDirection: "column",
      boxShadow: themeSettings.shadows[4],
      borderRadius: "1rem",
      "> *:first-child": {
        padding: "0.6rem 1.2rem 0.6rem 1.2rem",
        boxShadow: "0 6px 5px -5px rgba(0,0,0,0.15)",
      },
      ".userToFollowList": {
        display: "flex",
        flexDirection: "column",
        height: "16rem",
        overflowY: "auto",
        "> *:first-child": {
          marginTop: "0.2rem",
        },
        ".userToFollow": {
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "0rem 1.2rem 1.2rem 1.2rem",
          gap: "2rem",
          ".userInfo": {
            gap: "1rem",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            ".avatar": {
              width: "2.8rem",
              height: "2.8rem",
              boxShadow: themeSettings.shadows[4],
              backgroundColor: themeSettings.palette.background.alt,
            },
          },
        },
      },
    },
  };
};

const WhoToFollowCardComponent = () => {
  const { theme } = useContext(AppContext);

  const content = () => {
    return (
      <Box className="userToFollowList">
        {[1, 2, 3, 4, 5].map((elem) => {
          return (
            <Box className="userToFollow">
              <Box className="userInfo">
                <Avatar className="avatar">
                  <LogoComponent width="2rem" />
                </Avatar>
                <Box>
                  <Typography variant="h6">Utkarsh Gupta</Typography>
                  <Typography variant="subtitle1">@utkarsh1508999</Typography>
                </Box>
              </Box>
              <ButtonComponent borderRadius={5} padding={0.5} fullWidth={false}>
                +Follow
              </ButtonComponent>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <Card sx={styles(ThemeSettings(theme)).root}>
      <Typography variant="h3">Who to follow</Typography>
      {content()}
    </Card>
  );
};

export default WhoToFollowCardComponent;

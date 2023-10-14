import { LogoComponent } from ".";
import { useContext } from "react";
import { ThemeSettings } from "../theme";
import { ButtonComponent } from "../core-components";
import AppContext from "../utils/contexts/App/AppContext";
import { Avatar, Box, Card, Divider, Typography } from "@mui/material";

const styles = (themeSettings: any, lgMatches: boolean) => {
  return {
    root: {
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
        padding: "0.5rem 0rem",
        ".userToFollow": {
          display: "flex",
          alignItems: "center",
          flexDirection: lgMatches ? "column" : "row",
          justifyContent: "space-between",
          padding: "0rem 0.8rem",
          gap: "1rem",
          ".userInfo": {
            gap: "0.6rem",
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
        ".divider": {
          margin: "0.7rem 1.5rem",
        },
      },
    },
  };
};

const WhoToFollowCardComponent = (props: any) => {
  const { sx = {}, lgMatches = false } = props;
  const { theme } = useContext(AppContext);

  const content = () => {
    return (
      <Box className="userToFollowList">
        {[1, 2, 3, 4, 5].map((data: number, index: number) => {
          return (
            <>
              <Box key={index} className="userToFollow">
                <Box className="userInfo">
                  <Avatar className="avatar">
                    <LogoComponent width="2rem" />
                  </Avatar>
                  <Box>
                    <Typography variant="h6">Utkarsh Gupta</Typography>
                    <Typography variant="subtitle1">@utkarsh1508999</Typography>
                  </Box>
                </Box>
                <ButtonComponent
                  padding={0.5}
                  borderRadius={5}
                  fullWidth={true}
                  variant="outlined"
                >
                  +Follow
                </ButtonComponent>
              </Box>
              {index !== 4 && <Divider className="divider" />}
            </>
          );
        })}
      </Box>
    );
  };

  return (
    <Card sx={{ ...sx, ...styles(ThemeSettings(theme), lgMatches).root }}>
      <Typography variant="h3">Who to follow</Typography>
      {content()}
    </Card>
  );
};

export default WhoToFollowCardComponent;

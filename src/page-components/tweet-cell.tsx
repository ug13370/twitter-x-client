import { Avatar, Box, Typography } from "@mui/material";
import { LogoComponent } from ".";
import { ThemeSettings } from "../theme";
import { useContext } from "react";
import AppContext from "../utils/contexts/App/AppContext";
import { ButtonComponent } from "../core-components";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const styles = (themeSettings: any) => {
  return {
    root: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",

      padding: "1.2rem",
    },
    avatar: {
      marginRight: "0.7rem",
      width: "2.8rem",
      height: "2.8rem",
      boxShadow: themeSettings.shadows[4],
      backgroundColor: themeSettings.palette.background.alt,
    },
    content: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      ".user-section": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      ".user-actions": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem",
        ButtonComponent: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "0.2rem",
        },
      },
    },
  };
};

const SingleAction = (props: any) => {
  const { id = "", icon = <></>, data = "", onClick = () => {} } = props;
  const style = () => {
    return {
      root: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "0.3rem",
      },
    };
  };
  return (
    <ButtonComponent id={id} fullWidth={false} padding={0.4} borderRadius={5}>
      <Box sx={style().root}>
        {icon}
        {data}
      </Box>
    </ButtonComponent>
  );
};

const TweetCellComponent = (props: any) => {
  const {} = props;
  const { theme } = useContext(AppContext);
  return (
    <Box sx={styles(ThemeSettings(theme)).root}>
      <Avatar sx={styles(ThemeSettings(theme)).avatar}>
        <LogoComponent width="2rem" />
      </Avatar>
      <Box sx={styles(ThemeSettings(theme)).content}>
        <div className="user-section">
          <div className="user-info">
            <Typography variant="h6">Narendra Modi</Typography>
            <Typography variant="subtitle1">@narendramodi</Typography>
          </div>
          <ButtonComponent
            id="tweetThreeDots"
            fullWidth={false}
            borderRadius={10}
            padding={0}
          >
            <MoreHorizOutlinedIcon />
          </ButtonComponent>
        </div>
        <Typography variant="body1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus natus,
          odio quisquam, repellat ratione asperiores aperiam excepturi dolores
          inventore labore nemo distinctio corporis exercitationem consequuntur
          libero, dolorum quod! Quasi, libero!
        </Typography>
        <div className="user-actions">
          <SingleAction
            id={"comment"}
            icon={<ModeCommentOutlinedIcon />}
            data={"7,953"}
          />
          <SingleAction
            id={"like"}
            icon={<FavoriteBorderOutlinedIcon />}
            data={"129.7k"}
          />
        </div>
      </Box>
    </Box>
  );
};

export default TweetCellComponent;

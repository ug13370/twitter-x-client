import moment from "moment";
import NewPost from "./new-post";
import { LogoComponent } from ".";
import { ThemeSettings } from "../theme";
import { useContext, useState } from "react";
import { ButtonComponent } from "../core-components";
import { Avatar, Box, Typography } from "@mui/material";
import AppContext from "../utils/contexts/App/AppContext";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const styles = (themeSettings: any) => {
  return {
    root: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
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
      flex: 1,
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
  const {
    sx = {},
    id = "",
    data = "",
    icon = <></>,
    onClick = () => {},
  } = props;
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
    <ButtonComponent
      id={id}
      padding={0.4}
      sx={{ ...sx }}
      borderRadius={5}
      fullWidth={false}
      onClick={onClick}
    >
      <Box sx={style().root}>
        {icon}
        {data}
      </Box>
    </ButtonComponent>
  );
};

const TweetCellComponent = (props: any) => {
  // Props
  const {
    tweet = null,
    compKey = "",
    className = "",
    commentBoxOpenedForTweetId,
    creatingANewComment = false,
    setCommentBoxOpenedForTweetId,
    apiCall_createANewTweet = (payload: any) => {},
  } = props;

  // Contexts
  const { theme } = useContext(AppContext);

  // States
  const [creatingANewTweet, setCreatingANewTweet] = useState(false);

  const {
    medias,
    user_id,
    tweet_id,
    user_name,
    createdAt,
    no_of_likes,
    text_content,
    no_of_comments,
  } = tweet;

  return (
    <>
      {tweet && (
        <>
          <Box
            key={compKey}
            className={className}
            sx={styles(ThemeSettings(theme)).root}
          >
            <Avatar sx={styles(ThemeSettings(theme)).avatar}>
              <LogoComponent width="2rem" />
            </Avatar>
            <Box sx={styles(ThemeSettings(theme)).content}>
              <div className="user-section">
                <div className="user-info">
                  <Typography variant="h6">{user_name}</Typography>
                  <Typography variant="subtitle1">{user_id}</Typography>
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
              <Typography variant="body1">{text_content}</Typography>
              <Typography variant="subtitle1">
                {moment(createdAt).format("h:mm A · MMM D, YYYY")}
              </Typography>
              <div className="user-actions">
                <SingleAction
                  id={"comment"}
                  data={no_of_comments}
                  sx={{ paddingLeft: "100rem" }}
                  icon={<ModeCommentOutlinedIcon />}
                  onClick={() => {
                    setCommentBoxOpenedForTweetId(tweet_id);
                  }}
                />
                <SingleAction
                  id={"like"}
                  icon={<FavoriteBorderOutlinedIcon />}
                  data={no_of_likes}
                />
              </div>
            </Box>
          </Box>
          {tweet_id === commentBoxOpenedForTweetId && (
            <NewPost
              type="comment"
              closeNewPostSection={() => {
                setCommentBoxOpenedForTweetId("");
              }}
              creatingTweet={creatingANewComment}
              apiCall_createANewTweet={(payload: any) => {
                apiCall_createANewTweet({
                  parent_tweet_id: tweet_id,
                  ...payload,
                });
              }}
            />
          )}
        </>
      )}
    </>
  );
};

export default TweetCellComponent;

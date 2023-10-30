import {
  Box,
  Avatar,
  ImageList,
  Typography,
  ImageListItem,
} from "@mui/material";
import moment from "moment";
import NewPost from "./new-post";
import { LogoComponent } from ".";
import { ThemeSettings } from "../theme";
import { useContext, useState } from "react";
import { ButtonComponent } from "../core-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
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

const ImageListComp = (props: any) => {
  const { medias = [] } = props;
  return (
    <ImageList
      gap={10}
      variant="masonry"
      sx={{ marginBottom: "0.7rem" }}
      cols={medias.length > 1 ? 2 : 1}
    >
      {medias.map((item: any) => (
        <ImageListItem key={item.src} sx={{ position: "relative" }}>
          <img
            alt={"Imagr"}
            loading="lazy"
            src={item.data}
            style={{ borderRadius: 15 }}
          />
        </ImageListItem>
      ))}
    </ImageList>
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
    apiCall_giveFeedbackToATweet = (payload: any) => {},
  } = props;

  // Contexts
  const { theme } = useContext(AppContext);

  const {
    medias,
    user_id,
    tweet_id,
    user_name,
    createdAt,
    no_of_likes,
    text_content,
    no_of_comments,
    viewer_details,
  } = tweet;

  const { user_liked_this_tweet } = viewer_details;

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
              <ImageListComp medias={medias} />
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
                  data={no_of_likes}
                  icon={
                    user_liked_this_tweet ? (
                      <FavoriteIcon />
                    ) : (
                      <FavoriteBorderOutlinedIcon />
                    )
                  }
                  onClick={() => {
                    apiCall_giveFeedbackToATweet({
                      tweet_id,
                      feedback: !user_liked_this_tweet,
                    });
                  }}
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

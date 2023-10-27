import {
  Box,
  Avatar,
  Divider,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import { LogoComponent } from ".";
import { ThemeSettings } from "../theme";
import { ButtonComponent } from "../core-components";
import AppContext from "../utils/contexts/App/AppContext";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import EmojiPicker, { EmojiStyle, Theme } from "emoji-picker-react";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { forwardRef, useContext, useImperativeHandle, useState } from "react";

const styles = (themeSettings: any) => {
  return {
    root: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      padding: "1.2rem",

      ".avatar": {
        marginRight: "0.7rem",
        width: "2.8rem",
        height: "2.8rem",
        boxShadow: themeSettings.shadows[4],
        backgroundColor: themeSettings.palette.background.alt,
      },
      ".text-box-wrapper": {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        "& .MuiInput-root": {
          ".input": { fontSize: "1.5rem" },
        },
        ".divider": {
          marginBottom: "0.7rem",
          width: "100%",
        },
        ".post-actions": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          ".post-action": {
            display: "flex",
            gap: "0.8rem",
          },
        },
      },
    },
  };
};

const NewPost = forwardRef((props: any, ref: any) => {
  // Props
  const {
    sx = {},
    type = "post", // post/comment
    className = "",
    creatingTweet = false,
    closeNewPostSection = () => {},
    apiCall_createANewTweet = (payload: any) => {},
  } = props;

  // Contexts
  const { theme } = useContext(AppContext);

  // States
  const [tweetContent, setTweetContent] = useState("");
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  // Imperatives
  useImperativeHandle(ref, () => ({
    reset() {
      setTweetContent("");
    },
  }));

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweetContent(e.target.value);
    if (e.target.scrollHeight > e.target.clientHeight) {
      e.target.rows = e.target.rows + 1;
    }
  };

  const handleCreateNewPostBtnClicked = () => {
    if (tweetContent === "") return;
    else {
      let payload = { text_content: tweetContent, type };
      apiCall_createANewTweet(payload);
    }
  };

  const handleCancelPostBtnClicked = () => {
    closeNewPostSection();
  };

  // Emoji popover
  const handleAddEmoticonIconClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseEmoticonPanel = () => {
    setAnchorEl(null);
  };

  const handleEmojiClick = (emojiData: any) => {
    setTweetContent((prevTweetContent: any) => {
      return (
        prevTweetContent +
        (emojiData.isCustom ? emojiData.unified : emojiData.emoji)
      );
    });
  };

  return (
    <Box
      sx={{ ...sx, ...styles(ThemeSettings(theme)).root }}
      className={className}
    >
      <Avatar className="avatar">
        <LogoComponent width="2rem" />
      </Avatar>
      <Box className="text-box-wrapper">
        <TextField
          multiline
          minRows={2}
          maxRows={10}
          id="new-post"
          fullWidth={true}
          variant="standard"
          value={tweetContent}
          InputProps={{
            classes: {
              input: "input",
            },
            disableUnderline: true,
          }}
          onChange={handleTextChange}
          disabled={creatingTweet}
          placeholder={
            type === "post" ? "What is happening?" : "Comment on this post"
          }
        />
        <Divider className="divider" />
        <Box className="post-actions">
          <Box className="post-icons">
            <ButtonComponent
              padding={0.4}
              fullWidth={false}
              borderRadius={10}
              id="insert-medias"
            >
              <WallpaperIcon />
            </ButtonComponent>

            <ButtonComponent
              padding={0.4}
              fullWidth={false}
              borderRadius={10}
              id="insert-emoticons"
              onClick={handleAddEmoticonIconClick}
            >
              <InsertEmoticonIcon />
            </ButtonComponent>

            <Popover
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              anchorEl={anchorEl}
              id="emoticon-popover"
              open={Boolean(anchorEl)}
              onClose={handleCloseEmoticonPanel}
            >
              <EmojiPicker
                theme={Theme.AUTO}
                onEmojiClick={handleEmojiClick}
                autoFocusSearch={false}
                emojiStyle={EmojiStyle.NATIVE}
              />
            </Popover>
          </Box>
          <Box className="post-action">
            <ButtonComponent
              padding={0.7}
              borderRadius={10}
              fullWidth={false}
              variant="contained"
              loading={creatingTweet}
              onClick={handleCreateNewPostBtnClicked}
            >
              <Typography variant="h6" fontSize={18}>
                {type === "post" ? "Post" : "Comment"}
              </Typography>
            </ButtonComponent>
            {type === "comment" && (
              <ButtonComponent
                padding={0.7}
                borderRadius={10}
                fullWidth={false}
                variant="outlined"
                onClick={handleCancelPostBtnClicked}
              >
                <Typography variant="h6" fontSize={18}>
                  Cancel
                </Typography>
              </ButtonComponent>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
});

export default NewPost;

import { LogoComponent } from ".";
import { ThemeSettings } from "../theme";
import { useContext, useState } from "react";
import { ButtonComponent } from "../core-components";
import AppContext from "../utils/contexts/App/AppContext";
import { Avatar, Box, Divider, TextField, Typography } from "@mui/material";

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
        alignItems: "flex-start",
        width: "100%",
        "& .MuiInput-root": {
          ".input": { fontSize: "1.5rem" },
        },
        ".divider": {
          marginBottom: "0.7rem",
          width: "100%",
        },
        ".post-btn": {
          alignSelf: "flex-end",
        },
      },
    },
  };
};

const NewPost = (props: any) => {
  // Props
  const {
    sx = {},
    className = "",
    creatingANewTweet = true,
    apiCall_createANewTweet = (payload: any) => {},
  } = props;

  // Contexts
  const { theme } = useContext(AppContext);

  // States
  const [tweetContent, setTweetContent] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweetContent(e.target.value);
    if (e.target.scrollHeight > e.target.clientHeight) {
      e.target.rows = e.target.rows + 1;
    }
  };

  const handleCreateNewPostBtnClicked = () => {
    if (tweetContent === "") return;
    else {
      let payload = { type: "post", text_content: tweetContent };
      apiCall_createANewTweet(payload);
    }
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
          disabled={creatingANewTweet}
          placeholder="What is happening?"
        />
        <Divider className="divider" />
        <ButtonComponent
          padding={1.1}
          borderRadius={10}
          fullWidth={false}
          variant="contained"
          className="post-btn"
          loading={creatingANewTweet}
          onClick={handleCreateNewPostBtnClicked}
        >
          <Typography variant="h6" fontSize={18}>
            Post
          </Typography>
        </ButtonComponent>
      </Box>
    </Box>
  );
};

export default NewPost;

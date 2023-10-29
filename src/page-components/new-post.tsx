import {
  useRef,
  useState,
  forwardRef,
  useContext,
  useImperativeHandle,
} from "react";
import {
  Box,
  Avatar,
  Divider,
  Popover,
  TextField,
  Typography,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { LogoComponent } from ".";
import { ThemeSettings } from "../theme";
import CloseIcon from "@mui/icons-material/Close";
import { ButtonComponent } from "../core-components";
import AppContext from "../utils/contexts/App/AppContext";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import EmojiPicker, { EmojiStyle, Theme } from "emoji-picker-react";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

const styles = (themeSettings: any) => {
  return {
    root: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      padding: "1.2rem",
      // maxHeight:"20%",

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

const PostIcons = (props: any) => {
  const { setTweetContent, handleFileSelections } = props;

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const fileRef = useRef<any>(null);

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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle the selected file(s) here
    const selectedFiles = event.target.files;

    // Call your function to handle the selected files
    handleFileSelections(selectedFiles);
  };

  return (
    <Box className="post-icons">
      <ButtonComponent
        padding={0.4}
        fullWidth={false}
        borderRadius={10}
        id="insert-medias"
        onClick={() => {
          console.log("clicked...");
          fileRef.current.click();
        }}
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

      <input
        type="file"
        ref={fileRef}
        multiple={true}
        id="selectImages"
        onChange={handleFileChange}
        style={{ visibility: "hidden" }}
        accept="image/jpeg, image/png, image/gif"
      />
    </Box>
  );
};

const PostActions = (props: any) => {
  const {
    type,
    tweetContent,
    imagePreviews,
    creatingTweet,
    closeNewPostSection,
    apiCall_createANewTweet,
  } = props;

  const handleCreateNewPostBtnClicked = () => {
    if (tweetContent === "") return;
    else {
      let payload = { text_content: tweetContent, type };
      apiCall_createANewTweet(payload, type);
    }
  };

  const handleCancelPostBtnClicked = () => {
    closeNewPostSection();
  };

  return (
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
  );
};

const ImageListComp = (props: any) => {
  const { imagePreviews = [], removePreview = (name: string) => {} } = props;
  return (
    <ImageList
      gap={10}
      variant="masonry"
      sx={{ marginBottom: "0.7rem" }}
      cols={imagePreviews.length > 1 ? 2 : 1}
    >
      {imagePreviews.map((item: any) => (
        <ImageListItem key={item.src} sx={{ position: "relative" }}>
          <img
            src={item.src}
            loading="lazy"
            alt={item.title}
            style={{ borderRadius: 15 }}
          />
          <CloseIcon
            onClick={() => {
              removePreview(item.name);
            }}
            sx={{
              opacity: 0.5,
              top: "0.5rem",
              right: "0.5rem",
              cursor: "pointer",
              position: "absolute",
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const NewPost = forwardRef((props: any, ref: any) => {
  // Props
  const {
    sx = {},
    type = "post", // post/comment
    className = "",
    creatingTweet = false,
    closeNewPostSection = () => {},
    apiCall_createANewTweet = (payload: any, type: string) => {},
  } = props;

  // Contexts
  const { theme } = useContext(AppContext);

  // States
  const [tweetContent, setTweetContent] = useState("");
  const [imagePreviews, setImagePreviews] = useState<any>([]);

  // Imperatives
  useImperativeHandle(ref, () => ({
    reset() {
      setTweetContent("");
      setImagePreviews([]);
    },
  }));

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweetContent(e.target.value);
    if (e.target.scrollHeight > e.target.clientHeight) {
      e.target.rows = e.target.rows + 1;
    }
  };

  const handleFileSelections = (selectedFiles: any) => {
    if (selectedFiles.length + imagePreviews.length > 4) return;
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const reader = new FileReader();

      reader.onload = (event: any) => {
        const dataURL = event.target.result;
        const image = {
          src: dataURL,
          title: "Image",
          type: "preview",
          name: selectedFiles[i].name,
        };

        setImagePreviews((prevVal: any) => {
          prevVal.push(image);
          return [...prevVal];
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const removePreview = (name: string) => {
    setImagePreviews((prevVal: any) => {
      return prevVal.filter((val: any) => val.name !== name);
    });
  };

  return (
    <Box
      className={className}
      sx={{ ...sx, ...styles(ThemeSettings(theme)).root }}
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
        <ImageListComp
          imagePreviews={imagePreviews}
          removePreview={removePreview}
        />
        <Divider className="divider" />
        <Box className="post-actions">
          <PostIcons
            setTweetContent={setTweetContent}
            handleFileSelections={handleFileSelections}
          />
          <PostActions
            type={type}
            tweetContent={tweetContent}
            imagePreviews={imagePreviews}
            creatingTweet={creatingTweet}
            closeNewPostSection={closeNewPostSection}
            apiCall_createANewTweet={apiCall_createANewTweet}
          />
        </Box>
      </Box>
    </Box>
  );
});

export default NewPost;

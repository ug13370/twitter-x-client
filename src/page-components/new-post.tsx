import { Avatar, Box, Divider, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeSettings } from "../theme";
import AppContext from "../utils/contexts/App/AppContext";
import { LogoComponent } from ".";
import { ButtonComponent } from "../core-components";

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
  const { className = "", sx = {} } = props;
  const { theme } = useContext(AppContext);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.scrollHeight > e.target.clientHeight) {
      e.target.rows = e.target.rows + 1;
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
          inputProps={{ maxLength: 200 }}
          InputProps={{
            classes: {
              input: "input",
            },
            disableUnderline: true,
          }}
          id="new-post"
          fullWidth={true}
          placeholder="What is happening?"
          variant="standard"
          onChange={handleTextChange}
        />
        <Divider className="divider" />
        <ButtonComponent
          padding={1.1}
          borderRadius={10}
          fullWidth={false}
          variant="contained"
          className="post-btn"
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

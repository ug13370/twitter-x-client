import { Avatar, Box, Button, Typography } from "@mui/material";
import { ButtonComponent } from "../core-components";

const styles = () => {
  return {
    root: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    avatar: {
      marginRight: "0.7rem",
    },
    userInfo: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  };
};

const AccountMenu = (props: any) => {
  const { sx } = props;
  return (
    <ButtonComponent
      borderRadius={10}
      padding={1}
      sx={{ ...sx, ...styles().root }}
    >
      <Avatar sx={styles().avatar}>
        <Typography variant="h5">UG</Typography>
      </Avatar>
      <Box sx={styles().userInfo}>
        <Typography variant="h6">Utkarsh Gupta</Typography>
        <Typography variant="subtitle1">@utkarsh1508999</Typography>
      </Box>
    </ButtonComponent>
  );
};

export default AccountMenu;

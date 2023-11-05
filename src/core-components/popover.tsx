import { useContext } from "react";
import { Popover } from "@mui/material";
import { ThemeSettings } from "../theme";
import AppContext from "../utils/contexts/App/AppContext";

const Styles = (themeSettings: any, borderRadius: number) => {
  return {
    root: {
      "> *.MuiPaper-root": {
        borderRadius: borderRadius,
      },
    },
  };
};

const PopoverComponent = (props: any) => {
  const {
    id = "popover",
    content = null,
    anchorEl = null,
    borderRadius = 0,
    handleClose = () => {},
  } = props;

  const { theme } = useContext(AppContext);

  return (
    <Popover
      id={id}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={Boolean(anchorEl)}
      sx={{ ...Styles(ThemeSettings(theme), borderRadius).root }}
    >
      {content}
    </Popover>
  );
};

export default PopoverComponent;

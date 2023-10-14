import { Button } from "@mui/material";
import { ThemeSettings } from "../theme";

const styles = (
  typography: any,
  borderRadius: any,
  padding: number,
  fontSize: string,
  showJustIcon: boolean
) => {
  return {
    typography: typography,
    borderRadius: borderRadius,
    padding: `${padding / 2}rem ${padding}rem`,
    fontSize: `${fontSize}rem`,
    "> .MuiButton-startIcon": {
      marginRight: showJustIcon ? "0px" : "8px",
      svg: {
        fontSize: `${fontSize}rem`,
      },
    },
  };
};

const ButtonComponent = (props: any) => {
  const {
    sx = {},
    variant,
    id = "",
    children,
    padding = 0,
    fontSize = 1,
    className = "",
    active = false,
    disabled = false,
    fullWidth = true,
    startIcon = null,
    onClick = () => {},
    showJustIcon = false,
    activeStartIcon = null,
    typography = "normalButton",
    borderRadius = ThemeSettings("light").shape.borderRadius,
  } = props;
  return (
    <Button
      key={id}
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      fullWidth={fullWidth}
      className={className}
      startIcon={active ? activeStartIcon : startIcon}
      sx={{
        ...sx,
        ...styles(typography, borderRadius, padding, fontSize, showJustIcon),
      }}
    >
      {!showJustIcon && children}
    </Button>
  );
};

export default ButtonComponent;

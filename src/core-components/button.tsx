import { Button } from "@mui/material";
import { ThemeSettings } from "../theme";

const styles = (
  typography: any,
  borderRadius: any,
  padding: number,
  fontSize: string
) => {
  return {
    typography: typography,
    borderRadius: borderRadius,
    padding: `${padding / 2}rem ${padding}rem`,
    fontSize: `${fontSize}rem`,
    "> .MuiButton-startIcon svg": {
      fontSize: `${fontSize}rem`,
    },
  };
};

const ButtonComponent = (props: any) => {
  const {
    sx = {},
    variant,
    id = "",
    children,
    fontSize = 1,
    active = false,
    disabled = false,
    padding = 0,
    fullWidth = true,
    startIcon = <></>,
    onClick = () => {},
    activeStartIcon = <></>,
    typography = "normalButton",
    borderRadius = ThemeSettings("light").shape.borderRadius,
  } = props;
  return (
    <Button
      id={id}
      key={id}
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      fullWidth={fullWidth}
      startIcon={active ? activeStartIcon : startIcon}
      sx={{ ...sx, ...styles(typography, borderRadius, padding, fontSize) }}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;

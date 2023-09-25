import { Button } from "@mui/material";
import { ThemeSettings } from "../theme";

const styles = (
  typography: any,
  borderRadius: any,
  scale: number,
  padding: number
) => {
  return {
    typography: typography,
    borderRadius: borderRadius,
    transform: `scale(${scale})`,
    padding: `${padding / 2}rem ${padding}rem`,
  };
};

const ButtonComponent = (props: any) => {
  const {
    variant,
    children,
    scale = 1,
    disabled = false,
    padding = "0rem",
    fullWidth = true,
    startIcon = <></>,
    onClick = () => {},
    typography = "normalButton",
    borderRadius = ThemeSettings("light").shape.borderRadius,
  } = props;
  return (
    <Button
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      fullWidth={fullWidth}
      startIcon={startIcon}
      sx={styles(typography, borderRadius, scale, padding)}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;

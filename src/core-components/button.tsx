import { Button } from "@mui/material";
import { ThemeSettings } from "../theme";

const styles = (typography: any, borderRadius: any) => {
  return {
    typography: typography,
    borderRadius: borderRadius,
  };
};

const ButtonComponent = (props: any) => {
  const {
    variant,
    children,
    disabled = false,
    onClick = () => {},
    typography = "normalButton",
    borderRadius = ThemeSettings("light").shape.borderRadius,
  } = props;
  return (
    <Button
      fullWidth
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      sx={styles(typography, borderRadius)}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;

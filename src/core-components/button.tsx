import { Button } from "@mui/material";

const ButtonComponent = (props: any) => {
  const {
    children,
    variant,
    typography = "normalButton",
    disabled = false,
  } = props;
  return (
    <Button
      fullWidth
      variant={variant}
      disabled={disabled}
      sx={{ typography: typography }}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;

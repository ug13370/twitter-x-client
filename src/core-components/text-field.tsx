import { TextField } from "@mui/material";
import { ThemeSettings } from "../theme";

const styles = (error: boolean, borderRadius: number) => {
  return {
    "& .MuiInputBase-root": {
      backgroundColor: "transparent",
      border: "1.5px solid #cfd9de",
      borderRadius: borderRadius,

      "&:before": { borderBottom: "none" },
      "&:after": { borderBottom: "none" },

      "&:hover": {
        backgroundColor: "transparent",
      },
      "&.Mui-focused": {
        borderColor: (theme: any) => theme.palette.primary.main,
        backgroundColor: "transparent",
      },
    },
    ...(error && {
      "& .MuiInputBase-root": {
        borderColor: (theme: any) => theme.palette.error.main,
      },
    }),
  };
};

const TextFieldComponent = (props: any) => {
  const {
    id,
    label,
    error,
    type = "text",
    helperText = "",
    required = false,
    disabled = false,
    readOnly = false,
    defaultValue = "",
    borderRadius = ThemeSettings("light").shape.borderRadius,
  } = props;

  return (
    <TextField
      id={id}
      fullWidth
      type={type}
      label={label}
      error={error}
      variant="filled"
      sx={styles(error, borderRadius)}
      required={required}
      disabled={disabled}
      helperText={helperText}
      defaultValue={defaultValue}
      InputProps={{ disableUnderline: true, readOnly: readOnly }}
    />
  );
};

export default TextFieldComponent;

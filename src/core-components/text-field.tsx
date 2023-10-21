import { useState } from "react";
import { ThemeSettings } from "../theme";
import { TextField } from "@mui/material";

const styles = (error: boolean, borderRadius: number) => {
  return {
    "& .MuiInputBase-root": {
      backgroundColor: "transparent",
      border: "1.5px solid",
      borderColor: error ? (theme: any) => theme.palette.error.main : "#cfd9de",
      borderRadius: borderRadius,

      "&:before": { borderBottom: "none" },
      "&:after": { borderBottom: "none" },

      "&:hover": {
        backgroundColor: "transparent",
      },
      "&.Mui-focused": {
        borderColor: error
          ? (theme: any) => theme.palette.error.main
          : (theme: any) => theme.palette.primary.main,
        backgroundColor: "transparent",
      },
    },
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
    endAdornment = null,
    onChange = () => {},
    startAdornment = null,
    borderRadius = ThemeSettings("light").shape.borderRadius,
    value = { value: "", error: false, id: "", helperText: "" },
  } = props;

  const [focused, setFocused] = useState(false);

  return (
    <TextField
      id={id}
      fullWidth
      type={type}
      label={label}
      error={error}
      variant="filled"
      value={value.value}
      required={required}
      disabled={disabled}
      helperText={helperText}
      onFocus={() => setFocused(true)}
      sx={styles(error, borderRadius)}
      onChange={(e) => onChange(value.id, e.target.value)}
      onBlur={() => {
        if (value.value === "") setFocused(false);
      }}
      InputProps={{
        readOnly: readOnly,
        disableUnderline: true,
        endAdornment: endAdornment,
        startAdornment: focused ? startAdornment : null,
      }}
    />
  );
};

export default TextFieldComponent;

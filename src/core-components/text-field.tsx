import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles: any = makeStyles((theme: any) => ({
  root: {
    "& .MuiInputBase-root": {
      backgroundColor: "transparent",
      border: "1.5px solid #cfd9de",
      borderRadius: theme.shape.borderRadius,

      "&:before": { borderBottom: "none" },
      "&:after": { borderBottom: "none" },

      "&:hover": {
        backgroundColor: "transparent",
      },
      "&.Mui-focused": {
        borderColor: theme.palette.primary.main,
        backgroundColor: "transparent",
      },
    },
  },
  error: {
    "& .MuiInputBase-root": {
      borderColor: theme.palette.error.main,
    },
  },
}));

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
  } = props;
  const classes = useStyles();

  // Conditionally add the error class if error is true
  const rootClassName = error
    ? `${classes.root} ${classes.error}`
    : classes.root;

  return (
    <TextField
      id={id}
      fullWidth
      type={type}
      label={label}
      error={error}
      variant="filled"
      required={required}
      disabled={disabled}
      helperText={helperText}
      className={rootClassName}
      defaultValue={defaultValue}
      InputProps={{ disableUnderline: true, readOnly: readOnly }}
    />
  );
};

export default TextFieldComponent;

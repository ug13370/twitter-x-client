import { DatePicker } from "@mui/x-date-pickers";
import { ThemeSettings } from "../theme";

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

const DatePickerComponent = (props: any) => {
  const {
    label = "",
    error = false,
    helperText = "",
    required = false,
    disabled = false,
    readOnly = false,
    onChange = () => {},
    startingView = "year",
    views = ["year", "month", "day"],
    borderRadius = ThemeSettings("light").shape.borderRadius,
    value = { value: "", error: false, id: "", helperText: "" },
  } = props;
  return (
    <DatePicker
      label={label}
      views={views}
      disabled={disabled}
      readOnly={readOnly}
      format="DD/MM/YYYY"
      value={value.value}
      onChange={(val: any) => {
        onChange(value.id, val.$d);
      }}
      openTo={startingView}
      slotProps={{
        textField: {
          error: error,
          fullWidth: true,
          variant: "filled",
          required: required,
          helperText: helperText,
          sx: { ...styles(error, borderRadius) },
          InputProps: { disableUnderline: true, readOnly: readOnly },
        },
      }}
    />
  );
};

export default DatePickerComponent;

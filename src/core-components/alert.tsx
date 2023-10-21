import { useContext } from "react";
import { Alert, Typography } from "@mui/material";
import AlertContext from "../utils/contexts/Alert/AlertContext";

const AlertComponent = () => {
  const { alert, resetAlert } = useContext(AlertContext);

  return (
    <Alert
      onClose={resetAlert}
      severity={alert.type}
      variant={alert.variant}
      sx={{ borderRadius: 2, width: "100%" }}
    >
      <Typography variant="h6">{alert.message}</Typography>
    </Alert>
  );
};

export default AlertComponent;

import { Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles: any = makeStyles((theme: any) => ({
  root: {
    width: "100%",
  },
}));

const StackComponent = (props: any) => {
  const {
    children,
    spacing = 2,
    direction = "column",
    alignItems = "center",
    justifyContent = "center",
  } = props;

  const classes = useStyles();
  return (
    <Stack
      spacing={spacing}
      direction={direction}
      alignItems={alignItems}
      className={classes.root}
      justifyContent={justifyContent}
    >
      {children}
    </Stack>
  );
};

export default StackComponent;

import { Stack } from "@mui/material";

const styles: any = {
  width: "100%",
};

const StackComponent = (props: any) => {
  const {
    children,
    spacing = 2,
    direction = "column",
    alignItems = "center",
    justifyContent = "center",
  } = props;

  return (
    <Stack
      sx={styles}
      spacing={spacing}
      direction={direction}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </Stack>
  );
};

export default StackComponent;

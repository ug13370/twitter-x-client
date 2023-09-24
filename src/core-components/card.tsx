import StackComponent from "./stack";
import { ThemeSettings } from "../theme";
import { Card, CardActions, CardContent, Typography } from "@mui/material";

const styles = (
  padding: string,
  width: string,
  shadow: string,
  borderRadius: number
) => {
  return {
    width: width,
    padding: padding,
    boxShadow: shadow,
    borderRadius: borderRadius,
    "> *:not(:last-child)": {
      padding: `0rem 0rem ${padding} 0rem`,
    },
    "> *": {
      padding: "0rem",
    },
  };
};

const CardComponent = (props: any) => {
  const {
    logo = null,
    title = null,
    content = null,
    actions = null,
    width = "24rem",
    shadowLevel = 0,
    padding = "1.8rem",
    borderRadius = ThemeSettings("light").shape.borderRadius,
  } = props;

  return (
    <Card
      sx={styles(
        padding,
        width,
        ThemeSettings("light").shadows[shadowLevel],
        borderRadius
      )}
    >
      {(logo || title || content) && (
        <CardContent>
          <StackComponent alignItems="flex-start">
            {logo}
            {title && <Typography variant="h2">{title}</Typography>}
            {content}
          </StackComponent>
        </CardContent>
      )}
      {actions && (
        <CardActions>
          <StackComponent spacing={1}>{actions}</StackComponent>
        </CardActions>
      )}
    </Card>
  );
};

export default CardComponent;

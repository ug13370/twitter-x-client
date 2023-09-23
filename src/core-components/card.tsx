import { Card, CardActions, CardContent, Typography } from "@mui/material";
import StackComponent from "./stack";

const styles = (padding: string) => {
  return {
    width: "24rem",
    padding: padding,
    "> *:not(:last-child)": {
      padding: `0rem 0rem ${padding} 0rem`,
    },
    "> *": {
      padding: 0,
    },
  };
};

const CardComponent = (props: any) => {
  const {
    title = null,
    content = null,
    actions = null,
    padding = "1.8rem",
  } = props;
  return (
    <Card sx={styles(padding)}>
      {(title || content) && (
        <CardContent>
          <StackComponent alignItems="flex-start">
            {title && <Typography variant="h1">{title}</Typography>}
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

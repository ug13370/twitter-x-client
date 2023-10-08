import { Box } from "@mui/material";
import { TweetCellComponent } from "../page-components";

const styles = () => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
    },
  };
};

const HomePage = (props: any) => {
  const { sx } = props;
  return (
    <Box sx={{ ...sx, ...styles().root }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(() => {
        return <TweetCellComponent />;
      })}
    </Box>
  );
};

export default HomePage;

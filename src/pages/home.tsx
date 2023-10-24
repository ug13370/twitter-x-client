import {
  NewPostComponent,
  TweetCellComponent,
  TweetSkeletonComponent,
} from "../page-components";
import { ThemeSettings } from "../theme";
import { useContext, useEffect, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import AppContext from "../utils/contexts/App/AppContext";
import { DataNotFoundComponent } from "../core-components";
import { createANewTweet, fetchTimeline } from "../apis/home";

const styles = (themeSettings: any) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      ".header": {
        padding: "1.2rem",
      },
      ".tweets": {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        "> *.tweetCell": {
          margin: "1.2rem",
        },
        "> *.divider": {
          margin: "0rem 2.8rem",
        },
      },
      ".show-box-shadow": {
        boxShadow: "0 6px 3px -3px rgba(0,0,0,0.2)",
      },
    },
  };
};

const Header = (props: any) => {
  const { className } = props;
  return (
    <Box className={className}>
      <Typography variant="h4">Home</Typography>
    </Box>
  );
};

const TimelineLoader = () => {
  return (
    <>
      {[1, 2, 3].map((data: number, index: number) => {
        return (
          <>
            <TweetSkeletonComponent compKey={index} />
            {index !== 2 && <Divider className="divider" />}
          </>
        );
      })}
    </>
  );
};

const Timeline = (props: any) => {
  const { timeline } = props;
  return (
    <>
      {timeline.length === 0 && (
        <DataNotFoundComponent
          message="No tweets found in your timeline"
          subMessage="Let's follow some people 😁"
        />
      )}
      {timeline.length !== 0 &&
        timeline.map((tweet: number, index: number) => {
          return (
            <>
              <TweetCellComponent
                tweet={tweet}
                compKey={index}
                className="tweetCell"
              />
              {timeline.length - 1 !== index && <Divider className="divider" />}
            </>
          );
        })}
    </>
  );
};

const HomePage = (props: any) => {
  const { sx } = props;

  // States
  const [timeline, setTimeline] = useState<any>([]);

  // Loaders
  const [timelineFetching, setTimelineFetching] = useState(false);
  const [creatingANewTweet, setCreatingANewTweet] = useState(false);

  // Contexts
  const { theme } = useContext(AppContext);

  useEffect(() => {
    apiCall_fetchMyTimeLine();
  }, []);

  const apiCall_fetchMyTimeLine = () => {
    setTimelineFetching(true);
    fetchTimeline()
      .then((res: any) => {
        if (res.status === "success") {
          setTimeline([...res.details]);
          console.log("Timeline fetched", res);
        } else {
          setTimeline([]);
          console.log("Timeline fetching failed", res);
        }
      })
      .catch((error: any) => {
        console.log("apiCall_fetchMyTimeLine error:", error);
      })
      .finally(() => {
        setTimelineFetching(false);
      });
  };

  const apiCall_createANewTweet = (payload: any) => {
    setCreatingANewTweet(true);
    createANewTweet(payload)
      .then((res: any) => {
        console.log("New tweet created", res);
        apiCall_fetchMyTimeLine();
      })
      .catch((error: any) => {
        console.log("apiCall_createANewTweet error:", error);
      })
      .then(() => {
        setCreatingANewTweet(false);
      });
  };

  return (
    <Box sx={{ ...sx, ...styles(ThemeSettings(theme)).root }}>
      <Header className="header" />
      <NewPostComponent
        className="show-box-shadow"
        creatingANewTweet={creatingANewTweet}
        apiCall_createANewTweet={apiCall_createANewTweet}
      />
      <Box className="tweets">
        {timelineFetching && <TimelineLoader />}
        {!timelineFetching && <Timeline timeline={timeline} />}
      </Box>
    </Box>
  );
};

export default HomePage;

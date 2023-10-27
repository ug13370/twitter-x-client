import { ThemeSettings } from "../theme";
import NewPost from "../page-components/new-post";
import { Box, Divider, Typography } from "@mui/material";
import AppContext from "../utils/contexts/App/AppContext";
import { DataNotFoundComponent } from "../core-components";
import { createANewTweet, fetchTimeline } from "../apis/home";
import { useContext, useEffect, useRef, useState } from "react";
import { TweetCellComponent, TweetSkeletonComponent } from "../page-components";

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
  const {
    timeline = [],
    creatingANewComment,
    apiCall_createANewTweet = (payload: any) => {},
  } = props;
  const [commentBoxOpenedForTweetId, setCommentBoxOpenedForTweetId] =
    useState("");
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
                creatingANewComment={creatingANewComment}
                apiCall_createANewTweet={apiCall_createANewTweet}
                commentBoxOpenedForTweetId={commentBoxOpenedForTweetId}
                setCommentBoxOpenedForTweetId={setCommentBoxOpenedForTweetId}
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
  const [creatingANewComment, setCreatingANewComment] = useState(false);

  // Contexts
  const { theme } = useContext(AppContext);

  // Refs
  const newPostRef: any = useRef(null);

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
    if (payload.parent_tweet_id) setCreatingANewComment(true);
    else setCreatingANewTweet(true);

    createANewTweet(payload)
      .then((res: any) => {
        console.log("New tweet created", res);
        apiCall_fetchMyTimeLine();
      })
      .catch((error: any) => {
        console.log("apiCall_createANewTweet error:", error);
      })
      .finally(() => {
        setCreatingANewTweet(false);
        setCreatingANewComment(false);
        newPostRef.current.reset();
      });
  };

  return (
    <Box sx={{ ...sx, ...styles(ThemeSettings(theme)).root }}>
      <Header className="header" />
      <NewPost
        ref={newPostRef}
        className="show-box-shadow"
        creatingTweet={creatingANewTweet}
        apiCall_createANewTweet={apiCall_createANewTweet}
      />
      <Box className="tweets">
        {timelineFetching && <TimelineLoader />}
        {!timelineFetching && (
          <Timeline
            timeline={timeline}
            creatingANewComment={creatingANewComment}
            apiCall_createANewTweet={apiCall_createANewTweet}
          />
        )}
      </Box>
    </Box>
  );
};

export default HomePage;

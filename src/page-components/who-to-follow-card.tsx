import { LogoComponent, UserToFollowSkeleton } from ".";
import { useContext, useState } from "react";
import { ThemeSettings } from "../theme";
import { ButtonComponent, DataNotFoundComponent } from "../core-components";
import AppContext from "../utils/contexts/App/AppContext";
import { Avatar, Box, Card, Divider, Typography } from "@mui/material";
import { followUser, unfollowUser } from "../apis/home";

const styles = (themeSettings: any, lgMatches: boolean) => {
  return {
    root: {
      height: "auto",
      maxWidth: "20rem",
      display: "flex",
      flexDirection: "column",
      boxShadow: themeSettings.shadows[4],
      borderRadius: "1rem",
      "> *:first-child": {
        padding: "0.6rem 1.2rem 0.6rem 1.2rem",
        boxShadow: "0 6px 5px -5px rgba(0,0,0,0.15)",
      },
      ".userToFollowList": {
        display: "flex",
        flexDirection: "column",
        maxHeight: "16rem",
        overflow: "auto",
        padding: "0.5rem 0rem",
        ".userToFollow": {
          display: "flex",
          alignItems: lgMatches ? "flex-start" : "center",
          flexDirection: lgMatches ? "column" : "row",
          justifyContent: "space-between",
          padding: "0rem 0.8rem",
          gap: "1rem",
          ".userInfo": {
            gap: "0.6rem",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            ".avatar": {
              width: "2.8rem",
              height: "2.8rem",
              boxShadow: themeSettings.shadows[4],
              backgroundColor: themeSettings.palette.background.alt,
            },
          },
        },
        ".divider": {
          margin: "0.7rem 1.5rem",
        },
        ".noDataFound": {
          padding: "0rem 0.8rem",
        },
      },
    },
  };
};

const SingleUserToFollow = (props: any) => {
  const {
    index,
    name = "",
    userId = "",
    following = false,
    userFollowed = () => {},
    userUnfollowed = () => {},
  } = props;

  const [followingUser, setFollowingUser] = useState(false);
  const [unfollowingUser, setUnfollowingUser] = useState(false);

  const handleFollowButtonClick = () => {
    setFollowingUser(true);
    let payload = { followee_user_id: userId };
    followUser(payload)
      .then((res: any) => {
        if (res.status === "success") userFollowed(userId);
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {
        setFollowingUser(false);
      });
  };

  const handleUnfollowButtonClick = () => {
    setUnfollowingUser(true);
    let payload = { followee_user_id: userId };
    unfollowUser(payload)
      .then((res: any) => {
        if (res.status === "success") userUnfollowed(userId);
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {
        setUnfollowingUser(false);
      });
  };

  return (
    <Box key={index} className="userToFollow">
      <Box className="userInfo">
        <Avatar className="avatar">
          <LogoComponent width="2rem" />
        </Avatar>
        <Box>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle1">{userId}</Typography>
        </Box>
      </Box>
      <ButtonComponent
        padding={1}
        fullWidth={true}
        borderRadius={10}
        variant="outlined"
        loading={followingUser || unfollowingUser}
        onClick={() => {
          following ? handleUnfollowButtonClick() : handleFollowButtonClick();
        }}
      >
        {following ? "Unfollow" : "+Follow"}
      </ButtonComponent>
    </Box>
  );
};

const WhoToFollowCardComponent = (props: any) => {
  const {
    sx = {},
    lgMatches = false,
    usersToFollow = [],
    userFollowed = () => {},
    userUnfollowed = () => {},
    fetchingUsersToFollow = false,
  } = props;

  const { theme } = useContext(AppContext);

  const renderUsersToFollow = () => {
    return (
      <>
        {usersToFollow.length !== 0 &&
          usersToFollow.map((data: any, index: number) => {
            return (
              <>
                <SingleUserToFollow
                  index={index}
                  name={data.name}
                  userId={data.user_id}
                  following={data.following}
                  userFollowed={userFollowed}
                  userUnfollowed={userUnfollowed}
                />
                {index !== usersToFollow.length - 1 && (
                  <Divider className="divider" />
                )}
              </>
            );
          })}

        {usersToFollow.length === 0 && (
          <DataNotFoundComponent
            className="noDataFound"
            message="No one is available to follow"
            subMessage="Let's invite some people on TwitterX"
          />
        )}
      </>
    );
  };

  const content = () => {
    return (
      <Box className="userToFollowList">
        {fetchingUsersToFollow &&
          [1, 2, 3].map((data: number, index: number) => {
            return (
              <>
                <UserToFollowSkeleton />
                {index !== 2 && <Divider className="divider" />}
              </>
            );
          })}
        {!fetchingUsersToFollow && renderUsersToFollow()}
      </Box>
    );
  };

  return (
    <Card sx={{ ...sx, ...styles(ThemeSettings(theme), lgMatches).root }}>
      <Typography variant="h3">Who to follow</Typography>
      {content()}
    </Card>
  );
};

export default WhoToFollowCardComponent;

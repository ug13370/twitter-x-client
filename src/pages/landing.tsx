import {
  LogoComponent,
  NavBarComponent,
  WhoToFollowCardComponent,
} from "../page-components";
import HomePage from "./home";
import { useContext } from "react";
import ProfilePage from "./profile";
import HomeIcon from "@mui/icons-material/Home";
import { Box, useMediaQuery } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AppContext from "../utils/contexts/App/AppContext";
import AccountMenu from "../page-components/account-menu";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import { useLocation, useNavigate } from "react-router-dom";
import { DarkLightToggleComponent } from "../core-components";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const styles = () => {
  return {
    root: {
      display: "flex",
      height: "100vh",
      flexDirection: "row",
      justifyContent: "center",
      gap: "1.5rem",
    },
    navSection: {
      display: "grid",
      gridTemplateRows: "auto 1fr 1fr",
      gridTemplateColumns: "1fr",
      rowGap: 0.5,
      margin: "1rem 0rem 0rem 1rem",

      overflowY: "auto",
      minWidth: "4rem",

      LogoComponent: {
        justifySelf: "start",
      },
      NavBarComponent: {},
      AccountComponent: {
        alignSelf: "end",
      },
    },
    tweetsSection: {
      width: "40rem",
    },
    whoToFollow: {
      margin: "1rem 1rem 0rem 0rem",
    },
  };
};

const NavBarSection = (props: any) => {
  const { showJustIcons = false } = props;
  const navigate = useNavigate();

  const navs = [
    {
      id: "home",
      type: "router",
      label: "Home",
      onClick: () => {
        navigate("/Home");
      },
      activeIcon: HomeIcon,
      icon: HomeOutlinedIcon,
    },
    {
      id: "profile",
      type: "router",
      label: "Profile",
      onClick: () => {
        navigate("/Profile");
      },
      activeIcon: PersonIcon,
      icon: PersonOutlineIcon,
    },
    {
      id: "post",
      label: "Post",
      type: "action",
      onClick: () => {},
      icon: HistoryEduIcon,
    },
  ];

  return <NavBarComponent showJustIcons={showJustIcons} navs={navs} />;
};

const Landing = (props: any) => {
  const lgMatches = useMediaQuery((theme: any) => theme.breakpoints.down("lg"));
  const mdMatches = useMediaQuery((theme: any) => theme.breakpoints.down("md"));

  const location = useLocation();

  const { userDetails } = useContext(AppContext);

  return (
    <>
      <Box sx={styles().root}>
        <DarkLightToggleComponent />
        <Box sx={styles().navSection}>
          <LogoComponent
            width="3.5rem"
            sx={styles().navSection.LogoComponent}
          />
          <NavBarSection
            showJustIcons={lgMatches}
            sx={styles().navSection.NavBarComponent}
          />
          <AccountMenu
            showJustIcons={lgMatches}
            userDetails={userDetails}
            sx={styles().navSection.AccountComponent}
          />
        </Box>

        {location.pathname === "/Home" && (
          <HomePage sx={styles().tweetsSection} />
        )}
        {location.pathname === "/Profile" && <ProfilePage />}

        {!mdMatches && (
          <WhoToFollowCardComponent
            lgMatches={lgMatches}
            sx={styles().whoToFollow}
          />
        )}
      </Box>
    </>
  );
};

export default Landing;

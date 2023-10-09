import {
  LogoComponent,
  NavBarComponent,
  WhoToFollowCardComponent,
} from "../page-components";
import HomePage from "./home";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AccountMenu from "../page-components/account-menu";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
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
    },
    navSection: {
      display: "grid",
      gridTemplateRows: "auto 1fr 1fr",
      gridTemplateColumns: "1fr",
      rowGap: 0.5,
      margin: "1rem 1.5rem",

      overflowY: "auto",

      LogoComponent: {
        justifySelf: "start",
      },
      NavBarComponent: {},
      AccountComponent: {
        alignSelf: "end",
      },
    },
    tweetsSection: {
      maxWidth: "40rem",
    },
  };
};

const NavBarSection = (props: any) => {
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

  return <NavBarComponent navs={navs} />;
};

const Landing = (props: any) => {
  return (
    <>
      <Box sx={styles().root}>
        <DarkLightToggleComponent />
        <Box sx={styles().navSection}>
          <LogoComponent
            width="3.5rem"
            sx={styles().navSection.LogoComponent}
          />
          <NavBarSection sx={styles().navSection.NavBarComponent} />
          <AccountMenu sx={styles().navSection.AccountComponent} />
        </Box>
        <HomePage sx={styles().tweetsSection} />
        <WhoToFollowCardComponent />
      </Box>
    </>
  );
};

export default Landing;

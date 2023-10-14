import { Box, SvgIcon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "../core-components";
import { createContext, useContext, useState } from "react";

const styles = () => {
  return {
    root: {
      gap: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  };
};

const NavigationContext = createContext<any>(null);
const NavigationContextProvider = ({ children }: any) => {
  const [activeNav, setActiveNav] = useState<string>("home");
  return (
    <NavigationContext.Provider value={{ activeNav, setActiveNav }}>
      {children}
    </NavigationContext.Provider>
  );
};

const SingleNav = (props: any) => {
  const { nav, showJustIcons = false } = props;
  const navigate = useNavigate();
  const { activeNav, setActiveNav } = useContext(NavigationContext);

  return (
    <>
      {nav.type === "router" && (
        <ButtonComponent
          id={nav.id}
          padding={0.8}
          fontSize={1.7}
          borderRadius={10}
          fullWidth={false}
          typography="normalButton"
          onClick={() => {
            navigate(`/${nav.label}`);
            setActiveNav(nav.id);
          }}
          showJustIcon={showJustIcons}
          active={activeNav === nav.id}
          startIcon={<SvgIcon component={nav.icon}></SvgIcon>}
          activeStartIcon={<SvgIcon component={nav.activeIcon}></SvgIcon>}
        >
          {nav.label}
        </ButtonComponent>
      )}

      {nav.type === "action" && (
        <ButtonComponent
          id={nav.id}
          padding={0.8}
          fontSize={1.3}
          borderRadius={10}
          variant="contained"
          onClick={nav.onClick}
          typography="primaryButton"
          showJustIcon={showJustIcons}
          fullWidth={showJustIcons ? false : true}
          startIcon={<SvgIcon component={nav.icon}></SvgIcon>}
          activeStartIcon={<SvgIcon component={nav.activeIcon}></SvgIcon>}
        >
          {nav.label}
        </ButtonComponent>
      )}
    </>
  );
};

const NavBar = (props: any) => {
  const { navs = [], classname, sx = {}, showJustIcons = false } = props;

  return (
    <NavigationContextProvider>
      <Box className={classname} sx={{ ...styles().root, ...sx }}>
        {navs.map((nav: any) => {
          return <SingleNav showJustIcons={showJustIcons} nav={nav} />;
        })}
      </Box>
    </NavigationContextProvider>
  );
};

export default NavBar;

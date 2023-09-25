import { Box, SvgIcon } from "@mui/material";
import { ButtonComponent } from "../core-components";

const styles = () => {
  return {
    root: {
      gap: 3,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  };
};

const SingleNav = (nav: any) => {
  return (
    <>
      <ButtonComponent
        scale={1.7}
        padding={1}
        variant="text"
        borderRadius={10}
        fullWidth={false}
        onClick={nav.onClick}
        typography="normalButton"
        startIcon={<SvgIcon component={nav.icon}></SvgIcon>}
      >
        {nav.label}
      </ButtonComponent>
    </>
  );
};

const NavBar = (props: any) => {
  const { navs, classname, sx = {} } = props;

  return (
    <Box className={classname} sx={{ ...styles().root, ...sx }}>
      {navs.map((nav: any) => {
        return SingleNav(nav);
      })}
    </Box>
  );
};

export default NavBar;

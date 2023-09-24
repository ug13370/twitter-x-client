/** React Imports */

/** MUI Imports */
import { useMediaQuery } from "@mui/material";

/** SCSS Imports */

/** Context Imports */

/** Component Imports */
import { DarkLightToggleComponent } from "../core-components";
import { AuthDetailsComponent, LogoComponent } from "../page-components";

/** Other Imports */

const Auth = (props: any) => {
  const matches = useMediaQuery((theme: any) => theme.breakpoints.down("md"));

  return (
    <div className="auth-page">
      <DarkLightToggleComponent />
      {!matches && <LogoComponent width="32rem" minWidth="20rem" />}
      <AuthDetailsComponent />
    </div>
  );
};

export default Auth;

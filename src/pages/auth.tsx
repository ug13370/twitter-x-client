import { useMediaQuery } from "@mui/material";
import { AuthDetailsComponent, LogoComponent } from "../page-components";

const Auth = (props: any) => {
  const matches = useMediaQuery((theme: any) => theme.breakpoints.down("md"));

  return (
    <div className="auth-page">
      {!matches && <LogoComponent width="32rem" minWidth="20rem" />}
      <AuthDetailsComponent />
    </div>
  );
};

export default Auth;

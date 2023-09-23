import { AuthDetailsComponent, LogoComponent } from "../page-components";

const Auth = (props: any) => {
  return (
    <div className="auth-page">
      <LogoComponent width="32rem" minWidth="20rem" />
      <AuthDetailsComponent />
    </div>
  );
};

export default Auth;

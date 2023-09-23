import { AuthDetailsComponent, LogoComponent } from "../page-components";

const Auth = (props: any) => {
  return (
    <div className="auth-page">
      <LogoComponent className="logo"/>
      <AuthDetailsComponent className="auth-details" />
    </div>
  );
};

export default Auth;

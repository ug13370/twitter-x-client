import {
  CardComponent,
  ButtonComponent,
  TextFieldComponent,
} from "../core-components";
import { LogoComponent } from ".";
import { useMediaQuery } from "@mui/material";

const AuthDetails = (props: any) => {
  const matches = useMediaQuery((theme: any) => theme.breakpoints.down("md"));

  const renderAuthCardContent = () => {
    return (
      <>
        <TextFieldComponent
          id="name"
          required={true}
          label="Full Name"
          borderRadius={1}
        ></TextFieldComponent>
        <TextFieldComponent
          id="email_id"
          required={true}
          label="Email Id"
          borderRadius={1}
        ></TextFieldComponent>
        <TextFieldComponent
          id="password"
          required={true}
          type="password"
          label="Password"
          borderRadius={1}
          helperText="Password must be at least 2 characters long."
        ></TextFieldComponent>
      </>
    );
  };

  const renderAuthCardActions = () => {
    return (
      <>
        <ButtonComponent
          borderRadius={1.2}
          variant="contained"
          typography="primaryButton"
        >
          Signup
        </ButtonComponent>
        <ButtonComponent
          borderRadius={1.2}
          variant="outlined"
          typography="secondaryButton"
        >
          Already have an account
        </ButtonComponent>
      </>
    );
  };

  const renderLogo = () => {
    return <>{matches ? <LogoComponent width="5rem" /> : null}</>;
  };

  return (
    <CardComponent
      shadowLevel={4}
      borderRadius={3}
      title="Join Today."
      logo={renderLogo()}
      content={renderAuthCardContent()}
      actions={renderAuthCardActions()}
    ></CardComponent>
  );
};

export default AuthDetails;

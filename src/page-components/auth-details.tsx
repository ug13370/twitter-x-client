import {
  CardComponent,
  ButtonComponent,
  TextFieldComponent,
} from "../core-components";

const AuthDetails = (props: any) => {
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

  return (
    <CardComponent
      title="Join Today."
      content={renderAuthCardContent()}
      actions={renderAuthCardActions()}
    ></CardComponent>
  );
};

export default AuthDetails;

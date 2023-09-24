import {
  CardComponent,
  ButtonComponent,
  TextFieldComponent,
  DatePickerComponent,
} from "../core-components";
import { LogoComponent } from ".";
import { useMediaQuery } from "@mui/material";
import { createContext, useContext, useState } from "react";

const ToggleContext = createContext<any>(null);
const ToggleContextProvider = ({ children }: any) => {
  const [signupMode, setSignupMode] = useState(true);
  return (
    <ToggleContext.Provider value={{ signupMode, setSignupMode }}>
      {children}
    </ToggleContext.Provider>
  );
};

const AuthCardActions = () => {
  const { signupMode, setSignupMode } = useContext(ToggleContext);

  const onAuthLayerChange = () => {
    setSignupMode((prevMode: boolean) => !prevMode);
  };
  return (
    <>
      <ButtonComponent
        borderRadius={1.2}
        variant="contained"
        typography="primaryButton"
      >
        {signupMode ? "Signup" : "Signin"}
      </ButtonComponent>
      <ButtonComponent
        borderRadius={1.2}
        variant="outlined"
        onClick={onAuthLayerChange}
        typography="secondaryButton"
      >
        {signupMode ? "Already have an account?" : "Don't have an account?"}
      </ButtonComponent>
    </>
  );
};

const AuthCardContent = () => {
  const { signupMode } = useContext(ToggleContext);

  return (
    <>
      {signupMode && (
        <TextFieldComponent
          id="name"
          required={true}
          label="Full Name"
          borderRadius={2}
        ></TextFieldComponent>
      )}
      <TextFieldComponent
        id="email_id"
        required={true}
        label="Email Id"
        borderRadius={2}
      ></TextFieldComponent>
      {signupMode && (
        <DatePickerComponent
          required={true}
          borderRadius={2}
          label="Date of birth"
        ></DatePickerComponent>
      )}
      <TextFieldComponent
        id="password"
        required={true}
        type="password"
        label="Password"
        borderRadius={2}
      ></TextFieldComponent>
    </>
  );
};

const Logo = () => {
  const matches = useMediaQuery((theme: any) => theme.breakpoints.down("md"));
  return <>{matches ? <LogoComponent width="5rem" /> : null}</>;
};

const Title = () => {
  const { signupMode } = useContext(ToggleContext);

  return <>{signupMode ? "Join Today!" : "Let's enjoy some tweets!"}</>;
};

const AuthDetails = (props: any) => {
  return (
    <ToggleContextProvider>
      <CardComponent
        logo={<Logo />}
        shadowLevel={4}
        borderRadius={3}
        title={<Title />}
        content={<AuthCardContent />}
        actions={<AuthCardActions />}
      ></CardComponent>
    </ToggleContextProvider>
  );
};

export default AuthDetails;

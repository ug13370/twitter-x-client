/** React Imports */
// import { useNavigate } from "react-router-dom";
import { createContext, useContext, useState } from "react";

/** MUI Imports */
import { IconButton, InputAdornment, useMediaQuery } from "@mui/material";

/** SCSS Imports */

/** Context Imports */

/** Component Imports */
import {
  CardComponent,
  ButtonComponent,
  TextFieldComponent,
  DatePickerComponent,
} from "../core-components";
import { LogoComponent } from ".";
import { createNewUser, loginUser } from "../apis/auth";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import AlertContext from "../utils/contexts/Alert/AlertContext";

/** Other Imports */

/** Contexts */
const ToggleContext = createContext<any>(null);
const ToggleContextProvider = ({ children }: any) => {
  const [signupMode, setSignupMode] = useState(false);
  return (
    <ToggleContext.Provider value={{ signupMode, setSignupMode }}>
      {children}
    </ToggleContext.Provider>
  );
};

const AuthFieldsContext = createContext<any>(null);
const AuthFieldsContextProvider = ({ children }: any) => {
  const [dob, setDob] = useState({
    value: null,
    error: false,
    id: "dob",
    helperText: "",
  });
  const [name, setName] = useState({
    value: "",
    error: false,
    id: "name",
    helperText: "",
  });
  const [userId, setUserId] = useState({
    value: "",
    error: false,
    id: "userId",
    helperText: "",
  });
  const [emailId, setEmailId] = useState({
    value: "",
    error: false,
    id: "emailId",
    helperText: "",
  });
  const [password, setPassword] = useState({
    value: "",
    error: false,
    id: "password",
    helperText: "",
  });

  return (
    <AuthFieldsContext.Provider
      value={{
        dob,
        name,
        userId,
        setDob,
        setName,
        emailId,
        password,
        setUserId,
        setEmailId,
        setPassword,
      }}
    >
      {children}
    </AuthFieldsContext.Provider>
  );
};

const AuthCardActions = () => {
  // const navigate = useNavigate();

  const [authLayerFiring, setAuthLayerFiring] = useState(false);

  const {
    dob,
    name,
    userId,
    setDob,
    setName,
    emailId,
    password,
    setUserId,
    setEmailId,
    setPassword,
  } = useContext(AuthFieldsContext);
  const { setAlert } = useContext(AlertContext);
  const { signupMode, setSignupMode } = useContext(ToggleContext);

  const onAuthLayerChange = () => {
    setSignupMode((prevMode: boolean) => {
      resetAllFields();
      return !prevMode;
    });
  };

  const onAuthLayerFiring = (authMethod: string) => {
    if (authMethod === "signup")
      apiCall_createNewUser({
        dob: dob.value,
        name: name.value,
        user_id: "@" + userId.value,
        email_id: emailId.value,
        password: password.value,
      });
    else
      apiCall_loginUser({ email_id: emailId.value, password: password.value });
    // navigate("/Home", { replace: true });
  };

  const resetAllFields = () => {
    setDob({
      value: null,
      error: false,
      id: "dob",
      helperText: "",
    });
    setName({
      value: "",
      error: false,
      id: "name",
      helperText: "",
    });
    setUserId({
      value: "",
      error: false,
      id: "userId",
      helperText: "",
    });
    setEmailId({
      value: "",
      error: false,
      id: "emailId",
      helperText: "",
    });
    setPassword({
      value: "",
      error: false,
      id: "password",
      helperText: "",
    });
  };

  const resetAllErrors = () => {
    setUserId((prevVal: any) => {
      return { ...prevVal, error: false, helperText: "" };
    });
    setName((prevVal: any) => {
      return { ...prevVal, error: false, helperText: "" };
    });
    setEmailId((prevVal: any) => {
      return { ...prevVal, error: false, helperText: "" };
    });
    setPassword((prevVal: any) => {
      return {
        ...prevVal,
        error: false,
        helperText: "",
      };
    });
    setDob((prevVal: any) => {
      return { ...prevVal, error: false, helperText: "" };
    });
  };

  const handleErroInAuthLayerFiring = (error: any) => {
    if (typeof error.details !== "string")
      error.details.forEach((detail: any) => {
        if (detail.context.key === "user_id") {
          setUserId((prevVal: any) => {
            return {
              ...prevVal,
              error: true,
              helperText: detail.message
                .replaceAll(`${detail.context.key}`, "User id")
                .replaceAll('"', ""),
            };
          });
        }
        if (detail.context.key === "name") {
          setName((prevVal: any) => {
            return {
              ...prevVal,
              error: true,
              helperText: detail.message
                .replaceAll(`${detail.context.key}`, "Name")
                .replaceAll('"', ""),
            };
          });
        }
        if (detail.context.key === "email_id") {
          setEmailId((prevVal: any) => {
            return {
              ...prevVal,
              error: true,
              helperText: detail.message
                .replaceAll(`${detail.context.key}`, "Email id")
                .replaceAll('"', ""),
            };
          });
        }
        if (detail.context.key === "password") {
          setPassword((prevVal: any) => {
            return {
              ...prevVal,
              error: true,
              helperText: detail.message
                .replaceAll(`${detail.context.key}`, "Password")
                .replaceAll('"', ""),
            };
          });
        }
        if (detail.context.key === "dob") {
          setDob((prevVal: any) => {
            return {
              ...prevVal,
              error: true,
              helperText: detail.message
                .replaceAll(`${detail.context.key}`, "Dob")
                .replaceAll('"', ""),
            };
          });
        }
      });
  };

  const apiCall_createNewUser = (payload: any) => {
    setAuthLayerFiring(true);
    createNewUser(payload)
      .then((res: any) => {
        if (res.status === "success") {
          resetAllFields();
          onAuthLayerChange();
          setAlert({
            id: "auth",
            type: "success",
            message: "Signup completed. Please signin.",
            variant: "filled",
          });
        } else {
          resetAllErrors();
          handleErroInAuthLayerFiring(res);
          setAlert({
            id: "auth",
            type: "error",
            message: "Could not signup. Please fill all the details correctly.",
            variant: "filled",
          });
        }
      })
      .catch((err: any) => {
        console.log("apiCall_createNewUser error:", err);
        resetAllFields();
        setAlert({
          id: "auth",
          type: "error",
          message: "API failed to load response.",
          variant: "filled",
        });
      })
      .finally(() => {
        setAuthLayerFiring(false);
      });
  };

  const apiCall_loginUser = (payload: any) => {
    setAuthLayerFiring(true);
    loginUser(payload)
      .then((res: any) => {
        if (res.status === "success") {
          resetAllFields();
          setAlert({
            id: "auth",
            type: "success",
            message: "Successfully signed in.",
            variant: "filled",
          });
        } else {
          resetAllErrors();
          handleErroInAuthLayerFiring(res);
          setAlert({
            id: "auth",
            type: "error",
            message: "Could not singin. Please fill all the details correctly.",
            variant: "filled",
          });
        }
      })
      .catch((err: any) => {
        console.log("apiCall_loginUser error:", err);
        resetAllFields();
        setAlert({
          id: "auth",
          type: "error",
          message: "API failed to load response.",
          variant: "filled",
        });
      })
      .finally(() => {
        setAuthLayerFiring(false);
      });
  };

  return (
    <>
      <ButtonComponent
        padding={0.5}
        borderRadius={1.2}
        variant="contained"
        loading={authLayerFiring}
        typography="primaryButton"
        onClick={() => {
          onAuthLayerFiring(signupMode ? "signup" : "signin");
        }}
      >
        {signupMode ? "Signup" : "Signin"}
      </ButtonComponent>
      <ButtonComponent
        padding={0.5}
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
  const {
    dob,
    name,
    userId,
    setDob,
    setName,
    emailId,
    password,
    setUserId,
    setEmailId,
    setPassword,
  } = useContext(AuthFieldsContext);

  const onFieldChange = (type: string, value: any) => {
    if (type === "name")
      setName((prevVal: any) => {
        return { ...prevVal, value: value };
      });
    else if (type === "emailId")
      setEmailId((prevVal: any) => {
        return { ...prevVal, value: value };
      });
    else if (type === "userId")
      setUserId((prevVal: any) => {
        return { ...prevVal, value: value };
      });
    else if (type === "dob")
      setDob((prevVal: any) => {
        return { ...prevVal, value: value };
      });
    else if (type === "password")
      setPassword((prevVal: any) => {
        return { ...prevVal, value: value };
      });
    else if (type === "dob")
      setDob((prevVal: any) => {
        return { ...prevVal, value: value };
      });
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const renderSingupFields = () => {
    return (
      <>
        <TextFieldComponent
          id="name"
          value={name}
          required={true}
          borderRadius={2}
          label="Full Name"
          error={name.error}
          onChange={onFieldChange}
          helperText={name.helperText}
        ></TextFieldComponent>
        <TextFieldComponent
          id="email_id"
          value={emailId}
          required={true}
          label="Email Id"
          borderRadius={2}
          error={emailId.error}
          onChange={onFieldChange}
          helperText={emailId.helperText}
        ></TextFieldComponent>
        <TextFieldComponent
          id="user_id"
          value={userId}
          required={true}
          label="User Id"
          borderRadius={2}
          error={userId.error}
          onChange={onFieldChange}
          helperText={userId.helperText}
          startAdornment={<InputAdornment position="start">@</InputAdornment>}
        ></TextFieldComponent>
        <DatePickerComponent
          value={dob}
          required={true}
          borderRadius={2}
          error={dob.error}
          label="Date of birth"
          onChange={onFieldChange}
          helperText={dob.helperText}
        ></DatePickerComponent>
        <TextFieldComponent
          id="password"
          required={true}
          label="Password"
          value={password}
          borderRadius={2}
          error={password.error}
          onChange={onFieldChange}
          helperText={password.helperText}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        ></TextFieldComponent>
      </>
    );
  };

  const renderSigninFields = () => {
    return (
      <>
        <TextFieldComponent
          id="email_id"
          value={emailId}
          required={true}
          label="Email Id"
          borderRadius={2}
          error={emailId.error}
          onChange={onFieldChange}
          helperText={emailId.helperText}
        ></TextFieldComponent>
        <TextFieldComponent
          id="password"
          required={true}
          label="Password"
          value={password}
          borderRadius={2}
          error={password.error}
          onChange={onFieldChange}
          helperText={password.helperText}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        ></TextFieldComponent>
      </>
    );
  };

  return (
    <>
      {signupMode && renderSingupFields()}
      {!signupMode && renderSigninFields()}
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
      <AuthFieldsContextProvider>
        <CardComponent
          logo={<Logo />}
          shadowLevel={4}
          borderRadius={3}
          title={<Title />}
          content={<AuthCardContent />}
          actions={<AuthCardActions />}
        ></CardComponent>
      </AuthFieldsContextProvider>
    </ToggleContextProvider>
  );
};

export default AuthDetails;

import { Card, CardActions, CardContent, Typography } from "@mui/material";
import {
  ButtonComponent,
  StackComponent,
  TextFieldComponent,
} from "../core-components";

const AuthDetails = (props: any) => {
  const { className } = props;
  return (
    <Card className={className}>
      <CardContent>
        <StackComponent alignItems="flex-start">
          <Typography variant="h1">Join Today.</Typography>
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
        </StackComponent>
      </CardContent>
      <CardActions>
        <StackComponent spacing={1}>
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
        </StackComponent>
      </CardActions>
    </Card>
  );
};

export default AuthDetails;

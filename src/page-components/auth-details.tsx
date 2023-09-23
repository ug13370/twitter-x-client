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
          ></TextFieldComponent>
          <TextFieldComponent
            id="email_id"
            required={true}
            label="Email Id"
          ></TextFieldComponent>
          <TextFieldComponent
            id="password"
            required={true}s
            type="password"
            label="Password"
            helperText="Password must be at least 2 characters long."
          ></TextFieldComponent>
        </StackComponent>
      </CardContent>
      <CardActions>
        <StackComponent spacing={1}>
          <ButtonComponent variant="contained" typography="primaryButton">
            Signup
          </ButtonComponent>
          <ButtonComponent variant="outlined" typography="secondaryButton">
            Already have an account
          </ButtonComponent>
        </StackComponent>
      </CardActions>
    </Card>
  );
};

export default AuthDetails;

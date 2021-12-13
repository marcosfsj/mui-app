import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, TextField, Grid } from "@mui/material";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required!"),
  lastName: yup.string().required("Last Name is required!"),
  age: yup.number().required("Age is required!"),
});

const App = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmitHandler = handleSubmit((data) => console.log(data));

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={formSubmitHandler}>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="First Name"
                  error={!!errors.firstName}
                  helperText={errors.firstName ? errors.firstName.message : ""}
                />
              )}
            />
          </Grid>
          <Grid item>
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    label="Last Name"
                    error={!!errors.lastName}
                    helperText={errors.lastName ? errors.lastName.message : ""}
                  />
                );
              }}
            />
          </Grid>
          <Grid item>
            {" "}
            <Controller
              name="age"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Age"
                  error={!!errors.age}
                  helperText={errors.age ? errors.age.message : ""}
                />
              )}
            />
          </Grid>
          <Grid item>
            <Button type="submit">Submit</Button>
          </Grid>
        </Grid>
      </form>
    </ThemeProvider>
  );
};

export default App;

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Button, TextField } from "@mui/material";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button>Button1</Button>
      <Button>Button2</Button>
      <TextField label="First Name" />
    </ThemeProvider>
  );
};

export default App;

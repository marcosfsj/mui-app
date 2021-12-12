import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { Button } from "@mui/material";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
    </ThemeProvider>
  );
};

export default App;

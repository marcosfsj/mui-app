import { createTheme } from "@mui/material";
import { deepPurple, amber, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: amber[500],
      contrastText: deepPurple[900],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        color: "secondary",
        variant: "contained",
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          fontSize: "20px",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {},
      styleOverrides: {},
    },
    MuiInputLabel: {
      defaultProps: {},
      styleOverrides: {},
    },
    MuiTextField: {
      defaultProps: {
        variant: "filled",
      },
      styleOverrides: {},
    },
  },
});

export default theme;

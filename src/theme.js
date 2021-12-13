import { createTheme } from "@mui/material";
import { deepPurple, amber } from "@mui/material/colors";

const customRed = "#D30F41";

const theme = createTheme({
  palette: {
    common: { red: customRed },
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

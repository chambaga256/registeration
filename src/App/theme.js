import { createTheme } from "@material-ui/core";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#9bc400",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f832456",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  shape: {
    MuiCard:{
        borderRadius: "5px",
    }
  },
});

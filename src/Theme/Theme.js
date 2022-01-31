import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);
const CustomTheme = createTheme({
  palette: {
    primary: {
      light: "#ef4b4c",
      main: "#ef4b4c",
      dark: "171a1c",
      contrastText: "#fff",
    },
    secondary: {
      light: "#42506b",
      main: "#2a3950",
      dark: "#171a1c",
      contrastText: "#fff",
    },
    background: {
      default: "#171a1c",
    },
    fontSize: "1.1rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  },
});

export default CustomTheme;

import { createTheme } from "@mui/material/styles";

  const CustomTheme = createTheme({
    palette: {
      primary: {
        light: "#9ece5b",
        main: "#86c232",
        dark: "#5d8723",
        contrastText: "#86c232",
      },
      secondary: {
        light: "#4e5153",
        main: "#222629",
        dark: "#171a1c",
        contrastText: "#000",
      },
    },
  });

 export default CustomTheme

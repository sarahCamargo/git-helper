import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#E4E6F0",
      paper: "#F5F5F5",
    },
    primary: {
      main: "#416165",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#3C4A57",
      secondary: "#7D8590",
    },
    divider: "#D1D5DB",
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 6,
        },
        containedPrimary: {
          backgroundColor: "#416165",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#2E4B50",
          },
          "&:disabled": {
            backgroundColor: "#B0B8BC",
            color: "#FFFFFF",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#F5F5F5",
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;

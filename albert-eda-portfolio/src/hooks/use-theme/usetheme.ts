import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },

  typography: {
    fontFamily: "'Geist', sans-serif",
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "white",
          fontSize: "3.5rem",
          fontWeight: 700,
          lineHeight: "4rem",
          paddingBottom: "1.5rem",
        },
        h2: {
          color: "white",
          fontSize: "3rem",
          fontWeight: 700,
          lineHeight: "3.5rem",
        },
        h3: {
          color: "white",
          fontSize: "2.5rem",
          fontWeight: 700,
          lineHeight: "3rem",
        },
        h4: {
          color: "white",
          fontSize: "2rem",
          fontWeight: 700,
          lineHeight: "2.5rem",
        },
        h5: {
          color: "white",
          fontSize: "1.75rem",
          fontWeight: 700,
          lineHeight: "2rem",
        },
        h6: {
          color: "white",
          fontSize: "1.5rem",
          fontWeight: 700,
          lineHeight: "1.5rem",
        },
        subtitle1: {
          color: "white",
          fontSize: "1.25rem",
          fontWeight: 400,
          lineHeight: "1.5rem",
        },
        subtitle2: {
          color: "white",
          fontSize: "1.125rem",
          fontWeight: 400,
          lineHeight: "1.25rem",
        },
        body1: {
          color: "white",
          fontSize: "1rem",
          fontWeight: 400,
          lineHeight: "1.5rem",
        },
        body2: {
          color: "white",
          fontSize: "0.875rem",
          fontWeight: 300,
          lineHeight: "1.25rem",
        },
        button: {
          // color: 'white',
          fontSize: "1rem",
          fontWeight: 700,
          textTransform: "none",
        },
        overline: {
          color: "white",
          fontSize: "0.75rem",
          textTransform: "none",
          lineHeight: "unset",
        },
        caption: {
          color: "white",
          fontSize: "0.625rem",
          fontWeight: 500,
          lineHeight: "1rem",
        },
      },
    },
  },
});

export default theme;

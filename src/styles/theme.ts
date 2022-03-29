import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #e0e0e0",
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;

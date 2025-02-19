import { GlobalColors } from "@/lib/constants/theme/globalColors";
import { AppBar, Box, Toolbar } from "@mui/material";

export default function MainRootLayout({ shouldShow }) {
  if (!shouldShow) {
    return;
  }

  return (
    <Box
      style={{
        flex: 1,
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          bgcolor: GlobalColors.headerPrimary300,
          boxShadow: "none",
          borderBottomColor: GlobalColors.headerPrimary400,
          borderBottomWidth: "2px",
        }}
        variant="outlined"
      >
        <Toolbar>menu</Toolbar>
      </AppBar>
    </Box>
  );
}

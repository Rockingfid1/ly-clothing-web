import { GlobalColors } from "@/lib/constants/theme/globalColors";
import { Box, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      style={{
        height: "100vh",
        background: `linear-gradient(to bottom, ${GlobalColors.app_bg_gradient1}, ${GlobalColors.app_bg_gradient2})`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">This is the home page</Typography>
    </Box>
  );
}

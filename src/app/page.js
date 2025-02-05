"use client";

import { useEffect } from "react";
import { GlobalColors } from "../lib/constants/theme/globalColors";
import { redirect, usePathname } from "next/navigation";
import { ROUTES } from "@/lib/constants/routes/routes";
import { Box, CircularProgress } from "@mui/material";

export default function RootPage() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === ROUTES.ROOT) redirect(ROUTES.HOME);
  }, [pathname]);

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
      <CircularProgress
        thickness={2.5}
        size={80}
        sx={{
          color: GlobalColors.iconPrimaryGrey300,
        }}
      />
    </Box>
  );
}

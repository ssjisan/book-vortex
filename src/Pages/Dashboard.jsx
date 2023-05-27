import { Box, Typography } from "@mui/material";
// eslint-disable-next-line
import React from "react";
import Sidebar from "../Layout/Sidebar/Sidebar";

export default function Dashboard() {
  const drawerWidth = 280;

  return (
    <Box>
      <Sidebar />
      <Box
        sx={{
          p: 3,
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
        }}
      >
        <Typography color="text.1000">Overview</Typography>
      </Box>
    </Box>
  );
}

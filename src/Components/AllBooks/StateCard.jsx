import { Box, Grid, Typography } from "@mui/material";
// eslint-disable-next-line
import React from "react";

export default function StateCard() {
  return (
    <Box>
      <Grid spacing={2}>
        <Grid item md={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              background: "#FFFFFF",
              boxShadow:
                "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
              borderRadius: "6px",
            }}
          >
            <Typography
              sx={{ fontWeight: 700, fontSize: "14px", color: "#0D3B66" }}
            >
              Total Books
            </Typography>
            <Typography>1,239</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

import { Box, Toolbar, Typography } from '@mui/material'
// eslint-disable-next-line
import React from 'react'
import Sidebar from '../Layout/Sidebar/Sidebar'
import StateCard from '../Components/AllBooks/StateCard';

export default function AllBooks() {
    const drawerWidth = 280;

  return (
    <Box>
      <Sidebar />
      <Box
        component="main"
        sx={{
          p: 3,
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
        }}
      >
        <Toolbar />
        <Typography variant="h4" sx={{ mb: 5 }} color="text.1000">
          Hi, Welcome back
        </Typography>
      </Box>
    </Box>
  )
}

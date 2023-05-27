import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
} from "@mui/material";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
// eslint-disable-next-line
import React from "react";
import AccountPopOver from "./AccountPopOver";
import SearchBar from "./SearchBar";

const drawerWidth = 280;
// eslint-disable-next-line
export default function Navbar({ handleDrawerToggle }) {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: { lg: `calc(100% - ${drawerWidth}px)` },
                ml: { lg: `${drawerWidth}px` },
            }}
            style={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                boxShadow: "none",
                borderBottom:"1px dashed #E0E0E0"
            }}
        >
            <Toolbar>
                <IconButton
                    color="default"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { lg: "none" } }}
                >
                    <MenuOpenRoundedIcon />
                </IconButton>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <SearchBar/>
                    <AccountPopOver />
                </Box>
            </Toolbar>
        </AppBar>
    );
}
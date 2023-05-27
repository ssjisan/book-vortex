// eslint-disable-next-line
import react from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
// import Navbar from "../Navbar/Navbar";
import  menuConfig  from "./MenuConfig";
import { ListItem, ListItemButton, Typography,List,ListItemIcon } from "@mui/material";
import Navbar from "../Navbar/Navbar";
const drawerWidth = 280;

function Sidebar(props) {
  // eslint-disable-next-line
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    fontWeight: 700,
    borderRadius: "10px",
  };
  
  const { pathname } = useLocation();
  
  const drawer = (
    <div>
      <Box sx={{ pl: 2.5, pt: 3, pb: 4, display: "inline-flex" }}>
        <img src="Assets/book-vortex.svg" alt="React Logo" />
      </Box>
      <List>
        {menuConfig.map((item) => (
          <>
            <Link to={item.link} style={linkStyle} key={item.id}>
              <ListItem
                key={item.id}
                disablePadding
                sx={{
                  ml: 1.5,
                  background:pathname === item.link && "rgba(13, 59, 102, 0.08)",
                  borderRadius: "10px",
                  width: "245px",
                  height: "44px",
                }}
              >
                <ListItemButton
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    borderRadius: "10px",
                    width: "100%",
                    padding: "8px 16px 8px 16px",
                    height: "44px",
                    color: pathname === item.link ? "#0D3B66" : "#757575",
                  }}
                >
                   <ListItemIcon
                    sx={{
                      color: pathname === item.link ? "#0D3B66" : "#757575",
                      marginRight: "16px",
                      minWidth: "24px",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <Typography
                    sx={{
                      fontWeight: pathname === item.link ? 600 : 500,
                      fontSize: "14px",
                    }}
                  >
                    {item.title}
                  </Typography>
                </ListItemButton>
              </ListItem>
            </Link>
          </>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRightStyle: "dashed",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Sidebar;
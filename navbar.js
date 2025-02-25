import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import facebook from "../../assets/images/footer/facebook.png";
import linkedin from "../../assets/images/footer/linkedin.png";
import github from "../../assets/images/footer/github.png";
import instagram from "../../assets/images/footer/instagram.png";
import gmail from "../../assets/icons/gmail.png";

const drawerWidth = 240;
const navItems = ["Home", "Services", "Skills", "Projects", "Contact"];

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navigate = (item) => {
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView();
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Syed Umair Hussain
      </Typography>
      <Typography variant="body1">Full stack engineer</Typography>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        margin={2}
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/profile.php?id=100088257166763"
        >
          <img alt="default" src={facebook} width={15} height={15} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/syedumairhussain1998/"
        >
          <img alt="default" src={linkedin} width={15} height={15} />
        </a>
        <a target="_blank" rel="noreferrer" href="/">
          <img alt="default" src={instagram} width={15} height={15} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/syedumairh1998"
        >
          <img alt="default" src={github} width={15} height={15} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:syedumairhussain1998me@gmail.com"
        >
          <img alt="default" src={gmail} width={15} height={15} />
        </a>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(item);
              }}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        style={{ backgroundColor: "transparent" }}
        elevation={0}
        component="nav"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          ></Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                onClick={() => {
                  navigate(item);
                }}
                key={item}
                sx={{ color: "white" }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import DashboardTwoToneIcon from "@material-ui/icons/DashboardTwoTone";
import {
  CustomizedTables,
  DrawerMenu,
  ImpactCard,
  TextTitle,
  YaagCard,
} from "../../components";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";
import SettingsIcon from "@material-ui/icons/Settings";
import ShareIcon from "@material-ui/icons/Share";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Login from "../SignIn/SignIn";
import { Redirect } from "react-router-dom";
import Logo from "../../assets/logo-black.png";
import Earth from "../../assets/earth.png";
import Map from "../../assets/india-map.png";
import Lic from "../../assets/lic-hand.png";
import PeopleGroup from "../../assets/people-group.png";
import PersonIcon from "@material-ui/icons/Person";
import Community from "../../assets/community.png";
import { Box } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { DataGrid } from "@material-ui/data-grid";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      //   flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      background: "#fff",
      display: "flex",
      justifyContent: "space-between",
    },
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    color: "#000",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function MyYaag(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [component, setComponent] = useState("Home");
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <DrawerMenu
        title="Dashboard"
        onClick={() => props.history.push("/home")}
        Type={DashboardTwoToneIcon}
      />
      <DrawerMenu title="My YAAG" Type={CreateNewFolderIcon} />
      <DrawerMenu title="Your Impact & Rewards" Type={GraphicEqIcon} />
      <DrawerMenu title="Setting" Type={SettingsIcon} />
      <DrawerMenu title="Help & Support" Type={DashboardTwoToneIcon} />
      <DrawerMenu title="Share App" Type={ShareIcon} />
      <DrawerMenu
        title="Logout"
        onClick={() => props.history.push("/")}
        Type={ExitToAppIcon}
      />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className="navbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon style={{ color: "#2C7973" }} />
          </IconButton>
          <Typography
            variant="h6"
            style={{ color: "#2C7973", fontWeight: "600" }}
          >
            My YAAGs
          </Typography>
          <div className="drawer-icon">
            <PersonIcon
              style={{
                margin: 4,
                color: "#fff",
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="menu">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {
          <div className="margin">
            <span className="welcome-text">Welcome Rajib</span>
            <div className="dashboard-title">
              <span className="dashboard-title-text">
                Choose the yaag you want to play
              </span>
            </div>
          </div>
        }
      </main>
    </div>
  );
}

MyYaag.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MyYaag;

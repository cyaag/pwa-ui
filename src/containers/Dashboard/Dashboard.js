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

function Dashboard(props) {
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

      {/* <List>
        {[
          "Dashboard",
          "My YAAG",
          "Your Impact & Rewards",
          "Settings",
          "Help & Support",
          "Share App",
          "Logout",
        ].map((text, index) => (
          <ListItem button onClick={() => setComponent(text)} key={text}>
            <ListItemIcon
              style={{
                
              }}
            >
              {index % 1 === 0 ? (
                <DashboardTwoToneIcon style={{ color: "#fff" }} />
              ) : (
                <MailIcon />
              )}
            </ListItemIcon>
            <ListItemText style={{ padding: 8 }} primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider /> */}
      <DrawerMenu title="Dashboard" Type={DashboardTwoToneIcon} />
      <DrawerMenu
        title="My YAAG"
        onClick={() => props.history.push("/myYaag")}
        Type={CreateNewFolderIcon}
      />
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
          <img alt="logo" src={Logo} style={{ width: 80, height: 64 }} />
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
            <div className="card-container">
              {/* <YaagCard
                image={Logo}
                title="Phool"
                price="200"
                points="2000pts"
                days="09"
                hours="17"
                minutes="16"
              /> */}
              <List style={{ display: "flex", width: "100%" }}>
                {["Phool", "Kamal kisan"].map((text, index) => (
                  <YaagCard
                    image={Logo}
                    title={text}
                    price="200"
                    points="2000pts"
                    days="09"
                    hours="17"
                    minutes="16"
                  />
                ))}
              </List>
            </div>
            <div className="dashboard-rewards">
              <span className="dashboard-rewards-text">My total rewards</span>
              <div className="rewards">
                <Typography variant="h5" className="rewards-text">
                  ₹2,700
                </Typography>
                <Typography variant="h5" className="rewards-text">
                  270200 pts
                </Typography>
              </div>
            </div>
            <div className="overall">
              <div className="overall-level">
                <Typography variant="h6">MY OVERALL LEVEL</Typography>
                <Rating name="customized-5" defaultValue={2} max={5} />
              </div>
              <Typography variant="h6" style={{ fontWeight: "600" }}>
                76,000 points more will move you to next level
              </Typography>
            </div>
            <Divider />
            <div className="my-impact">
              <TextTitle title="My impact" />
              <div className="my-impact-item">
                <ImpactCard image={Earth} text="3700 TONS WASTE DIVERTED" />
                <ImpactCard image={PeopleGroup} text="17 PEOPLE EMPLOYED" />
                <ImpactCard image={Lic} text="₹2,70,800 REVENUE" />
              </div>
            </div>
            <Divider />
            <div className="my-impact">
              <TextTitle title="I Created a cyaag community" />
              <div className="community-item">
                <img src={Community} />
                <div>
                  <Typography
                    variant="h6"
                    style={{ color: "#F8B34C", fontWeight: "600" }}
                  >
                    1150 People
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{ color: "#F8B34C", fontWeight: "600" }}
                  >
                    ₹40,700 in rewards
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{ color: "#F8B34C", fontWeight: "600" }}
                  >
                    3,250,000 points
                  </Typography>
                </div>
              </div>
            </div>
            <Divider />
            <div className="my-impact">
              <TextTitle title="Regions i impacted" />
              <div>
                <img src={Map} />
              </div>
            </div>
            <Divider />
            <div className="my-impact">
              <TextTitle title="My yaags" />
              <div style={{ height: 400, width: "100%" }}>
                <CustomizedTables />
              </div>
            </div>
          </div>
        }
      </main>
      {component === "logout" && <Login />}
    </div>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;

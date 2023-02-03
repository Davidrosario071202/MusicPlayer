import "../App.css";
import React from "react";
import { Divider, makeStyles, Typography, useTheme } from "@material-ui/core";
import Drawer from "@mui/material/Drawer";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
// import { Link, NavLink, useHistory } from "react-router-dom";

const drawerWidth = "15%";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    paddingTop: 200
  },
  drawerPaper: {
    width: drawerWidth,
  },
  iconStyle: {
    color: "white",
    // alignItems: 'center',
  },
  textStyle: {
    fontSize: "14px",
    // textDecoration: none,
    // textAlign: "center",
  },
  divider: {
    backgroundColor: "grey",
  },
  h2: {
    color: "white",
  },
  sideBarHeader: {
    marginLeft: '15%',
    marginTop: '15%'
  },
  link: {
    color:"white",
    textDecoration: "none",
  },
  toolbar: theme.mixins.toolbar,
}));

function SideBar() {

  const theme = useTheme();
  const classes = useStyles();

  const menuItems = [
    {
      text: "HOME",
      icon: <HomeRoundedIcon />,
      path: '/main',
    },
    {
      text: "SEARCH",
      icon: <SearchRoundedIcon />,
      path: 'search',
    },
    // {
    //   text: "SETTINGS",
    //   icon: <SettingsRoundedIcon />,
    //   path: "/homepage/settings",
    // },
  ];

  return (
    <>
      <div className="sideBar">
        <Drawer
          className="drawer"
          variant="permanent"
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
          PaperProps={{
            sx: {
              height: "85%",
              bgcolor: "black",
              color: "white",
              borderRight: "0.25px solid  rgb(150, 149, 149)"
            },
          }}
        >
          <div className= {classes.sideBarHeader}>
            <Typography variant="h4"   classes={{ h2: classes.h2 }} >VIBEZY</Typography >
          </div>
          <br />
          <Divider className={classes.divider} />
          <List>
            {menuItems.map((item) => (
              // <NavLink to={item.path} key={item.text} className={classes.link}>
              <ListItem
                button
                >
                <ListItemIcon className={classes.iconStyle}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText classes={{primary: classes.textStyle}}
                primary={item.text} />
              </ListItem>
              // </NavLink>
            ))}
          </List>
          <br />
                <Divider className={classes.divider} />
        </Drawer>
      </div>
    </>
  );
}

export default SideBar;

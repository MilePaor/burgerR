import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle";

import classes from "./Toolbar.module.scss";

const Toolbar = props => {
  return (
    <header className={classes.toolbar}>
      <DrawerToggle openDrawer={props.openDrawer} />
      <Logo height="80%" />
      <nav className={classes.desktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;

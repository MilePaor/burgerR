import React from "react";
import classes from "./DrawerToggle.module.scss";

const DrawerToggle = props => {
  return (
    <div className={classes.DrawerToggle} onClick={props.openDrawer}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default DrawerToggle;

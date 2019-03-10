import React from "react";
import NavigationItem from "./NavigationItem";

import classes from "./NavigationItems.module.scss";

const NavigationItems = props => {
  return (
    <ul className={classes.navigationItems}>
      <NavigationItem link="/" active>
        Burger builder
      </NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  );
};

export default NavigationItems;

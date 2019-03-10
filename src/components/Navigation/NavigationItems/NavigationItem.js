import React from "react";

import classes from "./NavigationItems.module.scss";

const NavigationItem = props => {
  const { active, link } = props;
  return (
    <li className={classes.navigationItem}>
      <a href={link} className={active ? classes.active : null}>
        {props.children}
      </a>
    </li>
  );
};

export default NavigationItem;

import React from 'react';

import classes from './Layout.module.scss';

const layout = props => (
  <React.Fragment>
    <div className={classes.content__nav}>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.content__main}>{props.children}</main>
  </React.Fragment>
);

// on je ovde pravio hoc za wrappovanje umesto React.fragment
// props.children je da bi mogao sa app.js da ubacuje unutra komponente
export default layout;

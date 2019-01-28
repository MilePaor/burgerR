import React from "react";

import styles from "./BuildControl.module.css";

const BuildControl = props => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.label}</div>
      <button className={styles.Less} onClick={props.removeIngredientHandler}>
        Less
      </button>
      <button className={styles.More} onClick={props.addIngredientHandler}>
        More
      </button>
    </div>
  );
};

export default BuildControl;

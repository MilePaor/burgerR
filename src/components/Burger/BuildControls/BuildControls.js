import React from "react";

import BuildControl from "./BuildControl/BuildControl";

import styles from "./BuildControls.module.css";

const controls = [
  {
    label: "Salad",
    type: "salad"
  },
  {
    label: "Bacon",
    type: "bacon"
  },
  {
    label: "Cheese",
    type: "cheese"
  },
  {
    label: "Meat",
    type: "meat"
  }
];

const BuildControls = props => (
  <div className={styles.BuildControls}>
    {controls.map((c, a) => {
      console.log("c", c, "a", a);
      return (
        <BuildControl
          key={c.label}
          label={c.label}
          addIngredientHandler={e => props.addIngredientHandler(c.type, e)}
          removeIngredientHandler={e =>
            props.removeIngredientHandler(c.type, e)
          }
        />
      );
    })}
  </div>
);

export default BuildControls;

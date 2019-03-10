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

const BuildControls = props => {
  let {
    totalPrice,
    disabledInfo,
    purchaseable,
    ordered,
    removeIngredientHandler,
    addIngredientHandler
  } = props;

  return (
    <div className={styles.BuildControls}>
      <p>Current price: {totalPrice.toFixed(2)}</p>

      {controls.map((c, a) => (
        <BuildControl
          key={c.label}
          label={c.label}
          disabled={disabledInfo[c.type]}
          addIngredientHandler={e => addIngredientHandler(c.type, e)}
          removeIngredientHandler={e => removeIngredientHandler(c.type, e)}
        />
      ))}
      <button
        className={styles.OrderButton}
        disabled={!purchaseable}
        onClick={ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;

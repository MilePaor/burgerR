import React from "react";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const { ingredients, purchaseCanceled, purchaseContinued, price } = props;
  const ingredientSummary = Object.keys(ingredients).map(igKey => (
    <li key={igKey}>
      <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
      {ingredients[igKey]}
    </li>
  ));
  return (
    <React.Fragment>
      <h3>Your order</h3>
      <p>Burger with following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total price: {price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={purchaseCanceled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={purchaseContinued}>
        Continue
      </Button>
    </React.Fragment>
  );
};

export default orderSummary;

import classes from "./MealItems.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
const MealItems = (props) => {
  const price = `$${props.meal.price.toFixed(2)}`;
  const cartctx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartctx.addItems({
      id: props.meal.id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price
    })
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div><MealItemForm onAddToCart= {addToCartHandler}/></div>
    </li>
  );
  
};

export default MealItems;




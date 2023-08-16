import classes from "./MealItems.module.css";
import MealItemForm from "./MealItemForm";
const MealItems = (props) => {
  const price = `$${props.meal.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div><MealItemForm/></div>
    </li>
  );
};

export default MealItems;

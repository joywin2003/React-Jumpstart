import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCart.module.css"
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const HeaderCart = (props) => {
    const value = useContext(CartContext)
    const numberOfCartItems = value.items.reduce((curNumber, item) => {
        return curNumber+item.amount;
    },0)
    return (
        <>
            <button className={classes.button} onClick={props.showCartHandler}>
                <span className={classes.icon}><CartIcon /></span>
                <span>Your Cart</span>
                <span className={classes.badge}>{numberOfCartItems}</span>
            </button>
        </>
    )
}

export default HeaderCart;